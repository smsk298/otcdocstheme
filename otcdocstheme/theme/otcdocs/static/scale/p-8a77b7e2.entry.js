import{r as t,h as s,a as i,g as l}from"./p-7c16486e.js";const e=class{constructor(s){t(this,s),this.size=24,this.fill="currentColor",this.color="currentColor",this.selected=!1,this.decorative=!1}connectedCallback(){this.hostElement.hasAttribute("styles")||(this.hostElement.style.display="inline-flex")}render(){return s(i,null,s("svg",Object.assign({class:"scale-icon",xmlns:"http://www.w3.org/2000/svg",width:this.size,height:this.size,viewBox:"0 0 24 24"},this.decorative?{"aria-hidden":"true"}:{}),this.accessibilityTitle&&s("title",null,this.accessibilityTitle),s("g",{fill:"currentColor"===this.fill?this.color:this.fill},s("g",null,s("path",this.selected?{"fill-rule":"evenodd",d:"M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11A11 11 0 0012 1zm5.47 14a.75.75 0 01-.66.39.785.785 0 01-.36-.09l-5.2-2.855v-7.71a.75.75 0 111.5 0v6.82l4.42 2.415a.75.75 0 01.3 1.03z"}:{d:"M12 1c6.1 0 11 4.9 11 11s-4.9 11-11 11S1 18.1 1 12 5.95 1 12 1zm0 1.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5-4.25-9.5-9.5-9.5zM12 4c.4 0 .75.3.75.75v6.8l4.4 2.4c.4.2.5.7.3 1.05-.15.25-.4.4-.65.4-.1 0-.25-.05-.35-.1l-5.2-2.85v-7.7c0-.4.35-.75.75-.75z","fill-rule":"evenodd"})))))}get hostElement(){return l(this)}};e.style="scale-icon{--display:inline-flex;--transition:all var(--scl-motion-duration-fast)\n    var(--scl-motion-easing-standard);display:var(--display)}scale-icon path{transition:var(--transition)}@media screen and (forced-colors: active), (-ms-high-contrast: active){scale-icon svg,.scale-icon{color:white;stroke:white}}";export{e as scale_icon_content_clock}