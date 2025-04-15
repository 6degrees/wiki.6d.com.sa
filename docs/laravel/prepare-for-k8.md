# Prepare for Kubernetes (K8)

## Prerequisite

- a K8 cluster, whether it is on a cloud service provider such as linode, gcp, aws, or if you provision it entirely on your own servers, or on local pc using Minicube or others.
- Kubectl installed on your local machine (to handle work with the k8 cluster)
- configuring kubectl to your cluster
- dockerized Laravel
- a redis instance
- s3 buckets
- deployment files

## Cancel file system dependencies

### Move all images and media to S3, follow the tutorial

follow this guide <https://wiki.6degrees.com.sa/docs/laravel/migrate-to-s3>

### Cancel other filesystem dependencies

- Move logging to stdout so you can see it using `kubectl logs`
  in `config/logging.php` add:

  ```php
    'stdout' => [
        'driver' => 'monolog',
        'level' => env('LOG_LEVEL', 'debug'),
        'handler' => StreamHandler::class,
        'formatter' => env('LOG_STDOUT_FORMATTER'),
        'with' => [
            'stream' => 'php://stdout',
        ],
    ],
  ```

  then, set `LOG_CHANNEL` to `stdout` in configMap, secret (.env)

- install predis
  `composer require predis/predis`
  adjust configmap, secret or .env

  ```bash
    REDIS_CLIENT: "predis"
    REDIS_PREFIX: "yourappname-prod_"
    REDIS_HOST: "redis.redis.svc.cluster.local" # for k8 cluster
    REDIS_PORT: "6379"
  ```

- Make caching driver redis
  
  ```bash
  CACHE_DRIVER: "redis"
  ```

- Make session driver redis
  
  ```bash
  SESSION_DRIVER: "redis"
  ```

> now you have a floating flying larval, one more thing to make things sweet.

## Enhance dockerization

instead of having php-fpm and nginx (reverse proxy) on separate images, so you will have the need to have a shared volume between them, or a pvc, you can use an image that combines both, the reverse proxy and the php-fpm such as the ones here <https://serversideup.net/open-source/docker-php>, thus, you will only need one deployment, one service, one ingress.

## Env file

for Environment variables, since we use **Valut by Hashicorp**, you will need to split the env vars to two k8 manifests, one is a `configMap`, for env variables that are not secret, and one `externalSecrets` (secrets) so it will pull it from vault.

and that's it,

below is a sample for all the yaml files needed for k8, and with how to apply them manually.
we prefer using argocd for deployment, so, store them in a separate repo, or in the same app repo in a k8s folder, then, add that repo folder in argocd so it will handle sync and deployment automatically.

## Manifsets

### dployment.yaml

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: almoajil-prod-larvel
  namespace: almoajil-prod
  labels:
    app: almoajil-prod-larvel
spec:
  replicas: 1
  selector:
    matchLabels:
      app: almoajil-prod-larvel
  template:
    metadata:
      labels:
        app: almoajil-prod-larvel
    spec:
      imagePullSecrets:
        - name: ghcr-secret
      containers:
        - name: almoajil-prod-larvel
          image: "ghcr.io/moajil-project/php_laravel_cms:latest"
          ports:
            - containerPort: 8080
          envFrom:
            - configMapRef:
                name: almoajil-prod-configmap
            - secretRef:
                name: almoajil-prod-secrets

```

### service.yaml

```yaml
apiVersion: v1
kind: Service
metadata:
  name: almoajil-prod-laravel
  namespace: almoajil-prod
spec:
  selector:
    app: almoajil-prod-larvel
  ports:
    - protocol: TCP
      port: 8080
      targetPort: 8080

```

### ingress.yaml

```yaml
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: almoajil-prod-ingress
  namespace: almoajil-prod
  annotations:
    cert-manager.io/cluster-issuer: http01-clusterissuer
    nginx.ingress.kubernetes.io/ssl-redirect: "true"
    nginx.ingress.kubernetes.io/force-ssl-redirect: "true"
spec:
  ingressClassName: nginx
  tls:
    - hosts:
        - almoajilhospitality.com
      secretName: almoajil-prod-tls
  rules:
  -  host: almoajilhospitality.com
     http:
      paths:
      - pathType: Prefix
        path: "/"
        backend:
          service:
            name: almoajil-prod-laravel
            port:
              number: 8080

