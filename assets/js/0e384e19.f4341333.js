"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:1},i="Introduction",s={unversionedId:"intro",id:"intro",title:"Introduction",description:"Carbide is Rancher Government's hardened distribution of the SUSE Rancher product portfolio. Carbide is exclusively offered to our US Government and partnering customers that value security above all else.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/carbide-docs/docs/intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Hardened Container Registry",permalink:"/carbide-docs/docs/category/hardened-container-registry"}},c={},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Carbide is Rancher Government's hardened distribution of the SUSE Rancher product portfolio. Carbide is exclusively offered to our US Government and partnering customers that value security above all else. "),(0,a.kt)("p",null,"Rancher Carbide is tactically built with the following enhancements over the community version:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://slsa.dev/"},"SLSA 3 compliant")," secure build process hosted on Azure Government"),(0,a.kt)("li",{parentName:"ul"},"Digitally Signed Container Images. Every container hosted in our registry has been digitally ",(0,a.kt)("a",{parentName:"li",href:"https://rancherfederal.github.io/carbide-docs/docs/registry-docs/validating-images"},"signed")," by Rancher Government Solutions. Verifiable trust is baked into everything we do."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiW0KSchfL5AhWPkIkEHf6QASQQFnoECAkQAQ&url=https%3A%2F%2Fwww.cisa.gov%2Fsbom&usg=AOvVaw2_RntIRhhNuizqtvNQxmyP"},"Software Bill of Materials")," (SBOM) support in every container image"),(0,a.kt)("li",{parentName:"ul"},"Container ",(0,a.kt)("a",{parentName:"li",href:"https://www.testifysec.com/blog/what-is-a-supply-chain-attestation/"},"Attestations")),(0,a.kt)("li",{parentName:"ul"},"Container Vulnerability Scans"),(0,a.kt)("li",{parentName:"ul"},"Authenticaed Registry hosted on Azure Government Container Registry"),(0,a.kt)("li",{parentName:"ul"},"STIGATRON- Day 2 security operator powered by Rancher Government's DISA STIGs "),(0,a.kt)("li",{parentName:"ul"},"Custom red-white-blue theming & Rancher manager white-labeling")),(0,a.kt)("p",null,"Carbide will be launching in Fall 2022. We are honored to serve your mission."))}p.isMDXComponent=!0}}]);