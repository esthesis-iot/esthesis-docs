"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[94156],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const a={},o="Observability",s={unversionedId:"developers-guide/Observability",id:"version-3.0.3/developers-guide/Observability",title:"Observability",description:"esthesis CORE supports integration with distributed tracing, real-time metrics, and centralised",source:"@site/versioned_docs/version-3.0.3/06-developers-guide/16-Observability.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Observability",permalink:"/docs/3.0.3/developers-guide/Observability",draft:!1,tags:[],version:"3.0.3",sidebarPosition:16,frontMatter:{},sidebar:"sidebar",previous:{title:"Auditing",permalink:"/docs/3.0.3/developers-guide/Auditing"},next:{title:"Release process",permalink:"/docs/3.0.3/developers-guide/Release process"}},l={},p=[{value:"Traces",id:"traces",level:2},{value:"Logging",id:"logging",level:2},{value:"Metrics",id:"metrics",level:2}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"observability"},"Observability"),(0,i.kt)("p",null,"esthesis CORE supports integration with distributed tracing, real-time metrics, and centralised\nlogging."),(0,i.kt)("h2",{id:"traces"},"Traces"),(0,i.kt)("p",null,"Tracing is taking place using Quarkus' ",(0,i.kt)("a",{parentName:"p",href:"https://quarkus.io/guides/opentelemetry"},"OpenTelemetry"),"\nintegration. There are no special source code actions required to enable tracing,\nother than properly configuring traces in ",(0,i.kt)("inlineCode",{parentName:"p"},"application.yaml"),"and",(0,i.kt)("inlineCode",{parentName:"p"},"application-dev.yaml")," files inside\neach module. Note that tracing is disabled by default when a module runs in production, and enabled\nby default when a module runs in development."),(0,i.kt)("p",null,"Quarkus exports traces using OTel gRPC. In the default development setup, traces are received by\nGrafana Loki Distributor at port 4317. The distributor is also listening on port 55681 for OTel HTTP\ntraces (notably, used by APISIX)."),(0,i.kt)("p",null,"To store and visualise traces we use ",(0,i.kt)("a",{parentName:"p",href:"https://grafana.com/oss/tempo"},"Grafana Tempo"),". In our default development setup it is\navailable at ",(0,i.kt)("a",{parentName:"p",href:"http://grafana.esthesis"},"Grafana UI")," > Explore > Tempo."),(0,i.kt)("h2",{id:"logging"},"Logging"),(0,i.kt)("p",null,"Centralised logging is implemented using Quarkus Logging Gelf. All modules export Graylog Extended\nLog Format (GELF) messages that can be captured by a GELF receiver. In the default development\nsetup, GELF messages are received by Grafana Promtail running on the development machine, which then\nforwards them to a Grafana Loki Distributor running on Kubernetes. When you test a production-like\ninstallation, there is a Promtail running inside Kubernetes."),(0,i.kt)("p",null,"Unfortunately, we can not provide a Promtail running in Kubernetes for development as Quarkus Logging\nGelf component only supports forwarding logs using UDP. UDP port-forwarding is not (yet) supported\nin Kubernetes, and alternative setups to expose a UDP port are too complex for a development setup.\nTherefore, for your development setup you run something like the following:"),(0,i.kt)("mermaid",{value:"graph LR\nsubgraph Development machine\n\tA[Promtail]\n\tB[esthesis service]\n\tE[esthesis service]\n\tF[esthesis service]\nend\nB --\x3e|GELF| A\nE --\x3e|GELF| A\nF --\x3e|GELF| A\nA --\x3e|HTTP| C\n\nsubgraph Kubernetes\n\tC[Loki Distributor]\n\tD[Loki]\nend\nC --\x3e D"}),(0,i.kt)("p",null,"You can find how to run Promtail locally in the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0.3/developers-guide/Dev%20Environment%20setup"},"Dev Environment setup")," page."),(0,i.kt)("h2",{id:"metrics"},"Metrics"),(0,i.kt)("p",null,"Metrics are exported using Quarkus' ",(0,i.kt)("a",{parentName:"p",href:"https://quarkus.io/guides/micrometer"},"Micrometer")," integration.\nYou can access the metrics under ",(0,i.kt)("inlineCode",{parentName:"p"},"/q/metrics")," endpoint of each module."))}d.isMDXComponent=!0}}]);