import{Q as s,U as t}from"./url-ce1d32f5.js";import{a as u,b as r}from"./app-1088c2df.js";const h=(e,a)=>u({fetchWhenTrue:[e],queryKey:s.COMPANY.single(e),...a,path:`${t.COMPANIES}/${e}`}),m=e=>r({...e,method:"GET",path:t.COMPANIES}),l=(e,a)=>r({...a,method:"GET",path:`${t.COMPANIES}/${e}`}),o=(e,a)=>r({...a,method:"PATCH",path:`${t.COMPANIES}/${e}`}),C=(e,a)=>u({fetchWhenTrue:[e],queryKey:s.COMPANY.relationships(e,a==null?void 0:a.queryParams),...a,path:`${t.COMPANIES}/${e}/relationships`});export{l as a,o as b,m as c,C as d,h as u};
