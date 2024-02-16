import{r as e,h as t}from"./p-d52b3602.js";import{f as a,a as l}from"./p-ab990550.js";import{r as n}from"./p-301193c6.js";const i=e=>{let t;try{t=JSON.parse(e)}catch(a){t=e}return t},s=class{constructor(t){e(this,t)}render(){const{shortName:e="Login",badge:s,badgeLabel:o}=(i(this.userNavigation)||[]).find((({type:e})=>"userInfo"===e))||{shortName:"Login"};return t("scale-telekom-header",{"app-name":this.appName,"app-name-link":this.appNameLink,"app-name-click":this.appNameClick,"logo-href":this.logoHref,"logo-title":this.logoTitle,"logo-hide-title":this.logoHideTitle},i(this.sectorNavigation)?t("scale-telekom-nav-list",{slot:"meta-nav-external",variant:"meta-nav-external",alignment:"left"},i(this.sectorNavigation).map((e=>t("scale-telekom-nav-item",null,t("a",{href:e.href||"javascript:void(0);",id:e.id,target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name))))):null,i(this.addonNavigation)?t("scale-telekom-nav-list",{slot:"meta-nav",variant:"meta-nav",alignment:"right"},i(this.addonNavigation).map((e=>t("scale-telekom-nav-item",null,t("a",{href:e.href||"javascript:void(0);",id:e.id,target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name))))):null,i(this.mainNavigation)?t("scale-telekom-nav-list",{variant:"main-nav",slot:"main-nav"},i(this.mainNavigation).map((e=>{const{selected:n}=a(i(this.mainNavigation),this.activeRouteId),s=n&&l(i(this.mainNavigation),n.id);return t("scale-telekom-nav-item",{active:(o=e.id,s&&s.id===o)},t("a",{href:e.href||"javascript:void(0);",id:e.id,target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},t("span",null,e.name)),e.children?t("scale-telekom-nav-flyout",{hover:!0},t("scale-telekom-mega-menu",null,e.children.map((e=>t("scale-telekom-mega-menu-column",null,t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)},slot:"heading"},e.name),e.children?t("ul",null,e.children.map((e=>t("li",null,t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name))))):null))))):null);var o}))):null,i(this.iconNavigation)||i(this.userNavigation)?t("scale-telekom-nav-list",{variant:"functions",slot:"functions",alignment:"right"},i(this.userNavigation).length>0&&t("scale-telekom-nav-item",{class:"user-menu-desktop"},t("a",{href:"javascript:void(0);",ref:e=>this.userMenuDesktopLink=e,onKeyDown:e=>{[" ","Enter","Escape"].includes(e.key)&&(e.preventDefault(),this.userMenuDesktopTrigger.click())},onClick:e=>{e.stopPropagation(),this.userMenuDesktopTrigger.click()}},t("scale-menu-flyout",{direction:"bottom-left"},s?t("scale-badge",{count:o,label:e,"label-visually-hidden":!0},t("scale-icon-user-file-user",null," ")):t("scale-icon-user-file-user",null," "),t("scale-menu-flyout-list",null,t("app-navigation-user-menu",{hide:()=>{this.userMenuDesktopTrigger.click(),this.userMenuDesktopLink.focus()},navigation:i(this.userNavigation)})),t("div",{slot:"trigger",class:"user-menu-trigger",ref:e=>this.userMenuDesktopTrigger=e})))),i(this.userNavigation).length>0&&t("scale-telekom-nav-item",{class:"user-menu-mobile"},t("button",{ref:e=>{this.userMenuMobileTrigger=e}},t("scale-badge",{count:o,label:e,"label-visually-hidden":!0},t("scale-icon-user-file-user",null," "))),t("scale-telekom-nav-flyout",{variant:"mobile"},t("scale-telekom-mobile-flyout-canvas",null,t("app-navigation-user-menu",{slot:"mobile-main-nav",hide:()=>{this.userMenuMobileTrigger.click(),this.userMenuMobileTrigger.focus()},navigation:i(this.userNavigation)})))),(i(this.iconNavigation)||[]).filter((({id:e})=>"menu"!==e)).map((e=>t("scale-telekom-nav-item",null,t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",id:e.id,onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.badgeLabel?t("scale-badge",{count:e.badgeCount,label:e.badgeLabel,"label-visually-hidden":e.labelVisuallyHidden,"aria-label-translation":e.ariaLabelTranslation},n({tag:`scale-icon-${e.icon}`,attributes:{}})):n({tag:`scale-icon-${e.icon}`,attributes:{}}))))),i(this.mainNavigation)||i(this.sectorNavigation)||i(this.addonNavigation)?t("scale-telekom-nav-item",{"hide-on-desktop":!0},t("button",null,t("scale-badge",null,t("scale-icon-action-menu",null))),t("scale-telekom-nav-flyout",{variant:"mobile"},t("scale-telekom-mobile-flyout-canvas",{"app-name":this.appName,"app-name-link":this.appNameLink||"javascript:void(0);","app-name-click":e=>{"function"==typeof this.appNameClick&&this.appNameClick(e)}},i(this.mainNavigation)?t("scale-telekom-mobile-menu",{slot:"mobile-main-nav"},i(this.mainNavigation).map((e=>{const{selected:n,parent:s}=a(i(this.mainNavigation),this.activeRouteId),o=n&&l(i(this.mainNavigation),n.id),c=e=>e===this.activeRouteId;return t("scale-telekom-mobile-menu-item",{open:(e=>o&&o.id===e&&e!==this.activeRouteId)(e.id),active:c(e.id)},t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name),e.children?e.children.map((e=>t("scale-telekom-mobile-menu-item",{slot:"children",active:c(e.id),open:s&&s.id===e.id},t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name),e.children?e.children.map((e=>t("scale-telekom-mobile-menu-item",{slot:"children",active:c(e.id)},t("a",{href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name)))):null))):null)}))):null,i(this.sectorNavigation)?t("scale-telekom-nav-list",{variant:"meta-nav",slot:"mobile-meta-nav-external",alignment:"left"},i(this.sectorNavigation).map((e=>t("scale-telekom-nav-item",null,t("a",{id:e.id,href:e.href||"javascript:void(0);",target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name))))):null,i(this.addonNavigation)?t("scale-telekom-nav-list",{variant:"meta-nav",slot:"mobile-meta-nav",alignment:"left"},i(this.addonNavigation).map((e=>t("scale-telekom-nav-item",null,t("a",{href:e.href||"javascript:void(0);",id:e.id,target:e.target||"_self",onClick:t=>{"function"==typeof e.onClick&&e.onClick(t)}},e.name))))):null))):null):null)}};s.style="/**\n * @license\n * Scale https://github.com/telekom/scale\n *\n * Copyright (c) 2021 Egor Kirpichev and contributors, Deutsche Telekom AG\n *\n * This Source Code Form is subject to the terms of the Mozilla Public\n * License, v. 2.0. If a copy of the MPL was not distributed with this\n * file, You can obtain one at https://mozilla.org/MPL/2.0/.\n */\n\n\nscale-telekom-header-data-back-compat .user-menu-mobile {\n  display: block;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop {\n  display: none;\n}\n\nscale-telekom-header-data-back-compat .user-menu-desktop scale-menu-flyout {\n  display: flex;\n}\n\nscale-telekom-header-data-back-compat .user-menu-trigger {\n  position: relative;\n  left: 24px;\n}\n\n@media screen and (min-width: 640px) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 8px);\n  }\n}\n\n@media screen and (min-width: 1040px) {\n  scale-telekom-header-data-back-compat .user-menu-mobile {\n    display: none;\n  }\n\n  scale-telekom-header-data-back-compat .user-menu-desktop {\n    display: block;\n  }\n}\n\ndia screen and (--xl) {\n  scale-telekom-header-data-back-compat .user-menu-trigger {\n    top: calc(var(--_spacing-bottom-slotted-bottom) + 12px);\n  }\n}\n";export{s as scale_telekom_header_data_back_compat}