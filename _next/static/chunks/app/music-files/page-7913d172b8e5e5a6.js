(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{5040:function(){},7368:function(e,n,t){Promise.resolve().then(t.bind(t,7799))},7799:function(e,n,t){"use strict";t.r(n);var r=t(353),o=t(9914),i=t(2529),a=t(1326),l=t(6854),c=t(3631),u=t(3260),s=t(9621),d=t(7253),p=t(6696),m=t(448),f=t(7623),g=t(2487),h=t(2809),y=t(2006),b=t(744);let C="3rem 1fr 16rem";function j(e){let{item:n,downloadCallback:t,updateCallback:o,deleteCallback:i,refetch:c}=e,{getHeader:s}=(0,h.p)(),[d,g]=(0,a.useState)(!1),[y,b]=(0,a.useState)(n.name.replace(/\.pdf$/,"")),j=(0,a.useCallback)(()=>{g(!0)},[]),k=(0,a.useCallback)(e=>b(e.currentTarget.value),[]),x=(0,a.useCallback)(async()=>{if(!confirm("정말 변경하시겠습니까?"))return;let e=(0,l.Am)("이름 변경 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0});g(!1);try{if(!(await fetch(f.Q+"/music-files/".concat(n.id,"/name"),{method:"PUT",body:JSON.stringify({name:y+".pdf"}),headers:{"Content-Type":"application/json",...s()}})).ok)throw Error("이름 변경에 실패했습니다.");await c(),l.Am.update(e,{render:"이름 변경에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})}catch(n){console.error(n),l.Am.update(e,{render:"이름 변경에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1})}},[s,n.id,y,c]);return(0,r.jsxs)(p.X,{gridTemplateColumns:C,children:[(0,r.jsx)("div",{className:"id-field",onClick:t,children:n.id}),(0,r.jsx)("div",{children:d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.M,{type:"text",value:y,onChange:k}),(0,r.jsx)("span",{style:{color:"red"},children:"맨 뒤에 .pdf는 자동으로 붙습니다!!!"})]}):n.name}),(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsx)(u.z,{onClick:d?x:j,color:d?"primary":"secondary",children:d?"저장":"이름 변경"}),(0,r.jsx)(u.z,{onClick:o,color:"secondary",children:"파일 변경"}),(0,r.jsx)(u.z,{onClick:i,color:"danger",children:"삭제"})]})]})}n.default=(0,c.E)("악보 파일 관리",function(){let{getHeader:e}=(0,h.p)(),n=(0,o.useSearchParams)(),t=(0,o.useRouter)(),c=Number(n.get("page")||0)||0,[k,x]=(0,a.useState)(n.get("orderRowName")||"id"),[w,L]=(0,a.useState)(n.get("orderDirection")||"desc"),v=(0,a.useCallback)((e,r)=>{t.push("?"+i.stringify({...i.parse(n.toString()),[e]:r}))},[t,n]),N=(0,a.useCallback)(()=>{v("page",String(c+1))},[c,v]),z=(0,a.useCallback)(()=>{v("page",String(c-1))},[c,v]),[M,S]=(0,a.useState)(n.get("keyword")||""),[A,Z]=(0,a.useState)(i.stringify({page:c,keyword:M,orderRowName:k,orderDirection:w})),{data:T,mutate:_}=(0,g._)("/music-files?".concat(A));(0,g._)("/music-files?"+i.stringify({page:c+1,keyword:M,orderRowName:k,orderDirection:w})),(0,a.useEffect)(()=>{let e=setTimeout(()=>{let e=i.stringify({page:c,keyword:M,orderRowName:k,orderDirection:w});Z(e),t.replace("?"+e)},100);return()=>clearTimeout(e)},[c,t,M,k,w]);let E=(0,a.useCallback)(e=>{S(e.currentTarget.value),v("page","0")},[v]),I=(0,a.useCallback)(async function(){let n=await fetch(f.Q+"/user/aws-credentials",{method:"GET",headers:e()}),{awsKey:t,awsSecret:r}=await n.json();return new y.g({credentials:{accessKeyId:String(t),secretAccessKey:String(r)},region:"ap-northeast-2"})},[e]),U=(0,a.useCallback)(()=>{let n=document.createElement("input");n.type="file",n.multiple=!0,n.style.display="none",n.onchange=async()=>{let t=(0,l.Am)("파일 업로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),r=n.files;if(!r){l.Am.update(t,{render:"파일이 선택되지 않았습니다.",type:"error",autoClose:1500,isLoading:!1});return}try{let n=await I(),o=Array(r.length).fill(null).map((e,n)=>{let t="music-files/".concat(Date.now(),"_").concat(n,".pdf");return{key:t,command:new b.U({Bucket:"haeun",Key:t,ContentType:"application/pdf",Body:r[n]})}});for(let{command:e}of o)await n.send(e);if(!(await fetch(f.Q+"/music-files",{method:"POST",body:JSON.stringify(o.map((e,n)=>{let{key:t}=e;return{key:t,name:r[n].name}})),headers:{"Content-Type":"application/json",...e()}})).ok)throw l.Am.update(t,{render:"파일 업로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1}),Error("파일 업로드에 실패했습니다.");await _(),l.Am.update(t,{render:"파일 업로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})}catch(e){console.error(e),l.Am.update(t,{render:"파일 업로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1})}},document.body.appendChild(n),setTimeout(()=>{n.click()},300)},[I,e,_]),P=(0,a.useMemo)(()=>null==T?void 0:T.items.map(n=>{let{id:t}=n;return async()=>{let n=document.createElement("input");n.type="file",n.accept=".pdf",n.multiple=!1,n.style.display="none",n.onchange=async()=>{let r=(0,l.Am)("파일 업로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),o=n.files;if(!(null==o?void 0:o.length)){l.Am.update(r,{render:"파일이 선택되지 않았습니다.",type:"error",autoClose:1500,isLoading:!1});return}let i=await I(),a="music-files/".concat(Date.now(),".pdf"),c=new b.U({Bucket:"haeun",Key:a,ContentType:"application/pdf",Body:o[0]});if(await i.send(c),!(await fetch(f.Q+"/music-files/".concat(t),{method:"PUT",body:JSON.stringify({key:a,name:o[0].name}),headers:{"Content-Type":"application/json",...e()}})).ok){l.Am.update(r,{render:"파일 수정에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}await _(),l.Am.update(r,{render:"파일 업로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})},document.body.appendChild(n),setTimeout(()=>{n.click()},300)}}),[I,null==T?void 0:T.items,e,_]),Q=(0,a.useMemo)(()=>null==T?void 0:T.items.map(n=>{let{id:t}=n;return async()=>{if(!confirm("정말 삭제하시겠습니까?"))return;let n=(0,l.Am)("파일 삭제 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0});if(!(await fetch(f.Q+"/music-files/".concat(t),{method:"DELETE",headers:e()})).ok){l.Am.update(n,{render:"파일 삭제에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}await _(),l.Am.update(n,{render:"파일 삭제에 성공했습니다.",type:"warning",autoClose:1500,isLoading:!1})}}),[null==T?void 0:T.items,e,_]),D=(0,a.useMemo)(()=>null==T?void 0:T.items.map(n=>{let{id:t,name:r}=n;return async()=>{let n=(0,l.Am)("파일 다운로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),o=await fetch(f.Q+"/music-files/download/".concat(t),{method:"GET",headers:e()});if(!o.ok){l.Am.update(n,{render:"파일 다운로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}let i=await o.text(),a=new Blob([Uint8Array.from(atob(i),e=>e.charCodeAt(0))],{type:"application/pdf"}),c=URL.createObjectURL(a),u=document.createElement("a");u.href=c,u.download=r,u.style.display="none",document.body.appendChild(u),u.click(),URL.revokeObjectURL(c),l.Am.update(n,{render:"파일 다운로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})}}),[null==T?void 0:T.items,e]),V=(0,a.useCallback)(()=>{x("id"),L(e=>"asc"===e?"desc":"asc")},[]),X=(0,a.useCallback)(()=>{x("name"),L(e=>"asc"===e?"desc":"asc")},[]),G=(0,a.useCallback)(e=>{v("page",String(e))},[v]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.X,{children:[(0,r.jsx)(m.M,{type:"text",value:M,onChange:E,placeholder:"검색어를 입력해주세요."}),(0,r.jsx)(u.z,{onClick:U,children:"업로드하기"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(p.X,{header:!0,gridTemplateColumns:C,children:[(0,r.jsxs)("div",{onClick:V,children:["번호"," ","id"===k?"asc"===w?"▲":"▼":null]}),(0,r.jsxs)("div",{onClick:X,children:["이름"," ","name"===k?"asc"===w?"▲":"▼":null]}),(0,r.jsx)("div",{})]}),null==T?void 0:T.items.map((e,n)=>(0,r.jsx)(j,{item:e,downloadCallback:null==D?void 0:D[n],updateCallback:null==P?void 0:P[n],deleteCallback:null==Q?void 0:Q[n],refetch:_},e.id))]}),(0,r.jsx)(d.t,{totalCount:(null==T?void 0:T.totalCount)||0,pageSize:(null==T?void 0:T.pageSize)||0,currentIndex:c,toNextPage:N,toPrevPage:z,toPage:G})]})})},7253:function(e,n,t){"use strict";t.d(n,{t:function(){return s}});var r=t(8009),o=t(353),i=t(6374),a=t(3260),l=t(1326);function c(){let e=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 1em;\n"]);return c=function(){return e},e}let u=i.Z.div(c()),s=e=>{let{currentIndex:n,toPage:t,pageSize:r,totalCount:i}=e,c=Math.floor(i/r)-1,s=n>0,d=n!==c,p=(0,l.useCallback)(()=>{t(0)},[t]),m=(0,l.useCallback)(()=>{t(c)},[t,c]),f=(0,l.useCallback)(()=>{t(n-1)},[t,n]),g=(0,l.useCallback)(()=>{t(n+1)},[t,n]),h=(0,l.useMemo)(()=>Array.from({length:10},(e,l)=>{let c=10*Math.floor(n/10)+l+1;return c*r>i?null:(0,o.jsx)(a.z,{onClick:()=>t(c-1),color:c-1===n?"primary":"secondary",children:c},c)}),[n,r,i,t]);return(0,o.jsxs)(u,{children:[(0,o.jsx)(a.z,{onClick:p,disabled:!s,color:"secondary",children:"<<"}),(0,o.jsx)(a.z,{onClick:f,disabled:!s,color:"secondary",children:"<"}),h,(0,o.jsx)(a.z,{onClick:g,disabled:!d,color:"secondary",children:">"}),(0,o.jsx)(a.z,{onClick:m,disabled:!d,color:"secondary",children:">>"})]})}},3631:function(e,n,t){"use strict";t.d(n,{E:function(){return _}});var r=t(8009),o=t(353),i=t(6374),a=t(188),l=t(9914),c=t(1326),u=t(6854);let s=e=>"\n  @media (max-width: 768px) {\n    ".concat(e,"\n  }\n");var d=t(7376);t(6136);var p=t(2809);function m(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n\n  ","\n"]);return m=function(){return e},e}function f(){let e=(0,r._)(["\n  padding: 1rem;\n  padding-top: 2rem;\n"]);return f=function(){return e},e}function g(){let e=(0,r._)(["\n  ","\n\n  ","\n"]);return g=function(){return e},e}function h(){let e=(0,r._)(["\n  padding: 3rem 1rem;\n  padding-top: 1rem;\n\n  ","\n"]);return h=function(){return e},e}function y(){let e=(0,r._)(["\n  display: block;\n  padding: 1rem 1.5rem;\n  color: #333;\n  margin: 0.75rem 0;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  &:first-of-type {\n    margin-top: 0;\n  }\n\n  ","\n"]);return y=function(){return e},e}function b(){let e=(0,r._)(["\n  padding: 1rem 2rem;\n  padding-top: 0;\n  color: #333;\n  margin: 1rem;\n  border-radius: 10px;\n  border: 1px solid #ddd;\n"]);return b=function(){return e},e}function C(){let e=(0,r._)(["\n  width: 35px;\n  height: 35px;\n  float: right;\n  display: none;\n  cursor: pointer;\n\n  ","\n"]);return C=function(){return e},e}function j(){let e=(0,r._)(["\n  font-size: 2rem;\n  margin: 2rem 0;\n"]);return j=function(){return e},e}function k(){let e=(0,r._)(["\n  width: auto;\n  height: 35px;\n"]);return k=function(){return e},e}let x=i.Z.div(m(),s("\n    grid-template-columns: 1fr;\n  ")),w=i.Z.header(f()),L=i.Z.aside(g(),s("\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  "),e=>!e.opened&&s("\n      display: none;\n    ")),v=i.Z.nav(h(),s("\n    width: 50vw;\n    padding-top: 5rem;\n    background-color: white;\n    min-height: 100vh;\n  ")),N=(0,i.Z)(a.default)(y(),e=>e.selected&&"\n    color: #db929b;\n    font-weight: bold;\n  "),z=i.Z.main(b()),M=i.Z.img(C(),s("\n    display: block;\n  ")),S=i.Z.h1(j()),A=i.Z.img(k()),Z=[{title:"대시보드",href:"/"},{title:"악보 파일 관리",href:"/music-files/"},{title:"상품 관리",href:"/products/"},{title:"상품-악보 연결",href:"/music-file-by-product-relation/"},{title:"다운로드 링크 관리",href:"/download-links/"},{title:"기타 설정",href:"/configs/"}],T=e=>{let{children:n,title:t}=e,{removeToken:r}=(0,p.p)(),i=(0,l.usePathname)(),[s,d]=(0,c.useState)(!1),m=(0,c.useCallback)(()=>{d(e=>!e)},[]);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Ix,{}),(0,o.jsxs)(w,{children:[(0,o.jsx)(a.default,{href:"/",children:(0,o.jsx)(A,{src:"/logo.png"})}),(0,o.jsx)(M,{src:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",onClick:m})]}),(0,o.jsxs)(x,{children:[(0,o.jsx)(L,{opened:s,onClick:m,children:(0,o.jsxs)(v,{children:[Z.map(e=>(0,o.jsx)(N,{href:e.href,selected:i===e.href,children:e.title},e.title)),(0,o.jsx)(N,{href:"#",onClick:r,children:"로그아웃"})]})}),(0,o.jsxs)(z,{children:[(0,o.jsx)(S,{children:t||"Untitled"}),n]})]})]})};function _(e,n){return function(t){return(0,o.jsx)(c.Suspense,{children:(0,o.jsx)(d.c,{children:(0,o.jsx)(T,{title:e,children:(0,o.jsx)(n,{...t})})})})}}},7376:function(e,n,t){"use strict";t.d(n,{CookieAuthUpdateWrapper:function(){return l},c:function(){return c}});var r=t(353),o=t(9914),i=t(1326),a=t(2809);let l=e=>{let{getTokenFromCookie:n}=(0,a.p)(),t=(0,o.usePathname)();return(0,i.useEffect)(()=>{n()},[t,n]),(0,r.jsx)(r.Fragment,{children:e.children})},c=e=>{let{token:n}=(0,a.p)(),t=(0,o.useRouter)();return(0,i.useEffect)(()=>{n||t.push("/login")},[t,n]),(0,r.jsx)(r.Fragment,{children:e.children})}},3260:function(e,n,t){"use strict";t.d(n,{z:function(){return i}});var r=t(8009);function o(){let e=(0,r._)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  ","\n\n  &:hover {\n    background-color: #c87f88;\n  }\n\n  &:disabled {\n    background-color: #e1e1e1;\n    color: #a1a1a1;\n    cursor: not-allowed;\n  }\n\n  ","\n"]);return o=function(){return e},e}let i=t(6374).Z.button(o(),"#db929b",e=>{let{fullWidth:n}=e;return n&&"width: 100%;"},e=>{let{color:n}=e;return"secondary"===n?"\n            background-color: #f1f1f1;\n            color: #333;\n        ":"danger"===n?"background-color: #f44336;":"warning"===n?"background-color: #ff9800;":void 0})},9621:function(e,n,t){"use strict";t.d(n,{X:function(){return i}});var r=t(8009);function o(){let e=(0,r._)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n\n  > input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    height: 2.5rem;\n  }\n\n  > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    height: 2.5rem;\n  }\n"]);return o=function(){return e},e}let i=t(6374).Z.div(o())},6696:function(e,n,t){"use strict";t.d(n,{X:function(){return i}});var r=t(8009);function o(){let e=(0,r._)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3rem 1fr 10rem;\n\n  ","\n\n  grid-gap: 1rem;\n  margin-bottom: 1rem;\n\n  > .buttons {\n    display: flex;\n    gap: 0.5rem;\n  }\n\n  > .id-field {\n    cursor: pointer;\n    color: skyblue;\n  }\n\n  ","\n"]);return o=function(){return e},e}let i=t(6374).Z.div(o(),e=>{let{gridTemplateColumns:n}=e;return n&&"\n          grid-template-columns: ".concat(n,";\n      ")},e=>{let{header:n}=e;return n&&"\n          font-weight: bold;\n          border-bottom: 1px solid #e1e1e1;\n          padding-bottom: 0.5rem;\n      "})},448:function(e,n,t){"use strict";t.d(n,{K:function(){return c},M:function(){return l}});var r=t(8009),o=t(6374);function i(){let e=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n"]);return i=function(){return e},e}function a(){let e=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n  resize: vertical;\n"]);return a=function(){return e},e}let l=o.Z.input(i()),c=o.Z.textarea(a())},7623:function(e,n,t){"use strict";t.d(n,{Q:function(){return r}});let r="https://api.haeunserver.com/v1"},2487:function(e,n,t){"use strict";t.d(n,{_:function(){return a}});var r=t(7469),o=t(7623),i=t(2809);let a=function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",{getHeader:t}=(0,i.p)();return(0,r.ZP)("".concat(o.Q).concat(e),async e=>{let r=await fetch(e,{headers:t()});if(!r.ok)throw Error("Failed to fetch");return"json"==n?r.json():r.text()})}},2809:function(e,n,t){"use strict";t.d(n,{p:function(){return o}});var r=t(4941);let o=(0,t(4354).U)((e,n)=>({token:r.Z.get("token")||null,getHeader:()=>({Authorization:"Bearer ".concat(n().token)}),setToken:n=>{r.Z.set("token",n,{expires:new Date(Date.now()+72e5)}),e({token:n})},getTokenFromCookie:()=>{e({token:r.Z.get("token")||null})},removeToken:()=>e({token:null})}))}},function(e){e.O(0,[418,266,35,346,188,529,846,254,615,744],function(){return e(e.s=7368)}),_N_E=e.O()}]);