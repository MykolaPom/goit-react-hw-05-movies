"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[247],{1247:function(t,n,e){e.r(n);var r=e(885),a=e(7689),c=e(9323),u=e(2791),i=e(184);n.default=function(){var t=(0,a.UO)().movieId,n=(0,u.useState)([]),e=(0,r.Z)(n,2),s=e[0],o=e[1],p=(0,u.useState)(!1),f=(0,r.Z)(p,2),h=f[0],v=f[1];return(0,u.useEffect)((function(){(0,c.zv)(t).then((function(t){return o(t)})).finally(v(!0))}),[t]),(0,i.jsx)(i.Fragment,{children:h&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("p",{children:"Cast"}),(0,i.jsx)("ul",{children:s.map((function(t){var n=t.id,e=t.name,r=t.profile_path,a=t.character;return(0,i.jsxs)("li",{children:[(0,i.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w500".concat(r):"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXlnwW5Beaf7usPsiqtlik2aKsB0AqX3nMiVGH2pD8va7pWsKyOCi5XI5o3rCQO212mo&usqp=CAU",alt:e,width:"100",height:"150"}),(0,i.jsxs)("p",{children:["Name: ",e]}),(0,i.jsxs)("p",{children:["Character: ",a]})]},n)}))})]})})}},9323:function(t,n,e){e.d(n,{fw:function(){return o},t2:function(){return p},tx:function(){return h},uP:function(){return f},zv:function(){return v}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),i=e.n(u),s="0888b454b4f7be0ebcd69ceb372ced29";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/trending/movie/day?api_key=".concat(s,"&page=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"?api_key=").concat(s));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n,e){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("search/movie?api_key=".concat(s,"&query=").concat(e,"&page=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=247.b2f3008d.chunk.js.map