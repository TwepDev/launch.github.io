(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2835],{85977:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/sender",function(){return a(93204)}])},93204:function(e,s,a){"use strict";a.r(s);var t=a(85893),l=a(79801),r=a(67294),n=a(37918),c=a.n(n),i=a(11163),d=a(50450),o=a(40146),m=a(14783),h=a(55678);s.default=function(e){let{p:s}=e;const{address:a,userProfile:n,BlurAddress:x,BlurBalance:u,blockURL:p,chain:j,bn:b,extractErrorCode:v,handleChain:y,connected:N,balance:f,rpcURL:g,thisWeb3:w,pContract:k}=s,[S,A]=((0,i.useRouter)().query.chain,(0,r.useState)(!1)),[_,C]=(0,r.useState)(),[T,E]=(0,r.useState)("0x0000000000000000000000000000000000000000"),[P,O]=(0,r.useState)(" "),[B,L]=(0,r.useState)(null),[R,F]=(0,r.useState)(null),[H,M]=(0,r.useState)(0),[V,X]=(0,r.useState)(!0),[q,I]=(0,r.useState)(),[U,W]=(0,r.useState)([]),[Z,D]=(0,r.useState)([]),[G,z]=(0,r.useState)([]),[J,K]=(0,r.useState)(),[Q,Y]=(0,r.useState)(),[$,ee]=(0,r.useState)(!1);async function se(e){const s=new(c());I(e);let a={},t=[];const l=e.split("\n"),r=[];let n=0;const i=[],d=[];let o=0;l.map(((e,t)=>{let l=!1;const n=e.split(" ");s.utils.isAddress(n[0])&&2==n.length&&!isNaN(Number(n[1]))&&""!=n[1]&&(r.push(n[0]),i.push(Number(n[1])),d.push(n[1]),l=!0),""==e&&(l=!0),a[t]={address:e,isValid:l}})),i.map((e=>{o+=e})),r.map((e=>{n++})),W(r),D(d),Y(n),K(o),Object.keys(a).map((e=>{a[e].isValid||t.push(+e+1)})),z(e?t:[])}(0,r.useEffect)((()=>{}),[g,a]);const[ae,te]=(0,r.useState)("");return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(l.Z,{headTitle:"WeLaunch - Lock Token",pageTitle:"",pageTitleSub:"Lock your Token",pageclassName:"admin",parent:"Create Project",child:"",p:s,children:(0,t.jsxs)("div",{className:"row",style:{paddingTop:"20px"},children:[(0,t.jsxs)("div",{className:"col-xxl-8 col-xl-8 col-lg-8",children:[(0,t.jsx)("h4",{className:"card-title mb-2",children:"Multi Sender"}),(0,t.jsx)("div",{className:"card border-0",children:(0,t.jsxs)("div",{className:"card-body",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsxs)("label",{className:"form-label",children:["Type",(0,t.jsxs)("span",{className:"ms-1 asterisk",children:["0.1 ",y("symbol")]})]}),(0,t.jsxs)(d.OB,{className:"option",children:[(0,t.jsx)(d.Z_,{className:"px-3 w-100 presale-select rounded",tag:"label",children:(0,t.jsxs)("div",{className:"d-flex justify-content-between",children:[(0,t.jsxs)("div",{className:"option",children:[0==H&&y("symbol"),1==H&&"Token"]}),(0,t.jsx)("div",{className:"dropdown-arrow pe-2",children:(0,t.jsx)("i",{className:"ri-arrow-drop-down-fill"})})]})}),(0,t.jsxs)(d.h_,{className:"w-100 rounded presale-dropdown",children:[(0,t.jsx)(d.hP,{className:0==H?"item active":"item",onClick:()=>M(0),children:y("symbol")}),(0,t.jsx)(d.hP,{className:1==H?"item active":"item",onClick:()=>M(1),children:"Token"})]})]})]})}),(0,t.jsxs)("div",{className:"row mt-3",children:[1==H&&(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsxs)("label",{className:"form-label",children:["Contract Address",(0,t.jsx)("span",{className:"asterisk",children:"*"})," ",(0,t.jsx)("span",{className:"info",children:(0,t.jsx)("i",{className:"ri-information-fill"})})]}),(0,t.jsx)("input",{type:"text",id:"name1",autoComplete:"nope",className:"px-3 py-2 normal-input rounded w-100 ",value:" "!=T?T:"",onChange:e=>async function(s){E(s),ee(!1);const t=new(c())(w);if(!t.utils.isAddress(s))return X(!1),C(""),!1;{const l=new t.eth.Contract(m.IERC20,s);try{const e=await l.methods.name().call(),s=await l.methods.decimals().call(),t=await l.methods.totalSupply().call(),r=await l.methods.symbol().call();return await l.methods.allowance(a,k[j].tokenSender).call()>+b("115792089237316195423570985008687907853269984665640564039457584007913129639")&&ee(!0),X(!0),C(e),L(s),F(t/10**s),O(r),!0}catch(e){return X(!1),ee(!1),C(""),L(""),F(""),O(""),!1}}}(e.target.value)}),!V&&" "!=T&&""!=T&&(0,t.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:"Contract not valid!"})," "!=T&&""==T&&(0,t.jsxs)("div",{className:"invalid-feedback",style:{display:"block"},children:[o[s.lang].Params[1]," ",o[s.lang].Params[5]]})]}),(0,t.jsxs)("div",{className:"col-12",children:[(0,t.jsxs)("label",{className:"form-label",children:["Allocations",(0,t.jsx)("span",{className:"asterisk",children:"*"})," ",(0,t.jsx)("span",{className:"info",children:(0,t.jsx)("i",{className:"ri-information-fill"})})]}),(0,t.jsx)("textarea",{type:"text",style:{padding:"20px",color:"#fff",height:"150px"},className:"w-100 px-3 py-2 normal-input rounded",placeholder:"Format : Address (space) Value\nExample:\n0x0000000000000000000000000000000000000001 1\n0x0000000000000000000000000000000000000001 3",value:q,onChange:e=>se(e.target.value)}),q&&""==q&&(0,t.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:"Recipients allocation is required"}),q&&""!=q&&G?(0,t.jsx)("div",{className:"invalid-feedback",style:{display:"block"},children:G.length&&""!=G[0]?"Address invalid on line "+G.join(", "):""}):""]}),(0,t.jsx)("div",{className:"col-12",children:(0,t.jsxs)("label",{children:[(0,t.jsx)("input",{name:"a",hidden:!0,type:"file",onChange:e=>async function(e){try{(new FileReader).onload=function(e){const s=e.target.result;try{const e=(e=>{const s=e.slice(0,e.indexOf("\n")).split(",");return e.slice(e.indexOf("\n")+1).split("\n").map((e=>{const a=e.split(",");return s.reduce(((e,s,t)=>(e[s]=a[t],e)),{})}))})(s),a=[];for(let s=0;s<e.length;s++){const t=Object.keys(e[s])[0];let l=t;t.includes(";")&&(l=t.replace(";"," ")),a.push(l)}se(a.join("\n"))}catch(a){}}}catch(s){}}(),accept:".csv,.txt"}),(0,t.jsx)("div",{className:"btn x-btn mr-2 w-100",children:"Or upload csv / txt"})]})}),(0,t.jsx)("div",{className:"d-flex justify-content-center pt-5",children:(0,t.jsx)("button",{type:"submit",className:"btn x-btn mr-2 w-50",onClick:()=>async function(){if(0==G.length&&0==q.length)return;const e=w,s=[];let t=0;const l=0==H;if(l||$)try{let r=+b(10).exponentiatedBy(18);1==H&&(r=+b(10).exponentiatedBy(B));for(let e=0;e<Z.length;e++)s.push((+b(Z[e]).multipliedBy(r)).toLocaleString("fullwide",{useGrouping:!1})),t+=Number(s[e]);const n=new e.eth.Contract(m.multiSenderAbi,k[j].tokenSender);n.methods.SendMultiETH(T,U,s,l).call({from:a,value:l?t:0}).then((()=>{n.methods.SendMultiETH(T,U,s,l).send({from:a,value:l?t:0}).then((e=>{(0,h.Am)("Success"),te(e.transactionHash)})).catch((e=>{try{h.Am.error(v(e))}catch(s){try{h.Am.error(e.message)}catch(a){h.Am.error("Something Error!")}}}))})).catch((e=>{try{h.Am.error(v(e))}catch(s){try{h.Am.error(e.message)}catch(a){h.Am.error("Something Error!")}}}))}catch(r){try{h.Am.error(v(r))}catch(n){try{h.Am.error(r.message)}catch(c){h.Am.error("Something Error!")}}}else new e.eth.Contract(m.IERC20,T).methods.approve(k[j].tokenSender,"115792089237316195423570985008687907853269984665640564039457584007913129639935").send({from:a}).then((()=>{(0,h.Am)("Success"),ee(!0)})).catch((e=>{try{h.Am.error(v(e))}catch(n){try{h.Am.error(e.message)}catch(c){h.Am.error("Something Error!")}}}))}(),children:"0x0000000000000000000000000000000000000000"==H||$?"Send":"Approve"})}),ae?(0,t.jsx)("div",{className:"mt-3 text-center",children:(0,t.jsx)("a",{href:"".concat(p,"tx/").concat(ae),target:"_blank",children:"view TX"})}):""]})]})})]}),(0,t.jsxs)("div",{className:"col-xxl-4 col-xl-4 col-lg-6",children:[(0,t.jsx)("h4",{className:"card-title mb-2 vis-n",children:"Preview"}),(0,t.jsx)("div",{className:"card items border-0",children:(0,t.jsx)("div",{className:"card-body",children:(0,t.jsxs)("div",{className:"infos_i",children:[(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Type"}),(0,t.jsxs)("div",{className:"val right-presalerate",children:[0==H&&y("symbol"),1==H&&"Token"]})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Total Sent"}),(0,t.jsx)("div",{className:"val right-presalerate",children:J?"".concat(J.toFixed(2)," ").concat(0==H?y("symbol"):P):"-"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Total Allocation"}),(0,t.jsx)("div",{className:"val right-presalerate",children:Q?"".concat(Q):"-"})]}),1==H&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Name"}),(0,t.jsx)("div",{className:"val right-presalerate",children:_||"-"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Symbol"}),(0,t.jsx)("div",{className:"val right-presalerate",children:P||"-"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Decimal"}),(0,t.jsx)("div",{className:"val right-presalerate",children:B||"-"})]}),(0,t.jsxs)("div",{className:"d-flex align-items-center justify-content-between border-bottom_grey border-dark-100 py-2",children:[(0,t.jsx)("div",{children:"Total Supply"}),(0,t.jsx)("div",{className:"val right-presalerate",children:R?"".concat(R.toLocaleString()," ").concat(P):"-"})]})]})]})})})]})]})})})}}},function(e){e.O(0,[5445,8543,260,1664,3496,9801,9774,2888,179],(function(){return s=85977,e(e.s=s);var s}));var s=e.O();_N_E=s}]);