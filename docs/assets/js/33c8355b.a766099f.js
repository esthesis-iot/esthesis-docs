"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[26281],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>h});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=t.createContext({}),p=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?t.createElement(h,i(i({ref:n},c),{},{components:a})):t.createElement(h,i({ref:n},c))}));function h(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},50397:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var t=a(87462),r=(a(67294),a(3905));const o={},i="Transforming payloads",l={unversionedId:"device-agent/Transforming payloads",id:"version-3.0.40/device-agent/Transforming payloads",title:"Transforming payloads",description:"The embedded MQTT and HTTP endpoints allow the device agent to receive data from external sources",source:"@site/versioned_docs/version-3.0.40/04-device-agent/05-Transforming payloads.md",sourceDirName:"04-device-agent",slug:"/device-agent/Transforming payloads",permalink:"/docs/3.0.40/device-agent/Transforming payloads",draft:!1,tags:[],version:"3.0.40",sidebarPosition:5,frontMatter:{},sidebar:"sidebar",previous:{title:"Embedded endpoints",permalink:"/docs/3.0.40/device-agent/Embedded endpoints"},next:{title:"Hardware support",permalink:"/docs/3.0.40/device-agent/Hardware-support"}},s={},p=[{value:"Lua incoming payload variable",id:"lua-incoming-payload-variable",level:2},{value:"Example Lua script",id:"example-lua-script",level:3},{value:"Lua incoming endpoint variable",id:"lua-incoming-endpoint-variable",level:2},{value:"Example Lua script making use of the endpoint variable",id:"example-lua-script-making-use-of-the-endpoint-variable",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transforming-payloads"},"Transforming payloads"),(0,r.kt)("p",null,"The embedded MQTT and HTTP endpoints allow the device agent to receive data from external sources\nusing the ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.40/References/esthesis-line-protocol"},"eLP protocol"),". When the external sources\nare under your control, eLP is a simple protocol you can easily work with. However, when the\nexternal sources are not under your control, you may need to transform their payloads before they\nare sent to the device agent."),(0,r.kt)("p",null,"esthesis device agent allows you to transform payloads using external Lua scripts, for both MQTT\nand HTTP endpoints (see the ",(0,r.kt)("inlineCode",{parentName:"p"},"LUA*")," parameters in ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.0.40/device-agent/Configuration%20parameters"},"Configuration parameters"),"\nfor more details)."),(0,r.kt)("h2",{id:"lua-incoming-payload-variable"},"Lua incoming payload variable"),(0,r.kt)("p",null,"In your Lua script, you have access to the original payload in the ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," variable; the variable\nis a string. You can modify the payload as you wish, and simply ",(0,r.kt)("inlineCode",{parentName:"p"},"return")," it at the end."),(0,r.kt)("h3",{id:"example-lua-script"},"Example Lua script"),(0,r.kt)("p",null,"Let us consider an external data source that pushes data in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cpu\ntemperature=20\nload=2\n")),(0,r.kt)("p",null,"The first line is always the category name, whereas the remaining lines contain individual measurements\nfor that category. Measurements are separated by an equal sign."),(0,r.kt)("p",null,"We want to transform this incoming payload to eLP format, such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"cpu temperature=20,load=2\n")),(0,r.kt)("p",null,"The following Lua script could be used to achieve this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Splitting the payload into lines\nlocal lines = {}\nfor line in payload:gmatch("[^\\r\\n]+") do\n    table.insert(lines, line)\nend\n\n-- Extracting the category and measurements\nlocal category = lines[1]\nlocal measurements = {}\nfor i = 2, #lines do\n    local measurement = lines[i]:gsub("%s+", "")  -- Remove whitespace\n    table.insert(measurements, measurement)\nend\n\n-- Constructing the single-line format\nlocal transformedPayload = category .. " " .. table.concat(measurements, ",")\n\nreturn transformedPayload\n')),(0,r.kt)("h2",{id:"lua-incoming-endpoint-variable"},"Lua incoming endpoint variable"),(0,r.kt)("p",null,"In your Lua script, you also have access to an additional variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint"),".\nThis variable contains the MQTT topic or HTTP URI, depending on the source of the incoming payload.\nThis can be used to help determine the logic to apply when modifying the payload based on the specific\nendpoint on which data was received."),(0,r.kt)("h3",{id:"example-lua-script-making-use-of-the-endpoint-variable"},"Example Lua script making use of the endpoint variable"),(0,r.kt)("p",null,"You have a system that sends data into the following MQTT topics:"),(0,r.kt)("p",null," ",(0,r.kt)("strong",{parentName:"p"},"sensor/hardware/cpu"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"temperature=20\nload=2\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"sensor/hardware/memory"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"free=80\nused=20\nloadAverage=50\n")),(0,r.kt)("p",null,"The format of the data is exactly the same, so you want to implement your\nLua script logic only once, however the resulting eLP should be differentiated based on the topic\nin which the data was received."),(0,r.kt)("p",null,"Below is an example of how to utilise the ",(0,r.kt)("inlineCode",{parentName:"p"},"endpoint")," variable in your Lua script to handle that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-lua"},'-- Splitting the payload into lines\n\nlocal lines = {}\nfor line in payload:gmatch("[^\\r\\n]+") do\n    table.insert(lines, line)\nend\n\n-- Extracting the category and measurements\nlocal measurements = {}\nfor i = 1, #lines do\n    local measurement = lines[i]:gsub("%s+", "")  -- Remove whitespace\n    table.insert(measurements, measurement)\nend\n\n-- Logic based on the endpoint\nif endpoint == "sensor/hardware/cpu" then\n    -- Specific logic for CPU sensor\n    transformedPayload = "cpu " .. table.concat(measurements, ",")\nelseif endpoint == "sensor/hardware/memory" then\n    -- Specific logic for Chipset sensor\n    transformedPayload = "memory " .. table.concat(measurements, ",")\nelse\n    -- Default logic for other endpoints (if any)\n    transformedPayload =  "hardware " .. table.concat(measurements, ",")\nend\n\nreturn transformedPayload\n')))}u.isMDXComponent=!0}}]);