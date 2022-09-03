import{a as m,e as s,o as n,b as i,G as b,g as _,I as h,F as a,H as O,l as o,X as f}from"./@vue.e84e1286.js";import{p as v}from"./preview.b492b38a.js";import"./bus.f1893518.js";import"./mitt.550594b0.js";/* empty css                                                            */import"./index.ed4eb853.js";import"./vue-router.54876e93.js";const y={__name:"demo1",setup(p){const t=m(""),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2"},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"}],c=l=>{console.log(l)};return(l,u)=>{const r=s("m-option"),e=s("m-select");return n(),i(e,{modelValue:t.value,"onUpdate:modelValue":u[0]||(u[0]=V=>t.value=V),onChange:c},{default:b(()=>[(n(),_(O,null,h(d,V=>a(r,{key:V.value,label:V.label,value:V.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}},N={__name:"demo2",setup(p){const t=m(""),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2"},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"}];return(c,l)=>{const u=s("m-option"),r=s("m-select");return n(),i(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),disabled:""},{default:b(()=>[(n(),_(O,null,h(d,e=>a(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}},g={__name:"demo3",setup(p){const t=m(""),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2",disabled:!0},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"}];return(c,l)=>{const u=s("m-option"),r=s("m-select");return n(),i(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e)},{default:b(()=>[(n(),_(O,null,h(d,e=>a(u,{key:e.value,label:e.label,value:e.value,disabled:e.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])}}},k={__name:"demo4",setup(p){const t=m(""),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2"},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"}];return(c,l)=>{const u=s("m-option"),r=s("m-select");return n(),i(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),clearable:""},{default:b(()=>[(n(),_(O,null,h(d,e=>a(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}},x={__name:"demo5",setup(p){const t=m([]),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2"},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"}];return(c,l)=>{const u=s("m-option"),r=s("m-select");return n(),i(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),multiple:""},{default:b(()=>[(n(),_(O,null,h(d,e=>a(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}},U={__name:"demo6",setup(p){const t=m(""),d=[{value:"value1",label:"Option1"},{value:"value2",label:"Option2"},{value:"value3",label:"Option3"},{value:"value4",label:"Option4"},{value:"value5",label:"Option5"},{value:"value6",label:"Option6"},{value:"value7",label:"Option7"},{value:"value8",label:"Option8"},{value:"value9",label:"Option9"}];return(c,l)=>{const u=s("m-option"),r=s("m-select");return n(),i(r,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=e=>t.value=e),searchable:""},{default:b(()=>[(n(),_(O,null,h(d,e=>a(u,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])}}},$={class:"markdown-body"},B=o("h1",null,"Select \u4E0B\u62C9\u6846",-1),C=o("h4",null,"\u5F53\u9009\u9879\u8FC7\u591A\u65F6\uFF0C\u4F7F\u7528\u4E0B\u62C9\u83DC\u5355\u5C55\u793A\u5E76\u9009\u62E9\u5185\u5BB9",-1),w={class:"source"},A=o("h2",null,"\u7981\u7528\u72B6\u6001",-1),E=o("h4",null,"\u53EF\u4EE5\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u5B9E\u73B0\u7981\u7528\u72B6\u6001",-1),F={class:"source"},S=o("h2",null,"\u6709\u7981\u7528\u9009\u9879",-1),j=o("h4",null,"\u53EF\u4EE5\u9488\u5BF9 options \u4E0B\u67D0\u4E2A\u9009\u9879\u6765\u6DFB\u52A0 disabled \u5C5E\u6027\u5B9E\u73B0\u7981\u7528\u9009\u9879",-1),G={class:"source"},H=o("h2",null,"\u53EF\u6E05\u7A7A\u5355\u9009",-1),I=o("h4",null,"\u5305\u542B\u6E05\u7A7A\u6309\u94AE\uFF0C\u53EF\u5C06\u9009\u62E9\u5668\u6E05\u7A7A\u4E3A\u521D\u59CB\u72B6\u6001",-1),L={class:"source"},X=o("h2",null,"\u57FA\u7840\u591A\u9009",-1),q=o("h4",null,"\u901A\u8FC7\u8BBE\u7F6E multiple \u5C5E\u6027\u6765\u5F00\u542F\u591A\u9009",-1),z={class:"source"},D=o("h2",null,"\u53EF\u641C\u7D22",-1),J=o("h4",null,"\u53EF\u4EE5\u5229\u7528\u641C\u7D22\u529F\u80FD\u5FEB\u901F\u67E5\u627E\u9009\u9879\uFF0C\u901A\u8FC7\u8BBE\u7F6E searchable \u5C5E\u6027\u6765\u5F00\u542F",-1),K={class:"source"},M=f("<br><h2>Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u4E0B\u62C9\u6846\u7ED1\u5B9A\u503C\uFF0C\u5F00\u542F\u591A\u9009\u65F6\u7C7B\u578B\u4E3Aarray</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u8BF7\u9009\u62E9</td></tr><tr><td>multiple</td><td>\u662F\u5426\u591A\u9009</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>clearable</td><td>\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>searchable</td><td>\u662F\u5426\u5F00\u542F\u8FC7\u6EE4\u641C\u7D22</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>options</td><td>\u4E0B\u62C9\u6846\u6570\u636E\u914D\u7F6E</td><td>array</td><td>\u2014</td><td>[]</td></tr></tbody></table><br><h2>Option Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value</td><td>\u9009\u9879\u7684\u503C</td><td>string/number/object</td><td>\u2014</td><td>\u2014</td></tr><tr><td>label</td><td>\u9009\u9879\u7684\u6807\u7B7E</td><td>string/number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528\u8BE5\u9009\u9879</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><br><h2>Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>change</td><td>\u4E0B\u62C9\u6846\u9009\u4E2D\u4E8B\u4EF6</td><td>\u2014</td><td>change = (item) =&gt;{console.log(item)}</td></tr></tbody></table>",9),ee={__name:"doc",setup(p,{expose:t}){return t({frontmatter:{}}),(c,l)=>(n(),_("div",$,[B,C,o("div",w,[a(y)]),a(v,{compName:"select",demoName:"demo1"}),A,E,o("div",F,[a(N)]),a(v,{compName:"select",demoName:"demo2"}),S,j,o("div",G,[a(g)]),a(v,{compName:"select",demoName:"demo3"}),H,I,o("div",L,[a(k)]),a(v,{compName:"select",demoName:"demo4"}),X,q,o("div",z,[a(x)]),a(v,{compName:"select",demoName:"demo5"}),D,J,o("div",K,[a(U)]),a(v,{compName:"select",demoName:"demo6"}),M]))}};export{ee as default};
