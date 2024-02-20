"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[1638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,g=d["".concat(s,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},3670:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const l={},i=void 0,o={unversionedId:"device-agent/Installation",id:"version-3.0.9/device-agent/Installation",title:"Installation",description:"Installation",source:"@site/versioned_docs/version-3.0.9/04-device-agent/01-Installation.md",sourceDirName:"04-device-agent",slug:"/device-agent/Installation",permalink:"/docs/device-agent/Installation",draft:!1,tags:[],version:"3.0.9",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Device Agent",permalink:"/docs/device-agent/"},next:{title:"Configuration parameters",permalink:"/docs/device-agent/Configuration parameters"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Docker",id:"docker",level:3},{value:"Standalone executable",id:"standalone-executable",level:3},{value:"Raspberry Pi support and compatibility",id:"raspberry-pi-support-and-compatibility",level:3}],p={toc:u},d="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Depending on your environment, you may want to run the esthesis device agent as a Docker container,\nor as a standalone executable. The following sections describe how to install the device agent in\nboth scenarios."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To have your device communicating with esthesis Core, you must have registered an MQTT server\nunder Integrations > Infrastructure. In order for esthesis Core to be able to process data coming\nfrom your device, you must have also defined the appropriate dataflows under Integrations > Dataflows.")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"The esthesis device agent can be found in Docker hub as the\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/esthesisiot/esthesis-core-device/general"},"esthesis core device"),"\nimage. The esthesis device agent supports a plethora of configuration options (see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/device-agent/Configuration%20parameters"},"Configuration parameters"),"), however the minimum configuration\nrequired to successfully start it up and have it connect to esthesis Core is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n    -e HARDWARE_ID=test-device-1 \\\n    -e REGISTRATION_URL=http://esthesis-core.domain/api/agent/v1/register \\\n    esthesisiot/esthesis-core-device\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"You must replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"REGISTRATION_URL")," environment variable with the hostname matching your installation."),(0,r.kt)("li",{parentName:"ol"},"You must create/mount a data volume to the container, so that the device agent can persist\nits state. If you do not do so, the device agent will not be able to reconnect to esthesis Core\nafter a restart, instead it will create to re-register (and probably fail if you have kept the\n",(0,r.kt)("inlineCode",{parentName:"li"},"HARDWARE_ID")," unchanged)."))),(0,r.kt)("p",null,"Docker images are maintained for the following architectures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"linux/arm/6"),(0,r.kt)("li",{parentName:"ul"},"linux/arm/7"),(0,r.kt)("li",{parentName:"ul"},"linux/arm64")),(0,r.kt)("h3",{id:"standalone-executable"},"Standalone executable"),(0,r.kt)("p",null,"Download the standalone executable matching your operating system and architecture from the release\npage. Start the device agent with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./esthesis-core-device \\\n    --hardwareId=test-device-1 \\\n    --registrationUrl=http://192.168.22.10/api/agent/v1/register\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Choose the correct esthesis device agent that matches your operating system and architecture."),(0,r.kt)("li",{parentName:"ol"},"Using the above configuration, the esthesis device agent will persist data under\n",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.esthesis/device"),"."))),(0,r.kt)("p",null,"Native standalone executables are maintained for the following architectures:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"darwin/amd64"),(0,r.kt)("li",{parentName:"ul"},"darwin/arm64"),(0,r.kt)("li",{parentName:"ul"},"linux/amd64"),(0,r.kt)("li",{parentName:"ul"},"linux/arm/5"),(0,r.kt)("li",{parentName:"ul"},"linux/arm/6"),(0,r.kt)("li",{parentName:"ul"},"linux/arm/7"),(0,r.kt)("li",{parentName:"ul"},"linux/arm64"),(0,r.kt)("li",{parentName:"ul"},"windows/386"),(0,r.kt)("li",{parentName:"ul"},"windows/amd64")),(0,r.kt)("h3",{id:"raspberry-pi-support-and-compatibility"},"Raspberry Pi support and compatibility"),(0,r.kt)("p",null,"The esthesis device agent supports Raspberry Pi devices, either by using the standalone executable,\nor by using the Docker image. The following table shows the supported Raspberry Pi models and the\ncorresponding architecture:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Chip"),(0,r.kt)("th",{parentName:"tr",align:null},"Standalone"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker image"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 1 Model A, A+, B, B+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Zero, Zero W"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 1"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 2 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2836"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 2 Model B (late)"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 3"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 Model A+, B+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837B0"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 3+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837B0"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 400"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 4"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 5"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2712"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")))))}m.isMDXComponent=!0}}]);