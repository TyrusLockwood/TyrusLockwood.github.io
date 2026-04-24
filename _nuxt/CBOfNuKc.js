const e=(r,t,c,o)=>{const a=r===1;return`${a?"":o+"."}${t}${a?" ":"."}${c}${a?", ":""}${a?o:""}`},n=async r=>{try{await navigator.clipboard.writeText(r)}catch{}};export{n as c,e as f};
