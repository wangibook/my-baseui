import{_ as $}from"./index.9a95b8b9.js";import{b as _,o as n,g as c,F as t,G as o,H as u,D as l,a as f,I as y,e as g,x as v,U as V,n as z,l as s,R as B}from"./@vue.6b428759.js";import{p}from"./preview.a37208be.js";import"./vue-router.114b58e5.js";/* empty css                                                            */const I={},D=l("\u6807\u7B7E\u4E00"),K=l("\u6807\u7B7E\u4E8C"),R=l("\u6807\u7B7E\u4E09"),E=l("\u6807\u7B7E\u56DB"),F=l("\u6807\u7B7E\u4E94"),S=l("\u6807\u7B7E\u516D");function U(m,d){const e=_("m-tag");return n(),c(u,null,[t(e,null,{default:o(()=>[D]),_:1}),t(e,{type:"success"},{default:o(()=>[K]),_:1}),t(e,{type:"info"},{default:o(()=>[R]),_:1}),t(e,{type:"warning"},{default:o(()=>[E]),_:1}),t(e,{type:"danger"},{default:o(()=>[F]),_:1}),t(e,{bgColor:"#42B983",color:"#fff"},{default:o(()=>[S]),_:1})],64)}var A=$(I,[["render",U]]);const G={},H=l("\u6807\u7B7E\u4E00"),L=l("\u6807\u7B7E\u4E8C"),O=l("\u6807\u7B7E\u4E09"),P=l("\u6807\u7B7E\u56DB"),j=l("\u6807\u7B7E\u4E94");function q(m,d){const e=_("m-tag");return n(),c(u,null,[t(e,{closable:""},{default:o(()=>[H]),_:1}),t(e,{type:"success",closable:""},{default:o(()=>[L]),_:1}),t(e,{type:"info",closable:""},{default:o(()=>[O]),_:1}),t(e,{type:"warning",closable:""},{default:o(()=>[P]),_:1}),t(e,{type:"danger",closable:""},{default:o(()=>[j]),_:1})],64)}var J=$(G,[["render",q]]);const M=l("+ New Tag"),Q={__name:"demo3",setup(m){const d=f(""),e=f(["\u6807\u7B7E\u4E00","\u6807\u7B7E\u4E8C","\u6807\u7B7E\u4E09"]),r=f(!1),i=f(null),b=w=>{e.value.splice(e.value.indexOf(w),1)},a=()=>{r.value=!0,z(()=>{console.log(i.value)})},k=()=>{d.value&&e.value.push(d.value),r.value=!1,d.value=""};return(w,N)=>{const x=_("m-tag"),C=_("m-input"),T=_("m-button");return n(),c(u,null,[(n(!0),c(u,null,y(e.value,h=>(n(),g(x,{key:h,closable:"",onClose:Bt=>b(h)},{default:o(()=>[l(v(h),1)]),_:2},1032,["onClose"]))),128)),r.value?(n(),g(C,{key:0,class:"input-new-tag",ref_key:"tagInputRef",ref:i,modelValue:d.value,"onUpdate:modelValue":N[0]||(N[0]=h=>d.value=h),size:"small",autofocus:"",onKeyup:V(k,["enter"]),onBlur:k},null,8,["modelValue","onKeyup"])):(n(),g(T,{key:1,class:"button-new-tag",size:"small",onClick:a},{default:o(()=>[M]),_:1}))],64)}}},W={},X=l("\u9ED8\u8BA4\u6807\u7B7E"),Y=l("\u4E2D\u578B\u6807\u7B7E"),Z=l("\u5C0F\u578B\u6807\u7B7E"),tt=l("\u9ED8\u8BA4\u6807\u7B7E"),et=l("\u4E2D\u578B\u6807\u7B7E"),ot=l("\u5C0F\u578B\u6807\u7B7E");function st(m,d){const e=_("m-tag"),r=_("m-row");return n(),c(u,null,[t(r,null,{default:o(()=>[t(e,null,{default:o(()=>[X]),_:1}),t(e,{size:"medium"},{default:o(()=>[Y]),_:1}),t(e,{size:"small"},{default:o(()=>[Z]),_:1})]),_:1}),t(r,null,{default:o(()=>[t(e,{closable:""},{default:o(()=>[tt]),_:1}),t(e,{size:"medium",closable:""},{default:o(()=>[et]),_:1}),t(e,{size:"small",closable:""},{default:o(()=>[ot]),_:1})]),_:1})],64)}var lt=$(W,[["render",st]]);const nt=s("span",{class:"mr-10 l-hegight"},"Dark",-1),dt=s("span",{class:"mr-10 l-hegight"},"Plain",-1),at={__name:"demo5",setup(m){const d=f([{type:"",label:"\u6807\u7B7E\u4E00"},{type:"success",label:"\u6807\u7B7E\u4E8C"},{type:"info",label:"\u6807\u7B7E\u4E09"},{type:"danger",label:"\u6807\u7B7E\u56DB"},{type:"warning",label:"\u6807\u7B7E\u4E94"}]);return(e,r)=>{const i=_("m-tag"),b=_("m-row");return n(),c(u,null,[t(b,null,{default:o(()=>[nt,(n(!0),c(u,null,y(d.value,a=>(n(),g(i,{key:a.label,type:a.type,effect:"dark"},{default:o(()=>[l(v(a.label),1)]),_:2},1032,["type"]))),128))]),_:1}),t(b,null,{default:o(()=>[dt,(n(!0),c(u,null,y(d.value,a=>(n(),g(i,{key:a.label,type:a.type,effect:"plain"},{default:o(()=>[l(v(a.label),1)]),_:2},1032,["type"]))),128))]),_:1})],64)}}},_t={class:"markdown-body"},ct=s("h1",null,"Tag \u6807\u7B7E",-1),rt=s("h4",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9",-1),ut=s("br",null,null,-1),it=s("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),mt=s("p",null,"\u7531type\u5C5E\u6027\u6765\u9009\u62E9tag\u7684\u7C7B\u578B\uFF0C\u4E5F\u53EF\u4EE5\u901A\u8FC7bgColor\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u80CC\u666F\u989C\u8272\uFF0Ccolor\u5C5E\u6027\u6765\u81EA\u5B9A\u4E49\u6587\u5B57\u989C\u8272",-1),ht={class:"source"},pt=s("h2",null,"\u53EF\u79FB\u9664\u6807\u7B7E",-1),ft=s("h4",null,"\u8BBE\u7F6E closable \u5C5E\u6027\u53EF\u4EE5\u5B9A\u4E49\u4E00\u4E2A\u6807\u7B7E\u662F\u5426\u53EF\u79FB\u9664",-1),gt={class:"source"},bt=s("h2",null,"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E",-1),yt=s("h4",null,"\u52A8\u6001\u7F16\u8F91\u6807\u7B7E\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FB\u6807\u7B7E\u5173\u95ED\u6309\u94AE\u540E\u89E6\u53D1\u7684 close \u4E8B\u4EF6\u6765\u5B9E\u73B0",-1),vt={class:"source"},$t=s("h2",null,"\u4E0D\u540C\u5C3A\u5BF8",-1),kt=s("h4",null,"Tag \u7EC4\u4EF6\u63D0\u4F9B\u9664\u4E86\u9ED8\u8BA4\u503C\u4EE5\u5916\u7684\u4E09\u79CD\u5C3A\u5BF8\uFF0C\u53EF\u4EE5\u5728\u4E0D\u540C\u573A\u666F\u4E0B\u9009\u62E9\u5408\u9002\u7684\u6309\u94AE\u5C3A\u5BF8",-1),wt=s("p",null,"\u4F7F\u7528 size \u5C5E\u6027\u6765\u8BBE\u7F6E\u989D\u5916\u5C3A\u5BF8, \u53EF\u9009\u503C\u5305\u62EC default\uFF0Cmedium \u6216 small.",-1),Nt={class:"source"},xt=s("h2",null,"\u4E0D\u540C\u4E3B\u9898",-1),Ct=s("h4",null,"Tag \u7EC4\u4EF6\u63D0\u4F9B\u4E86\u4E09\u4E2A\u4E0D\u540C\u7684\u4E3B\u9898\uFF1Adark\u3001light \u548C plain",-1),Tt=s("p",null,"\u901A\u8FC7\u8BBE\u7F6Eeffect\u5C5E\u6027\u6765\u6539\u53D8\u4E3B\u9898\uFF0C\u9ED8\u8BA4\u4E3A light",-1),Vt={class:"source"},zt=B("<h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>type</td><td>\u7C7B\u578B</td><td>string</td><td>success/info/warning/danger</td><td>\u2014</td></tr><tr><td>closable</td><td>\u662F\u5426\u53EF\u5173\u95ED</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>bgColor</td><td>\u80CC\u666F\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>color</td><td>\u6587\u5B57\u8272</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>size</td><td>\u5C3A\u5BF8</td><td>string</td><td>default / medium / small</td><td>\u2014</td></tr><tr><td>effect</td><td>\u4E3B\u9898</td><td>string</td><td>dark / light / plain</td><td>light</td></tr></tbody></table><h3>Events</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>click</td><td>\u70B9\u51FB Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr><tr><td>close</td><td>\u5173\u95ED Tag \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6</td><td>\u2014</td></tr></tbody></table><br>",5),Ft={__name:"doc",setup(m,{expose:d}){return d({frontmatter:{}}),(r,i)=>(n(),c("div",_t,[ct,rt,ut,it,mt,s("div",ht,[t(A)]),t(p,{compName:"tag",demoName:"demo1"}),pt,ft,s("div",gt,[t(J)]),t(p,{compName:"tag",demoName:"demo2"}),bt,yt,s("div",vt,[t(Q)]),t(p,{compName:"tag",demoName:"demo3"}),$t,kt,wt,s("div",Nt,[t(lt)]),t(p,{compName:"tag",demoName:"demo4"}),xt,Ct,Tt,s("div",Vt,[t(at)]),t(p,{compName:"tag",demoName:"demo5"}),zt]))}};export{Ft as default};
