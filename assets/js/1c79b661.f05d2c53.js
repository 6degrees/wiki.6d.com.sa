"use strict";(self.webpackChunkwiki_6_d_com_sa=self.webpackChunkwiki_6_d_com_sa||[]).push([[4327],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,h=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:2},i="Version Control",l={unversionedId:"standards/version-control",id:"standards/version-control",title:"Version Control",description:"6 Degrees, employees, and projects utilize version control git to maintain code and its history. This enable multiple employees collaborate on one project and",source:"@site/docs/standards/version-control.md",sourceDirName:"standards",slug:"/standards/version-control",permalink:"/docs/standards/version-control",draft:!1,editUrl:"https://github.com/6degrees/wiki.6d.com.sa/edit/main/docs/standards/version-control.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Infrastructure",permalink:"/docs/standards/infrastructure"},next:{title:"Code Style",permalink:"/docs/standards/code-style"}},s={},p=[{value:"Remote Platform",id:"remote-platform",level:2},{value:"Structure",id:"structure",level:2},{value:"Naming Convention",id:"naming-convention",level:2},{value:"Repos Metadata",id:"repos-metadata",level:2},{value:"GitHub Actions",id:"github-actions",level:2},{value:"Branching Stratgey",id:"branching-stratgey",level:2},{value:"Current Organizations",id:"current-organizations",level:2}],c={toc:p};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"version-control"},"Version Control"),(0,a.kt)("p",null,"6 Degrees, employees, and projects utilize version control ",(0,a.kt)("inlineCode",{parentName:"p"},"git")," to maintain code and its history. This enable multiple employees collaborate on one project and\nenables the reversal and tracking of code changes."),(0,a.kt)("h2",{id:"remote-platform"},"Remote Platform"),(0,a.kt)("p",null,"While version control does not require having a remote repository, all our code bases use ",(0,a.kt)("a",{parentName:"p",href:"https://www.github.com"},"GitHub")," as a platform of choice for maintaining code and collaboration."),(0,a.kt)("h2",{id:"structure"},"Structure"),(0,a.kt)("p",null,"Code is maintained in organizational profiles. For each client, company or set of projects, an organization name should be identified, and a GitHub organization shall be created. All code bases related to that organization or project shall be created and maintained inside the organization profile."),(0,a.kt)("p",null,"A dev team shall be created to include dev team members and that team should have control over the organization repos. "),(0,a.kt)("h2",{id:"naming-convention"},"Naming Convention"),(0,a.kt)("p",null,"Repos names should follow one of the below 3 naming conventions"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"language"),"_",(0,a.kt)("inlineCode",{parentName:"li"},"framework"),"_",(0,a.kt)("inlineCode",{parentName:"li"},"project_name"),"_",(0,a.kt)("inlineCode",{parentName:"li"},"* optional suffics"),(0,a.kt)("strong",{parentName:"li"},"ex.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"py_flask_hex_converter_service"),"\npy => Python\nflask => flask framework for python web server\nhex_converter => project name\nservice => suffix, as this repo is for a microservice.  ",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"url_of_website"),(0,a.kt)("strong",{parentName:"li"},"ex.")," ",(0,a.kt)("inlineCode",{parentName:"li"},"www.6degrees.com.sa"),"\nthis repo will contain the source code, and a GitHub action that will auto deploy into ",(0,a.kt)("inlineCode",{parentName:"li"},"gh-pages")," branch.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"package_name"),(0,a.kt)("strong",{parentName:"li"},"ex.")," swarmapp-api\na simple name for an npm package.")),(0,a.kt)("h2",{id:"repos-metadata"},"Repos Metadata"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Title"),"\nSame as repo name, no need to explain.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Url"),"\nif the repo is for a website, or has a live demo, or a page describing it, the url property should be populated",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Description"),"\nBreif description of the content of the repo.",(0,a.kt)("br",null)),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"readme.md")," file"),"\nReadme file should always be populated with a revised meaningful title, a longer description, license of choice, credits given to owners of source code utilized in the repo, screenshot of the project outpout if possible.")),(0,a.kt)("h2",{id:"github-actions"},"GitHub Actions"),(0,a.kt)("p",null,"When dealing with static website creation through code, such as when using ",(0,a.kt)("inlineCode",{parentName:"p"},"docusaurous")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"nuxtjs"),", a ",(0,a.kt)("inlineCode",{parentName:"p"},"GitHub Action")," shall be created to automate the deployemnt and files creation for that repo into a ",(0,a.kt)("inlineCode",{parentName:"p"},"gh-pages")," branch that will be linked to the ",(0,a.kt)("em",{parentName:"p"},"url")," for that page or service."),(0,a.kt)("h2",{id:"branching-stratgey"},"Branching Stratgey"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"KISS")," (Keep it simple stupid)\navoid branches unless for the below conditions:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the branch is for ",(0,a.kt)("inlineCode",{parentName:"li"},"github-pages")," version to hold the build files, like this repo"),(0,a.kt)("li",{parentName:"ul"},"the branch is to reserve an old major version of the project. ",(0,a.kt)("em",{parentName:"li"},"i.e. You are upgrading to ",(0,a.kt)("inlineCode",{parentName:"em"},"version 2"),", make a branch and name it ",(0,a.kt)("inlineCode",{parentName:"em"},"version 1")," to hold the old version"))),(0,a.kt)("p",null,"Goal is to avoid ",(0,a.kt)("em",{parentName:"p"},"merge conflicts resolution nightmare")),(0,a.kt)("h2",{id:"current-organizations"},"Current Organizations"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/6degrees"},"6 Degrees Technologies")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/PromotionEfficiency"},"Promotion Efficiency")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/EfficiencyS"},"Efficiency Center")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Shace-co"},"Shace")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/zahmaola"},"Zahma O La")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mo3aydah"},"Mo3ayadah")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/deets-pro"},"Deets.Pro")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/Burooj-pro"},"Burooj Efficiency"))))}m.isMDXComponent=!0}}]);