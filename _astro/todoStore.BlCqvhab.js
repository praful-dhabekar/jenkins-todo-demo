import{r as y}from"./index.DhYZZe0J.js";var p={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h=y,v=Symbol.for("react.element"),x=Symbol.for("react.fragment"),O=Object.prototype.hasOwnProperty,S=h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,T={key:!0,ref:!0,__self:!0,__source:!0};function g(o,r,n){var e,s={},i=null,t=null;n!==void 0&&(i=""+n),r.key!==void 0&&(i=""+r.key),r.ref!==void 0&&(t=r.ref);for(e in r)O.call(r,e)&&!T.hasOwnProperty(e)&&(s[e]=r[e]);if(o&&o.defaultProps)for(e in r=o.defaultProps,r)s[e]===void 0&&(s[e]=r[e]);return{$$typeof:v,type:o,key:i,ref:t,props:s,_owner:S.current}}d.Fragment=x;d.jsx=g;d.jsxs=g;p.exports=d;var E=p.exports;let l=[],m=(o,r)=>{let n=[],e={get(){return e.lc||e.listen(()=>{})(),e.value},l:0,lc:0,listen(s,i){return e.lc=n.push(s,i||e.l)/2,()=>{let t=n.indexOf(s);~t&&(n.splice(t,2),--e.lc||e.off())}},notify(s){let i=!l.length;for(let t=0;t<n.length;t+=2)l.push(n[t],n[t+1],e.value,s);if(i){for(let t=0;t<l.length;t+=4){let u;for(let a=t+1;!u&&(a+=4)<l.length;)l[a]<l[t+1]&&(u=l.push(l[t],l[t+1],l[t+2],l[t+3]));u||l[t](l[t+2],l[t+3])}l.length=0}},off(){},set(s){e.value!==s&&(e.value=s,e.notify())},subscribe(s,i){let t=e.listen(s,i);return s(e.value),t},value:o};return e};const _="todos",b=()=>{if(typeof window>"u")return[];const o=localStorage.getItem(_);return o?JSON.parse(o):[]},f=m(b()),c=m("light");f.subscribe(o=>{typeof window<"u"&&localStorage.setItem(_,JSON.stringify(o))});const R=o=>{const r={...o,id:crypto.randomUUID(),createdAt:new Date().toISOString()};f.set([...f.get(),r])},j=o=>{const r=f.get().map(n=>n.id===o?{...n,completed:!n.completed}:n);f.set(r)},k=o=>{const r=f.get().filter(n=>n.id!==o);f.set(r)},I=()=>{c.set(c.get()==="light"?"dark":"light")};export{c as a,R as b,j as c,k as d,f as e,E as j,I as t};
