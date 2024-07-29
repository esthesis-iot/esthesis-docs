"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[42536],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,d=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},99915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="Backups",l={unversionedId:"installation-guide/Backups",id:"version-3.0.44/installation-guide/Backups",title:"Backups",description:"The following sections provide instructions on how to configure backups for the esthesis CORE",source:"@site/versioned_docs/version-3.0.44/01-installation-guide/03-Backups.md",sourceDirName:"01-installation-guide",slug:"/installation-guide/Backups",permalink:"/docs/3.0.44/installation-guide/Backups",draft:!1,tags:[],version:"3.0.44",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Amazon Web Services (AWS)",permalink:"/docs/3.0.44/installation-guide/AWS"},next:{title:"Startup guide",permalink:"/docs/3.0.44/startup-guide/"}},s={},u=[{value:"Backup with a custom storage class",id:"backup-with-a-custom-storage-class",level:2},{value:"Backup on AWS with EFS",id:"backup-on-aws-with-efs",level:2},{value:"Backup on AWS with S3",id:"backup-on-aws-with-s3",level:2},{value:"Creating an IAM policy",id:"creating-an-iam-policy",level:3},{value:"Create a service account and IAM role with  <code>eksctl</code>",id:"create-a-service-account-and-iam-role-with--eksctl",level:3},{value:"Configure Persistent Volume for backups on S3",id:"configure-persistent-volume-for-backups-on-s3",level:3},{value:"Running the Helm chart",id:"running-the-helm-chart",level:2}],c={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"backups"},"Backups"),(0,o.kt)("p",null,"The following sections provide instructions on how to configure backups for the esthesis CORE\nservices. The backup procedure is a combination of enabling the backup feature on the underlying\nservices, as well as configuring your deployment environment to store the backups. Accordingly,\ninstructions are targeting specific cloud environments."),(0,o.kt)("h2",{id:"backup-with-a-custom-storage-class"},"Backup with a custom storage class"),(0,o.kt)("h2",{id:"backup-on-aws-with-efs"},"Backup on AWS with EFS"),(0,o.kt)("h2",{id:"backup-on-aws-with-s3"},"Backup on AWS with S3"),(0,o.kt)("p",null,"The following section provides instructions on how to configure backups when running esthesis CORE\non AWS. Backups are targeting S3 buckets, which have been mounted as a Persistent Volume (PV) on\nthe Kubernetes cluster. To follow the next steps you need:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"An existing AWS Identity and Access Management (IAM) OpenID Connect (OIDC) provider for your\ncluster. To determine whether you already have one, or to create one, see\n",(0,o.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/eks/latest/userguide/enable-iam-roles-for-service-accounts.html"},"Creating an IAM OIDC provider for your cluster"),"."),(0,o.kt)("li",{parentName:"ul"},"Version 2.12.3 or later of the AWS CLI installed and configured on your device or AWS CloudShell."),(0,o.kt)("li",{parentName:"ul"},"The ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl")," command line tool is installed on your device or AWS CloudShell.")),(0,o.kt)("h3",{id:"creating-an-iam-policy"},"Creating an IAM policy"),(0,o.kt)("p",null,"The mount point for Amazon S3 CSI driver requires Amazon S3 permissions to interact with your file\nsystem. This section shows how to create an IAM policy that grants the necessary permissions. The\nfollowing example policy follows the IAM permission recommendations for mount point. Alternatively,\nyou can use the AWS managed policy ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonS3FullAccess"),", but this managed policy grants more\npermissions than are needed. To create the IAM policy follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the IAM console at ",(0,o.kt)("a",{parentName:"li",href:"https://console.aws.amazon.com/iam/"},"https://console.aws.amazon.com/iam/"),"."),(0,o.kt)("li",{parentName:"ol"},"In the left navigation pane, choose Policies."),(0,o.kt)("li",{parentName:"ol"},"On the Policies page, choose Create policy."),(0,o.kt)("li",{parentName:"ol"},"For Policy editor, choose JSON."),(0,o.kt)("li",{parentName:"ol"},"Under Policy editor, copy and paste the following:")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"`DOC-EXAMPLE-BUCKET1`")," with your own Amazon S3 bucket name.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n   "Version": "2012-10-17",\n   "Statement": [\n        {\n            "Sid": "MountpointFullBucketAccess",\n            "Effect": "Allow",\n            "Action": [\n                "s3:ListBucket"\n            ],\n            "Resource": [\n                "arn:aws:s3:::DOC-EXAMPLE-BUCKET1"\n            ]\n        },\n        {\n            "Sid": "MountpointFullObjectAccess",\n            "Effect": "Allow",\n            "Action": [\n                "s3:GetObject",\n                "s3:PutObject",\n                "s3:AbortMultipartUpload",\n                "s3:DeleteObject"\n            ],\n            "Resource": [\n                "arn:aws:s3:::DOC-EXAMPLE-BUCKET1/*"\n            ]\n        }\n   ]\n}\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Directory buckets, introduced with the S3 Express One Zone storage class, use a different authentication mechanism from general purpose buckets. Instead of using  ",(0,o.kt)("inlineCode",{parentName:"p"},"s3:*"),"  actions, you should use the  ",(0,o.kt)("inlineCode",{parentName:"p"},"s3express:CreateSession"),"  action. For information about directory buckets, see  ",(0,o.kt)("a",{parentName:"p",href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/directory-buckets-overview.html"},"Directory buckets"),"  in the  ",(0,o.kt)("em",{parentName:"p"},"Amazon S3 User Guide"),"."),(0,o.kt)("p",{parentName:"li"},"Below is an example of least-privilege policy that you would use for a directory bucket."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "Version": "2012-10-17",\n    "Statement": [\n        {\n            "Effect": "Allow",\n            "Action": "s3express:CreateSession",\n            "Resource": "arn:aws:s3express:`aws-region`:`111122223333`:bucket/`` `DOC-EXAMPLE-BUCKET1`--az_id--x-s3``"\n        }\n    ]\n}\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose  ",(0,o.kt)("strong",{parentName:"p"},"Next"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"On the  ",(0,o.kt)("strong",{parentName:"p"},"Review and create"),"  page, name your policy. This example walkthrough uses the name  ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonS3CSIDriverPolicy"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose  ",(0,o.kt)("strong",{parentName:"p"},"Create policy"),"."))),(0,o.kt)("h3",{id:"create-a-service-account-and-iam-role-with--eksctl"},"Create a service account and IAM role with  ",(0,o.kt)("inlineCode",{parentName:"h3"},"eksctl")),(0,o.kt)("p",null,"To create the IAM role and the Kubernetes service account, run the following commands. These commands\nalso attach the  ",(0,o.kt)("inlineCode",{parentName:"p"},"AmazonS3CSIDriverPolicy")," IAM policy to the role, annotate the Kubernetes service\naccount (",(0,o.kt)("inlineCode",{parentName:"p"},"s3-csi-controller-sa"),") with the IAM role's Amazon Resource Name (ARN), and add the\nKubernetes service account name to the trust policy for the IAM role."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"CLUSTER_NAME=my-cluster\nREGION=region-code\nROLE_NAME=AmazonEKS_S3_CSI_DriverRole\nPOLICY_ARN=AmazonEKS_S3_CSI_DriverRole_ARN\neksctl create iamserviceaccount \\\n    --name s3-csi-driver-sa \\\n    --namespace kube-system \\\n    --cluster $CLUSTER_NAME \\\n    --attach-policy-arn $POLICY_ARN \\\n    --approve \\\n    --role-name $ROLE_NAME \\\n    --region $REGION \\\n    --role-only\n")),(0,o.kt)("h3",{id:"configure-persistent-volume-for-backups-on-s3"},"Configure Persistent Volume for backups on S3"),(0,o.kt)("p",null,"To create a Persistent Volume that points to an S3 bucket you can use the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: PersistentVolume\nmetadata:\n  name: <the-name-of-the-PV>\nspec:\n  capacity:\n    storage: 1200Gi # ignored, required\n  accessModes:\n    - ReadWriteMany # supported options: ReadWriteMany / ReadOnlyMany\n  mountOptions:\n    - allow-delete\n    - region <the-aws-region-of-bucket>\n  csi:\n    driver: s3.csi.aws.com # required\n    volumeHandle: s3-csi-driver-volume\n    volumeAttributes:\n      bucketName: <the-name-of-the-bucket>\n")),(0,o.kt)("p",null,"You will have to replace the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"the-name-of-the-PV"),": The name you want to give to you PV."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"the-aws-region-of-bucket"),": The region on which you bucket is. (eg. eu-central-1)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"the-name-of-the-bucket"),": The name of you bucket.")),(0,o.kt)("h2",{id:"running-the-helm-chart"},"Running the Helm chart"),(0,o.kt)("p",null,"You can configure the provided Helm chart to align with the resources you have created above using\nthe following environment parameters:"),(0,o.kt)("p",null,"\ud83d\udd39 ",(0,o.kt)("inlineCode",{parentName:"p"},"INFLUXDB_ENABLED"),(0,o.kt)("br",null),"\nWhether InfluxDB should be installed by this chart or not.",(0,o.kt)("br",null),"\nDefault: ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"For MongoDB:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_CRONJOB_NAME: The name you want the cronjob to have. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"esthesis-mongodb-backup-cronjob")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_USER: The root user for mongodb. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"root")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_SECRET: The name of the secret that contains mongo-root-password. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"my-mongodb")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_HOST: The name of the mongodb service on kubernetes. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"my-mongodb")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_PORT: The port of mongodb. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"27017")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_SCHEDULE: When you want the cronjob to run. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"0 2 * * *")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_MONGODB_PATH: The path on the PV that the backups should be stored on. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"backup/mongodb"))),(0,o.kt)("p",null,"For InfluxDB:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_CRONJOB_NAME: The name you want the cronjob to have. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"esthesis-influxdb-backup-cronjob")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_SECRET: The name of the secret that contains INFLUX_TOKEN. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"my-influxdb")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_HOST: The name of the influxdb service on kubernetes. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"my-influxdb")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_PORT: The port of influxdb. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"8086")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_SCHEDULE: When you want the cronjob to run. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"0 2 * * *")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_INFLUXDB_PATH: The path on the PV that the backups should be stored on. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"backup/influxdb"))),(0,o.kt)("p",null,"Backup PVC:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_PVC_NAME: The name you want the PVC to have. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"esthesis-backup-s3-claim")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_VOLUME_NAME: The name of the PV that the PVC will be mounted on. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"esthesis-backup-s3-pv")),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_STORAGE_CLASS_NAME: If on S3, it should be left empty, otherwise it should be configured to the correct storageClassName. Default value is empty."),(0,o.kt)("li",{parentName:"ul"},"ESTHESIS_BACKUP_STORAGE: How much storage you want you PVC to request. Default value is ",(0,o.kt)("inlineCode",{parentName:"li"},"10Gi"))))}m.isMDXComponent=!0}}]);