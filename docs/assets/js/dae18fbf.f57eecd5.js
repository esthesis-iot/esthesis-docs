"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[49598],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,m=u["".concat(s,".").concat(g)]||u[g]||c[g]||l;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},76449:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={},i="Hardware support",o={unversionedId:"device-agent/Hardware-support",id:"version-3.0.44/device-agent/Hardware-support",title:"Hardware support",description:"Raspberry Pi",source:"@site/versioned_docs/version-3.0.44/04-device-agent/06-Hardware-support.md",sourceDirName:"04-device-agent",slug:"/device-agent/Hardware-support",permalink:"/docs/3.0.44/device-agent/Hardware-support",draft:!1,tags:[],version:"3.0.44",sidebarPosition:6,frontMatter:{},sidebar:"sidebar",previous:{title:"Transforming payloads",permalink:"/docs/3.0.44/device-agent/Transforming payloads"},next:{title:"Digital Twins",permalink:"/docs/3.0.44/digital-twins/"}},s={},d=[{value:"Raspberry Pi",id:"raspberry-pi",level:2},{value:"Raspberry Pi support and compatibility",id:"raspberry-pi-support-and-compatibility",level:3},{value:"A Guide to Setting Up Watchdog on Raspberry Pi",id:"a-guide-to-setting-up-watchdog-on-raspberry-pi",level:3},{value:"Activating the watchdog hardware",id:"activating-the-watchdog-hardware",level:4},{value:"Installing the watchdog",id:"installing-the-watchdog",level:4},{value:"Configuring the watchdog",id:"configuring-the-watchdog",level:4},{value:"Starting/Monitoring the watchdog service",id:"startingmonitoring-the-watchdog-service",level:4},{value:"Adding watchdog on boot",id:"adding-watchdog-on-boot",level:4}],p={toc:d},u="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"hardware-support"},"Hardware support"),(0,r.kt)("h2",{id:"raspberry-pi"},"Raspberry Pi"),(0,r.kt)("h3",{id:"raspberry-pi-support-and-compatibility"},"Raspberry Pi support and compatibility"),(0,r.kt)("p",null,"The esthesis device agent supports Raspberry Pi devices, either by using the standalone executable,\nor by using the Docker image. The following table shows the supported Raspberry Pi models and the\ncorresponding architecture:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Model"),(0,r.kt)("th",{parentName:"tr",align:null},"Chip"),(0,r.kt)("th",{parentName:"tr",align:null},"Standalone"),(0,r.kt)("th",{parentName:"tr",align:null},"Docker image"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 1 Model A, A+, B, B+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Zero, Zero W"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 1"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2835"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm6"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v6")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 2 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2836"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 2 Model B (late)"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 3"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 3 Model A+, B+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837B0"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 3+"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2837B0"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm7"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm/v7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 4 Model B"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 400"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi Compute Module 4"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2711"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Raspberry Pi 5"),(0,r.kt)("td",{parentName:"tr",align:null},"BCM2712"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-core-device-linux-arm64"),(0,r.kt)("td",{parentName:"tr",align:null},"linux/arm64")))),(0,r.kt)("h3",{id:"a-guide-to-setting-up-watchdog-on-raspberry-pi"},"A Guide to Setting Up Watchdog on Raspberry Pi"),(0,r.kt)("p",null,"In the realm of Internet of Things (IoT), where devices communicate seamlessly to collect and exchange data, reliability is very important. Raspberry Pi serves as a versatile IoT gateway, facilitating the flow of information between devices and the cloud. However, ensuring continuous operation of the gateway is crucial for uninterrupted data flow. This guide focuses on simplifying the setup and configuration of watchdog on Raspberry Pi, enhancing its reliability as an IoT gateway and ensuring seamless data transmission in IoT ecosystems."),(0,r.kt)("h4",{id:"activating-the-watchdog-hardware"},"Activating the watchdog hardware"),(0,r.kt)("p",null,"To start the process, we need to activate the watchdog hardware. By modifying the /boot/firmware/config.txt file, we enable the watchdog functionality on Raspberry Pi. This step ensures that the system can automatically reboot in case of unresponsiveness, a critical feature for IoT gateways."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano  /boot/firmware/config.txt\n")),(0,r.kt)("p",null,"Add the following line at the end of the file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Enabling watchdog.\ndtparam=watchdog=on\n")),(0,r.kt)("p",null,"Once saved, reboot your Raspberry Pi. To confirm activation, list the watchdog devices:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -al /dev/watchdog*\n")),(0,r.kt)("h4",{id:"installing-the-watchdog"},"Installing the watchdog"),(0,r.kt)("p",null,"Now, let's install the watchdog software package. This step ensures that the necessary tools and services are in place to monitor and manage the watchdog functionality on Raspberry Pi."),(0,r.kt)("p",null,"Execute the following command to install watchdog:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install watchdog\n")),(0,r.kt)("p",null,"Verify the installation and necessary systemd files:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -l /lib/systemd/system/\n")),(0,r.kt)("p",null,"Additionally, review the default configuration to ensure proper setup:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ls -al /etc/default/watchdog\n")),(0,r.kt)("h4",{id:"configuring-the-watchdog"},"Configuring the watchdog"),(0,r.kt)("p",null,"With the watchdog installed, it's time to configure its behavior. By editing the configuration file, we define parameters such as maximum load, minimum memory usage, and the watchdog device to monitor."),(0,r.kt)("p",null,"Edit the configuration file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nano /etc/watchdog.conf\n")),(0,r.kt)("p",null,"Ensure the following lines are uncommented or added:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"max-load-1 = 24\nmin-memory = 1\nwatchdog-device = /dev/watchdog\n")),(0,r.kt)("p",null,"To prevent timeout errors, include:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"watchdog-timeout=15\n")),(0,r.kt)("h4",{id:"startingmonitoring-the-watchdog-service"},"Starting/Monitoring the watchdog service"),(0,r.kt)("p",null,"With the watchdog configured, let's start the service and monitor its status. This step ensures that the watchdog is actively monitoring the system for any signs of unresponsiveness."),(0,r.kt)("p",null,"Start the service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl start watchdog\n")),(0,r.kt)("p",null,"Check the status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status watchdog\n")),(0,r.kt)("p",null,"Refer to the troubleshooting section for any timeout errors encountered during this step."),(0,r.kt)("h4",{id:"adding-watchdog-on-boot"},"Adding watchdog on boot"),(0,r.kt)("p",null,"Lastly, we ensure that the watchdog service starts automatically upon boot. This step guarantees continuous monitoring of the Raspberry Pi IoT gateway, even after a reboot or power cycle."),(0,r.kt)("p",null,"Edit the watchdog service file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo nano /lib/systemd/system/watchdog.service\n")),(0,r.kt)("p",null,"Add the following lines under the Install section:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[Install]\nWantedBy=multi-user.target\n")),(0,r.kt)("p",null,"Save the changes and enable watchdog on boot:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl enable watchdog\n")))}c.isMDXComponent=!0}}]);