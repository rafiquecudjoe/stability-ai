import l from"./Icon.99e2e3aa.js";import{a as m,b as d,o as f,e as p,f as s,h as r,u as c,t as _}from"./entry.30c1e34e.js";function h(){const e=m("count",()=>Math.round(Math.random()*20));function n(){e.value+=1}function o(){e.value-=1}return{count:e,inc:n,dec:o}}const x={class:"flex justify-center items-center py-8"},w={class:"mx-4"},C=d({__name:"Counter",setup(e){const{count:n,inc:o,dec:u}=h();return(v,t)=>{const i=l;return f(),p("div",x,[s("button",{class:"w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white",onClick:t[0]||(t[0]=a=>c(u)())},[r(i,{name:"heroicons-solid:minus",class:"w-5 h-5 text-white"})]),s("div",w,_(c(n)),1),s("button",{class:"w-6 h-6 p-2 rounded-full flex justify-center items-center bg-emerald-500 text-white",onClick:t[1]||(t[1]=a=>c(o)())},[r(i,{name:"heroicons-solid:plus",class:"w-5 h-5 text-white"})])])}}});export{C as _};