import{c as h,a as m,h as r}from"./css.js";/*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 *//*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 */function s({src:a,srcOrigin:u,rounded:p}){function d(o){let e=0,t=0,n=0,f=0;var i=o.currentTarget;o.offsetX?e=o.offsetX:e=o.touches[0].pageX,o.offsetY?t=o.offsetY:t=o.touches[0].pageY,n=e/i.offsetWidth*100,f=t/i.offsetHeight*100,i.style.backgroundPosition=n+"% "+f+"%"}return r("host",{shadowDom:!0},r("figure",{id:"izh",onmousemove:o=>d(o),style:{backgroundImage:`url(${u||a})`,borderRadius:`${p}px`}},r("img",{src:a})))}s.props={src:{type:String,value:""},srcOrigin:{type:String,value:""},rounded:{type:Number,value:0}};s.styles=h`#izh{margin:0;width:100%;position:relative;overflow:hidden;background-position:50% 50%;background-repeat:no-repeat;cursor:zoom-in}#izh:hover{box-shadow:0 0 0 4px #fff,0 5px 10px -2px #0000004d}#izh img:hover{opacity:0}#izh img{transition:opacity .5s;display:block;width:100%}`;customElements.define("img-zoom-box-hover",m(s));
