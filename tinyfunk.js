const{assign:e}=Object,t=(e,n)=>e<1?n:(...r)=>{const c=e-r.length;return c>0?t(c,n.bind(null,...r)):n.apply(null,r)},n=t(2,t),r=e=>n(e.length,e),c=r((e,t)=>e+t),l=r((e,t)=>e.apply(null,t)),o=r((t,n,r)=>{const c=e({},r);return c[t]=n,c}),s=r(([e,...t],n,r)=>o(e,t.length?s(t,n,r[e]):n,r)),p=(...e)=>x(...e.reverse()),a=r((e,t)=>e.concat(t)),u=r((e,t)=>p(l(e),b(t))),h=r((t,n)=>{const r=e({},n);return delete r[t],r}),d=r(([e,...t],n)=>e?null==n[e]?n:t.length?o(e,d(t,n[e]),n):h(e,n):n),i=r((e,t,n)=>{let r=e[n]||y;return"object"==typeof r&&(r=g(r)),r(t)}),g=r((e,t)=>f(i(e),t)),m=r((e,t,n)=>r(e)(n,t)),y=e=>e,b=r((e,t)=>j(k(t),e)),j=r((e,t)=>t.map(e)),f=r((e,t)=>{const n={};for(let r in t)n[r]=e(t[r],r);return n}),v=r((t,n)=>e({},t,n)),O=r(([e,...t],n)=>t.length?O(t,n[e]):n[e]),x=(...e)=>m(z(k))(e),P=r((e,t)=>t[e]),z=r((e,t,n)=>n.reduce(e,t)),N=r((e,t,n)=>n.replace(e,t)),k=r((e,t)=>t(e)),q=r((e,t,n)=>e(n)?n:t(n)),w=r((e,t)=>{const n={};for(let r=0;r<e.length;r++)n[e[r]]=t[r];return n});module.exports={add:c,apply:l,assoc:o,assocPath:s,compose:p,concat:a,constant:e=>()=>e,converge:u,curry:r,curryN:n,dissoc:h,dissocPath:d,evolve:g,flip:m,identity:y,juxt:b,map:j,mapObj:f,match:(e,t)=>t.match(e)||[],merge:v,path:O,pipe:x,prop:P,reduce:z,replace:N,thrush:k,unless:q,zipObj:w};
