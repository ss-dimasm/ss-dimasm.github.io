const t=()=>{const{userAgent:e}=window.navigator;return/iPad|iPhone|iPod/.test(e)?"ios":/Android/.test(e)?"android":/Windows/.test(e)?"windows":/Macintosh/.test(e)?"mac":/Linux/.test(e)?"linux":"unknown"};export{t as g};
