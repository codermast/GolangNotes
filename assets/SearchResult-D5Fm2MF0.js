import{u as Y,f as ae,g as te,h as z,i as le,P as re,t as se,j as oe,k as F,l as x,m as ne,n as B,p as t,q as ie,R as j,s as ue,v as ce,x as ge,C as ve,y as me,z as he,A as ye,B as de,D as pe,E as Q,F as be,G as fe,H as He,I,J as _,K as ke}from"./app-Ds-ij6_l.js";const Re=["/","/golang/","/golang/network/","/golang/core/","/golang/community/open-library/","/golang/community/open-library/golang.org-x-crypto-ssh.html","/golang/community/standard-library/","/golang/community/standard-library/container.html","/golang/community/standard-library/flag.html","/golang/community/standard-library/fmt.html","/golang/community/standard-library/os.html","/golang/community/standard-library/sort.html","/golang/community/standard-library/strconv.html","/golang/core/basic/array-slice.html","/golang/core/basic/background-introdece.html","/golang/core/basic/environment-config.html","/golang/core/basic/error.html","/golang/core/basic/function.html","/golang/core/basic/generic.html","/golang/core/basic/interface.html","/golang/core/basic/logic-statement.html","/golang/core/basic/map.html","/golang/core/basic/operator-symbol.html","/golang/core/basic/pointer.html","/golang/core/basic/","/golang/core/basic/struct.html","/golang/core/basic/variable-datatype.html","/golang/core/concurrent/Concurrent-security-race-conditions.html","/golang/core/concurrent/channel.html","/golang/core/concurrent/concurrent-model.html","/golang/core/concurrent/context.html","/golang/core/concurrent/goroutine.html","/golang/core/concurrent/memory-model.html","/golang/core/concurrent/","/golang/core/concurrent/select.html","/golang/core/concurrent/synchronization-primitives.html","/golang/core/network/","/404.html","/golang/community/"],we="SEARCH_PRO_QUERY_HISTORY",p=Y(we,[]),xe=()=>{const{queryHistoryCount:l}=Q,r=l>0;return{enabled:r,queryHistory:p,addQueryHistory:s=>{r&&(p.value=Array.from(new Set([s,...p.value.slice(0,l-1)])))},removeQueryHistory:s=>{p.value=[...p.value.slice(0,s),...p.value.slice(s+1)]}}},P=l=>Re[l.id]+("anchor"in l?`#${l.anchor}`:""),Qe="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:U}=Q,b=Y(Qe,[]),qe=()=>{const l=U>0;return{enabled:l,resultHistory:b,addResultHistory:r=>{if(l){const s={link:P(r),display:r.display};"header"in r&&(s.header=r.header),b.value=[s,...b.value.slice(0,U-1)]}},removeResultHistory:r=>{b.value=[...b.value.slice(0,r),...b.value.slice(r+1)]}}},Ce=l=>{const r=ve(),s=z(),q=me(),n=F(0),k=x(()=>n.value>0),h=he([]);return ye(()=>{const{search:y,terminate:C}=de(),f=pe(c=>{const H=c.join(" "),{searchFilter:S=m=>m,splitWord:D,suggestionsFilter:O,...d}=r.value;H?(n.value+=1,y(c.join(" "),s.value,d).then(m=>S(m,H,s.value,q.value)).then(m=>{n.value-=1,h.value=m}).catch(m=>{console.warn(m),n.value-=1,n.value||(h.value=[])})):h.value=[]},Q.searchDelay-Q.suggestDelay);B([l,s],([c])=>f(c),{immediate:!0}),be(()=>{C()})}),{isSearching:k,results:h}};var De=ae({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(l,{emit:r}){const s=te(),q=z(),n=le(re),{enabled:k,addQueryHistory:h,queryHistory:y,removeQueryHistory:C}=xe(),{enabled:f,resultHistory:c,addResultHistory:H,removeResultHistory:S}=qe(),D=k||f,O=se(l,"queries"),{results:d,isSearching:m}=Ce(O),o=oe({isQuery:!0,index:0}),g=F(0),v=F(0),T=x(()=>D&&(y.value.length>0||c.value.length>0)),L=x(()=>d.value.length>0),A=x(()=>d.value[g.value]||null),M=()=>{const{isQuery:e,index:a}=o;a===0?(o.isQuery=!e,o.index=e?c.value.length-1:y.value.length-1):o.index=a-1},G=()=>{const{isQuery:e,index:a}=o;a===(e?y.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=a+1},J=()=>{g.value=g.value>0?g.value-1:d.value.length-1,v.value=A.value.contents.length-1},K=()=>{g.value=g.value<d.value.length-1?g.value+1:0,v.value=0},V=()=>{v.value<A.value.contents.length-1?v.value+=1:K()},N=()=>{v.value>0?v.value-=1:J()},E=e=>e.map(a=>ke(a)?a:t(a[0],a[1])),W=e=>{if(e.type==="customField"){const a=fe[e.index]||"$content",[i,w=""]=He(a)?a[q.value].split("$content"):a.split("$content");return e.display.map(u=>t("div",E([i,...u,w])))}return e.display.map(a=>t("div",E(a)))},R=()=>{g.value=0,v.value=0,r("updateQuery",""),r("close")},X=()=>k?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.queryHistory),y.value.map((e,a)=>t("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===a}],onClick:()=>{r("updateQuery",e)}},[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},e),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),C(a)}})]))])):null,Z=()=>f?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},n.value.resultHistory),c.value.map((e,a)=>t(j,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===a}],onClick:()=>{R()}},()=>[t(I,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.header?t("div",{class:"content-header"},e.header):null,t("div",e.display.map(i=>E(i)).flat())]),t("button",{class:"search-pro-remove-icon",innerHTML:_,onClick:i=>{i.preventDefault(),i.stopPropagation(),S(a)}})]))])):null;return ne("keydown",e=>{if(l.isFocusing){if(L.value){if(e.key==="ArrowUp")N();else if(e.key==="ArrowDown")V();else if(e.key==="Enter"){const a=A.value.contents[v.value];h(l.queries.join(" ")),H(a),s.push(P(a)),R()}}else if(f){if(e.key==="ArrowUp")M();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:a}=o;o.isQuery?(r("updateQuery",y.value[a]),e.preventDefault()):(s.push(c.value[a].link),R())}}}}),B([g,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result-wrapper",{empty:l.queries.length?!L.value:!T.value}],id:"search-pro-results"},l.queries.length?m.value?t(ie,{hint:n.value.searching}):L.value?t("ul",{class:"search-pro-result-list"},d.value.map(({title:e,contents:a},i)=>{const w=g.value===i;return t("li",{class:["search-pro-result-list-item",{active:w}]},[t("div",{class:"search-pro-result-title"},e||n.value.defaultTitle),a.map((u,ee)=>{const $=w&&v.value===ee;return t(j,{to:P(u),class:["search-pro-result-item",{active:$,"aria-selected":$}],onClick:()=>{h(l.queries.join(" ")),H(u),R()}},()=>[u.type==="text"?null:t(u.type==="title"?ue:u.type==="heading"?ce:ge,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[u.type==="text"&&u.header?t("div",{class:"content-header"},u.header):null,t("div",W(u))])])})])})):n.value.emptyResult:D?T.value?[X(),Z()]:n.value.emptyHistory:n.value.emptyResult)}});export{De as default};