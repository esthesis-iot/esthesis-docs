"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[64881],{3905:(t,e,l)=>{l.d(e,{Zo:()=>s,kt:()=>h});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function a(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function o(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),d=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):a(a({},e),t)),l},s=function(t){var e=d(t.components);return n.createElement(i.Provider,{value:e},t.children)},k="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),k=d(l),p=r,h=k["".concat(i,".").concat(p)]||k[p]||c[p]||u;return l?n.createElement(h,a(a({ref:e},s),{},{components:l})):n.createElement(h,a({ref:e},s))}));function h(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,a=new Array(u);a[0]=p;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=t,o[k]="string"==typeof t?t:r,a[1]=o;for(var d=2;d<u;d++)a[d]=l[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},25355:(t,e,l)=>{l.r(e),l.d(e,{assets:()=>i,contentTitle:()=>a,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>d});var n=l(87462),r=(l(67294),l(3905));const u={},a="Configuration parameters",o={unversionedId:"device-agent/Configuration parameters",id:"version-3.0.40/device-agent/Configuration parameters",title:"Configuration parameters",description:"The esthesis device agent supports a plethora of rutime configuration parameters to match your",source:"@site/versioned_docs/version-3.0.40/04-device-agent/02-Configuration parameters.md",sourceDirName:"04-device-agent",slug:"/device-agent/Configuration parameters",permalink:"/docs/3.0.40/device-agent/Configuration parameters",draft:!1,tags:[],version:"3.0.40",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/docs/3.0.40/device-agent/Installation"},next:{title:"Embedded endpoints",permalink:"/docs/3.0.40/device-agent/Embedded endpoints"}},i={},d=[],s={toc:d},k="wrapper";function c(t){let{components:e,...l}=t;return(0,r.kt)(k,(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration-parameters"},"Configuration parameters"),(0,r.kt)("p",null,"The esthesis device agent supports a plethora of rutime configuration parameters to match your\nenvironment and runtime needs. Parameters can be defined either as environment variables or as\ncommand line arguments. The following tables lists all available configuration parameters."),(0,r.kt)("table",null,(0,r.kt)("caption",null,"Mandatory parameters"),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Environment/CLI variable"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"HARDWARE_ID, hardwareId")),(0,r.kt)("td",null,"The unique identifier of the device."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"REGISTRATION_URL, registrationUrl")),(0,r.kt)("td",null,"The URL of esthesis server to register this device with."),(0,r.kt)("td",null,"URL")))),(0,r.kt)("table",null,(0,r.kt)("caption",null,"Optional parameters"),(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Environment/CLI variable"),(0,r.kt)("th",null,"Description"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ATTRIBUTES, attributes")),(0,r.kt)("td",null,"A comma-separated list of key-value pairs to be sent as attributes."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"AUTO_UPDATE, autoUpdate")),(0,r.kt)("td",null,"A flag indicating whether the device should try to automatically obtain newer firmware once per day.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"DEMO_CATEGORY, demoCategory")),(0,r.kt)("td",null,"The category of data posted as demo data.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: demo"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"DEMO_INTERVAL, demoInterval")),(0,r.kt)("td",null,"The frequency in which demo data is generated (in seconds).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 0"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_HTTP, endpointHttp")),(0,r.kt)("td",null,"Whether the embedded HTTP server is enabled or not.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_HTTP_LISTENING_IP, endpointHttpListeningIP")),(0,r.kt)("td",null,"The IP address where the embedded HTTP server listens to.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 127.0.0.1"),(0,r.kt)("td",null,"IP address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_HTTP_LISTENING_PORT, endpointHttpListeningPort")),(0,r.kt)("td",null,"The port in which the embedded HTTP server listens to.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 8080"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_HTTP_AUTH_USERNAME, endpointHttpAuthUsername")),(0,r.kt)("td",null,"The username to connect to the embedded HTTP endpoint. If defined, it must be sent as Basic auth together with its password."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_HTTP_AUTH_PASSWORD, endpointHttpAuthPassword")),(0,r.kt)("td",null,"The password to connect to the embedded HTTP endpoint. If defined, it must be sent as Basic auth together with its username."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_MQTT, endpointMqtt")),(0,r.kt)("td",null,"Whether the embedded MQTT server is enabled or not.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_MQTT_LISTENING_IP, endpointMqttListeningIP")),(0,r.kt)("td",null,"The IP address where the embedded MQTT server listens to.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 127.0.0.1"),(0,r.kt)("td",null,"IP address")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_MQTT_LISTENING_PORT, endpointMqttListeningPort")),(0,r.kt)("td",null,"The port in which the embedded MQTT server listens to.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 1883"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_MQTT_AUTH_USERNAME, endpointMqttAuthUsername")),(0,r.kt)("td",null,"The username to connect to the embedded MQTT endpoint."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"ENDPOINT_MQTT_AUTH_PASSWORD, endpointMqttAuthPassword")),(0,r.kt)("td",null,"The password to connect to the embedded MQTT endpoint."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"HEALTH_REPORT_INTERVAL, healthReportInterval")),(0,r.kt)("td",null,"The frequency to send health reports (in seconds).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 300"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"HTTP_RETRY, httpRetry")),(0,r.kt)("td",null,"The number of seconds to wait before retrying a failed HTTP request.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 60"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"HTTP_TIMEOUT, httpTimeout")),(0,r.kt)("td",null,"The number of seconds after which an HTTP call times out.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 60"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LOG_ABBREVIATION, logAbbreviation")),(0,r.kt)("td",null,"The characters length to abbreviate log messages to.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 1024"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LOG_LEVEL, logLevel")),(0,r.kt)("td",null,"The logging level to use [trace, debug, info].",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: info"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LUA_HTTP_TELEMETRY_SCRIPT, luaHttpTelemetryScript")),(0,r.kt)("td",null,"The filesystem location of a Lua script to transform incoming payloads for telemetry data pushed via the HTTP endpoint"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LUA_HTTP_METADATA_SCRIPT, luaHttpMetadataScript")),(0,r.kt)("td",null,"The filesystem location of a Lua script to transform incoming payloads for metadata data pushed via the HTTP endpoint"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LUA_MQTT_TELEMETRY_SCRIPT, luaMqttTelemetryScript")),(0,r.kt)("td",null,"The filesystem location of a Lua script to transform incoming payloads for telemetry data pushed via the MQTT endpoint"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"LUA_MQTT_METADATA_SCRIPT, luaMqttMetadataScript")),(0,r.kt)("td",null,"The filesystem location of a Lua script to transform incoming payloads for metadata data pushed via the MQTT endpoint"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"-, luaExtraMqttTelemetryTopic")),(0,r.kt)("td",null,"A custom MQTT telemetry endpoint to be handled by a user-defined Lua script. The first argument of this parameter is the name of the topic, and the second argument is the Lua script to be executed. This parameter can be repeated to define additional topics."),(0,r.kt)("td",null,"Alphanumeric Alphanumeric ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"-, luaExtraMqttMetadataTopic")),(0,r.kt)("td",null,"A custom MQTT metadata endpoint to be handled by a user-defined Lua script. The first argument of this parameter is the name of the topic, and the second argument is the Lua script to be executed. This parameter can be repeated to define additional topics."),(0,r.kt)("td",null,"Alphanumeric Alphanumeric ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"-, luaExtraHttpTelemetryEndpoint")),(0,r.kt)("td",null,"A custom HTTP telemetry endpoint to be handled by a user-defined Lua script. The first argument of this parameter is the name of the endpoint, and the second argument is the Lua script to be executed. This parameter can be repeated to define additional topics."),(0,r.kt)("td",null,"Alphanumeric Alphanumeric ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"-, luaExtraHttpMetadataEndpoint")),(0,r.kt)("td",null,"A custom HTTP metadata endpoint to be handled by a user-defined Lua script. The first argument of this parameter is the name of the endpoint, and the second argument is the Lua script to be executed. This parameter can be repeated to define additional topics."),(0,r.kt)("td",null,"Alphanumeric Alphanumeric ")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"MQTT_INFLIGHT_TTL_DURATION, mqttInflightTTLDuration")),(0,r.kt)("td",null,"The number of seconds that a queued inflight message should exist before being purged.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 60"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"MQTT_TIMEOUT, mqttTimeout")),(0,r.kt)("td",null,"The number of seconds to wait before failing an outgoing MQTT message.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 60"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"PAUSE_STARTUP, pauseStartup")),(0,r.kt)("td",null,"A flag indicating whether the device should start paused.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"PING_INTERVAL, pingInterval")),(0,r.kt)("td",null,"The frequency to ping esthesis Core (in seconds).",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: 60"),(0,r.kt)("td",null,"Numeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"PROPERTIES_FILE, propertiesFile")),(0,r.kt)("td",null,"The file to store the agent\u2019s configuration.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/esthesis.properties"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"PROVISIONING_SCRIPT, provisioningScript")),(0,r.kt)("td",null,"The script used to install new provisioning packages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/firmware.sh"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"REBOOT_SCRIPT, rebootScript")),(0,r.kt)("td",null,"The script used to reboot the device.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/reboot.sh"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"REGISTRATION_SECRET, registrationSecret")),(0,r.kt)("td",null,"If set, the registration request will include it as a header."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SECURE_PROPERTIES_FILE, securePropertiesFile")),(0,r.kt)("td",null,"The secure file to store sensitive parts of the agent's configuration.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/secure/esthesis.properties"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SECURE_PROVISIONING, secureProvisioning")),(0,r.kt)("td",null,"A flag indicating whether provisioning requests should be accompanied by a signature token.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SHUTDOWN_SCRIPT, shutdownScript")),(0,r.kt)("td",null,"The script used to shut down the device.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/shutdown.sh"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SIGNATURE_ALGORITHM, signatureAlgorithm")),(0,r.kt)("td",null,"The algorithm to use to produce signatures.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: SHA256WITHRSA"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"SUPPORTED_COMMANDS, supportedCommands")),(0,r.kt)("td",null,"The remote commands this device supports:",(0,r.kt)("br",null),"e: Execute arbitrary",(0,r.kt)("br",null),"f: Firmware update",(0,r.kt)("br",null),"r: Reboot",(0,r.kt)("br",null),"s: Shutdown",(0,r.kt)("br",null),"p: Ping",(0,r.kt)("br",null),"h: Health report",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: efrsph"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TAGS, tags")),(0,r.kt)("td",null,"A comma-separated list of tags to associate with this device. Tag names should only contain letters, numbers, and underscore."),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TEMP_DIR, tempDir")),(0,r.kt)("td",null,"The folder to temporarily store provisioning packages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: OS default temp directory"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_COMMAND_REQUEST, topicCommandRequest")),(0,r.kt)("td",null,"The MQTT topic to use for command request messages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/command/request"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_COMMAND_REPLY, topicCommandReply")),(0,r.kt)("td",null,"The MQTT topic to use for command reply messages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/command/reply"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_DEMO, topicDemo")),(0,r.kt)("td",null,"The MQTT topic to post demo data.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/telemetry"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_METADATA, topicMetadata")),(0,r.kt)("td",null,"The MQTT topic to use for metadata messages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/metadata"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_PING, topicPing")),(0,r.kt)("td",null,"The MQTT topic to use for ping messages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/ping"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TOPIC_TELEMETRY, topicTelemetry")),(0,r.kt)("td",null,"The MQTT topic to use for telemetry messages.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/telemetry"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"VERSION_FILE, versionFile")),(0,r.kt)("td",null,"A file with a single line of text depicting the current version of the firmware running on the device.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: $HOME/.esthesis/device/version"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"VERSION_REPORT_TOPIC, versionReportTopic")),(0,r.kt)("td",null,"The MQTT topic to report the firmware version.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: esthesis/metadata"),(0,r.kt)("td",null,"Alphanumeric")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"VERSION_REPORT, versionReport")),(0,r.kt)("td",null,"Report the version number available in the specified version file once during boot.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: false"),(0,r.kt)("td",null,"Boolean")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"TLS_VERIFICATION, tlsVerification")),(0,r.kt)("td",null,"Whether outgoing HTTPS connections should have TLS verified/.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Default: true"),(0,r.kt)("td",null,"Boolean")))))}c.isMDXComponent=!0}}]);