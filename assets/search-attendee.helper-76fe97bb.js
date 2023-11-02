import{a as m,F as L,j as s}from"./index-b3f50da9.js";import{r as E,k as O,l as w,n as T,o as R,p as P,U as V,aX as F,aY as x,aU as M,D as Q,aV as q,aW as b,J as z,bs as B,bt as K}from"./elements-7fcf5525.js";import{u as Y}from"./index.esm-70abc844.js";import{j as $,a1 as C,g as j,u as H,a5 as k,a6 as G,a7 as v,a8 as W,a9 as J,A as X,k as Z}from"./app-1088c2df.js";import{c as ee,a as te,o as ne}from"./index.esm-c689e26d.js";import{D as re}from"./feedback-button-10b39ca0.js";import{c as _}from"./index-8f0c1425.js";import{c as ae}from"./index-fa19f396.js";import{w as p}from"./index-c5c95794.js";import{a as D}from"./search-results.helpers-7bbf52a9.js";import{c as se,a as ie,e as oe,n as ce}from"./regex-aa179d17.js";import{Q as le,U as ue}from"./url-ce1d32f5.js";import{u as me}from"./useInfiniteQuery-a457b465.js";const pe=({type:t,data:e})=>{var r,a;return t==="contact"?p(ae(e==null?void 0:e.title,e==null?void 0:e.forename,e==null?void 0:e.surname)):p((a=(r=e==null?void 0:e.related)==null?void 0:r[0])==null?void 0:a.name)},de=({type:t,data:e})=>{var r,a;return t==="contact"?p(_((e==null?void 0:e.primaryAddress)??{})):p(_((a=(r=e==null?void 0:e.related)==null?void 0:r[0])==null?void 0:a.primaryAddress))},he=({type:t,data:e})=>{var r;return t==="contact"?p(D(e)):p(D((r=e==null?void 0:e.related)==null?void 0:r[0]))},ge=({type:t,data:e})=>{var r,a;return t==="contact"?p(e==null?void 0:e.email):p((a=(r=e==null?void 0:e.related)==null?void 0:r[0])==null?void 0:a.email)},fe=({type:t,data:e})=>t==="tenancy"?p(C.startCase(e==null?void 0:e.status)):e!=null&&e.active?"Active":"Inactive",ye=(t,e)=>({name:pe({type:t,data:e}),address:de({type:t,data:e}),phone:he({type:t,data:e}),email:ge({type:t,data:e}),status:fe({type:t,data:e})}),Fe=(t,e)=>$(t)?ie.isValidSync(t)?e==="landlord"||e==="tenancy"?null:{contactDetail:[t]}:oe.isValidSync(t)?{[e==="applicant"?"contactDetail":"email"]:[t]}:ce.test(t)?{name:t}:null:null,Se=ee().shape({searchInput:te().test({test:(t,e)=>{const{attendeeType:r}=e.parent;return!(t&&["landlord","tenancy"].includes(r)&&se.test(t))},message:"Sorry, we can't search landlords and tenancies by phone"}).nullable()}),Ne=["applicant","landlord","tenancy","contact"],Ae=["sales","lettings"],be=({searchFieldLabel:t,searchFieldPlaceholder:e,onSearchFieldChange:r,onApplicantTypeChange:a,onAttendeeTypeChange:g,subscribeToFormErrorState:f,headerContent:y})=>{const{register:i,watch:d,formState:{errors:l},trigger:o}=Y({defaultValues:{searchInput:null,attendeeType:"applicant",applicantType:"sales"},mode:"all",resolver:ne(Se)}),{attendeeType:n}=d(),h=E.useMemo(()=>C.debounce(c=>{const{value:u}=c.target;r&&r(u)},re),[n]),S=async()=>{await o("searchInput"),f&&f(l)};E.useEffect(()=>{S()},[l]);const N=async c=>{const{value:u}=c.target;await o("searchInput"),g&&g(u)},I=async c=>{const{value:u}=c.target;await o("searchInput"),a&&a(u)},A=c=>c.map((u,U)=>({id:`option-${u}`,value:u,text:C.capitalize(u),isChecked:U===0}));return m(L,{children:[y&&y,m(O,{children:[s(w,{"data-testid":"search-attendee-container",children:s(T,{label:t===!1?void 0:t||`Search Attendee ${n==="landlord"||n==="tenancy"?"Name or Email":"Name, Email or Phone Number"}`,...i("searchInput",{onChange:h}),name:"searchInput","data-testid":"sync-attendee-search-attendee-field",type:"search",icon:"searchSystem",placeholder:e??"Search Attendee"})}),s(w,{children:m(T,{children:[s(R,{children:"Attendee Type"}),s(P,{...i("attendeeType",{onChange:N}),"data-testid":"sync-attendee--attendee-type-field",hasGreyBg:!0,options:A(Ne)})]})}),n==="applicant"&&s(w,{children:m(T,{children:[s(R,{children:"Applicant Type"}),s(P,{...i("applicantType",{onChange:I}),"data-testid":"sync-attendee-applicant-type-field",hasGreyBg:!0,options:A(Ae)})]})})]})]})},Ee=({data:t,attendeeType:e,onCardClick:r,expandableContent:a,onExpand:g})=>{const[f,y]=E.useState(null),i=(d,l,o)=>n=>{n.stopPropagation(),l===d?o(null):(g&&g(),o(d))};return m(V,{"data-testid":"attendee-table","data-force-narrow-table":"true",children:[m(F,{children:[s(x,{"data-testid":"attendee-name-header",children:"Name"}),s(x,{"data-testid":"attendee-address-header",children:"Address"})]}),t.map(d=>{var l;return(l=d._embedded)==null?void 0:l.map((o,n)=>{const{name:h,email:S,phone:N,address:I,status:A}=ye(e,o),c=f===n;return m(M,{"data-testid":"attendee-table-row-container",onClick:()=>r(o),className:Q(c&&"el-is-active"),children:[m(q,{children:[s(b,{icon:"usernameSystem",narrowLabel:"Name",children:h}),s(b,{icon:"emailSystem",narrowLabel:"Email",children:S}),s(b,{icon:"phoneSystem",narrowLabel:"Phone",children:N}),s(b,{icon:"homeSystem",narrowLabel:"Address",children:I}),m(b,{narrowLabel:"Status",children:[s(z,{intent:e==="tenancy"?"neutral":A==="Active"?"success":"warning"}),A]}),a&&s(B,{"data-testid":"attendee-trigger-cell",isOpen:c,onClick:i(n,f,y)})]}),a&&s(K,{"data-testid":"attendee-expandable-container","data-is-expanded":c,isOpen:c,children:a})]},`attendee-row-${o.id}`)})})]})},Me={Form:be,Table:Ee},Ie={tenancy:"TENANCIES",applicant:"APPLICANTS",contact:"CONTACTS",landlord:"LANDLORDS"},Qe=({type:t,searchInput:e,marketingMode:r,pageSize:a,options:g={}})=>{const f=j(),y=H(),i={...e,pageSize:a,marketingMode:""};t==="applicant"&&(i.marketingMode=r==="sales"?"buying":"renting");const d=le[t.toUpperCase()].paginated(i),l=ue[Ie[t]],o=E.useMemo(()=>d??k(l,i),[l,i]);return me({queryKey:o,getNextPageParam:n=>{if(!(!(n.pageNumber&&n.totalPageCount)||n.pageNumber>=n.totalPageCount))return n.pageNumber+1},getPreviousPageParam:n=>{if(!(!(n.pageNumber&&n.totalPageCount)||n.pageNumber<=1))return n.pageNumber-1},queryFn:async({pageParam:n=1})=>{try{const h=await G(f);if(!h)throw new v({description:W});i.pageNumber=n,i.pageSize||(i.pageSize=7);const S=J(l,i,!0)(),{data:N}=await X.get(S,{headers:h});return N}catch(h){throw Z(h)}},onError:n=>{if(n instanceof v)return y("/login")},retry:!1,refetchOnWindowFocus:!1,...g})};export{Me as S,Ie as a,ye as b,Fe as g,Qe as u};
