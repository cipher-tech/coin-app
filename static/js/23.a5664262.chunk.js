(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[23],{479:function(t,e,n){"use strict";n.r(e);var a=n(6),r=n(3),o=n(0),i=n.n(o),c=n(2),s=n(103),l=n(32),u=n(29),d=n.n(u),m=n(5),f=n(19),p=n(44);function g(){var t=Object(r.a)(["\n    grid-column: 2/-1;\n    display: grid;\n    min-height: 100%;\n    min-width: 100%;\n    align-items: flex-start;\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n    .rate{\n\t\tgrid-column: 1/-1;\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\tpadding: 3rem;\n\t\t/* place-items: center; */\n\t\tjustify-items: center;\n\t\talign-items: space-around;\n\t\tjustify-self: flex-start;\n\t\tposition: relative;\n\t\t@media only screen and (max-width: ",") {\n\t\t\tpadding: 3rem 0;\n\t\t}\n\t\t\n      &__title{   \n        justify-self: flex-start;\n        font-weight: 500;\n        color: ",";\n        font-family: ProximaNovaSoftW03-Regular;\n        position: relative;\n\n        &::after{\n          content: '';\n          position: absolute;\n          width: 120%;\n          height: .4rem;\n          bottom: 0;\n          left: 0;\n          background: ",";\n        }\n      }\n    }\n    img{\n      /* height: 100%; */\n      width: 80%;        \n    }\n\n    \n"]);return g=function(){return t},t}var h=c.d.div(g(),(function(t){return t.theme.colorLight}),(function(t){return t.theme.breakPoints.bpSmall2}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorPrimary}));var v={fetchAllDeposits:p.b};e.default=Object(l.b)((function(t){return{allDeposits:t.deposits}}),v)((function(t){var e=t.allDeposits,n=t.fetchAllDeposits,r=Object(o.useState)(!1),c=Object(a.a)(r,2),l=c[0],u=c[1],p=Object(o.useState)(null),g=Object(a.a)(p,2),v=g[0],b=g[1],k=Object(o.useState)(!1),E=Object(a.a)(k,2),O=E[0],j=E[1],S=Object(o.useState)(!1),y=Object(a.a)(S,2),w=y[0],D=y[1];Object(o.useEffect)((function(){var t=JSON.parse(localStorage.getItem("userInfo")).user.auth_token;console.log(t),d.a.get("".concat(m.a.api.adminDeposits,"?token=").concat(t)).then((function(t){return console.log(t.data.data),n(t.data.data),t.data})).then((function(t){u(!0)})).catch((function(t){console.log(t)}))}),[n]);var _=[{Header:"Unverified Users",columns:[{Header:"Amount",accessor:"amount"},{Header:"Email",accessor:"email"},{Header:"Coin Address",accessor:function(t){var e;return i.a.createElement("span",null,(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.coin_address)||"none")},render:function(t){return i.a.createElement("span",null,t.value.map((function(t){return i.a.createElement("span",null,console.log(t.user))})))}},{Header:"Status",accessor:"status"},{Header:"Transaction Id",accessor:"slug"}]},{Header:function(){return null},id:"action",Cell:function(t){var e=t.row;return i.a.createElement("div",{className:"options_btn"},i.a.createElement(f.t,{onClick:function(t){return x(e.original.amount,e.original.id,e.original.slug,e.original.user_id,e.original.status)}},"Accept"),i.a.createElement(f.t,{onClick:function(t){return C(e.original.id)}},"Delete"))}}],C=function(t){var e=JSON.parse(localStorage.getItem("userInfo")).user.auth_token;d.a.post("".concat(m.a.api.adminDeleteDeposit,"?token=").concat(e),{id:t,action:"delete"}).then((function(t){return j(!1),"success"===t.data.status&&b(t.data.data[0]),t.data.data[1]})).then((function(t){j(!0),n(t)})).catch((function(t){b(t.data.data),j(!0)}))},x=function(t,e,a,r,o){var i=JSON.parse(localStorage.getItem("userInfo")).user.auth_token,c={amount:t,id:e,slug:a,user_id:r,status:o};console.log(c),d.a.post("".concat(m.a.api.adminAcceptDeposit,"?token=").concat(i),c).then((function(t){return j(!1),"success"===t.data.status?(D(!1),b(t.data.data[0])):(b(t.data.data),D(!0)),t.data.data[1]})).then((function(t){j(!0),n(t)}))};return i.a.createElement(h,{color:""},i.a.createElement("div",{className:"rate"},O?i.a.createElement(f.o,{error:w}," ",v," ",i.a.createElement("span",{onClick:function(){return j(!1)}},"\u2716")," "):null,i.a.createElement("h1",{className:"rate__title"},"Deposit Requests"),l?i.a.createElement(s.a,{data:e.deposits||[],expandedComponent:function(t){return i.a.createElement("div",{style:{fontSize:"10px",height:"20rem",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",overflow:"hidden"}},Object.values(JSON.parse(t.values.images)).map((function(t,e){return i.a.createElement("img",{key:e,src:"http://localhost:8000/images/".concat(t),alt:"acceptDeposit info"})})))},handleVerifyClick:x,tableColumns:_}):null))}))}}]);
//# sourceMappingURL=23.a5664262.chunk.js.map