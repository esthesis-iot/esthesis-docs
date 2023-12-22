"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[694],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7152:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={},l="Dev environment setup",s={unversionedId:"developers-guide/Dev Environment setup",id:"version-3.0.2/developers-guide/Dev Environment setup",title:"Dev environment setup",description:"In the following sections you can see how to set up a development environment for esthesis Core. The",source:"@site/versioned_docs/version-3.0.2/06-developers-guide/01-Dev Environment setup.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Dev Environment setup",permalink:"/docs/3.0.2/developers-guide/Dev Environment setup",draft:!1,tags:[],version:"3.0.2",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Developers Guide",permalink:"/docs/3.0.2/developers-guide/"},next:{title:"Working with Helm charts",permalink:"/docs/3.0.2/developers-guide/Working with Helm charts"}},o={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Kubernetes initialisation",id:"kubernetes-initialisation",level:2},{value:"Installation",id:"installation",level:2},{value:"Running the services",id:"running-the-services",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3},{value:"Automation",id:"automation",level:3},{value:"Resources",id:"resources",level:2},{value:"Notes",id:"notes",level:2},{value:"Committing code",id:"committing-code",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dev-environment-setup"},"Dev environment setup"),(0,r.kt)("p",null,"In the following sections you can see how to set up a development environment for esthesis Core. The\ndevelopment environment varies drastically from the production setup, as its purpose is to allow\ndevelopers to quickly implement and test new features."),(0,r.kt)("p",null,"Setting up your development environment is relatively easy, as you can use the production\nenvironment\nHelm charts; with a tweak. The major difference between using Helm to deploy on production and\ncreating\na development environment in your machine is that all esthesis services should run locally on your\nmachine, instead of being deployed to the Kubernetes cluster."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A dev Kubernetes cluster with at least 16GB of RAM. For local development, we have spent more hours\nthat we would like to remember trying to make TCP/UDP port forwarding and ingresses in Minikube,\nKind, Rancher Desktop, etc. work across Linux, Windows, and macOS Intel/Apple with various degrees\nof success. Therefore, we suggest firing up an ",(0,r.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu server"),'\nin the virtualisation platform of your choice, while preselecting Microk8s in the installed packages\nchoice-screen. This way you can have a "real" Kubernetes, single-node cluster, using the same\nKubernetes distribution the rest of us are also using, so we can provide appropriate guidance and\nsetup instructions that work across the board.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"Helmfile")),(0,r.kt)("li",{parentName:"ul"},"Many of the build and helper scripts are written for a Unix shell. If you are on\nWindows, you can use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL")," or\n",(0,r.kt)("a",{parentName:"li",href:"https://www.cygwin.com/"},"Cygwin"),".")),(0,r.kt)("h2",{id:"kubernetes-initialisation"},"Kubernetes initialisation"),(0,r.kt)("p",null,"SSH to your Microk8s VM and enable the following addons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microk8s enable dns")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microk8s enable hostpath-storage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microk8s enable ingress")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microk8s enable registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"microk8s enable metallb"),": Use an IP range routable from your development machine. If you are\nlocated in a corporate network, please check with your network administrators first.")),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the supporting dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core-deps"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile -e dev sync\n")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Once you have performed the initial installation, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"--skip-deps")," flag to skip the skip dependencies check, therefore speeding up your deployment."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the application components in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"DEV_HOST=192.168.100.102 helmfile -e dev sync\n")),(0,r.kt)("admonition",{parentName:"li",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"You need to specify the IP address of your development machine in the ",(0,r.kt)("inlineCode",{parentName:"p"},"DEV_HOST")," environment\nvariable. This is needed so that the API gateway (APISIX) knows where to forward the requests to\n(since in ",(0,r.kt)("inlineCode",{parentName:"p"},"dev")," setup the services run on your own machine, not in Kubernetes)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Update your ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," file by executing ",(0,r.kt)("inlineCode",{parentName:"p"},"sudo ./hosts-file-update.sh"),"."))),(0,r.kt)("h2",{id:"running-the-services"},"Running the services"),(0,r.kt)("p",null,"The above installation will prepare all the necessary components to support esthesis Core. The actual\nbackend services as well as the UI, however, will not be installed in Kubernetes. You need to run\nthese in your local machine. Note that we did try Quarkus' remote development mode, but it was a bit\nfinicky, and we ended up losing time when it was not working or not picking up changes correctly."),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"You can start the Angular frontend by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-core-ui")," directory."),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Each backend service comes with its own ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-{service-name}.sh")," script that you can use to start the\nservice in development mode. You need to run each of the services in a separate terminal window."),(0,r.kt)("p",null,"Before launching the services in your local machine, make sure that your local Kubernetes configuration\npoints to the development cluster. You can do this by running ",(0,r.kt)("inlineCode",{parentName:"p"},"microk8s config")," and copying the\noutput to ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.kube/config"),". This is needed as some of the services need to access the Kubernetes API."),(0,r.kt)("h3",{id:"automation"},"Automation"),(0,r.kt)("p",null,"Starting up (and restarting) all those services manually can be a tedious task. We have prepared a\ntmux script that you can use to start all services in a single terminal window in multiple panes,\nwhile merging all log output into another pane. You can find the script in ",(0,r.kt)("inlineCode",{parentName:"p"},"_dev/tmux-dev.sh"),". We\nalso provide a ",(0,r.kt)("inlineCode",{parentName:"p"},".tmux.conf")," file, in case you want to replicate our own tmux setup."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tmux",src:n(2858).Z,width:"640",height:"514"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can quickly terminate all services by issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux kill-session -t esthesis-dev"),".")),(0,r.kt)("h2",{id:"resources"},"Resources"),(0,r.kt)("p",null,"Provided you have successfully updated your ",(0,r.kt)("inlineCode",{parentName:"p"},"hosts")," file, you can access the following resources:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"URL/host"),(0,r.kt)("th",{parentName:"tr",align:null},"Credentials"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"esthesis Core UI"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:4200"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-admin / esthesis-admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},"mongodb.esthesis.localdev:27017"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka.esthesis.localdev:9094"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://keycloak.esthesis.localdev"},"http://keycloak.esthesis.localdev")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"APISIX Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://apisix-dashboard.esthesis.localdev"},"http://apisix-dashboard.esthesis.localdev")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redis"),(0,r.kt)("td",{parentName:"tr",align:null},"redis.esthesis.localdev:6379/0"),(0,r.kt)("td",{parentName:"tr",align:null},"(empty) / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,r.kt)("td",{parentName:"tr",align:null},"mqtt.esthesis.localdev:1883"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://grafana.esthesis.localdev"},"http://grafana.esthesis.localdev")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InfluxDB HTTP"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://influxdb-ui.esthesis.localdev"},"http://influxdb-ui.esthesis.localdev")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InfluxDB"),(0,r.kt)("td",{parentName:"tr",align:null},"influxdb.esthesis.localdev:8088"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Docker Registry"),(0,r.kt)("td",{parentName:"tr",align:null},"registry.esthesis.localdev"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before trying to log in to the application open the (https) Keycloak URL into your browser in order to\naccept the self-signed certificate. Otherwise, the first redirect from the application's UI to\nKeycloak will fail."),(0,r.kt)("li",{parentName:"ol"},"There is a convenience script ",(0,r.kt)("inlineCode",{parentName:"li"},"destroy.sh")," in the root of each helm package. You can use it to fully\nerase all installations performed for that particular package together with any additional Kubernetes\nresources that do not get automatically deleted by uninstalling the Helm chart (for example, PVCs)."),(0,r.kt)("li",{parentName:"ol"},"Installing all components for development under a single Kubernetes node may require you to\nincrease certain OS limits, here are the ones we have found to be relevant in Ubuntu server 23.04:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo sysctl fs.inotify.max_user_instances=1280\nsudo sysctl fs.inotify.max_user_watches=655360\n")))),(0,r.kt)("h2",{id:"committing-code"},"Committing code"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),".\nThere are plugins for all major IDEs, so you can easily follow the convention."))}m.isMDXComponent=!0},2858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tmux-d71af0c0f437abc97afeb3d1547d6916.gif"}}]);