(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[18],{490:function(e,n,t){"use strict";t.r(n);var r=t(16),a=t.n(r),o=t(26),i=t(1),c=t(4),u=t(0),s=t.n(u),l=t(33),m=t.n(l),d=t(3),f=t(8),p=t(54),b=t(20),h=t.n(b),g=t(25),y=t(40),v=t.n(y),j=t(5),x=t(12),k=t(21),O=t(7);function w(){var e=Object(c.a)(["\n    grid-column: 2/-1;\n    display: grid;\n    /* grid-template-columns: 1fr; */\n    min-height: 100%;\n    min-width: 100%;\n    /* grid-auto-rows: 2; */\n    /* place-items: center; */\n    justify-items: center;\n    align-items: flex-start;\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n    position: relative;\n    .modal__container{\n        place-items: center;\n        background: ",";\n        padding: 2rem 3rem;\n        height: max-content;\n        align-self: center;\n        color: ",";\n        text-align: center;\n        position: relative;\n        border-radius: 1rem;\n        display: grid;\n\n        .close{\n            justify-self: flex-end;\n            cursor: pointer;\n        }\n        img{\n            height: 20rem;\n            width: 20rem;\n        }\n        &--text{\n            padding: 1rem;\n        }\n        &-address{\n            font-size: ",";\n            color: ",";\n        }\n    }\n    .title{   \n        justify-self: flex-start;\n        font-weight: 500;\n        color: ",";\n        font-family: ProximaNovaSoftW03-Regular;\n        position: relative;\n        margin-top: 8rem;\n\n        &::after{\n          content: '';\n          position: absolute;\n          width: 120%;\n          height: .4rem;\n          bottom: 0;\n          left: 0;\n          background: ",";\n        }\n      }  \n      .deposit{\n        display: grid;\n        /* margin-top: 13rem; */\n        padding: 2rem ;\n        /* display: flex; */\n        align-self: center;\n        justify-items: center;\n        color: ",";\n        /* height: 1rem; */\n        box-shadow: .2rem .4rem 10px rgba(0,0,0, .3),\n            -0.2rem -0.4rem 20px rgba(255,255,255, .3);\n        \n        &-header{\n            font-weight: 600;\n            font-size: ",";\n            color: ",";\n            justify-self: flex-start;\n            padding: 2rem;\n        }\n        &-form{\n            display: grid;\n            width: 90%;\n            justify-items: center;\n            \n            &__wrapper{\n                justify-items: initial;\n            }\n        }\n        .paymentOptions{\n            padding: 1rem 2rem;\n                margin: 1rem;\n                box-shadow: -0.2rem -0.4rem 20px rgba(255,255,255, .3),\n                    .2rem .4rem 10px rgba(0,0,0, .3);\n                background: none;\n                border-radius: .4rem;  \n                border: none;  \n                font-size: ",";\n                color: ",";\n                /* &:hover{\n                } */\n                &:focus{\n                    outline: none;\n                    /* color: ","; */\n                }\n        }\n        .summit{\n            margin: 0 2rem;\n        }\n    }\n"]);return w=function(){return e},e}var E=d.d.div(w(),(function(e){return e.theme.colorLight}),(function(e){return e.theme.colorLight}),(function(e){return e.theme.colorDark}),(function(e){return e.theme.font.large}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorPrimary}),(function(e){return e.theme.colorPrimary}),(function(e){return e.theme.colorDark}),(function(e){return e.theme.font.xlarge}),(function(e){return e.theme.colorPrimary}),(function(e){return e.theme.font.medium}),(function(e){return e.theme.colorSecondary}),(function(e){return e.theme.colorSecondary}));n.default=Object(g.b)((function(e){return{user:e.users}}))((function(e){var n,t,r=Object(u.useContext)(k.a),c=Object(u.useState)(""),l=Object(i.a)(c,2),d=l[0],b=l[1],g=Object(u.useState)(!1),y=Object(i.a)(g,2),w=y[0],_=y[1],S=Object(u.useState)(null),N=Object(i.a)(S,2),C=N[0],I=N[1],M=Object(u.useState)(!1),T=Object(i.a)(M,2),z=T[0],A=T[1],P=Object(u.useState)(!1),W=Object(i.a)(P,2),J=W[0],L=W[1],D=Object(u.useState)(""),F=Object(i.a)(D,2),H=F[0],Q=F[1],U=Object(u.useState)(!1),B=Object(i.a)(U,2),G=B[0],R=B[1],V=Object(u.useState)("14dUvUMHcsbtpmmQNXJQsro8FCTdEjhoMt"),X=Object(i.a)(V,1)[0],Y=Object(u.useState)("bank"),$=Object(i.a)(Y,2),q=$[0],K=$[1];function Z(e){return ee.apply(this,arguments)}function ee(){return(ee=Object(o.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"refId"===n?navigator.clipboard.writeText(H):navigator.clipboard.writeText(X);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=function(){var e=Object(o.a)(a.a.mark((function e(n){var t,r,o,i,c,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L(!1);case 2:if(!(d.length<2)){e.next=8;break}return L(!0),I("Must be at least 2 digits"),_(!0),e.abrupt("return");case 8:if(t=x.r.get("userInfo").user.auth_token,r=x.r.get("userInfo").user.id,o=x.r.get("userInfo").user.wallet_balc,i=x.r.get("userInfo").user.email,c=x.r.get("userInfo").user.status,A(!0),u={id:r,paymentMethod:q,amount:d,email:i},"verified"!==c){e.next=27;break}if(!(d>o)){e.next=24;break}return L(!1),I("Amount Greater than wallet balance"),L(!0),_(!0),b(0),setTimeout((function(){L(!1),_(!1),A(!1)}),8e3),e.abrupt("return");case 24:h.a.post("".concat(j.a.api.usersWidthdrawl,"?token=").concat(t),u).then((function(e){if(_(!1),"success"===e.data.status)return I(e.data.data[0]),Q(e.data.data[1]),_(!0),A(!1),void b(0);I(e.data.data),L(!0),_(!0),A(!1)})).catch((function(){I("An error occurred please try again or contact customer support"),L(!0),_(!0),A(!1)})),e.next=31;break;case 27:L(!0),I("You are unverified. Click on the verify link on the menu to verify your account and continue"),_(!0),setTimeout((function(){L(!1),_(!1),A(!1)}),8500);case 31:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return s.a.createElement(E,null,s.a.createElement(x.j,{isActive:G},s.a.createElement("div",{className:"modal__container"},s.a.createElement("span",{role:"img","aria-label":"img",className:"close",onClick:function(){return R(!1)}},"\u274c"),s.a.createElement("img",{src:v.a,alt:""}),s.a.createElement("p",{className:"modal__container--text"},"please pay exactly $",d," into this bitcoin address"),s.a.createElement("p",{className:"modal__container-address"},X,s.a.createElement("button",{onClick:function(){return Z()}}," copy")),s.a.createElement("p",{className:"modal__container--text"},"After successful payment contact customer care with the following refrence Id for confirmation.",s.a.createElement("span",{className:"modal__container-address"},H,s.a.createElement("button",{onClick:function(){return Z("refId")}}," copy"))))),w?s.a.createElement(x.l,{error:J}," ",C," ",s.a.createElement("span",{onClick:function(){return _(!1)}},"\u2716")," "):null,s.a.createElement("div",{className:"deposit"},s.a.createElement(f.c,{name:"deposit",label:"Enter amount to Widthdrawl",updatedValue:b,handleChange:function(e,n){},value:d,placeHolder:"Enter amount to Widthdrawl",type:"number",icon:m.a}),s.a.createElement("br",null),s.a.createElement("select",{className:"paymentOptions",value:q,onChange:function(e){return K(e.target.value)},name:"paymentOptions"},s.a.createElement(s.a.Fragment,null,s.a.createElement("option",{value:"bank"},"Bank transfer"),null===r||void 0===r||null===(n=r.country)||void 0===n||null===(t=n.paymentMethods)||void 0===t?void 0:t.map((function(e,n){return s.a.createElement("option",{key:n,value:e.name},e.name)})))),s.a.createElement(O.a,{field:"paymentOptions"}),s.a.createElement(p.a,{className:"summit",onClick:ne},z?"Loading...":"Submit")))}))}}]);
//# sourceMappingURL=18.a015f956.chunk.js.map