(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[8,14],{456:function(t,e,a){"use strict";a.r(e);var n=a(6),r=a(3),c=a(0),i=a.n(c),s=a(2),l=a(58),m=a.n(l),o=a(29),u=a.n(o),d=a(94),p=a.n(d),f=a(106),g=a.n(f),b=a(95),h=a.n(b),_=a(107),E=a.n(_),v=a(108),N=a.n(v),y=a(5),O=a(44),j=a(32),x=a(19);a(10),a(37),a(11);function S(){var t=Object(r.a)(["\n    grid-column: ",";\n    display: grid;\n    min-height: 100%;\n    min-width: 100%;\n    place-items: flex-start;\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n\n\t.modal__container{\n        place-items: center;\n        background: ",";\n        padding: 2rem 3rem;\n        height: max-content;\n        align-self: center;\n        color: ",";\n        text-align: center;\n        position: relative;\n        border-radius: 1rem;\n        display: grid;\n\n        .close{\n            justify-self: flex-end;\n            cursor: pointer;\n        }\n        img{\n            height: 20rem;\n            width: 20rem;\n        }\n        &--text{\n            padding: 1rem;\n        }\n        &-address{\n            font-size: ",";\n            color: ",";\n        }\n    }\n    .rate{\n        grid-column: 1/-1;\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));\n        width: 100%;\n        /* padding: 3rem; */\n        align-items: flex-start;\n        place-items: center;\n        /* height: 78vh; */\n        @media only screen and (max-width: ",") {\n           padding: 3rem 0;\n        }\n\t\t&-attrHeader{\n\t\t\t\ttext-align: center;\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tpadding: 1.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\t/* width: 100%; */\n\t\t\t\tcolor: ",";\n\t\t\t\t/* font-size: ","; */\n\t\t}\n        &_chat{\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n\t\t\tgrid-template-rows: repeat(2, minmax(30rem, 1fr));\n\t\t\tgap: 2rem;\n\t\t\talign-self: flex-start;\n\t\t\twidth: 100%;\n\t\t\theight: 35rem;\n\t\t}\n\t\t&-card{\n\t\t\tgrid-column: 1/-1;\n\t\t\tcolor: ",";\n\t\t\twidth: 96%;\n\t\t\tdisplay: grid;\n\t\t\tjustify-items: space-around;\n\t\t\tbackground: transparent;\n\t\t\tgrid-template-columns: repeat(5, 1fr);\n\t\t\tgap: 0 .5rem;\n\t\t\t&__button{\n\t\t\t\talign-self: center;\n\t\t\t\tborder-radius: 1rem;\n\t\t\t\tpadding: 1.5rem 1.5rem;\n\t\t\t}\n\t\t\t.header{\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: ",";\n\t\t\t\tfont-size: ",";\n\t\t\t}\n\t\t\t&-group{\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tborder: none 1px;\n\t\t\t\tpadding: 1rem;\n\t\t\t\twidth: 100%;\n\t\t\t\tmargin: 1rem 0;\n\t\t\t\tborder-color: ",";\n\t\t\t\tlegend{\n\t\t\t\t\tfont-size: ",";\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&-attributes{\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\t/* min-width: 55rem; */\n\t\t\t\tjustify-content: space-around;\n\t\t\t\tpadding: 1rem 1.5rem;\n\t\t\t\tmargin: 1rem 0;\n\t\t\t\tbox-shadow: .2rem .3rem 10px rgba(0,0,0, .3),\n\t\t\t\t\t-0.2rem -0.3rem 20px rgba(255,255,255, .3);\n\t\t\t\tborder-radius: 1.4rem;\n\t\t\t\t&__item{\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tjustify-content: space-around;\n\t\t\t\t}\n\t  \t\t}\n\t\t}\t\n        img, #icon{\n            height: 3rem;\n            width: 3rem;        }\n\n    }\n"]);return S=function(){return t},t}var w=s.d.div(S(),(function(t){return t.gridPos||"2/-1"}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorDark}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorSecondary}),(function(t){return t.theme.breakPoints.bpSmall2}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.arge}),(function(t){return t.theme.colorDark}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.medium}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorPrimary}));var k={fetchAllRates:O.d};e.default=Object(j.b)((function(t){var e,a,n=t.rates;return{rates:n,coinOnlyRates:null===n||void 0===n||null===(e=n.allRates)||void 0===e?void 0:e.filter((function(t){return"coin"===t.type})),cardOnlyRates:null===n||void 0===n||null===(a=n.allRates)||void 0===a?void 0:a.filter((function(t){return"card"===t.type}))}}),k)((function(t){var e,a,r,s,l=t.gridPos,o=t.fetchAllRates,d=(t.rates,t.coinOnlyRates),f=t.cardOnlyRates,b=void 0===f?[]:f,_=Object(c.useState)(!0),v=Object(n.a)(_,2),O=v[0],j=(v[1],Object(c.useState)("")),S=Object(n.a)(j,2),k=(S[0],S[1],Object(c.useState)("")),R=Object(n.a)(k,2),I=(R[0],R[1],Object(c.useState)("")),P=Object(n.a)(I,2),z=(P[0],P[1],Object(c.useState)(!1)),C=Object(n.a)(z,2),J=C[0],A=C[1],H=Object(c.useState)(null),q=Object(n.a)(H,2),D=(q[0],q[1],Object(c.useState)(!0)),L=Object(n.a)(D,2),B=L[0],G=(L[1],Object(c.useState)(!1)),Q=Object(n.a)(G,2),U=Q[0],W=Q[1],F=Object(c.useState)(null),K=Object(n.a)(F,2),M=K[0],T=(K[1],Object(c.useState)(!1)),V=Object(n.a)(T,2),X=V[0],Y=(V[1],Object(c.useState)(!1)),Z=Object(n.a)(Y,2);return Z[0],Z[1],null===(e=JSON.parse(localStorage.getItem("userInfo")))||void 0===e||null===(a=e.user)||void 0===a||a.auth_token,null===(r=JSON.parse(localStorage.getItem("userInfo")))||void 0===r||null===(s=r.user)||void 0===s||s.id,Object(c.useEffect)((function(){var t=JSON.parse(localStorage.getItem("userInfo"))&&JSON.parse(localStorage.getItem("userInfo")).user.auth_token||"";u.a.get("".concat(y.a.api.getRates,"?token=").concat(t)).then((function(t){return o(t.data.data),t.data.data})).then((function(t){}))}),[o]),p.a,g.a,h.a,N.a,E.a,h.a,i.a.createElement(w,{gridPos:l},U?i.a.createElement(x.o,{error:X}," ",M," ",i.a.createElement("span",{onClick:function(){return W(!1)}},"\u2716")," "):null,i.a.createElement(x.m,{isActive:J},i.a.createElement("div",{className:"modal__container"},i.a.createElement("span",{role:"img","aria-label":"img",className:"close",onClick:function(){return A(!1)}},"\u274c"),i.a.createElement("img",{src:m.a,alt:""}),i.a.createElement("p",{className:"modal__container--text"},"please pay the specified amount into this ",O?"address":"account"),i.a.createElement("p",{className:"modal__container-address"},O?"d763hei899o889hvy889yvreiohvo99e9jv8r98re8viu89h":"UBA"+i.a.createElement("br",null)+" 0236736793"),i.a.createElement("p",{className:"modal__container--text"},"After successful payment contact customer care with this unique refrence id: ",i.a.createElement("br",null),i.a.createElement("span",{className:"modal__container-address"},B)))),i.a.createElement("div",{className:"rate"},i.a.createElement("h2",{className:"rate-attrHeader"},"Gift Cards"),i.a.createElement("div",{className:"rate-card"},b.map((function(t,e){var a;return i.a.createElement("fieldset",{className:"rate-card-group",key:e},i.a.createElement("legend",null,t.name),i.a.createElement("p",{className:"rate-card-attributes header"},i.a.createElement("span",{className:"rate-card-attributes__item"},"Country"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Class"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Range"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Rate"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Qty")),null===t||void 0===t||null===(a=t.attributes)||void 0===a?void 0:a.map((function(e,a){return i.a.createElement("p",{key:a,className:"rate-card-attributes"},i.a.createElement("span",{className:"rate-card-attributes__item"},e.country),i.a.createElement("span",{className:"rate-card-attributes__item"},e.class),i.a.createElement("span",{className:"rate-card-attributes__item"},e.from," - ",e.to),i.a.createElement("span",{className:"rate-card-attributes__item"},e.rate),i.a.createElement("span",{className:"rate-card-attributes__item"},t.quantity))})))}))),i.a.createElement("h2",{className:"rate-attrHeader"},"Coins"),i.a.createElement("div",{className:"rate-card"},null===d||void 0===d?void 0:d.map((function(t,e){return i.a.createElement("fieldset",{className:"rate-card-group",key:e},i.a.createElement("legend",null,t.name),i.a.createElement("p",{className:"rate-card-attributes header"},i.a.createElement("span",{className:"rate-card-attributes__item"},"Name"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Class"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Worth"),i.a.createElement("span",{className:"rate-card-attributes__item"},"Rate")),i.a.createElement("p",{className:"rate-card-attributes"},i.a.createElement("span",{className:"rate-card-attributes__item"},t.name),i.a.createElement("span",{className:"rate-card-attributes__item"},t.class),i.a.createElement("span",{className:"rate-card-attributes__item"},t.from," - ",t.to," ",console.log(t.from,t.to)),i.a.createElement("span",{className:"rate-card-attributes__item"},t.buying)))})))))}))},465:function(t,e,a){"use strict";a.r(e);var n=a(3),r=a(0),c=a.n(r),i=a(2),s=a(456);function l(){var t=Object(n.a)(["\n    grid-column: 2/10;\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));\n    /* gap: 10rem; */\n    min-height: 100vh;\n    width: 100%;\n\n    /* align-items: center; */\n    place-self: center;\n"]);return l=function(){return t},t}var m=i.d.div(l());e.default=function(){return c.a.createElement(m,null,c.a.createElement(s.default,null))}}}]);
//# sourceMappingURL=8.aec2a71a.chunk.js.map