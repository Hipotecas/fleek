"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=o,f=m["".concat(s,".").concat(h)]||m[h]||u[h]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={template:"post",draft:!1,hide_title:!1,title:"How to checkout a commit in project history",slug:"how-to-checkout-a-commit-in-project-history",date:new Date("2023-01-02T23:00:00.000Z"),canonical:"",description:"Instructions to checkout a commit in the project history",category:"Reference",tags:["Reference","Git","Fleek Network","Versions"]},i=void 0,c={unversionedId:"Git/how-to-checkout-a-commit-in-project-history",id:"Git/how-to-checkout-a-commit-in-project-history",title:"How to checkout a commit in project history",description:"Instructions to checkout a commit in the project history",source:"@site/reference/Git/how-to-checkout-a-commit-in-project-history.mdx",sourceDirName:"Git",slug:"/Git/how-to-checkout-a-commit-in-project-history",permalink:"/fleek/reference/Git/how-to-checkout-a-commit-in-project-history",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/reference/Git/how-to-checkout-a-commit-in-project-history.mdx",tags:[{label:"Reference",permalink:"/fleek/reference/tags/reference"},{label:"Git",permalink:"/fleek/reference/tags/git"},{label:"Fleek Network",permalink:"/fleek/reference/tags/fleek-network"},{label:"Versions",permalink:"/fleek/reference/tags/versions"}],version:"current",lastUpdatedAt:1676511694,formattedLastUpdatedAt:"Feb 16, 2023",frontMatter:{template:"post",draft:!1,hide_title:!1,title:"How to checkout a commit in project history",slug:"how-to-checkout-a-commit-in-project-history",date:"2023-01-02T23:00:00.000Z",canonical:"",description:"Instructions to checkout a commit in the project history",category:"Reference",tags:["Reference","Git","Fleek Network","Versions"]},sidebar:"defaultSidebar",previous:{title:"Git clone permission denied",permalink:"/fleek/reference/Git/git-clone-permission-denied"},next:{title:"How to secure a node with SSL/TSL",permalink:"/fleek/reference/Security/how-to-secure-a-node-with-ssl-tsl"}},s={},l=[],p={toc:l};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Change the directory to the Ursa directory in your file system:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <PATH-TO-URSA-CLI-PROJECT-SOURCE>\n")),(0,o.kt)("p",null,"Pull the latest commits from ",(0,o.kt)("inlineCode",{parentName:"p"},"main")," by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch origin main\n")),(0,o.kt)("p",null,"\ud83d\udca1 A git fetch gathers commits from the target branch that do not exist and stores them in your local repository. It doesn't merge them with your current branch for that use ",(0,o.kt)("inlineCode",{parentName:"p"},"git pull"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git pull origin main\n")),(0,o.kt)("p",null,"Once you have the latest target branch commits, checkout to any particular commit"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout <Commit hash>\n")),(0,o.kt)("p",null,"A git commit hash is a SHA1 hash of the state of the git repository at the time of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/commit/a7cfd35647ba4a3c7563a784870b8a806298bbc1"},"commit"),". Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"a7cfd35647ba4a3c7563a784870b8a806298bbc1\n")),(0,o.kt)("p",null,"If you open the Github repository UI, you'll find the commit hash on the right-hand side of the list, check the example ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/ursa/commits/main"},"here"),"."),(0,o.kt)("p",null,"You can run the ",(0,o.kt)("inlineCode",{parentName:"p"},"git log")," command on your local repository directory to find commit hashes."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git log --oneline\n")),(0,o.kt)("p",null,"Here's an example of how that'd look like:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"a7cfd35 (HEAD -> main, origin/main, origin/HEAD) feat: refined bootstrapping for testplan (#282)\nbec6ee7 chore: revert debug trait (#281)\n06b0d77 chore(service_tests.rs): remove redundant `mod tests` (#279)\n850a15c Update pull_request_template.md (#280)\n5ccf7d0 feat: advertise file size (#221)\n4c6e505 feat: filter peers using cache summary for getbitswap (#274)\n957ed5c feat: Use graphsync to pull data (#224)\n3e1b41b chore: gateway doc (#269)\n99edbb7 feat: send cache summary using request response (#268)\n1c6464c feat: testplan data transfer (#267)\n9e979ec feat: pull request + issue templates (#265)\n")),(0,o.kt)("p",null,"Let's say that you are interested in checking out the commit ",(0,o.kt)("inlineCode",{parentName:"p"},"feat: Use graphsync to pull data"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout 957ed5c\n")),(0,o.kt)("p",null,"\ud83d\udca1 We can use the first few characters of the commit hash, valid as a short version that refers to ",(0,o.kt)("inlineCode",{parentName:"p"},"957ed5c92b5a9570cdadc821c571b19698aaf4db"),"."),(0,o.kt)("p",null,"If interested in learning more about Git visit the offical documentation reference ",(0,o.kt)("a",{parentName:"p",href:"https://www.git-scm.com/docs"},"here"),"."))}m.isMDXComponent=!0}}]);