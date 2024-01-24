"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[3897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,g=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={},o="Initial configuration",l={unversionedId:"startup-guide/Initial configuration",id:"version-3.0.2/startup-guide/Initial configuration",title:"Initial configuration",description:"The following sections describe how to configure the esthesis Core platform after installation.",source:"@site/versioned_docs/version-3.0.2/02-startup-guide/01-Initial configuration.md",sourceDirName:"02-startup-guide",slug:"/startup-guide/Initial configuration",permalink:"/docs/3.0.2/startup-guide/Initial configuration",draft:!1,tags:[],version:"3.0.2",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Startup guide",permalink:"/docs/3.0.2/startup-guide/"},next:{title:"Registering a test device",permalink:"/docs/3.0.2/startup-guide/Registering a test device"}},u={},s=[{value:"Create a Certificate Authority (CA)",id:"create-a-certificate-authority-ca",level:2},{value:"Create a tag",id:"create-a-tag",level:2},{value:"Define your MQTT server",id:"define-your-mqtt-server",level:2},{value:"Tune the settings",id:"tune-the-settings",level:2},{value:"Set up the Dataflows",id:"set-up-the-dataflows",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"initial-configuration"},"Initial configuration"),(0,a.kt)("p",null,"The following sections describe how to configure the esthesis Core platform after installation."),(0,a.kt)("h2",{id:"create-a-certificate-authority-ca"},"Create a Certificate Authority (CA)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to "Key Management > CAs".'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,a.kt)("li",{parentName:"ul"},'Fill in all information except "Parent CA".')),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"esthesis Core can work without creating a CA. However, if in the future you want to enable\ncertificate-based authentication for your devices, you will need to create one then. Devices that\nhave already been registered with the platform prior to the creation of the CA will need to have\ntheir certificates reissued. To avoid this hassle, we suggest you create a CA early on.")),(0,a.kt)("h2",{id:"create-a-tag"},"Create a tag"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to "Settings > Tags".'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,a.kt)("li",{parentName:"ul"},"Fill in all necessary information.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Tags in esthesis Core play an important role allowing components to be optimally grouped together.\nIt is not necessary to create a tag, however it is highly recommended.")),(0,a.kt)("h2",{id:"define-your-mqtt-server"},"Define your MQTT server"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to "Integrations > Infrastructure".'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Register" button.'),(0,a.kt)("li",{parentName:"ul"},'Fill in all information, choosing the tag you created before and setting the "State" to "Active".')),(0,a.kt)("h2",{id:"tune-the-settings"},"Tune the settings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to "Settings > Device Registration" and choose the registration mode you want to use.'),(0,a.kt)("li",{parentName:"ul"},'Under "Security", choose as root CA the CA you created before.')),(0,a.kt)("h2",{id:"set-up-the-dataflows"},"Set up the Dataflows"),(0,a.kt)("p",null,"Without any dataflow configured esthesis Core can not do much. You can set up individual\ndataflows for your use case, or you can use one of the provided wizards. Once the dataflows are\nconfigured, you can start registering devices and send data to the platform."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Navigate to "Dataflows".'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Create" button.'),(0,a.kt)("li",{parentName:"ul"},'Click on the "Wizards" button.'),(0,a.kt)("li",{parentName:"ul"},'Select the wizard you want to use and click on the "Configure" button.'),(0,a.kt)("li",{parentName:"ul"},'Fill in the details of the wizard and click on the "Execute" button.')))}d.isMDXComponent=!0}}]);