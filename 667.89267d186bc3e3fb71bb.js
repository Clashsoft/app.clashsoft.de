(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[667],{3667:(e,t,n)=>{"use strict";n.r(t),n.d(t,{MailtoModule:()=>u});var s=n(4301),o=n(3454),a=n(3548),i=n(9788);function l(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"th"),i.TgZ(1,"div",14),i.TgZ(2,"input",15),i.NdJ("ngModelChange",function(t){const n=i.CHM(e).index;return i.oxw().variableNames[n]=t})("change",function(){return i.CHM(e),i.oxw().update()}),i.qZA(),i.TgZ(3,"button",16),i.NdJ("click",function(){const t=i.CHM(e).index;return i.oxw().deleteColumn(t)}),i._uU(4," \xd7 "),i.qZA(),i.qZA(),i.qZA()}if(2&e){const e=t.index,n=i.oxw();i.xp6(2),i.Q6J("ngModel",n.variableNames[e])}}function r(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"td"),i.TgZ(1,"input",20),i.NdJ("ngModelChange",function(t){const n=i.CHM(e).index;return i.oxw().$implicit[n]=t})("change",function(){i.CHM(e);const t=i.oxw().index;return i.oxw().updateRow(t)})("paste",function(t){const n=i.CHM(e).index,s=i.oxw().index;return i.oxw().paste(t,s,n)}),i.qZA(),i.qZA()}if(2&e){const e=t.index,n=i.oxw().$implicit;i.xp6(1),i.Q6J("ngModel",n[e])}}function c(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"tr"),i.TgZ(1,"td"),i.TgZ(2,"input",17),i.NdJ("ngModelChange",function(t){const n=i.CHM(e).index;return i.oxw().addresses[n]=t})("change",function(){const t=i.CHM(e).index;return i.oxw().updateRow(t)})("paste",function(t){const n=i.CHM(e).index;return i.oxw().paste(t,n,-1)}),i.qZA(),i.qZA(),i.YNc(3,r,2,1,"td",9),i._UZ(4,"td"),i.TgZ(5,"td"),i.TgZ(6,"a",18),i._uU(7),i.qZA(),i.qZA(),i.TgZ(8,"td"),i.TgZ(9,"button",19),i.NdJ("click",function(){const t=i.CHM(e).index;return i.oxw().deleteRow(t)}),i._uU(10," \xd7 "),i.qZA(),i.qZA(),i.qZA()}if(2&e){const e=t.index,n=i.oxw();i.xp6(2),i.Q6J("ngModel",n.addresses[e]),i.xp6(1),i.Q6J("ngForOf",n.variableNames)("ngForTrackBy",n.index),i.xp6(3),i.Q6J("href",n.links[e],i.LSH),i.xp6(1),i.Oqu(n.links[e].substring(0,n.links[e].indexOf("?")))}}const d=[{path:"",component:(()=>{class e{constructor(){this.subject="",this.body="",this.addresses=[],this.variableNames=["1"],this.variables=[],this.links=[]}ngOnInit(){this.subject=localStorage.getItem("subjectTemplate")||"",this.body=localStorage.getItem("bodyTemplate")||"",this.variableNames=(localStorage.getItem("variableNames")||"").split("\n"),this.addresses=(localStorage.getItem("addresses")||"").split("\n"),this.variables=(localStorage.getItem("variables")||"").split("\n").map(e=>e.split("\t")),this.update()}update(){localStorage.setItem("variableNames",this.variableNames.join("\n")),localStorage.setItem("subjectTemplate",this.subject),localStorage.setItem("bodyTemplate",this.body),this.saveRows();const e=[];for(let t=0;t<this.addresses.length;t++){const n=this.getLink(t);e.push(n)}this.links=e}updateRow(e){this.saveRows(),this.links[e]=this.getLink(e)}saveRows(){localStorage.setItem("addresses",this.addresses.join("\n")),localStorage.setItem("variables",this.variables.map(e=>e.join("\t")).join("\n"))}getLink(e){const t=this.addresses[e],n=this.variables[e],s=this.replaceVariables(this.subject,this.variableNames,n),o=this.replaceVariables(this.body,this.variableNames,n);return`mailto:${t}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(o)}`}replaceVariables(e,t,n){for(let s=0;s<n.length;s++)e=e.replace(`#${t[s]}#`,n[s]||"");return e}addRow(){this.addresses.push(""),this.variables.push(this.variableNames.slice()),this.links.push("")}deleteRow(e){this.addresses.splice(e,1),this.variables.splice(e,1),this.links.splice(e,1),this.saveRows()}addColumn(){this.variableNames.push(`${this.variableNames.length}`);for(const e of this.variables)e.push("")}deleteColumn(e){this.variableNames.splice(e,1);for(const t of this.variables)t.splice(e,1);this.update()}index(e,t){return e}paste(e,t,n){const s=e.clipboardData.getData("text").split("\n").map(e=>e.split("\t"));if(1!==s.length||1!==s[0].length){e.preventDefault();for(let e=0;e<s.length;e++){const o=t+e;o>=this.addresses.length&&this.addRow();for(let t=0;t<s[e].length;t++){const a=n+t;a>=this.variableNames.length&&this.addColumn(),-1===a?this.addresses[o]=s[e][t]:this.variables[o][a]=s[e][t]}}this.update()}}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-mailto"]],decls:47,vars:6,consts:[[1,"container","text-center"],[1,"form"],[1,"form-group"],["for","subject"],["type","text","id","subject",1,"form-control",3,"ngModel","change","ngModelChange"],[1,"form-text","text-muted"],["for","template"],["id","template","rows","20",1,"form-control",3,"ngModel","change","ngModelChange"],[1,"table","table-bordered"],[4,"ngFor","ngForOf","ngForTrackBy"],["type","button","ngbTooltip","Add Variable/Column",1,"btn","btn-success",3,"click"],[4,"ngFor","ngForOf"],[3,"colSpan"],["type","button","ngbTooltip","Add Row",1,"btn","btn-success",3,"click"],[1,"input-group"],["type","text",1,"form-control",3,"ngModel","ngModelChange","change"],["type","button","ngbTooltip","Delete Variable/Column",1,"btn","btn-danger",3,"click"],["type","email",1,"form-control",3,"ngModel","ngModelChange","change","paste"],[3,"href"],["type","button","ngbTooltip","Delete Row",1,"btn","btn-danger",3,"click"],["type","text",1,"form-control",3,"ngModel","ngModelChange","change","paste"]],template:function(e,t){1&e&&(i.TgZ(0,"div",0),i.TgZ(1,"h1"),i._uU(2,"mailto Link Generator"),i.qZA(),i.TgZ(3,"div",1),i.TgZ(4,"div",2),i.TgZ(5,"h2"),i.TgZ(6,"label",3),i._uU(7,"Subject"),i.qZA(),i.qZA(),i.TgZ(8,"input",4),i.NdJ("change",function(){return t.update()})("ngModelChange",function(e){return t.subject=e}),i.qZA(),i.TgZ(9,"small",5),i._uU(10," Supports variable insertion with "),i.TgZ(11,"code"),i._uU(12,"#1#"),i.qZA(),i._uU(13,", "),i.TgZ(14,"code"),i._uU(15,"#2#"),i.qZA(),i._uU(16,", ... "),i.qZA(),i.qZA(),i.TgZ(17,"div",2),i.TgZ(18,"h2"),i.TgZ(19,"label",6),i._uU(20,"Template"),i.qZA(),i.qZA(),i.TgZ(21,"textarea",7),i.NdJ("change",function(){return t.update()})("ngModelChange",function(e){return t.body=e}),i.qZA(),i.TgZ(22,"small",5),i._uU(23," Supports variable insertion with "),i.TgZ(24,"code"),i._uU(25,"#1#"),i.qZA(),i._uU(26,", "),i.TgZ(27,"code"),i._uU(28,"#2#"),i.qZA(),i._uU(29,", ... HTML is not supported. "),i.qZA(),i.qZA(),i.qZA(),i.TgZ(30,"table",8),i.TgZ(31,"tr"),i.TgZ(32,"th"),i._uU(33,"Address"),i.qZA(),i.YNc(34,l,5,1,"th",9),i.TgZ(35,"th"),i.TgZ(36,"button",10),i.NdJ("click",function(){return t.addColumn()}),i._uU(37,"+"),i.qZA(),i.qZA(),i.TgZ(38,"th"),i._uU(39,"mailto-Link"),i.qZA(),i._UZ(40,"th"),i.qZA(),i.YNc(41,c,11,5,"tr",11),i.TgZ(42,"tr"),i._UZ(43,"td",12),i.TgZ(44,"td"),i.TgZ(45,"button",13),i.NdJ("click",function(){return t.addRow()}),i._uU(46,"+"),i.qZA(),i.qZA(),i.qZA(),i.qZA(),i.qZA()),2&e&&(i.xp6(8),i.Q6J("ngModel",t.subject),i.xp6(13),i.Q6J("ngModel",t.body),i.xp6(13),i.Q6J("ngForOf",t.variableNames)("ngForTrackBy",t.index),i.xp6(7),i.Q6J("ngForOf",t.variables),i.xp6(2),i.Q6J("colSpan",3+t.variableNames.length))},directives:[o.Fj,o.JJ,o.On,s.sg],styles:["textarea[_ngcontent-%COMP%]{white-space:pre}.table-condensed[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .table-condensed[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{padding:0}"]}),e})()}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[a.Bz.forChild(d)],a.Bz]}),e})(),u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.ez,o.u5,g]]}),e})()}}]);