"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[55346],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),c=r,h=d["".concat(o,".").concat(c)]||d[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},15204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={},l="Dev environment setup",s={unversionedId:"developers-guide/Dev Environment setup",id:"version-3.0.44/developers-guide/Dev Environment setup",title:"Dev environment setup",description:"In the following sections you can see how to set up a development environment for esthesis CORE. The",source:"@site/versioned_docs/version-3.0.44/07-developers-guide/01-Dev Environment setup.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Dev Environment setup",permalink:"/docs/3.0.44/developers-guide/Dev Environment setup",draft:!1,tags:[],version:"3.0.44",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Developers Guide",permalink:"/docs/3.0.44/developers-guide/"},next:{title:"Working with Helm charts",permalink:"/docs/3.0.44/developers-guide/Working with Helm charts"}},o={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Kubernetes initialisation",id:"kubernetes-initialisation",level:2},{value:"Installation",id:"installation",level:2},{value:"Access to resources",id:"access-to-resources",level:2},{value:"Running the services",id:"running-the-services",level:2},{value:"Frontend",id:"frontend",level:3},{value:"Backend",id:"backend",level:3},{value:"Automation",id:"automation",level:3},{value:"Committing code",id:"committing-code",level:2},{value:"Notes",id:"notes",level:2}],u={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dev-environment-setup"},"Dev environment setup"),(0,r.kt)("p",null,"In the following sections you can see how to set up a development environment for esthesis CORE. The\ndevelopment environment varies drastically from the production setup, as its purpose is to allow\ndevelopers to quickly implement and test new features."),(0,r.kt)("p",null,"Setting up your development environment is relatively easy, as you can use the production\nenvironment Helm charts; with a tweak. The major difference between using Helm to deploy on production and\ncreating a development environment in your machine is that all esthesis services should run locally on your\nmachine, instead of being deployed to the Kubernetes cluster."),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A dev Kubernetes cluster with at least 16GB of RAM."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"Helmfile")),(0,r.kt)("li",{parentName:"ul"},"Many of the build and helper scripts are written for a Unix/Linux shell. If you are on\nWindows, you can use ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL")," or ",(0,r.kt)("a",{parentName:"li",href:"https://www.cygwin.com/"},"Cygwin"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/grafana/loki/releases"},"Promtail"),". Promtail is used to provide a local UDP GELF\nendpoint to collect logs and forward them to Loki. If you want to develop and test Loki functionality\nyou need to be running Promtail with the configuration file in ",(0,r.kt)("inlineCode",{parentName:"li"},"_dev/promtail/config.yaml"),", e.g.\n",(0,r.kt)("inlineCode",{parentName:"li"},"promtail --config.file=config.yaml"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/ahmetb/kubectx"},"Kubens + Kubectx")," for easy context and namespace switching.")),(0,r.kt)("h2",{id:"kubernetes-initialisation"},"Kubernetes initialisation"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,'Unless you are on a cluster shared with others, create and use a namespace named "esthesis", so that\nyou can follow the instructions below without having to change parameters. If you are using a\ndifferent namespace, replace it accordingly.'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the supporting dependencies in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core-deps"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```shell\nhelmfile -e dev sync --namespace=esthesis\n```\n\n:::tip\nOnce you have performed the initial installation, you can use the `--skip-deps` flag to skip the\n")),(0,r.kt)("p",{parentName:"li"},"  dependencies check, therefore speeding up your re-deployment.\n:::"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Several supporting services are disabled by default. You can enable the following services by\nsetting their respective environment values to `true` before running `helmfile`:\n\n| Service            | Environment variable  |\n|--------------------|-----------------------|\n| Grafana            | GRAFANA_ENABLED       |\n| Grafana Loki       | GRAFANA_LOKI_ENABLED  |\n| Grafana Tempo      | GRAFANA_TEMPO_ENABLED |\n| Container Registry | REGISTRY_ENABLED      |\n| Kafka UI           | KAFKA_UI_ENABLED      |\n| Orion LD           | ORION_LD_ENABLED      |\n")),(0,r.kt)("p",{parentName:"li"},"d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install the application components in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-helm/esthesis-core"),":"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile -e dev sync --namespace=esthesis\n")))),(0,r.kt)("h2",{id:"access-to-resources"},"Access to resources"),(0,r.kt)("p",null,"To proxy the Kubernetes services of the project to your local machine for development purposes, you\ncan use ",(0,r.kt)("a",{parentName:"p",href:"https://kubefwd.com"},"kubefwd")," and execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo -E kubefwd svc -d esthesis\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"kubefwd will proxy all services to your localhost and create local DNS entries for them. The table\nbelow summarises the resources you can access after running the above command. Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<namespace>"),"\nwith the namespace you have deployed the services to. Note that if you have\ndeployed the services in a different namespace than ",(0,r.kt)("inlineCode",{parentName:"li"},"esthesis"),", you need to adjust the namespace\nelement in the domains in the table below:"),(0,r.kt)("li",{parentName:"ol"},"You may need to, occasionally, restart kubefwd, especially if pods get recreated often or if your\ndevelopment machine went through sleep mode."),(0,r.kt)("li",{parentName:"ol"},"The Container Registry is deployed as a NodePort service with a randomly assigned port. If you\nneed to specify your own port, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"REGISTRY_NODE_PORT")," environment variable when\ndeploying the Helm Chart.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Resource"),(0,r.kt)("th",{parentName:"tr",align:null},"URL/host"),(0,r.kt)("th",{parentName:"tr",align:null},"Credentials"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Redis"),(0,r.kt)("td",{parentName:"tr",align:null},"redis-master.esthesis:6379/0"),(0,r.kt)("td",{parentName:"tr",align:null},"(empty) / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mosquitto"),(0,r.kt)("td",{parentName:"tr",align:null},"mosquitto.esthesis:1883"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Grafana"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://grafana.esthesis:3000"},"http://grafana.esthesis:3000")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InfluxDB Admin UI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://influxdb.esthesis:8086"},"http://influxdb.esthesis:8086")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"InfluxDB"),(0,r.kt)("td",{parentName:"tr",align:null},"influxdb.esthesis:8088"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MongoDB"),(0,r.kt)("td",{parentName:"tr",align:null},"mongodb-headless.esthesis:27017"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"esthesis CORE UI"),(0,r.kt)("td",{parentName:"tr",align:null},"http://localhost:4200"),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-admin / esthesis-admin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keycloak"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://keycloak.esthesis"},"http://keycloak.esthesis")),(0,r.kt)("td",{parentName:"tr",align:null},"esthesis-system / esthesis-system")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kafka"),(0,r.kt)("td",{parentName:"tr",align:null},"kafka.esthesis:9095"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Kafka UI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://kafka-ui.esthesis"},"http://kafka-ui.esthesis")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Docker Registry UI"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://docker-registry-user-interface.esthesis/"},"http://docker-registry-user-interface.esthesis/")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Orion LD"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"http://orionld.esthesis:1026"},"http://orionld.esthesis:1026")),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h2",{id:"running-the-services"},"Running the services"),(0,r.kt)("p",null,"The above installation will prepare all the necessary components to support esthesis CORE. The actual\nbackend services as well as the UI, however, will not be installed in Kubernetes. You need to run\nthese in your local machine. Note that we did try Quarkus' remote development mode, but it was a bit\nfinicky, and we ended up losing time when it was not working or not picking up changes correctly."),(0,r.kt)("h3",{id:"frontend"},"Frontend"),(0,r.kt)("p",null,"You can start the Angular frontend by running ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," in ",(0,r.kt)("inlineCode",{parentName:"p"},"esthesis-core-ui")," directory."),(0,r.kt)("h3",{id:"backend"},"Backend"),(0,r.kt)("p",null,"Each backend service comes with its own ",(0,r.kt)("inlineCode",{parentName:"p"},"dev-{service-name}.sh")," script that you can use to start the\nservice in development mode. You need to run each of the services in a separate terminal window."),(0,r.kt)("p",null,"Many of the backend services need to access the dependency services (e.g. Keycloak, Kafka, MongoDB,\netc.) you have deployed above. To be able to figure out the domain name under which these services are\naccessible, we are using internally ",(0,r.kt)("inlineCode",{parentName:"p"},"kubens -c"),", so make sure before you start up a service you\nhave switched to the Kubernetes context and namespace where the services are deployed."),(0,r.kt)("h3",{id:"automation"},"Automation"),(0,r.kt)("p",null,"Starting up (and restarting) all those services manually can be a tedious task. We have prepared a\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/tmux/tmux/wiki"},"tmux")," script that you can use to start all services in a single\nterminal window in multiple panes, while merging all log output into another pane. You can find the\nscript in ",(0,r.kt)("inlineCode",{parentName:"p"},"_dev/tmux-dev.sh"),". We also provide a ",(0,r.kt)("inlineCode",{parentName:"p"},".tmux.conf")," file, in case you want to replicate our\nown tmux look and feel."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tmux",src:n(57444).Z,width:"640",height:"514"})),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can quickly terminate all services by issuing ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux kill-session -t esthesis-dev"),".")),(0,r.kt)("h2",{id:"committing-code"},"Committing code"),(0,r.kt)("p",null,"We are using ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits"),".\nThere are plugins for all major IDEs, so you can easily follow the convention."),(0,r.kt)("h2",{id:"notes"},"Notes"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Before trying to log in to the application open the (https) Keycloak URL into your browser in order to\naccept the self-signed certificate. Otherwise, the first redirect from the application's UI to\nKeycloak will fail."),(0,r.kt)("li",{parentName:"ol"},"There is a convenience script ",(0,r.kt)("inlineCode",{parentName:"li"},"destroy.sh")," in the root of each helm package. You can use it to fully\nerase all installations performed for that particular package together with any additional Kubernetes\nresources that do not get automatically deleted by uninstalling the Helm chart (for example, PVCs)."),(0,r.kt)("li",{parentName:"ol"},"Installing all components for development under a single Kubernetes node may require you to\nincrease certain OS limits, here are the ones we have found to be relevant in Ubuntu server 23.04:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo sysctl fs.inotify.max_user_instances=1280\nsudo sysctl fs.inotify.max_user_watches=655360\n")),"If you face any issues building the project via Maven, you may also need to increase the number of\nopen files:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ulimit -S -n 65536\n"))),(0,r.kt)("li",{parentName:"ol"},"You can create a ",(0,r.kt)("inlineCode",{parentName:"li"},"local-env.sh")," script alongside the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev-{service}.sh")," scripts to customise your\nlocal development environment. If such a file exist, it will be sourced by the ",(0,r.kt)("inlineCode",{parentName:"li"},"dev-{service}.sh"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"srv-kubernetes")," service needs to be able to create new pods in your Kubernetes environment. This\nrequires a valid ",(0,r.kt)("inlineCode",{parentName:"li"},"~/.kube/config")," file in your home directory. In case you are splitting your\nKubernetes config into multiple files, you can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"KUBECONFIG")," environment variable to point\nto the config file you want to use. You can specify this variable in your ",(0,r.kt)("inlineCode",{parentName:"li"},"local-env.sh")," file as\nexplained above.")))}m.isMDXComponent=!0},57444:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/tmux-d71af0c0f437abc97afeb3d1547d6916.gif"}}]);