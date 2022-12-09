"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[49],{2647:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n,a=r(885),c=r(168),i=r(3237).Z.div(n||(n=(0,c.Z)(["\n  display: flex;\n  gap: 10px;\n\n  & > div {\n    max-width: 400px;\n  }\n"]))),s=r(9323),u=r(2791),o=r(7689),p=r(8593),d=r(1087),l=r(4768),f=r(184),h=function(){var e,t,r=(0,u.useState)({}),n=(0,a.Z)(r,2),c=n[0],h=n[1],v=(0,u.useState)(!1),x=(0,a.Z)(v,2),g=x[0],w=x[1],m=(0,o.UO)().movieId,j=null!==(e=null===(t=(0,o.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";(0,u.useEffect)((function(){(0,s.t2)(m).then((function(e){h(e.data),w(!0)}))}),[m]);var b=c.title,y=c.poster_path,k=c.release_date,_=c.popularity,Z=c.overview,U=c.genres,S="https://image.tmdb.org/t/p/w500".concat(y),C=new Date(k).getFullYear();return(0,f.jsxs)("div",{children:[g?(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(d.rU,{to:j,children:[(0,f.jsx)(l.O8Q,{size:"10"}),"Back"]}),(0,f.jsxs)(i,{children:[(0,f.jsx)("img",{src:S,width:"300",alt:b}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("h1",{children:[b," (",C,")"]}),(0,f.jsxs)("h2",{children:["Popularity: ",Math.round(_)," "]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:Z}),(0,f.jsx)("h2",{children:"Genres"}),U.map((function(e){return(0,f.jsx)("p",{children:e.name},e.id)}))]})]}),(0,f.jsx)("hr",{}),(0,f.jsx)("p",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"cast",state:{from:j},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(d.rU,{to:"reviews",state:{from:j},children:"Reviews"})})]}),(0,f.jsx)("hr",{})]}):(0,f.jsx)(p.VL,{visible:!0,height:"80",width:"80",ariaLabel:"vortex-loading",wrapperStyle:{},wrapperClass:"vortex-wrapper",colors:["red","green","blue","yellow","orange","purple"]}),(0,f.jsx)(o.j3,{})]})}},9323:function(e,t,r){r.d(t,{fw:function(){return o},t2:function(){return p},tx:function(){return d},uP:function(){return f},zv:function(){return l}});var n=r(5861),a=r(4687),c=r.n(a),i=r(4569),s=r.n(i),u="0888b454b4f7be0ebcd69ceb372ced29";s().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/trending/movie/day?api_key=".concat(u,"&page=").concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("movie/".concat(t,"/reviews?api_key=").concat(u,"&language=en-US&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("/movie/".concat(t,"/credits?api_key=").concat(u,"&language=en-US"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t,r){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s().get("search/movie?api_key=".concat(u,"&query=").concat(r,"&page=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=49.cbd1a3b1.chunk.js.map