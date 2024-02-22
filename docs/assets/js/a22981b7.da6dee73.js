"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[47810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),g=r,h=d["".concat(l,".").concat(g)]||d[g]||c[g]||o;return n?i.createElement(h,a(a({ref:t},p),{},{components:n})):i.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},50410:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var i=n(87462),r=(n(67294),n(3905));const o={},a="Working with a private Container Registry",s={unversionedId:"developers-guide/Working with a private Container Registry",id:"version-3.0.17/developers-guide/Working with a private Container Registry",title:"Working with a private Container Registry",description:"When working in dev mode you run all services in your local machine, so there is no need to",source:"@site/versioned_docs/version-3.0.17/07-developers-guide/03-Working with a private Container Registry.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Working with a private Container Registry",permalink:"/docs/3.0.17/developers-guide/Working with a private Container Registry",draft:!1,tags:[],version:"3.0.17",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Working with Helm charts",permalink:"/docs/3.0.17/developers-guide/Working with Helm charts"},next:{title:"Developing backend services",permalink:"/docs/3.0.17/developers-guide/Developing backend services"}},l={},u=[{value:"Building and pushing images",id:"building-and-pushing-images",level:2},{value:"Using the private registry in testing a production-like installation",id:"using-the-private-registry-in-testing-a-production-like-installation",level:2},{value:"Deploying Dataflows",id:"deploying-dataflows",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"working-with-a-private-container-registry"},"Working with a private Container Registry"),(0,r.kt)("p",null,"When working in dev mode you run all services in your local machine, so there is no need to\npush images to a container registry. However, when you want to test your changes in a production-like\nKubernetes environment you need to push your images to a container registry, so that your\nproduction-like Kubernetes cluster can pull them from. Considering esthesis Core maintains many\nservices with support of multiple architectures, pushing all those images to e.g. Docker Hub can take a\nlong time."),(0,r.kt)("p",null,"To speed up the process you can use the private Container Registry provided by the dependencies Helm Chart.\nThe chart will deploy a private registry in your Kubernetes cluster as a NodePort Service. The service\nwill be assigned a random port, so you should take note of the IP of your worker node as well as the\nassigned port. You can then use the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish.sh")," script to build and push your images to the private\nregistry."),(0,r.kt)("h2",{id:"building-and-pushing-images"},"Building and pushing images"),(0,r.kt)("p",null,"When using the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish.sh")," script to prepare your images, you can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTHESIS_REGISTRY_URL"),"\nenvironment variable to point to a private registry. This variable should point to the IP address,\nport, and username of your private registry, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ESTHESIS_REGISTRY_URL=192.168.10.47:32000/esthesis ./publish.sh\n")),(0,r.kt)("p",null,"Note that since your private registry will be insecure, you need to add it to the insecure registries\nlist. To do so, create a file ",(0,r.kt)("inlineCode",{parentName:"p"},"buildkit.toml")," and place it in the same level as the ",(0,r.kt)("inlineCode",{parentName:"p"},"publish.sh")," script.\nThe contents of this file should be similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-toml"},'insecure-entitlements = [ "network.host", "security.insecure"]\n[registry."192.168.10.47:32000"]\n  http = true\n  insecure = true\n')),(0,r.kt)("h2",{id:"using-the-private-registry-in-testing-a-production-like-installation"},"Using the private registry in testing a production-like installation"),(0,r.kt)("p",null,"When testing a production-like installation, you can configure the Helm charts to use the images from\nyour private registry instead of e.g. Docker Hub. To do so, you can define the ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTHESIS_REGISTRY_URL"),"\nenvironment variable to point to the private registry. This variable should point to the IP address,\nport, and username of your private registry, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"ESTHESIS_REGISTRY_URL=192.168.10.47:32000/esthesis helmfile sync\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"When using the Helm charts without the ",(0,r.kt)("inlineCode",{parentName:"p"},"-env dev")," flag, the charts will automatically\nuse multi-node deployments. If you are testing in a single-node Kubernetes cluster, you need to also\ndefine ",(0,r.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SINGLE_NODE=true")," environmental variable.")),(0,r.kt)("h2",{id:"deploying-dataflows"},"Deploying Dataflows"),(0,r.kt)("p",null,'To use a private registry when deploying a Dataflow, you can use the\n"Custom Docker Registry" field in the Dataflow definition screen specifying the same registry\ncoordinates you used when building the services, for example ',(0,r.kt)("inlineCode",{parentName:"p"},"192.168.10.47:32000/esthesis"),". Similarly\nto when building the services, you should configure your Kubernetes distribution to be able to pull\nfrom that insecure registry. The exact way this is done depends on the Kubernetes distribution you\nare using."),(0,r.kt)("p",null,"Depending on your Kubernetes distribution, you might be able to get away with adding the registry to\nthe insecure registries list by replacing the IP address of your registry with ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost"),", for\nexample ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost:32000/esthesis"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"")))}c.isMDXComponent=!0}}]);