"use strict";(self.webpackChunkpersonalwebsite=self.webpackChunkpersonalwebsite||[]).push([[293],{9030:function(e,a,t){t.d(a,{Z:function(){return d}});var r=t(1597),l=t(7294),n=t(5766),i=t(4706),s=function(e){var a=e.icon,t=e.className,r=void 0===t?"":t,n=i.$s[a].icon;return l.createElement(n,{className:r})},m=function(e){var a=e.data,t=e.className,r=void 0===t?"":t;return l.createElement("ul",{className:"list-none grid grid-flow-col-dense auto-cols-auto "+r},a.map((function(e){var a,t=e[0],r=e[1],n=(null===(a=i.$s[t])||void 0===a?void 0:a.url)+"/"+r;return(/^(?:https?:\/\/)/.test(r)||/^mailto:/.test(r))&&(n=r),l.createElement("li",{key:t},l.createElement("a",{href:n,target:"_blank",rel:"noreferrer"},l.createElement(s,{className:"site-link",icon:t})))})))},c=(0,l.memo)(m),o=function(e){var a=e.bio,t=e.name,i=e.initial,s=e.avatar,m=s.normal,o=s.className,d=void 0===o?"h-32 w-32":o,u=e.sns,g=e.className,f=void 0===g?"":g,v=e.yamlId;return l.createElement("div",{className:f+" flex flex-wrap space-x-0 sm:space-x-8"},l.createElement("div",{className:"w-full sm:w-auto text-center"},l.createElement(n.Z,{className:"mb-4 "+d,initial:i,image:m})),l.createElement("div",{className:"flex flex-col items-stretch justify-between flex-1 text-center sm:text-left"},l.createElement("h3",{className:"leading-tight md:leading-tight"},t,v&&l.createElement(r.Link,{to:"/authors/@"+v,className:"site-link mx-2"},l.createElement("small",null,"@",v))),l.createElement("p",{className:"text-base"},a),l.createElement(c,{className:"max-w-lg text-xl my-0",data:u})))},d=(0,l.memo)(o)},5766:function(e,a,t){var r=t(7294),l=t(9230),n=function(e){var a=e.image,t=e.initial,n=e.className,i=void 0===n?"":n,s=(0,l.c)(a);return s?r.createElement(l.G,{className:"rounded-full z-0 ring-2 ring-white dark:ring-gray-600 avatar avatar-rounded "+i,image:s,alt:""}):r.createElement("figure",{className:"avatar avatar-rounded bg-gray-500 text-white ring ring-white "+i,"data-initial":t})};a.Z=(0,r.memo)(n)},1564:function(e,a,t){t.r(a);var r=t(7294),l=t(9222),n=t(9030),i=t(2579),s=function(e){var a=e.data.allAuthorsYaml.nodes,t=(0,i.$W)().siteUrl;return r.createElement(l.Z,{pageUrl:t+"/authors",pageTitle:"Authors"},r.createElement("h1",{className:"leading-tight md:leading-tight md:text-4xl text-3xl text-center mb-32"},"Authors (",a.length,")"),r.createElement("div",{className:"grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto mb-32"},a.map((function(e){var a=e.name,t=e.initial,l=e.yamlId,i=e.avatar,s=e.sns,m=e.bio;return r.createElement(n.Z,{className:"p-8 bg-gray-50 border border-solid border-gray-100 dark:bg-gray-800 dark:border-gray-800 rounded",key:l,bio:m,name:a,initial:t,avatar:i,sns:s,yamlId:l})}))))};a.default=(0,r.memo)(s)}}]);
//# sourceMappingURL=component---node-modules-pitayan-gatsby-theme-pitayan-src-pages-authors-index-tsx-acecf2f955bf670e5a79.js.map