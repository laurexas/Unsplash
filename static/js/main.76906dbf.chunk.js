(this["webpackJsonpmediapark-task"]=this["webpackJsonpmediapark-task"]||[]).push([[0],{10:function(e,a,t){e.exports={search:"Input_search__1yKtQ",searchIcon:"Input_searchIcon__1bfgx"}},14:function(e,a,t){e.exports={queriesContainer:"Queries_queriesContainer__1LEYB",heading:"Queries_heading__1aYge"}},27:function(e,a,t){e.exports={btn:"Button_btn__Gel5O"}},28:function(e,a,t){e.exports={main:"Grid_main__1Xa3X"}},29:function(e,a,t){e.exports={list:"GridList_list__1NUhj",item:"GridList_item__3oLXO"}},30:function(e,a,t){e.exports={imgContainer:"GridItem_imgContainer__2gGMT"}},31:function(e,a,t){e.exports={lds_ripple:"Loader_lds_ripple__1Rfgp","lds-ripple":"Loader_lds-ripple__1O95w"}},33:function(e,a,t){e.exports=t(63)},38:function(e,a,t){},4:function(e,a,t){e.exports={searchBar:"SearchBar_searchBar__3Sn1e",searchForm:"SearchBar_searchForm__23qaY",searchBtn:"SearchBar_searchBtn__3CKYq",saveContainer:"SearchBar_saveContainer__2Uk-O",saveBtn:"SearchBar_saveBtn__EiVq5"}},6:function(e,a,t){e.exports={backdrop:"Error_backdrop__10aXI",modal:"Error_modal__Yfu9H",heading:"Error_heading__1neiU",desc:"Error_desc__1PKq5",button:"Error_button__Htw6w"}},63:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(7),s=t.n(o),l=(t(38),t(4)),i=t.n(l),u=t(10),_=t.n(u),E=function(e){return c.a.createElement("svg",{id:"search",viewBox:"0 0 511.999 511.999",className:e.className},c.a.createElement("path",{d:"M508.874,478.708L360.142,329.976c28.21-34.827,45.191-79.103,45.191-127.309c0-111.75-90.917-202.667-202.667-202.667\r S0,90.917,0,202.667s90.917,202.667,202.667,202.667c48.206,0,92.482-16.982,127.309-45.191l148.732,148.732\r c4.167,4.165,10.919,4.165,15.086,0l15.081-15.082C513.04,489.627,513.04,482.873,508.874,478.708z M202.667,362.667\r c-88.229,0-160-71.771-160-160s71.771-160,160-160s160,71.771,160,160S290.896,362.667,202.667,362.667z"}))},m=t(1),d=t(8),R=t(5);!function(e){e.SEARCHBAR_SAVED_NEW_KEYWORD="SEARCHBAR_SAVED_NEW_KEYWORD",e.SEARCHBAR_ON_INPUT_CHANGE="SEARCHBAR_ON_INPUT_CHANGE",e.SEARCHBAR_FORM_LOADING="SEARCHBAR_FORM_LOADING",e.SEARCHBAR_FORM_ERROR="SEARCHBAR_FORM_ERROR",e.SEARCHBAR_FORM_SUBMIT_SUCCESS="SEARCHBAR_FORM_SUBMIT_SUCCESS",e.SHOW_UNEXPECTED_ERROR="SHOW_UNEXPECTED_ERROR",e.HIDE_UNEXPECTED_ERROR="HIDE_UNEXPECTED_ERROR"}(n||(n={}));var p={search:"",loading:!1,error:{},data:null,keywords:[]},h=function(e){return e.search},O=t(13),S=t.n(O),f=t(25),v=t(26),C=t.n(v),N=function(e,a){var t;"object"===typeof e&&e.hasOwnProperty("response")?(t=JSON.stringify(e.response.data),console.log(t)):"object"===typeof e?(console.log(e),t=JSON.stringify(e)):(console.log(e),t=e),a({type:n.SHOW_UNEXPECTED_ERROR,data:t}),a({type:n.SEARCHBAR_FORM_LOADING})},A=function(e,a){return function(){var t=Object(f.a)(S.a.mark((function t(r){var c,o,s;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),r({type:n.SEARCHBAR_FORM_LOADING}),c={},a.length<1&&(c.search="Search field is empty, please enter value..."),!Object.keys(c).length){t.next=6;break}return t.abrupt("return",N(c,r));case 6:return t.prev=6,t.next=9,C.a.get("".concat("https://api.unsplash.com/search/photos","?per_page=100&query=").concat(a),{headers:{Authorization:"Client-ID ".concat("BpslQNxqHYJPSxnqRpQ3h8oK56dxVnGqZZ6z7nvzx2Y")}});case 9:o=t.sent,(s=o.data).results.length<1&&(c.results="No results found",N(c,r)),r({type:n.SEARCHBAR_FORM_SUBMIT_SUCCESS,data:s}),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(6),N(t.t0,r);case 18:case"end":return t.stop()}}),t,null,[[6,15]])})));return function(e){return t.apply(this,arguments)}}()},g=function(){var e=Object(m.c)(h).search,a=Object(m.b)();return c.a.createElement("div",{className:_.a.search},c.a.createElement(E,{className:_.a.searchIcon}),c.a.createElement("input",{type:"text",name:"search",placeholder:"Search images...",value:e,onChange:function(e){return a(function(e){return{type:n.SEARCHBAR_ON_INPUT_CHANGE,name:e.target.name,value:e.target.value}}(e))}}))},b=t(27),B=t.n(b),H=function(e){return c.a.createElement("button",{onClick:e.onClick,className:[e.className,B.a.btn].join(" ")},e.children)},k=function(){var e=Object(m.c)(h).search,a=Object(m.b)();return c.a.createElement("div",{className:i.a.searchBar},c.a.createElement("form",{className:i.a.searchForm,onSubmit:function(t){return function(t){a(A(t,e))}(t)}},c.a.createElement(g,null),c.a.createElement(H,{className:i.a.searchBtn},"Search")),c.a.createElement("div",{className:i.a.saveContainer},c.a.createElement(H,{className:i.a.saveBtn,onClick:function(){return a((t=e,{type:n.SEARCHBAR_SAVED_NEW_KEYWORD,keyword:t}));var t}},"Save")))},y=t(28),D=t.n(y),I=t(29),j=t.n(I),w=t(30),U=t.n(w),x=function(){var e=Object(m.c)(h).data,a=null===e||void 0===e?void 0:e.results.map((function(e,a){return c.a.createElement("img",{key:a,src:"".concat(e.urls.small),alt:"".concat(e.description)})}));return c.a.createElement("div",{className:U.a.imgContainer},a)},M=t(31),T=t.n(M),F=function(e){return e.loading?c.a.createElement("div",{className:[T.a.lds_ripple,e.className].join(" ")},c.a.createElement("div",null),c.a.createElement("div",null)):null},G=function(){return Object(m.c)(h).loading?c.a.createElement(F,{loading:!0}):c.a.createElement("div",{className:j.a.list},c.a.createElement(x,null))},P=t(14),W=t.n(P),X=function(){var e=Object(m.c)(h).keywords,a=Object(m.b)();return c.a.createElement("div",{className:W.a.queriesContainer},c.a.createElement("h1",{className:W.a.heading},"Saved keywords:"),null===e||void 0===e?void 0:e.map((function(e){return c.a.createElement("p",{key:e,onClick:function(t){return a(A(t,e))}},e)})))},L=function(){return c.a.createElement("div",{className:D.a.main},c.a.createElement(G,null),c.a.createElement(X,null))},q=t(6),Y=t.n(q),K=function(){return{type:n.HIDE_UNEXPECTED_ERROR}},V=function(e){return e},z=function(){var e=Object(m.b)(),a=Object(m.c)(V).error;return a?c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:Y.a.backdrop,onClick:function(){return e(K())}}),c.a.createElement("div",{className:Y.a.modal},c.a.createElement("h1",{className:Y.a.heading},"Unexpected error"),c.a.createElement("p",{className:Y.a.desc},a),c.a.createElement(H,{className:Y.a.button,onClick:function(){return e(K())}},"Close"))):null};var J=function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",null,c.a.createElement(k,null)),c.a.createElement(L,null),c.a.createElement(z,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q=t(3),Z=t(32),$=Object(Q.c)({search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SEARCHBAR_FORM_LOADING:return Object(R.a)({},e,{loading:!e.loading});case n.SEARCHBAR_ON_INPUT_CHANGE:return Object(R.a)({},e,Object(d.a)({},a.name,a.value));case n.SEARCHBAR_FORM_ERROR:return Object(R.a)({},e,{error:a.error,loading:!1});case n.SEARCHBAR_FORM_SUBMIT_SUCCESS:return Object(R.a)({},e,{data:a.data,loading:!1});case n.SEARCHBAR_SAVED_NEW_KEYWORD:var t=e.keywords;return t.push(a.keyword),Object(R.a)({},e,{keywords:t});default:return e}},error:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case n.SHOW_UNEXPECTED_ERROR:return a.data;case n.HIDE_UNEXPECTED_ERROR:return null;default:return e}}}),ee=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Q.d,ae=Object(Q.e)($,ee(Object(Q.a)(Z.a)));s.a.render(c.a.createElement(m.a,{store:ae},c.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[33,1,2]]]);
//# sourceMappingURL=main.76906dbf.chunk.js.map