"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[6731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,h=u["".concat(l,".").concat(g)]||u[g]||d[g]||s;return n?i.createElement(h,o(o({ref:t},c),{},{components:n})):i.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[u]="string"==typeof e?e:r,o[1]=a;for(var p=2;p<s;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const s={},o="Developing esthesis Device Agent",a={unversionedId:"developers-guide/Developing esthesis device agent",id:"developers-guide/Developing esthesis device agent",title:"Developing esthesis Device Agent",description:"The esthesis Device Agent is a software component that runs on the device and connects it to the",source:"@site/docs/06-developers-guide/09-Developing esthesis device agent.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Developing esthesis device agent",permalink:"/docs/next/developers-guide/Developing esthesis device agent",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"Cross-Service transactions",permalink:"/docs/next/developers-guide/Cross-Service transactions"},next:{title:"Inter-service notifications",permalink:"/docs/next/developers-guide/Inter-service notifications"}},l={},p=[{value:"Run and compile",id:"run-and-compile",level:2},{value:"Compile locally",id:"compile-locally",level:3},{value:"Run locally",id:"run-locally",level:3},{value:"Run locally, automatically recompile on changes",id:"run-locally-automatically-recompile-on-changes",level:3},{value:"Testing multiple agents",id:"testing-multiple-agents",level:2},{value:"Using Docker",id:"using-docker",level:3},{value:"Using Kubernetes",id:"using-kubernetes",level:3}],c={toc:p},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"developing-esthesis-device-agent"},"Developing esthesis Device Agent"),(0,r.kt)("p",null,"The esthesis Device Agent is a software component that runs on the device and connects it to the\nesthesis Core. The agent is created in Go and can be compiled for any platform supported by Go."),(0,r.kt)("h2",{id:"run-and-compile"},"Run and compile"),(0,r.kt)("h3",{id:"compile-locally"},"Compile locally"),(0,r.kt)("p",null,"To compile the agent locally go inside ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," directory and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go build -o esthesis-agent cmd/main.go\n")),(0,r.kt)("p",null,"The above will create an ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-agent")," executable for your platform. This is useful to check\nthat the agent compiles and runs on your machine, but not very useful for development."),(0,r.kt)("h3",{id:"run-locally"},"Run locally"),(0,r.kt)("p",null,"To run the agent locally go inside ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," directory and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HID=abc123 && \\\nREGISTRATION_URL=http://apisix-gateway.esthesis.localdev/api/agent/v1/register && \\\ngo run cmd/main.go \\\n    --hardwareId=$HID \\\n    --registrationUrl=$REGISTRATION_URL \\\n    --tags=tag1 \\\n    --propertiesFile=$HOME/.esthesis/device/$HID/esthesis.properties \\\n    --securePropertiesFile=$HOME/.esthesis/device/$HID/secure/esthesis.properties \\\n    --tempDir=$HOME/.esthesis/device/$HID/temp \\\n    --versionFile=$HOME/.esthesis/device/$HID/version \\\n    --provisioningScript=$HOME/.esthesis/device/$HID/firmware.sh \\\n    --autoUpdate=false --secureProvisioning=true \\\n    --versionReport=true \\\n    --logLevel=debug\n")),(0,r.kt)("h3",{id:"run-locally-automatically-recompile-on-changes"},"Run locally, automatically recompile on changes"),(0,r.kt)("p",null,"If you want your agent to automatically recompile and restart on changes, you can use\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/cosmtrek/air"},"air"),". To run the agent locally go inside ",(0,r.kt)("inlineCode",{parentName:"p"},"go")," directory and\nexecute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HID=abc123 && \\\nREGISTRATION_URL=http://apisix-gateway.esthesis.localdev/api/agent/v1/register && \\\nair --build.cmd "go build -o /tmp/esthesis-core-device cmd/main.go" --build.bin "/tmp/esthesis-core-device" -- \\\n    --hardwareId=$HID \\\n    --registrationUrl=$REGISTRATION_URL \\\n    --tags=tag1 \\\n    --propertiesFile=$HOME/.esthesis/device/$HID/esthesis.properties \\\n    --securePropertiesFile=$HOME/.esthesis/device/$HID/secure/esthesis.properties \\\n    --tempDir=$HOME/.esthesis/device/$HID/temp \\\n    --versionFile=$HOME/.esthesis/device/$HID/version \\\n    --provisioningScript=$HOME/.esthesis/device/$HID/firmware.sh \\\n    --autoUpdate=true --secureProvisioning=true \\\n    --versionReport=true \\\n    --logLevel=debug\n')),(0,r.kt)("h2",{id:"testing-multiple-agents"},"Testing multiple agents"),(0,r.kt)("h3",{id:"using-docker"},"Using Docker"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HID=$(uuidgen | cut -f1 -d\"-\" | awk '{print tolower($0)}') && \\\ndocker run --rm esthesisiot/esthesis-agent:3.0.0-SNAPSHOT /app/esthesis-agent \\\n--hardwareId=$HID \\\n--registrationUrl=http://192.168.21.2/api/agent/v1/register \\\n--tags=tag1 \\\n--propertiesFile=/app/.esthesis/esthesis.properties \\\n--securePropertiesFile=/app/.esthesis/secure/esthesis.properties \\\n--tempDir=/app/.esthesis/temp \\\n--versionFile=/app/.esthesis/version \\\n--provisioningScript=/app/.esthesis/firmware.sh \\\n--logLevel=debug \\\n--autoUpdate=false --secureProvisioning=true\n")),(0,r.kt)("p",null,"Note: You need to change the IP address of ",(0,r.kt)("inlineCode",{parentName:"p"},"registrationUrl")," to the IP address of APISIX Gateway."),(0,r.kt)("h3",{id:"using-kubernetes"},"Using Kubernetes"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"RND_PREFIX=test-$(uuidgen | cut -f1 -d\"-\" | awk '{print tolower($0)}') && \\\nfor ((i=1; i<=3; i++)); do\nHID=$RND_PREFIX-$i && \\\nkubectl run $HID --image esthesisiot/esthesis-agent:3.0.0-SNAPSHOT --image-pull-policy='Always' -- \\\n/app/esthesis-agent \\\n--hardwareId=$HID \\\n--registrationUrl=http://apisix-gateway/api/agent/v1/register \\\n--tags=tag1 \\\n--propertiesFile=/app/.esthesis/esthesis.properties \\\n--securePropertiesFile=/app/.esthesis/secure/esthesis.properties \\\n--tempDir=/app/.esthesis/temp \\\n--versionFile=/app/.esthesis/version \\\n--provisioningScript=/app/.esthesis/firmware.sh \\\n--logLevel=debug \\\n--autoUpdate=false --secureProvisioning=true\ndone\n")))}d.isMDXComponent=!0}}]);