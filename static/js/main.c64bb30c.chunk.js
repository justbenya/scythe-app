(this["webpackJsonpscythe-score-calculator"]=this["webpackJsonpscythe-score-calculator"]||[]).push([[0],{382:function(e,t,n){},383:function(e,t,n){"use strict";n.r(t);var a,i=n(2),c=n(459),r=n(0),o=n.n(r),s=n(14),l=n.n(s),u=n(15),d=n(196),j=n(12),b=n(224),h=n(456),p=n(166),m=n.n(p),f=n(455),O=n(18),x=n(36),g=Object(x.b)({basename:"/"}),v=n(144),y=n(422),w=n(32),P=n(426),k=n(425),N=n(4),C=n(197),W=n(453),z=n(454),S=n(141),B=n.n(S),I=n(221),T=n.n(I),E=n(220),A=n.n(E),V=n(21),F=n(167),R=n(229),q=n(427),L=n(19),M=function(){var e=Object(r.useState)(!1),t=Object(L.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){window.addEventListener("beforeinstallprompt",(function(e){e.preventDefault(),a=e,c(!0)}))}),[]);return Object(i.jsx)("div",{children:n&&Object(i.jsx)(y.a,{onClick:function(){c(!1),a.prompt(),a.userChoice.then((function(e){"accepted"===e.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))},children:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c"})})},U=n(22),H=n.n(U),D=n(47),J=n(28),K=n(57),$=n(223),G=n(225),Q=n(13);function X(e){for(var t=Object(Q.a)(e),n=t.length-1;n>0;n--){var a=Math.floor(Math.random()*(n+1)),i=t[n];t[n]=t[a],t[a]=i}return t}function Y(e){return e.replace(":id?/","").replace(":id","")}var Z=Object(K.b)({name:"players",initialState:{},reducers:{createPlayer:{reducer:function(e,t){if(!(Object.values(e).length>=Zt)){var n=Object.values(e).map((function(e){return e.faction})),a=Object.values(e).map((function(e){return e.mat})),i=X(en).filter((function(e){return!n.includes(e.name)})),c=X(tn).filter((function(e){return!a.includes(e.name)})),r=i[0].name,o=c[0].name,s={id:t.payload.id,name:"Player "+(Object.values(e).length+1),faction:r,mat:o,gold:0,popularity:0,stars:0,territories:0,resources:0,buildingBonuses:0,points:0};e[s.id]=s}},prepare:function(){return{payload:{id:Object(G.a)()}}}},editPlayer:function(e,t){return Object(j.a)(Object(j.a)({},e),{},Object(J.a)({},t.payload.id,t.payload))},removePlayer:function(e,t){return Object($.a)(e,t.payload)},deletePlayers:function(){return{}}}}),_=Z.actions,ee=_.createPlayer,te=_.editPlayer,ne=_.removePlayer,ae=_.deletePlayers,ie=function(e,t,n){return function(a,i){var c=i().players,r=c[n][e],o=Object.values(c).find((function(n){return n[e]===t}));if(o){var s=Object(j.a)(Object(j.a)({},c[o.id]),{},Object(J.a)({},e,r));a(te(s))}var l=Object(j.a)(Object(j.a)({},c[n]),{},Object(J.a)({},e,t));a(te(l)),"faction"===e&&g.push("".concat(Y(Yt.index.path)).concat(an(l.faction)))}},ce=function(e,t,n){return function(a,i){var c=function(e){var t=0;e.popularity>=0&&e.popularity<=6?t=3*e.stars+2*e.territories+Math.floor(e.resources/2)+e.buildingBonuses+e.gold:e.popularity>=7&&e.popularity<=12?t=4*e.stars+3*e.territories+2*Math.floor(e.resources/2)+e.buildingBonuses+e.gold:e.popularity>=13&&e.popularity<=18&&(t=5*e.stars+4*e.territories+3*Math.floor(e.resources/2)+e.buildingBonuses+e.gold);return t}(t);a(te(Object(j.a)(Object(j.a)(Object(j.a)({},e),t),{},{points:c}))),Object.values(i().players).every((function(e){return e.points>0}))?g.push(Yt.result.path):g.push("".concat(Y(Yt.score.path)).concat(an(n.faction)))}},re=function(){return function(){var e=Object(D.a)(H.a.mark((function e(t,n){var a,i;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t(ee()),a=Object.values(n().players),i=on(a),g.push(i);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()},oe=Z.reducer,se=n.p+"static/media/bg.2905f7ce.jpg",le=Object(k.a)({container:{height:"100vh",paddingBottom:"12vh"},paperContainer:{backgroundColor:"#acacac",backgroundImage:"url(".concat(se,")"),height:"100%",backgroundPosition:"top center",backgroundSize:"cover"},logo:{marginTop:20,width:120,height:120},title:{paddingTop:60,fontWeight:"bold",color:"#fff",fontSize:46,textShadow:"0 2px 3px rgba(0, 0, 0, 0.4), 0 8px 14px rgba(0, 0, 0, 0.1), 0 18px 30px rgba(0, 0, 0, 0.1)"},btnAddPlayer:{marginTop:"auto"}}),ue=function(){var e=Object(u.b)(),t=le();return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(R.a,{className:t.paperContainer,elevation:0,square:!0,variant:"outlined",children:Object(i.jsx)(P.a,{fixed:!0,children:Object(i.jsxs)(q.a,{className:t.container,container:!0,direction:"column",justify:"center",alignItems:"center",spacing:2,children:[Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(v.a,{align:"center",className:t.title,children:"Scythe Score Calculator"})}),Object(i.jsx)(q.a,{className:t.btnAddPlayer,item:!0,children:Object(i.jsx)(y.a,{variant:"contained",color:"secondary",fullWidth:!0,onClick:function(){return e(re())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430"})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(M,{})})]})})})})},de=n(463),je=n(433),be=n(431),he=n(432),pe=n(430),me=n(428),fe=o.a.forwardRef((function(e,t){return Object(i.jsx)(me.a,Object(j.a)({direction:"up",ref:t},e))})),Oe=function(){var e=o.a.useState(!1),t=Object(L.a)(e,2),n=t[0],a=t[1],c=Object(u.b)(),r=function(){a(!1)};return Object(i.jsxs)("div",{children:[Object(i.jsx)(y.a,{variant:"contained",color:"primary",fullWidth:!0,onClick:function(){a(!0)},children:"\u041d\u043e\u0432\u0430\u044f \u0438\u0433\u0440\u0430"}),Object(i.jsxs)(de.a,{open:n,TransitionComponent:fe,keepMounted:!0,onClose:r,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(i.jsx)(pe.a,{id:"alert-dialog-slide-title",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0438\u0433\u0440\u0443?"}),Object(i.jsx)(be.a,{children:Object(i.jsxs)(he.a,{id:"alert-dialog-slide-description",children:["\u0412\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0438\u0433\u0440\u0435 \u0431\u0443\u0434\u0443\u0442 \u0443\u0434\u0430\u043b\u0435\u043d\u044b.",Object(i.jsx)("br",{}),"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c \u044d\u0442\u043e \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0431\u0443\u0434\u0435\u0442 \u043d\u0435\u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e."]})}),Object(i.jsxs)(je.a,{children:[Object(i.jsx)(y.a,{onClick:r,color:"primary",children:"\u041e\u0442\u043c\u0435\u043d\u0430"}),Object(i.jsx)(y.a,{onClick:function(){c((function(e){e(ae()),g.push("/")}))},color:"secondary",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})]})]})},xe=n(435),ge=n(436),ve=n(460),ye=n(437),we=n(33),Pe=n(203),ke=n.n(Pe),Ne=n(434),Ce=n(205),We=n.n(Ce),ze=n(204),Se=n.n(ze),Be=function(e){var t=e.name,n=e.iconPath;return n?Object(i.jsx)("img",{height:35,width:35,src:n,alt:t}):null},Ie=function(e){var t=e.player;return Object(i.jsx)(Ne.a,{invisible:t.points<=0,overlap:"circle",color:"default",badgeContent:Object(i.jsx)(Se.a,{style:{fontSize:16,color:We.a[400]}}),children:Object(i.jsx)(Be,{name:t.faction,iconPath:function(e){var t;return null===(t=en.find((function(t){return t.name===e.faction})))||void 0===t?void 0:t.iconPath}(t)})})},Te=n(226),Ee=n(458),Ae=Object(k.a)({root:{height:"100%",width:"100%",margin:"0 auto","@media (min-width: 600px)":{maxWidth:"100%"},"@media (min-width: 960px)":{maxWidth:960},"@media (min-width: 1280px)":{maxWidth:1280}}}),Ve=function(e){var t=e.children,n=e.value,a=e.index,c=Object(Te.a)(e,["children","value","index"]),r=Ae();return Object(i.jsx)("div",Object(j.a)(Object(j.a)({className:r.root,role:"tabpanel",hidden:n!==a,id:"full-width-tabpanel-".concat(a),"aria-labelledby":"full-width-tab-".concat(a)},c),{},{children:n===a&&Object(i.jsx)(Ee.a,{p:2,children:t})}))},Fe=Object(k.a)((function(e){return{root:{backgroundColor:e.palette.background.paper,width:"100%"},paper:{backgroundColor:e.palette.background.default,width:"100%",height:"100%",paddingTop:65,paddingBottom:55},tab:{padding:"3px 6px",fontSize:"12px",fontWeight:300,textTransform:"initial",opacity:.4,minHeight:65,color:e.palette.text.primary},swipeableViews:{height:"100%"}}})),Re=function(e){var t=e.children,n=e.players,a=Fe(),c=Object(we.a)(),s=Object(O.h)().id,l=o.a.useState(sn(n,s)),u=Object(L.a)(l,2),d=u[0],j=u[1],b=Object(O.g)(),h=Object(O.i)(Yt.index.path),p=Object(O.i)(Yt.score.path),m=(null===h||void 0===h?void 0:h.path)||(null===p||void 0===p?void 0:p.path)||"";Object(r.useEffect)((function(){j(sn(n,s))}),[s]);var f=function(e){var t;return null===(t=en.find((function(t){return t.name===e.faction})))||void 0===t?void 0:t.shortName};return Object(i.jsxs)(R.a,{className:a.paper,children:[Object(i.jsx)(xe.a,{className:a.root,position:"fixed",children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)(ge.a,{children:Object(i.jsx)(ve.a,{value:d,onChange:function(e,t){j(t)},scrollButtons:"auto",variant:"scrollable",indicatorColor:"secondary",children:n.map((function(e){return Object(i.jsx)(ye.a,{component:w.a,className:Object(N.a)(a.tab,"faction-tab"),label:f(e),icon:Object(i.jsx)(Ie,{player:e}),to:"".concat(Y(m)).concat(an(e.faction))},e.faction)}))})})})}),Object(i.jsx)(ke.a,{threshold:2,hysteresis:.1,resistance:!0,className:a.swipeableViews,axis:"rtl"===c.direction?"x-reverse":"x",index:d,onChangeIndex:function(e){e<n.length&&(j(e),b.push("".concat(Y(m)).concat(an(n[e].faction))))},children:n.map((function(e,n){return Object(i.jsx)(Ve,{value:d,index:n,dir:c.direction,children:t},e.faction)}))}),Object(i.jsx)(ln,{})]})},qe=n(441),Le=n(442),Me=n(465),Ue=n(443),He=n(440),De=n(444),Je=n(464),Ke=n(457),$e=n(209),Ge=n.n($e),Qe=n(438),Xe=Object(k.a)({media:{objectPosition:"50% 25%",height:"25vh",minHeight:140}}),Ye=function(e){var t=e.name,n=void 0===t?"":t,a=e.characterPath,c=void 0===a?"":a,r=Xe();return Object(i.jsx)(Qe.a,{component:"img",className:r.media,image:c,alt:n,title:n})},Ze=n(208),_e=n.n(Ze),et=n(439),tt=n(461),nt=n(124),at=n(206),it=n.n(at),ct=function(e){return Object.values(e.players)},rt=Object(nt.a)([ct],(function(e){var t,n=Object(V.a)(tn);try{var a=function(){var n=t.value,a=e.find((function(e){return e.mat===n.name}));if(a)return{v:a}};for(n.s();!(t=n.n()).done;){var i=a();if("object"===typeof i)return i.v}}catch(c){n.e(c)}finally{n.f()}return null})),ot=Object(nt.a)([ct,rt],(function(e,t){var n=_t.indexOf(null===t||void 0===t?void 0:t.faction),a=[];if(-1!==n){var i=_t.map((function(e,t){return it.a.nth(_t,n-t)})).filter((function(t){return e.find((function(e){return e.faction===t}))})),c=i.slice(0,1),r=i.slice(1,i.length).reverse();a=[].concat(Object(Q.a)(c),Object(Q.a)(r))}return a.map((function(t){return e.find((function(e){return e.faction===t}))}))})),st=function(e){return Object(nt.a)([ct],(function(t){return t.find((function(t){return an(t.faction)===e}))}))},lt=Object(K.b)({name:"names",initialState:[],reducers:{addName:function(e,t){e.push(t.payload)},deleteName:function(e,t){return e.filter((function(e){return e.name!==t.payload}))},changeName:function(e,t){return e.map((function(e){return e.name===t.payload?Object(j.a)(Object(j.a)({},e),{},{name:t.payload}):e}))}}}),ut=lt.actions,dt=ut.addName,jt=ut.deleteName,bt=ut.changeName,ht=lt.reducer,pt=function(e){return e.names},mt=Object(et.a)();function ft(){var e=Object(O.h)().id,t=Object(u.c)(pt),n=Object(u.b)(),a=Object(u.c)(st(e)),c=function(e){n(dt(e)),(null===a||void 0===a?void 0:a.id)&&n(te(Object(j.a)(Object(j.a)({},a),{},{name:e.name})))};return Object(i.jsx)(tt.a,{value:{name:(null===a||void 0===a?void 0:a.name)||"Player"},onChange:function(e,t){if("string"===typeof t)c({name:t});else if(t&&t.inputValue)c({name:t.inputValue});else if(t){if((null===a||void 0===a?void 0:a.name)===t.name)return;i={name:t.name},n(bt(i.name)),(null===a||void 0===a?void 0:a.id)&&n(te(Object(j.a)(Object(j.a)({},a),{},{name:i.name})))}var i},filterOptions:function(e,n){var i=mt(e,n),c=""!==n.inputValue,r=n.inputValue!==(null===a||void 0===a?void 0:a.name),o=-1===t.findIndex((function(e){return e.name===n.inputValue}));return c&&r&&o&&i.push({inputValue:n.inputValue,name:'\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c "'.concat(n.inputValue,'"')}),i},selectOnFocus:!0,clearOnBlur:!0,handleHomeEndKeys:!0,options:t,getOptionLabel:function(e){return"string"===typeof e?e:(null===e||void 0===e?void 0:e.inputValue)?e.inputValue:null===e||void 0===e?void 0:e.name},renderOption:function(e){return e.inputValue?e.name:Object(i.jsxs)("div",{style:{display:"flex",width:"100%",height:30,justifyContent:"space-between",alignItems:"center"},children:[Object(i.jsx)("p",{children:e.name}),Object(i.jsx)(He.a,{"aria-label":"delete",onClick:function(t){return function(e,t){n(jt(t)),e.stopPropagation()}(t,e.name)},children:Object(i.jsx)(_e.a,{fontSize:"small"})})]})},freeSolo:!0,renderInput:function(e){return Object(i.jsx)(Ke.a,Object(j.a)(Object(j.a)({},e),{},{label:"\u0418\u043c\u044f",variant:"outlined",size:"medium",fullWidth:!0}))}})}var Ot=Object(k.a)((function(e){return Object(Je.a)({root:{minHeight:370},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},cardActions:{paddingBottom:0,paddingTop:0},cardContent:{paddingTop:0},expandOpen:{transform:"rotate(180deg)"},matImage:{width:"100%",height:"auto"}})})),xt=function(){var e,t=Object(O.h)().id,n=Object(u.c)(st(t)),a=Object(u.b)(),c=Ot(),r=o.a.useState(!1),s=Object(L.a)(r,2),l=s[0],d=s[1];if(!(null===n||void 0===n?void 0:n.id))return null;return Object(i.jsxs)(qe.a,{className:c.root,children:[Object(i.jsx)(Ye,Object(j.a)({},en.find((function(e){return e.name===n.faction})))),Object(i.jsx)(Le.a,{children:Object(i.jsxs)(q.a,{container:!0,spacing:2,direction:"row",children:[Object(i.jsx)(q.a,{item:!0,xs:12,sm:6,children:Object(i.jsx)(ft,{})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{select:!0,SelectProps:{renderValue:function(e){var t=en.find((function(t){return t.name===e}));return Object(i.jsx)("div",{style:{display:"flex",alignItems:"center"},children:t&&Object(i.jsx)(Be,Object(j.a)({},t))})}},label:"\u0424\u0440\u0430\u043a\u0446\u0438\u044f",value:n.faction,onChange:function(e){a(ie("faction",e.target.value,n.id))},variant:"outlined",size:"small",children:en.map((function(e){return Object(i.jsxs)(Me.a,{value:e.name,children:[Object(i.jsx)(Be,Object(j.a)({},e)),"\xa0\xa0\xa0",e.name]},e.name)}))})}),Object(i.jsx)(q.a,{item:!0,xs:!0,children:Object(i.jsx)(Ke.a,{select:!0,label:"\u041f\u043b\u0430\u043d\u0448\u0435\u0442",value:n.mat,onChange:function(e){a(ie("mat",e.target.value,n.id))},variant:"outlined",size:"medium",fullWidth:!0,children:tn.map((function(e){return Object(i.jsx)(Me.a,{value:e.name,children:e.name},e.name)}))})})]})}),Object(i.jsxs)(Ue.a,{disableSpacing:!0,className:c.cardActions,children:[Object(i.jsx)(y.a,{color:"secondary",size:"medium",onClick:function(){var e;a((e=n.id,function(t){t(ne(e)),g.push(Y(Yt.index.path))}))},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"}),Object(i.jsx)(He.a,{className:Object(N.a)(c.expand,Object(J.a)({},c.expandOpen,l)),onClick:function(){d(!l)},"aria-expanded":l,"aria-label":"show mat",children:Object(i.jsx)(Ge.a,{})})]}),Object(i.jsx)(De.a,{in:l,timeout:"auto",unmountOnExit:!0,children:Object(i.jsx)(Le.a,{className:c.cardContent,children:Object(i.jsx)("img",{className:c.matImage,src:"".concat(null===(e=tn.find((function(e){return e.name===n.mat})))||void 0===e?void 0:e.imgPath),alt:n.mat})})})]})},gt=function(){var e=Object(u.c)(ct),t=Object(u.b)(),n=Object(O.h)().id;return!n&&e.length?Object(i.jsx)(O.a,{to:on(e)}):e.length?Object(i.jsxs)(Re,{players:e,faction:n,children:[Object(i.jsx)(xt,{}),Object(i.jsxs)(q.a,{container:!0,direction:"column",spacing:2,justify:"center",style:{paddingTop:20},children:[Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(y.a,{variant:"contained",disabled:e.length>=Zt,color:"secondary",fullWidth:!0,onClick:function(){return t(re())},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0438\u0433\u0440\u043e\u043a\u0430"})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Oe,{})})]})]}):Object(i.jsx)(O.a,{to:"/"})},vt=n(445),yt=n(446),wt=n(447),Pt=n(448),kt=n(449),Nt=n(450),Ct=Object(k.a)((function(e){return Object(Je.a)({root:{borderCollapse:"separate",minWidth:320},sticky:{position:"sticky",background:e.palette.background.paper,left:0,zIndex:1},resourceIcon:{verticalAlign:"middle"}})})),Wt=function(){var e=Ct(),t=Object(u.c)(ct).sort((function(e,t){return t.points-e.points})).map((function(e,t){return Object(j.a)(Object(j.a)({},e),{},{gameEndPosition:t+1})}));return Object(i.jsxs)(dn,{children:[Object(i.jsx)(vt.a,{component:R.a,children:Object(i.jsxs)(yt.a,{className:e.root,size:"small",children:[Object(i.jsx)(wt.a,{children:Object(i.jsxs)(Pt.a,{children:[Object(i.jsx)(kt.a,{align:"center",size:"small",children:"\u2116"}),Object(i.jsx)(kt.a,{className:e.sticky,children:"\u0418\u0433\u0440\u043e\u043a"}),nn.map((function(t){return Object(i.jsx)(kt.a,{align:"center",children:Object(i.jsx)("img",{className:e.resourceIcon,width:30,height:30,src:t.imgPath,alt:t.name})},t.name)})),Object(i.jsx)(kt.a,{align:"center",children:"\u0412\u0441\u0435\u0433\u043e"})]})}),Object(i.jsx)(Nt.a,{children:t.map((function(t){var n=t.buildingBonuses,a=t.faction,c=t.gameEndPosition,r=t.gold,o=t.mat,s=t.name,l=t.points,u=t.popularity,d=t.resources,j=t.stars,b=t.territories,h=t.id;return Object(i.jsxs)(Pt.a,{children:[Object(i.jsx)(kt.a,{align:"center",children:c}),Object(i.jsxs)(kt.a,{className:e.sticky,component:"th",scope:"player",size:"small",children:[s,Object(i.jsx)("br",{}),cn(a),Object(i.jsx)("br",{}),o]}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:u}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:j}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:b}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:d}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:n}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:r}),Object(i.jsx)(kt.a,{size:"small",align:"center",children:l})]},h)}))})]})}),Object(i.jsx)("br",{}),Object(i.jsx)(Oe,{})]})},zt=n(213),St=n(451),Bt=n(215),It=n.n(Bt),Tt=n(218),Et=n.n(Tt),At=n(214),Vt=n.n(At),Ft=n(216),Rt=n.n(Ft),qt=n(217),Lt=n.n(qt),Mt=n(161),Ut=n(77),Ht="\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0442\u0440\u0438\u0446\u0430\u0442\u0435\u043b\u044c\u043d\u044b\u043c",Dt=function(e){return"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 ".concat(e)},Jt=Ut.b().shape({gold:Ut.a().required().min(0,Ht).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0435 \u043c\u043e\u043d\u0435\u0442\u044b"),popularity:Ut.a().required().min(0,Ht).max(18,Dt(18)).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u0443\u044e \u043f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c"),stars:Ut.a().required().min(0,Ht).max(6,Dt(6)).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u043a\u043e\u043f\u043b\u0435\u043d\u043d\u044b\u0435 \u0437\u0432\u0435\u0437\u0434\u044b"),territories:Ut.a().required().min(0,Ht).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0442\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439"),resources:Ut.a().required().min(0,Ht).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u043c\u044b\u0445 \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432"),buildingBonuses:Ut.a().required().min(0,Ht).max(9,Dt(9)).integer().typeError("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u043b-\u0432\u043e \u043c\u043e\u043d\u0435\u0442 \u0437\u0430 \u0431\u043e\u043d\u0443\u0441 \u0437\u0434\u0430\u043d\u0438\u0439")}),Kt=function(){var e,t,n,a,c,o,s=Object(O.h)().id,l=Object(u.c)(ot),d=Object(u.c)(st(s)),j=Object(u.b)(),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,n=e.findIndex((function(e){return e.id===t.id})),a=e[e.length-1],i=e[0],c=n>=0&&e[n-1]?e[n-1]:a,r=n>=0&&e[n+1]?e[n+1]:i;return{prevPlayer:c,nextPlayer:r}}(l,d).nextPlayer,h=Object(Mt.useForm)({defaultValues:{gold:null===d||void 0===d?void 0:d.gold,popularity:null===d||void 0===d?void 0:d.popularity,stars:null===d||void 0===d?void 0:d.stars,territories:null===d||void 0===d?void 0:d.territories,resources:null===d||void 0===d?void 0:d.resources,buildingBonuses:null===d||void 0===d?void 0:d.buildingBonuses},mode:"onSubmit",resolver:Object(zt.yupResolver)(Jt)}),p=h.register,m=h.handleSubmit,f=h.errors,x=h.reset;Object(r.useEffect)((function(){(null===d||void 0===d?void 0:d.gold)||(null===d||void 0===d?void 0:d.popularity)||(null===d||void 0===d?void 0:d.stars)||(null===d||void 0===d?void 0:d.territories)||(null===d||void 0===d?void 0:d.resources)||(null===d||void 0===d?void 0:d.buildingBonuses)?x(d):x({gold:void 0,popularity:void 0,stars:void 0,territories:void 0,resources:void 0,buildingBonuses:void 0})}),[x,d]);var g=function(e){e.target.select()};return Object(i.jsx)("form",{onSubmit:m((function(e){d&&j(ce(d,e,b))})),autoComplete:"off",children:Object(i.jsxs)(q.a,{container:!0,direction:"column",spacing:2,children:[Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.gold,helperText:null===f||void 0===f||null===(e=f.gold)||void 0===e?void 0:e.message,inputRef:p,id:"gold",name:"gold",fullWidth:!0,variant:"outlined",size:"small",label:"\u041c\u043e\u043d\u0435\u0442\u044b \u043d\u0430 \u0440\u0443\u043a\u0430\u0445",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(Vt.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.popularity,helperText:null===f||void 0===f||null===(t=f.popularity)||void 0===t?void 0:t.message,inputRef:p,id:"popularity",name:"popularity",fullWidth:!0,variant:"outlined",size:"small",label:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(It.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.stars,helperText:null===f||void 0===f||null===(n=f.stars)||void 0===n?void 0:n.message,inputRef:p,id:"stars",name:"stars",fullWidth:!0,variant:"outlined",size:"small",label:"\u041a\u043e\u043b-\u0432\u043e \u0437\u0432\u0435\u0437\u0434",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(Rt.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.territories,helperText:null===f||void 0===f||null===(a=f.territories)||void 0===a?void 0:a.message,inputRef:p,id:"territories",name:"territories",fullWidth:!0,variant:"outlined",size:"small",label:"\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439 (\u0444\u0430\u0431\u0440\u0438\u043a\u0430 \u0434\u0430\u0435\u0442 +3)",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(Lt.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.resources,helperText:null===f||void 0===f||null===(c=f.resources)||void 0===c?void 0:c.message,inputRef:p,id:"resources",name:"resources",fullWidth:!0,variant:"outlined",size:"small",label:"\u0412\u0441\u0435\u0433\u043e \u0440\u0435\u0441\u0443\u0440\u0441\u043e\u0432 (\u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0435\u0441\u0443\u0440\u0441)",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(B.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Ke.a,{error:!!f.buildingBonuses,helperText:null===f||void 0===f||null===(o=f.buildingBonuses)||void 0===o?void 0:o.message,inputRef:p,id:"buildingBonuses",name:"buildingBonuses",fullWidth:!0,variant:"outlined",size:"small",label:"\u0411\u043e\u043d\u0443\u0441\u044b \u0437\u0434\u0430\u043d\u0438\u0439",type:"number",onFocus:g,InputProps:{startAdornment:Object(i.jsx)(St.a,{position:"start",children:Object(i.jsx)(Et.a,{})})}})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsxs)(q.a,{container:!0,alignItems:"center",justify:"space-between",spacing:2,children:[Object(i.jsx)(q.a,{item:!0,xs:12,children:Object(i.jsx)(y.a,{type:"submit",color:"primary",variant:"contained",fullWidth:!0,children:"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})}),(null===d||void 0===d?void 0:d.points)?Object(i.jsx)(q.a,{item:!0,children:Object(i.jsxs)(v.a,{variant:"h6",children:["\u041e\u0447\u043a\u043e\u0432: ",null===d||void 0===d?void 0:d.points]})}):null]})})]})})},$t=function(){var e=Object(O.h)().id,t=Object(u.c)(ot),n=Object(u.c)(st(e));return n&&t?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(Re,{players:t,faction:e,children:Object(i.jsxs)(q.a,{container:!0,direction:"column",spacing:3,style:{height:"100%"},children:[Object(i.jsx)(q.a,{item:!0,children:Object(i.jsxs)(v.a,{variant:"h5",children:["\u0418\u0433\u0440\u043e\u043a: ",n.name]})}),Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Kt,{})})]})})}):Object(i.jsx)(jn,{})},Gt=n(452),Qt=n(219),Xt=n.n(Qt),Yt={first:{path:"/",title:"",exact:!0,component:ue},index:{path:"/faction/:id?/",title:"\u0424\u0440\u0430\u043a\u0446\u0438\u0438",exact:!1,component:gt},score:{path:"/score/:id?/",title:"\u041f\u043e\u0434\u0441\u0447\u0435\u0442 \u043e\u0447\u043a\u043e\u0432",exact:!0,component:$t},result:{path:"/result",title:"\u0418\u0442\u043e\u0433\u0438 \u043f\u043e \u043e\u043a\u043e\u043d\u0447\u0430\u043d\u0438\u044e \u0438\u0433\u0440\u044b",exact:!0,component:Wt},map:{path:"/map",title:"\u041a\u0430\u0440\u0442\u0430",exact:!0,component:jn},settings:{path:"/settings",title:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438",exact:!0,component:function(e){return Object(i.jsx)(dn,{children:Object(i.jsx)(q.a,{container:!0,children:Object(i.jsx)(q.a,{item:!0,children:Object(i.jsx)(Gt.a,{rel:"noopener",href:"https://github.com/justbenya/scythe-app",children:Object(i.jsx)(Xt.a,{fontSize:"large",style:{color:"#fff"}})})})})})}}},Zt=5,_t=["\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u043e\u043b\u044f\u043d\u0438\u044f","\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e","\u0420\u0443\u0441\u0441\u0432\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u043e\u044e\u0437","\u041a\u0440\u044b\u043c\u0441\u043a\u043e\u0435 \u0445\u0430\u043d\u0441\u0442\u0432\u043e","\u0421\u0430\u043a\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u043c\u043f\u0435\u0440\u0438\u044f"],en=[{name:"\u0420\u0435\u0441\u043f\u0443\u0431\u043b\u0438\u043a\u0430 \u041f\u043e\u043b\u044f\u043d\u0438\u044f",shortName:"\u041f\u043e\u043b\u044f\u043d\u0438\u044f",slug:"polania",characterPath:"".concat(".","/assets/factions/polania.jpg"),iconPath:"".concat(".","/assets/icons/factions/polania.png")},{name:"\u0421\u0430\u043a\u0441\u043e\u043d\u0441\u043a\u0430\u044f \u0438\u043c\u043f\u0435\u0440\u0438\u044f",shortName:"\u0421\u0430\u043a\u0441\u043e\u043d\u0438\u044f",slug:"saxony",characterPath:"".concat(".","/assets/factions/saxony.jpg"),iconPath:"".concat(".","/assets/icons/factions/saxony.png")},{name:"\u041a\u0440\u044b\u043c\u0441\u043a\u043e\u0435 \u0445\u0430\u043d\u0441\u0442\u0432\u043e",shortName:"\u041a\u0440\u044b\u043c",slug:"crimean",characterPath:"".concat(".","/assets/factions/crimean.jpg"),iconPath:"".concat(".","/assets/icons/factions/crimean.png")},{name:"\u0421\u0435\u0432\u0435\u0440\u043d\u043e\u0435 \u043a\u043e\u0440\u043e\u043b\u0435\u0432\u0441\u0442\u0432\u043e",shortName:"\u0421\u0435\u0432\u0435\u0440",slug:"nordic",characterPath:"".concat(".","/assets/factions/nordic.jpg"),iconPath:"".concat(".","/assets/icons/factions/nordic.png")},{name:"\u0420\u0443\u0441\u0441\u0432\u0435\u0442\u0441\u043a\u0438\u0439 \u0441\u043e\u044e\u0437",shortName:"\u0420\u0443\u0441\u0441\u0432\u0435\u0442",slug:"rusviet",characterPath:"".concat(".","/assets/factions/rusviet.jpg"),iconPath:"".concat(".","/assets/icons/factions/rusviet.png")}],tn=[{name:"\u041f\u0440\u043e\u043c\u044b\u0448\u043b\u0435\u043d\u043d\u044b\u0439 (1)",imgPath:"".concat(".","/assets/mats/industrial1.jpg")},{name:"\u0421\u0442\u0440\u043e\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439 (2)",imgPath:"".concat(".","/assets/mats/engineering2.jpg")},{name:"\u041f\u0430\u0442\u0440\u0438\u043e\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 (3)",imgPath:"".concat(".","/assets/mats/patriotic3.jpg")},{name:"\u0422\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0438\u0439 (4)",imgPath:"".concat(".","/assets/mats/mechanical4.jpg")},{name:"\u0424\u0435\u0440\u043c\u0435\u0440\u0441\u043a\u0438\u0439 (5)",imgPath:"".concat(".","/assets/mats/argicultural5.jpg")}],nn=[{name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0441\u0442\u044c",imgPath:"".concat(".","/assets/icons/resources/popularity.png")},{name:"\u0417\u0432\u0435\u0437\u0434",imgPath:"".concat(".","/assets/icons/resources/stars.png")},{name:"\u0422\u0435\u0440\u0440\u0438\u0442\u043e\u0440\u0438\u0439",imgPath:"".concat(".","/assets/icons/resources/territories.png")},{name:"\u0420\u0435\u0441\u0443\u0440\u0441\u043e\u0432",imgPath:"".concat(".","/assets/icons/resources/resources.png")},{name:"\u0411\u043e\u043d\u0443\u0441\u043e\u0432 \u0437\u0434\u0430\u043d\u0438\u0439",imgPath:"".concat(".","/assets/icons/resources/structureBonus.png")},{name:"\u041c\u043e\u043d\u0435\u0442",imgPath:"".concat(".","/assets/icons/resources/gold.png")}];function an(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(F.a)(en,"name");return t[e].slug?t[e].slug:""}function cn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(F.a)(en,"name");return t[e].shortName?t[e].shortName:""}function rn(e){return e.length<=0?"":an(e[e.length-1].faction)}function on(e){var t=e[e.length-1],n=Y(Yt.index.path);return"".concat(n).concat(an(t.faction))}function sn(e,t){var n=e.map((function(e){return an(e.faction)})).findIndex((function(e){return e===t}));return n<=0?0:n}var ln=function(){var e=Object(O.g)(),t=Object(u.c)((function(e){return Object.values(e.players)})),n=Object(u.c)(rt);return Object(i.jsxs)(W.a,{className:"menu-footer",value:e.location.pathname,showLabels:!0,children:[Object(i.jsx)(z.a,{icon:Object(i.jsx)(A.a,{}),component:w.a,label:"\u0418\u0433\u0440\u043e\u043a\u0438",value:e.location.pathname.includes(Y(Yt.index.path))?e.location.pathname:null,to:"".concat(Y(Yt.index.path)).concat(rn(t))}),Object(i.jsx)(z.a,{disabled:!t.length,icon:Object(i.jsx)(B.a,{}),component:w.a,label:"\u041e\u0447\u043a\u0438",value:e.location.pathname.includes(Y(Yt.score.path))?e.location.pathname:null,to:"".concat(Y(Yt.score.path)).concat(an(null===n||void 0===n?void 0:n.faction))}),Object(i.jsx)(z.a,{disabled:!t.length,icon:Object(i.jsx)(T.a,{}),component:w.a,label:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",value:Yt.result.path,to:Yt.result.path})]})},un=Object(k.a)({fixed:{"@media (min-width: 600px)":{maxWidth:"100%"},"@media (min-width: 960px)":{maxWidth:960},"@media (min-width: 1280px)":{maxWidth:1280}},main:{height:"100%",padding:"20px 0 50px 0"}}),dn=function(e){var t=e.className,n=un(),a=Object(C.a)();return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(P.a,{fixed:!0,className:n.fixed,children:Object(i.jsx)("main",{className:Object(N.a)(n.main,t),children:e.children})}),"landscape"===a?null:Object(i.jsx)(ln,{})]})},jn=function(){return Object(i.jsxs)(dn,{children:[Object(i.jsx)(v.a,{variant:"h1",align:"center",children:"404?!"}),Object(i.jsx)(y.a,{component:w.a,to:"/",variant:"outlined",color:"primary",fullWidth:!0,children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})},bn=Object(b.a)({palette:{type:"dark",secondary:m.a,primary:{main:"#FFB74D",light:"rgb(255, 197, 112)",dark:"rgb(200, 147, 89)",contrastText:"rgba(0, 0, 0, 0.87)"},error:{main:m.a.A400}}}),hn=function(){return Object(i.jsxs)(f.a,{theme:bn,children:[Object(i.jsx)(h.a,{}),Object(i.jsx)(O.c,{history:g,children:Object(i.jsxs)(O.d,{children:[Object.values(Yt).map((function(e){return Object(i.jsx)(O.b,Object(j.a)({},e),e.path)})),Object(i.jsx)(O.b,{component:jn})]})})]})},pn=n(62),mn=n(222),fn=n.n(mn),On=n(30),xn=Object(On.c)({players:oe,names:ht}),gn={key:"root",version:2,storage:fn.a},vn=Object(pn.g)(gn,xn),yn=Object(K.a)({reducer:vn,middleware:Object(K.c)({serializableCheck:{ignoredActions:[pn.a,pn.f,pn.b,pn.c,pn.d,pn.e]}})}),wn=Object(pn.h)(yn),Pn=yn,kn=(n(382),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)));function Nn(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(Object(i.jsx)(u.a,{store:Pn,children:Object(i.jsx)(d.a,{loading:null,persistor:wn,children:Object(i.jsx)(c.b,{injectFirst:!0,children:Object(i.jsx)(hn,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");kn?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Nn(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Nn(t,e)}))}}()}},[[383,1,2]]]);
//# sourceMappingURL=main.c64bb30c.chunk.js.map