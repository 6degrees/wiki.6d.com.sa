"use strict";(self.webpackChunkwiki_6_d_com_sa=self.webpackChunkwiki_6_d_com_sa||[]).push([[4286],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8043:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i="MOVE to S3",l={unversionedId:"laravel/migrate-media-to-s3",id:"laravel/migrate-media-to-s3",title:"MOVE to S3",description:"Update ENV vars",source:"@site/docs/laravel/migrate-media-to-s3.md",sourceDirName:"laravel",slug:"/laravel/migrate-media-to-s3",permalink:"/docs/laravel/migrate-media-to-s3",draft:!1,editUrl:"https://github.com/6degrees/wiki.6d.com.sa/edit/main/docs/laravel/migrate-media-to-s3.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Laravel",permalink:"/docs/category/laravel"},next:{title:"Prepare for Kubernetes (K8)",permalink:"/docs/laravel/prepare-for-k8"}},s={},p=[{value:"Update ENV vars",id:"update-env-vars",level:2},{value:"move files to s3 using cli from the server",id:"move-files-to-s3-using-cli-from-the-server",level:2},{value:"update the media table to point to s3.",id:"update-the-media-table-to-point-to-s3",level:2},{value:"publish livewire config if it is not",id:"publish-livewire-config-if-it-is-not",level:2},{value:"(Optional) Enable CORS on the bucket",id:"optional-enable-cors-on-the-bucket",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"move-to-s3"},"MOVE to S3"),(0,a.kt)("h2",{id:"update-env-vars"},"Update ENV vars"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'AWS_ACCESS_KEY_ID=\nAWS_SECRET_ACCESS_KEY=\nAWS_DEFAULT_REGION=\nAWS_BUCKET=\nAWS_USE_PATH_STYLE_ENDPOINT=true\nAWS_ENDPOINT=\nAWS_URL="https://hel1.your-objectstorage.com/deets-prod"\n\n# For Laravel\nFILESYSTEM_DRIVER=s3\nFILESYSTEM_DISK=s3\n\n# For Filament\nFILAMENT_FILESYSTEM_DRIVER=s3\n\n# For Media Library\nMEDIA_DISK=s3\n')),(0,a.kt)("h2",{id:"move-files-to-s3-using-cli-from-the-server"},"move files to s3 using cli from the server"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt install awscli\npico ~/.aws/config\npico ~/.aws/credentials\nexport AWS_ENDPOINT_URL=https://hel1.your-objectstorage.com\nalias aws='aws --endpoint-url https://hel1.your-objectstorage.com'\naws s3 ls\naws s3 cp . s3://deets-prod/ --recursive\n")),(0,a.kt)("p",null,"all new files will be uploaded to s3 now,"),(0,a.kt)("h2",{id:"update-the-media-table-to-point-to-s3"},"update the media table to point to s3."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql"},"UPDATE media SET `disk` = 's3', `conversions_disk` = 's3';\n")),(0,a.kt)("h2",{id:"publish-livewire-config-if-it-is-not"},"publish livewire config if it is not"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"php artisan livewire:publish --config\n")),(0,a.kt)("p",null,"change disk from ",(0,a.kt)("inlineCode",{parentName:"p"},"'disk' => null, ")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"'disk' => 'local', ")),(0,a.kt)("h2",{id:"optional-enable-cors-on-the-bucket"},"(Optional) Enable CORS on the bucket"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'// cors-policy.json\n  GNU nano 4.8                                                                                                  example-cors.json                                                                                                            \n{\n  "CORSRules": [\n    {\n      "AllowedOrigins": ["*"],\n      "AllowedHeaders": ["*"],\n      "AllowedMethods": ["POST", "GET", "HEAD", "PUT", "DELETE"]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aws s3api put-bucket-cors --bucket <bucket_name> --cors-configuration file://cors-policy.json")),(0,a.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"while working locally, upload through media library might not work due to SSL certificate issues.\nmanually change ",(0,a.kt)("inlineCode",{parentName:"p"},"'verify' => true,")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"'verify' => false,")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor\\guzzlehttp\\guzzle\\src\\Client.php")," and it will work.\nThis change doesn't need to be there in production. also, ",(0,a.kt)("inlineCode",{parentName:"p"},"vendor")," folder is already in ",(0,a.kt)("inlineCode",{parentName:"p"},".gitignore")))}u.isMDXComponent=!0}}]);