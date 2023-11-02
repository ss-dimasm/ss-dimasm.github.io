import{j as e,a as u,F as pe}from"./index-b3f50da9.js";import{Z as Ie,r as he,h as Qe,k as ye,l as r,n as s,x as be,y as oe,O as Me,j as Fe}from"./elements-7fcf5525.js";import{u as _e}from"./index.esm-70abc844.js";import{c as f,a as i,o as Le}from"./index.esm-c689e26d.js";import{g as Ue,h as Se,q as Ae,m as le,r as de}from"./app-1088c2df.js";import{D as R,u as ke}from"./use-get-admin-setup-metadata-c174df8b.js";import{u as Ce,a as Te}from"./use-update-admin-setup-metadata-d98ffd83.js";import{Q as ce}from"./queries-keys-1e9a6485.js";import{t as we}from"./index-5dd4f8a7.js";import{E as n}from"./error-messages-27b293ab.js";import"./middleware-a8d06d07.js";import"./axios-738d9fef.js";import"./index-03408514.js";import"./hooks-4803ca41.js";const Pe=m=>({...R,...m}),Oe=f().shape({contact:f().shape({name:i().trim().required(n.FIELD_REQUIRED),contactDetail:i().trim().required(n.FIELD_REQUIRED),address:i().trim().required(n.FIELD_REQUIRED),marketingConsent:i().trim().required(n.FIELD_REQUIRED)}),applicant:f().shape({marketingMode:i().trim().required(n.FIELD_REQUIRED),applicantStatus:i().trim().required(n.FIELD_REQUIRED),preferredAddress:i().trim().required(n.FIELD_REQUIRED),budget:i().trim().required(n.FIELD_REQUIRED),type:i().trim().required(n.FIELD_REQUIRED),situation:i().trim().required(n.FIELD_REQUIRED),specialFeatures:i().trim().required(n.FIELD_REQUIRED),style:i().trim().required(n.FIELD_REQUIRED),age:i().trim().required(n.FIELD_REQUIRED),parking:i().trim().required(n.FIELD_REQUIRED),locality:i().trim().required(n.FIELD_REQUIRED),propertyRooms:i().trim().required(n.FIELD_REQUIRED),tenure:i().trim().required(n.FIELD_REQUIRED),size:i().trim().required(n.FIELD_REQUIRED),notes:i().trim().required(n.FIELD_REQUIRED)})}),xe=()=>{var h,Q,y,b,M,F,_,L,U,S,A,k,C,T,w,P,O,x,N,z,V,j,$,B,G,K,Y,v,H,W,Z,J,X,ee,te,ae,re,se,ie,ne;const m=Ue(),{connectSession:g}=Se(m),D=Ae(),{data:o,isLoading:ue}=ke(),{info:E,error:q}=Ie(),{register:t,formState:{errors:a},handleSubmit:me,reset:ge}=_e({defaultValues:Pe(((h=o==null?void 0:o.metadata)==null?void 0:h.tailoredQuestions)&&{...o==null?void 0:o.metadata.tailoredQuestions}),resolver:Le(Oe)}),c=(Q=g==null?void 0:g.loginIdentity)==null?void 0:Q.officeId,{mutateAsync:Ee,isLoading:fe}=Ce(),{mutateAsync:I,isLoading:Re}=Te(o==null?void 0:o.id),d=fe||Re;he.useEffect(()=>{o!=null&&o.metadata.tailoredQuestions&&!d&&ge({...o==null?void 0:o.metadata.tailoredQuestions})},[o,d]);const De=async l=>{try{o?(await I({tailoredQuestions:l}),E(`Tailored questions has been changed successfully for '${c}' office ID`,3500)):(await Ee({tailoredQuestions:l}),E(`Tailored questions has been set successfully for '${c}' office ID`,3500)),D.setQueryData(ce.ARW_ADMIN_SETUP_KEYS.byOffice(c),p=>le.merge(p,{metadata:{tailoredQuestions:l}}))}catch(p){de(p)?q(p.readableMessage):console.log("Unknown error while update metadata",p)}},qe=async()=>{try{await I({tailoredQuestions:R}),D.setQueryData(ce.ARW_ADMIN_SETUP_KEYS.byOffice(c),l=>le.merge(l,{metadata:{tailoredQuestions:R}})),E(`Tailored questions has been reset successfully for '${c}' office ID`,3500)}catch(l){de(l)?q(l.readableMessage):console.log("Unknown error while update metadata",l)}};return ue?e(Qe,{fullPage:!0,label:"Please wait..."}):e("div",{className:"el-wfull","data-testid":"tque-form-wrapper",children:u("form",{"data-testid":"tque-form",children:[u(ye,{className:we.formLayout,children:[e(r,{children:e(s,{label:"Name",...t("contact.name"),errorMessage:(b=(y=a.contact)==null?void 0:y.name)==null?void 0:b.message,"data-testid":"tque-name"})}),e(r,{children:e(s,{...t("contact.contactDetail"),errorMessage:(F=(M=a.contact)==null?void 0:M.contactDetail)==null?void 0:F.message,label:"Contact","data-testid":"tque-contactDetail"})}),e(r,{children:e(s,{...t("contact.address"),errorMessage:(L=(_=a.contact)==null?void 0:_.address)==null?void 0:L.message,label:"Address","data-testid":"tque-address"})}),e(r,{children:e(s,{...t("contact.marketingConsent"),errorMessage:(S=(U=a.contact)==null?void 0:U.marketingConsent)==null?void 0:S.message,label:"Marketing Consent","data-testid":"tque-contact-marketing-consent"})}),e(r,{children:e(s,{...t("applicant.marketingMode"),errorMessage:(k=(A=a.applicant)==null?void 0:A.marketingMode)==null?void 0:k.message,label:"Department","data-testid":"tque-applicant-marketing-mode"})}),e(r,{children:e(s,{...t("applicant.applicantStatus"),errorMessage:(T=(C=a.applicant)==null?void 0:C.applicantStatus)==null?void 0:T.message,label:"Applicant Status","data-testid":"tque-applicant-status"})}),e(r,{children:e(s,{...t("applicant.preferredAddress"),errorMessage:(P=(w=a.applicant)==null?void 0:w.preferredAddress)==null?void 0:P.message,label:"Preferred Address","data-testid":"tque-applicant-preferred-address"})}),e(r,{children:e(s,{...t("applicant.budget"),errorMessage:(x=(O=a.applicant)==null?void 0:O.budget)==null?void 0:x.message,label:"Budget","data-testid":"tque-applicant-budget"})}),e(r,{children:e(s,{...t("applicant.type"),errorMessage:(z=(N=a.applicant)==null?void 0:N.type)==null?void 0:z.message,label:"Type Requirement","data-testid":"tque-applicant-type"})}),e(r,{children:e(s,{...t("applicant.situation"),errorMessage:(j=(V=a.applicant)==null?void 0:V.situation)==null?void 0:j.message,label:"Outdoor Requirement","data-testid":"tque-applicant-situation"})}),e(r,{children:e(s,{...t("applicant.specialFeatures"),errorMessage:(B=($=a.applicant)==null?void 0:$.specialFeatures)==null?void 0:B.message,label:"Special Requirement","data-testid":"tque-applicant-special-features"})}),e(r,{children:e(s,{...t("applicant.style"),errorMessage:(K=(G=a.applicant)==null?void 0:G.style)==null?void 0:K.message,label:"Style Requirement","data-testid":"tque-applicant-style"})}),e(r,{children:e(s,{...t("applicant.age"),errorMessage:(v=(Y=a.applicant)==null?void 0:Y.age)==null?void 0:v.message,label:"Age Requirement","data-testid":"tque-applicant-age"})}),e(r,{children:e(s,{...t("applicant.parking"),errorMessage:(W=(H=a.applicant)==null?void 0:H.parking)==null?void 0:W.message,label:"Parking Requirement","data-testid":"tque-applicant-parking"})}),e(r,{children:e(s,{...t("applicant.locality"),errorMessage:(J=(Z=a.applicant)==null?void 0:Z.locality)==null?void 0:J.message,label:"Locality Requirement","data-testid":"tque-applicant-locality"})}),e(r,{children:e(s,{...t("applicant.propertyRooms"),errorMessage:(ee=(X=a.applicant)==null?void 0:X.propertyRooms)==null?void 0:ee.message,label:"Rooms","data-testid":"tque-applicant-rooms"})}),e(r,{children:e(s,{...t("applicant.tenure"),errorMessage:(ae=(te=a.applicant)==null?void 0:te.tenure)==null?void 0:ae.message,label:"Tenure","data-testid":"tque-applicant-tenure"})}),e(r,{children:e(s,{...t("applicant.size"),errorMessage:(se=(re=a.applicant)==null?void 0:re.size)==null?void 0:se.message,label:"Property Size","data-testid":"tque-applicant-size"})}),e(r,{children:e(s,{...t("applicant.notes"),errorMessage:(ne=(ie=a.applicant)==null?void 0:ie.notes)==null?void 0:ne.message,label:"Notes","data-testid":"tque-applicant-notes"})})]}),u(be,{className:"el-mt8 el-mb12",children:[o&&e(oe,{intent:"default",type:"button",disabled:d,loading:d,onClick:qe,"data-testid":"tque-reset-button",children:"Reset to Default"}),e(oe,{disabled:d,loading:d,intent:"primary",onClick:me(De),"data-testid":"tque-confirm-button",children:"Confirm"})]})]})})},Ne=()=>u(pe,{children:[e(Me,{children:"Tailored Questions Configuration"}),e(Fe,{children:"Awesome description/guidance about tailored question configuration"})]}),et=()=>u(pe,{children:[e(Ne,{}),e(xe,{})]});export{et as default};
