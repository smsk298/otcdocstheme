import{r as e,h as t,a as s,g as i}from"./p-7c16486e.js";import{s as a}from"./p-bf956c1d.js";const o=class{constructor(t){e(this,t),this.label="",this.status="",this.invalid=!1,this.value="",this.selectText="Select all",this.unselectText="Unselect all"}handleCheckboxChange(e){const t=e.composedPath()[0],{tagName:s,checked:i}=t;"scale-checkbox"===s.toLowerCase()&&(t!==this.groupNode||this.updateChildrenCheckboxStates(i),this.updateParentCheckboxState())}componentDidRender(){""!==this.status&&a({tag:"deprecated",message:'Property "status" is deprecated. Please use the "invalid" property!',type:"warn",source:this.host})}getChildNodes(){return Array.from(this.host.querySelector("fieldset").querySelectorAll("scale-checkbox"))}updateChildrenCheckboxStates(e){this.getChildNodes().filter((e=>!e.disabled)).forEach((t=>{void 0!==e&&(t.checked=e,t.indeterminate=!1)}))}updateParentCheckboxState(){const e=this.getChildNodes(),t=null==e?void 0:e.map((e=>e.checked)),s=null==e?void 0:e.map((e=>e.indeterminate)),i=null==e?void 0:e.map((e=>e.disabled)),a=t.every(Boolean),o=t.some(Boolean),c=s.some(Boolean),h=i.every(Boolean);this.checked=a||o,this.indeterminate=c||o&&!a,this.disabled=h,this.actionText=a?this.unselectText:this.selectText}render(){return t(s,{class:"checkbox-group"},t("scale-checkbox",{ref:e=>this.groupNode=e,name:this.name,label:this.label,ariaLabel:`${this.ariaLabel||this.label} - ${this.actionText}`,helperText:this.helperText,status:this.status,invalid:this.invalid,value:this.value,inputId:this.inputId,checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,part:"parent-checkbox"}),t("fieldset",{part:"fieldset"},t("legend",null,this.ariaLabel||this.label),t("slot",null)))}componentDidLoad(){this.updateParentCheckboxState()}get host(){return i(this)}};o.style=":host,.checkbox-group{--spacing-left-container:var(--scl-spacing-24);--spacing-left-checkbox:var(--scl-spacing-8);--spacing-top-slotted-item:var(--scl-spacing-4)}.checkbox-group{display:inline-flex;flex-direction:column}.checkbox-group [part='fieldset']{display:flex;flex-direction:column;border:0;padding:0;margin:0;margin-left:var(--spacing-left-container)}.checkbox-group legend{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.checkbox-group scale-checkbox{margin:var(--spacing-top-slotted-item) 0}";export{o as scale_checkbox_group}