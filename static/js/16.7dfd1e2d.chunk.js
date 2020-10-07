(this["webpackJsonpcoin-app"]=this["webpackJsonpcoin-app"]||[]).push([[16],{292:function(t,e,a){"use strict";a.r(e);var n=a(30),r=a(1),c=a(4),i=a(0),s=a.n(i),l=a(3),m=a(40),o=a.n(m),u=a(20),d=a.n(u),p=a(5),f=a(32),g=a(25),h=a(12);function b(){var t=Object(c.a)(["\n    grid-column: ",";\n    display: grid;\n    min-height: 100%;\n    min-width: 100%;\n    place-items: flex-start;\n    background: ",";\n    border-radius: 2rem 0 0 2rem;\n    z-index: 30;\n\n\n\t.modal__container{\n        place-items: center;\n        background: ",";\n        padding: 2rem 3rem;\n        height: max-content;\n        align-self: center;\n        color: ",";\n        text-align: center;\n        position: relative;\n        border-radius: 1rem;\n        display: grid;\n\n        .close{\n            justify-self: flex-end;\n            cursor: pointer;\n        }\n        img{\n            height: 20rem;\n            width: 20rem;\n        }\n        &--text{\n            padding: 1rem;\n        }\n        &-address{\n            font-size: ",";\n            color: ",";\n        }\n    }\n    .rate{\n        grid-column: 1/-1;\n        display: grid;\n        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));\n        width: 100%;\n        /* padding: 3rem; */\n        align-items: flex-start;\n        place-items: center;\n        /* height: 78vh; */\n        @media only screen and (max-width: ",") {\n           padding: 3rem 0;\n        }\n\t\t&-attrHeader{\n\t\t\t\ttext-align: center;\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tpadding: 1.5rem;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: center;\n\t\t\t\t/* width: 100%; */\n\t\t\t\tcolor: ",";\n\t\t\t\t/* font-size: ","; */\n\t\t}\n        &_chat{\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));\n\t\t\tgrid-template-rows: repeat(2, minmax(30rem, 1fr));\n\t\t\tgap: 2rem;\n\t\t\talign-self: flex-start;\n\t\t\twidth: 100%;\n\t\t\theight: 35rem;\n\t\t}\n\t\t&-card{\n\t\t\tgrid-column: 1/-1;\n\t\t\tcolor: ",";\n\t\t\twidth: 96%;\n\t\t\tdisplay: grid;\n\t\t\tjustify-items: space-around;\n\t\t\tbackground: transparent;\n\t\t\tgrid-template-columns: repeat(5, 1fr);\n\t\t\tgap: 0 .5rem;\n\t\t\t&__button{\n\t\t\t\talign-self: center;\n\t\t\t\tborder-radius: 1rem;\n\t\t\t\tpadding: 1.5rem 1.5rem;\n\t\t\t}\n\t\t\t.header{\n\t\t\t\ttext-align: center;\n\t\t\t\tcolor: ",";\n\t\t\t\tfont-size: ",";\n\t\t\t}\n\t\t\t&-group{\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tborder: none 1px;\n\t\t\t\tpadding: 1rem;\n\t\t\t\twidth: 100%;\n\t\t\t\tmargin: 1rem 0;\n\t\t\t\tborder-color: ",";\n\t\t\t\tlegend{\n\t\t\t\t\tfont-size: ",";\n\t\t\t\t\tcolor: ",";\n\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t}\n\t\t\t}\n\t\t\t&-attributes{\n\t\t\t\tgrid-column: 1/-1;\n\t\t\t\tdisplay: flex;\n\t\t\t\twidth: 100%;\n\t\t\t\t/* min-width: 55rem; */\n\t\t\t\tjustify-content: space-around;\n\t\t\t\tpadding: 1rem 1.5rem;\n\t\t\t\tmargin: 1rem 0;\n\t\t\t\tbox-shadow: .2rem .3rem 10px rgba(0,0,0, .3),\n\t\t\t\t\t-0.2rem -0.3rem 20px rgba(255,255,255, .3);\n\t\t\t\tborder-radius: 1.4rem;\n\t\t\t\t&__item{\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\ttext-transform: capitalize;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tjustify-content: space-around;\n\t\t\t\t}\n\t  \t\t}\n\t\t}\t\n        img, #icon{\n            height: 3rem;\n            width: 3rem;        }\n\n    }\n"]);return b=function(){return t},t}var _=l.d.div(b(),(function(t){return t.gridPos||"2/-1"}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorLight}),(function(t){return t.theme.colorDark}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorSecondary}),(function(t){return t.theme.breakPoints.bpSmall2}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.arge}),(function(t){return t.theme.colorDark}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.medium}),(function(t){return t.theme.colorPrimary}),(function(t){return t.theme.font.large}),(function(t){return t.theme.colorPrimary}));var E={fetchAllRates:f.d};e.default=Object(g.b)((function(t){var e,a,n=t.rates;return{rates:n,user:t.users,coinOnlyRates:null===n||void 0===n||null===(e=n.allRates)||void 0===e?void 0:e.filter((function(t){return"coin"===t.type})),cardOnlyRates:null===n||void 0===n||null===(a=n.allRates)||void 0===a?void 0:a.filter((function(t){return"card"===t.type}))}}),E)((function(t){var e=t.gridPos,a=t.fetchAllRates,c=(t.rates,t.coinOnlyRates),l=t.cardOnlyRates,m=void 0===l?[]:l,u=Object(i.useState)(!0),f=Object(r.a)(u,1)[0],g=Object(i.useState)(!1),b=Object(r.a)(g,2),E=b[0],y=b[1],N=Object(i.useState)(!0),v=Object(r.a)(N,2),j=v[0],x=(v[1],Object(i.useState)(!1)),O=Object(r.a)(x,2),w=O[0],k=O[1],R=Object(i.useState)(null),S=Object(r.a)(R,2),P=S[0],z=(S[1],Object(i.useState)(!1)),C=Object(r.a)(z,2),A=C[0],H=(C[1],Object(i.useState)([])),q=Object(r.a)(H,2),D=q[0],I=q[1];return Object(i.useEffect)((function(){var t=h.r.get("userInfo")&&h.r.get("userInfo").user.auth_token||"";d.a.get("".concat(p.a.api.getRates,"?token=").concat(t)).then((function(t){return a(t.data.data),t.data.data})).then((function(t){var e=t.filter((function(t){return"coin"===t.type})).map((function(t){return t.name}));I(Object(n.a)(new Set(e)))}))}),[a]),s.a.createElement(_,{gridPos:e},w?s.a.createElement(h.l,{error:A}," ",P," ",s.a.createElement("span",{onClick:function(){return k(!1)}},"\u2716")," "):null,s.a.createElement(h.j,{isActive:E},s.a.createElement("div",{className:"modal__container"},s.a.createElement("span",{role:"img","aria-label":"img",className:"close",onClick:function(){return y(!1)}},"\u274c"),s.a.createElement("img",{src:o.a,alt:""}),s.a.createElement("p",{className:"modal__container--text"},"please pay the specified amount into this ",f?"address":"account"),s.a.createElement("p",{className:"modal__container-address"},f?"d763hei899o889hvy889yvreiohvo99e9jv8r98re8viu89h":"UBA"+s.a.createElement("br",null)+" 0236736793"),s.a.createElement("p",{className:"modal__container--text"},"After successful payment contact customer care with this unique refrence id: ",s.a.createElement("br",null),s.a.createElement("span",{className:"modal__container-address"},j)))),s.a.createElement("div",{className:"rate"},s.a.createElement("h2",{className:"rate-attrHeader"},"Gift Cards"),s.a.createElement("div",{className:"rate-card"},m.map((function(t,e){var a;return s.a.createElement("fieldset",{className:"rate-card-group",key:e},s.a.createElement("legend",null,t.name),s.a.createElement("p",{className:"rate-card-attributes header"},s.a.createElement("span",{className:"rate-card-attributes__item"},"Country"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Class"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Range"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Rate(\u20a6)"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Qty")),null===t||void 0===t||null===(a=t.attributes)||void 0===a?void 0:a.map((function(e,a){return s.a.createElement("p",{key:a,className:"rate-card-attributes"},s.a.createElement("span",{className:"rate-card-attributes__item"},e.country),s.a.createElement("span",{className:"rate-card-attributes__item"},e.class),s.a.createElement("span",{className:"rate-card-attributes__item"},e.from," - ",e.to),s.a.createElement("span",{className:"rate-card-attributes__item"},e.rate),s.a.createElement("span",{className:"rate-card-attributes__item"},t.quantity))})))}))),s.a.createElement("h2",{className:"rate-attrHeader"},"Coins"),s.a.createElement("div",{className:"rate-card"},(null===c||void 0===c?void 0:c.length)?D.map((function(t,e){return s.a.createElement("fieldset",{className:"rate-card-group",key:e},s.a.createElement("legend",null,t),s.a.createElement("p",{className:"rate-card-attributes header"},s.a.createElement("span",{className:"rate-card-attributes__item"},"Name"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Class"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Worth"),s.a.createElement("span",{className:"rate-card-attributes__item"},"Rate(\u20a6)")),c.map((function(e,a){return t===e.name?s.a.createElement("p",{key:a,className:"rate-card-attributes"},s.a.createElement("span",{className:"rate-card-attributes__item"},e.name),s.a.createElement("span",{className:"rate-card-attributes__item"},e.class),s.a.createElement("span",{className:"rate-card-attributes__item"},e.from," - ",e.to),s.a.createElement("span",{className:"rate-card-attributes__item"},e.buying)):null})))})):void 0)))}))}}]);
//# sourceMappingURL=16.7dfd1e2d.chunk.js.map