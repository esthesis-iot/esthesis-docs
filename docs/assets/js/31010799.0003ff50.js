"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[6731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>v});var i=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),g=s,v=u["".concat(l,".").concat(g)]||u[g]||d[g]||r;return n?i.createElement(v,a(a({ref:t},p),{},{components:n})):i.createElement(v,a({ref:t},p))}));function v(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,a=new Array(r);a[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,a[1]=o;for(var c=2;c<r;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=n(7462),s=(n(7294),n(3905));const r={},a="Developing esthesis Device Agent",o={unversionedId:"developers-guide/Developing esthesis device agent",id:"developers-guide/Developing esthesis device agent",title:"Developing esthesis Device Agent",description:"The esthesis Device Agent is a software component that runs on the device and connects it to the",source:"@site/docs/06-developers-guide/09-Developing esthesis device agent.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Developing esthesis device agent",permalink:"/docs/next/developers-guide/Developing esthesis device agent",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"sidebar",previous:{title:"Cross-Service transactions",permalink:"/docs/next/developers-guide/Cross-Service transactions"},next:{title:"Inter-service notifications",permalink:"/docs/next/developers-guide/Inter-service notifications"}},l={},c=[{value:"Run and compile",id:"run-and-compile",level:2},{value:"Compile locally",id:"compile-locally",level:3},{value:"Run locally",id:"run-locally",level:3},{value:"Run locally, automatically recompiling on changes",id:"run-locally-automatically-recompiling-on-changes",level:3},{value:"Testing multiple agents",id:"testing-multiple-agents",level:2},{value:"Using containers",id:"using-containers",level:3},{value:"Using Kubernetes",id:"using-kubernetes",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,s.kt)(u,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"developing-esthesis-device-agent"},"Developing esthesis Device Agent"),(0,s.kt)("p",null,"The esthesis Device Agent is a software component that runs on the device and connects it to the\nesthesis Core. The agent is created in Go and can be compiled for any platform supported by Go."),(0,s.kt)("h2",{id:"run-and-compile"},"Run and compile"),(0,s.kt)("admonition",{type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"When running the agent for the first time for a specific hardware Id, make sure that the tag you\nspecify via ",(0,s.kt)("inlineCode",{parentName:"p"},"--tags")," exists in esthesis CORE and it is assigned to the registered MQTT server in\ninfrastructure page.")),(0,s.kt)("h3",{id:"compile-locally"},"Compile locally"),(0,s.kt)("p",null,"To compile the agent locally go inside ",(0,s.kt)("inlineCode",{parentName:"p"},"go")," directory and execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"go build -o esthesis-agent cmd/main.go\n")),(0,s.kt)("p",null,"The above will create an ",(0,s.kt)("inlineCode",{parentName:"p"},"esthesis-agent")," executable for your platform. This is useful to check\nthat the agent compiles and runs on your machine, but not very useful for development."),(0,s.kt)("h3",{id:"run-locally"},"Run locally"),(0,s.kt)("p",null,"To run the agent locally go inside ",(0,s.kt)("inlineCode",{parentName:"p"},"go")," directory and execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"HID=abc123 && \\\nREGISTRATION_URL=http://apisix-gateway.esthesis.localdev/api/agent/v1/register && \\\ngo run cmd/main.go \\\n    --hardwareId=$HID \\\n    --registrationUrl=$REGISTRATION_URL \\\n    --propertiesFile=$HOME/.esthesis/device/$HID/esthesis.properties \\\n    --securePropertiesFile=$HOME/.esthesis/device/$HID/secure/esthesis.properties \\\n    --tempDir=$HOME/.esthesis/device/$HID/temp \\\n    --versionFile=$HOME/.esthesis/device/$HID/version \\\n    --provisioningScript=$HOME/.esthesis/device/$HID/firmware.sh \\\n    --autoUpdate=false --secureProvisioning=true \\\n    --versionReport=true \\\n    --logLevel=debug\n")),(0,s.kt)("h3",{id:"run-locally-automatically-recompiling-on-changes"},"Run locally, automatically recompiling on changes"),(0,s.kt)("p",null,"If you want your agent to automatically recompile and restart on changes, you can use\n",(0,s.kt)("a",{parentName:"p",href:"https://github.com/cosmtrek/air"},"air"),". To run the agent locally go inside ",(0,s.kt)("inlineCode",{parentName:"p"},"go")," directory and\nexecute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'HID=abc125 && \\\nREGISTRATION_URL=http://apisix-gateway.esthesis.localdev/api/agent/v1/register && \\\nair --build.cmd "go build -o /tmp/esthesis-core-device cmd/main.go" --build.bin "/tmp/esthesis-core-device" -- \\\n    --hardwareId=$HID \\\n    --registrationUrl=$REGISTRATION_URL \\\n    --propertiesFile=$HOME/.esthesis/device/$HID/esthesis.properties \\\n    --securePropertiesFile=$HOME/.esthesis/device/$HID/secure/esthesis.properties \\\n    --tempDir=$HOME/.esthesis/device/$HID/temp \\\n    --versionFile=$HOME/.esthesis/device/$HID/version \\\n    --provisioningScript=$HOME/.esthesis/device/$HID/firmware.sh \\\n    --autoUpdate=true --secureProvisioning=true \\\n    --versionReport=true \\\n    --logLevel=debug\n')),(0,s.kt)("h2",{id:"testing-multiple-agents"},"Testing multiple agents"),(0,s.kt)("h3",{id:"using-containers"},"Using containers"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"APISIX_IP=$(dig +short apisix-gateway.esthesis.localdev) && \\\nRND_PREFIX=esthesis-test-device-$(uuidgen | cut -f1 -d\"-\" | awk '{print tolower($0)}') && \\\nfor ((i=1; i<=3; i++)); do\n    HID=$RND_PREFIX-$i && \\\n    podman run -d --tls-verify=false --name $HID \\\n        -e HARDWARE_ID=$HID \\\n        -e REGISTRATION_URL=http://apisix-gateway.esthesis.localdev/api/agent/v1/register \\\n        -e PROPERTIES_FILE=/app/.esthesis/esthesis.properties \\\n        -e SECURE_PROPERTIES_FILE=/app/.esthesis/secure/esthesis.properties \\\n        -e TEMP_DIR=/app/.esthesis/temp \\\n        -e VERSION_FILE=/app/version \\\n        -e PROVISIONING_SCRIPT=/app/firmware-update.sh \\\n        -e LOG_LEVEL=debug \\\n        -e AUTO_UPDATE=false \\\n        -e SECURE_PROVISIONING=true \\\n        --add-host apisix-gateway.esthesis.localdev:$APISIX_IP \\\n        $REGISTRY_URL/esthesisiot/esthesis-core-device:latest-debug\ndone\n")),(0,s.kt)("h3",{id:"using-kubernetes"},"Using Kubernetes"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},'RND_PREFIX=esthesis-test-device-$(uuidgen | cut -f1 -d"-" | awk \'{print tolower($0)}\') && \\\nfor ((i=1; i<=3; i++)); do\n    HID=$RND_PREFIX-$i && \\\n    kubectl run $HID \\\n        --image $REGISTRY_URL/esthesisiot/esthesis-core-device:latest-debug \\\n        --image-pull-policy=Always \\\n        --env="HARDWARE_ID=$HID" \\\n        --env="REGISTRATION_URL=http://apisix-gateway/api/agent/v1/register" \\\n        --env="PROPERTIES_FILE=/app/.esthesis/esthesis.properties" \\\n        --env="SECURE_PROPERTIES_FILE=/app/.esthesis/secure/esthesis.properties" \\\n        --env="TEMP_DIR=/app/.esthesis/temp" \\\n        --env="VERSION_FILE=/app/.esthesis/version" \\\n        --env="PROVISIONING_SCRIPT=/app/.esthesis/firmware.sh" \\\n        --env="LOG_LEVEL=debug" \\\n        --env="AUTO_UPDATE=false" \\\n        --env="TAGS=k8s" \\\n        --env="SECURE_PROVISIONING=true"\ndone\n')))}d.isMDXComponent=!0}}]);