(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[21],{491:function(t,e,n){"use strict";n.r(e);var a=n(1),r=n(4),i=n(0),o=n.n(i),c=n(3),s=n(78),u=n(25),l=n(20),d=n.n(l),m=n(5),f=n(12),p=n(32);function h(){var t=Object(r.a)(["\n    grid-column: 2/-1;\n    display: grid;\n    min-height: 100%;\n    min-width: 100%;\n    align-items: flex-start;\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n    .rate{\n\t\tgrid-column: 1/-1;\n\t\tdisplay: grid;\n\t\twidth: 100%;\n\t\tpadding: 3rem;\n\t\t/* place-items: center; */\n\t\tjustify-items: center;\n\t\talign-items: space-around;\n\t\tjustify-self: flex-start;\n\t\tposition: relative;\n\t\t@media only screen and (max-width: ",") {\n\t\t\tpadding: 3rem 0;\n\t\t}\n\t\t\n      &__title{   \n        justify-self: flex-start;\n        font-weight: 500;\n        color: ",";\n        font-family: ProximaNovaSoftW03-Regular;\n        position: relative;\n\n        &::after{\n          content: '';\n          position: absolute;\n          width: 120%;\n          height: .4rem;\n          bottom: 0;\n          left: 0;\n          background: ",";\n        }\n      }\n    }\n    img{\n      /* height: 100%; */\n      width: 80%;        \n    }\n\n    \n"]);return h=function(){return t},t}var g=c.d.div(h(),(function(t){return t.theme.colorLight}),(function(t){return t.theme.breakPoints.bpSmall2}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorPrimary}));var v={fetchAllDeposits:p.b};e.default=Object(u.b)((function(t){return{allDeposits:t.deposits}}),v)((function(t){var e=t.allDeposits,n=t.fetchAllDeposits,r=Object(i.useState)(!1),c=Object(a.a)(r,2),u=c[0],l=c[1],p=Object(i.useState)(null),h=Object(a.a)(p,2),v=h[0],b=h[1],k=Object(i.useState)(!1),j=Object(a.a)(k,2),E=j[0],y=j[1],O=Object(i.useState)(!1),w=Object(a.a)(O,2),D=w[0],C=w[1];Object(i.useEffect)((function(){var t=f.r.get("userInfo").user.auth_token;d.a.get("".concat(m.a.api.adminDeposits,"?token=").concat(t)).then((function(t){return n(t.data.data),t.data})).then((function(t){l(!0)})).catch((function(t){}))}),[n]);var S=[{Header:"Unverified Users",columns:[{Header:"Amount",accessor:"amount"},{Header:"Email",accessor:"email"},{Header:"Coin Address",accessor:function(t){var e;return o.a.createElement("span",null,(null===t||void 0===t||null===(e=t.user)||void 0===e?void 0:e.coin_address)||"none")},render:function(t){return o.a.createElement("span",null,t.value.map((function(t){return o.a.createElement("span",null,void 0)})))}},{Header:"Status",accessor:"status"},{Header:"Transaction Id",accessor:"slug"}]},{Header:function(){return null},id:"action",Cell:function(t){var e=t.row;return o.a.createElement("div",{className:"options_btn"},o.a.createElement(f.s,{onClick:function(t){return x(e.original.amount,e.original.id,e.original.slug,e.original.user_id,e.original.status)}},"Accept"),o.a.createElement(f.s,{onClick:function(t){return _(e.original.id)}},"Delete"))}}],_=function(t){var e=f.r.get("userInfo").user.auth_token;d.a.post("".concat(m.a.api.adminDeleteDeposit,"?token=").concat(e),{id:t,action:"delete"}).then((function(t){return y(!1),"success"===t.data.status&&b(t.data.data[0]),t.data.data[1]})).then((function(t){y(!0),n(t)})).catch((function(t){b("could not delete user, try again"),y(!0)}))},x=function(t,e,a,r,i){var o=f.r.get("userInfo").user.auth_token,c={amount:t,id:e,slug:a,user_id:r,status:i};d.a.post("".concat(m.a.api.adminAcceptDeposit,"?token=").concat(o),c).then((function(t){return y(!1),"success"===t.data.status?(C(!1),b(t.data.data[0])):(b(t.data.data),C(!0)),t.data.data[1]})).then((function(t){y(!0),n(t)}))};return o.a.createElement(g,{color:""},o.a.createElement("div",{className:"rate"},E?o.a.createElement(f.l,{error:D}," ",v," ",o.a.createElement("span",{onClick:function(){return y(!1)}},"\u2716")," "):null,u?o.a.createElement(s.a,{data:e.deposits||[],expandedComponent:function(t){return o.a.createElement("div",{style:{fontSize:"10px",height:"20rem",width:"100%",display:"grid",gridTemplateColumns:"1fr 1fr 1fr",overflow:"hidden"}},Object.values(JSON.parse(t.values.images)).map((function(t,e){return o.a.createElement("img",{key:e,src:"http://localhost:8000/images/".concat(t),alt:"acceptDeposit info"})})))},handleVerifyClick:x,tableColumns:S}):null))}))}}]);
//# sourceMappingURL=21.a4396d5e.chunk.js.map