(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{250:function(e,t){},259:function(e,t){},277:function(e,t){},279:function(e,t){},298:function(e,t){},299:function(e,t){},362:function(e,t){},364:function(e,t){},397:function(e,t){},399:function(e,t){},400:function(e,t){},405:function(e,t){},407:function(e,t){},413:function(e,t){},415:function(e,t){},428:function(e,t){},440:function(e,t){},443:function(e,t){},448:function(e,t){},456:function(e,t){},465:function(e,t){},467:function(e,t){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},540:function(e,t,n){"use strict";n.r(t);var c,s,a,i,r,l,o,d,x,j,b,h=n(1),p=n(73),u=n.n(p),g=n(17),m=n.n(g),f=n(45),O=n(47),w=n(14),v=n(62),y=n(74),k=n.n(y),C=n(224),E=n.n(C),A=n(75),N=n(225),S=n(20),T={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(S.a)(Object(S.a)({},T),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(S.a)(Object(S.a)({},T),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(S.a)(Object(S.a)({},e),{},{account:t.payload.account});default:return e}},M={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(S.a)(Object(S.a)({},e),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(S.a)(Object(S.a)({},e),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(S.a)(Object(S.a)({},M),{},{loading:!1,error:!0,errorMsg:t.payload});default:return e}},L=Object(A.b)({blockchain:_,data:R}),D=[N.a],I=Object(A.c)(A.a.apply(void 0,D)),P=Object(A.d)(L,I),U=function(e){return{type:"CHECK_DATA_FAILED",payload:e}},F=function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),e.prev=1,e.next=4,P.getState().blockchain.smartContract.methods.totalSupply().call();case 4:n=e.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:n}}),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),t(U("Could not load data from contract."));case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()},K=function(e){return{type:"CONNECTION_FAILED",payload:e}},H=function(e){return function(){var t=Object(f.a)(m.a.mark((function t(n){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:"UPDATE_ACCOUNT",payload:{account:e}}),n(F());case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},B=n(15),W=B.a.div(c||(c=Object(w.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),Y=(B.a.div(s||(s=Object(w.a)(["\n  height: 100px;\n  justify: center;\n  fontsize: 20px;\n  background-color:blue;\n"]))),B.a.div(a||(a=Object(w.a)(["\n  height: 8px;\n  width: 8px;\n"])))),z=B.a.div(i||(i=Object(w.a)(["\n  height: 16px;\n  width: 16px;\n"]))),G=B.a.div(r||(r=Object(w.a)(["\n  height: 24px;\n  width: 24px;\n"]))),q=B.a.div(l||(l=Object(w.a)(["\n  height: 32px;\n  width: 32px;\n"]))),Q=B.a.div(o||(o=Object(w.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(e){var t=e.flex;return t||0}),(function(e){var t=e.fd;return t||"column"}),(function(e){var t=e.jc;return t||"flex-start"}),(function(e){var t=e.ai;return t||"flex-start"}),(function(e){return e.test?"pink":"none"}),(function(e){var t=e.image;return t?"url(".concat(t,")"):"none"})),J=B.a.p(d||(d=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),X=(B.a.p(x||(x=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),B.a.p(j||(j=Object(w.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),V=(B.a.div(b||(b=Object(w.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),n(46)),Z=n(25),$=n(229);V.b.add($.a,Z.f);var ee=n(545),te=n(0);var ne,ce,se,ae,ie,re,le,oe,de,xe=function(){var e=Object(h.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1];return Object(te.jsx)("div",{children:Object(te.jsxs)("nav",{className:"bg-gray-800",children:[Object(te.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(te.jsxs)("div",{className:"flex items-center justify-between h-16",children:[Object(te.jsxs)("div",{className:"flex items-center",children:[Object(te.jsx)("div",{className:"flex-shrink-0",children:Object(te.jsx)("img",{className:"h-8 w-18",src:"./config/images/Logo.png",alt:"Workflow"})}),Object(te.jsx)("div",{className:"hidden md:block",children:Object(te.jsxs)("div",{className:"ml-10 flex items-baseline space-x-4",children:[Object(te.jsx)("a",{class:" text-sm font-bold leading-relaxed inline-block pb-5 whitespace-nowrap uppercase text-white ",href:"https://twitter.com/Ratpackmafia",children:Object(te.jsx)("img",{alt:"Twitter",src:"/config/images/twitter.png",class:"mt-4",style:{width:50,height:50}})}),Object(te.jsx)("a",{href:"https://discord.gg/5V38qceDjA",class:" text-sm font-bold leading-relaxed inline-block pb-5 whitespace-nowrap uppercase text-white ",children:Object(te.jsx)("img",{alt:"Discord",src:"/config/images/discord.png",class:"mt-4",style:{width:45,height:45}})})]})})]}),Object(te.jsx)("div",{className:"-mr-2 flex md:hidden",children:Object(te.jsxs)("button",{onClick:function(){return c(!n)},type:"button",className:"bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[Object(te.jsx)("span",{className:"sr-only",children:"Open main menu"}),n?Object(te.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(te.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):Object(te.jsx)("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:Object(te.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),Object(te.jsx)(ee.a,{show:n,enter:"transition ease-out duration-100 transform",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75 transform",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:function(e){return Object(te.jsx)("div",{className:"md:hidden",id:"mobile-menu",children:Object(te.jsxs)("div",{ref:e,className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[Object(te.jsx)("a",{href:"#",className:"hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(te.jsx)("img",{alt:"Discord",src:"/config/images/discord.png",class:"mt-4",style:{width:45,height:45}})}),Object(te.jsx)("a",{href:"#",className:"text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium",children:Object(te.jsx)("img",{alt:"Twitter",src:"/config/images/twitter.png",class:"mt-4",style:{width:50,height:50}})})]})})}})]})})},je=n(63),be=B.a.button(ne||(ne=Object(w.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),he=B.a.button(ce||(ce=Object(w.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),pe=(B.a.div(se||(se=Object(w.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),B.a.img(ae||(ae=Object(w.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),B.a.img(ie||(ie=Object(w.a)(["\n  width: 40px;\n  height:40px;\n  margin-top:20px;\n  text-align:right !important;\n  @media (min-width: 767px) {\n    width: 50px;\n    height:50px;\n    margin-top:20px;\n    text-align:right !important;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),B.a.img(re||(re=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px solid black;\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),B.a.img(le||(le=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 14px solid black;\n  background-color: var(--accent);\n  border-radius: 8%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),B.a.a(oe||(oe=Object(w.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));B.a.img(de||(de=Object(w.a)(["\n  box-shadow: 0px 5px 11px 2px rgba(0, 0, 0, 0.7);\n  border: 4px dashed var(--secondary);\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"])));var ue=function(){var e,t,n=Object(v.b)(),c=Object(v.c)((function(e){return e.blockchain})),s=Object(v.c)((function(e){return e.data})),a=Object(h.useState)(!1),i=Object(O.a)(a,2),r=i[0],l=i[1],o=Object(h.useState)("Click buy to mint your NFT."),d=Object(O.a)(o,2),x=d[0],j=d[1],b=Object(h.useState)(1),p=Object(O.a)(b,2),u=p[0],g=p[1],w=Object(h.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:2022,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),y=Object(O.a)(w,2),C=y[0],A=y[1],N=function(){""!==c.account&&null!==c.smartContract&&n(F(c.account))},S=function(){var e=Object(f.a)(m.a.mark((function e(){var t,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,A(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){S()}),[]),Object(h.useEffect)((function(){N()}),[c.account]),Object(te.jsxs)(W,{children:[Object(te.jsx)(xe,{}),Object(te.jsxs)("div",{class:" relative pt-20 pb-32 flex content-center items-center justify-center ",style:{"min-height":"85vh"},children:[Object(te.jsxs)("div",{id:"bgimage",class:"absolute top-0 w-full h-full bg-left bg-cover",children:[Object(te.jsx)("div",{class:"bgimagetop",children:Object(te.jsx)("img",{src:"/config/images/family_pic_top1.png",class:""})}),Object(te.jsx)("div",{class:"bgimagebot",children:Object(te.jsx)("img",{src:"/config/images/family_pic_bottom1.png",class:""})})]}),Object(te.jsx)("div",{class:"container relative mx-auto",children:Object(te.jsx)("div",{class:"items-center flex flex-wrap sm:ml-0 md:ml-80",children:Object(te.jsx)("div",{class:" w-full lg:w-4/5 px-4 ml-auto mr-auto justify-center text-center ",children:Object(te.jsxs)("div",{class:"  rounded-md sm:bg-transparent",children:[Object(te.jsx)("h1",{class:" RPM-headline text-4xl md:text-5xl text-white font-semibold ",children:Object(te.jsx)("img",{src:"./config/images/Logo.png",class:"h-15"})}),Object(te.jsx)("p",{class:"RPM-sub mt-4 text-black",children:Object(te.jsx)("div",{children:Object(te.jsxs)("div",{style:{backgroundColor:"rgba(0,0,0,0.8)",padding:2,borderRadius:24,border:"4px solid black",boxShadow:"0px 5px 11px 2px rgba(0,0,0,0.7)"},children:[Object(te.jsxs)("h1",{class:"xs:text-sm lg:text-4xl text-white",children:[s.totalSupply," / ",C.MAX_SUPPLY]}),Object(te.jsx)(X,{style:{textAlign:"center",color:"var(--primary-text)"}}),Object(te.jsx)(z,{}),Number(s.totalSupply)>=C.MAX_SUPPLY?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(J,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(te.jsxs)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",C.NFT_NAME," on"]}),Object(te.jsx)(z,{}),Object(te.jsx)(pe,{target:"_blank",href:C.MARKETPLACE_LINK,children:C.MARKETPLACE})]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsxs)(J,{style:{textAlign:"center",color:"var(--accent-text)"},children:["1 Rat will cost ",C.DISPLAY_COST," ",C.NETWORK.SYMBOL,"."]}),Object(te.jsx)(Y,{}),Object(te.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(te.jsx)(z,{}),""===c.account||null===c.smartContract?Object(te.jsxs)(Q,{ai:"center",jc:"center",children:[Object(te.jsxs)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Comming soon to the ",C.NETWORK.NAME," network"]}),Object(te.jsx)(z,{}),Object(te.jsx)(be,{onClick:function(e){e.preventDefault(),n(function(){var e=Object(f.a)(m.a.mark((function e(t){var n,c,s,a,i,r,l,o,d;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"CONNECTION_REQUEST"}),e.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return c=e.sent,e.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return s=e.sent,e.next=12,s.json();case 12:if(a=e.sent,i=window,!(r=i.ethereum)||!r.isMetaMask){e.next=33;break}return k.a.setProvider(r),l=new E.a(r),e.prev=18,e.next=21,r.request({method:"eth_requestAccounts"});case 21:return o=e.sent,e.next=24,r.request({method:"net_version"});case 24:e.sent==a.NETWORK.ID?(d=new k.a(c,a.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:o[0],smartContract:d,web3:l}}),r.on("accountsChanged",(function(e){t(H(e[0]))})),r.on("chainChanged",(function(){window.location.reload()}))):t(K("Change network to ".concat(a.NETWORK.NAME,"."))),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(18),t(K("Something went wrong."));case 31:e.next=34;break;case 33:t(K("Install Metamask."));case 34:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}()),N()},children:"CONNECT"}),Object(te.jsx)(q,{}),Object(te.jsx)(pe,{target:"_blank",href:C.SCAN_LINK,children:(e=C.CONTRACT_ADDRESS,t=15,e.length>t?"".concat(e.substring(0,t),"..."):e)}),""!==c.errorMsg?Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(z,{}),Object(te.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:c.errorMsg})]}):null]}):Object(te.jsxs)(te.Fragment,{children:[Object(te.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:x}),Object(te.jsx)(G,{}),Object(te.jsxs)(Q,{ai:"center",jc:"center",fd:"row",children:[Object(te.jsx)(he,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=u-1;e<1&&(e=1),g(e)}()},children:"-"}),Object(te.jsx)(G,{}),Object(te.jsx)(X,{style:{textAlign:"center",color:"var(--accent-text)"},children:u}),Object(te.jsx)(G,{}),Object(te.jsx)(he,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=u+1;e>10&&(e=10),g(e)}()},children:"+"})]}),Object(te.jsx)(z,{}),Object(te.jsx)(Q,{ai:"center",jc:"center",fd:"row",children:Object(te.jsx)(be,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=C.WEI_COST,t=C.GAS_LIMIT,s=String(e*u),a=String(t*u);console.log("Cost: ",s),console.log("Gas limit: ",a),j("Minting your ".concat(C.NFT_NAME,"...")),l(!0),c.smartContract.methods.mint(u).send({gasLimit:String(a),to:C.CONTRACT_ADDRESS,from:c.account,value:s}).once("error",(function(e){console.log(e),j("Sorry, something went wrong please try again later."),l(!1)})).then((function(e){console.log(e),j("WOW, the ".concat(C.NFT_NAME," is yours! go visit NFTKEY.app to view it.")),l(!1),n(F(c.account))}))}(),N()},children:r?"BUSY":"BUY"})})]})]})]})})})]})})})})]}),Object(te.jsx)("section",{class:"pt-20 pb-20 bg-gray-700 -mt-0",children:Object(te.jsxs)("div",{class:"container mx-auto px-2",children:[Object(te.jsxs)("div",{class:"flex flex-wrap",children:[Object(te.jsx)("div",{class:"lg:pt-12 pt-6 w-full md:w-4/12 px-6 text-center",children:Object(te.jsx)("div",{class:" relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg ",children:Object(te.jsx)("div",{class:"px-4 py-5 flex-auto",children:Object(te.jsx)("p",{class:"mt-2 mb-4 text-gray-600",children:Object(te.jsx)("img",{src:"/config/images/1.jpg",class:"w-full"})})})})}),Object(te.jsx)("div",{class:"w-full md:w-4/12 px-6 text-center ",children:Object(te.jsx)("div",{class:" relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg ",children:Object(te.jsx)("div",{class:"px-4 py-5 flex-auto",children:Object(te.jsx)("p",{class:"mt-2 mb-4 text-gray-600",children:Object(te.jsx)("img",{src:"/config/images/2.jpg",class:"w-full"})})})})}),Object(te.jsx)("div",{class:"lg:pt-12 pt-6 w-full md:w-4/12 px-6 mx-0 text-center",children:Object(te.jsx)("div",{class:" relative flex flex-col min-w-0 break-words bg-black w-full mb-8 shadow-lg rounded-lg ",children:Object(te.jsx)("div",{class:"px-4 py-5 flex-auto",children:Object(te.jsx)("p",{class:"mt-2 mb-4 text-gray-600",children:Object(te.jsx)("img",{src:"/config/images/3.jpg",class:"w-full"})})})})})]}),Object(te.jsxs)("div",{class:"flex flex-wrap items-center mt-32",children:[Object(te.jsxs)("div",{class:"w-full md:w-5/12 px-4 mr-auto ml-auto",children:[Object(te.jsx)("div",{class:" text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100 ",children:Object(te.jsx)(je.a,{icon:Z.e})}),Object(te.jsx)("h3",{class:"text-3xl text-gray-200 mb-2 font-semibold leading-normal",children:"About"}),Object(te.jsx)("p",{class:"text-lg font-light leading-relaxed mt-4 mb-4 text-gray-200",children:"Rat Pack Mafia is a Family of Rats carving out a place in the world, fighting their way to the top."})]}),Object(te.jsx)("div",{class:"w-full md:w-4/12 px-4 mr-auto ml-auto",children:Object(te.jsxs)("div",{class:" relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg bg-pink-600 ",children:[Object(te.jsx)("img",{alt:"...",src:"/config/images/rats.gif",class:"w-full align-middle rounded-t-lg"}),Object(te.jsxs)("blockquote",{class:"relative p-8 mb-4",children:[Object(te.jsx)("svg",{preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 583 95",class:"absolute left-0 w-full block",style:{height:95,top:"-94"},children:Object(te.jsx)("polygon",{points:"-30,95 583,95 583,65",class:"text-pink-600 fill-current"})}),Object(te.jsx)("h3",{class:"text-center text-4xl font-bold text-white",children:"Soon...."}),Object(te.jsx)("p",{class:"text-md  font-light mt-2 text-white"})]})]})})]})]})}),Object(te.jsxs)("section",{class:"relative py-20",children:[Object(te.jsx)("div",{class:" bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden bg-gray-700 -mt-20 ",style:{height:80},children:Object(te.jsx)("svg",{class:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(te.jsx)("polygon",{class:"text-black fill-current",points:"2560 0 2560 100 0 100"})})}),Object(te.jsx)("div",{class:"container mx-auto px-4",children:Object(te.jsxs)("div",{class:"items-center flex flex-wrap",children:[Object(te.jsx)("div",{class:"w-full md:w-4/12 ml-auto mr-auto px-4",children:Object(te.jsx)("img",{alt:"...",class:"max-w-full rounded-lg shadow-lg",src:"/config/images/4.jpg"})}),Object(te.jsxs)("div",{class:"w-full md:w-5/12 ml-auto mr-auto px-4",children:[Object(te.jsxs)("div",{class:"md:pr-12",children:[Object(te.jsxs)("div",{class:" mt-6 md:mt-0 text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300 ",children:[Object(te.jsx)("i",{class:"fas fa-rocket text-xl"}),Object(te.jsx)(je.a,{icon:Z.d})]}),Object(te.jsx)("h3",{class:"text-gray-400 text-3xl font-semibold",children:"Minting Soon"}),Object(te.jsx)("p",{class:"mt-4 text-lg leading-relaxed text-gray-200",children:"Every Rat in the Pack Mafia is hand crafted with in blender3D to have different levels of rarity and features. There are only 3000 available so get them before they are gone! And at 20 FTM each it's surely an offer you cannot refuse! Rat Pack mafia, when youre here, you're Family!"}),Object(te.jsxs)("ul",{class:"list-none mt-6",children:[Object(te.jsx)("li",{class:"py-2",children:Object(te.jsxs)("div",{class:"flex items-center",children:[Object(te.jsx)("div",{children:Object(te.jsxs)("span",{class:" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3 ",children:[Object(te.jsx)(je.a,{icon:Z.c}),Object(te.jsx)("i",{class:"fas fa-flag-checkered"})]})}),Object(te.jsx)("div",{children:Object(te.jsx)("h4",{class:"text-gray-200",children:"Meticulously crafted attributes"})})]})}),Object(te.jsx)("li",{class:"py-2",children:Object(te.jsxs)("div",{class:"flex items-center",children:[Object(te.jsx)("div",{children:Object(te.jsxs)("span",{class:" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3 ",children:[Object(te.jsx)(je.a,{icon:Z.a}),Object(te.jsx)("i",{class:"fas fa-cheese"})]})}),Object(te.jsx)("div",{children:Object(te.jsx)("h4",{class:"text-gray-200",children:"Stupendously cheesy Rats"})})]})}),Object(te.jsx)("li",{class:"py-2",children:Object(te.jsxs)("div",{class:"flex items-center",children:[Object(te.jsx)("div",{children:Object(te.jsx)("span",{class:" text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3 ",children:Object(te.jsx)(je.a,{icon:Z.b})})}),Object(te.jsx)("div",{children:Object(te.jsx)("h4",{class:"text-gray-200",children:"Dynamicaly generated with no duplicates"})})]})})]})]}),Object(te.jsx)("p",{class:"mt-12 text-lg leading-relaxed text-gray-200",children:"These rats won't steal your cheese... or will they???"})]})]})})]}),Object(te.jsx)("section",{class:"pt-20 pb-48",children:Object(te.jsxs)("div",{class:"container mx-auto px-4",children:[Object(te.jsx)("div",{class:"flex flex-wrap justify-center text-center mb-24",children:Object(te.jsx)("div",{class:"w-full lg:w-6/12 px-4",children:Object(te.jsx)("h2",{class:"text-gray-400 text-4xl font-semibold",children:"Testimonials..."})})}),Object(te.jsxs)("div",{class:"flex flex-wrap",children:[Object(te.jsx)("div",{class:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:Object(te.jsxs)("div",{class:"px-6",children:[Object(te.jsx)("img",{alt:"...",src:"/config/images/5.jpg",class:"shadow-lg rounded-full max-w-full mx-auto",style:{"max-width":120}}),Object(te.jsxs)("div",{class:"pt-6 text-center",children:[Object(te.jsx)("h5",{class:"text-xl font-bold text-gray-400",children:"Michael Ratleon"}),Object(te.jsx)("p",{class:"mt-1 text-sm text-gray-200 uppercase font-semibold",children:"KEEP YOUR FRIENDS CLOSE, BUT YOUR CHEESE CLOSER."}),Object(te.jsx)("div",{class:"mt-6"})]})]})}),Object(te.jsx)("div",{class:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:Object(te.jsxs)("div",{class:"px-6",children:[Object(te.jsx)("img",{alt:"...",src:"/config/images/6.jpg",class:"shadow-lg rounded-full max-w-full mx-auto",style:{"max-width":120}}),Object(te.jsxs)("div",{class:"pt-6 text-center",children:[Object(te.jsx)("h5",{class:"text-xl font-bold text-gray-400",children:"Peter Ratenza"}),Object(te.jsx)("p",{class:"mt-1 text-sm text-gray-200 uppercase font-semibold",children:"LEAVE THE GUN, TAKE THE CHEESE"}),Object(te.jsx)("div",{class:"mt-6"})]})]})}),Object(te.jsx)("div",{class:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:Object(te.jsxs)("div",{class:"px-6",children:[Object(te.jsx)("img",{alt:"...",src:"/config/images/7.jpg",class:"shadow-lg rounded-full max-w-full mx-auto",style:{"max-width":120}}),Object(te.jsxs)("div",{class:"pt-6 text-center",children:[Object(te.jsx)("h5",{class:"text-xl font-bold text-gray-400",children:"Michael Ratleon"}),Object(te.jsx)("p",{class:"mt-1 text-sm text-gray-200 uppercase font-semibold",children:"JUST WHEN I THOUGHT I WAS OUT, THE CHEESE PULLs ME BACK IN"}),Object(te.jsx)("div",{class:"mt-6"})]})]})}),Object(te.jsx)("div",{class:"w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4",children:Object(te.jsxs)("div",{class:"px-6",children:[Object(te.jsx)("img",{alt:"...",src:"/config/images/8.jpg",class:"shadow-lg rounded-full max-w-full mx-auto",style:{"max-width":120}}),Object(te.jsxs)("div",{class:"pt-6 text-center",children:[Object(te.jsx)("h5",{class:"text-xl font-bold text-gray-400",children:"Rattie Brasco"}),Object(te.jsx)("p",{class:"mt-1 text-sm text-gray-200 uppercase font-semibold",children:"Forget About it!"}),Object(te.jsx)("div",{class:"mt-6"})]})]})})]})]})}),Object(te.jsxs)("footer",{class:"relative bg-gray-700 pt-8 pb-6",children:[Object(te.jsx)("div",{class:" bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 ",style:{height:80},children:Object(te.jsx)("svg",{class:"absolute bottom-0 overflow-hidden",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",version:"1.1",viewBox:"0 0 2560 100",x:"0",y:"0",children:Object(te.jsx)("polygon",{class:"text-gray-700 fill-current",points:"2560 0 2560 100 0 100"})})}),Object(te.jsx)("div",{class:"container mx-auto px-4",children:Object(te.jsx)("div",{class:"flex flex-wrap items-center md:justify-between justify-center",children:Object(te.jsx)("div",{class:"w-full md:w-4/12 px-4 mx-auto text-center",children:Object(te.jsxs)("div",{class:"text-sm text-gray-200 font-semibold py-1",children:["Copyright \xa9 2021",Object(te.jsx)("a",{href:"https://twitter.com/zombiestiltskin",class:"text-gray-200 hover:text-gray-900",children:"Rat Pack Mafia"}),"."]})})})})]})]})},ge=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,546)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),s(e),a(e),i(e)}))};n(537),n(538),n(539);u.a.render(Object(te.jsx)(v.a,{store:P,children:Object(te.jsx)(ue,{})}),document.getElementById("root")),ge()}},[[540,1,2]]]);
//# sourceMappingURL=main.caa53419.chunk.js.map