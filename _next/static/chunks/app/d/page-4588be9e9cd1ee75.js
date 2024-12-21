(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{1099:function(n,e,t){Promise.resolve().then(t.bind(t,14))},14:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return j}});var r=t(8009),o=t(353),c=t(6374),i=t(9914),a=t(1326),l=t(6854);t(6136);var u=t(3260),s=t(7623),d=t(2487);function f(){let n=(0,r._)(["\n  text-align: center;\n  padding: 1rem;\n  padding-top: 5rem;\n\n  img {\n    width: 300px;\n    height: auto;\n    margin: 1rem auto;\n  }\n"]);return f=function(){return n},n}function g(){let n=(0,r._)(["\n  text-align: center;\n  padding: 3rem;\n  padding-top: 25vh;\n\n  img {\n    width: 300px;\n    height: auto;\n    margin: 1rem auto;\n  }\n"]);return g=function(){return n},n}let h=c.Z.div(f()),p=c.Z.div(g());function x(){let n=Array.from((0,i.useSearchParams)().keys())[0],{data:e,error:t,mutate:r,isLoading:c}=(0,d._)("/download-counter/".concat(n),"json"),f=(0,a.useCallback)(async()=>{if(!confirm("다운로드 회수를 차감하고 다운로드를 시작하시겠습니까?"))return;let e=l.Am.info("다운로드 중입니다. 잠시만 기다려주세요.",{autoClose:!1,isLoading:!0});try{let t=await fetch(s.Q+"/download-counter/download/".concat(n),{method:"POST"});if(!t.ok)throw Error("다운로드에 실패했습니다. 관리자에게 문의해주세요.");let{data:r,name:o,format:c}=await t.json(),i=await (async()=>{if("string"==typeof r)return r;let n="",t=0;for(let o of r){l.Am.update(e,{render:"다운로드 중입니다... ".concat((++t/r.length*100).toFixed(2),"%"),isLoading:!0});let c=await fetch("".concat(s.Q,"/file-chunk/").concat(o));if(!c.ok)throw Error("다운로드에 실패했습니다. 관리자에게 문의해주세요.");n+=await c.text()}return n})(),a=document.createElement("a"),u=new Blob([Uint8Array.from(atob(i),n=>n.charCodeAt(0))],{type:"application/".concat(c)}),d=URL.createObjectURL(u);a.href=d,a.download=o,a.click(),l.Am.update(e,{render:"다운로드가 완료되었습니다. 정상적으로 다운로드 되지 않았다면, 관리자에게 문의해주세요.",isLoading:!1,type:"success",autoClose:5e3})}catch(n){l.Am.update(e,{render:"다운로드에 실패했습니다. 관리자에게 문의해주세요.",isLoading:!1,type:"error"})}finally{r()}},[r,n]);return t?(0,o.jsxs)(h,{children:[(0,o.jsx)("img",{src:"/logo.png",alt:"logo"}),(0,o.jsx)("p",{children:"죄송합니다. 다운로드 링크가 만료되었거나 잘못된 링크입니다."})]}):c?(0,o.jsxs)(p,{children:[(0,o.jsx)(l.Ix,{}),(0,o.jsx)("img",{src:"/logo.png",alt:"logo"}),(0,o.jsx)("p",{children:"데이터를 불러오고 있습니다..."})]}):(0,o.jsxs)(p,{children:[(0,o.jsx)(l.Ix,{}),(0,o.jsx)("img",{src:"/logo.png",alt:"logo"}),(0,o.jsx)("p",{children:"구매해주셔서 감사합니다."}),(0,o.jsx)("p",{children:"아래 버튼을 누르면 다운로드가 진행됩니다."}),(0,o.jsx)("br",{}),(null==e?void 0:e.count)?(0,o.jsxs)("p",{children:["다운로드 유효 기한 : ",new Date((null==e?void 0:e.expireAt)||0).toLocaleString(),(0,o.jsx)("br",{}),"잔여 다운로드 횟수 : ",null==e?void 0:e.count]}):(0,o.jsx)("p",{children:"잔여 다운로드 회수가 모두 소진되었습니다."}),(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["다운로드 진행이 되지 않을 경우, 외부 브라우저에서 다시 시도해보시기 바랍니다.",(0,o.jsx)("br",{}),"상품을 잘 받으셨다면 네이버쇼핑에서 ‘구매확정’ 버튼을 눌러주세요."]}),(0,o.jsx)("br",{}),(null==e?void 0:e.count)?(0,o.jsx)(u.z,{onClick:f,children:"다운로드하기"}):null,(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("p",{children:"문제가 발생했을 경우, ‘카카오톡채널’, 혹은 ‘네이버톡톡’으로 문의 바랍니다."})]})}function j(){return(0,o.jsx)(a.Suspense,{children:(0,o.jsx)(x,{})})}},3260:function(n,e,t){"use strict";t.d(e,{z:function(){return c}});var r=t(8009);function o(){let n=(0,r._)(["\n  background-color: ",";\n  color: white;\n  border: none;\n  padding: 0.5rem 1rem;\n  border-radius: 0.25rem;\n  cursor: pointer;\n  transition: background-color 0.2s;\n\n  ","\n\n  &:hover {\n    background-color: #c87f88;\n  }\n\n  &:disabled {\n    background-color: #e1e1e1;\n    color: #a1a1a1;\n    cursor: not-allowed;\n  }\n\n  ","\n"]);return o=function(){return n},n}let c=t(6374).Z.button(o(),"#db929b",n=>{let{fullWidth:e}=n;return e&&"width: 100%;"},n=>{let{color:e}=n;return"secondary"===e?"\n            background-color: #f1f1f1;\n            color: #333;\n        ":"danger"===e?"background-color: #f44336;":"warning"===e?"background-color: #ff9800;":void 0})},7623:function(n,e,t){"use strict";t.d(e,{Q:function(){return r}});let r="https://api.haeunserver.com/v1"},2487:function(n,e,t){"use strict";t.d(e,{_:function(){return i}});var r=t(7469),o=t(7623),c=t(2809);let i=function(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"json",{getHeader:t}=(0,c.p)();return(0,r.ZP)("".concat(o.Q).concat(n),async n=>{let r=await fetch(n,{headers:t()});if(!r.ok)throw Error("Failed to fetch");return"json"==e?r.json():r.text()})}},2809:function(n,e,t){"use strict";t.d(e,{p:function(){return o}});var r=t(4941);let o=(0,t(4354).U)((n,e)=>({token:r.Z.get("token")||null,getHeader:()=>({Authorization:"Bearer ".concat(e().token)}),setToken:e=>{r.Z.set("token",e,{expires:new Date(Date.now()+72e5)}),n({token:e})},getTokenFromCookie:()=>{n({token:r.Z.get("token")||null})},removeToken:()=>n({token:null})}))}},function(n){n.O(0,[418,35,346,254,615,744],function(){return n(n.s=1099)}),_N_E=n.O()}]);