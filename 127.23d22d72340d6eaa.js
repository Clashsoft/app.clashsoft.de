"use strict";(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[127],{8127:(w,h,d)=>{d.r(h),d.d(h,{MailtoModule:()=>Z});var m=d(3889),u=d(4453),b=d(807),t=d(2168),C=d(7062);function M(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"th")(1,"div",13)(2,"input",14),t.NdJ("ngModelChange",function(o){const i=t.CHM(e).index;return t.oxw().variableNames[i]=o})("change",function(){return t.CHM(e),t.oxw().update()}),t.qZA(),t.TgZ(3,"button",15),t.NdJ("click",function(){const a=t.CHM(e).index;return t.oxw().deleteColumn(a)}),t.qZA()()()}if(2&s){const e=l.index,n=t.oxw();t.xp6(2),t.Q6J("ngModel",n.variableNames[e])}}function x(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"td")(1,"input",19),t.NdJ("ngModelChange",function(o){const i=t.CHM(e).index;return t.oxw().$implicit[i]=o})("change",function(){t.CHM(e);const o=t.oxw().index;return t.oxw().updateRow(o)})("paste",function(o){const i=t.CHM(e).index,r=t.oxw().index;return t.oxw().paste(o,r,i)}),t.qZA()()}if(2&s){const e=l.index,n=t.oxw().$implicit;t.xp6(1),t.Q6J("ngModel",n[e])}}function f(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"input",16),t.NdJ("ngModelChange",function(o){const i=t.CHM(e).index;return t.oxw().addresses[i]=o})("change",function(){const a=t.CHM(e).index;return t.oxw().updateRow(a)})("paste",function(o){const i=t.CHM(e).index;return t.oxw().paste(o,i,-1)}),t.qZA()(),t.YNc(3,x,2,1,"td",8),t._UZ(4,"td"),t.TgZ(5,"td")(6,"a",17),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"button",18),t.NdJ("click",function(){const a=t.CHM(e).index;return t.oxw().deleteRow(a)}),t.qZA()()()}if(2&s){const e=l.index,n=t.oxw();t.xp6(2),t.Q6J("ngModel",n.addresses[e]),t.xp6(1),t.Q6J("ngForOf",n.variableNames)("ngForTrackBy",n.index),t.xp6(3),t.Q6J("href",n.links[e],t.LSH),t.xp6(1),t.Oqu(n.links[e].substring(0,n.links[e].indexOf("?")))}}const T=[{path:"",component:(()=>{class s{constructor(){this.subject="",this.body="",this.addresses=[],this.variableNames=["1"],this.variables=[],this.links=[]}ngOnInit(){this.subject=localStorage.getItem("subjectTemplate")||"",this.body=localStorage.getItem("bodyTemplate")||"",this.variableNames=(localStorage.getItem("variableNames")||"").split("\n"),this.addresses=(localStorage.getItem("addresses")||"").split("\n"),this.variables=(localStorage.getItem("variables")||"").split("\n").map(e=>e.split("\t")),this.update()}update(){localStorage.setItem("variableNames",this.variableNames.join("\n")),localStorage.setItem("subjectTemplate",this.subject),localStorage.setItem("bodyTemplate",this.body),this.saveRows();const e=[];for(let n=0;n<this.addresses.length;n++){const o=this.getLink(n);e.push(o)}this.links=e}updateRow(e){this.saveRows(),this.links[e]=this.getLink(e)}saveRows(){localStorage.setItem("addresses",this.addresses.join("\n")),localStorage.setItem("variables",this.variables.map(e=>e.join("\t")).join("\n"))}getLink(e){const n=this.addresses[e],o=this.variables[e],a=this.replaceVariables(this.subject,this.variableNames,o),i=this.replaceVariables(this.body,this.variableNames,o);return`mailto:${n}?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(i)}`}replaceVariables(e,n,o){for(let a=0;a<o.length;a++)e=e.replace(`#${n[a]}#`,o[a]||"");return e}addRow(){this.addresses.push(""),this.variables.push(this.variableNames.slice()),this.links.push("")}deleteRow(e){this.addresses.splice(e,1),this.variables.splice(e,1),this.links.splice(e,1),this.saveRows()}addColumn(){this.variableNames.push(`${this.variableNames.length}`);for(const e of this.variables)e.push("")}deleteColumn(e){this.variableNames.splice(e,1);for(const n of this.variables)n.splice(e,1);this.update()}index(e,n){return e}paste(e,n,o){const a=e.clipboardData;if(!a)return;const r=a.getData("text").split("\n").map(c=>c.split("\t"));if(1!==r.length||1!==r[0].length){e.preventDefault();for(let c=0;c<r.length;c++){const _=n+c;_>=this.addresses.length&&this.addRow();for(let p=0;p<r[c].length;p++){const g=o+p;g>=this.variableNames.length&&this.addColumn(),-1===g?this.addresses[_]=r[c][p]:this.variables[_][g]=r[c][p]}}this.update()}}}return s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-mailto"]],decls:46,vars:6,consts:[[1,"container","text-center"],[1,"mb-3"],["for","subject"],["type","text","id","subject",1,"form-control",3,"ngModel","change","ngModelChange"],[1,"form-text"],["for","template"],["id","template","rows","20",1,"form-control",3,"ngModel","change","ngModelChange"],[1,"table","table-bordered","table-condensed"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","button","ngbTooltip","Add Variable/Column",1,"btn","btn-success","bi-plus-square-dotted",3,"click"],[4,"ngFor","ngForOf"],[3,"colSpan"],["type","button","ngbTooltip","Add Row",1,"btn","btn-success",3,"click"],[1,"input-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange","change"],["type","button","ngbTooltip","Delete Variable/Column",1,"btn","btn-danger","bi-trash",3,"click"],["type","email",1,"form-control",3,"ngModel","ngModelChange","change","paste"],[3,"href"],["type","button","ngbTooltip","Delete Row",1,"btn","btn-danger","bi-trash",3,"click"],["type","text",1,"form-control",3,"ngModel","ngModelChange","change","paste"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"h1"),t._uU(2,"mailto Link Generator"),t.qZA(),t.TgZ(3,"div")(4,"div",1)(5,"h2")(6,"label",2),t._uU(7,"Subject"),t.qZA()(),t.TgZ(8,"input",3),t.NdJ("change",function(){return n.update()})("ngModelChange",function(a){return n.subject=a}),t.qZA(),t.TgZ(9,"div",4),t._uU(10," Supports variable insertion with "),t.TgZ(11,"code"),t._uU(12,"#1#"),t.qZA(),t._uU(13,", "),t.TgZ(14,"code"),t._uU(15,"#2#"),t.qZA(),t._uU(16,", ... "),t.qZA()(),t.TgZ(17,"div",1)(18,"h2")(19,"label",5),t._uU(20,"Template"),t.qZA()(),t.TgZ(21,"textarea",6),t.NdJ("change",function(){return n.update()})("ngModelChange",function(a){return n.body=a}),t.qZA(),t.TgZ(22,"div",4),t._uU(23," Supports variable insertion with "),t.TgZ(24,"code"),t._uU(25,"#1#"),t.qZA(),t._uU(26,", "),t.TgZ(27,"code"),t._uU(28,"#2#"),t.qZA(),t._uU(29,", ... HTML is not supported. "),t.qZA()()(),t.TgZ(30,"table",7)(31,"tr")(32,"th"),t._uU(33,"Address"),t.qZA(),t.YNc(34,M,4,1,"th",8),t.TgZ(35,"th")(36,"button",9),t.NdJ("click",function(){return n.addColumn()}),t.qZA()(),t.TgZ(37,"th"),t._uU(38,"mailto-Link"),t.qZA(),t._UZ(39,"th"),t.qZA(),t.YNc(40,f,10,5,"tr",10),t.TgZ(41,"tr"),t._UZ(42,"td",11),t.TgZ(43,"td")(44,"button",12),t.NdJ("click",function(){return n.addRow()}),t._uU(45,"+"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("ngModel",n.subject),t.xp6(13),t.Q6J("ngModel",n.body),t.xp6(13),t.Q6J("ngForOf",n.variableNames)("ngForTrackBy",n.index),t.xp6(6),t.Q6J("ngForOf",n.variables),t.xp6(2),t.Q6J("colSpan",3+n.variableNames.length))},directives:[u.Fj,u.JJ,u.On,m.sg,C._L],styles:["textarea[_ngcontent-%COMP%]{white-space:pre}.table-condensed[_ngcontent-%COMP%]   .input-group[_ngcontent-%COMP%]{padding:0}"]}),s})()}];let v=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[b.Bz.forChild(T)],b.Bz]}),s})(),Z=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[[m.ez,u.u5,v,C.HK]]}),s})()}}]);