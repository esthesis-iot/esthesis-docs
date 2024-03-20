"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[33079],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=i,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||r;return a?n.createElement(f,l(l({ref:t},u),{},{components:a})):n.createElement(f,l({ref:t},u))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9946:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(87462),i=(a(67294),a(3905));const r={},l="esthesis Line Protocol (eLP)",o={unversionedId:"References/esthesis-line-protocol",id:"version-3.0.33/References/esthesis-line-protocol",title:"esthesis Line Protocol (eLP)",description:"The esthesis Line Protocol (eLP) is a simple, text-based protocol, allowing you to push data to",source:"@site/versioned_docs/version-3.0.33/08-References/01-esthesis-line-protocol.md",sourceDirName:"08-References",slug:"/References/esthesis-line-protocol",permalink:"/docs/3.0.33/References/esthesis-line-protocol",draft:!1,tags:[],version:"3.0.33",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Frequently Asked Quesstions",permalink:"/docs/3.0.33/developers-guide/FAQ"},next:{title:"Avro support",permalink:"/docs/3.0.33/References/avro-support"}},s={},p=[{value:"Specification",id:"specification",level:2},{value:"Value typing",id:"value-typing",level:3},{value:"Examples",id:"examples",level:2},{value:"Send the cpu load:",id:"send-the-cpu-load",level:4},{value:"Send the cpu load for a specific point in time:",id:"send-the-cpu-load-for-a-specific-point-in-time",level:4},{value:"Send the cpu load and temperature:",id:"send-the-cpu-load-and-temperature",level:4},{value:"Send the cpu load and temperature for a specific point in time:",id:"send-the-cpu-load-and-temperature-for-a-specific-point-in-time",level:4},{value:"Specifying a specific value type (i.e. float) for a measurement:",id:"specifying-a-specific-value-type-ie-float-for-a-measurement",level:4},{value:"Sending text data:",id:"sending-text-data",level:4},{value:"Sending multiple lines:",id:"sending-multiple-lines",level:4}],u={toc:p},c="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"esthesis-line-protocol-elp"},"esthesis Line Protocol (eLP)"),(0,i.kt)("p",null,"The esthesis Line Protocol (eLP) is a simple, text-based protocol, allowing you to push data to\nthe official device agent, or if you have a custom agent, to a data broker from which an esthesis\nDataflow reads data form."),(0,i.kt)("h2",{id:"specification"},"Specification"),(0,i.kt)("p",null,"eLP consists of text-based messages conveying information that should be processed by esthesis\nCore. Each message may contain multiple lines, and each line may contain multiple values. Here is\nan overview of a line following the eLP format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"category measurement1=value1[,measurement2=value2...] [timestamp]\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"category"),", is an arbitrary, alphanumeric value, specifying the category the measurements belong\nto. It should start with a letter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"measurement"),", is an arbitrary, alphanumeric value, specifying the name of a measurement. It should start with a letter.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"value"),", is an arbitrary, alphanumeric value, specifying the value of a measurement.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"timestamp"),", should be expressed as a string, following ",(0,i.kt)("a",{href:"https://en.wikipedia.org/wiki/ISO_8601",target:"_new"},"ISO-8601"),".\nThe timestamp value is shared between all measurements of the same line. If you need to send\nmultiple measurements with each one having a unique timestamp, split them in different lines\nand specify a separate timestamp for each. If a timestamp value is not present, the time at the time of processing the message will be used as a timestamp."))),(0,i.kt)("h3",{id:"value-typing"},"Value typing"),(0,i.kt)("p",null,"When an eLP message is received by an esthesis Dataflow, the dataflow will try to determine the type\nof the value using reasonable defaults. However, you may find cases where automatic value type\ndiscovery is not what you would expect. For those cases, you can specify the type of the value by\nusing suffixes. Here is the list of prefixes you can use:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Integer: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"i")," to the value, e.g. 123i"),(0,i.kt)("li",{parentName:"ul"},"Float: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"f")," to the value, e.g. 123.456f"),(0,i.kt)("li",{parentName:"ul"},"Long: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"l")," to the value, e.g. 1234567890123456789l"),(0,i.kt)("li",{parentName:"ul"},"Double: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"d")," to the value, e.g. 123.456d"),(0,i.kt)("li",{parentName:"ul"},"Short: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"s")," to the value, e.g. 123s"),(0,i.kt)("li",{parentName:"ul"},"Byte: append a ",(0,i.kt)("inlineCode",{parentName:"li"},"b")," to the value, e.g. 123b"),(0,i.kt)("li",{parentName:"ul"},"Boolean: ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"false")),(0,i.kt)("li",{parentName:"ul"},"String: enclose the value is single quotes, e.g. 'myval'")),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h4",{id:"send-the-cpu-load"},"Send the cpu load:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1\n")),(0,i.kt)("h4",{id:"send-the-cpu-load-for-a-specific-point-in-time"},"Send the cpu load for a specific point in time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1 2022-01-01T01:02:03Z\n")),(0,i.kt)("h4",{id:"send-the-cpu-load-and-temperature"},"Send the cpu load and temperature:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1,temperature=20\n")),(0,i.kt)("h4",{id:"send-the-cpu-load-and-temperature-for-a-specific-point-in-time"},"Send the cpu load and temperature for a specific point in time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1,temperature=20 2022-01-01T01:02:03Z\n")),(0,i.kt)("h4",{id:"specifying-a-specific-value-type-ie-float-for-a-measurement"},"Specifying a specific value type (i.e. float) for a measurement:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1f\n")),(0,i.kt)("h4",{id:"sending-text-data"},"Sending text data:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},'net ip1="primary 192.168.1.1"\n')),(0,i.kt)("h4",{id:"sending-multiple-lines"},"Sending multiple lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"cpu load=1\ncpu load=1 2022-01-01T01:02:03Z\ncpu temperature=20 2022-01-01T03:02:03Z\ncpu threads=102,temperature=29\ncpu threads=102,temperature=29 2022-01-01T01:02:03Z\n")))}m.isMDXComponent=!0}}]);