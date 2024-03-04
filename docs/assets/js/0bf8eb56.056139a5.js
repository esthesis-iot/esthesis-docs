"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[22465],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={},o="Amazon Web Services (AWS)",s={unversionedId:"installation-guide/AWS",id:"version-3.0.25/installation-guide/AWS",title:"Amazon Web Services (AWS)",description:'The Helm charts for esthesis CORE can be deployed "as is" in AWS and no special configuration is',source:"@site/versioned_docs/version-3.0.25/01-installation-guide/02-AWS.md",sourceDirName:"01-installation-guide",slug:"/installation-guide/AWS",permalink:"/docs/3.0.25/installation-guide/AWS",draft:!1,tags:[],version:"3.0.25",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Kubernetes",permalink:"/docs/3.0.25/installation-guide/Kubernetes"},next:{title:"Startup guide",permalink:"/docs/3.0.25/startup-guide/"}},l={},c=[{value:"AWS EKS with EFS",id:"aws-eks-with-efs",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"amazon-web-services-aws"},"Amazon Web Services (AWS)"),(0,a.kt)("p",null,'The Helm charts for esthesis CORE can be deployed "as is" in AWS and no special configuration is\nrequired. However, there are a few things that you may need to take into account, or tune, according\nto what kind of AWS resources you are using.'),(0,a.kt)("h2",{id:"aws-eks-with-efs"},"AWS EKS with EFS"),(0,a.kt)("p",null,"If you are using AWS EKS with EFS, you will need to create a storage class that uses EFS. You can\ncreate a default storage class that uses EFS by deploying the following descriptor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: efs-sc\nprovisioner: efs.csi.aws.com\nparameters:\n  provisioningMode: efs-ap\n  fileSystemId: <file-system-id from EFS>\n  directoryPerms: "700"\n  reuseAccessPoint: "false" # optional\n  ensureUniqueDirectory: "true" # optional\n  basePath: /efs-dp # optional\n  subPathPattern: ${.PVC.name} # optional\n')),(0,a.kt)("p",null,"However, there are certain charts (specifically, the ones from Bitnami) that require a specific\nuid and gid to be set in the storage class' underlying user. For that, you need to create an additional\nstorage class that uses EFS and sets the uid and gid to 1001 (for Bitnami charts). You can create\nsuch a storage class by deploying the following descriptor:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: bitnami-sc\nprovisioner: efs.csi.aws.com\nparameters:\n  provisioningMode: efs-ap\n  fileSystemId: <file-system-id from EFS>\n  directoryPerms: "700"\n  reuseAccessPoint: "false" # optional\n  ensureUniqueDirectory: "true" # optional\n  basePath: /efs-dp # optional\n  subPathPattern: ${.PVC.name} # optional\n  gid: "1001"\n  uid: "1001"\n')),(0,a.kt)("p",null,"When deploying esthesis CORE dependencies, you will need to specify the Bitnami-specific storage class\nfor MongoDB, and Keycloak by setting the following environment variables prior to running the Helmfile\ninstall command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"MONGODB_STORAGE_CLASS=bitnami-sc\nKEYCLOAK_STORAGE_CLASS=bitnami-sc\n")))}d.isMDXComponent=!0}}]);