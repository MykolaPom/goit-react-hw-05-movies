"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[186],{186:function(n,e,t){t.r(e);var r=t(885),a=t(7689),c=t(2791),u=t(9323),i=t(184);e.default=function(){var n=(0,a.UO)().movieId,e=(0,c.useState)([]),t=(0,r.Z)(e,2),s=t[0],o=t[1];return(0,c.useEffect)((function(){(0,u.tx)(n).then((function(n){return o(n)}))}),[n]),(0,i.jsx)(i.Fragment,{children:s.length>0?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h2",{children:"Reviews"}),(0,i.jsx)("ul",{children:s.map((function(n){var e=n.author,t=n.content,r=n.id;return(0,i.jsxs)("li",{children:[(0,i.jsx)("p",{children:(0,i.jsx)("b",{children:e})}),(0,i.jsx)("p",{children:t})]},r)}))})]}):(0,i.jsx)("p",{children:"No reviews... Sorry."})})}},9323:function(n,e,t){t.d(e,{fw:function(){return o},t2:function(){return p},tx:function(){return f},uP:function(){return h},zv:function(){return v}});var r=t(5861),a=t(4687),c=t.n(a),u=t(4569),i=t.n(u),s="0888b454b4f7be0ebcd69ceb372ced29";i().defaults.baseURL="https://api.themoviedb.org/3";var o=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/trending/movie/day?api_key=".concat(s,"&page=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("/movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),h=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i().get("search/movie?api_key=".concat(s,"&query=").concat(t,"&page=").concat(e));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=186.39ee7a5a.chunk.js.map