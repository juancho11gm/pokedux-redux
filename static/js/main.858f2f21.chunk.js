(this["webpackJsonpreact-redux-course"]=this["webpackJsonpreact-redux-course"]||[]).push([[0],{115:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(30),o=n.n(r),a=n(62),i=n(18),s=n(6),j=n(15),l=n(125),u=n(42),d="SET_POKEMONS",b="CLEAR_ERROR",O="TOGGLE_LOADER",p="SET_FAVORITE",h={pokemons:[]},m={loading:!1},f=Object(a.b)({pokemon:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return Object(u.a)(Object(u.a)({},e),{},{pokemons:t.payload});case p:return Object(u.a)(Object(u.a)({},e),{},{pokemons:e.pokemons.map((function(e){return e.id===t.payload&&(e.favorite=!e.favorite),e}))});default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(Object(u.a)({},e),{},{loading:!e.loading});default:return e}}}),x=n(194),v=n(64),k=n(126),g=n(187),y=n(91),E=n(104),S=n.n(E),_=n(123),w=n(75),C=n.n(w),N=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).POKEAPI||"https://pokeapi.co/api/v2/",P=C.a.create({baseURL:N}),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:151;return P.get("/pokemon?limit=".concat(e)).then((function(e){return e.data})).catch((function(e){return console.error(e)}))},R=function(e){return{type:b,payload:e}},I=function(){return{type:O}},D="violet",L=(n(115),n(2)),A=function(e){var t=e.pokemon,n=Object(j.b)(),c=t.favorite?"yellow":"grey";return Object(L.jsx)(x.a.Column,{mobile:16,tablet:8,computer:4,children:Object(L.jsxs)("div",{className:"PokemonCard",children:[Object(L.jsx)("button",{className:"PokemonCard-favorite",onClick:function(e){var c;n((c=t.id,{type:p,payload:c}))},type:"button",children:Object(L.jsx)(v.a,{name:"favorite",color:c})}),Object(L.jsx)(k.a,{centered:!0,src:t.sprites.front_default}),Object(L.jsx)("h2",{className:"PokemonCard-title",children:t.name}),Object(L.jsx)(g.a,{}),Object(L.jsxs)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(L.jsx)("div",{children:t.types.map((function(e){return Object(L.jsx)(y.a,{color:D,children:e.type.name},"".concat(t.id,"-").concat(e.type.name))}))}),Object(L.jsx)(i.b,{to:"/pokemons/".concat(t.id),children:"Details"})]})]})})},F=function(e){var t=e.pokemons;return Object(L.jsx)("div",{className:"wrapper",children:Object(L.jsx)(x.a,{children:t.map((function(e,t){return Object(L.jsx)(A,{pokemon:e},"pokemon-".concat(t))}))})})};F.defaultProps={pokemons:[]};var B=F,H=n(193),K=n(191),U=n(188),W=n.p+"static/media/logo_v4.0905522d.svg",V=(n(165),function(){return Object(L.jsx)(K.a,{fixed:"top",children:Object(L.jsxs)(U.a,{children:[Object(L.jsx)(K.a.Item,{link:!0,children:Object(L.jsx)(i.c,{to:"/pokemons",children:Object(L.jsx)(k.a,{size:"small",src:W})})}),Object(L.jsx)(K.a.Item,{link:!0,position:"right",children:Object(L.jsx)(i.c,{to:"/favorites",className:function(e){return e.isActive?"blueviolet":"grey"},children:"Favorites"})})]})})}),G=(n(166),function(e){var t=e.children,n=Object(j.b)(),c=Object(j.c)((function(e){return e.error}));return Object(L.jsxs)("div",{children:[Object(L.jsx)(V,{}),c&&Object(L.jsx)("div",{className:"wrapper",children:Object(L.jsx)(H.a,{onDismiss:function(){var e;n({type:b,payload:e})},content:c,color:"red"})}),Object(L.jsx)("div",{className:"Layout-content",children:t})]})});n(167);var J=function(){var e=Object(j.c)((function(e){return e.pokemon.pokemons})).filter((function(e){return e.favorite}));return Object(L.jsx)(G,{children:Object(L.jsx)("div",{className:"Favorites",children:Object(L.jsx)(B,{pokemons:e})})})},M=n(22),X=n(190);n(168);function z(){var e=Object(i.d)(),t=Object(M.a)(e,2)[1],n=Object(j.c)((function(e){return e.pokemon.filter}));return Object(L.jsx)("div",{className:"Searcher wrapper",children:Object(L.jsx)(x.a,{children:Object(L.jsx)(x.a.Column,{widescreen:10,largeScreen:10,mobile:16,className:"Searcher",children:Object(L.jsx)(X.a,{aligned:"right",input:{fluid:!0},showNoResults:!1,placeholder:"Encuentra a tu Pokem\xf3n favorito",value:n,onSearchChange:function(e,n){var c=n.value;t(c?{filter:c}:{})}})})})})}var q=n(192),Q=n(189),Y=function(){return Object(L.jsx)(q.a,{active:!0,children:Object(L.jsx)(Q.a,{})})};var Z=function(){var e=Object(i.d)(),t=Object(M.a)(e,1)[0],n=Object(j.c)((function(e){return e.pokemon.pokemons})),r=t.get("filter"),o=r?n.filter((function(e){return e.name.toLowerCase().includes(r)})):n,a=Object(j.c)((function(e){return e.ui.loading})),l=Object(j.b)();return Object(c.useEffect)((function(){0===n.length&&l((function(e){!function(){var t=Object(_.a)(S.a.mark((function t(){var n,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e(I()),t.next=4,T();case 4:return n=t.sent,t.next=7,Promise.all(n.results.map((function(e){return C.a.get(e.url)}))).then((function(e){return e.map((function(e){return e.data}))}));case 7:c=t.sent,e({type:d,payload:c}),e(I()),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),e(R({message:"Error"})),e(I());case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}()()}))}),[l,n]),Object(L.jsxs)(G,{children:[Object(L.jsxs)("div",{className:"Home",children:[a&&Object(L.jsx)(Y,{}),Object(L.jsx)(z,{}),Object(L.jsx)(B,{pokemons:o})]}),Object(L.jsx)(s.a,{})]})},$=(n(169),function(){var e=Object(s.h)(),t=Object(c.useState)(null),n=Object(M.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)(""),i=Object(M.a)(a,2),j=i[0],l=i[1];return Object(c.useEffect)((function(){var t;(t=e.pokemonId,P.get("/pokemon/".concat(t)).then((function(e){return e.data})).catch((function(e){throw e}))).then((function(e){o(e)})).catch((function(e){l(e.toString())}))}),[e.pokemonId]),Object(L.jsxs)(G,{children:[""!==j&&Object(L.jsxs)("p",{children:["Ups.... ",j]}),r&&""===j?Object(L.jsx)(x.a,{children:Object(L.jsx)(x.a.Column,{mobile:16,tablet:8,computer:4,children:Object(L.jsxs)("div",{className:"PokemonCard",children:[Object(L.jsx)(k.a,{centered:!0,src:r.sprites.front_default}),Object(L.jsx)("h2",{className:"PokemonCard-title",children:r.name}),Object(L.jsxs)("p",{children:["Weight: ",r.weight]}),Object(L.jsxs)("p",{children:["Height: ",r.height]}),Object(L.jsx)(g.a,{}),Object(L.jsx)("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:Object(L.jsx)("div",{children:r.types.map((function(e){return Object(L.jsx)(y.a,{color:D,children:e.type.name},"".concat(r.id,"-").concat(e.type.name))}))})})]})})}):null]})});n(170);var ee=function(){return Object(L.jsxs)("div",{children:[Object(L.jsx)("h1",{children:"Pokemons App"}),Object(L.jsxs)("nav",{style:{borderBottom:"solid 1px",paddingBottom:"1rem"},children:[Object(L.jsx)(i.b,{to:"/pokemons",children:"Pokemons"})," |"," ",Object(L.jsx)(i.b,{to:"/favorites",children:"Favorite Pokemons"})]})]})},te=(n(171),(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||a.c)(Object(a.a)(l.a,(function(e){return function(e){return function(t){console.log(">>> Shooting: ",t),e(t)}}})))),ne=Object(a.d)(f,te),ce=function(){return Object(L.jsx)(j.a,{store:ne,children:Object(L.jsx)(i.a,{children:Object(L.jsxs)(s.d,{children:[Object(L.jsx)(s.b,{path:"/",element:Object(L.jsx)(ee,{})}),Object(L.jsx)(s.b,{path:"/pokemons",element:Object(L.jsx)(Z,{})}),Object(L.jsx)(s.b,{path:"pokemons/:pokemonId",element:Object(L.jsx)($,{})}),Object(L.jsx)(s.b,{path:"/favorites",element:Object(L.jsx)(J,{})}),Object(L.jsx)(s.b,{path:"*",element:Object(L.jsxs)("main",{style:{padding:"1rem"},children:[Object(L.jsx)("p",{children:"There's nothing here!"}),Object(L.jsx)(i.b,{to:"/",children:"Back to homepage"})]})})]})})})};n(172);o.a.render(Object(L.jsx)(ce,{}),document.getElementById("root"))}},[[173,1,2]]]);
//# sourceMappingURL=main.858f2f21.chunk.js.map