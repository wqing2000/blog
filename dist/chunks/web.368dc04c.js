const f={};function D(e){f.context=e}function G(){return{...f.context,id:`${f.context.id}${f.context.count++}-`,count:0}}const W=(e,t)=>e===t,L={equals:W};let K=j;const x=1,A=2,M={owned:null,cleanups:null,context:null,owner:null};var d=null;let y=null,u=null,c=null,w=null,$=0;function Q(e,t){const n=u,s=d,i=e.length===0,o=i?M:{owned:null,cleanups:null,context:null,owner:t||s},r=i?e:()=>e(()=>E(()=>q(o)));d=o,u=null;try{return S(r,!0)}finally{u=n,d=s}}function re(e,t){t=t?Object.assign({},L,t):L;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=i=>(typeof i=="function"&&(i=i(n.value)),_(n,i));return[X.bind(n),s]}function m(e,t,n){const s=Z(e,t,!1,x);H(s)}function E(e){const t=u;u=null;try{return e()}finally{u=t}}function X(){const e=y;if(this.sources&&(this.state||e))if(this.state===x||e)H(this);else{const t=c;c=null,S(()=>v(this),!1),c=t}if(u){const t=this.observers?this.observers.length:0;u.sources?(u.sources.push(this),u.sourceSlots.push(t)):(u.sources=[this],u.sourceSlots=[t]),this.observers?(this.observers.push(u),this.observerSlots.push(u.sources.length-1)):(this.observers=[u],this.observerSlots=[u.sources.length-1])}return this.value}function _(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&S(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=y&&y.running;r&&y.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?c.push(o):w.push(o),o.observers&&k(o)),r||(o.state=x)}if(c.length>1e6)throw c=[],new Error},!1)),t}function H(e){if(!e.fn)return;q(e);const t=d,n=u,s=$;u=d=e,J(e,e.value,s),u=n,d=t}function J(e,t,n){let s;try{s=e.fn(t)}catch(i){e.pure&&(e.state=x),F(i)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?_(e,s):e.value=s,e.updatedAt=n)}function Z(e,t,n,s=x,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:d,context:null,pure:n};return d===null||d!==M&&(d.owned?d.owned.push(o):d.owned=[o]),o}function I(e){const t=y;if(e.state===0||t)return;if(e.state===A||t)return v(e);if(e.suspense&&E(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<$);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===x||t)H(e);else if(e.state===A||t){const i=c;c=null,S(()=>v(e,n[0]),!1),c=i}}function S(e,t){if(c)return e();let n=!1;t||(c=[]),w?n=!0:w=[],$++;try{const s=e();return z(n),s}catch(s){c||(w=null),F(s)}}function z(e){if(c&&(j(c),c=null),e)return;const t=w;w=null,t.length&&S(()=>K(t),!1)}function j(e){for(let t=0;t<e.length;t++)I(e[t])}function v(e,t){const n=y;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===x||n?i!==t&&I(i):(i.state===A||n)&&v(i,t))}}function k(e){const t=y;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=A,s.pure?c.push(s):w.push(s),s.observers&&k(s))}}function q(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),i=n.observers;if(i&&i.length){const o=i.pop(),r=n.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,n.observerSlots[s]=r)}}if(e.owned){for(t=0;t<e.owned.length;t++)q(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function ee(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function F(e){throw e=ee(e),e}let R=!1;function te(){R=!0}function fe(e,t){if(R&&f.context){const n=f.context;D(G());const s=E(()=>e(t||{}));return D(n),s}return E(()=>e(t||{}))}function ne(e,t,n){let s=n.length,i=t.length,o=s,r=0,l=0,a=t[i-1].nextSibling,h=null;for(;r<i||l<o;){if(t[r]===n[l]){r++,l++;continue}for(;t[i-1]===n[o-1];)i--,o--;if(i===r){const g=o<s?l?n[l-1].nextSibling:n[o-l]:a;for(;l<o;)e.insertBefore(n[l++],g)}else if(o===l)for(;r<i;)(!h||!h.has(t[r]))&&t[r].remove(),r++;else if(t[r]===n[o-1]&&n[l]===t[i-1]){const g=t[--i].nextSibling;e.insertBefore(n[l++],t[r++].nextSibling),e.insertBefore(n[--o],g),t[i]=n[o]}else{if(!h){h=new Map;let p=l;for(;p<o;)h.set(n[p],p++)}const g=h.get(t[r]);if(g!=null)if(l<g&&g<o){let p=r,T=1,B;for(;++p<i&&p<o&&!((B=h.get(t[p]))==null||B!==g+T);)T++;if(T>g-l){const Y=t[r];for(;l<g;)e.insertBefore(n[l++],Y)}else e.replaceChild(n[l++],t[r++])}else r++;else t[r++].remove()}}}const O="_$DX_DELEGATE";function se(e,t,n,s={}){let i;return Q(o=>{i=o,t===document?e():ie(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{i(),t.textContent=""}}function ue(e,t,n){const s=document.createElement("template");s.innerHTML=e;let i=s.content.firstChild;return n&&(i=i.firstChild),i}function ce(e,t=window.document){const n=t[O]||(t[O]=new Set);for(let s=0,i=e.length;s<i;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,V))}}function ie(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return C(e,t,s,n);m(i=>C(e,t(),i,n),s)}function le(e,t,n={}){f.completed=globalThis._$HY.completed,f.events=globalThis._$HY.events,f.load=globalThis._$HY.load,f.gather=i=>U(t,i),f.registry=new Map,f.context={id:n.renderId||"",count:0},U(t,n.renderId);const s=se(e,t,[...t.childNodes],n);return f.context=null,s}function ae(e){let t,n;return!f.context||!(t=f.registry.get(n=oe()))?e.cloneNode(!0):(f.completed&&f.completed.add(t),f.registry.delete(n),t)}function he(e){let t=e,n=0,s=[];if(f.context)for(;t;){if(t.nodeType===8){const i=t.nodeValue;if(i==="#")n++;else if(i==="/"){if(n===0)return[t,s];n--}}s.push(t),t=t.nextSibling}return[t,s]}function de(){f.events&&!f.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=f;for(t.queued=!1;t.length;){const[n,s]=t[0];if(!e.has(n))return;V(s),t.shift()}}),f.events.queued=!0)}function V(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),f.registry&&!f.done&&(f.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>s.remove()));n!==null;){const s=n[t];if(s&&!n.disabled){const i=n[`${t}Data`];if(i!==void 0?s.call(n,i,e):s.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function C(e,t,n,s,i){for(f.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,r=s!==void 0;if(e=r&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(f.context)return n;if(o==="number"&&(t=t.toString()),r){let l=n[0];l&&l.nodeType===3?l.data=t:l=document.createTextNode(t),n=b(e,n,s,l)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(f.context)return n;n=b(e,n,s)}else{if(o==="function")return m(()=>{let l=t();for(;typeof l=="function";)l=l();n=C(e,l,n,s)}),()=>n;if(Array.isArray(t)){const l=[],a=n&&Array.isArray(n);if(N(l,t,n,i))return m(()=>n=C(e,l,n,s,!0)),()=>n;if(f.context){if(!l.length)return n;for(let h=0;h<l.length;h++)if(l[h].parentNode)return n=l}if(l.length===0){if(n=b(e,n,s),r)return n}else a?n.length===0?P(e,l,s):ne(e,n,l):(n&&b(e),P(e,l));n=l}else if(t instanceof Node){if(f.context&&t.parentNode)return n=r?[t]:t;if(Array.isArray(n)){if(r)return n=b(e,n,s,t);b(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function N(e,t,n,s){let i=!1;for(let o=0,r=t.length;o<r;o++){let l=t[o],a=n&&n[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=N(e,l,a)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=N(e,Array.isArray(l)?l:[l],Array.isArray(a)?a:[a])||i}else e.push(l),i=!0;else{const h=String(l);a&&a.nodeType===3&&a.data===h?e.push(a):e.push(document.createTextNode(h))}}return i}function P(e,t,n=null){for(let s=0,i=t.length;s<i;s++)e.insertBefore(t[s],n)}function b(e,t,n,s){if(n===void 0)return e.textContent="";const i=s||document.createTextNode("");if(t.length){let o=!1;for(let r=t.length-1;r>=0;r--){const l=t[r];if(i!==l){const a=l.parentNode===e;!o&&!r?a?e.replaceChild(i,l):e.insertBefore(i,n):a&&l.remove()}else o=!0}}else e.insertBefore(i,n);return[i]}function U(e,t){const n=e.querySelectorAll("*[data-hk]");for(let s=0;s<n.length;s++){const i=n[s],o=i.getAttribute("data-hk");(!t||o.startsWith(t))&&!f.registry.has(o)&&f.registry.set(o,i)}}function oe(){const e=f.context;return`${e.id}${e.count++}`}const ge=(...e)=>(te(),le(...e));export{he as a,se as b,re as c,ce as d,fe as e,ae as g,ge as h,ie as i,de as r,f as s,ue as t};
