(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[776],{5040:function(){},7563:function(e,n,t){Promise.resolve().then(t.bind(t,1035))},1035:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return M}});var r=t(8009),i=t(353),o=t(6374),l=t(9914),c=t(2529),s=t(1326),d=t(6854),u=t(4354),a=t(3631);function m(){let e=(0,r._)(["\n  position: fixed;\n  bottom: 0;\n  right: 3rem;\n  width: 90vw;\n  max-width: 750px;\n  min-height: 50vh;\n  background-color: white;\n  border-radius: 1rem 1rem 0 0;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n  padding: 3rem 1rem;\n  transition: bottom 0.3s;\n"]);return m=function(){return e},e}let f=o.Z.div(m());var p=t(3260),h=t(7253),g=t(6696),j=t(448),x=t(7623),b=t(2487),v=t(2809),C=t(188);function k(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  grid-gap: 1rem;\n"]);return k=function(){return e},e}let y=(0,u.U)((e,n)=>({isOpened:!1,selectedFilesIds:[],targetOptionId:null,open:n=>e({isOpened:!0,targetOptionId:n}),close:()=>e({isOpened:!1,selectedFilesIds:[]}),setTargetOptionId:n=>e({targetOptionId:n}),clearTargetOptionId:()=>e({targetOptionId:null}),addSelectedFileId:t=>e({selectedFilesIds:[...n().selectedFilesIds,t]}),removeSelectedFileId:t=>e({selectedFilesIds:n().selectedFilesIds.filter(e=>e!==t)}),emptySelectedFileIds:()=>e({selectedFilesIds:[]})})),N=o.Z.div(k()),w=()=>{let{getHeader:e}=(0,v.p)(),{isOpened:n,selectedFilesIds:t,targetOptionId:r,addSelectedFileId:o,removeSelectedFileId:l,emptySelectedFileIds:c,close:u}=y(),[a,m]=(0,s.useState)(""),{data:h}=(0,b._)("/music-files?keyword=".concat(a),"json"),{data:C}=(0,b._)("/music-files/by-option-id/".concat(r),"json"),k=(0,s.useCallback)(e=>{m(e.target.value)},[]),w=(0,s.useMemo)(()=>[...(C||[]).map(e=>({...e,name:"[연결됨] ".concat(e.name),preventSelect:!0})),...((null==h?void 0:h.items)||[]).map(e=>({...e,preventSelect:!1}))],[C,h]),z=(0,s.useMemo)(()=>w.map(e=>{let{id:n}=e;return()=>{t.includes(n)?l(n):o(n)}}),[w,o,l,t]),L=(0,s.useCallback)(async()=>{if(!r)return;let n=(0,d.Am)("파일을 연결하는 중입니다. 잠시만 기다려주세요.",{isLoading:!0,autoClose:!1});try{(await fetch(x.Q+"/music-file-by-product-relation/",{method:"POST",headers:{"Content-Type":"application/json",...e()},body:JSON.stringify({fileIds:t,optionId:r})})).ok?d.Am.update(n,{render:"파일 연결이 완료되었습니다.",type:"success",autoClose:2500,isLoading:!1}):d.Am.update(n,{render:"파일 연결에 실패했습니다.",type:"error",autoClose:2500,isLoading:!1}),u()}catch(e){d.Am.update(n,{render:"파일 연결에 실패했습니다.",type:"error",autoClose:2500,isLoading:!1})}finally{u()}},[u,e,t,r]);return(0,s.useEffect)(()=>{m(""),c()},[c,n]),(0,s.useEffect)(()=>{C&&C.forEach(e=>{let{id:n}=e;o(n)})},[o,C]),(0,i.jsxs)(f,{style:{bottom:n?0:-1e3},children:[(0,i.jsx)("h2",{children:"파일을 선택해주세요."}),(0,i.jsx)("br",{}),(0,i.jsx)(j.M,{value:a,onChange:k,placeholder:"검색어를 입력해주세요.",type:"text"}),(0,i.jsx)("div",{style:{overflowY:"scroll",maxHeight:"50vh"},children:w.map((e,n)=>(0,i.jsxs)(g.X,{gridTemplateColumns:"1fr 5rem",style:e.preventSelect&&!t.includes(e.id)||!e.preventSelect&&(null==C?void 0:C.some(n=>{let{id:t}=n;return t==e.id}))?{display:"none"}:{},children:[(0,i.jsxs)("div",{children:["ID:",e.id," / ",e.name]}),(0,i.jsx)(p.z,{color:t.includes(e.id)?"danger":"primary",onClick:null==z?void 0:z[n],children:t.includes(e.id)?"취소":"선택"})]},"".concat(e.id,"_").concat(n)))}),(0,i.jsx)("br",{}),(0,i.jsxs)(N,{children:[(0,i.jsx)(p.z,{fullWidth:!0,color:"primary",onClick:L,children:"저장"}),(0,i.jsx)(p.z,{fullWidth:!0,color:"warning",onClick:c,children:"모두 연결 해제"}),(0,i.jsx)(p.z,{fullWidth:!0,color:"danger",onClick:u,children:"닫기"})]})]})},z=e=>{let{item:n}=e,[t,r]=(0,s.useState)(!1),o=(0,s.useCallback)(()=>{r(e=>!e)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.X,{gridTemplateColumns:"12rem 1fr 3rem 3rem 7rem",children:[(0,i.jsx)("div",{className:"id-field",children:(0,i.jsx)("a",{href:"https://smartstore.naver.com/haeun_musicsketch/products/"+n.code,target:"_blank",rel:"noreferrer",children:n.code})}),(0,i.jsx)("div",{children:n.name}),(0,i.jsxs)("div",{children:[n.optionCount,"개"]}),(0,i.jsxs)("div",{style:{color:n.fileCount?"black":"red"},children:[n.fileCount,"개"]}),(0,i.jsx)(p.z,{color:"secondary",onClick:o,children:t?"닫기":"자세히"})]}),t?(0,i.jsx)(L,{productId:n.id}):null]})},L=e=>{let{productId:n}=e,{open:t,isOpened:r}=y(),{getHeader:o}=(0,v.p)(),c=(0,l.useRouter)(),{data:u,mutate:a}=(0,b._)("/products/".concat(n,"/options"),"json"),m=(0,s.useMemo)(()=>null==u?void 0:u.map(e=>{let{id:n}=e;return()=>{t(n)}}),[u,t]),f=(0,s.useMemo)(()=>null==u?void 0:u.map(e=>{let{id:n}=e;return async()=>{let e=prompt("주문자 이름을 입력해주세요.");if(!e)return;let t=prompt("전화번호를 입력해주세요.");if(!t)return;let r=(0,d.Am)("카카오톡 발송 중입니다. 잠시만 기다려주세요.",{isLoading:!0,autoClose:!1});try{if(!(await fetch("".concat(x.Q,"/naver-smart-store-api/send-kakao/").concat(n),{method:"POST",headers:{"Content-Type":"application/json",...o()},body:JSON.stringify({orderName:e,phoneNumber:t})})).ok)throw Error("카카오톡 발송에 실패했습니다.");d.Am.update(r,{render:"카카오톡 발송에 성공했습니다.",type:"success",autoClose:2500,isLoading:!1}),c.push("/download-links")}catch(e){d.Am.update(r,{render:"카카오톡 발송에 실패했습니다. 전화번호가 올바른지 확인해주세요.",type:"error",autoClose:2500,isLoading:!1})}}}),[u,o,c]);return(0,s.useEffect)(()=>{r||a()},[r,a]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(g.X,{gridTemplateColumns:"12rem 1fr 3rem 3rem 7rem",children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{style:{color:"#aaa",fontWeight:"bold"},children:"파일 목록이 존재하지 않는 옵션은 자동 발송 처리가 비활성화됩니다."})]}),(0,i.jsx)("br",{}),null==u?void 0:u.map((e,n)=>(0,i.jsxs)(g.X,{gridTemplateColumns:"12rem 1fr 3rem 3rem 7rem",children:[(0,i.jsx)("div",{}),(0,i.jsxs)("div",{children:["옵션 / ",e.name," ",(0,i.jsx)(C.default,{href:"#",style:{color:"skyblue"},onClick:null==f?void 0:f[n],children:"[발송하기]"})]}),(0,i.jsx)("div",{style:{color:e.fileCount?"green":"red"},children:e.fileCount?"자동":"수동"}),(0,i.jsxs)("div",{style:{color:e.fileCount?"black":"red"},children:[e.fileCount,"개"]}),(0,i.jsx)(p.z,{color:e.fileCount?"warning":"primary",onClick:null==m?void 0:m[n],children:e.fileCount?"재선택":"파일선택"})]},e.id))]})};var M=(0,a.E)("상품-악보 연결",function(){let{isOpened:e}=y(),n=(0,l.useSearchParams)(),t=(0,l.useRouter)(),[r,o]=(0,s.useState)(n.get("keyword")||""),[d,u]=(0,s.useState)(Number(n.get("page")||0)||0),[a,m]=(0,s.useState)(n.get("orderRowName")||"id"),[f,p]=(0,s.useState)("desc"===n.get("orderDirection")?"desc":"asc"),x=(0,s.useCallback)(e=>{o(e.target.value),u(0)},[]),v=(0,s.useCallback)(e=>{u(n=>{let i=n+e;return t.replace("?"+c.stringify({page:i,keyword:r})),i})},[t,r]),C=(0,s.useCallback)(()=>{v(1)},[v]),k=(0,s.useCallback)(()=>{v(-1)},[v]);(0,s.useEffect)(()=>{let e=setTimeout(()=>{t.replace("?"+c.stringify({page:d,keyword:r,orderRowName:a,orderDirection:f}))},100);return()=>clearTimeout(e)},[d,t,r,a,f]);let N=c.stringify({page:d,keyword:r,orderRowName:a,orderDirection:f}),{data:L,mutate:M}=(0,b._)("/products/with-counter?".concat(N),"json");(0,s.useEffect)(()=>{e||M()},[e,M]);let S=(0,s.useCallback)(()=>{m("id"),p(e=>"asc"===e?"desc":"asc")},[]),I=(0,s.useCallback)(()=>{m("name"),p(e=>"asc"===e?"desc":"asc")},[]),Z=(0,s.useCallback)(()=>{m("optionCount"),p(e=>"asc"===e?"desc":"asc")},[]),_=(0,s.useCallback)(()=>{m("fileCount"),p(e=>"asc"===e?"desc":"asc")},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(j.M,{value:r,onChange:x,placeholder:"검색어를 입력해주세요.",type:"text"}),(0,i.jsx)("div",{style:{overflowX:"scroll"},children:(0,i.jsxs)("div",{className:"tableWrapper",children:[(0,i.jsxs)(g.X,{header:!0,gridTemplateColumns:"12rem 1fr 3rem 3rem 7rem",children:[(0,i.jsxs)("div",{onClick:S,children:["번호"," ","id"===a?"asc"===f?"▲":"▼":null]}),(0,i.jsxs)("div",{onClick:I,children:["이름"," ","name"===a?"asc"===f?"▲":"▼":null]}),(0,i.jsxs)("div",{onClick:Z,children:["옵션"," ","optionCount"===a?"asc"===f?"▲":"▼":null]}),(0,i.jsxs)("div",{onClick:_,children:["파일"," ","fileCount"===a?"asc"===f?"▲":"▼":null]})]}),null==L?void 0:L.items.map(e=>(0,i.jsx)(z,{item:e},e.id))]})}),(0,i.jsx)(h.t,{currentPage:d+1,hasNext:(null==L?void 0:L.hasNext)||!1,hasPrev:d>0,toNextPage:C,toPrevPage:k}),(0,i.jsx)(w,{})]})})},7253:function(e,n,t){"use strict";t.d(n,{t:function(){return d}});var r=t(8009),i=t(353),o=t(6374),l=t(3260);function c(){let e=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 1em;\n"]);return c=function(){return e},e}let s=o.Z.div(c()),d=e=>{let{currentPage:n,hasNext:t,hasPrev:r,toNextPage:o,toPrevPage:c}=e;return(0,i.jsxs)(s,{children:[(0,i.jsx)(l.z,{onClick:c,disabled:!r,color:"secondary",children:"이전"}),(0,i.jsx)("div",{children:n}),(0,i.jsx)(l.z,{onClick:o,disabled:!t,color:"secondary",children:"다음"})]})}},3631:function(e,n,t){"use strict";t.d(n,{E:function(){return T}});var r=t(8009),i=t(353),o=t(6374),l=t(188),c=t(9914),s=t(1326),d=t(6854);let u=e=>"\n  @media (max-width: 768px) {\n    ".concat(e,"\n  }\n");var a=t(7376);t(6136);var m=t(2809);function f(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n\n  ","\n"]);return f=function(){return e},e}function p(){let e=(0,r._)(["\n  padding: 1rem;\n  padding-top: 2rem;\n"]);return p=function(){return e},e}function h(){let e=(0,r._)(["\n  ","\n\n  ","\n"]);return h=function(){return e},e}function g(){let e=(0,r._)(["\n  padding: 3rem 1rem;\n  padding-top: 1rem;\n\n  ","\n"]);return g=function(){return e},e}function j(){let e=(0,r._)(["\n  display: block;\n  padding: 1rem 1.5rem;\n  color: #333;\n  margin: 0.75rem 0;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  &:first-of-type {\n    margin-top: 0;\n  }\n\n  ","\n"]);return j=function(){return e},e}function x(){let e=(0,r._)(["\n  padding: 1rem 2rem;\n  padding-top: 0;\n  color: #333;\n  margin: 1rem;\n  border-radius: 10px;\n  border: 1px solid #ddd;\n"]);return x=function(){return e},e}function b(){let e=(0,r._)(["\n  width: 35px;\n  height: 35px;\n  float: right;\n  display: none;\n  cursor: pointer;\n\n  ","\n"]);return b=function(){return e},e}function v(){let e=(0,r._)(["\n  font-size: 2rem;\n  margin: 2rem 0;\n"]);return v=function(){return e},e}function C(){let e=(0,r._)(["\n  width: auto;\n  height: 35px;\n"]);return C=function(){return e},e}let k=o.Z.div(f(),u("\n    grid-template-columns: 1fr;\n  ")),y=o.Z.header(p()),N=o.Z.aside(h(),u("\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  "),e=>!e.opened&&u("\n      display: none;\n    ")),w=o.Z.nav(g(),u("\n    width: 50vw;\n    padding-top: 5rem;\n    background-color: white;\n    min-height: 100vh;\n  ")),z=(0,o.Z)(l.default)(j(),e=>e.selected&&"\n    color: #db929b;\n    font-weight: bold;\n  "),L=o.Z.main(x()),M=o.Z.img(b(),u("\n    display: block;\n  ")),S=o.Z.h1(v()),I=o.Z.img(C()),Z=[{title:"대시보드",href:"/"},{title:"악보 파일 관리",href:"/music-files/"},{title:"상품 관리",href:"/products/"},{title:"상품-악보 연결",href:"/music-file-by-product-relation/"},{title:"다운로드 링크 관리",href:"/download-links/"},{title:"기타 설정",href:"/configs/"}],_=e=>{let{children:n,title:t}=e,{removeToken:r}=(0,m.p)(),o=(0,c.usePathname)(),[u,a]=(0,s.useState)(!1),f=(0,s.useCallback)(()=>{a(e=>!e)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(d.Ix,{}),(0,i.jsxs)(y,{children:[(0,i.jsx)(l.default,{href:"/",children:(0,i.jsx)(I,{src:"/logo.png"})}),(0,i.jsx)(M,{src:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",onClick:f})]}),(0,i.jsxs)(k,{children:[(0,i.jsx)(N,{opened:u,onClick:f,children:(0,i.jsxs)(w,{children:[Z.map(e=>(0,i.jsx)(z,{href:e.href,selected:o===e.href,children:e.title},e.title)),(0,i.jsx)(z,{href:"#",onClick:r,children:"로그아웃"})]})}),(0,i.jsxs)(L,{children:[(0,i.jsx)(S,{children:t||"Untitled"}),n]})]})]})};function T(e,n){return function(t){return(0,i.jsx)(s.Suspense,{children:(0,i.jsx)(a.c,{children:(0,i.jsx)(_,{title:e,children:(0,i.jsx)(n,{...t})})})})}}},7376:function(e,n,t){"use strict";t.d(n,{CookieAuthUpdateWrapper:function(){return c},c:function(){return s}});var r=t(353),i=t(9914),o=t(1326),l=t(2809);let c=e=>{let{getTokenFromCookie:n}=(0,l.p)(),t=(0,i.usePathname)();return(0,o.useEffect)(()=>{n()},[t,n]),(0,r.jsx)(r.Fragment,{children:e.children})},s=e=>{let{token:n}=(0,l.p)(),t=(0,i.useRouter)();return(0,o.useEffect)(()=>{n||t.push("/login")},[t,n]),(0,r.jsx)(r.Fragment,{children:e.children})}},3260:function(e,n,t){"use strict";t.d(n,{z:function(){return o}});var r=t(8009);function i(){let e=(0,r._)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  ","\n\n  &:hover {\n    background-color: #c87f88;\n  }\n\n  &:disabled {\n    background-color: #e1e1e1;\n    color: #a1a1a1;\n    cursor: not-allowed;\n  }\n\n  ","\n"]);return i=function(){return e},e}let o=t(6374).Z.button(i(),"#db929b",e=>{let{fullWidth:n}=e;return n&&"width: 100%;"},e=>{let{color:n}=e;return"secondary"===n?"\n            background-color: #f1f1f1;\n            color: #333;\n        ":"danger"===n?"background-color: #f44336;":"warning"===n?"background-color: #ff9800;":void 0})},6696:function(e,n,t){"use strict";t.d(n,{X:function(){return o}});var r=t(8009);function i(){let e=(0,r._)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3rem 1fr 10rem;\n\n  ","\n\n  grid-gap: 1rem;\n  margin-bottom: 1rem;\n\n  > .buttons {\n    display: flex;\n    gap: 0.5rem;\n  }\n\n  > .id-field {\n    cursor: pointer;\n    color: skyblue;\n  }\n\n  ","\n"]);return i=function(){return e},e}let o=t(6374).Z.div(i(),e=>{let{gridTemplateColumns:n}=e;return n&&"\n          grid-template-columns: ".concat(n,";\n      ")},e=>{let{header:n}=e;return n&&"\n          font-weight: bold;\n          border-bottom: 1px solid #e1e1e1;\n          padding-bottom: 0.5rem;\n      "})},448:function(e,n,t){"use strict";t.d(n,{K:function(){return s},M:function(){return c}});var r=t(8009),i=t(6374);function o(){let e=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n"]);return o=function(){return e},e}function l(){let e=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n  resize: vertical;\n"]);return l=function(){return e},e}let c=i.Z.input(o()),s=i.Z.textarea(l())},7623:function(e,n,t){"use strict";t.d(n,{Q:function(){return r}});let r="https://api.haeunserver.com/v1"},2487:function(e,n,t){"use strict";t.d(n,{_:function(){return l}});var r=t(7469),i=t(7623),o=t(2809);let l=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",{getHeader:t}=(0,o.p)();return(0,r.ZP)("".concat(i.Q).concat(e),async e=>{let r=await fetch(e,{headers:t()});if(!r.ok)throw Error("Failed to fetch");return"json"==n?r.json():r.text()})}},2809:function(e,n,t){"use strict";t.d(n,{p:function(){return i}});var r=t(4941);let i=(0,t(4354).U)((e,n)=>({token:r.Z.get("token")||null,getHeader:()=>({Authorization:"Bearer ".concat(n().token)}),setToken:n=>{r.Z.set("token",n,{expires:new Date(Date.now()+72e5)}),e({token:n})},getTokenFromCookie:()=>{e({token:r.Z.get("token")||null})},removeToken:()=>e({token:null})}))}},function(e){e.O(0,[418,35,463,188,469,529,254,615,744],function(){return e(e.s=7563)}),_N_E=e.O()}]);