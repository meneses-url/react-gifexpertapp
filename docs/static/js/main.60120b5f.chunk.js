(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(7),r=n.n(c),i=n(2),s=n(10),o=n(8),u=n.n(o),l=n(0),j=function(e){var t=e.setCategorias,n=Object(a.useState)(""),c=Object(i.a)(n,2),r=c[0],o=c[1];return Object(l.jsx)("form",{onSubmit:function(e){e.preventDefault(),r.trim().length>2&&(t((function(e){return[r].concat(Object(s.a)(e))})),o(""))},children:Object(l.jsx)("input",{type:"text",value:r,onChange:function(e){o(e.target.value)}})})};j.prototype={setCategorias:u.a.func.isRequired};var d=n(11),f=n(6),p=n.n(f),b=n(9),g=function(){var e=Object(b.a)(p.a.mark((function e(t){var n,a,c,r,i;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?limit=10&q=".concat(encodeURI(t),"&api_key=hrigQZueYqTO4zwyK2GeE99j4YTiB2hX"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return c=e.sent,r=c.data,console.log(c),console.log(r),i=r.map((function(e){return{id:e.id,title:e.title,urlImg:e.images.fixed_width}})),console.log(i),e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(e){var t=e.urlImg,n=e.title;return console.log(t.url),Object(l.jsxs)("div",{className:"card  animate__animated animate__fadeIn",children:[Object(l.jsx)("img",{src:t.url,alt:n}),Object(l.jsx)("p",{children:n})]})},h=function(e){var t=e.category,n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(i.a)(t,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){g(e).then((function(e){setTimeout((function(){console.log(e),r({data:e,loading:!1})}),3e3)}))}),[e]),c}(t),c=n.data,r=n.loading;return console.log(r),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h3",{className:"animate__animated animate__fadeIn",children:t}),r&&Object(l.jsx)("p",{className:"animate__animated animate__flash",children:"Loading..."}),Object(l.jsx)("div",{className:"card-grid",children:c.map((function(e){return Object(l.jsx)(m,Object(d.a)({},e),e.id)}))})]})},O=function(){var e=Object(a.useState)(["caballeros del zodiaco"]),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{children:"GifExpertApp"}),Object(l.jsx)(j,{setCategorias:c}),Object(l.jsx)("hr",{}),Object(l.jsx)("ol",{children:n.map((function(e){return Object(l.jsx)(h,{category:e},e)}))})]})};n(20);r.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.60120b5f.chunk.js.map