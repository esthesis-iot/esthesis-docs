"use strict";(self.webpackChunkesthesis_core=self.webpackChunkesthesis_core||[]).push([[60990],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,g=p["".concat(c,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(g,s(s({ref:t},u),{},{components:r})):n.createElement(g,s({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=f;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:o,s[1]=a;for(var l=2;l<i;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33619:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const i={},s="Testing",a={unversionedId:"developers-guide/Testing",id:"version-3.0.43/developers-guide/Testing",title:"Testing",description:"What is tested",source:"@site/versioned_docs/version-3.0.43/07-developers-guide/14-Testing.md",sourceDirName:"07-developers-guide",slug:"/developers-guide/Testing",permalink:"/docs/3.0.43/developers-guide/Testing",draft:!1,tags:[],version:"3.0.43",sidebarPosition:14,frontMatter:{},sidebar:"sidebar",previous:{title:"Resources vs System Resources",permalink:"/docs/3.0.43/developers-guide/Resources vs System Resources"},next:{title:"Auditing",permalink:"/docs/3.0.43/developers-guide/Auditing"}},c={},l=[{value:"What is tested",id:"what-is-tested",level:2},{value:"How to write tests",id:"how-to-write-tests",level:2},{value:"Executing tests with Podman",id:"executing-tests-with-podman",level:2}],u={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"testing"},"Testing"),(0,o.kt)("h2",{id:"what-is-tested"},"What is tested"),(0,o.kt)("h2",{id:"how-to-write-tests"},"How to write tests"),(0,o.kt)("h2",{id:"executing-tests-with-podman"},"Executing tests with Podman"),(0,o.kt)("p",null,"In case you run your tests with Podman, you need to set the following environment variable to avoid\nissues with the Ryuk container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"TESTCONTAINERS_RYUK_DISABLED=true\n")))}d.isMDXComponent=!0}}]);