(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[706],{5040:function(){},7368:function(n,e,t){Promise.resolve().then(t.bind(t,7799))},7799:function(n,e,t){"use strict";t.r(e);var r=t(353),i=t(9914),o=t(2529),u=t(1326),l=t(6854),d=t(3631),c=t(3260),a=t(9621),s=t(7253),f=t(6696),m=t(448),p=t(7623),g=t(2487),h=t(2809);e.default=(0,d.E)("악보 파일 관리",function(){let{getHeader:n}=(0,h.p)(),e=(0,i.useSearchParams)(),t=(0,i.useRouter)(),d=Number(e.get("page")||0)||0,b=(0,u.useCallback)((n,r)=>{t.push("?"+o.stringify({...o.parse(e.toString()),[n]:r}))},[t,e]),j=(0,u.useCallback)(()=>{b("page",String(d+1))},[d,b]),x=(0,u.useCallback)(()=>{b("page",String(d-1))},[d,b]),[y,k]=(0,u.useState)(e.get("keyword")||""),[v,C]=(0,u.useState)(o.stringify({page:d,keyword:y})),{data:L,mutate:N}=(0,g._)("/music-files?".concat(v));(0,u.useEffect)(()=>{let n=setTimeout(()=>{let n=o.stringify({page:d,keyword:y});C(n),t.replace("?"+n)},100);return()=>clearTimeout(n)},[d,t,y]);let w=(0,u.useCallback)(()=>{let e=document.createElement("input");e.type="file",e.multiple=!0,e.style.display="none",e.onchange=async()=>{let t=(0,l.Am)("파일 업로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),r=e.files;if(!r){l.Am.update(t,{render:"파일이 선택되지 않았습니다.",type:"error",autoClose:1500,isLoading:!1});return}let i=new FormData;for(let n=0;n<r.length;n++)i.append("files",r[n]);try{if(!(await fetch(p.Q+"/music-files",{method:"POST",body:i,headers:n()})).ok)throw l.Am.update(t,{render:"파일 업로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1}),Error("파일 업로드에 실패했습니다.");await N(),l.Am.update(t,{render:"파일 업로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})}catch(n){l.Am.update(t,{render:"파일 업로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1})}},document.body.appendChild(e),setTimeout(()=>{e.click()},300)},[N,n]),z=(0,u.useMemo)(()=>null==L?void 0:L.items.map(e=>{let{id:t}=e;return async()=>{let e=document.createElement("input");e.type="file",e.accept=".pdf",e.multiple=!1,e.style.display="none",e.onchange=async()=>{let r=(0,l.Am)("파일 업로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),i=e.files;if(!(null==i?void 0:i.length)){l.Am.update(r,{render:"파일이 선택되지 않았습니다.",type:"error",autoClose:1500,isLoading:!1});return}let o=new FormData;if(o.append("file",i[0]),!(await fetch(p.Q+"/music-files/".concat(t),{method:"PUT",body:o,headers:n()})).ok){l.Am.update(r,{render:"파일 수정에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}await N(),l.Am.update(r,{render:"파일 업로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})},document.body.appendChild(e),setTimeout(()=>{e.click()},300)}}),[null==L?void 0:L.items,n,N]),M=(0,u.useMemo)(()=>null==L?void 0:L.items.map(e=>{let{id:t}=e;return async()=>{if(!confirm("정말 삭제하시겠습니까?"))return;let e=(0,l.Am)("파일 삭제 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0});if(!(await fetch(p.Q+"/music-files/".concat(t),{method:"DELETE",headers:n()})).ok){l.Am.update(e,{render:"파일 삭제에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}await N(),l.Am.update(e,{render:"파일 삭제에 성공했습니다.",type:"warning",autoClose:1500,isLoading:!1})}}),[null==L?void 0:L.items,n,N]),Z=(0,u.useMemo)(()=>null==L?void 0:L.items.map(e=>{let{id:t,name:r}=e;return async()=>{let e=(0,l.Am)("파일 다운로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0}),i=await fetch(p.Q+"/music-files/download/".concat(t),{method:"GET",headers:n()});if(!i.ok){l.Am.update(e,{render:"파일 다운로드에 실패했습니다.",type:"error",autoClose:1500,isLoading:!1});return}let o=document.createElement("a"),u=await i.arrayBuffer(),d=URL.createObjectURL(new Blob([u]));o.href=d,o.download=r,o.style.display="none",document.body.appendChild(o),o.click(),l.Am.update(e,{render:"파일 다운로드에 성공했습니다.",type:"success",autoClose:1500,isLoading:!1})}}),[null==L?void 0:L.items,n]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.X,{children:[(0,r.jsx)(m.M,{type:"text",value:y,onChange:n=>k(n.currentTarget.value),placeholder:"검색어를 입력해주세요."}),(0,r.jsx)(c.z,{onClick:w,children:"업로드하기"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(f.X,{header:!0,children:[(0,r.jsx)("div",{children:"번호"}),(0,r.jsx)("div",{children:"이름"}),(0,r.jsx)("div",{})]}),null==L?void 0:L.items.map((n,e)=>(0,r.jsxs)(f.X,{children:[(0,r.jsx)("div",{className:"id-field",onClick:null==Z?void 0:Z[e],children:n.id}),(0,r.jsx)("div",{children:n.name}),(0,r.jsxs)("div",{className:"buttons",children:[(0,r.jsx)(c.z,{onClick:null==z?void 0:z[e],color:"secondary",children:"파일 변경"}),(0,r.jsx)(c.z,{onClick:null==M?void 0:M[e],color:"danger",children:"삭제"})]})]},n.id))]}),(0,r.jsx)(s.t,{hasPrev:d>0,hasNext:(null==L?void 0:L.hasNext)||!1,currentPage:d+1,toNextPage:j,toPrevPage:x})]})})},7253:function(n,e,t){"use strict";t.d(e,{t:function(){return c}});var r=t(8009),i=t(353),o=t(6374),u=t(3260);function l(){let n=(0,r._)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  grid-gap: 1em;\n"]);return l=function(){return n},n}let d=o.Z.div(l()),c=n=>{let{currentPage:e,hasNext:t,hasPrev:r,toNextPage:o,toPrevPage:l}=n;return(0,i.jsxs)(d,{children:[(0,i.jsx)(u.z,{onClick:l,disabled:!r,color:"secondary",children:"이전"}),(0,i.jsx)("div",{children:e}),(0,i.jsx)(u.z,{onClick:o,disabled:!t,color:"secondary",children:"다음"})]})}},3631:function(n,e,t){"use strict";t.d(e,{E:function(){return E}});var r=t(8009),i=t(353),o=t(6374),u=t(188),l=t(9914),d=t(1326),c=t(6854);let a=n=>"\n  @media (max-width: 768px) {\n    ".concat(n,"\n  }\n");var s=t(7376);t(6136);var f=t(2809);function m(){let n=(0,r._)(["\n  display: grid;\n  grid-template-columns: 200px 1fr;\n\n  ","\n"]);return m=function(){return n},n}function p(){let n=(0,r._)(["\n  padding: 1rem;\n  padding-top: 2rem;\n"]);return p=function(){return n},n}function g(){let n=(0,r._)(["\n  ","\n\n  ","\n"]);return g=function(){return n},n}function h(){let n=(0,r._)(["\n  padding: 3rem 1rem;\n  padding-top: 1rem;\n\n  ","\n"]);return h=function(){return n},n}function b(){let n=(0,r._)(["\n  display: block;\n  padding: 1rem 1.5rem;\n  color: #333;\n  margin: 0.75rem 0;\n\n  &:hover {\n    background-color: #f0f0f0;\n  }\n\n  &:first-of-type {\n    margin-top: 0;\n  }\n\n  ","\n"]);return b=function(){return n},n}function j(){let n=(0,r._)(["\n  padding: 1rem 2rem;\n  padding-top: 0;\n  color: #333;\n  margin: 1rem;\n  border-radius: 10px;\n  border: 1px solid #ddd;\n"]);return j=function(){return n},n}function x(){let n=(0,r._)(["\n  width: 35px;\n  height: 35px;\n  float: right;\n  display: none;\n  cursor: pointer;\n\n  ","\n"]);return x=function(){return n},n}function y(){let n=(0,r._)(["\n  font-size: 2rem;\n  margin: 2rem 0;\n"]);return y=function(){return n},n}function k(){let n=(0,r._)(["\n  width: auto;\n  height: 35px;\n"]);return k=function(){return n},n}let v=o.Z.div(m(),a("\n    grid-template-columns: 1fr;\n  ")),C=o.Z.header(p()),L=o.Z.aside(g(),a("\n    position: fixed;\n    top: 0;\n    right: 0;\n    background-color: rgba(0, 0, 0, 0.3);\n    width: 100%;\n    display: flex;\n    justify-content: flex-end;\n  "),n=>!n.opened&&a("\n      display: none;\n    ")),N=o.Z.nav(h(),a("\n    width: 50vw;\n    padding-top: 5rem;\n    background-color: white;\n    min-height: 100vh;\n  ")),w=(0,o.Z)(u.default)(b(),n=>n.selected&&"\n    color: #db929b;\n    font-weight: bold;\n  "),z=o.Z.main(j()),M=o.Z.img(x(),a("\n    display: block;\n  ")),Z=o.Z.h1(y()),S=o.Z.img(k()),A=[{title:"대시보드",href:"/"},{title:"악보 파일 관리",href:"/music-files/"},{title:"상품 관리",href:"/products/"},{title:"상품-악보 연결",href:"/music-file-by-product-relation/"},{title:"다운로드 링크 관리",href:"/download-links/"},{title:"기타 설정",href:"/configs/"}],_=n=>{let{children:e,title:t}=n,{removeToken:r}=(0,f.p)(),o=(0,l.usePathname)(),[a,s]=(0,d.useState)(!1),m=(0,d.useCallback)(()=>{s(n=>!n)},[]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(c.Ix,{}),(0,i.jsxs)(C,{children:[(0,i.jsx)(u.default,{href:"/",children:(0,i.jsx)(S,{src:"/logo.png"})}),(0,i.jsx)(M,{src:"data:image/svg+xml;base64,PHN2ZyBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjIiIHZpZXdCb3g9IjAgMCAyNCAyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtMjIgMTYuNzVjMC0uNDE0LS4zMzYtLjc1LS43NS0uNzVoLTE4LjVjLS40MTQgMC0uNzUuMzM2LS43NS43NXMuMzM2Ljc1Ljc1Ljc1aDE4LjVjLjQxNCAwIC43NS0uMzM2Ljc1LS43NXptMC01YzAtLjQxNC0uMzM2LS43NS0uNzUtLjc1aC0xOC41Yy0uNDE0IDAtLjc1LjMzNi0uNzUuNzVzLjMzNi43NS43NS43NWgxOC41Yy40MTQgMCAuNzUtLjMzNi43NS0uNzV6bTAtNWMwLS40MTQtLjMzNi0uNzUtLjc1LS43NWgtMTguNWMtLjQxNCAwLS43NS4zMzYtLjc1Ljc1cy4zMzYuNzUuNzUuNzVoMTguNWMuNDE0IDAgLjc1LS4zMzYuNzUtLjc1eiIgZmlsbC1ydWxlPSJub256ZXJvIi8+PC9zdmc+",onClick:m})]}),(0,i.jsxs)(v,{children:[(0,i.jsx)(L,{opened:a,onClick:m,children:(0,i.jsxs)(N,{children:[A.map(n=>(0,i.jsx)(w,{href:n.href,selected:o===n.href,children:n.title},n.title)),(0,i.jsx)(w,{href:"#",onClick:r,children:"로그아웃"})]})}),(0,i.jsxs)(z,{children:[(0,i.jsx)(Z,{children:t||"Untitled"}),e]})]})]})};function E(n,e){return function(t){return(0,i.jsx)(d.Suspense,{children:(0,i.jsx)(s.c,{children:(0,i.jsx)(_,{title:n,children:(0,i.jsx)(e,{...t})})})})}}},7376:function(n,e,t){"use strict";t.d(e,{CookieAuthUpdateWrapper:function(){return l},c:function(){return d}});var r=t(353),i=t(9914),o=t(1326),u=t(2809);let l=n=>{let{getTokenFromCookie:e}=(0,u.p)(),t=(0,i.usePathname)();return(0,o.useEffect)(()=>{e()},[t,e]),(0,r.jsx)(r.Fragment,{children:n.children})},d=n=>{let{token:e}=(0,u.p)(),t=(0,i.useRouter)();return(0,o.useEffect)(()=>{e||t.push("/login")},[t,e]),(0,r.jsx)(r.Fragment,{children:n.children})}},3260:function(n,e,t){"use strict";t.d(e,{z:function(){return o}});var r=t(8009);function i(){let n=(0,r._)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  ","\n\n  &:hover {\n    background-color: #c87f88;\n  }\n\n  &:disabled {\n    background-color: #e1e1e1;\n    color: #a1a1a1;\n    cursor: not-allowed;\n  }\n\n  ","\n"]);return i=function(){return n},n}let o=t(6374).Z.button(i(),"#db929b",n=>{let{fullWidth:e}=n;return e&&"width: 100%;"},n=>{let{color:e}=n;return"secondary"===e?"\n            background-color: #f1f1f1;\n            color: #333;\n        ":"danger"===e?"background-color: #f44336;":"warning"===e?"background-color: #ff9800;":void 0})},9621:function(n,e,t){"use strict";t.d(e,{X:function(){return o}});var r=t(8009);function i(){let n=(0,r._)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n\n  > input {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    height: 2.5rem;\n  }\n\n  > button {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    height: 2.5rem;\n  }\n"]);return i=function(){return n},n}let o=t(6374).Z.div(i())},6696:function(n,e,t){"use strict";t.d(e,{X:function(){return o}});var r=t(8009);function i(){let n=(0,r._)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 3rem 1fr 10rem;\n\n  ","\n\n  grid-gap: 1rem;\n  margin-bottom: 1rem;\n\n  > .buttons {\n    display: flex;\n    gap: 0.5rem;\n  }\n\n  > .id-field {\n    cursor: pointer;\n    color: skyblue;\n  }\n\n  ","\n"]);return i=function(){return n},n}let o=t(6374).Z.div(i(),n=>{let{gridTemplateColumns:e}=n;return e&&"\n          grid-template-columns: ".concat(e,";\n      ")},n=>{let{header:e}=n;return e&&"\n          font-weight: bold;\n          border-bottom: 1px solid #e1e1e1;\n          padding-bottom: 0.5rem;\n      "})},448:function(n,e,t){"use strict";t.d(e,{K:function(){return d},M:function(){return l}});var r=t(8009),i=t(6374);function o(){let n=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n"]);return o=function(){return n},n}function u(){let n=(0,r._)(["\n  width: 100%;\n  padding: 0.5rem;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 0.25rem;\n  margin-bottom: 1rem;\n  resize: vertical;\n"]);return u=function(){return n},n}let l=i.Z.input(o()),d=i.Z.textarea(u())},7623:function(n,e,t){"use strict";t.d(e,{Q:function(){return r}});let r="https://api.haeunserver.com/v1"},2487:function(n,e,t){"use strict";t.d(e,{_:function(){return u}});var r=t(7469),i=t(7623),o=t(2809);let u=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",{getHeader:t}=(0,o.p)();return(0,r.ZP)("".concat(i.Q).concat(n),async n=>{let r=await fetch(n,{headers:t()});if(!r.ok)throw Error("Failed to fetch");return"json"==e?r.json():r.text()})}},2809:function(n,e,t){"use strict";t.d(e,{p:function(){return i}});var r=t(4941);let i=(0,t(4354).U)((n,e)=>({token:r.Z.get("token")||null,getHeader:()=>({Authorization:"Bearer ".concat(e().token)}),setToken:e=>{r.Z.set("token",e,{expires:new Date(Date.now()+72e5)}),n({token:e})},getTokenFromCookie:()=>{n({token:r.Z.get("token")||null})},removeToken:()=>n({token:null})}))}},function(n){n.O(0,[418,35,463,188,469,529,254,615,744],function(){return n(n.s=7368)}),_N_E=n.O()}]);