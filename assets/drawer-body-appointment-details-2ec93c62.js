var z=Object.defineProperty;var $=(t,e,n)=>e in t?z(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var c=(t,e,n)=>($(t,typeof e!="symbol"?e+"":e,n),n);import{A as M,B as E,k as v,a6 as j,a7 as G,a8 as U,m as I,j as D,H as T,V as F,W as R}from"./app-fc3be005.js";import{ba as H,b9 as q,u as b,aP as B,x as V,y as Y,aL as N,F as L,j as _,J,a2 as K,aM as W}from"./elements-7fcf5525.js";import{a as C,F as S,j as i}from"./index-e8b020c1.js";import{i as O}from"./index-f4612fa3.js";import{g as X}from"./index-0d5dc733.js";import{u as Z,M as ee,a as re,h as ne,c as te}from"./all-confirmed-section.helpers-3ed0e03e.js";import{g as ie}from"./property-owner-4d5223c4.js";import{g as se}from"./appointment-card.helpers-8301f405.js";import{c as k}from"./index-fa19f396.js";import{A as oe}from"./configuration-cb2510ef.js";function le(t){return new Promise(e=>setTimeout(()=>e(!0),t))}class ce{constructor(e){c(this,"maxConcurrentCalls");c(this,"waitInterval");c(this,"currentConcurrentAPICallQueue",0);c(this,"queuedAPIFns",[]);c(this,"endpoint");c(this,"params");c(this,"modifiedParams");c(this,"headers",{});c(this,"totalPageCount",1);c(this,"currentPage",1);c(this,"results",[]);c(this,"initFirstPageFn",async()=>{try{const{data:e}=await M.get(this.endpoint,{params:this.params,baseURL:window.reapit.config.platformApiUrl,headers:this.headers,paramsSerializer:{serialize:n=>E.stringify(n,{arrayFormat:"repeat"})}});this.totalPageCount=(e==null?void 0:e.totalPageCount)??1,this.currentPage=(e==null?void 0:e.pageNumber)??1,this.results.push(e)}catch(e){throw O(e)?v(e):new Error(e)}this.queueingApiCalls()});c(this,"executeBasedOnMaxConcurrentLength",e=>{for(let n=0;n<this.maxConcurrentCalls;n++)e()});this.maxConcurrentCalls=e.maxConcurrentCalls,this.waitInterval=e.waitBetweenCallsInterval??4e3,this.endpoint=e.endpoint,this.params=e.params,this.modifiedParams={...e.params,pageNumber:this.currentPage},this.headers=e.headers??{}}async queueingApiCalls(){for(let e=this.currentPage+1;e<=this.totalPageCount;e++)this.queuedAPIFns.push(async()=>{try{const{data:n}=await M.get(this.endpoint,{params:{...this.modifiedParams,pageNumber:e},baseURL:window.reapit.config.platformApiUrl,headers:this.headers,paramsSerializer:{serialize:l=>E.stringify(l,{arrayFormat:"repeat"})}});this.results.push(n)}catch(n){throw O(n)?v(n):new Error(n)}})}async run(){for(this.resetQueue(),await this.initFirstPageFn();this.queuedAPIFns.length&&this.currentConcurrentAPICallQueue<=this.maxConcurrentCalls;){const e=this.queuedAPIFns.map((n,l)=>{if(l<this.maxConcurrentCalls)return n});this.executeBasedOnMaxConcurrentLength(()=>this.queuedAPIFns.shift()),e.length&&(this.executeBasedOnMaxConcurrentLength(()=>this.currentConcurrentAPICallQueue++),await this.callByChunk(e))}}async callByChunk(e){await le(this.waitInterval),await Promise.all(e.map(n=>n==null?void 0:n())),this.executeBasedOnMaxConcurrentLength(()=>this.currentConcurrentAPICallQueue--)}resetQueue(){this.totalPageCount=1,this.currentPage=1,this.modifiedParams=this.params,this.currentConcurrentAPICallQueue=0,this.queuedAPIFns=[],this.results=[]}}const Ie=async t=>{const{recordsId:e,queryClient:n,reapitConnectBrowserSession:l,endpoint:s,queryKey:a,onSetData:p,additionalQueryParams:P}=t,d=await j(l);if(!d)throw new G({description:U});let u=I.uniq(e);for(const m of u){const o=n.getQueryData(a(m));o&&(u=u.filter(w=>w!==o.id))}if(!u.length)return;const y={id:u,pageSize:100,pageNumber:1,...P},f=new ce({maxConcurrentCalls:5,waitBetweenCallsInterval:5e3,params:y,endpoint:s,headers:d});await f.run();for(const m of f.results)for(const o of(m==null?void 0:m._embedded)??[])o&&(typeof p=="function"?p(o):n.setQueryData(a(o.id),o))},Q=({contactRole:t,data:e,appointmentId:n,contactType:l})=>{const s=I.pick(e,["homePhone","mobilePhone","workPhone"]),a=D(I.omitBy(s,I.isNil)),{Modal:p,openModal:P}=Z({appointmentId:n,contactType:l}),{trackEvent:d}=T(),[u,y,f,m]=H(),o=({Role:r,Type:g,Action:h,Source:x})=>{d(F.COMMUNICATION,{...R("DIARY"),Name:"Contact Drawer",Role:r,Type:g,Action:h,Source:x})()},w=r=>{const g=[];return r!=null&&r.name&&g.push({key:"Name",value:i(N,{"data-testid":"contact-name",children:(r==null?void 0:r.name)||k(r==null?void 0:r.title,r==null?void 0:r.forename,r==null?void 0:r.surname)}),iconName:"usernameSystem",textEllipsis:!0}),r!=null&&r.email&&g.push({key:"Email",value:i(N,{"data-testid":"contact-email",onClick:h=>{o({Role:t,Type:"Email",Action:oe.OPEN_MAIL,Source:"Text"}),re(h)},children:r==null?void 0:r.email}),iconName:"emailSystem",textEllipsis:!0}),a&&g.push({key:"Phone Details",iconName:"phoneSystem",value:Object.keys(r).map(h=>{var x;if((x=h.match(/phone/gi))!=null&&x.length&&r[h]){const A=h.replace(/phone/gi,"");return C(N,{"data-testid":`contact-${A}`,onClick:()=>{A!=="mobile"&&o({Role:t,Type:I.capitalize(A),Action:"Call",Source:"Text"}),A!=="mobile"?P(r[h],A,t):y()},children:[r[h]," (",I.capitalize(A),")"]},h)}})}),g};return C(S,{children:[i(p,{}),i(q,{items:[{title:`${t} - ${(e==null?void 0:e.name)||k(e==null?void 0:e.title,e==null?void 0:e.forename,e==null?void 0:e.surname)}`,titleItems:[i(S,{children:i(b,{icon:"usernameSolidSystem"})})],content:C("div",{children:[i(B,{items:w(e)}),a&&(e==null?void 0:e.mobilePhone)&&i(u,{isOpen:m,title:`${e==null?void 0:e.mobilePhone}`,footerItems:i(V,{alignment:"right",children:i(Y,{onClick:f,children:"Close"})}),children:i(ee,{includeHeader:!1,contactType:t==="attendee"?"attendee":"property",appointmentId:n,phoneNumber:e==null?void 0:e.mobilePhone,trackIconClicked:r=>o({Role:t,Type:"Mobile",Action:r,Source:"Icon"})})})]})}]})]})},ae=({drawerData:t,appointmentId:e,...n})=>{var u,y,f,m;const[l,s]=t,a=((y=(u=s==null?void 0:s.address)==null?void 0:u.geolocation)==null?void 0:y.latitude)&&((m=(f=s==null?void 0:s.address)==null?void 0:f.geolocation)==null?void 0:m.longitude),{trackEvent:p}=T(),P=o=>()=>{const r=["ios","android"].includes(X())?"App":"Browser";p(F.THIRD_PARTY_REDIRECT,{...R("DIARY"),Name:`Google Map ${r}`,Action:`Opening Google Map ${r} from Drawer`,"Source Type":o==="link"?"Link":"Icon","Source Name":"Property Address"})()},{role:d}=ie(s)??{};return C("div",{...n,children:[s&&C(S,{children:[C(L,{isFlexAlignEnd:!0,className:"el-border-grey-b el-mb3 el-pb4",children:[i(b,{icon:"homeSolidSystem",iconSize:"small",intent:"primary"}),i(_,{"data-testid":"contact-title",hasNoMargin:!0,className:"el-ml2",children:"Property"})]}),i(B,{items:[{iconName:"pinSystem",key:"Address",value:i(N,{intent:a?"neutral":void 0,"data-testid":"property-text-content",onClick:()=>{var o,w,r,g;P("link")(),ne({coordinate:{latitude:(w=(o=s==null?void 0:s.address)==null?void 0:o.geolocation)==null?void 0:w.latitude,longitude:(g=(r=s==null?void 0:s.address)==null?void 0:r.geolocation)==null?void 0:g.longitude}})()},children:se(s.address)})}]})]}),(l==null?void 0:l.related)&&l.related.map(o=>i(Q,{contactRole:d,data:o,appointmentId:e,contactType:"property"},o==null?void 0:o.id))]})},ue=({drawerData:t,appointmentId:e,...n})=>i("div",{...n,children:!!(t!=null&&t.length)&&i("div",{children:t.map(l=>i(Q,{contactRole:"Attendee",data:l,appointmentId:e,contactType:"attendee"},l==null?void 0:l.id))})}),xe=({contactDetailsContent:t})=>{var P,d;const{appointment:e,property:n}=t,l=te(e,n),{listConfirmed:s,availableOptions:a}=l,p=s.length===a.length;return C("div",{children:[C(L,{isFlexAlignCenter:!0,className:"el-mb8",children:[i(J,{intent:p?"success":s.length===0?"danger":"warning"}),i(K,{hasNoMargin:!0,hasGreyText:!0,"data-testid":"confirmation-status",children:p?"All Confirmed":`${s.length}/${a.length} Confirmed`})]}),t.property&&i(ae,{"data-testid":"drawer-property-section",drawerData:[t.owner,t.property],appointmentId:(P=t.appointment)==null?void 0:P.id}),t.contacts&&i(ue,{"data-testid":"drawer-attendee-section",drawerData:t.contacts,appointmentId:(d=t.appointment)==null?void 0:d.id}),(e==null?void 0:e.description)&&i(q,{"data-testid":"drawer-notes-section",items:[{title:"Notes",titleItems:[i(S,{children:i(b,{icon:"emailSolidSystem"})})],content:C(_,{className:W,children:[e.description," "]})}]})]})};export{xe as D,ce as G,Ie as g,le as w};
