import{k as h,i as d,t as r,u as g,x as m,c as f,h as v,g as y,r as $,o as x,a as C,A as w,B as _,C as Q,E as u}from"./index-DyyO1I55.js";import{h as B}from"./render-DjSmuU3c.js";const F=h({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(o,{slots:n}){const{proxy:{$q:t}}=y(),e=d(g,r);if(e===r)return console.error("QPage needs to be a deep child of QLayout"),r;if(d(m,r)===r)return console.error("QPage needs to be child of QPageContainer"),r;const a=f(()=>{const s=(e.header.space===!0?e.header.size:0)+(e.footer.space===!0?e.footer.size:0);if(typeof o.styleFn=="function"){const l=e.isContainer.value===!0?e.containerHeight.value:t.screen.height;return o.styleFn(s,l)}return{minHeight:e.isContainer.value===!0?e.containerHeight.value-s+"px":t.screen.height===0?s!==0?`calc(100vh - ${s}px)`:"100vh":t.screen.height-s+"px"}}),i=f(()=>`q-page${o.padding===!0?" q-layout-padding":""}`);return()=>v("main",{class:i.value,style:a.value},B(n.default))}}),I=(o,n)=>{const t=o.__vccOpts||o;for(const[e,c]of n)t[e]=c;return t},M={setup(){const o=new Date("2025-12-31T00:00:00").getTime(),n=$("");let t;const e=()=>{const c=new Date().getTime(),a=o-c,i=Math.floor(a/(1e3*60*60*24)),s=Math.floor(a%(1e3*60*60*24)/(1e3*60*60)),l=Math.floor(a%(1e3*60*60)/(1e3*60)),p=Math.floor(a%(1e3*60)/1e3);n.value=`${i}일 ${s}시간 ${l}분 ${p}초 남았습니다.`,a<0&&(clearInterval(t),n.value="출시 완료!")};return x(()=>{e(),t=setInterval(e,1e3)}),C(()=>{clearInterval(t)}),{countdownDisplay:n}}};function P(o,n,t,e,c,a){return w(),_(F,{class:"flex flex-center"},{default:Q(()=>n[0]||(n[0]=[u("div",{class:"column items-center"},[u("div",{class:"text-h4 q-mb-md"},"오픈 준비중..."),u("div",{id:"countdown",class:"text-h5"})],-1)])),_:1})}const T=I(M,[["render",P]]);export{T as default};
