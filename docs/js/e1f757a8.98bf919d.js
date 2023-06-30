"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[3704],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7662:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"device-agent/Installation",id:"version-3.0.0/device-agent/Installation",title:"Installation",description:"Installation",source:"@site/versioned_docs/version-3.0.0/04-device-agent/01-Installation.md",sourceDirName:"04-device-agent",slug:"/device-agent/Installation",permalink:"/docs/device-agent/Installation",draft:!1,tags:[],version:"3.0.0",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Device Agent",permalink:"/docs/device-agent/"},next:{title:"Configuration parameters",permalink:"/docs/device-agent/Configuration parameters"}},l={},c=[{value:"Installation",id:"installation",level:2},{value:"Docker",id:"docker",level:3},{value:"Standalone executable",id:"standalone-executable",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Depending on your environment, you may want to run the esthesis device agent as a Docker container,\nor as a standalone executable. The following sections describe how to install the device agent in\nboth scenarios."),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"To have your device communicating with esthesis Core, you must have registered an MQTT server\nunder Integrations > Infrastructure. In order for esthesis Core to be able to process data coming\nfrom your device, you must have also defined the appropriate dataflows under Integrations > Dataflows.")),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"The esthesis device agent can be found in Docker hub as the\n",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/repository/docker/esthesisiot/esthesis-core-device/general"},"esthesis core device"),"\nimage. The esthesis device agent supports a plethora of configuration options (see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/device-agent/Configuration%20parameters"},"Configuration parameters"),"), however the minimum configuration\nrequired to successfully start it up and have it connect to esthesis Core is the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run \\\n    -e HARDWARE_ID=test-device-1 \\\n    -e REGISTRATION_URL=http://esthesis-core.domain/api/agent/v1/register \\\n    esthesisiot/esthesis-core-device\n")),(0,r.kt)("admonition",{type:"caution"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"You must replace the ",(0,r.kt)("inlineCode",{parentName:"li"},"REGISTRATION_URL")," environment variable with the hostname matching your installation."),(0,r.kt)("li",{parentName:"ol"},"You must create/mount a data volume to the container, so that the device agent can persist\nits state. If you do not do so, the device agent will not be able to reconnect to esthesis Core\nafter a restart, instead it will create to re-register (and probably fail if you have kept the\n",(0,r.kt)("inlineCode",{parentName:"li"},"HARDWARE_ID")," unchanged)."))),(0,r.kt)("h3",{id:"standalone-executable"},"Standalone executable"),(0,r.kt)("p",null,"Download the standalone executable matching your operating system and architecture from the release\npage. Start the device agent with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"./esthesis-agent_darwin-arm64 \\\n    --hardwareId=test-device-1 \\\n    --registrationUrl=http://192.168.22.10/api/agent/v1/register\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ol",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ol"},"Choose the correct esthesis device agent that matches your operating system and architecture."),(0,r.kt)("li",{parentName:"ol"},"Using the above configuration, the esthesis device agent will persist data under\n",(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.esthesis/device"),"."))))}u.isMDXComponent=!0}}]);