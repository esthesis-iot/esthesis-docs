"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[33361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66744:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const r={},o="Initial configuration",l={unversionedId:"startup-guide/Initial configuration",id:"version-3.0.28/startup-guide/Initial configuration",title:"Initial configuration",description:"The following sections describe how to configure the esthesis Core platform after installation.",source:"@site/versioned_docs/version-3.0.28/02-startup-guide/01-Initial configuration.md",sourceDirName:"02-startup-guide",slug:"/startup-guide/Initial configuration",permalink:"/docs/startup-guide/Initial configuration",draft:!1,tags:[],version:"3.0.28",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Startup guide",permalink:"/docs/startup-guide/"},next:{title:"Registering a test device",permalink:"/docs/startup-guide/Registering a test device"}},u={},s=[{value:"Create a Certificate Authority (CA)",id:"create-a-certificate-authority-ca",level:2},{value:"Create a tag",id:"create-a-tag",level:2},{value:"Define your MQTT server",id:"define-your-mqtt-server",level:2},{value:"Tune the settings",id:"tune-the-settings",level:2},{value:"Set up the Dataflows",id:"set-up-the-dataflows",level:2},{value:"Manual configuration",id:"manual-configuration",level:3},{value:"Using Wizards",id:"using-wizards",level:3}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"initial-configuration"},"Initial configuration"),(0,i.kt)("p",null,"The following sections describe how to configure the esthesis Core platform after installation."),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"If you are configuring a production installation, make sure you also read the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/startup-guide/MQTT-security-hardening"},"MQTT security hardening")," section before proceeding.")),(0,i.kt)("h2",{id:"create-a-certificate-authority-ca"},"Create a Certificate Authority (CA)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Key Management > CAs".'),(0,i.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,i.kt)("li",{parentName:"ul"},'Fill in all information except "Parent CA".')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"esthesis Core can work without creating a CA. However, if in the future you want to enable\ncertificate-based authentication for your devices, you will need to create one then. Devices that\nhave already been registered with the platform prior to the creation of the CA will need to have\ntheir certificates reissued. To avoid this hassle, we suggest you create a CA early on.")),(0,i.kt)("h2",{id:"create-a-tag"},"Create a tag"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Settings > Tags".'),(0,i.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,i.kt)("li",{parentName:"ul"},"Fill in all necessary information.")),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Tags in esthesis Core play an important role allowing components to be optimally grouped together.\nIt is not necessary to create a tag, however it is highly recommended.")),(0,i.kt)("h2",{id:"define-your-mqtt-server"},"Define your MQTT server"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Integrations > Infrastructure".'),(0,i.kt)("li",{parentName:"ul"},'Click on the "Register" button.'),(0,i.kt)("li",{parentName:"ul"},'Fill in all information, choosing the tag you created before and setting the "State" to "Active".')),(0,i.kt)("h2",{id:"tune-the-settings"},"Tune the settings"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Settings > Device Registration" and choose the registration mode you want to use.'),(0,i.kt)("li",{parentName:"ul"},'Under "Security", choose as root CA the CA you created before.')),(0,i.kt)("h2",{id:"set-up-the-dataflows"},"Set up the Dataflows"),(0,i.kt)("p",null,"Without any dataflow configured esthesis Core can not do much. You can set up individual\ndataflows for your use case, or you can use one of the provided wizards. Once the dataflows are\nconfigured, you can start registering devices and send data to the platform."),(0,i.kt)("h3",{id:"manual-configuration"},"Manual configuration"),(0,i.kt)("p",null,"Although the exact order in which dataflows are deployed is not important, you may use the following\norder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"MQTT client"),(0,i.kt)("li",{parentName:"ul"},"Redis cache"),(0,i.kt)("li",{parentName:"ul"},"Ping updater"),(0,i.kt)("li",{parentName:"ul"},"Command reply updater"),(0,i.kt)("li",{parentName:"ul"},"InfluxDB writer")),(0,i.kt)("h3",{id:"using-wizards"},"Using Wizards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Navigate to "Dataflows".'),(0,i.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,i.kt)("li",{parentName:"ul"},'Click on the "Wizards" button.'),(0,i.kt)("li",{parentName:"ul"},'Select the wizard you want to use and click on the "Configure" button.'),(0,i.kt)("li",{parentName:"ul"},'Fill in the details of the wizard and click on the "Execute" button.')))}d.isMDXComponent=!0}}]);