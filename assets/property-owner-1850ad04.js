import"./index-b3f50da9.js";import"./elements-7fcf5525.js";import{j as e}from"./app-1088c2df.js";const A=d=>{var n,a,i,m,s,t,u,g,b,_,c,o,M,f;if(!e(d)||!e((a=(n=d==null?void 0:d._embedded)==null?void 0:n.vendor)==null?void 0:a.related)&&!e((m=(i=d==null?void 0:d._embedded)==null?void 0:i.landlord)==null?void 0:m.related))return null;const{marketingMode:l}=d;return l&&d._embedded?["selling","sellingAndLetting"].includes(l)?{role:"Vendor",data:(s=d._embedded)==null?void 0:s.vendor,primaryContact:e((u=(t=d._embedded)==null?void 0:t.vendor)==null?void 0:u.related)?(b=(g=d._embedded)==null?void 0:g.vendor)==null?void 0:b.related[0]:null,hasMultipleMode:["sellingAndLetting"].includes(l)}:{role:"Landlord",data:(_=d._embedded)==null?void 0:_.landlord,primaryContact:e((o=(c=d._embedded)==null?void 0:c.landlord)==null?void 0:o.related)?(f=(M=d._embedded)==null?void 0:M.landlord)==null?void 0:f.related[0]:null,hasMultipleMode:["sellingAndLetting"].includes(l)}:null};export{A as g};
