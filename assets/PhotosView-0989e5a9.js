import{d as P,f as x,g as B,c as p,r as e,a as r,w as t,o,b as a,h as m,i,F as v}from"./index-3aa1179c.js";const S=P({__name:"PhotosView",setup(b){const{xs:f,sm:d,md:h}=x(),g=B(47),n=p(()=>h.value?3:d.value?4:f.value?12:2),l=p(()=>Math.floor(g.value*n.value/12));return(z,A)=>{const y=e("v-img"),k=e("v-lazy"),c=e("v-col"),u=e("v-row"),w=e("v-container");return o(),r(w,{fluid:"",class:"pt-0 mt-0"},{default:t(()=>[a(u,{class:"pt-0 mt-0"},{default:t(()=>[(o(!0),m(v,null,i(Array(12/n.value).keys(),_=>(o(),r(c,{key:`col${_}`,class:"ma-0 pa-0",cols:n.value},{default:t(()=>[(o(!0),m(v,null,i(Array(l.value).fill(_*l.value+1).map((s,C)=>s+C),s=>(o(),r(u,{key:s,"no-gutters":""},{default:t(()=>[a(c,null,{default:t(()=>[a(k,{"min-height":100,options:{threshold:.5},transition:"fade-transition",class:"pr-1 pb-1 pt-0 pl-0"},{default:t(()=>[a(y,{src:`../src/assets/photos/${s.toString().padStart(4,"0")}.jpg`},null,8,["src"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1032,["cols"]))),128))]),_:1})]),_:1})}}});export{S as default};
