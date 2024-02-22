"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[45677],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=a,g=p["".concat(c,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75123:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="Device Agent",s={unversionedId:"device-agent/index",id:"version-3.0.6/device-agent/index",title:"Device Agent",description:"The esthesis Core device agent is the piece of software that runs in your devices allowing you to",source:"@site/versioned_docs/version-3.0.6/04-device-agent/index.md",sourceDirName:"04-device-agent",slug:"/device-agent/",permalink:"/docs/3.0.6/device-agent/",draft:!1,tags:[],version:"3.0.6",frontMatter:{},sidebar:"sidebar",previous:{title:"User guide",permalink:"/docs/3.0.6/user-guide/"},next:{title:"Installation",permalink:"/docs/3.0.6/device-agent/Installation"}},c={},l=[],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"device-agent"},"Device Agent"),(0,a.kt)("p",null,"The esthesis Core device agent is the piece of software that runs in your devices allowing you to\nseamlessly connect and control them from ",(0,a.kt)("em",{parentName:"p"},"esthesis")," platform. The device agent is available both\nas a Docker container supporting multiple architectures, as well as a standalone executable built\nfor different platforms and Operating Systems."),(0,a.kt)("p",null,"Please note that the device agent itself is not capable of connecting to your own sensors, actuators,\netc. Its purpose is to provide the necessary communication infrastructure for your devices to connect\nto esthesis Core. You must gather your data using your own software and then send it to the device agent.\nThe following figure presents a high-level overview of this process:"),(0,a.kt)("mermaid",{value:"sequenceDiagram\n    participant Sensors\n    participant Custom software\n    participant Device Agent\n    participant Message broker\n    participant esthesis Dataflow\n    participant Data persistence\n\t\tSensors--\x3e>Custom software: Push data\n\t\tCustom software->>Sensors: Pull data\n\t\tCustom software->>Device Agent: Push data\n\t\tDevice Agent->>Message broker: Publish\n\t\tNote left of Device Agent: MQTT/HTTP\n\t\testhesis Dataflow->>Message broker: Subscribe\n\t\testhesis Dataflow->>Data persistence: Persist data"}))}f.isMDXComponent=!0}}]);