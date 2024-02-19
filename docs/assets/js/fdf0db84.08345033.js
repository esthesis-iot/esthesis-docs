"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[463],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var l=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||i;return n?l.createElement(m,r(r({ref:t},p),{},{components:n})):l.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},62412:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var l=n(87462),a=(n(67294),n(3905));const i={},r=void 0,o={unversionedId:"installation-guide/Kubernetes",id:"version-3.0.7/installation-guide/Kubernetes",title:"Kubernetes",description:"esthesis CORE can be deployed on Kubernetes using the publicly available Helm charts. The Helm",source:"@site/versioned_docs/version-3.0.7/01-installation-guide/01-Kubernetes.md",sourceDirName:"01-installation-guide",slug:"/installation-guide/Kubernetes",permalink:"/docs/3.0.7/installation-guide/Kubernetes",draft:!1,tags:[],version:"3.0.7",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation guide",permalink:"/docs/3.0.7/installation-guide/"},next:{title:"Startup guide",permalink:"/docs/3.0.7/startup-guide/"}},s={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration parameters",id:"configuration-parameters",level:2},{value:"General",id:"general",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Keycloak",id:"keycloak",level:3},{value:"MongoDB",id:"mongodb",level:3},{value:"OpenID Connect",id:"openid-connect",level:3},{value:"esthesis UI",id:"esthesis-ui",level:3},{value:"Redis",id:"redis",level:3},{value:"Mosquitto",id:"mosquitto",level:3},{value:"InfluxDB",id:"influxdb",level:3},{value:"Kafka",id:"kafka",level:3},{value:"Camunda",id:"camunda",level:3},{value:"Installation",id:"installation",level:2},{value:"Environment variables",id:"environment-variables",level:3},{value:"Supporting infrastructure",id:"supporting-infrastructure",level:3},{value:"Application",id:"application",level:3},{value:"Notes",id:"notes",level:2},{value:"Cert Manager integration",id:"cert-manager-integration",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"esthesis CORE can be deployed on Kubernetes using the publicly available Helm charts. The Helm\ncharts are available on the ","[TBC]","."),(0,a.kt)("p",null,"esthesis CORE comes with a variety of different Helm charts. Some of the provided Helm charts\npertain to mandatory components, while others are optional. During the installation you can choose which\ncomponents you want to install by enabling the relevant configuration options. You can also choose\nto use already existing resources, such as a database or a message broker, instead of the\nones provided in the Helm charts."),(0,a.kt)("p",null,"Please note that Helm charts come with reasonable defaults; we strongly advise to\nreview them, so you can customize them to your needs."),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Kubernetes cluster with a minimum of 3 nodes and support for Load Balancer service types as well\nas Ingress support."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://helm.sh"},"Helm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/helmfile/helmfile"},"Helmfile"))),(0,a.kt)("h2",{id:"configuration-parameters"},"Configuration parameters"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"The following parameters can be defined as environmental variables during installation:"),(0,a.kt)("h3",{id:"general"},"General"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"TIMEZONE"),(0,a.kt)("br",null),"\nThe containers timezone to set (note, some containers do not respect this setting).",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"Europe/Athens")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_LOG_LEVEL"),(0,a.kt)("br",null),"\nThe log level to be used for the esthesis components (i.e. does not affect third-party components installed by the Helm chart).",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"WARN")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"IMAGE_PULL_SECRET"),(0,a.kt)("br",null),"\nThe secret to use when pulling container images.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("h3",{id:"accounts"},"Accounts"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_ADMIN_USERNAME"),(0,a.kt)("br",null),"\nThe username of the esthesis administrator user. Use this account to connect to esthesis UI after installation is done.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-admin")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_ADMIN_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis administrator user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-admin")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_USERNAME"),(0,a.kt)("br",null),"\nThe username of the esthesis system user. This is the user being used for esthesis inter-component\ncommunication, as well as the default username for all other third-party products installed by the\nHelm charts.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis system user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD"),(0,a.kt)("br",null),"\nThe password of the esthesis system user.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis-system")),(0,a.kt)("h3",{id:"keycloak"},"Keycloak"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_ENABLED"),(0,a.kt)("br",null),"\nWhether Keycloak should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_INGRESS_NAME"),(0,a.kt)("br",null),"\nThe hostname of the ingress rule that will be created for Keycloak",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_CERT_MANAGER_CLUSTER_ISSUER"),(0,a.kt)("br",null),"\nThe name of a Cert Manager cluster issuer to be used. This option is mutually exclusive with ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_CERT_MANAGER_ISSUER"),(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_CERT_MANAGER_ISSUER"),(0,a.kt)("br",null),"\nThe name of a (namespace scoped) Cert Manager issuer to be used. This option is mutually exclusive\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"KEYCLOAK_CERT_MANAGER_CLUSTER_ISSUER"),(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("h3",{id:"mongodb"},"MongoDB"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_ENABLED"),(0,a.kt)("br",null),"\nWhether MongoDB should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe internal URL cluster components should use to connect to MongoDB.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb://mongodb:27017")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_DATABASE"),(0,a.kt)("br",null),"\nThe database name to use.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesiscore")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_USERNAME"),(0,a.kt)("br",null),"\nThe username to authenticate with.",(0,a.kt)("br",null),"\nDefault: As specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_USERNAME")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MONGODB_PASSWORD"),(0,a.kt)("br",null),"\nThe password to authenticate with.",(0,a.kt)("br",null),"\nDefault: As specified in ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_SYSTEM_PASSWORD")),(0,a.kt)("h3",{id:"openid-connect"},"OpenID Connect"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_AUTHORITY_URL_EXTERNAL"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect authority to use for external connections. This URL should be accessible\nfrom the end-user's Internet browser using esthesis UI.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_AUTHORITY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect authority to use for internal connections. This URL should be accessible\nfrom components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak.<Namespace>.svc.cluster.local/realms/esthesis")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_DISCOVERY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect discovery endpoint to use for internal connections. This URL should be\naccessible from components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak.<Namespace>.svc.cluster.local/realms/esthesis/.well-known/openid-configuration")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"OIDC_JWT_VERIFY_LOCATION_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the OpenID Connect JWT verification endpoint to use for internal connections. This URL\nshould be accessible from components running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"http://keycloak.<Namespace>.svc.cluster.local/realms/esthesis/protocol/openid-connect/certs")),(0,a.kt)("h3",{id:"esthesis-ui"},"esthesis UI"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_INGRESS_NAME"),(0,a.kt)("br",null),"\nThe hostname of the ingress rule that will be created for esthesis UI.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_LOGOUT_URL"),(0,a.kt)("br",null),"\nThe URL to redirect to after logging out from esthesis UI.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"/logout")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_CERT_MANAGER_CLUSTER_ISSUER"),(0,a.kt)("br",null),"\nThe name of a Cert Manager cluster issuer to be used. This option is mutually exclusive with ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_CERT_MANAGER_ISSUER"),(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_CERT_MANAGER_ISSUER"),(0,a.kt)("br",null),"\nThe name of a (namespace scoped) Cert Manager issuer to be used. This option is mutually exclusive\nwith ",(0,a.kt)("inlineCode",{parentName:"p"},"ESTHESIS_UI_CERT_MANAGER_CLUSTER_ISSUER"),(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("h3",{id:"redis"},"Redis"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"REDIS_ENABLED"),(0,a.kt)("br",null),"\nWhether Redis should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"REDIS_HOSTS"),(0,a.kt)("br",null),"\nThe list of Redis hosts to use. This URL should be accessible from components running inside the\nKubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"redis-master:6379/0")),(0,a.kt)("h3",{id:"mosquitto"},"Mosquitto"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_ENABLED"),(0,a.kt)("br",null),"\nWhether Mosquitto should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_MUTUAL_TLS"),(0,a.kt)("br",null),"\nWhether Mosquitto sohuld be configured for mutual TLS.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"false")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_SUPERUSER"),(0,a.kt)("br",null),"\nThe name of the supe-user account. This account will be able to freely publish and subscribe to/from\nany topic. When enabling TLS, this should be equal to the CN of the certificate.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"esthesis")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_CA_CERT"),(0,a.kt)("br",null),"\nThe certificate of the CA, encoded in Base64.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_SERVER_CERT"),(0,a.kt)("br",null),"\nThe certificate of the mosquitto server, encoded in Base64.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_SERVER_KEY"),(0,a.kt)("br",null),"\nThe private key of the mosquitto server, encoded in Base64.",(0,a.kt)("br",null),"\nDefault: ``"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"MOSQUITTO_SERVICE_TYPE"),(0,a.kt)("br",null),"\nThe type of the service to expose Mosquitto by.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"ClusterIP")),(0,a.kt)("h3",{id:"influxdb"},"InfluxDB"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"INFLUXDB_ENABLED"),(0,a.kt)("br",null),"\nWhether InfluxDB should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("h3",{id:"kafka"},"Kafka"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_ENABLED"),(0,a.kt)("br",null),"\nWhether Kafka should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"KAFKA_BOOTSTRAP_SERVERS"),(0,a.kt)("br",null),"\nThe list of Kafka bootstrap servers to use. This URL should be accessible from components running\ninside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"kafka:9092")),(0,a.kt)("h3",{id:"camunda"},"Camunda"),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"CAMUNDA_ENABLED"),(0,a.kt)("br",null),"\nWhether Camunda should be installed by this chart or not.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"true")),(0,a.kt)("p",null,"\ud83d\udd39 ",(0,a.kt)("inlineCode",{parentName:"p"},"CAMUNDA_GATEWAY_URL_CLUSTER"),(0,a.kt)("br",null),"\nThe URL of the Camunda gateway to use for internal connections. This URL should be accessible from\ncomponents running inside the Kubernetes cluster.",(0,a.kt)("br",null),"\nDefault: ",(0,a.kt)("inlineCode",{parentName:"p"},"camunda-zeebe-gateway:26500"))),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"esthesis Core comes in two Helm charts, one installing all the required dependencies and another one\ninstalling the application components. You can enable/disable which specific dependencies you want\nto install by setting the corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"*_ENABLED")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),". Do note that\nalthough the provided dependencies are adequate to have esthesis Core up and running, you might want to\ntune their properties or replace them altogether with your own resources to support your specific\nproduction use case."),(0,a.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,a.kt)("p",null,"The following list is a recommended starting point of environment variables to set before you\nproceed with the installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export DOMAIN=domain.com\nexport TIMEZONE=Europe/Athens\nexport ESTHESIS_ADMIN_USERNAME=esthesis-admin\nexport ESTHESIS_ADMIN_PASSWORD=wEc25LP82F97OfoX\nexport ESTHESIS_SYSTEM_USERNAME=esthesis-system\nexport ESTHESIS_SYSTEM_PASSWORD=O0ddC1Qhf4cjW21N\nexport KEYCLOAK_INGRESS_NAME=keycloak.$DOMAIN\nexport ESTHESIS_INGRESS_NAME=esthesis-core.$DOMAIN\nexport OIDC_AUTHORITY_URL_EXTERNAL="https://$KEYCLOAK_INGRESS_NAME/realms/esthesis"\nexport KEYCLOAK_CERT_MANAGER_CLUSTER_ISSUER=letsencrypt-prod\nexport ESTHESIS_UI_CERT_MANAGER_CLUSTER_ISSUER=letsencrypt-prod\nexport MOSQUITTO_SERVICE_TYPE=LoadBalancer\n')),(0,a.kt)("p",null,"Make sure you adapt the values to your own environment."),(0,a.kt)("h3",{id:"supporting-infrastructure"},"Supporting infrastructure"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Obtain the Helmfile corresponding to the esthesis version you want to install. For example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://esthes.is/helm/helmfile-esthesis-core-deps-3.0.7.tgz | tar xvz\n"))),(0,a.kt)("li",{parentName:"ul"},"Install the Helmfile:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile sync --namespace={my-namespace}\n")))),(0,a.kt)("h3",{id:"application"},"Application"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Obtain the Helmfile corresponding to the esthesis version you want to install. For example:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"wget -qO- https://esthes.is/helm/helmfile-esthesis-core-3.0.7.tgz | tar xvz\n"))),(0,a.kt)("li",{parentName:"ul"},"Install the Helmfile:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"helmfile sync --namespace={my-namespace}\n")))),(0,a.kt)("h2",{id:"notes"},"Notes"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"You need to access the UI via HTTPS, accessing it via HTTP will not work."),(0,a.kt)("li",{parentName:"ol"},"The UI is exposed under the domain you specified in the environmental variable ",(0,a.kt)("inlineCode",{parentName:"li"},"ESTHESIS_UI_INGRESS_HOSTNAME"),"."),(0,a.kt)("li",{parentName:"ol"},"If you are using a self-signed certificate which is not imported into your local system, before\ntrying to log in into the application you need to visit the Keycloak URL first and accept the\ncertificate. Otherwise, the login will fail."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-core-srv-kubernetes")," needs to be able to list all namespaces as well as schedule pods\nvia deployments, configure HPA, etc. A Service Account ",(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-core-srv-kubernetes")," is automatically\ncreated with no additional permissions other than the ones of the ",(0,a.kt)("inlineCode",{parentName:"li"},"default")," service account. Depending\non how security is implemented in your Kubernetes cluster, you may need to provide the necessary\nroles/permissions to this service account.")),(0,a.kt)("h2",{id:"cert-manager-integration"},"Cert Manager integration"),(0,a.kt)("p",null,"If you have ",(0,a.kt)("a",{parentName:"p",href:"https://cert-manager.io"},"Cert Manager")," installed in your cluster, you can use it to\nautomatically generate and renew certificates for esthesis UI and Keycloak. To do so, you need to\nset the following environmental variables:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KEYCLOAK_CERT_MANAGER_CLUSTER_ISSUER=letsencrypt-prod\nexport ESTHESIS_UI_CERT_MANAGER_CLUSTER_ISSUER=letsencrypt-prod\n")),(0,a.kt)("p",null,"If you are using namespace scoped issuers, you can alternatively specify:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"export KEYCLOAK_CERT_MANAGER_ISSUER=letsencrypt-prod\nexport ESTHESIS_UI_CERT_MANAGER_ISSUER=letsencrypt-prod\n")),(0,a.kt)("p",null,"Make sure you specify only one of the two variants, otherwise the installation will fail. Do not\nforget to change ",(0,a.kt)("inlineCode",{parentName:"p"},"letsencrypt-prod")," to the value of your own issuer."))}d.isMDXComponent=!0}}]);