"use strict";(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[279],{8279:(q,u,p)=>{p.r(u),p.d(u,{GradingHelperModule:()=>I});var l=p(3286),a=p(9391),d=p(1778),_=p(2269),e=p(4577);let f=(()=>{class n{constructor(){}get savedTemplate(){return localStorage.getItem("grading-helper/template")||""}set savedTemplate(t){localStorage.setItem("grading-helper/template",t)}parse(t){const i={title:"",points:0,maxPoints:0,items:[],children:[]},o=[i];for(const c of t.split("\n")){const r=/^(#+)(.*)\(.*P\/(\d+)P\)$/.exec(c);if(r){const m=r[1].length,C=+r[3],T={title:r[2].trim(),points:C,maxPoints:C,children:[],items:[]};for(;m<o.length;)o.pop();o[m-1].children.push(T),o[m]=T}const g=/^[+-](.*)\(([+-]?\d+)P\)$/.exec(c);if(g){const m={description:g[1].trim(),points:+g[2]};o[o.length-1].items.push(m)}}return i}copy(t){return{title:t.title,points:t.points,maxPoints:t.maxPoints,children:t.children.map(i=>this.copy(i)),items:t.items.map(i=>({description:i.description,points:i.points,checked:i.checked}))}}render(t,i=0){let o="";t.title&&i&&(o=`${"#".repeat(i)} ${t.title} (${t.points}P/${t.maxPoints}P)\n`);for(const c of t.items)c.checked&&(o+=`- ${c.description} (${c.points}P)\n`);for(const c of t.children)o+=this.render(c,i+1);return o}merge(t,i){i.points=t.points,i.maxPoints=t.maxPoints;for(const o of i.items)o.checked=!1;for(const o of t.items){const c=i.items.find(r=>r.description===o.description);c?(c.points=o.points,c.checked=!0):(o.checked=!0,i.items.push(o)),i.points+=o.points}for(const o of t.children){const c=i.children.find(r=>r.title===o.title);c?(this.merge(o,c),i.points+=c.points-c.maxPoints):(i.children.push(o),i.points+=this.initNewSection(o))}}initNewSection(t){let i=0;for(const o of t.items)o.checked=!0,i+=o.points;for(const o of t.children)i+=this.initNewSection(o);return i}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),x=(()=>{class n{constructor(){this.prefix="grading-helper/tabs/"}saveTab(t){localStorage.setItem(this.prefix+t.id,JSON.stringify(t))}loadTab(t){const i=localStorage.getItem(this.prefix+t);return i?JSON.parse(i):void 0}loadTabs(){const t=[];for(let i=0;i<localStorage.length;i++){const o=localStorage.key(i);o.startsWith(this.prefix)&&t.push(this.loadTab(o.substring(this.prefix.length)))}return t}deleteTab(t){localStorage.removeItem(this.prefix+t)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function v(n,s){if(1&n&&e._uU(0),2&n){const t=e.oxw();e.lnq(" ",t.section.title," (",t.section.points,"P/",t.section.maxPoints,"P)\n")}}function b(n,s){if(1&n&&(e.TgZ(0,"h1"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function S(n,s){if(1&n&&(e.TgZ(0,"h2"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function Z(n,s){if(1&n&&(e.TgZ(0,"h3"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function J(n,s){if(1&n&&(e.TgZ(0,"h4"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function y(n,s){if(1&n&&(e.TgZ(0,"h5"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function G(n,s){if(1&n&&(e.TgZ(0,"h6"),e.GkF(1,5),e.qZA()),2&n){e.oxw();const t=e.MAs(1);e.xp6(1),e.Q6J("ngTemplateOutlet",t)}}function M(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li"),e.TgZ(1,"div",6),e.NdJ("auxclick",function(){const c=e.CHM(t).$implicit;return e.oxw().setChecked(c,void 0)}),e.TgZ(2,"input",7),e.NdJ("ngModelChange",function(o){const r=e.CHM(t).$implicit;return e.oxw().setChecked(r,o)}),e.qZA(),e.TgZ(3,"label",8),e._uU(4),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=s.$implicit,i=s.index,o=e.oxw();e.xp6(2),e.Q6J("id",o.idPrefix+i)("indeterminate",void 0===t.checked)("ngModel",t.checked),e.xp6(1),e.Q6J("for",o.idPrefix+i),e.xp6(1),e.AsE(" ",t.description," (",t.points,"P) ")}}function N(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"app-section",9),e.NdJ("pointsChanged",function(o){return e.CHM(t),e.oxw().applyDelta(o)}),e.qZA()}if(2&n){const t=s.$implicit,i=e.oxw();e.Q6J("section",t)("depth",i.depth+1)}}let w=(()=>{class n{constructor(){this.pointsChanged=new e.vpe,this.idPrefix=`item-${Math.random().toString(36)}-`}ngOnInit(){this.depth||(this.depth=0)}setChecked(t,i){let o;o=t.checked&&!i?-t.points:!t.checked&&i?+t.points:0,t.checked=i,this.applyDelta(o)}applyDelta(t){0!==t&&(this.section.points+=t,this.pointsChanged.emit(t))}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-section"]],inputs:{section:"section",depth:"depth"},outputs:{pointsChanged:"pointsChanged"},decls:12,vars:9,consts:[["header",""],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngFor","ngForOf"],[3,"section","depth","pointsChanged",4,"ngFor","ngForOf"],[3,"ngTemplateOutlet"],[1,"custom-control","custom-checkbox",3,"auxclick"],["type","checkbox",1,"custom-control-input",3,"id","indeterminate","ngModel","ngModelChange"],[1,"custom-control-label",3,"for"],[3,"section","depth","pointsChanged"]],template:function(t,i){1&t&&(e.YNc(0,v,1,3,"ng-template",null,0,e.W1O),e.ynx(2,1),e.YNc(3,b,2,1,"h1",2),e.YNc(4,S,2,1,"h2",2),e.YNc(5,Z,2,1,"h3",2),e.YNc(6,J,2,1,"h4",2),e.YNc(7,y,2,1,"h5",2),e.YNc(8,G,2,1,"h6",2),e.BQk(),e.TgZ(9,"ul"),e.YNc(10,M,5,6,"li",3),e.qZA(),e.YNc(11,N,1,2,"app-section",4)),2&t&&(e.xp6(2),e.Q6J("ngSwitch",i.depth),e.xp6(1),e.Q6J("ngSwitchCase",1),e.xp6(1),e.Q6J("ngSwitchCase",2),e.xp6(1),e.Q6J("ngSwitchCase",3),e.xp6(1),e.Q6J("ngSwitchCase",4),e.xp6(1),e.Q6J("ngSwitchCase",5),e.xp6(1),e.Q6J("ngSwitchCase",6),e.xp6(2),e.Q6J("ngForOf",i.section.items),e.xp6(1),e.Q6J("ngForOf",i.section.children))},directives:[l.RF,l.n9,l.sg,l.tP,a.Wl,a.JJ,a.On,n],styles:[""]}),n})();var h=p(1807);function A(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",4),e.NdJ("cbOnSuccess",function(){return e.CHM(t),e.oxw().copySuccess()}),e._uU(1),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("cbContent",t.rendered),e.xp6(1),e.hij(" ",t.copyText," ")}}let H=(()=>{class n{constructor(t,i){this.templateService=t,this.gradingHelperService=i,this.copyText="Copy"}ngOnInit(){this.render()}itemsChanged(){this.render(),this.save()}save(){this.gradingHelperService.saveTab(this.tab)}render(){this.rendered=this.templateService.render(this.tab.section)}parse(){const t=this.templateService.parse(this.rendered);this.templateService.merge(t,this.tab.section),this.render(),this.save()}copySuccess(){this.copyText="Copied!",setTimeout(()=>this.copyText="Copy",1e3)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-grading-tab"]],inputs:{tab:"tab"},decls:4,vars:2,consts:[[3,"section","pointsChanged"],[1,"position-relative"],["rows","20",1,"form-control",3,"ngModel","ngModelChange","change"],["type","button","class","btn btn-primary copy-button","ngxClipboard","",3,"cbContent","cbOnSuccess",4,"ngxClipboardIfSupported"],["type","button","ngxClipboard","",1,"btn","btn-primary","copy-button",3,"cbContent","cbOnSuccess"]],template:function(t,i){1&t&&(e.TgZ(0,"app-section",0),e.NdJ("pointsChanged",function(){return i.itemsChanged()}),e.qZA(),e.TgZ(1,"div",1),e.TgZ(2,"textarea",2),e.NdJ("ngModelChange",function(c){return i.rendered=c})("change",function(){return i.parse()}),e.qZA(),e.YNc(3,A,2,2,"button",3),e.qZA()),2&t&&(e.Q6J("section",i.tab.section),e.xp6(2),e.Q6J("ngModel",i.rendered))},directives:[w,a.Fj,a.JJ,a.On,h.rS,h.yb],styles:[".copy-button[_ngcontent-%COMP%]{position:absolute;top:1rem;right:1rem}"]}),n})();function k(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"textarea",11),e.NdJ("ngModelChange",function(o){return e.CHM(t),e.oxw().template=o})("change",function(){return e.CHM(t),e.oxw().saveTemplate()}),e.qZA()}if(2&n){const t=e.oxw();e.Q6J("ngModel",t.template)}}function O(n,s){if(1&n&&e._UZ(0,"app-grading-tab",14),2&n){const t=e.oxw().$implicit;e.Q6J("tab",t)}}function F(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"li",12),e.TgZ(1,"a",5),e._uU(2),e.TgZ(3,"span",13),e.NdJ("click",function(o){const r=e.CHM(t).$implicit;return e.oxw().close(o,r)}),e._uU(4,"\xd7"),e.qZA(),e.qZA(),e.YNc(5,O,1,1,"ng-template",6),e.qZA()}if(2&n){const t=s.$implicit;e.Q6J("ngbNavItem",t.id),e.xp6(2),e.hij(" ",t.title," ")}}const Q=[{path:"",component:(()=>{class n{constructor(t,i){this.templateService=t,this.gradingHelperService=i,this.active="template",this.tabs=[]}ngOnInit(){this.template=this.templateService.savedTemplate,this.section=this.templateService.parse(this.template),this.tabs=this.gradingHelperService.loadTabs()}close(t,i){this.tabs=this.tabs.filter(o=>o!==i),this.gradingHelperService.deleteTab(i.id),t.preventDefault(),t.stopImmediatePropagation()}add(t){this.tabs.push({id:Math.random().toString(36),title:`Student ${this.tabs.length+1}`,section:this.templateService.copy(this.section)}),t.preventDefault()}saveTemplate(){this.templateService.savedTemplate=this.template,this.section=this.templateService.parse(this.template)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(f),e.Y36(x))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-grading-helper"]],decls:14,vars:3,consts:[[1,"container"],[1,"text-center"],["ngbNav","",1,"nav-tabs",3,"activeId","activeIdChange"],["nav","ngbNav"],["ngbNavItem","template"],["ngbNavLink",""],["ngbNavContent",""],[3,"ngbNavItem",4,"ngFor","ngForOf"],[1,"nav-item"],["href","",1,"nav-link","close",3,"click"],[1,"mt-2",3,"ngbNavOutlet"],["rows","30",1,"form-control","text-monospace",3,"ngModel","ngModelChange","change"],[3,"ngbNavItem"],[1,"close","position-relative","pl-2","font-weight-light",3,"click"],[3,"tab"]],template:function(t,i){if(1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1",1),e._uU(2,"Grading Helper"),e.qZA(),e.TgZ(3,"ul",2,3),e.NdJ("activeIdChange",function(c){return i.active=c}),e.TgZ(5,"li",4),e.TgZ(6,"a",5),e._uU(7," Template "),e.qZA(),e.YNc(8,k,1,1,"ng-template",6),e.qZA(),e.YNc(9,F,6,2,"li",7),e.TgZ(10,"li",8),e.TgZ(11,"a",9),e.NdJ("click",function(c){return i.add(c)}),e._uU(12,"+"),e.qZA(),e.qZA(),e.qZA(),e._UZ(13,"div",10),e.qZA()),2&t){const o=e.MAs(4);e.xp6(3),e.Q6J("activeId",i.active),e.xp6(6),e.Q6J("ngForOf",i.tabs),e.xp6(4),e.Q6J("ngbNavOutlet",o)}},directives:[d.Pz,d.nv,d.Vx,d.uN,l.sg,d.tO,a.Fj,a.JJ,a.On,H],styles:[""]}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[_.Bz.forChild(Q)],_.Bz]}),n})(),I=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,a.u5,d.Oz,P,h.Iq]]}),n})()}}]);