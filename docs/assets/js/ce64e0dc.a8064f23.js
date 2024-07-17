"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[29644],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>h});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},g="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=c(i),p=a,h=g["".concat(l,".").concat(p)]||g[p]||u[p]||r;return i?n.createElement(h,s(s({ref:t},d),{},{components:i})):n.createElement(h,s({ref:t},d))}));function h(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[g]="string"==typeof e?e:a,s[1]=o;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},87819:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=i(87462),a=(i(67294),i(3905));const r={},s="Tags",o={unversionedId:"startup-guide/Tags",id:"version-3.0.40/startup-guide/Tags",title:"Tags",description:"Tags is a powerful mechanism of esthesis CORE allowing to logically group different types of",source:"@site/versioned_docs/version-3.0.40/02-startup-guide/04-Tags.md",sourceDirName:"02-startup-guide",slug:"/startup-guide/Tags",permalink:"/docs/startup-guide/Tags",draft:!1,tags:[],version:"3.0.40",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"MQTT security hardening",permalink:"/docs/startup-guide/MQTT-security-hardening"},next:{title:"Central logging",permalink:"/docs/startup-guide/Central-logging"}},l={},c=[{value:"Device registration",id:"device-registration",level:2}],d={toc:c},g="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(g,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tags"},"Tags"),(0,a.kt)("p",null,"Tags is a powerful mechanism of esthesis CORE allowing to logically group different types of\nresources. Using tags, you can easily filter resources by their type, purpose, or any other\ncriteria suitable for your project. You can also use tags to send different configurations to\ndevices being registered, as well as creating device campaigns and executing commands targeting\nall devices with a specific tag."),(0,a.kt)("h2",{id:"device-registration"},"Device registration"),(0,a.kt)("p",null,"When a device is about to be registered with esthesis CORE, it can optionally specify one or more\ntags. They in which registration and tags creation/selection is handled is presented next:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device does not specify any tag"),"\\\nWhen a device is registering without specifying any tag, esthesis CORE will assign a random\nMQTT server to it. This is to make sure that your device is still registered and can be accessed\nby esthesis CORE, even if you do not have any tags defined. It is strongly suggested that you\nalways specify a tag when registering your devices."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device specifies a single tag that is defined in esthesis CORE"),"\\\nWhen a device specifies a single tag that is defined in esthesis CORE, the device will be assigned\nthe MQTT server that is associated with that tag."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device specifies multiple tags that are all defined in esthesis CORE"),"\\\nWhen a device specifies multiple tags that are all defined in esthesis CORE, the device will be\nassigned a random MQTT server associated with all defined tag."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device specifies a single tag that is not defined in esthesis CORE"),'\\\nWhen a device specifies a single tag that is not defined in esthesis CORE, the tag can be\nautomatically created in esthesis CORE, or not, based on the "Device tags" configuration under\n"Settings".',(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- If allow new tags to be created during registration, the device will be registered, the provided\n")),"  tag will be created in esthesis CORE, however no MQTT server will be assigned to it. To be able to\nconnect this device to esthesis CORE, you need to manually change the device's settings to define\nan MQTT server; this requires you having remote or physical access to the device.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you do not allow new tags to be created during registration, the device will be registered,\nno new tag will be created, and a random MQTT server will be assigned to the device."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device specifies multiple tags that are not defined in esthesis CORE"),"\\\nThis is similar to the above case, however multiple tags will be created or ignored."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Device specifies multiple tags, some exists in esthesis CORE some they do not"),"\\",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If esthesis CORE is configured to allow new tags to be created during registration, the device will\nbe registered, the provided tags that are not defined in esthesis CORE will be created, and the\ndevice will be assigned a random MQTT server out of the tags that already exist."),(0,a.kt)("li",{parentName:"ul"},"If esthesis CORE is configured to not allow new tags to be created during registration, the device\nwill be registered, no new tags will be created, and the device will be assigned a random MQTT server\nout of the tags that already exist.")))),(0,a.kt)("p",null,"As you can see, tags is a powerful mechanism providing you a lot of flexibility, however not planning\nyour tags carefully may lead to unexpected behavior. It is strongly suggested that you always define\nyour tags before registering your devices, and that you have a well-thought tags strategy."))}u.isMDXComponent=!0}}]);