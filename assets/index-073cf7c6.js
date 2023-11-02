const t=a=>Array.from(new Set(a.map(r=>JSON.stringify(r)))).map(r=>JSON.parse(r)),n=(a,r={})=>a.reduce((s,e)=>({...s,[e.id]:e}),r);export{n as r,t as u};
