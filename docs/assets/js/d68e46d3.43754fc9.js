"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[5829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=i,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:i,l[1]=s;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2079:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={},l="Dev environment setup",s={unversionedId:"developers-guide/Dev Environment setup",id:"version-3.0.3/developers-guide/Dev Environment setup",title:"Dev environment setup",description:"In the following sections you can see how to set up a development environment for esthesis Core. The",source:"@site/versioned_docs/version-3.0.3/06-developers-guide/01-Dev Environment setup.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Dev Environment setup",permalink:"/docs/developers-guide/Dev Environment setup",draft:!1,tags:[],version:"3.0.3",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Developers Guide",permalink:"/docs/developers-guide/"},next:{title:"Working with Helm charts",permalink:"/docs/developers-guide/Working with Helm charts"}},o={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Kubernetes initialisation",id:"kubernetes-initialisation",level:2},{value:"Installation",id:"installation",level:2},{value:"Access to resources",id:"access-to-resources",level:2},{value:"Running the services",id:"running-the-services",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3},{value:"Automation",id:"automation",level:3},{value:"Committing code",id:"committing-code",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"dev-environment-setup"},"Dev environment setup"),(0,i.kt)("p",null,"In the following sections you can see how to set up a development environment for esthesis Core. The\ndevelopment environment varies drastically from the production setup, as its purpose is to allow\ndevelopers to quickly implement and test new features."),(0,i.kt)("p",null,"Setting up your development environment is relatively easy, as you can use the production\nenvironment Helm charts; with a tweak. The major difference between using Helm to deploy on production and\ncreating a development environment in your machine is that all esthesis services should run locally on your\nmachine, instead of being deployed to the Kubernetes cluster."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A dev Kubernetes cluster with at least 16GB of RAM. We suggest firing up an ",(0,i.kt)("a",{parentName:"li",href:"https://ubuntu.com/download/server"},"Ubuntu server"),"\nin the virtualisation platform of your choice, while preselecting Microk8s in the installed packages\nscreen. This way you can have a single-node cluster, using the same Kubernetes distribution the\nrest of us are also using, so we can provide appropriate guidance and setup instructions that work\nacross the board."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"Helmfile")),(0,i.kt)("li",{parentName:"ul"},"Many of the build and helper scripts are written for a Unix/Linux shell. If you are on\nWindows, you can use ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL")," or ",(0,i.kt)("a",{parentName:"li",href:"https://www.cygwin.com/"},"Cygwin"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki/releases"},"Promtail"),". Promtail is used to provide a local UDP GELF\nendpoint to collect logs and forward them to Loki. If you want to develop and test Loki functionality\nyou need to be running Promtail with the configuration file in ",(0,i.kt)("inlineCode",{parentName:"li"},"_dev/promtail/config.yaml"),", e.g.\n",(0,i.kt)("inlineCode",{parentName:"li"},"promtail --config.file=config.yaml"),".")),(0,i.kt)("h2",{id:"kubernetes-initialisation"},"Kubernetes initialisation"),(0,i.kt)("p",null,"SSH to your Microk8s VM and enable the following addons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"microk8s enable dns")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"microk8s enable hostpath-storage")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"microk8s enable registry")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"microk8s enable ingress"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the supporting dependencies in ",(0,i.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core-deps"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile -e dev sync\n")),(0,i.kt)("admonition",{parentName:"li",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Once you have performed the initial installation, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--skip-deps")," flag to skip the\ndependencies check, therefore speeding up your deployment."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Install the application components in ",(0,i.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"DEV_HOST=192.168.40.236 helmfile -e dev sync\n")),(0,i.kt)("admonition",{parentName:"li",type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You need to specify the IP address of your development machine in the ",(0,i.kt)("inlineCode",{parentName:"p"},"DEV_HOST")," environment\nvariable. This is needed so that the API gateway (APISIX) knows where to forward the requests to\n(since in ",(0,i.kt)("inlineCode",{parentName:"p"},"dev")," setup the services run on your own machine, not in Kubernetes).")))),(0,i.kt)("h2",{id:"access-to-resources"},"Access to resources"),(0,i.kt)("p",null,"To proxy the Kubernetes services of the project to your local machine for development purposes, you\ncan use ",(0,i.kt)("a",{parentName:"p",href:"https://kubefwd.com"},"kubefwd")," and execute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo -E kubefwd svc -d esthesis\n")),(0,i.kt)("p",null,"kubefwd will proxy all services to your localhost and create local DNS entries for them. The table\nbelow summarises the resources you can access after running the above command. Note that if you have\ndeployed the services in a different namespace than ",(0,i.kt)("inlineCode",{parentName:"p"},"esthesis"),", you need to adjust the namespace\nelement in the table below:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Resource"),(0,i.kt)("th",{parentName:"tr",align:null},"URL/host"),(0,i.kt)("th",{parentName:"tr",align:null},"Credentials"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"APISIX Dashboard"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://apisix-dashboard.esthesis"},"http://apisix-dashboard.esthesis")),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Redis"),(0,i.kt)("td",{parentName:"tr",align:null},"redis-master.esthesis:6379/0"),(0,i.kt)("td",{parentName:"tr",align:null},"(empty) / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Mosquitto"),(0,i.kt)("td",{parentName:"tr",align:null},"mosquitto.esthesis:1883"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://grafana.esthesis:3000"},"http://grafana.esthesis:3000")),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"InfluxDB Admin UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://influxdb.esthesis:8086"},"http://influxdb.esthesis:8086")),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"InfluxDB"),(0,i.kt)("td",{parentName:"tr",align:null},"influxdb.esthesis:8088"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,i.kt)("td",{parentName:"tr",align:null},"mongodb.esthesis:27017"),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"esthesis Core UI"),(0,i.kt)("td",{parentName:"tr",align:null},"http://localhost:4200"),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-admin / esthesis-admin")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Keycloak"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://keycloak.esthesis"},"http://keycloak.esthesis")),(0,i.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,i.kt)("td",{parentName:"tr",align:null},"kafka.esthesis:9095"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Kafka UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://kafka-ui.esthesis"},"http://kafka-ui.esthesis")),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Docker Registry UI"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"http://docker-registry-ui-docker-registry-ui-user-interface.esthesis"},"http://docker-registry-ui-docker-registry-ui-user-interface.esthesis")),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",{id:"running-the-services"},"Running the services"),(0,i.kt)("p",null,"The above installation will prepare all the necessary components to support esthesis Core. The actual\nbackend services as well as the UI, however, will not be installed in Kubernetes. You need to run\nthese in your local machine. Note that we did try Quarkus' remote development mode, but it was a bit\nfinicky, and we ended up losing time when it was not working or not picking up changes correctly."),(0,i.kt)("h3",{id:"frontend"},"Frontend"),(0,i.kt)("p",null,"You can start the Angular frontend by running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm start")," in ",(0,i.kt)("inlineCode",{parentName:"p"},"esthesis-core-ui")," directory."),(0,i.kt)("h3",{id:"backend"},"Backend"),(0,i.kt)("p",null,"Each backend service comes with its own ",(0,i.kt)("inlineCode",{parentName:"p"},"dev-{service-name}.sh")," script that you can use to start the\nservice in development mode. You need to run each of the services in a separate terminal window."),(0,i.kt)("h3",{id:"automation"},"Automation"),(0,i.kt)("p",null,"Starting up (and restarting) all those services manually can be a tedious task. We have prepared a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"tmux")," script that you can use to start all services in a single\nterminal window in multiple panes, while merging all log output into another pane. You can find the\nscript in ",(0,i.kt)("inlineCode",{parentName:"p"},"_dev/tmux-dev.sh"),". We also provide a ",(0,i.kt)("inlineCode",{parentName:"p"},".tmux.conf")," file, in case you want to replicate our\nown tmux look and feel."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tmux",src:n(2858).Z,width:"640",height:"514"})),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"You can quickly terminate all services by issuing ",(0,i.kt)("inlineCode",{parentName:"p"},"tmux kill-session -t esthesis-dev"),".")),(0,i.kt)("h2",{id:"committing-code"},"Committing code"),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),".\nThere are plugins for all major IDEs, so you can easily follow the convention."),(0,i.kt)("h2",{id:"notes"},"Notes"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Before trying to log in to the application open the (https) Keycloak URL into your browser in order to\naccept the self-signed certificate. Otherwise, the first redirect from the application's UI to\nKeycloak will fail."),(0,i.kt)("li",{parentName:"ol"},"There is a convenience script ",(0,i.kt)("inlineCode",{parentName:"li"},"destroy.sh")," in the root of each helm package. You can use it to fully\nerase all installations performed for that particular package together with any additional Kubernetes\nresources that do not get automatically deleted by uninstalling the Helm chart (for example, PVCs)."),(0,i.kt)("li",{parentName:"ol"},"Installing all components for development under a single Kubernetes node may require you to\nincrease certain OS limits, here are the ones we have found to be relevant in Ubuntu server 23.04:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"sudo sysctl fs.inotify.max_user_instances=1280\nsudo sysctl fs.inotify.max_user_watches=655360\n"))),(0,i.kt)("li",{parentName:"ol"},"You can create a ",(0,i.kt)("inlineCode",{parentName:"li"},"local-env.sh")," script alongside the ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-{service}.sh")," scripts to customise your\nlocal development environment. If such a file exist, it will be sourced by the ",(0,i.kt)("inlineCode",{parentName:"li"},"dev-{service}.sh"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"srv-kubernetes")," service needs to be able to create new pods in your Kubernetes environment. This\nrequires a valid ",(0,i.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," file in your home directory. In case you are splitting your\nKubernetes config into multiple files, you can use the ",(0,i.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable to point\nto the config file you want to use. You can specify this variable in your ",(0,i.kt)("inlineCode",{parentName:"li"},"local-env.sh")," file as\nexplained above.")))}m.isMDXComponent=!0},2858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tmux-d71af0c0f437abc97afeb3d1547d6916.gif"}}]);