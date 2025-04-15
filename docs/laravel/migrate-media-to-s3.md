# MOVE to S3

## Update ENV vars

```bash
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=
AWS_BUCKET=
AWS_USE_PATH_STYLE_ENDPOINT=true
AWS_ENDPOINT=
AWS_URL="https://hel1.your-objectstorage.com/deets-prod"

# For Laravel
FILESYSTEM_DRIVER=s3
FILESYSTEM_DISK=s3

# For Filament
FILAMENT_FILESYSTEM_DRIVER=s3

# For Media Library
MEDIA_DISK=s3
```

## move files to s3 using cli from the server

```bash
sudo apt install awscli
pico ~/.aws/config
pico ~/.aws/credentials
export AWS_ENDPOINT_URL=https://hel1.your-objectstorage.com
alias aws='aws --endpoint-url https://hel1.your-objectstorage.com'
aws s3 ls
aws s3 cp . s3://deets-prod/ --recursive
```

all new files will be uploaded to s3 now,

## update the media table to point to s3.

```sql
UPDATE media SET `disk` = 's3', `conversions_disk` = 's3';
```

## publish livewire config if it is not

```bash
php artisan livewire:publish --config
```

change disk from `'disk' => null, ` to `'disk' => 'local', `

## (Optional) Enable CORS on the bucket

```json
// cors-policy.json
  GNU nano 4.8                                                                                                  example-cors.json                                                                                                            
{
  "CORSRules": [
    {
      "AllowedOrigins": ["*"],
      "AllowedHeaders": ["*"],
      "AllowedMethods": ["POST", "GET", "HEAD", "PUT", "DELETE"]
    }
  ]
}
```

`aws s3api put-bucket-cors --bucket <bucket_name> --cors-configuration file://cors-policy.json`

## Troubleshooting

while working locally, upload through media library might not work due to SSL certificate issues.
manually change `'verify' => true,` to `'verify' => false,` in `vendor\guzzlehttp\guzzle\src\Client.php` and it will work. 
This change doesn't need to be there in production. also, `vendor` folder is already in `.gitignore`
