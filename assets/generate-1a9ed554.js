const n=({length:a=15,prefix:o=""}={})=>{const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";let r="";for(let e=0;e<a;e++)r+=t[Math.floor(Math.random()*t.length)];return`${o}${r}`};export{n as g};
