import{c as v,a as z,u as b,h as o}from"./css.js";import{u as x}from"./use-effect.js";/*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 *//*!
 * slimmodule.github.io v1.0.1 - (c) 2022 by kimthiendung@gmail.com - Apache-2.0 License.
 */function h({src:t,srcOrigin:g,rounded:m,size:e}){const p=b();return x(()=>{const u=p.current;u&&u.addEventListener("mousemove",function(d){let f=this.querySelector("#ihz-1"),y=this.querySelector("#ihz-2"),i=y.style,r=d.pageX-this.offsetLeft,s=d.pageY-this.offsetTop,c=f.offsetWidth,l=f.offsetHeight,a=r/c*100,n=s/l*100;r>.01*c&&(a+=.15*a),s>=.01*l&&(n+=.15*n),i.backgroundPositionX=a-9+"%",i.backgroundPositionY=n-9+"%",i.left=r-e/2+"px",i.top=s-e/2+"px"},!1)}),o("host",{shadowDom:!0},t&&o("div",{ref:p,id:"ihz"},o("img",{src:t,id:"ihz-1",alt:"Zoom Image on Mouseover",style:{borderRadius:`${m}px`}}),o("div",{id:"ihz-2",style:{backgroundImage:`url(${g||t})`,width:`${e}px`,height:`${e}px`}})))}h.props={src:{type:String,value:""},srcOrigin:{type:String,value:""},size:{type:Number,value:240},rounded:{type:Number,value:0}};h.styles=v`#ihz{height:auto;position:relative;margin:0}#ihz-1{width:100%;height:auto}#ihz:hover,#ihz:active{cursor:zoom-in;display:block}#ihz:hover #ihz-2,#ihz:active #ihz-2{opacity:1}#ihz-2{background-repeat:no-repeat;background-color:#fff;box-shadow:0 5px 10px -2px #0000004d;pointer-events:none;position:absolute;opacity:0;border:4px solid #fff;z-index:99;border-radius:100%;display:block;transition:opacity .2s}`;customElements.define("img-zoom-hover",z(h));
