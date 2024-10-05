/*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 *//*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 */function ot(t,e){let r=t.length;if(r!==e.length)return!1;for(let s=0;s<r;s++)if(t[s]!==e[s])return!1;return!0}let b=t=>typeof t=="function",S=t=>typeof t=="object",{isArray:H}=Array,L=t=>"hydrate"in(t?.dataset||{});function F(t,e){let r;const s=i=>{let{length:l}=i;for(let c=0;c<l;c++){const o=i[c];if(o&&Array.isArray(o))s(o);else{const n=typeof o;if(o==null||n==="function"||n==="boolean")continue;n==="string"||n==="number"?(r==null&&(r=""),r+=o):(r!=null&&(e(r),r=null),e(o))}}};s(t),r!=null&&e(r)}class J{constructor(e,r,s){this.message=r,this.target=e,this.value=s}}let T=null,U={true:1,"":1,1:1};function K(t,e,r,s,i){let{type:l,reflect:c,event:o,value:n,attr:f=q(e)}=S(r)&&r!=T?r:{type:r},h=!(l==Function||l==T);Object.defineProperty(t,e,{configurable:!0,set(a){let u=this[e],{error:m,value:E}=G(l,h&&b(a)?a(u):a);if(m&&E!=null)throw new J(this,`The value defined for prop '${e}' must be of type '${l.name}'`,E);u!=E&&(this._props[e]=E,this.update(),o&&Y(this,o),this.updated.then(()=>{c&&(this._ignoreAttr=f,z(this,l,f,this[e]),this._ignoreAttr=null)}))},get(){return this._props[e]}}),n!=null&&(i[e]=n),s[f]={prop:e,type:l}}let Y=(t,{type:e,base:r=CustomEvent,...s})=>t.dispatchEvent(new r(e,s)),q=t=>t.replace(/([A-Z])/g,"-$1").toLowerCase(),z=(t,e,r,s)=>s==null||e==Boolean&&!s?t.removeAttribute(r):t.setAttribute(r,S(s)?JSON.stringify(s):e==Boolean?"":s),Z=(t,e)=>t==Boolean?!!U[e]:t==Number?Number(e):t==Array||t==Object?JSON.parse(e):e,G=(t,e)=>t==null||e==null?{value:e,error:!1}:t!=String&&e===""?{value:null,error:!1}:t==Object||t==Array||t==Symbol?{value:e,error:{}.toString.call(e)!==`[object ${t.name}]`}:e instanceof t?{value:e,error:t==Number&&Number.isNaN(e.valueOf())}:t==String||t==Number||t==Boolean?{value:e,error:t==Number?typeof e!="number"?!0:Number.isNaN(e):t==String?typeof e!="string":typeof e!="boolean"}:{value:e,error:!0},y,B=(t,e,r)=>{let{i:s,hooks:i}=y,l=i[s]=i[s]||{};return l[0]=t(l[0]),l[1]=e,l[2]=r,y.i++,i[s][0]},nt=t=>B((e={current:t})=>e),ft=()=>B((t={current:y.host})=>t),ct=()=>y.update;function Q(t,e){let r={};function s(c,o){for(let n in r){let f=r[n];f[c]&&(f[0]=f[c](f[0],o))}}function i(c){y={host:e,hooks:r,update:t,i:0};let o;try{o=c()}finally{y=null}return o}function l(c){return s(1,c),()=>{s(2,c),c&&(r={})}}return{load:i,cleanEffects:l}}let ut=(t,e)=>{let r={},s={},{props:i,styles:l}=t;return class extends(e||HTMLElement){constructor(){super(),this._setup(),this._render=()=>t({...this._props});for(let o in s)this[o]=s[o]}static get styles(){return[super.styles,l]}async _setup(){if(this._props)return;this._props={},this.mounted=new Promise(a=>this.mount=a),this.unmounted=new Promise(a=>this.unmount=a),this.symbolId=this.symbolId||Symbol();let o=Q(()=>this.update(),this),n,f=!0;const h=L(this);this.update=()=>(n||(n=!0,this.updated=(this.updated||this.mounted).then(()=>{try{const a=o.load(this._render);return a&&a.render(this,this.symbolId,h),n=!1,f&&(f=!1,!h&&W(this)),o.cleanEffects()}finally{n=!1}}).then(a=>{a&&a()})),this.updated),this.update(),await this.unmounted,o.cleanEffects(!0)()}connectedCallback(){this.mount(),super.connectedCallback&&super.connectedCallback()}async disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),await this.mounted,!this.isConnected&&this.unmount()}attributeChangedCallback(o,n,f){if(r[o]){if(o===this._ignoreAttr||n===f)return;let{prop:h,type:a}=r[o];this[h]=Z(a,f)}else super.attributeChangedCallback(o,n,f)}static get props(){return{...super.props,...i}}static get observedAttributes(){let o=super.observedAttributes||[];for(let n in i)K(this.prototype,n,i[n],r,s);return Object.keys(r).concat(o)}}};function W(t){let{styles:e}=t.constructor,{shadowRoot:r}=t;if(r&&e.length){let s=[];F(e,i=>{i&&(i instanceof Element?r.appendChild(i.cloneNode(!0)):s.push(i))}),s.length&&(r.adoptedStyleSheets=s)}}let M={sheet:!!document.adoptedStyleSheets},X={checked:1,value:1,selected:1},v={list:1,type:1,size:1,form:1,width:1,height:1,src:1,href:1,slot:1},x={shadowDom:1,staticNode:1,cloneNode:1,children:1,key:1},A={},D=[],_=document;class O extends Text{}let P=Symbol.for,V=P("Atomico.ID"),R=P("Atomico.$$"),C=P("Atomico.REF");function tt(t,e,r){return w(this,t,e,r)}let at=(t,e,...r)=>{let s=e||A,{children:i}=s;i=i??(r.length?r:D);let l=t?t instanceof Node?1:t.prototype instanceof HTMLElement&&2:0,c=M.render||tt;return{$$:R,type:t,props:s,children:i,key:s.key,shadow:s.shadowDom,static:s.staticNode,raw:l,is:s.is,clone:s.cloneNode,render:c}};function w(t,e,r=V,s,i){let l;if(e&&e[r]&&e[r].vnode==t||t.$$!=R)return e;(t||!e)&&(i=i||t.type=="svg",l=t.type!="host"&&(t.raw==1?(e&&t.clone?e[C]:e)!=t.type:t.raw==2?!(e instanceof t.type):e?e[C]||e.localName!=t.type:!e),l&&t.type!=null&&(t.raw==1&&t.clone?(s=!0,e=t.type.cloneNode(!0),e[C]=t.type):e=t.raw==1?t.type:t.raw==2?new t.type:i?_.createElementNS("http://www.w3.org/2000/svg",t.type):_.createElement(t.type,t.is?{is:t.is}:void 0)));let{vnode:c=A,cycle:o=0,fragment:n,handlers:f}=e[r]?e[r]:A,{children:h=D,props:a=A}=c;if(f=l?{}:f||{},t.static&&!l)return e;if(t.shadow&&!e.shadowRoot&&e.attachShadow({mode:"open"}),t.props!=a&&rt(e,a,t.props,f,i),t.children!==h){let u=t.shadow?e.shadowRoot:e;n=st(t.children,n,u,r,!o&&s,i&&t.type=="foreignObject"?!1:i)}return o++,e[r]={vnode:t,handlers:f,fragment:n,cycle:o},e}function et(t,e){let r=new O(""),s=new O(""),i;if(t[e?"prepend":"append"](r),e){let{firstElementChild:l}=t;for(;l;){if(L(l)){i=l;break}l=l.nextElementSibling}}return i?t.insertBefore(s,i):t.append(s),{markStart:r,markEnd:s}}function st(t,e,r,s,i,l){t=t==null?null:H(t)?t:[t];let c=e||et(r,i),{markStart:o,markEnd:n,keyes:f}=c,h,a=f&&new Set,u=o;if(t&&F(t,m=>{if(typeof m=="object"&&m.$$!=R)return;let N=m.$$&&m.key,$=f&&N!=null&&f.get(N);u!=n&&u===$?a.delete(u):u=u==n?n:u.nextSibling;let g=f?$:u,p=g;if(m.$$)p=w(m,g,s,i,l);else{let d=m+"";!(p instanceof Text)||p instanceof O?p=new Text(d):p.data!=d&&(p.data=d)}p!=u&&(f&&a.delete(p),!g||f?(r.insertBefore(p,u),f&&u!=n&&a.add(u)):g==n?r.insertBefore(p,n):(r.replaceChild(p,g),u=p)),N!=null&&(h=h||new Map,h.set(N,p))}),u=u==n?n:u.nextSibling,e&&u!=n)for(;u!=n;){let m=u;u=u.nextSibling,m.remove()}return a&&a.forEach(m=>m.remove()),c.keyes=h,c}function rt(t,e,r,s,i){for(let l in e)!(l in r)&&j(t,l,e[l],null,i,s);for(let l in r)j(t,l,e[l],r[l],i,s)}function j(t,e,r,s,i,l){if(e=e=="class"&&!i?"className":e,r=r??null,s=s??null,e in t&&X[e]&&(r=t[e]),!(s===r||x[e]||e[0]=="_"))if(e[0]=="o"&&e[1]=="n"&&(b(s)||b(r)))it(t,e.slice(2),s,l);else if(e=="ref")s&&(b(s)?s(t):s.current=t);else if(e=="style"){let{style:c}=t;r=r||"",s=s||"";let o=S(r),n=S(s);if(o)for(let f in r)if(n)!(f in s)&&k(c,f,null);else break;if(n)for(let f in s){let h=s[f];o&&r[f]===h||k(c,f,h)}else c.cssText=s}else{let c=e[0]=="$"?e.slice(1):e;c===e&&(!i&&!v[e]&&e in t||b(s)||b(r))?t[e]=s??"":s==null?t.removeAttribute(c):t.setAttribute(c,S(s)?JSON.stringify(s):s)}}function it(t,e,r,s){if(s.handleEvent||(s.handleEvent=i=>s[i.type].call(t,i)),r){if(!s[e]){let i=r.capture||r.once||r.passive?Object.assign({},r):null;t.addEventListener(e,s,i)}s[e]=r}else s[e]&&(t.removeEventListener(e,s),delete s[e])}function k(t,e,r){let s="setProperty";r==null&&(s="removeProperty",r=null),~e.indexOf("-")?t[s](e,r):t[e]=r}let I={};function ht(t,...e){let r=(t.raw||t).reduce((s,i,l)=>s+i+(e[l]||""),"");return I[r]=I[r]||lt(r)}function lt(t){if(M.sheet){let e=new CSSStyleSheet;return e.replaceSync(t),e}else{let e=_.createElement("style");return e.textContent=t,e}}export{ut as a,ct as b,ht as c,B as d,b as e,ft as f,Y as g,at as h,ot as i,nt as u};
