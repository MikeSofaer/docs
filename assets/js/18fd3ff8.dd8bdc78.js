"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[5826],{3905:(e,t,M)=>{M.d(t,{Zo:()=>c,kt:()=>D});var i=M(67294);function o(e,t,M){return t in e?Object.defineProperty(e,t,{value:M,enumerable:!0,configurable:!0,writable:!0}):e[t]=M,e}function n(e,t){var M=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),M.push.apply(M,i)}return M}function a(e){for(var t=1;t<arguments.length;t++){var M=null!=arguments[t]?arguments[t]:{};t%2?n(Object(M),!0).forEach((function(t){o(e,t,M[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(M)):n(Object(M)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(M,t))}))}return e}function N(e,t){if(null==e)return{};var M,i,o=function(e,t){if(null==e)return{};var M,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)M=n[i],t.indexOf(M)>=0||(o[M]=e[M]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)M=n[i],t.indexOf(M)>=0||Object.prototype.propertyIsEnumerable.call(e,M)&&(o[M]=e[M])}return o}var u=i.createContext({}),g=function(e){var t=i.useContext(u),M=t;return e&&(M="function"==typeof e?e(t):a(a({},t),e)),M},c=function(e){var t=g(e.components);return i.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},j=i.forwardRef((function(e,t){var M=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=N(e,["components","mdxType","originalType","parentName"]),j=g(M),D=o,s=j["".concat(u,".").concat(D)]||j[D]||l[D]||n;return M?i.createElement(s,a(a({ref:t},c),{},{components:M})):i.createElement(s,a({ref:t},c))}));function D(e,t){var M=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=M.length,a=new Array(n);a[0]=j;var N={};for(var u in t)hasOwnProperty.call(t,u)&&(N[u]=t[u]);N.originalType=e,N.mdxType="string"==typeof e?e:o,a[1]=N;for(var g=2;g<n;g++)a[g]=M[g];return i.createElement.apply(null,a)}return i.createElement.apply(null,M)}j.displayName="MDXCreateElement"},42484:(e,t,M)=>{M.r(t),M.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>n,metadata:()=>N,toc:()=>g});var i=M(87462),o=(M(67294),M(3905));const n={sidebar_position:3,sidebar_label:"Design Customization",description:"How to create your custom version of the design."},a="Design Customization",N={unversionedId:"user-interface-setup/frontend-platform-interface/customization-guide/design-customization",id:"user-interface-setup/frontend-platform-interface/customization-guide/design-customization",title:"Design Customization",description:"How to create your custom version of the design.",source:"@site/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/design-customization.md",sourceDirName:"user-interface-setup/frontend-platform-interface/customization-guide",slug:"/user-interface-setup/frontend-platform-interface/customization-guide/design-customization",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/design-customization",draft:!1,editUrl:"https://github.com/osmosis-labs/docs/tree/main/docs/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/design-customization.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Design Customization",description:"How to create your custom version of the design."},sidebar:"tutorialSidebar",previous:{title:"Theme Customization",permalink:"/osmosis-outpost/user-interface-setup/frontend-platform-interface/customization-guide/theme-customization"},next:{title:"Code",permalink:"/osmosis-outpost/category/code"}},u={},g=[{value:"1. Duplicate the Figma file",id:"1-duplicate-the-figma-file",level:3},{value:"2. Reach the customizable components",id:"2-reach-the-customizable-components",level:3},{value:"3. Set the colours palette",id:"3-set-the-colours-palette",level:3},{value:"4. Set the chain metadata",id:"4-set-the-chain-metadata",level:3},{value:"Logo generation guidelines",id:"logo-generation-guidelines",level:4},{value:"5. Enjoy the result!",id:"5-enjoy-the-result",level:3}],c={toc:g};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"design-customization"},"Design Customization"),(0,o.kt)("p",null,"We provide you the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/qOzjC3bBlFk9CQZW2HK5jX/nabla---Outpost-UI-Kit"},(0,o.kt)("strong",{parentName:"a"},"Figma")," link"),'\nto the design of the dummy nabla outpost platform. This contains the "component\nsheet" page containing the whole set of components, a "documentation asset"\npage with all the assets used in this documentation and a "Frontend Platform\nInterface" page containing some example screens of a custom outpost platform\ninterface. The following tutorial shows you the steps to create your custom\ndesign version of the platform by simply editing the colours, label and logo.'),(0,o.kt)("p",null,"The result of a such a process, will give you a design showing what you will get\nif you follow the instructions on the\n",(0,o.kt)("a",{parentName:"p",href:"./customization/customizations"},"customization guide")," creating a code\nimplementation associated to the colours code you set on the Figma file."),(0,o.kt)("p",null,"To better understand how the color are linked to the elements in the platform,\nplease give a look at the ",(0,o.kt)("a",{parentName:"p",href:"./theme-customization"},"Theme Customization")," page."),(0,o.kt)("h3",{id:"1-duplicate-the-figma-file"},"1. Duplicate the Figma file"),(0,o.kt)("p",null,"Click on the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.figma.com/file/qOzjC3bBlFk9CQZW2HK5jX/nabla---Outpost-UI-Kit"},(0,o.kt)("strong",{parentName:"a"},"Figma")," link"),'\nand access the Figma file. Then, click on the arrow next to the\n"nabla - Outpost UI Kit" label on the top center of the page.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Design file image",src:M(10538).Z,title:"design file",width:"3840",height:"2160"})),(0,o.kt)("p",null,"Now, you can duplicate the file to your draft, so you can use it and customize\nit as you like."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Duplicate to your draft image",src:M(69110).Z,title:"duplicate the file to your draft",width:"3840",height:"2160"})),(0,o.kt)("h3",{id:"2-reach-the-customizable-components"},"2. Reach the customizable components"),(0,o.kt)("p",null,'Click on the "Open" button, which will open the newly created file. It is your\nown copy of the original design Figma file, and you can modify it as you like.\nYou are also able to perform modification on the components and deeply modify\nthe final result, but if you only want to style the dApp with your brand\ncolours, you can simply follow the next steps.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Open the duplicated file image",src:M(5067).Z,title:"open the duplicated file",width:"3840",height:"2160"})),(0,o.kt)("p",null,'Then, you can click on the "Components Sheet" page on the left sidebar to see\nthe page containing the customizable elements.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Reach the components sheet image",src:M(74781).Z,title:"reach the components sheet",width:"3840",height:"2160"})),(0,o.kt)("p",null,'Now, you can zoom to the "Customizable" frame (which is the first on the left).'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Design file image",src:M(72509).Z,title:"design file",width:"3840",height:"2160"})),(0,o.kt)("h3",{id:"3-set-the-colours-palette"},"3. Set the colours palette"),(0,o.kt)("p",null,"Once you reach the customizable frame, you can see the basic components which\ncan be modified with a very low effort and which could provide a nice result\nin terms of brand styling of the platform. From here, you can change all the\ncolours available on the right sidebar. While changing the colours on the right\nyou will see the corresponding coloured circle changing on the frame."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change all the colours image",src:M(96075).Z,title:"change all the colours",width:"3840",height:"2160"})),(0,o.kt)("p",null,"To edit a colour, first you need to click on the settings icon that appears\nwhen you hover the colour with your pointer."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click on colour settings image",src:M(92676).Z,title:"click on colour settings",width:"3840",height:"2160"})),(0,o.kt)("p",null,"Then, you need to click on the coloured box which appears on the bottom left\npart of the newly opened popup."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Click on the coloured box image",src:M(4895).Z,title:"click on the coloured box",width:"3840",height:"2160"})),(0,o.kt)("p",null,"At this point, you can select a color from the selector. You can both use the\ncolour picker, select the color by using the sliders, and select a method like\nRGB, Hex, HSL and so forth."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Choose the colour image",src:M(73703).Z,title:"choose the colour",width:"3840",height:"2160"})),(0,o.kt)("p",null,"You need to repeat these steps for any colour you want to change."),(0,o.kt)("h3",{id:"4-set-the-chain-metadata"},"4. Set the chain metadata"),(0,o.kt)("p",null,'In the end, you can change the chain name and chain logo.\nTo change the chain name, double click on it. First to edit it, ensure that\nyou selected the "Nabla" layer on the left sidebar. You need to overwrite it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change the chain name image",src:M(48088).Z,title:"change the chain name",width:"3840",height:"2160"})),(0,o.kt)("p",null,'Similarly, you can change the chain logo. To do it, you can double click on it.\nBefore to modify the image, ensure that you selected the "Vector" layer on the\nleft sidebar. You need to overwrite it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Change the logo image",src:M(97719).Z,title:"change the logo",width:"3840",height:"2160"})),(0,o.kt)("h4",{id:"logo-generation-guidelines"},"Logo generation guidelines"),(0,o.kt)("p",null,"The logo to provide must agree the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"frame width: ",(0,o.kt)("strong",{parentName:"li"},"256px"),";"),(0,o.kt)("li",{parentName:"ul"},"frame height: ",(0,o.kt)("strong",{parentName:"li"},"256px"),";"),(0,o.kt)("li",{parentName:"ul"},"background color: ",(0,o.kt)("strong",{parentName:"li"},"transparent"),";"),(0,o.kt)("li",{parentName:"ul"},"colour: single-color ",(0,o.kt)("strong",{parentName:"li"},"WHITE"),";"),(0,o.kt)("li",{parentName:"ul"},"format: ",(0,o.kt)("strong",{parentName:"li"},"*",".svg"),";")),(0,o.kt)("p",null,"We attach some exmaples (Nabla, Osmosis and Juno) of logos to give you a guideline.\nPlease, access this page in dark mode to have a better experience."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"nabla")),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Osmosis")),(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:"center"},(0,o.kt)("strong",{parentName:"th"},"Juno")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"nabla logo image",src:M(60170).Z,title:"nabla logo",width:"256",height:"256"})),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Osmosis logo image",src:M(7328).Z,title:"Osmosis logo",width:"256",height:"256"})),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:"center"},(0,o.kt)("img",{alt:"Juno logo image",src:M(58942).Z,title:"Juno logo",width:"256",height:"256"}))))),(0,o.kt)("h3",{id:"5-enjoy-the-result"},"5. Enjoy the result!"),(0,o.kt)("p",null,'And... you are done! Now to enjoy the results of your efforts, you can reach\nthe "Frontend Platform Interface" page and see the mockup you realized!!'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Enjoy the result image",src:M(72459).Z,title:"enjoy the result",width:"3840",height:"2160"})))}l.isMDXComponent=!0},10538:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/1-910d74a14241de98131eac4bacd933a8.jpg"},48088:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/10-fcfbf7b6f4edc06d9593161948ebd972.jpg"},97719:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/11-2db7ba288789bc12a9caa95cd42d9e48.jpg"},72459:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/12-345b00393a3beac96502dedb1b15c281.jpg"},69110:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/2-7c0776091c9726eec999b92683f9c209.jpg"},5067:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/3-01a99eca543949221f99d43fc51934ea.jpg"},74781:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/4-db51c4c00036e63b0af5e6c8ff59a8b5.jpg"},72509:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/5-dc39ee53ac0b6955be1dbeb51f0ea04d.jpg"},96075:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/6-f818d57012b6da7320bcd2491a810510.jpg"},92676:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/7-08ec0878966ab40742453fbfb75b432f.jpg"},4895:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/8-98a150b46c4cfaefa78df20f9663f8c6.jpg"},73703:(e,t,M)=>{M.d(t,{Z:()=>i});const i=M.p+"assets/images/9-c7db407eeba98981913c30eaf1c413c6.jpg"},58942:(e,t,M)=>{M.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjExLjgwMSA3My42ODZMMTU4LjEyNiA3MS40NTMxTDE5NC40NiAzMS45NjYzTDE3OS43MTkgMTcuMzE1NEwxNDAuMzE5IDUzLjY2ODRMMTM3Ljk3OSAwLjAwMDc2MjkzOUwxMTcuMjU2IDAuMDAwNzYyOTM5TDExNS4yMDggNTMuNjY4NEw3NS41OTU0IDE3LjE5NzlMNjAuOTk1MSAzMS44ODhMOTcuNTIzOSA3MS40MTRMNDMuODI0IDczLjUyOTNMNDMuODk1NyA5NC4yOTEyTDk3LjU3MTMgOTYuNTI0MUw2MS4yMzY5IDEzNi4wMTFMNzUuOTc3NiAxNTAuNjYyTDExNC43NTMgMTE0Ljg1N0wxMTYuNzc3IDIwMS44MjJMODUuNzIwNCAyMDQuMDk0TDg1Ljc4NyAyMjMuNDA3TDExNy4zMyAyMjUuNzk2TDExOC4wMjIgMjU1Ljk5OUgxMzguNzQ1TDEzOS4yNjcgMjI1LjgzNkwxNzEuMTA3IDIyMy40MDdMMTcxLjA0MSAyMDQuMDk0TDEzOS42NTUgMjAxLjgyMkwxNDEuMTE4IDExNC44OTZMMTgwLjEwMSAxNTAuNzRMMTk0LjcwMiAxMzYuMDg5TDE1OC4yMTIgOTYuNTYzM0wyMTEuODczIDk0LjQwODhMMjExLjgwMSA3My42ODZaIiBmaWxsPSJ3aGl0ZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOnNjcmVlbiIvPgo8L3N2Zz4K"},60170:(e,t,M)=>{M.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xNjQuMDAzIDE4OC4wNTZMMTQ0LjkyIDEzNS42OTVMMTcxLjA5NyAxODAuOTczTDE3Ni4yMDIgMTc1Ljg2NUwxNTAuOTU2IDEzMi4yMTJMMTgyLjQzNSAxNjkuNjU0TDE4Ny4zNzggMTY0LjcwOEwxNTYuMzA1IDEyNy43NDJMMTkzLjM0MyAxNTguNzY0TDE5OC4yOTcgMTUzLjgxOEwxNjAuNzk0IDEyMi40MDFMMjA0LjUxOSAxNDcuNjA2TDIwOS42MjQgMTQyLjUxTDE2NC4yODIgMTE2LjM2NEwyMTYuNzE3IDEzNS40MjdMMjIyLjE2IDEyOS45OTRMMTY2LjY2NiAxMDkuODE2TDIzMS4wMjEgMTIxLjE0N0wyMzcuMDMzIDExNS4xMzNMMTY3Ljg3NiAxMDIuOTY2SDI0OS4yMzJMMjU2IDk2LjE5NzRWOTZIMTY3Ljg3Nkg4OC4xMzU5SDBWOTYuMjIwNkw2Ljc1NjQzIDEwMi45NjZIODguMTI0M0wxOC45NTUyIDExNS4xNDVMMjQuOTc5IDEyMS4xNDdMODkuMzQ1MyAxMDkuODI3TDMzLjgyODcgMTI5Ljk5NEwzOS4yNzEgMTM1LjQyN0w5MS43MjkzIDExNi4zNjRMNDYuMzY0NyAxNDIuNTFMNTEuNDgxNCAxNDcuNjA2TDk1LjIxOCAxMjIuNDAxTDU3LjcwMjkgMTUzLjgyOUw2Mi42NTY5IDE1OC43NzVMOTkuNjk1MSAxMjcuNzQyTDY4LjYxMDkgMTY0LjcxOUw3My41NjQ4IDE2OS42NjVMMTA1LjA0NCAxMzIuMjEyTDc5Ljc4NjMgMTc1Ljg3N0w4NC45MDMxIDE4MC45NzNMMTExLjA4IDEzNS42OTVMOTEuOTk2NyAxODguMDY3TDk3LjQzOTEgMTkzLjUwMUwxMTcuNjM5IDEzOC4wODZMMTA2LjI4OSAyMDIuMzM2TDExMi4zMTMgMjA4LjM1TDEyNC41MTEgMTM5LjI4MlYyMjAuNTI5TDEyOCAyMjRMMTMxLjQ4OSAyMjAuNTE3VjEzOS4yOTRMMTQzLjY4NyAyMDguMzM4TDE0OS43MTEgMjAyLjMyNEwxMzguMzYxIDEzOC4wODZMMTU4LjU2MSAxOTMuNDg5TDE2NC4wMDMgMTg4LjA1NloiIGZpbGw9IiNEREREREQiLz4KPHBhdGggZD0iTTE2NC4wMDMgMTg4LjA1NkwxNDQuOTIgMTM1LjY5NUwxNzEuMDk3IDE4MC45NzNMMTc2LjIwMiAxNzUuODY1TDE1MC45NTYgMTMyLjIxMkwxODIuNDM1IDE2OS42NTRMMTg3LjM3OCAxNjQuNzA4TDE1Ni4zMDUgMTI3Ljc0MkwxOTMuMzQzIDE1OC43NjRMMTk4LjI5NyAxNTMuODE4TDE2MC43OTQgMTIyLjQwMUwyMDQuNTE5IDE0Ny42MDZMMjA5LjYyNCAxNDIuNTFMMTY0LjI4MiAxMTYuMzY0TDIxNi43MTcgMTM1LjQyN0wyMjIuMTYgMTI5Ljk5NEwxNjYuNjY2IDEwOS44MTZMMjMxLjAyMSAxMjEuMTQ3TDIzNy4wMzMgMTE1LjEzM0wxNjcuODc2IDEwMi45NjZIMjQ5LjIzMkwyNTYgOTYuMTk3NFY5NkgxNjcuODc2SDg4LjEzNTlIMFY5Ni4yMjA2TDYuNzU2NDMgMTAyLjk2Nkg4OC4xMjQzTDE4Ljk1NTIgMTE1LjE0NUwyNC45NzkgMTIxLjE0N0w4OS4zNDUzIDEwOS44MjdMMzMuODI4NyAxMjkuOTk0TDM5LjI3MSAxMzUuNDI3TDkxLjcyOTMgMTE2LjM2NEw0Ni4zNjQ3IDE0Mi41MUw1MS40ODE0IDE0Ny42MDZMOTUuMjE4IDEyMi40MDFMNTcuNzAyOSAxNTMuODI5TDYyLjY1NjkgMTU4Ljc3NUw5OS42OTUxIDEyNy43NDJMNjguNjEwOSAxNjQuNzE5TDczLjU2NDggMTY5LjY2NUwxMDUuMDQ0IDEzMi4yMTJMNzkuNzg2MyAxNzUuODc3TDg0LjkwMzEgMTgwLjk3M0wxMTEuMDggMTM1LjY5NUw5MS45OTY3IDE4OC4wNjdMOTcuNDM5MSAxOTMuNTAxTDExNy42MzkgMTM4LjA4NkwxMDYuMjg5IDIwMi4zMzZMMTEyLjMxMyAyMDguMzVMMTI0LjUxMSAxMzkuMjgyVjIyMC41MjlMMTI4IDIyNEwxMzEuNDg5IDIyMC41MTdWMTM5LjI5NEwxNDMuNjg3IDIwOC4zMzhMMTQ5LjcxMSAyMDIuMzI0TDEzOC4zNjEgMTM4LjA4NkwxNTguNTYxIDE5My40ODlMMTY0LjAwMyAxODguMDU2WiIgZmlsbD0idXJsKCNwYWludDBfcmFkaWFsXzEzMjNfMTQ2OCkiIGZpbGwtb3BhY2l0eT0iMC4yIi8+CjxwYXRoIGQ9Ik0xNjQuMDAzIDE4OC4wNTZMMTQ0LjkyIDEzNS42OTVMMTcxLjA5NyAxODAuOTczTDE3Ni4yMDIgMTc1Ljg2NUwxNTAuOTU2IDEzMi4yMTJMMTgyLjQzNSAxNjkuNjU0TDE4Ny4zNzggMTY0LjcwOEwxNTYuMzA1IDEyNy43NDJMMTkzLjM0MyAxNTguNzY0TDE5OC4yOTcgMTUzLjgxOEwxNjAuNzk0IDEyMi40MDFMMjA0LjUxOSAxNDcuNjA2TDIwOS42MjQgMTQyLjUxTDE2NC4yODIgMTE2LjM2NEwyMTYuNzE3IDEzNS40MjdMMjIyLjE2IDEyOS45OTRMMTY2LjY2NiAxMDkuODE2TDIzMS4wMjEgMTIxLjE0N0wyMzcuMDMzIDExNS4xMzNMMTY3Ljg3NiAxMDIuOTY2SDI0OS4yMzJMMjU2IDk2LjE5NzRWOTZIMTY3Ljg3Nkg4OC4xMzU5SDBWOTYuMjIwNkw2Ljc1NjQzIDEwMi45NjZIODguMTI0M0wxOC45NTUyIDExNS4xNDVMMjQuOTc5IDEyMS4xNDdMODkuMzQ1MyAxMDkuODI3TDMzLjgyODcgMTI5Ljk5NEwzOS4yNzEgMTM1LjQyN0w5MS43MjkzIDExNi4zNjRMNDYuMzY0NyAxNDIuNTFMNTEuNDgxNCAxNDcuNjA2TDk1LjIxOCAxMjIuNDAxTDU3LjcwMjkgMTUzLjgyOUw2Mi42NTY5IDE1OC43NzVMOTkuNjk1MSAxMjcuNzQyTDY4LjYxMDkgMTY0LjcxOUw3My41NjQ4IDE2OS42NjVMMTA1LjA0NCAxMzIuMjEyTDc5Ljc4NjMgMTc1Ljg3N0w4NC45MDMxIDE4MC45NzNMMTExLjA4IDEzNS42OTVMOTEuOTk2NyAxODguMDY3TDk3LjQzOTEgMTkzLjUwMUwxMTcuNjM5IDEzOC4wODZMMTA2LjI4OSAyMDIuMzM2TDExMi4zMTMgMjA4LjM1TDEyNC41MTEgMTM5LjI4MlYyMjAuNTI5TDEyOCAyMjRMMTMxLjQ4OSAyMjAuNTE3VjEzOS4yOTRMMTQzLjY4NyAyMDguMzM4TDE0OS43MTEgMjAyLjMyNEwxMzguMzYxIDEzOC4wODZMMTU4LjU2MSAxOTMuNDg5TDE2NC4wMDMgMTg4LjA1NloiIGZpbGw9IndoaXRlIi8+CjxkZWZzPgo8cmFkaWFsR3JhZGllbnQgaWQ9InBhaW50MF9yYWRpYWxfMTMyM18xNDY4IiBjeD0iMCIgY3k9IjAiIHI9IjEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0idHJhbnNsYXRlKDEyOCAyMjQpIHJvdGF0ZSgzNS44MDIzKSBzY2FsZSgxMDYuNTgxIDExNi42NzcpIj4KPHN0b3AvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3Atb3BhY2l0eT0iMCIvPgo8L3JhZGlhbEdyYWRpZW50Pgo8L2RlZnM+Cjwvc3ZnPgo="},7328:(e,t,M)=>{M.d(t,{Z:()=>i});const i="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAxLjYzNiAzLjY0NTk1QzE5OS4wMTEgNi40NDQzMiAxOTguMTI4IDEwLjQ3OTIgMTk4Ljc3NCAxNS4wMzEyQzIwMC40NTUgMTUuNjQ3NCAyMDIuMTUxIDE2LjM3MSAyMDMuODUgMTcuMTk5M0MyMDIuODcyIDEzLjQ0NzQgMjAzLjIzNyAxMC4xOTI1IDIwNS4xOSA4LjExMDU1QzIwOS43NTcgMy4yNDE1NiAyMjEuMjgyIDYuNjMyMjcgMjMwLjkzMiAxNS42ODM5QzI0MC41ODIgMjQuNzM1NSAyNDQuNzAxIDM2LjAyMDQgMjQwLjEzNCA0MC44ODk2QzIzOC4yOTIgNDIuODU0MiAyMzUuMzE2IDQzLjQ3MzkgMjMxLjc4NyA0Mi45MTk2QzIzMi43OCA0NC41Nzk0IDIzMy42NjYgNDYuMjQ2NSAyMzQuNDQyIDQ3LjkwNzVDMjM4Ljc0NSA0OC4xMDYxIDI0Mi40NjEgNDYuOTQ1OCAyNDQuOTU4IDQ0LjI4MzRDMjUxLjUzOCAzNy4yNjkyIDI0Ny4xNzQgMjIuNDg1OCAyMzUuMjExIDExLjI2NDJDMjIzLjI0OCAwLjA0MjQ4NTYgMjA4LjIxNiAtMy4zNjgzIDIwMS42MzYgMy42NDU5NVpNMjIyLjY3IDc2LjUwNzZDMjEwLjQyMSA1Ny40NDc3IDE5Mi43NzEgNDIuMTg4OSAxNzEuODgyIDMyLjg5MzFDMTcxLjYxMiAyOC42MDMyIDE3Mi42NDEgMjQuODg3MSAxNzUuMTMyIDIyLjIzMTZDMTgyLjcxNSAxNC4xNDc2IDIwMC45NzEgMTguOTUyOSAyMTUuOTA5IDMyLjk2NDRDMjMwLjg0NiA0Ni45NzYxIDIzNi44MDggNjQuODg3OSAyMjkuMjI1IDcyLjk3MThDMjI3LjUyNCA3NC43ODUyIDIyNS4yODYgNzUuOTQ5OSAyMjIuNjcgNzYuNTA3NlpNMjQxLjEwMSAxMzkuNDM5QzI0MS4xMDEgMTE4LjQ4IDIzNS41NjkgOTguODEzMyAyMjUuODg2IDgxLjgxODhDMjI4LjkyMSA4MC45MTg4IDIzMS41NjYgNzkuMzY4OSAyMzMuNjYyIDc3LjEzNDRDMjQzLjU0NSA2Ni41OTkgMjM3LjQ2IDQ0LjgzNjIgMjIwLjA3MiAyOC41MjU2QzIwMi42ODQgMTIuMjE1MiAxODAuNTc3IDcuNTMzNjYgMTcwLjY5NSAxOC4wNjkxQzE2Ny42NjIgMjEuMzAxOCAxNjYuMTMzIDI1LjU5MTUgMTY1Ljk3MyAzMC40NTY0QzE1My4wOTggMjUuNTU5MiAxMzkuMTMyIDIyLjg3NzYgMTI0LjU0IDIyLjg3NzZDNjAuMTY0NiAyMi44Nzc2IDcuOTc4NTIgNzUuMDY0IDcuOTc4NTIgMTM5LjQzOUM3Ljk3ODUyIDIwMy44MTQgNjAuMTY0NiAyNTYgMTI0LjU0IDI1NkMxODguOTE1IDI1NiAyNDEuMTAxIDIwMy44MTQgMjQxLjEwMSAxMzkuNDM5Wk0xMjQuNTQgMjQ5LjE3NUMxODUuMTQ1IDI0OS4xNzUgMjM0LjI3NiAyMDAuMDQ0IDIzNC4yNzYgMTM5LjQzOUMyMzQuMjc2IDc4LjgzMyAxODUuMTQ1IDI5LjcwMjcgMTI0LjU0IDI5LjcwMjdDNjMuOTM0NCAyOS43MDI3IDE0LjgwMzcgNzguODMzIDE0LjgwMzcgMTM5LjQzOUMxNC44MDM3IDIwMC4wNDQgNjMuOTM0NCAyNDkuMTc1IDEyNC41NCAyNDkuMTc1Wk0zMC4zNTc2IDEzMy4xMTlDMzAuMjE5NiAxMzUuMjA3IDMwLjE0OTUgMTM3LjMxNCAzMC4xNDk1IDEzOS40MzdDMzAuMTQ5NSAxOTEuNTY4IDcyLjQxIDIzMy44MjkgMTI0LjU0MSAyMzMuODI5QzE3Ni42NzIgMjMzLjgyOSAyMTguOTMyIDE5MS41NjggMjE4LjkzMiAxMzkuNDM3QzIxOC45MzIgMTM4Ljc0OSAyMTguOTI1IDEzOC4wNjMgMjE4LjkxIDEzNy4zNzlDMjE2LjU4MyAxMzguMzQgMjE0LjUxOSAxMzkuODQ3IDIxMi43NjUgMTQxLjY2M0MxODIuNDgyIDE3My4wNDEgMTQ5LjQ2MyAxNTIuNzUzIDEzNy43NTcgMTM5Ljc4MkM3NS41MzUgNzcuNTY1NiAzNC4zMTQxIDEwNS4zNDYgMzAuMzE5MyAxMzMuNzNDMzAuMzMxNSAxMzMuNTI2IDMwLjM0NDIgMTMzLjMyMyAzMC4zNTc2IDEzMy4xMTlaTTE1MC4yNDUgMTM5LjIwNEMxNTguOTggMTQ3LjM1MSAxODEuNzIyIDE1OC43NTUgMjAyLjgwNSAxMzkuMjA0QzIwNy44OTIgMTMzLjUwMSAyMTYuMTg4IDExOS44MzUgMjA4LjY3OCAxMTAuNzk2QzIwNi45MjEgMTA4LjY5IDE5OS40NjUgMTA2LjczOSAxODMuNzA0IDExNS43NzlDMTc4LjYwNyAxMTguNDM1IDE2NC43OCAxMjYuODQgMTUwLjI0NSAxMzkuMjA0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg=="}}]);