(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405,6,256],{8312:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(9035)}])},792:function(e,s,t){"use strict";var l=t(7294);let r=()=>{let[e,s]=(0,l.useState)(),[t,r]=(0,l.useState)(),[a,n]=(0,l.useState)();return(0,l.useEffect)(()=>{let e=JSON.parse(localStorage.getItem("settings"));if(null==e){localStorage.setItem("settings",JSON.stringify({proxy:"uv",cloak:"none",engine:"https://www.google.com/search?q="}));let e=JSON.parse(localStorage.getItem("settings"));s(e.proxy),r(e.cloak),n(e.engine)}else{let e=JSON.parse(localStorage.getItem("settings"));s(e.proxy),r(e.cloak),n(e.engine)}},[]),[e,t,a]};s.Z=r},1256:function(e,s,t){"use strict";t.r(s);var l=t(5893),r=t(6479),a=t(7294),n=t(9583),o=t(1163),i=t.n(o),c=t(9302),d=t(792),h=t(2683);let x=()=>{let[e,s]=(0,a.useState)(),t=(0,a.useRef)(null),[o,x,u]=(0,d.Z)(),p=(0,r.pm)(),m=()=>{if(""===t.current.value)return p({position:"bottom-right",title:"Oops",description:"Looks like you forgot to provide a non-empty value",status:"error",duration:2e3,isClosable:!0});let e=t.current.value;console.log(e),(0,c.Z)(e)?e.startsWith("https://")||e.startsWith("http://")||(e="http://"+e):e="https://search.brave.com/search?q="+e,console.log(e),console.log(e=h.Z.encode(e)),i().push({pathname:"/service",query:{s:e}})};return(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"relative h-10 w-[25rem] rounded-md border-[1px] border-[#e2e8f0] bg-transparent hover:cursor-text",onClick:()=>{var e;return null===(e=t.current)||void 0===e?void 0:e.focus()},children:(0,l.jsxs)("div",{className:"-ml-2 flex h-full w-full flex-row items-center justify-center space-x-3",children:[(0,l.jsx)(n.U41,{className:"text-lg text-primary-100"}),(0,l.jsx)("input",{type:"text",className:"ml-2 h-full w-10/12 bg-transparent text-primary-100 outline-none",placeholder:"Search",ref:t,value:e,onChange:e=>s(e.target.value),onKeyDown:e=>{"Enter"===e.key&&m()}})]})})})};s.default=x},8006:function(e,s,t){"use strict";t.r(s);var l=t(5893),r=t(7294),a=t(5675),n=t.n(a),o=t(639),i=t(5610),c=t(1297),d=t(7741),h=t(8193),x=t(3750),u=t(5434),p=t(5152),m=t.n(p),j=t(1163);let f=m()(()=>Promise.all([t.e(445),t.e(256)]).then(t.bind(t,1256)),{loadableGenerated:{webpack:()=>[1256]},suspense:!0}),g=()=>{let e=(0,j.useRouter)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"flex relative top-0 bg-primary-400 h-16 w-full rounded-b-lg justify-center items-center md:hidden",children:(0,l.jsxs)("div",{className:"flex items-center m-2 w-full h-full justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center flex-row space-x-6",children:[(0,l.jsx)(n(),{src:"/images/emerald.png",alt:"emerald",width:50,height:50,className:"m-5"}),(0,l.jsx)(o.xv,{fontSize:"3xl",className:"flex text-primary-100",children:"Emerald"})]}),(0,l.jsx)(r.Suspense,{fallback:(0,l.jsx)(i.$,{}),children:(0,l.jsx)(f,{})}),(0,l.jsxs)("div",{className:"space-x-3 flex flex-row mr-5",children:[(0,l.jsx)(c.u,{hasArrow:!0,label:"Soon",bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)(d.hU,{"aria-label":"Reload page",colorScheme:"base",textColor:"base.400",fontSize:"2xl",icon:(0,l.jsx)(x.flH,{})})}),(0,l.jsx)(c.u,{hasArrow:!0,label:"Soon",bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)(d.hU,{"aria-label":"Open a chrome like devtool menu",colorScheme:"base",textColor:"base.400",fontSize:"2xl",icon:(0,l.jsx)(h.ngy,{})})}),(0,l.jsx)(c.u,{hasArrow:!0,label:"Soon",bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)(d.hU,{"aria-label":"Reload page",colorScheme:"base",textColor:"base.400",fontSize:"2xl",icon:(0,l.jsx)(h.Em2,{})})}),(0,l.jsx)(c.u,{hasArrow:!0,label:"Exit",bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)(d.hU,{"aria-label":"Exit",colorScheme:"base",fontSize:"2xl",icon:(0,l.jsx)(u.IUz,{}),onClick:()=>{e.push("/")}})})]})]})})})};s.default=g},9302:function(e,s){"use strict";s.Z=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return!!(/^http(s?):\/\//.test(e)||e.includes(".")&&" "!==e.substr(0,1))}},2683:function(e,s){"use strict";s.Z=class{static encode(e){return encodeURIComponent(e.toString().split("").map((e,s)=>s%2?String.fromCharCode(2^e.charCodeAt(0)):e).join(""))}static decode(e){return"/"==e.charAt(e.length-1)&&(e=e.slice(0,-1)),decodeURIComponent(e).split("").map((e,s)=>s%2?String.fromCharCode(2^e.charCodeAt(0)):e).join("")}}},9035:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return _}});var l=t(5893),r=t(9008),a=t.n(r),n=t(1256),o=t(7294);t(792);var i=t(5675),c=t.n(i),d=t(9653),h=t(639),x=t(7741),u=t(6479),p=t(1297),m=t(982),j=t(7498),f=t(489),g=t(5814),b=t(9583),v=t(3750),w=t(1649),y=t(8193),S=t(2585),N=t(9302),C=t(2683);let k=(e,s)=>{(0,o.useEffect)(()=>{"serviceWorker"in navigator&&navigator.serviceWorker.register(e,{scope:s}).then(function(s){console.log("[sw] ".concat(e," successfuly registered with a scope of ").concat(s.scope))},function(s){console.log("%c[sw] ".concat(e," failed to register, error: "),"color:red;",s)})},[e,s])},E=()=>{let[e,s]=(0,o.useState)();(0,o.useEffect)(()=>{{let e=localStorage.getItem("apps");e||(localStorage.setItem("apps",JSON.stringify([])),s([])),s(JSON.parse(e))}},[]);let t=e=>{try{let s=localStorage.getItem("apps"),t=s?JSON.parse(s):[];t.push(e),localStorage.setItem("apps",JSON.stringify(t))}catch(e){console.log(e)}};return{apps:e,createApp:t}};var I=t(1163);let A=()=>{let[e,s]=(0,o.useState)([]),[t,r]=(0,o.useState)(""),[a,n]=(0,o.useState)(""),{apps:i,createApp:k}=E();(0,o.useEffect)(()=>{let e=async()=>{await fetch("/api/apps/").then(e=>e.json()).then(e=>s(e))};e()},[]);let A=(0,u.pm)(),z=e=>{!e.url.startsWith("https://")||e.url.startsWith("http://")?A({title:"Invalid URL",description:"Please enter https:// or http://",status:"error",duration:5e3,isClosable:!0}):(0,N.Z)(e.url)?k(e):A({title:"Invalid URL",description:"Please enter a valid URL",status:"error",duration:5e3,isClosable:!0})},{isOpen:O,onOpen:_,onClose:R}=(0,d.qY)(),{isOpen:U,onOpen:q,onClose:Z}=(0,d.qY)(),F=(0,I.useRouter)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(g.E.div,{className:"flex fixed top-0 bg-primary-400 h-20 w-7/12 rounded-b-lg justify-center items-center md:hidden",exit:{scale:1},transition:{type:"linear"},children:(0,l.jsxs)("div",{className:"flex items-center m-2 w-full h-full justify-between",children:[(0,l.jsxs)("div",{className:"flex items-center justify-center flex-row space-x-6",children:[(0,l.jsx)(c(),{src:"/images/emerald.png",alt:"emerald",width:50,height:50,className:"m-5"}),(0,l.jsx)(h.xv,{fontSize:"5xl",className:"flex text-primary-100",children:"Emerald"})]}),(0,l.jsxs)("div",{className:"space-x-3 flex flex-row",children:[(0,l.jsx)(x.zx,{colorScheme:"purple",variant:"outline",leftIcon:(0,l.jsx)(b.j2d,{}),onClick:()=>{F.push({pathname:"https://discord.gg/nq5xqEbHtp"})},children:"Discord"}),(0,l.jsx)(x.zx,{colorScheme:"twitter",variant:"outline",leftIcon:(0,l.jsx)(w.hsm,{}),onClick:q,children:"Apps"}),(0,l.jsx)(p.u,{label:"soon",placement:"bottom",children:(0,l.jsx)(x.zx,{colorScheme:"base",variant:"outline",leftIcon:(0,l.jsx)(v.rVC,{}),children:"Theater"})}),(0,l.jsx)(p.u,{label:"soon",placement:"bottom",children:(0,l.jsx)(x.zx,{colorScheme:"base",variant:"outline",leftIcon:(0,l.jsx)(b.p4t,{}),children:"Settings"})})]})]})}),(0,l.jsxs)(m.dy,{onClose:Z,isOpen:U,size:"xl",children:[(0,l.jsx)(m.P1,{}),(0,l.jsxs)(m.sc,{backgroundColor:"#354f52",textColor:"base.100",children:[(0,l.jsx)(m.cC,{}),(0,l.jsx)(m.OX,{children:(0,l.jsx)(h.xv,{fontSize:"4xl",children:"Your Apps"})}),(0,l.jsx)(m.Ng,{children:(0,l.jsxs)("div",{className:"flex space-x-5 flex-wrap",children:[Array.isArray(e)?e.map((e,s)=>(0,l.jsx)(g.E.div,{whileFocus:{scale:.9},whileHover:{scale:.9},className:"mx-2 my-2 drop-shadow-lg",children:(0,l.jsx)(p.u,{hasArrow:!0,label:e.title,bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)("div",{className:"flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all",onClick:()=>F.push({pathname:"/service",query:{s:C.Z.encode(e.source)}}),children:(0,l.jsx)("span",{children:(0,l.jsx)(c(),{src:e.icon,alt:e.title,width:200,height:200})})})})},s)):null,Array.isArray(i)?i.map((e,s)=>(0,l.jsx)(g.E.div,{whileFocus:{scale:.9},whileHover:{scale:.9},className:"m-2 drop-shadow-lg",children:(0,l.jsx)(p.u,{hasArrow:!0,label:e.title,bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsx)("div",{className:"flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all",onClick:()=>F.push({pathname:"/service",query:{s:C.Z.encode(e.url)}}),children:(0,l.jsx)("span",{children:(0,l.jsx)(c(),{src:"/images/world.svg",alt:e.title,width:200,height:200})})})})},s)):null,(0,l.jsx)(g.E.div,{className:"m-2 drop-shadow-lg",children:(0,l.jsx)(p.u,{hasArrow:!0,label:"add app",bg:"base.300",color:"base.100",placement:"bottom",children:(0,l.jsxs)(j.J2,{children:[(0,l.jsx)(j.xo,{children:(0,l.jsx)("div",{className:"flex justify-center w-28 bg-primary-500 p-1 rounded-lg hover:bg-primary-300 hover:cursor-pointer transition-all",children:(0,l.jsx)("span",{children:(0,l.jsx)(y.Lfi,{className:"text-8xl"})})})}),(0,l.jsxs)(j.yk,{bg:"#354F52",children:[(0,l.jsx)(j.QH,{}),(0,l.jsx)(j.us,{}),(0,l.jsx)(j.Yt,{className:"text-primary-100",children:"Add Custom app"}),(0,l.jsx)(j.b,{children:(0,l.jsxs)(h.Kq,{direction:"column",children:[(0,l.jsx)(f.II,{value:a,onChange:e=>n(e.target.value),placeholder:"App title"}),(0,l.jsx)(f.II,{value:t,onChange:e=>r(e.target.value),placeholder:"App url"}),(0,l.jsx)(x.zx,{bg:"#354F52",__css:{"&:hover":{bg:"#52796F"},height:"2rem",transition:"all 0.2s ease-in-out",borderRadius:"0.25rem","&:active":{boxShadow:"none",bg:"#52796F"}},onClick:()=>{z({url:t,title:a})},children:"Add"})]})})]})]})})})]})})]})]}),(0,l.jsxs)("div",{className:"tablet:visible laptop:hidden desktop:hidden",children:[(0,l.jsx)(S.vHB,{onClick:_,className:"fixed top-0 right-0 m-5 text-3xl text-primary-100 p-1 rounded-md hover:bg-primary-600 hover:cursor-pointer transition-all"}),(0,l.jsxs)(m.dy,{isOpen:O,placement:"right",onClose:R,colorScheme:"green",children:[(0,l.jsx)(m.P1,{}),(0,l.jsxs)(m.sc,{backgroundColor:"#354f52",textColor:"base.100",children:[(0,l.jsx)(m.cC,{}),(0,l.jsx)(m.OX,{children:(0,l.jsx)(h.xv,{fontSize:"3xl",children:"Emerald"})}),(0,l.jsx)(m.Ng,{children:(0,l.jsxs)("div",{className:"space-y-3 flex flex-col",children:[(0,l.jsx)(x.zx,{colorScheme:"twitter",variant:"outline",leftIcon:(0,l.jsx)(w.hsm,{}),children:"Apps"}),(0,l.jsx)(x.zx,{colorScheme:"whiteAlpha",variant:"outline",leftIcon:(0,l.jsx)(v.rVC,{}),children:"Theater"}),(0,l.jsx)(x.zx,{colorScheme:"green",variant:"outline",leftIcon:(0,l.jsx)(b.p4t,{}),children:"Settings"})]})}),(0,l.jsx)(m.ze,{children:(0,l.jsx)(h.xv,{color:"gray",children:"\xa9 Emerald 2022-2023"})})]})]})]})]})};t(8006);var z=t(3789);let O=()=>(k("/uv-sw.js","/~/uv/"),(0,l.jsxs)("div",{className:"flex w-full h-screen items-center justify-center",children:[(0,l.jsxs)(a(),{children:[(0,l.jsx)("title",{children:"Emerald | Home"}),(0,l.jsx)("meta",{name:"description",content:"Emerald is an excelent utility service that provides hundreds of things . An astral service. "}),(0,l.jsx)("script",{type:"text/javascript",src:"//pl19160496.highrevenuegate.com/79/14/f1/7914f1eee84b56166e8d8d6a223c1727.js"})]}),(0,l.jsx)(A,{}),(0,l.jsx)("div",{className:"flex flex-col space-y-2",children:(0,l.jsx)(n.default,{})}),(0,l.jsx)("div",{className:"absolute left-5 w-32"}),(0,l.jsx)("div",{className:"fixed bottom-0 w-full",children:(0,l.jsx)(z.Z,{fill:"#354F52",paused:!1,options:{height:10,amplitude:50,speed:.15,points:3}})})]}));var _=O}},function(e){e.O(0,[228,445,13,617,866,980,24,171,283,853,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);