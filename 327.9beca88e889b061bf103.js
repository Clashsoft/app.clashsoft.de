(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[327],{3327:(t,e,n)=>{"use strict";n.r(e),n.d(e,{GradingHelperModule:()=>A});var i=n(4301),o=n(3454),s=n(1153),c=n(3548),r=n(9788);let a=(()=>{class t{constructor(){}get savedTemplate(){return localStorage.getItem("grading-helper/template")||""}set savedTemplate(t){localStorage.setItem("grading-helper/template",t)}parse(t){const e={title:"",points:0,maxPoints:0,items:[],children:[]},n=[e];for(const i of t.split("\n")){const t=/^(#+)(.*)\(.*P\/(\d+)P\)$/.exec(i);if(t){const e=t[1].length,i=+t[3],o={title:t[2].trim(),points:i,maxPoints:i,children:[],items:[]};for(;e<n.length;)n.pop();n[e-1].children.push(o),n[e]=o}const e=/^[+-](.*)\(([+-]?\d+)P\)$/.exec(i);if(e){const t={description:e[1].trim(),points:+e[2]};n[n.length-1].items.push(t)}}return e}copy(t){return{title:t.title,points:t.points,maxPoints:t.maxPoints,children:t.children.map(t=>this.copy(t)),items:t.items.map(t=>({description:t.description,points:t.points,checked:t.checked}))}}render(t,e=0){let n="";t.title&&e&&(n=`${"#".repeat(e)} ${t.title} (${t.points}P/${t.maxPoints}P)\n`);for(const i of t.items)i.checked&&(n+=`- ${i.description} (${i.points}P)\n`);for(const i of t.children)n+=this.render(i,e+1);return n}merge(t,e){e.points=t.points,e.maxPoints=t.maxPoints;for(const n of e.items)n.checked=!1;for(const n of t.items){const t=e.items.find(t=>t.description===n.description);t?(t.points=n.points,t.checked=!0):(n.checked=!0,e.items.push(n)),e.points+=n.points}for(const n of t.children){const t=e.children.find(t=>t.title===n.title);t?(this.merge(n,t),e.points+=t.points-t.maxPoints):(e.children.push(n),e.points+=this.initNewSection(n))}}initNewSection(t){let e=0;for(const n of t.items)n.checked=!0,e+=n.points;for(const n of t.children)e+=this.initNewSection(n);return e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),p=(()=>{class t{constructor(){this.prefix="grading-helper/tabs/"}saveTab(t){localStorage.setItem(this.prefix+t.id,JSON.stringify(t))}loadTab(t){return JSON.parse(localStorage.getItem(this.prefix+t))}loadTabs(){const t=[];for(let e=0;e<localStorage.length;e++){const n=localStorage.key(e);n.startsWith(this.prefix)&&t.push(this.loadTab(n.substring(this.prefix.length)))}return t}deleteTab(t){localStorage.removeItem(this.prefix+t)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function l(t,e){if(1&t&&r._uU(0),2&t){const t=r.oxw();r.lnq(" ",t.section.title," (",t.section.points,"P/",t.section.maxPoints,"P)\n")}}function h(t,e){if(1&t&&(r.TgZ(0,"h1"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function d(t,e){if(1&t&&(r.TgZ(0,"h2"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function g(t,e){if(1&t&&(r.TgZ(0,"h3"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function u(t,e){if(1&t&&(r.TgZ(0,"h4"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function m(t,e){if(1&t&&(r.TgZ(0,"h5"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function f(t,e){if(1&t&&(r.TgZ(0,"h6"),r.GkF(1,5),r.qZA()),2&t){r.oxw();const t=r.MAs(1);r.xp6(1),r.Q6J("ngTemplateOutlet",t)}}function x(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"li"),r.TgZ(1,"div",6),r.NdJ("auxclick",function(){const e=r.CHM(t).$implicit;return r.oxw().setChecked(e,void 0)}),r.TgZ(2,"input",7),r.NdJ("ngModelChange",function(e){const n=r.CHM(t).$implicit;return r.oxw().setChecked(n,e)}),r.qZA(),r.TgZ(3,"label",8),r._uU(4),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit,n=e.index,i=r.oxw();r.xp6(2),r.Q6J("id",i.idPrefix+n)("indeterminate",void 0===t.checked)("ngModel",t.checked),r.xp6(1),r.Q6J("for",i.idPrefix+n),r.xp6(1),r.AsE(" ",t.description," (",t.points,"P) ")}}function v(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"app-section",9),r.NdJ("pointsChanged",function(e){return r.CHM(t),r.oxw().applyDelta(e)}),r.qZA()}if(2&t){const t=e.$implicit,n=r.oxw();r.Q6J("section",t)("depth",n.depth+1)}}let b=(()=>{class t{constructor(){this.pointsChanged=new r.vpe,this.idPrefix=`item-${Math.random().toString(36)}-`}ngOnInit(){this.depth||(this.depth=0)}setChecked(t,e){let n;n=t.checked&&!e?-t.points:!t.checked&&e?+t.points:0,t.checked=e,this.applyDelta(n)}applyDelta(t){0!==t&&(this.section.points+=t,this.pointsChanged.emit(t))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-section"]],inputs:{section:"section",depth:"depth"},outputs:{pointsChanged:"pointsChanged"},decls:12,vars:9,consts:[["header",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],[3,"section","depth","pointsChanged",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"custom-control","custom-checkbox",3,"auxclick"],["type","checkbox",1,"custom-control-input",3,"id","indeterminate","ngModel","ngModelChange"],[1,"custom-control-label",3,"for"],[3,"section","depth","pointsChanged"]],template:function(t,e){1&t&&(r.YNc(0,l,1,3,"ng-template",null,0,r.W1O),r.ynx(2,1),r.YNc(3,h,2,1,"h1",2),r.YNc(4,d,2,1,"h2",2),r.YNc(5,g,2,1,"h3",2),r.YNc(6,u,2,1,"h4",2),r.YNc(7,m,2,1,"h5",2),r.YNc(8,f,2,1,"h6",2),r.BQk(),r.TgZ(9,"ul"),r.YNc(10,x,5,6,"li",3),r.qZA(),r.YNc(11,v,1,2,"app-section",4)),2&t&&(r.xp6(2),r.Q6J("ngSwitch",e.depth),r.xp6(1),r.Q6J("ngSwitchCase",1),r.xp6(1),r.Q6J("ngSwitchCase",2),r.xp6(1),r.Q6J("ngSwitchCase",3),r.xp6(1),r.Q6J("ngSwitchCase",4),r.xp6(1),r.Q6J("ngSwitchCase",5),r.xp6(1),r.Q6J("ngSwitchCase",6),r.xp6(2),r.Q6J("ngForOf",e.section.items),r.xp6(1),r.Q6J("ngForOf",e.section.children))},directives:[i.RF,i.n9,i.sg,i.tP,o.Wl,o.JJ,o.On,t],styles:[""]}),t})();var Z=n(7738);function T(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"button",4),r.NdJ("cbOnSuccess",function(){return r.CHM(t),r.oxw().copySuccess()}),r._uU(1),r.qZA()}if(2&t){const t=r.oxw();r.Q6J("cbContent",t.rendered),r.xp6(1),r.hij(" ",t.copyText," ")}}let C=(()=>{class t{constructor(t,e){this.templateService=t,this.gradingHelperService=e,this.copyText="Copy"}ngOnInit(){this.render()}itemsChanged(){this.render(),this.save()}save(){this.gradingHelperService.saveTab(this.tab)}render(){this.rendered=this.templateService.render(this.tab.section)}parse(){const t=this.templateService.parse(this.rendered);this.templateService.merge(t,this.tab.section),this.render(),this.save()}copySuccess(){this.copyText="Copied!",setTimeout(()=>this.copyText="Copy",1e3)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a),r.Y36(p))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-grading-tab"]],inputs:{tab:"tab"},decls:4,vars:2,consts:[[3,"section","pointsChanged"],[1,"position-relative"],["rows","20",1,"form-control",3,"ngModel","ngModelChange","change"],["type","button","class","btn btn-primary copy-button","ngxClipboard","",3,"cbContent","cbOnSuccess",4,"ngxClipboardIfSupported"],["type","button","ngxClipboard","",1,"btn","btn-primary","copy-button",3,"cbContent","cbOnSuccess"]],template:function(t,e){1&t&&(r.TgZ(0,"app-section",0),r.NdJ("pointsChanged",function(){return e.itemsChanged()}),r.qZA(),r.TgZ(1,"div",1),r.TgZ(2,"textarea",2),r.NdJ("ngModelChange",function(t){return e.rendered=t})("change",function(){return e.parse()}),r.qZA(),r.YNc(3,T,2,2,"button",3),r.qZA()),2&t&&(r.Q6J("section",e.tab.section),r.xp6(2),r.Q6J("ngModel",e.rendered))},directives:[b,o.Fj,o.JJ,o.On,Z.rS,Z.yb],styles:[".copy-button[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}"]}),t})();function S(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"textarea",11),r.NdJ("ngModelChange",function(e){return r.CHM(t),r.oxw().template=e})("change",function(){return r.CHM(t),r.oxw().saveTemplate()}),r.qZA()}if(2&t){const t=r.oxw();r.Q6J("ngModel",t.template)}}function J(t,e){if(1&t&&r._UZ(0,"app-grading-tab",14),2&t){const t=r.oxw().$implicit;r.Q6J("tab",t)}}function w(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"li",12),r.TgZ(1,"a",5),r._uU(2),r.TgZ(3,"span",13),r.NdJ("click",function(e){const n=r.CHM(t).$implicit;return r.oxw().close(e,n)}),r._uU(4,"\xd7"),r.qZA(),r.qZA(),r.YNc(5,J,1,1,"ng-template",6),r.qZA()}if(2&t){const t=e.$implicit;r.Q6J("ngbNavItem",t.id),r.xp6(2),r.hij(" ",t.title," ")}}const k=[{path:"",component:(()=>{class t{constructor(t,e){this.templateService=t,this.gradingHelperService=e,this.active="template",this.tabs=[]}ngOnInit(){this.template=this.templateService.savedTemplate,this.section=this.templateService.parse(this.template),this.tabs=this.gradingHelperService.loadTabs()}close(t,e){this.tabs=this.tabs.filter(t=>t!==e),this.gradingHelperService.deleteTab(e.id),t.preventDefault(),t.stopImmediatePropagation()}add(t){this.tabs.push({id:Math.random().toString(36),title:`Student ${this.tabs.length+1}`,section:this.templateService.copy(this.section)}),t.preventDefault()}saveTemplate(){this.templateService.savedTemplate=this.template,this.section=this.templateService.parse(this.template)}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(a),r.Y36(p))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-grading-helper"]],decls:14,vars:3,consts:[[1,"container"],[1,"text-center"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],["ngbNavItem","template"],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavItem",4,"ngFor","ngForOf"],[1,"nav-item"],["href","",1,"nav-link","close",3,"click"],[1,"mt-2",3,"ngbNavOutlet"],["rows","30",1,"form-control","text-monospace",3,"ngModel","ngModelChange","change"],[3,"ngbNavItem"],[1,"close","position-relative","pl-2","font-weight-light",3,"click"],[3,"tab"]],template:function(t,e){if(1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"h1",1),r._uU(2,"Grading Helper"),r.qZA(),r.TgZ(3,"ul",2,3),r.NdJ("activeIdChange",function(t){return e.active=t}),r.TgZ(5,"li",4),r.TgZ(6,"a",5),r._uU(7," Template "),r.qZA(),r.YNc(8,S,1,1,"ng-template",6),r.qZA(),r.YNc(9,w,6,2,"li",7),r.TgZ(10,"li",8),r.TgZ(11,"a",9),r.NdJ("click",function(t){return e.add(t)}),r._uU(12,"+"),r.qZA(),r.qZA(),r.qZA(),r._UZ(13,"div",10),r.qZA()),2&t){const t=r.MAs(4);r.xp6(3),r.Q6J("activeId",e.active),r.xp6(6),r.Q6J("ngForOf",e.tabs),r.xp6(4),r.Q6J("ngbNavOutlet",t)}},directives:[s.Pz,s.nv,s.Vx,s.uN,i.sg,s.tO,o.Fj,o.JJ,o.On,C],styles:[""]}),t})()}];let N=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),t})(),A=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[i.ez,o.u5,s.Oz,N,Z.Iq]]}),t})()}}]);