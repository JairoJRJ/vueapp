(function(){"use strict";var t={7391:function(t,n,r){var o=r(9242),e=r(3396),i=r(7139);const s=(0,e._)("h1",null,"Listado de Post",-1),u={class:"post-list"};function c(t,n,r,o,c,a){return(0,e.wg)(),(0,e.iD)(e.HY,null,[s,(0,e._)("ul",u,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.posts,(t=>((0,e.wg)(),(0,e.iD)("li",{key:t.id},(0,i.zw)(t.title),1)))),128))])],64)}var a=r(7327),l=r(4870);class f{constructor(){(0,a.Z)(this,"posts",void 0)}getPosts(){return this.posts=(0,l.iH)([])}async fetchAll(){try{const t="https://jsonplaceholder.typicode.com/posts",n=await fetch(t),r=await n.json();this.posts.value=await r}catch(t){console.log(t)}}}var p=f,v=(0,e.aZ)({setup(){const t=new p,n=t.getPosts();return(0,e.bv)((async()=>{await t.fetchAll()})),console.log(n),{posts:n}}}),h=r(89);const d=(0,h.Z)(v,[["render",c]]);var w=d,g={__name:"App",setup(t){return(t,n)=>((0,e.wg)(),(0,e.j4)(w))}};const b=g;var y=b;(0,o.ri)(y).mount("#app")}},n={};function r(o){var e=n[o];if(void 0!==e)return e.exports;var i=n[o]={exports:{}};return t[o].call(i.exports,i,i.exports,r),i.exports}r.m=t,function(){var t=[];r.O=function(n,o,e,i){if(!o){var s=1/0;for(l=0;l<t.length;l++){o=t[l][0],e=t[l][1],i=t[l][2];for(var u=!0,c=0;c<o.length;c++)(!1&i||s>=i)&&Object.keys(r.O).every((function(t){return r.O[t](o[c])}))?o.splice(c--,1):(u=!1,i<s&&(s=i));if(u){t.splice(l--,1);var a=e();void 0!==a&&(n=a)}}return n}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[o,e,i]}}(),function(){r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,{a:n}),n}}(),function(){r.d=function(t,n){for(var o in n)r.o(n,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){var t={143:0};r.O.j=function(n){return 0===t[n]};var n=function(n,o){var e,i,s=o[0],u=o[1],c=o[2],a=0;if(s.some((function(n){return 0!==t[n]}))){for(e in u)r.o(u,e)&&(r.m[e]=u[e]);if(c)var l=c(r)}for(n&&n(o);a<s.length;a++)i=s[a],r.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return r.O(l)},o=self["webpackChunkservices"]=self["webpackChunkservices"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(7391)}));o=r.O(o)})();
//# sourceMappingURL=app.dccef7e8.js.map