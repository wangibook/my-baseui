import{a,e as _,o as m,b as u,g as h,F as n,H as v,l as t,X as f}from"./@vue.e84e1286.js";import{p as c}from"./preview.b492b38a.js";import"./bus.f1893518.js";import"./mitt.550594b0.js";/* empty css                                                            */import"./index.ed4eb853.js";import"./vue-router.54876e93.js";const k={__name:"demo1",setup(s){const e=a("03:12:30"),r=d=>{console.log(d)};return(d,o)=>{const l=_("m-time-picker");return m(),u(l,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=i=>e.value=i),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",onOnChange:r},null,8,["modelValue"])}}},b={__name:"demo2",setup(s){const e=a("03:12:30");return(r,d)=>{const o=_("m-time-picker");return m(),u(o,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value=l),format:"HH\u65F6mm\u5206ss\u79D2",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])}}},V={__name:"demo3",setup(s){const e=a("03:12:30");return(r,d)=>{const o=_("m-time-picker");return m(),u(o,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value=l),disabled:"",placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4"},null,8,["modelValue"])}}},g={__name:"demo4",setup(s){const e=a(["03:12:30","05:24:35"]);return(r,d)=>{const o=_("m-time-picker");return m(),u(o,{type:"timerange",modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=l=>e.value=l),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4\u8303\u56F4"},null,8,["modelValue"])}}};const y={__name:"demo5",setup(s){const e=a("03:12:30"),r=a(["03:12:30","05:24:35"]),d=o=>{console.log(o)};return(o,l)=>{const i=_("m-time-picker");return m(),h(v,null,[n(i,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=p=>e.value=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4",confirm:"",onOnConfirm:d},null,8,["modelValue"]),n(i,{class:"time",type:"timerange",modelValue:r.value,"onUpdate:modelValue":l[1]||(l[1]=p=>r.value=p),placeholder:"\u8BF7\u9009\u62E9\u65F6\u95F4\u8303\u56F4",confirm:""},null,8,["modelValue"])],64)}}},N={class:"markdown-body"},x=t("h1",null,"TimePicker \u65F6\u95F4\u9009\u62E9\u5668",-1),H=t("h4",null,"\u7528\u4E8E\u9009\u62E9\u65F6\u95F4",-1),U=t("br",null,null,-1),C=t("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),$={class:"source"},B=t("h2",null,"\u65F6\u95F4\u683C\u5F0F",-1),P=t("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 format \u53EF\u4EE5\u6539\u53D8\u65F6\u95F4\u7684\u663E\u793A\u683C\u5F0F\u3002",-1),T=t("h4",null,"\u6CE8\u610F\uFF0Cformat \u53EA\u662F\u6539\u53D8\u663E\u793A\u7684\u683C\u5F0F\uFF0C\u5E76\u975E\u6539\u53D8 value \u503C\u3002",-1),w={class:"source"},E=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),F=t("h4",null,"\u53EF\u4EE5\u8BBE\u7F6E disabled \u5C5E\u6027\u6765\u5B9E\u73B0\u7981\u7528\u72B6\u6001",-1),O={class:"source"},A=t("h2",null,"\u65F6\u95F4\u8303\u56F4",-1),S=t("h4",null,"\u8BBE\u7F6Etype \u4E3A timerange \u53EF\u5F00\u542F\u65F6\u95F4\u8303\u56F4\u9009\u62E9",-1),X={class:"source"},j=t("h2",null,"\u5E26\u6709\u786E\u8BA4\u64CD\u4F5C",-1),q=t("h4",null,"\u8BBE\u7F6E\u5C5E\u6027 confirm\uFF0C\u9009\u62E9\u5668\u4F1A\u6709\u6E05\u7A7A\u548C\u786E\u5B9A\u6309\u94AE\u3002\u786E\u8BA4\u6309\u94AE\u5E76\u6CA1\u6709\u5F71\u54CD\u65F6\u95F4\u7684\u6B63\u5E38\u9009\u62E9\u3002",-1),z={class:"source"},D=f("<br><h2>TimePicker Attributes</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / array</td><td>\u2014</td><td>\u2014</td></tr><tr><td>type</td><td>\u7C7B\u578B\uFF0C\u652F\u6301\u9009\u62E9\u5355\u4E2A\u65F6\u95F4\u6216\u8005\u9009\u62E9\u65F6\u95F4\u8303\u56F4</td><td>string</td><td>time / timerange</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u9009\u62E9\u65F6\u7684\u5360\u4F4D\u7B26</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>readonly</td><td>\u5B8C\u5168\u53EA\u8BFB\uFF0C\u5F00\u542F\u540E\u4E0D\u4F1A\u5F39\u51FA\u9009\u62E9\u5668</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>format</td><td>\u65F6\u95F4\u683C\u5F0F\u5316</td><td>string</td><td>\u5C0F\u65F6\uFF1A<code>HH</code>\uFF0C\u5206\uFF1A<code>mm</code>\uFF0C\u79D2\uFF1A<code>ss</code></td><td>\u2018HH:mm:ss\u2019</td></tr><tr><td>clearable</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>\u2014</td><td>true</td></tr><tr><td>separator</td><td>\u9009\u62E9\u8303\u56F4\u65F6\u7684\u5206\u9694\u7B26</td><td>string</td><td>\u2014</td><td>\u2018-\u2019</td></tr></tbody></table><br><h2>TimePicker Events</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th></tr></thead><tbody><tr><td>on-change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-confirm</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u65F6\u89E6\u53D1</td><td>\u683C\u5F0F\u5316\u540E\u7684\u65F6\u95F4</td></tr><tr><td>on-clear</td><td>\u5728\u6E05\u7A7A\u65F6\u95F4\u65F6\u89E6\u53D1</td><td>\u2014</td></tr></tbody></table>",6),R={__name:"doc",setup(s,{expose:e}){return e({frontmatter:{}}),(d,o)=>(m(),h("div",N,[x,H,U,C,t("div",$,[n(k)]),n(c,{compName:"time-picker",demoName:"demo1"}),B,P,T,t("div",w,[n(b)]),n(c,{compName:"time-picker",demoName:"demo2"}),E,F,t("div",O,[n(V)]),n(c,{compName:"time-picker",demoName:"demo3"}),A,S,t("div",X,[n(g)]),n(c,{compName:"time-picker",demoName:"demo4"}),j,q,t("div",z,[n(y)]),n(c,{compName:"time-picker",demoName:"demo5"}),D]))}};export{R as default};
