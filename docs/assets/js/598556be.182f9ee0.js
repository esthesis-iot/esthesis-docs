"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[7360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(h,i(i({ref:t},d),{},{components:n})):o.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},34433:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={},i="Frequently Asked Quesstions",s={unversionedId:"developers-guide/FAQ",id:"version-3.0.2/developers-guide/FAQ",title:"Frequently Asked Quesstions",description:"I am using VirtualBox and the IP address my VM gets is not accessible from my machine",source:"@site/versioned_docs/version-3.0.2/06-developers-guide/99-FAQ.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/FAQ",permalink:"/docs/3.0.2/developers-guide/FAQ",draft:!1,tags:[],version:"3.0.2",sidebarPosition:99,frontMatter:{},sidebar:"sidebar",previous:{title:"Release process",permalink:"/docs/3.0.2/developers-guide/Release process"},next:{title:"esthesis Line Protocol (eLP)",permalink:"/docs/3.0.2/References/esthesis-line-protocol"}},l={},c=[{value:"I am using VirtualBox and the IP address my VM gets is not accessible from my machine",id:"i-am-using-virtualbox-and-the-ip-address-my-vm-gets-is-not-accessible-from-my-machine",level:2},{value:"When I change APISIX routes and I sync them with Helmfile, the routes do not change.",id:"when-i-change-apisix-routes-and-i-sync-them-with-helmfile-the-routes-do-not-change",level:2},{value:"On my dev cluster I get &quot;Too many open files&quot; when I try to follow logs.",id:"on-my-dev-cluster-i-get-too-many-open-files-when-i-try-to-follow-logs",level:2},{value:"How to set a static IP in Ubuntu Server 23.04",id:"how-to-set-a-static-ip-in-ubuntu-server-2304",level:2},{value:"How to connect IntelliJ to MongoDB",id:"how-to-connect-intellij-to-mongodb",level:2},{value:"How to connect to MongoDB from MongoDB Compass",id:"how-to-connect-to-mongodb-from-mongodb-compass",level:2},{value:"How to create a token in InfluxDB",id:"how-to-create-a-token-in-influxdb",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(p,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"frequently-asked-quesstions"},"Frequently Asked Quesstions"),(0,r.kt)("h2",{id:"i-am-using-virtualbox-and-the-ip-address-my-vm-gets-is-not-accessible-from-my-machine"},"I am using VirtualBox and the IP address my VM gets is not accessible from my machine"),(0,r.kt)("p",null,"By default, VirtualBox creates a NATed VM. Switch your VM's network to 'Bridged':\n",(0,r.kt)("img",{src:n(91820).Z,width:"596",height:"496"})),(0,r.kt)("h2",{id:"when-i-change-apisix-routes-and-i-sync-them-with-helmfile-the-routes-do-not-change"},"When I change APISIX routes and I sync them with Helmfile, the routes do not change."),(0,r.kt)("p",null,"APISIX routes are implemented as CRDs and Helm ",(0,r.kt)("a",{parentName:"p",href:"https://helm.sh/docs/chart_best_practices/custom_resource_definitions/"},"does not support updating or deleting CRDs"),". To update an existing CRD you need to\nfirst manually delete it and ",(0,r.kt)("inlineCode",{parentName:"p"},"helmfile sync")," again."),(0,r.kt)("h2",{id:"on-my-dev-cluster-i-get-too-many-open-files-when-i-try-to-follow-logs"},'On my dev cluster I get "Too many open files" when I try to follow logs.'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SSH to your dev cluster."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sudo vi /etc/sysctl.conf")),(0,r.kt)("li",{parentName:"ol"},"Add the following lines:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"fs.inotify.max_user_instances = 131072\nfs.inotify.max_user_watches = 131072\n"))),(0,r.kt)("li",{parentName:"ol"},"Reboot your dev cluster")),(0,r.kt)("h2",{id:"how-to-set-a-static-ip-in-ubuntu-server-2304"},"How to set a static IP in Ubuntu Server 23.04"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Edit networking configuration:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo nano /etc/netplan/00-installer-config-yaml\n"))),(0,r.kt)("li",{parentName:"ol"},"Match the IP address as well as the gateway and nameservers to your environment:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# This is the network config written by 'subiquity'\nnetwork:\n ethernets:\n    eth0:\n      dhcp4: false\n      addresses: [192.168.2.12/24]\n      routes:\n       - to: default\n         via: 192.168.2.1\n      nameservers:\n       addresses: [8.8.8.8,8.8.4.4]\n version: 2\n"))),(0,r.kt)("li",{parentName:"ol"},"Update the configuration",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"sudo netplan apply\n"))),(0,r.kt)("li",{parentName:"ol"},"Verify you got the IP defined above:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ip addr\n")))),(0,r.kt)("h2",{id:"how-to-connect-intellij-to-mongodb"},"How to connect IntelliJ to MongoDB"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(42251).Z,width:"1095",height:"863"})),(0,r.kt)("h2",{id:"how-to-connect-to-mongodb-from-mongodb-compass"},"How to connect to MongoDB from MongoDB Compass"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(57509).Z,width:"1126",height:"939"}),"\n",(0,r.kt)("img",{src:n(93718).Z,width:"1126",height:"939"})),(0,r.kt)("h2",{id:"how-to-create-a-token-in-influxdb"},"How to create a token in InfluxDB"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Open the InfluxDB UI, e.g. ",(0,r.kt)("a",{parentName:"li",href:"http://influxdb-ui.esthesis.localdev"},"http://influxdb-ui.esthesis.localdev"),"."),(0,r.kt)("li",{parentName:"ol"},"Hover on the sidebar icon depicting an arrow pointing up."),(0,r.kt)("li",{parentName:"ol"},"Select 'API Tokens'."),(0,r.kt)("li",{parentName:"ol"},"Click on 'Generate API Token' button and choose \"All Access API Token\"."),(0,r.kt)("li",{parentName:"ol"},"Give a description."),(0,r.kt)("li",{parentName:"ol"},"Copy the token and save it somewhere safe.")))}u.isMDXComponent=!0},42251:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Data_Sources_and_Drivers-1f2cf5d13823b486faac45567ef79b8b.png"},57509:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compass1-b739ed7cdaf9ba29516c17bc13691a0e.png"},93718:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/compass2-7afb76ebc495c4606466f18ee7330e12.png"},91820:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/vbox-bridged-e8d0555981bc751fb21bca2cae108757.png"}}]);