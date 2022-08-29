import{a as c,e as u,o as n,b as _,g as i,l as t,F as a,W as p}from"./@vue.703f3de3.js";import{p as m}from"./preview.b941369a.js";/* empty css                                                            */import"./index.49ed0c4d.js";import"./vue-router.ebee86ab.js";const b={__name:"demo1",setup(s){const e=c(""),l=d=>{console.log(d)};return(d,o)=>{const r=u("m-textarea");return n(),_(r,{modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=h=>e.value=h),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",onInput:l},null,8,["modelValue"])}}},x={__name:"demo2",setup(s){const e=c("");return(l,d)=>{const o=u("m-textarea");return n(),_(o,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=r=>e.value=r),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",disabled:""},null,8,["modelValue"])}}},v={__name:"demo3",setup(s){const e=c("");return(l,d)=>{const o=u("m-textarea");return n(),_(o,{modelValue:e.value,"onUpdate:modelValue":d[0]||(d[0]=r=>e.value=r),placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",maxlength:100,"show-word-limit":""},null,8,["modelValue"])}}},f={class:"markdown-body"},V=t("h1",null,"Textarea \u6587\u672C\u57DF",-1),g=t("h4",null,"\u7528\u4E8E\u6BB5\u843D\u6587\u672C\u7684\u586B\u5199\u6216\u8F93\u5165",-1),w=t("br",null,null,-1),N=t("h2",null,"\u57FA\u672C\u4F7F\u7528",-1),y=t("h4",null,"Textarea \u6587\u672C\u57DF\u57FA\u672C\u4F7F\u7528",-1),I={class:"source"},k=t("h2",null,"\u7981\u7528\u72B6\u6001",-1),B=t("h4",null,"\u901A\u8FC7 disabled \u5C5E\u6027\u6307\u5B9A\u662F\u5426\u7981\u7528",-1),E={class:"source"},U=t("h2",null,"\u9650\u5236\u957F\u5EA6",-1),$=t("h4",null,"\u4F7F\u7528 maxlength \u5C5E\u6027\u6765\u63A7\u5236\u8F93\u5165\u6700\u5927\u5B57\u6570, \u5141\u8BB8\u901A\u8FC7\u8BBE\u7F6E show-word-limit \u5230 true \u6765\u663E\u793A\u5269\u4F59\u5B57\u6570",-1),T={class:"source"},A=p("<h2>Attributes \u53C2\u6570</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u53EF\u9009\u503C</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>value / v-model</td><td>\u7ED1\u5B9A\u503C</td><td>string / number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C</td><td>string</td><td>\u2014</td><td>\u2014</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>rows</td><td>textarea\u53EF\u89C1\u533A\u57DF\u9AD8\u5EA6</td><td>number</td><td>\u2014</td><td>4</td></tr><tr><td>cols</td><td>textarea\u53EF\u89C1\u533A\u57DF\u5BBD\u5EA6</td><td>number</td><td>\u2014</td><td>50</td></tr><tr><td>maxlength</td><td>\u6587\u672C\u533A\u57DF\u7684\u6700\u5927\u5B57\u7B26\u6570</td><td>number</td><td>\u2014</td><td>\u2014</td></tr><tr><td>show-word-limit</td><td>\u662F\u5426\u663E\u793A\u8F93\u5165\u5B57\u6570\u7EDF\u8BA1</td><td>boolean</td><td>\u2014</td><td>false</td></tr><tr><td>readonly</td><td>\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB</td><td>boolean</td><td>\u2014</td><td>false</td></tr></tbody></table><h2>Events \u4E8B\u4EF6</h2><table><thead><tr><th>\u4E8B\u4EF6\u540D</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u793A\u4F8B</th></tr></thead><tbody><tr><td>input</td><td>\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1</td><td>(value: string | number)</td><td>input=(e)=&gt;{console.log(e)}</td></tr><tr><td>blur</td><td>\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td><td>blur=(e)=&gt;{console.log(e)}</td></tr><tr><td>focus</td><td>\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1</td><td>(event: Event)</td><td>focus=(e)=&gt;{console.log(e)}</td></tr></tbody></table><br>",5),q={__name:"doc",setup(s,{expose:e}){return e({frontmatter:{}}),(d,o)=>(n(),i("div",f,[V,g,w,N,y,t("div",I,[a(b)]),a(m,{compName:"textarea",demoName:"demo1"}),k,B,t("div",E,[a(x)]),a(m,{compName:"textarea",demoName:"demo2"}),U,$,t("div",T,[a(v)]),a(m,{compName:"textarea",demoName:"demo3"}),A]))}};export{q as default};
