(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[26],{469:function(t,e,n){"use strict";n.r(e);var a=n(47),r=n.n(a),o=n(14),c=n(74),i=n(6),l=n(3),u=n(0),s=n.n(u),d=n(2),m=n(73),p=n(18),f=n(32),g=n(10),b=n(11),y=n(34),h=n.n(y),x=n(37),v=n.n(x),E=n(27),j=n.n(E),O=n(5),S=n(36),_=n(29);function k(){var t=Object(l.a)(["\n    grid-column: 2/-1;\n    display: grid;\n    min-height: 100%;\n    min-width: 100%;\n    /* place-items: center; */\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n\n\t.editButton{\n\t\tpadding: .5rem 1rem;\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t\tz-index: 200;\n\t\tborder: none;\n\t\ttext-transform: capitalize;\n\t\tcolor: ",";\n\t\tfont-size: ",";\n\t\tbackground: ",";\n\t\tmargin: 1rem;\n\t\tborder-radius: 2rem;\n\t\tcursor: pointer;\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t}\n\t.infoButton{\n\t\tpadding: .5rem 1rem;\n\t\tdisplay: flex;\n\t\tplace-items: center;\n\t\tz-index: 200;\n\t\tborder: none;\n\t\ttext-transform: capitalize;\n\t\tcolor: ",";\n\t\tfont-size: ",";\n\t\tbackground: ",";\n\t\tmargin: 1rem;\n\t\tborder-radius: 2rem;\n\t\tcursor: pointer;\n\t\t&:focus{\n\t\t\toutline: none;\n\t\t}\n\t}\n    .rate{\n      grid-column: 1/-1;\n      grid-template-rows: max-content max-content max-content;\n      display: grid;\n      width: 100%;\n      padding: 3rem;\n      position: relative;\n      /* z-index: 10; */\n      /* place-items: center; */\n      /* justify-items: center; */\n      /* align-items: space-around; */\n      @media only screen and (max-width: ",") {\n        padding: 3rem 0;\n      }\n\t  .expandedDiv{\n\t\t\tcolor: ",";\n\t\t\twidth: 100%;\n\t\t\tdisplay: grid;\n\t\t\tjustify-items: space-around;\n\t\t\tbackground: transparent;\n\t\t\tgrid-template-columns: repeat(5, 1fr);\n\t\t\tgap: 0 1.5rem;\n\t\t\t&__button{\n\t\t\t\talign-self: center;\n\t\t\t\tborder-radius: 1rem;\n\t\t\t\tpadding: 1.5rem 1.5rem;\n\t\t\t}\n\t\t\t.header{\n\t\t\t\tcolor: ",";\n\t\t\t\tfont-size: ",";\n\t\t\t}\n\t\t\t&-attributes{\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\tmin-width: 55rem;\n\t\t\t\tjustify-content: space-around;\n\t\t\t\tpadding: 1rem 1.5rem;\n\t\t\t\tmargin: 1rem;\n\t\t\t\tbox-shadow: .2rem .3rem 10px rgba(0,0,0, .3),\n\t\t\t\t\t-0.2rem -0.3rem 20px rgba(255,255,255, .3);\n\t\t\t\tborder-radius: 1.4rem;\n\t\t\t\t&__item{\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tjustify-content: space-around;\n\t\t\t\t}\n\t\t\t}\n\t  \t}\n\t\t.toggle-type{\n\t\t\tdisplay: flex;\n\t\t\talign-content: flex-end;\n\t\t\talign-self: flex-end;\n\t\t\tjustify-content: center;\n\n\t\t\t.active{\n\t\t\t\tbackground: ",";\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t\t&__item{\n\t\t\t\tfont-size: ",";\n\t\t\t\tbackground: ",";\n\t\t\t\tborder: none;\n\t\t\t\tpadding: 1rem 2rem;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tcolor: ",";\n\t\t\t\tcursor: pointer;\n\t\t\t}\n\t\t}\n\t  &-summit{\n\t\t\tdisplay: grid;\n\t\t\talign-self: center;\n\t\t\tjustify-self: flex-end;\n\t\t\ttext-align: center;\n\t\t\tjustify-content: center;\n\t\t\tpadding: 1rem 6rem;\n\t\t\tfont-size: ",";\n\t\t\tborder-radius: 20rem;\n\t\t\tborder: 1px solid ",";\n\t\t\tbox-shadow: .2rem .4rem 10px rgba(0,0,0, .3),\n\t\t\t-0.2rem -0.4rem 20px rgba(255,255,255, .3);\n\t\t\tbackground: ",";\n\t\t\tcolor: ",";\n\t\t\t/* border: none; */\n\t\t\tmargin: 1rem 5.5rem;\n\n\t\t\t&:active{\n\t\t\t\tbox-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),\n\t\t\t\t\t.2rem .4rem 10px rgba(0,0,0, .3);\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t\t&:focus{\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t}\n\n      .toggle{\n        position: fixed;\n        display: grid;\n        place-items: center;\n        z-index: 200;\n        top: 80%;\n        left: 95%;\n        height: 3.5rem;\n        width: 3.5rem;\n        font-size: 2rem;\n        background: ",";\n        border-radius: 50%;\n        /* padding: 1rem; */\n    }\n      \n\t&-container{\n\t\tbackground: white;\n\t\t/* width: 30rem; */\n\t\tpadding: 3rem;\n\t\t/* height: 40rem; */\n\t\talign-self: flex-start;\n\t\tcolor: ",";\n\t\tposition: relative;\n\t\t&-closeBtn{\n\t\t\tposition: absolute;\n\t\t\tcolor: ",";\n\t\t\ttop: 1rem;\n\t\t\tright: 2rem;\n\t\t\tbackground: transparent;\n\t\t\tborder: none;\n\t\t\tcursor: pointer;\n\t\t\tfont-size: ",";\n\t\t\t&:focus{\n\t\t\t\toutline: none;\n\t\t\t}\n\t\t}\n\t\t&-form{\n\t\t\t/* justify-self: flex-start; */\n\t\t\twidth: 95%;\n\t\t\ttransition: all .5s ease .2s;\n\t\t\t&__actions{\n\t\t\t\tdisplay: flex;\n\t\t\t}\n\t\t\t&--addCard{\n\t\t\t\tpadding: .5rem 1rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tplace-items: center;\n\t\t\t\tz-index: 200;\n\t\t\t\tborder: none;\n\t\t\t\ttext-transform: capitalize;\n\t\t\t\tcolor: ",";\n\t\t\t\tfont-size: ",";\n\t\t\t\tbackground: ",";\n\t\t\t\tmargin: 1rem;\n\t\t\t\tborder-radius: 2rem;\n\t\t\t\tcursor: pointer;\n\t\t\t\t&:focus{\n\t\t\t\t\toutline: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n      &__title{   \n        justify-self: flex-start;\n        display:flex;\n        align-self: flex-start;\n        height: max-content;\n        font-weight: 500;\n        color: ",";\n        font-family: ProximaNovaSoftW03-Regular;\n        position: relative;\n\n        &::after{\n          content: '';\n          position: absolute;\n          width: 120%;\n          height: .4rem;\n          bottom: 0;\n          left: 0;\n          background: ",";\n        }\n      }\n    }\n"]);return k=function(){return t},t}var N=d.d.div(k(),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorWhite}),(function(t){return t.theme.font.small}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorWhite}),(function(t){return t.theme.font.small}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.breakPoints.bpSmall2}),(function(t){return t.theme.colorDark}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorWhite}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorWhite}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.xlarge}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorSecondary}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorError}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorWhite}),(function(t){return t.theme.font.small}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.colorPrimary}));var w={fetchAllRates:S.d};e.default=Object(_.b)((function(t){var e,n,a=t.rates;return{rates:a,coinOnlyRates:null===a||void 0===a||null===(e=a.allRates)||void 0===e?void 0:e.filter((function(t){return"coin"===t.type})),cardOnlyRates:null===a||void 0===a||null===(n=a.allRates)||void 0===n?void 0:n.filter((function(t){return"card"===t.type}))}}),w)((function(t){var e=t.fetchAllRates,n=t.rates,a=t.coinOnlyRates,l=t.cardOnlyRates,d=Object(u.useState)([]),y=Object(i.a)(d,2),x=y[0],E=y[1],S=Object(u.useState)(!1),_=Object(i.a)(S,2),k=_[0],w=_[1],H=Object(u.useState)(!1),C=Object(i.a)(H,2),R=C[0],z=C[1],I=Object(u.useState)(!1),q=Object(i.a)(I,2),D=q[0],P=q[1],A=Object(u.useState)(""),V=Object(i.a)(A,2),B=V[0],J=V[1],T=Object(u.useState)(""),W=Object(i.a)(T,2),F=W[0],G=W[1],L=Object(u.useState)(""),Q=Object(i.a)(L,2),M=Q[0],U=Q[1],K=Object(u.useState)(""),X=Object(i.a)(K,2),Y=X[0],Z=X[1],$=Object(u.useState)(""),tt=Object(i.a)($,2),et=tt[0],nt=tt[1],at=Object(u.useState)(""),rt=Object(i.a)(at,2),ot=rt[0],ct=rt[1],it=Object(u.useState)(""),lt=Object(i.a)(it,2),ut=lt[0],st=lt[1],dt=Object(u.useState)(""),mt=Object(i.a)(dt,2),pt=mt[0],ft=mt[1],gt=Object(u.useState)(""),bt=Object(i.a)(gt,2),yt=bt[0],ht=bt[1],xt=Object(u.useState)(""),vt=Object(i.a)(xt,2),Et=vt[0],jt=vt[1],Ot=Object(u.useState)(""),St=Object(i.a)(Ot,2),_t=St[0],kt=St[1],Nt=Object(u.useState)(""),wt=Object(i.a)(Nt,2),Ht=wt[0],Ct=wt[1],Rt=Object(u.useState)(""),zt=Object(i.a)(Rt,2),It=zt[0],qt=zt[1],Dt=Object(u.useState)(!1),Pt=Object(i.a)(Dt,2),At=Pt[0],Vt=Pt[1],Bt=Object(u.useState)(!1),Jt=Object(i.a)(Bt,2),Tt=Jt[0],Wt=Jt[1],Ft=Object(u.useState)(null),Gt=Object(i.a)(Ft,2),Lt=Gt[0],Qt=Gt[1],Mt=Object(u.useState)(!1),Ut=Object(i.a)(Mt,2),Kt=Ut[0],Xt=Ut[1],Yt={name:B,buying:F,classInput:M,from:Y,to:et,selling:ot,quantity:ut};Object(u.useEffect)((function(){var t,n,a=null===(t=JSON.parse(localStorage.getItem("userInfo")))||void 0===t||null===(n=t.user)||void 0===n?void 0:n.auth_token;return j.a.get("".concat(O.a.api.getRates,"?token=").concat(a)).then((function(t){e(t.data.data)})),function(){}}),[e]);var Zt=function(){var t=Object(c.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:Xt(!1),Wt(!1),Vt(!0),a=JSON.parse(localStorage.getItem("userInfo")).user.auth_token,console.log("data :>> ",n),j.a.post("".concat(O.a.api.addRates,"?token=").concat(a),Object(o.a)({},n,{type:"coin"})).then((function(t){"success"===t.data.status&&(console.log(t.data),Qt("Added Successfully"),Wt(!0),Vt(!1),e(t.data.data),z(!1))})).catch((function(t){Qt("An error occured while uploading."),Xt(!0),Wt(!0),Vt(!1)}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),$t=[{Header:function(){return null},id:"expander",Cell:function(t){var e=t.row;return s.a.createElement("div",Object.assign({className:"editButton"},e.getToggleRowExpandedProps()),e.isExpanded?"Stop Editing":"Edit")}},{Header:"Coin Rates",columns:[{Header:"Name",accessor:"name",collapse:!0},{Header:"Type",accessor:"type"},{Header:"Buying",accessor:"buying",collapse:!0},{Header:"Selling",accessor:"selling",collapse:!0},{Header:"Quantity",accessor:"quantity",collapse:!0}]}],te=[{Header:function(){return null},id:"edit",Cell:function(t){var e=t.row;return s.a.createElement("div",Object.assign({className:"infoButton"},e.getToggleRowExpandedProps()),e.isExpanded?"Less":"More")}},{Header:"Card Rates",columns:[{Header:"Name",accessor:"name",collapse:!0},{Header:"Quantity",accessor:"quantity",collapse:!0}]},{Header:function(){return null},id:"expander",accessor:function(t){return s.a.createElement("button",{className:"editButton",onClick:function(){E(t),w(!0)}},"Edit")}}],ee=function(){ht(""),ft(""),jt("")};return s.a.createElement(N,null,Tt?s.a.createElement(p.o,{error:Kt}," ",Lt," ",s.a.createElement("span",{onClick:function(){return Wt(!1)}},"\u2716")," "):null,s.a.createElement("div",{className:"rate"},s.a.createElement("div",{className:"toggle",onClick:function(){return z(!R)}},R?"\u2716":"\u2795"),s.a.createElement(p.m,{isActive:R},s.a.createElement("p",{className:"toggle-type"},s.a.createElement("span",{className:"toggle-type__item ".concat(D?"active":null),onClick:function(){return P(!0)}},"Add Bitcoin"),s.a.createElement("span",{className:"toggle-type__item ".concat(D?null:"active"),onClick:function(){return P(!1)}},"Add Gift Card")),D?s.a.createElement(f.a,{buttonClass:"rate-summit",classname:" rate-container ",data:Yt,rules:{name:{required:!0,minlength:3},buying:{required:!0},selling:{required:!0},quantity:{required:!0}},submit:Zt},s.a.createElement("div",{className:"rate-container-form"},s.a.createElement(g.c,{name:"name",updatedValue:J,value:Yt.name,placeHolder:"Name",type:"name",icon:v.a}),s.a.createElement(b.a,{field:"name"}),s.a.createElement(g.c,{name:"classInput",updatedValue:U,value:Yt.classInput,placeHolder:"Class",type:"text",icon:h.a}),s.a.createElement(b.a,{field:"classInput"}),s.a.createElement(g.c,{name:"from",updatedValue:Z,value:Yt.from,placeHolder:"From",type:"number",icon:h.a}),s.a.createElement(b.a,{field:"from"}),s.a.createElement(g.c,{name:"to",updatedValue:nt,value:Yt.to,placeHolder:"To",type:"number",icon:h.a}),s.a.createElement(b.a,{field:"to"}),s.a.createElement(g.c,{name:"buying",updatedValue:G,value:Yt.buying,placeHolder:"Buying",type:"text",icon:h.a}),s.a.createElement(b.a,{field:"buying"}),s.a.createElement(g.c,{name:"selling",updatedValue:ct,value:Yt.selling,placeHolder:"Selling",type:"selling",icon:h.a}),s.a.createElement(b.a,{field:"selling"}),s.a.createElement(g.c,{name:"quantity",updatedValue:st,value:Yt.quantity,placeHolder:"Quantity",type:"number",icon:h.a}),s.a.createElement(b.a,{field:"quantity"})),s.a.createElement("p",{className:"rate-isSugnedIn"},"Add new bitcoin.")):s.a.createElement(s.a.Fragment,null,s.a.createElement(p.a,{closeModal:z,createGiftCard:function(t){Xt(!1),Wt(!1),Vt(!0);var n=JSON.parse(localStorage.getItem("userInfo")).user.auth_token;console.log("data :>> ",Object(o.a)({},t,{type:"card"})),j.a.post("".concat(O.a.api.adminCreateGiftcard,"?token=").concat(n),Object(o.a)({},t,{type:"card"})).then((function(t){"success"===t.data.status&&(console.log(t.data),Qt("Added Successfully"),Wt(!0),Vt(!1),e(t.data.data),z(!1))})).catch((function(t){Qt("An error occured while adding rate."),Xt(!0),Wt(!0),Vt(!1)})).finally((function(t){return z(!1)}))}}))),k?s.a.createElement(p.m,{isActive:k},s.a.createElement(p.g,{cardSelectedForEdit:x,isEditing:!0,closeModal:w,EditGiftCard:function(t){Xt(!1),Wt(!1),Vt(!0);var n=JSON.parse(localStorage.getItem("userInfo")).user.auth_token;console.log("data :>> ",Object(o.a)({},t,{type:"card"})),j.a.post("".concat(O.a.api.adminEditGiftcard,"?token=").concat(n),Object(o.a)({},t,{type:"card"})).then((function(t){"success"===t.data.status&&(console.log(t.data),Qt("Added Successfully"),Wt(!0),Vt(!1),e(t.data.data),z(!1))})).catch((function(t){Qt("An error occured while adding rate."),Xt(!0),Wt(!0),Vt(!1)})).finally((function(t){return w(!1)}))}})):null,s.a.createElement(m.a,{tableColumns:$t,expandedComponent:function(t){return s.a.createElement("div",{className:"expandedDiv"},s.a.createElement(g.c,{name:"buying",label:"Buying",updatedValue:ht,value:t.original.buying,placeHolder:t.original.buying,type:"text",icon:v.a}),s.a.createElement(g.c,{name:"selling",label:"Selling",updatedValue:jt,value:t.original.selling,placeHolder:t.original.selling,type:"text",icon:v.a}),s.a.createElement(g.c,{name:"quantity",label:"Quantity",updatedValue:ft,value:pt,placeHolder:t.original.quantity,type:"text",icon:v.a}),s.a.createElement(g.c,{name:"editClass",label:"class",updatedValue:kt,value:_t,placeHolder:t.original.class,type:"text",icon:v.a}),s.a.createElement(g.c,{name:"editFrom",label:"From",updatedValue:Ct,value:Ht,placeHolder:t.original.from,type:"text",icon:v.a}),s.a.createElement(g.c,{name:"editTo",label:"To",updatedValue:qt,value:It,placeHolder:t.original.to,type:"text",icon:v.a}),s.a.createElement("button",{onClick:function(){return function(t){var n={rateId:t.id,quantity:pt||t.quantity,buying:yt||t.buying,selling:Et||t.selling,from:Ht||t.from,class:_t||t.class,to:It||t.to},a=JSON.parse(localStorage.getItem("userInfo")).user.auth_token;j.a.post("".concat(O.a.api.updateRates,"?token=").concat(a),n).then((function(t){"success"===t.data.status&&(console.log(t.data),Qt("Updated Successfully"),Wt(!0),Vt(!1),e(t.data.data),z(!1))})).catch((function(t){Qt("An error occured while uploading."),Xt(!0),Wt(!0),Vt(!1)})).finally((function(t){ee()}))}(t.original)},className:"expandedDiv__button"},At?"Loading...":"Update"))},data:n.allRates?a:[]}),s.a.createElement(m.a,{tableColumns:te,expandedComponent:function(t){var e,n;return s.a.createElement("div",{className:"expandedDiv"},s.a.createElement("p",{className:"expandedDiv-attributes header"},s.a.createElement("span",{className:"expandedDiv-attributes__item"},"Country"),s.a.createElement("span",{className:"expandedDiv-attributes__item"},"Class"),s.a.createElement("span",{className:"expandedDiv-attributes__item"},"Range"),s.a.createElement("span",{className:"expandedDiv-attributes__item"},"Rate")),null===(e=t.original)||void 0===e||null===(n=e.attributes)||void 0===n?void 0:n.map((function(t,e){return s.a.createElement("p",{className:"expandedDiv-attributes",key:e},s.a.createElement("span",{className:"expandedDiv-attributes__item"},t.country),s.a.createElement("span",{className:"expandedDiv-attributes__item"},t.class),s.a.createElement("span",{className:"expandedDiv-attributes__item"},t.from," - ",t.to),s.a.createElement("span",{className:"expandedDiv-attributes__item"},t.rate))})))},data:n.allRates?l:[]})))}))}}]);
//# sourceMappingURL=26.aadde894.chunk.js.map