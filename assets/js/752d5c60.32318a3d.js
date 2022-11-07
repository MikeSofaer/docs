"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[8062],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||s;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},59229:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={},a="Frontend translations",i={unversionedId:"translating",id:"translating",title:"Frontend translations",description:"Instructions to make contributions to Osmosis frontend translations.",source:"@site/docs/frontend/translating.mdx",sourceDirName:".",slug:"/translating",permalink:"/frontend/translating",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/frontend/translating.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Osmosis Frontend",permalink:"/frontend/osmosis-frontend"}},l={},p=[],c={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"frontend-translations"},"Frontend translations"),(0,o.kt)("p",null,"Instructions to make contributions to Osmosis frontend translations."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Fork the Osmosis frontend repo and clone the fork locally ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-frontend/fork"},"https://github.com/osmosis-labs/osmosis-frontend/fork"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a new branch for the new laguage "))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'git checkout -b "Add Spanish Language"\n')),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Copy the English langauge files to the new {lang}.js files. For example from inside the Osmosis repo:  ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd packages/web/localizations/\ncp en.json es.json\ncp dayjs-locale-en.js dayjs-locale-es.js\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Edit the dropdown menu of the website in order to display the language by editing this file as seen ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/osmosis-labs/osmosis-frontend/pull/962/files"},"here"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"packages/web/stores/user-settings/language.tsx\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Test and Test\nRun Osmosis front-end locally and test the changes by running:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"yarn install\nyarn dev\n")),(0,o.kt)("p",null,"Use the following PRs as an example: (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-frontend/pull/962"},"Spanish"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-frontend/pull/966"},"Turkish"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-frontend/pull/960"},"French"),", ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/osmosis-labs/osmosis-frontend/pull/953"},"Korean"),")"))}m.isMDXComponent=!0}}]);