import{k as v,r,a as f,o as g,b as o,w as p,v as c,d as t,i as _,I as k}from"./DwQM1VAH.js";import{a as w,_ as y}from"./B_zh7J8N.js";import{_ as B}from"./BhvWwTu8.js";const D=""+new URL("group.Bw8zxEXX.png",import.meta.url).href,E={class:"img-container"},L=["src"],S={__name:"img-demo",props:{demo:{type:String,default:""},mask:{type:String,default:""}},setup(m){const e=m,a=r(!0),l=r(!1),s=u=>{const d=u.target.closest(".img-container");if(d){const i=d.querySelector(".demo-img");i&&(a.value=!1,l.value=!0,i.src=e.demo,i.addEventListener("load",()=>{l.value=!1}))}};return(u,n)=>(g(),f("div",E,[o("img",{class:"demo-img",src:e.mask,alt:"",draggable:"false"},null,8,L),p(_(t(k),{size:"36"},null,512),[[c,t(l)]]),p(o("div",{onClick:s,class:"demo-handler"},n[0]||(n[0]=[o("span",null,"DEMO GIF",-1)]),512),[[c,t(a)]])]))}},x=v(S,[["__scopeId","data-v-16afb961"]]),I=""+new URL("auto.CCdA40IM.gif",import.meta.url).href,b=""+new URL("auto-mask.DBbilWQD.jpg",import.meta.url).href,M={class:"rules-container"},R={__name:"rules",setup(m){const e=r(I),a=r(b);return(l,s)=>(g(),f("div",M,[s[0]||(s[0]=o("h2",null,"自定义分组规则说明",-1)),s[1]||(s[1]=o("div",{class:"desc"},[o("p",null,"自定义分组规则，由分组名称和多个分组规则组成"),o("p",null,"分组名称尽量简短"),o("p",null,"规则可以是一个域名，也可以是一个关键词、一段路径等等。")],-1)),s[2]||(s[2]=o("img",{class:"demo long",src:D,alt:""},null,-1)),_(x,{demo:t(e),mask:t(a)},null,8,["demo","mask"]),s[3]||(s[3]=o("video",{class:"demo-video",src:w,muted:"",loop:"",autoplay:""},null,-1)),s[4]||(s[4]=o("video",{class:"demo-video",src:y,muted:"",loop:"",autoplay:""},null,-1)),s[5]||(s[5]=o("video",{class:"demo-video",src:B,muted:"",loop:"",autoplay:""},null,-1))]))}};export{R as default};
