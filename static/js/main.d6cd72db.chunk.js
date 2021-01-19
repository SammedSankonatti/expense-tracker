(this["webpackJsonpexpense-tracker"]=this["webpackJsonpexpense-tracker"]||[]).push([[0],{108:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=(a(108),a(250)),u=a(24),i=a(246),m=a(248),s=a(249),p=a(90),d=a(56),E=a(95),f=function(e,t){switch(t.type){case"DELETE_TRANSACTION":return e.filter((function(e){return e.id!==t.payload}));case"ADD_TRANSACTION":return[t.payload].concat(Object(E.a)(e));default:return e}},g=[],b=Object(n.createContext)(g),y=function(e){var t=e.children,a=Object(n.useReducer)(f,g),o=Object(d.a)(a,2),c=o[0],l=o[1];return console.log(c),r.a.createElement(b.Provider,{value:{deleteTransaction:function(e){l({type:"DELETE_TRANSACTION",payload:e})},addTransaction:function(e){l({type:"ADD_TRANSACTION",payload:e})},transactions:c}},t)},v=["#123123","#154731","#165f40","#16784f","#14915f","#10ac6e","#0bc77e","#04e38d","#00ff9d"],h=["#b50d12","#bf2f1f","#c9452c","#d3583a","#dc6a48","#e57c58","#ee8d68","#f79d79","#ffae8a","#cc474b","#f55b5f"],x=[{type:"Business",amount:0,color:v[0]},{type:"Investments",amount:0,color:v[1]},{type:"Extra income",amount:0,color:v[2]},{type:"Deposits",amount:0,color:v[3]},{type:"Lottery",amount:0,color:v[4]},{type:"Gifts",amount:0,color:v[5]},{type:"Salary",amount:0,color:v[6]},{type:"Savings",amount:0,color:v[7]},{type:"Rental income",amount:0,color:v[8]}],O=[{type:"Bills",amount:0,color:h[0]},{type:"Car",amount:0,color:h[1]},{type:"Clothes",amount:0,color:h[2]},{type:"Travel",amount:0,color:h[3]},{type:"Food",amount:0,color:h[4]},{type:"Shopping",amount:0,color:h[5]},{type:"House",amount:0,color:h[6]},{type:"Entertainment",amount:0,color:h[7]},{type:"Phone",amount:0,color:h[8]},{type:"Pets",amount:0,color:h[9]},{type:"Other",amount:0,color:h[10]}],j=function(e){x.forEach((function(e){return e.amount=0})),O.forEach((function(e){return e.amount=0}));var t=Object(n.useContext)(b).transactions.filter((function(t){return t.type===e})),a=t.reduce((function(e,t){return e+t.amount}),0),r="Income"===e?x:O;t.forEach((function(e){var t=r.find((function(t){return t.type===e.category}));t&&(t.amount+=e.amount)}));var o=r.filter((function(e){return e.amount>0})),c={datasets:[{data:o.map((function(e){return e.amount})),backgroundColor:o.map((function(e){return e.color}))}],labels:o.map((function(e){return e.type}))};return{filteredCategories:o,total:a,chartData:c}},C=a(243),T=Object(C.a)((function(){return{income:{borderBottom:"10px solid rgba(0,255,0,0.7)"},expense:{borderBottom:"10px solid rgba(255,0,0,0.5)"}}})),k=function(e){var t=e.title,a=T(),n=j(t),o=n.total,c=n.chartData;return r.a.createElement(i.a,{className:"Income"===t?a.income:a.expense},r.a.createElement(m.a,{title:t}),r.a.createElement(s.a,null,r.a.createElement(u.a,{variant:"h5"}," ",o," "),r.a.createElement(p.Doughnut,{data:c})))},N=a(30),I=Object(C.a)((function(e){return{colour:{color:"black",background:"linear-gradient(to bottom right, rgba(140,255,0,0.2),rgba(0,122,255,0.3))",border:"none"},desktop:Object(N.a)({},e.breakpoints.up("sm"),{display:"none"}),mobile:Object(N.a)({},e.breakpoints.down("sm"),{display:"none"}),main:Object(N.a)({},e.breakpoints.up("sm"),{paddingBottom:"5%"}),last:Object(N.a)({},e.breakpoints.down("sm"),{marginBottom:e.spacing(3),paddingBottom:"200px"}),grid:{"& > *":{margin:e.spacing(2)}}}})),D=a(264),A=Object(C.a)((function(e){return{media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},cartContent:{paddingTop:0},divider:{margin:"20px 0"}}})),S=a(12),w=a(251),B=a(267),R=a(265),W=a(255),L=a(269),P=a(256),_=a(266),H=Object(C.a)((function(){return{radioGroup:{display:"flex",justifyContent:"center",marginBottom:"-10px"},button:{marginTop:"20px"}}})),F=function(e){var t=new Date(e),a="".concat(t.getMonth()+1),n="".concat(t.getDate()),r=t.getFullYear();return a.length<2&&(a="0".concat(a)),n.length<2&&(n="0".concat(n)),[r,a,n].join("-")},G={amount:" ",category:" ",type:"Income",date:F(new Date)},J=function(){var e=H(),t=Object(n.useState)(G),a=Object(d.a)(t,2),o=a[0],c=a[1],i=Object(n.useContext)(b).addTransaction,m="Income"===o.type?x:O;return r.a.createElement(l.a,{container:!0,spacing:2},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(u.a,{align:"center",variant:"subtitle2",gutterBottom:!0},".......")),r.a.createElement(l.a,{item:!0,xs:6},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(B.a,null," Type"),r.a.createElement(R.a,{value:o.type,onChange:function(e){return c(Object(S.a)(Object(S.a)({},o),{},{type:e.target.value}))}},r.a.createElement(W.a,{value:"Income"}," Income"),r.a.createElement(W.a,{value:"Expense"}," Expense")))),r.a.createElement(l.a,{item:!0,xs:6},r.a.createElement(w.a,{fullWidth:!0},r.a.createElement(B.a,null," Category"),r.a.createElement(R.a,{value:o.category,onChange:function(e){return c(Object(S.a)(Object(S.a)({},o),{},{category:e.target.value}))}},m.map((function(e){return r.a.createElement(W.a,{key:e.type,value:e.type},e.type)}))))),r.a.createElement(l.a,{item:!0,xs:6},r.a.createElement(L.a,{type:"number",label:"Amount",fullWidth:!0,value:o.amount,onChange:function(e){return c(Object(S.a)(Object(S.a)({},o),{},{amount:e.target.value}))}})),r.a.createElement(l.a,{item:!0,xs:6},r.a.createElement(L.a,{type:"date",label:"Date",fullWidth:!0,value:o.date,onChange:function(e){return c(Object(S.a)(Object(S.a)({},o),{},{date:F(e.target.value)}))}})),r.a.createElement(P.a,{className:e.button,variant:"outlined",color:"primary",fullWidth:!0,onClick:function(){var e=Object(S.a)(Object(S.a)({},o),{},{amount:Number(o.amount),id:Object(_.a)()});i(e),c(G)}}," CREATE"))},$=a(254),K=a(257),M=a(210),X=a(258),Y=a(270),q=a(260),z=a(261),Q=a(262),U=a(259),V=a(263),Z=a(58),ee=a(57),te=Object(C.a)((function(e){return{avatarIncome:{color:"#fff",backgroundColor:Z.a[500]},avatarExpense:{color:e.palette.getContrastText(ee.a[500]),backgroundColor:ee.a[500]},list:{maxHeight:"150px",overflow:"auto"}}})),ae=function(){var e=te(),t=Object(n.useContext)(b),a=t.deleteTransaction,o=t.transactions;return r.a.createElement($.a,{dense:"false",className:e.list},o.map((function(t){return r.a.createElement(K.a,{direction:"down",in:!0,mountOnEnter:!0,unmountOnExit:!0,key:t.id},r.a.createElement(M.a,null,r.a.createElement(X.a,null,r.a.createElement(Y.a,{className:"Income"===t.type?e.avatarIncome:e.avatarExpense},r.a.createElement(U.a,null))),r.a.createElement(q.a,{primary:t.category,secondary:"$".concat(t.amount," - ").concat(t.date)}),r.a.createElement(z.a,null,r.a.createElement(Q.a,{edge:"end","aria-label":"delete",onClick:function(){return a(t.id)}},r.a.createElement(V.a,null)))))})))},ne=function(){var e=A();return r.a.createElement(i.a,{className:e.root},r.a.createElement(m.a,{title:"Expense tracker",subheader:"speechly powered app"}),r.a.createElement(s.a,null,r.a.createElement(u.a,{align:"center",variant:"h5"},"Total balance $2000"),r.a.createElement(u.a,{variant:"subtitle1",style:{lineHeight:"1.5em",marginTop:"20px"}},"Say Something"),r.a.createElement(D.a,null),r.a.createElement(J,null)),r.a.createElement(s.a,{className:e.CardContent},r.a.createElement(l.a,{container:!0,spacing:2},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(ae,null)))))};var re=function(){var e=I();return r.a.createElement("div",null,r.a.createElement(l.a,{className:e.grid,container:!0,spacing:0,alignItems:"center",justify:"center",style:{height:"100vh"}},r.a.createElement(l.a,{item:!0,xs:12},r.a.createElement(u.a,{align:"center",variant:"h4",className:e.colour}," EXPENSE TRACKER")),r.a.createElement(l.a,{item:!0,xs:12,sm:3},r.a.createElement(k,{title:"Income"})),r.a.createElement(l.a,{item:!0,xs:12,sm:3},r.a.createElement(ne,null)),r.a.createElement(l.a,{item:!0,xs:12,sm:3},r.a.createElement(k,{title:"Expense"}))))};c.a.render(r.a.createElement(y,null,r.a.createElement(re,null)),document.getElementById("root"))}},[[208,1,2]]]);
//# sourceMappingURL=main.d6cd72db.chunk.js.map