```

### configMap.yaml

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: almoajil-prod-configmap
  namespace: almoajil-prod
data:
  APP_URL: "https://almoajilhospitality.com/"
  APP_NAME: "Almoajil"
  APP_ENV: "production"
  APP_DEBUG: "false"
  ASSET_URL: "/"

  FORCE_HTTPS: "true"

  LOG_CHANNEL: "stdout" # k8 compatible
  LOG_DEPRECATIONS_CHANNEL: "null"
  LOG_LEVEL: "debug"

  DB_CONNECTION: "mysql"

  REDIS_CLIENT: "predis"
  REDIS_PREFIX: "deets-prod_"
  REDIS_HOST: "redis.redis.svc.cluster.local"
  REDIS_PORT: "6379"

  BROADCAST_DRIVER: "log"
  CACHE_DRIVER: "redis"
  QUEUE_CONNECTION: "sync"

  SESSION_DRIVER: "redis" # k8 compatible
  SESSION_LIFETIME: "120"

  MEMCACHED_HOST: "memcached"

  MAIL_MAILER: "smtp"
  MAIL_PORT: "587"
  MAIL_ENCRYPTION: "tls"

  FILESYSTEM_DRIVER: "s3"
  FILESYSTEM_DISK: "s3"
  FILAMENT_FILESYSTEM_DRIVER: "s3"
  MEDIA_DISK: "s3"

  AWS_DEFAULT_REGION: "us-east-1"
  AWS_BUCKET: "almoajil-prod"
  AWS_USE_PATH_STYLE_ENDPOINT: "true"
  AWS_ENDPOINT: "https://hel1.your-objectstorage.com"
  AWS_URL: "https://hel1.your-objectstorage.com/almoajil-prod"

  PUSHER_APP_ID: ""
  PUSHER_APP_KEY: ""
  PUSHER_APP_SECRET: ""
  PUSHER_HOST: ""
  PUSHER_PORT: ""
  PUSHER_SCHEME: ""
  PUSHER_APP_CLUSTER: "mt1"
  MIX_PUSHER_APP_KEY: "${PUSHER_APP_KEY}"
  VITE_APP_NAME: "${APP_NAME}"
  VITE_PUSHER_APP_KEY: "${PUSHER_APP_KEY}"
  VITE_PUSHER_HOST: "${PUSHER_HOST}"
  VITE_PUSHER_PORT: "${PUSHER_PORT}"
  VITE_PUSHER_SCHEME: "${PUSHER_SCHEME}"
  VITE_PUSHER_APP_CLUSTER: "${PUSHER_APP_CLUSTER}"
  VITE_HOST: "127.0.0.1:8000"

```

### externalSecrets.yaml

```yaml
apiVersion: external-secrets.io/v1beta1
kind: ExternalSecret
metadata:
  name: almoajil-prod-secrets
  namespace: almoajil-prod
spec:
  refreshInterval: "15m"
  secretStoreRef:
    name: vault-backend
    kind: ClusterSecretStore
  target:
    name: almoajil-prod-secrets
    creationPolicy: Owner
  data:
    - secretKey: APP_KEY
      remoteRef:
        key: almoajil-prod/secrets
        property: APP_KEY

    - secretKey: DB_HOST
      remoteRef:
        key: almoajil-prod/secrets
        property: DB_HOST

    - secretKey: DB_PORT
      remoteRef:
        key: almoajil-prod/secrets
        property: DB_PORT

    - secretKey: DB_DATABASE
      remoteRef:
        key: almoajil-prod/secrets
        property: DB_DATABASE

    - secretKey: DB_USERNAME
      remoteRef:
        key: almoajil-prod/secrets
        property: DB_USERNAME

    - secretKey: DB_PASSWORD
      remoteRef:
        key: almoajil-prod/secrets
        property: DB_PASSWORD

    - secretKey: MAIL_HOST
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_HOST
        
    - secretKey: MAIL_USERNAME
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_USERNAME

    - secretKey: MAIL_PASSWORD
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_PASSWORD

    - secretKey: MAIL_FROM_NAME
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_FROM_NAME

    - secretKey: MAIL_FROM_ADDRESS
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_FROM_ADDRESS

    - secretKey: MAIL_TO_ADDRESS
      remoteRef:
        key: almoajil-prod/secrets
        property: MAIL_TO_ADDRESS

    - secretKey: AWS_ACCESS_KEY_ID
      remoteRef:
        key: almoajil-prod/secrets
        property: AWS_ACCESS_KEY_ID

    - secretKey: AWS_SECRET_ACCESS_KEY
      remoteRef:
        key: almoajil-prod/secrets
        property: AWS_SECRET_ACCESS_KEY

```

after that, either apply the files directly, or use argocd to deploy.