"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[9628],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>u});var n=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),m=l(i),h=a,u=m["".concat(c,".").concat(h)]||m[h]||d[h]||o;return i?n.createElement(u,s(s({ref:t},p),{},{components:i})):n.createElement(u,s({ref:t},p))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,s=new Array(o);s[0]=h;var r={};for(var c in t)hasOwnProperty.call(t,c)&&(r[c]=t[c]);r.originalType=e,r[m]="string"==typeof e?e:a,s[1]=r;for(var l=2;l<o;l++)s[l]=i[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},4:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=i(7462),a=(i(7294),i(3905));const o={},s="Inter-service notifications",r={unversionedId:"developers-guide/Inter-service notifications",id:"developers-guide/Inter-service notifications",title:"Inter-service notifications",description:"In a fully distributed microservices system, like esthesis Core, it is often required a service",source:"@site/docs/06-developers-guide/10-Inter-service notifications.md",sourceDirName:"06-developers-guide",slug:"/developers-guide/Inter-service notifications",permalink:"/docs/next/developers-guide/Inter-service notifications",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"sidebar",previous:{title:"Developing esthesis Device Agent",permalink:"/docs/next/developers-guide/Developing esthesis device agent"},next:{title:"Permissions and Security",permalink:"/docs/next/developers-guide/Permissions and Security"}},c={},l=[{value:"Standardising components and actions",id:"standardising-components-and-actions",level:2},{value:"The standard message",id:"the-standard-message",level:2},{value:"Sending notifications",id:"sending-notifications",level:2},{value:"Setup",id:"setup",level:3},{value:"Example",id:"example",level:3},{value:"Receiving notifications",id:"receiving-notifications",level:2},{value:"Setup",id:"setup-1",level:3}],p={toc:l},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inter-service-notifications"},"Inter-service notifications"),(0,a.kt)("p",null,"In a fully distributed microservices system, like esthesis Core, it is often required a service\nto be notified of events that occur in other services. For example, when a device is deleted from\nthe system, it might be necessary to remove the history of commands that were sent to it."),(0,a.kt)("p",null,"In esthesis Core, we use a Kafka-based mechanism to notify services of events that occur in other\nservices. To facilitate and standardised the use of this mechanism, we have created a library named\n",(0,a.kt)("inlineCode",{parentName:"p"},"utl-kafka-notifications"),". The aim of this library is not only to provide utility code when you\nwant to send or receive notifications, but also to provide a standardised way of doing so."),(0,a.kt)("h2",{id:"standardising-components-and-actions"},"Standardising components and actions"),(0,a.kt)("p",null,"The names of the components that can participate in the notification mechanism are defined in\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/util/utl-kafka-notifications/utl-kafka-notifications-common/src/main/java/esthesis/util/kafka/notifications/common/KafkaNotificationsConstants.java"},"KafkaNotificationsConstants.java"),"\nfile. If the component, or action, you are working with is not included in that file, you should\nfirst extend it with your new component or action."),(0,a.kt)("p",null,"There are three different ",(0,a.kt)("inlineCode",{parentName:"p"},"enum")," classes that you can extend:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Component"),": This class defines the components that can participate in the notification mechanism. You should add a new entry representing your component."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Subject"),": This class defines the subject of the component being targeted by the message. For\nexample, the Device component may publish messages with different subjects to represent the\ndifferent types of the underlying object types it manages. For most components, the Subject name\nwill be the same as the Component name, especially considering the narrow scope of each\nmicroservice in esthesis Core."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Action"),": This class defines the actions that was performed and that triggered the message. Try\nto reuse the existing actions and only define new action types when strictly necessary.")),(0,a.kt)("h2",{id:"the-standard-message"},"The standard message"),(0,a.kt)("p",null,"For components to be able to udnerstand messages sent by other components, all messages are\npublished as the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/util/utl-kafka-notifications/utl-kafka-notifications-common/src/main/java/esthesis/util/kafka/notifications/common/AppMessage.java"},"AppMessage"),"\nclass. ",(0,a.kt)("inlineCode",{parentName:"p"},"AppMessage")," encapsulates the information defined in ",(0,a.kt)("inlineCode",{parentName:"p"},"KafkaNotificationsConstants")," while\nalso providing a custom payload attribute."),(0,a.kt)("h2",{id:"sending-notifications"},"Sending notifications"),(0,a.kt)("p",null,"To facilitate sending notifications from your components we have implemented the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/util/utl-kafka-notifications/utl-kafka-notifications-outgoing/src/main/java/esthesis/util/kafka/notifications/outgoing/KafkaNotification.java"},"KafkaNotification"),"\nannotation. The annotation should be used as a method-level annotation, and it will automatically\npublish a notification message to Kafka in case your method is executed successfully. The\nannotation is processed by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/util/utl-kafka-notifications/utl-kafka-notifications-outgoing/src/main/java/esthesis/util/kafka/notifications/outgoing/KafkaNotificationInterceptor.java"},"KafkaNotificationInterceptor"),"."),(0,a.kt)("p",null,"The annotation has the following attributes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"component"),": The component that is sending the notification."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"subject"),": The subject of the notification."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action"),": The action that triggered the notification."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"comment"),": A comment that can be used to provide more information about the notification."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"idParamOrder"),": The order of the parameter that contains the ID of the object for the notification.\nThis parameter starts at 0 to indicate the first parameter of the method. Make sure that if your\nmethod's parameters change, you update this attribute accordingly."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"idParamRegEx"),": A regular expression that is used to extract the ID of the object for the notification.\nIf used, this attribute takes precedence over ",(0,a.kt)("inlineCode",{parentName:"li"},"idParamOrder"),". This parameter is useful in cases where\nthe only argument to a method is a complex object that contains the ID of the object for the notification.\nSee how it is used in ",(0,a.kt)("inlineCode",{parentName:"li"},"register")," method in ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/services/srv-device/srv-device-impl/src/main/java/esthesis/services/device/impl/service/DeviceRegistrationService.java"},"DeviceRegistrationService.java"),"\nas an example.")),(0,a.kt)("h3",{id:"setup"},"Setup"),(0,a.kt)("p",null,"To be able to send notification using the above mechanism, you need to set up in your component's\napplications YAML the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"kafka.bootstrap.servers")," property, to connect your component to the Kafka broker."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"mp.messaging.outgoing.esthesis-app-out.topic")," property set to ",(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-app"),".")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Let us see how this works taking ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/7cb8c453e2c507ab8c90b5d47ae56e14b8aa158d/esthesis-core/esthesis-core-backend/services/srv-device/srv-device-impl/src/main/java/esthesis/services/device/impl/service/DeviceService.java#L219"},"DeviceService.java")," as an example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'@KafkaNotification(component = Component.DEVICE, subject = Subject.DEVICE,\n    action = Action.DELETE, idParamOrder = 0, payload = "Device ID")\npublic boolean deleteById(String deviceId) {\n        // ...\n}\n')),(0,a.kt)("p",null,"Once ",(0,a.kt)("inlineCode",{parentName:"p"},"deleteById")," is executed successfully, a notification message will be published to Kafka with\nthe following attributes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"component"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Component.DEVICE")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"subject"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Subject.DEVICE")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"action"),": ",(0,a.kt)("inlineCode",{parentName:"li"},"Action.DELETE")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"msgId"),": A UUID created automatically."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"targetId"),": The value of ",(0,a.kt)("inlineCode",{parentName:"li"},"deviceId"),".")),(0,a.kt)("h2",{id:"receiving-notifications"},"Receiving notifications"),(0,a.kt)("p",null,"To receive the notifications generated with the above mechanism, you can use the built-in Kafka\nintegration of Quarkus. To keep notification handlers consistent between the different components\nof the platform, please create a ",(0,a.kt)("inlineCode",{parentName:"p"},"notifications")," package, with one or more notifications handlers\ninside. You can find an example notification handler in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/esthesis-iot/esthesis-platform/blob/main/esthesis-core/esthesis-core-backend/services/srv-device/srv-device-impl/src/main/java/esthesis/services/device/impl/notifications/NotificationsHandler.java"},"NotificationsHandler.java"),"."),(0,a.kt)("h3",{id:"setup-1"},"Setup"),(0,a.kt)("p",null,"To be able to receive notifications using the above mechanism, you need to set up in your component's\napplications YAML the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"kafka.bootstrap.servers")," property, to connect your component to the Kafka broker."),(0,a.kt)("li",{parentName:"ul"},"The ",(0,a.kt)("inlineCode",{parentName:"li"},"mp.messaging.incoming.esthesis-app-in.topic")," property set to ",(0,a.kt)("inlineCode",{parentName:"li"},"esthesis-app"),".")))}d.isMDXComponent=!0}}]);