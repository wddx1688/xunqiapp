import{d as f,u as C,r as l,o as a,c as t,b as s,w as $,v as A,F as p,h as v,n as m,t as h,e as x,a as b,f as I,p as N,g as S}from"./index-d6e7f6d7.js";import{_ as V}from"./souicon-ce258d6b.js";import{g as B}from"./api-5c6fbd67.js";import{_ as g}from"./_plugin-vue_export-helper-c27b6911.js";const q=n=>(N("data-v-f3848068"),n=n(),S(),n),D={class:"boxw"},F={class:"searchbox"},M={class:"inputbox"},z={class:"search"},E=q(()=>s("img",{class:"searchicon",src:V,alt:""},null,-1)),L={class:"topnavbox"},R=["onClick"],T={key:0,class:"biaoqian"},U=["onClick"],j={key:0,class:"biaoqian"},G=f({__name:"mobile",setup(n){const r=C(),i=c=>{r.push(c)},d=l(""),o=l("A1"),w=l([{id:"A1",name:"全部"},{id:"A2",name:"热门"},{id:"A3",name:"必备"},{id:"A4",name:"下载榜单"}]),u=l([]);return(async()=>{let c=await B({});c.status==200&&(u.value=c.data)})(),(c,_)=>{const k=I("router-view");return a(),t("div",D,[s("div",F,[s("div",M,[$(s("input",{class:"input","onUpdate:modelValue":_[0]||(_[0]=e=>d.value=e),type:"text",placeholder:"请输入关键词"},null,512),[[A,d.value]]),s("div",z,[E,s("span",{onClick:_[1]||(_[1]=e=>i("/search/"+d.value))},"搜索")])])]),s("div",L,[(a(!0),t(p,null,v(w.value,e=>(a(),t("div",{class:"nav_list",onClick:y=>(o.value=e.id,i("/web/home/"+e.id))},[s("p",{class:m({name:!0,changename:o.value==e.id})},h(e.name),3),o.value==e.id?(a(),t("div",T)):x("",!0)],8,R))),256)),(a(!0),t(p,null,v(u.value,e=>(a(),t("div",{class:"nav_list",onClick:y=>(o.value=e.id,i("/web/home/N/"+e.id))},[s("p",{class:m({name:!0,changename:o.value==e.id})},h(e.n_name),3),o.value==e.id?(a(),t("div",j)):x("",!0)],8,U))),256))]),b(k,{class:"wordx"})])}}});const H=g(G,[["__scopeId","data-v-f3848068"]]),J={class:"boxw"},K={class:"box-n"},O=f({__name:"index",setup(n){return(r,i)=>(a(),t("div",J,[s("div",K,[b(H)])]))}});const Z=g(O,[["__scopeId","data-v-d357a30d"]]);export{Z as default};
