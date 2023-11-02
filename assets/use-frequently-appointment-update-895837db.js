import"./elements-7fcf5525.js";import"./index-b3f50da9.js";import{d as o,P as d,a1 as I,q as R,ab as A,j as P,m as x}from"./app-1088c2df.js";import{Q as S}from"./url-ce1d32f5.js";import{b as w,c as N}from"./index-706e92ed.js";import"./with-plugins-a1c7cafe.js";function L(e,c){const{start:a,recurrence:t}=c;if((t==null?void 0:t.interval)===void 0)throw new Error("Reccurence interval not defined");if(!o(e[0],d,!0).isValid()||!o(e[1],d,!0).isValid())throw new Error("Specified date format Invalid");const[s,i,f,l,r,y]=e.join("-").split("-"),h=o().set("date",+s).set("month",+i-1).set("year",+f),g=o().set("date",+l).set("month",+r-1).set("year",+y).set("hour",23).set("minute",59),m=o(a);let u=[],n=h;if(n.isSame(m,"date")&&u.push(n.format(d)),(t==null?void 0:t.type)==="weekly"||(t==null?void 0:t.type)==="daily"&&t.interval===7){const T=m.add(7,"day").date()-n.date();n=n.add(T,"day")}else n=m;if(g.isBefore(n))return[];const E={daily:"day",weekly:"week",monthly:"month",yearly:"year"};for(;n.isSameOrBefore(g)&&(!(t!=null&&t.until)||n.isSameOrBefore(o(t.until)));)n.isBetween(h,g,"day","[]")&&u.push(n.format(d)),n=n.add(t==null?void 0:t.interval,E[t.type]);return u=I.uniq(u),u}const O=(e,c)=>e.map(([a],t)=>c.includes(a)?t:"").filter(String),M=(e,c)=>{e.start=A(e.start),e.end=A(e.end),c.setQueryData(S.APPOINTMENT.single(e.id),e);const a=(t,s)=>{if(!t.start||!s.start||t.start===s.start)return 0;const i=o(t.start).format("HH:mm");return o(s.start).format("HH:mm")<i?1:-1};c.setQueryData(S.APPOINTMENT.seamlessScroll,(t=[])=>{if(!P(t))return[];if(e.recurring){const s=t[0][0],i=t[t.length-1][0],f=L([s,i],e),l=O(t,f);t=t.map(r=>(r[1]=r[1].filter(y=>y.id!==e.id),r));for(const r of l)t[r][1].push(e),t[r][1].sort(a);return t}return t.forEach(([,s])=>{const i=x.findIndex(s,{id:e.id});if(i!==-1)if(o(s[i].start).isSame(o(e.start),"date"))s.splice(i,1,e),s.sort(a);else{s.splice(i,1);const f=o(e.start).format(d),l=t.findIndex(([r])=>r===f);l&&(t[l][1].push(e),t[l][1].sort(a))}}),t}),c.setQueryData(S.APPOINTMENT.byStartDate(o(e.start).format(d)),t=>(t??[]).map(s=>s.id===e.id?e:s))},H=e=>{const c=R(),a=c.getQueryData(S.APPOINTMENT.single(e)),[t,,,{isLoading:s,isSuccess:i}]=w(e,{onSuccess:m=>M(m,c),successMessage:"Appointment Updated"}),[f,,,{isLoading:l,isSuccess:r}]=N(e,{headers:{"If-Match":a==null?void 0:a._eTag}});return{update:async m=>{await f(m),await t({})},isLoading:s||l,isSuccess:i||r}};export{M as a,H as u};
