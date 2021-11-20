"use strict";(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[58],{7058:(q,f,l)=>{l.r(f),l.d(f,{LedStripModule:()=>k});var a=l(6276),d=l(6410),p=l(124),u=l(8567),m=l(626),h=l(6799),e=l(2237),b=l(1858);let Z=(()=>{class n{constructor(t){this.http=t}createSubscription(t,i){return this.http.post(p.N.apiUrl+"/subscriptions",{subscriptionInfo:t},{headers:i?{"X-LED-Key":i}:void 0})}getEffects(){return this.http.get(p.N.apiUrl+"/effects").pipe((0,u.U)(t=>Object.entries(t).map(([i,r])=>Object.assign(Object.assign({},r),{id:i}))))}playEffect(t,i){return this.http.post(p.N.apiUrl+"/effect",t,{headers:i?{"X-LED-Key":i}:void 0})}getLatestEvents(t){return this.http.get(p.N.apiUrl+"/events",{headers:t?{"X-LED-Key":t}:void 0})}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(b.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var v=l(7693),_=l(645),c=l(4901);const S=["keyModal"];function y(n,o){if(1&n&&(e.TgZ(0,"option",19),e._uU(1),e.qZA()),2&n){const t=o.$implicit;e.Q6J("ngValue",t),e.xp6(1),e.Oqu(t.name)}}function T(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"button",20),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().color=s}),e._uU(1," \xa0 "),e.qZA()}2&n&&e.Udp("background",o.$implicit)}function C(n,o){1&n&&e._UZ(0,"span",21)}function A(n,o){if(1&n&&(e.TgZ(0,"div",22),e._uU(1),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.hij(" ",t.error," ")}}function L(n,o){if(1&n&&(e.TgZ(0,"li",25),e.TgZ(1,"span",26),e._uU(2),e.ALo(3,"date"),e.qZA(),e._uU(4),e.qZA()),2&n){const t=o.$implicit;e.xp6(2),e.Oqu(e.xi3(3,3,t.timestamp,"short")),e.xp6(2),e.AsE(" ",t.user,": ",t.effect.message," ")}}function M(n,o){if(1&n&&(e.ynx(0),e._UZ(1,"hr"),e.TgZ(2,"h2"),e._uU(3,"Latest Events"),e.qZA(),e.TgZ(4,"ul",23),e.YNc(5,L,5,6,"li",24),e.qZA(),e.BQk()),2&n){const t=e.oxw();e.xp6(5),e.Q6J("ngForOf",t.events)}}function X(n,o){if(1&n){const t=e.EpF();e.TgZ(0,"div",27),e.TgZ(1,"h4",28),e._uU(2,"Enter Access Key"),e.qZA(),e.TgZ(3,"button",29),e.NdJ("click",function(){return e.CHM(t).$implicit.close()}),e.TgZ(4,"span",30),e._uU(5,"\xd7"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(6,"div",31),e.TgZ(7,"div",32),e.TgZ(8,"div",2),e.TgZ(9,"label",33),e._uU(10,"Key"),e.qZA(),e.TgZ(11,"input",34),e.NdJ("ngModelChange",function(r){return e.CHM(t),e.oxw().key=r}),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",35),e.TgZ(13,"button",36),e.NdJ("click",function(){const s=e.CHM(t).$implicit;return e.oxw().saveKey(),s.close()}),e._uU(14," Save "),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(11),e.Q6J("ngModel",t.key)}}const x=[{path:"",component:(()=>{class n{constructor(t,i,r,s){this.ledStripService=t,this.route=i,this.swPush=r,this.modalService=s,this.effects=[],this.presets=["#000000","#ffffff","#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],this.color="#000000",this.message="",this.submitting=!1,this.events=[]}ngOnInit(){this.route.queryParams.pipe((0,u.U)(t=>t.key||localStorage.getItem("led-strip/key")),(0,m.b)(t=>this.key=t),(0,h.w)(t=>this.ledStripService.getLatestEvents(t))).subscribe(t=>{this.events=t.reverse()}),this.ledStripService.getEffects().subscribe(t=>{this.effects=t,this.effect=t[0]},t=>{this.error="Failed to load effects: "+t.message}),this.swPush.isEnabled&&!localStorage.getItem("led-strip/subscriptionId")&&(this.swPush.requestSubscription({serverPublicKey:p.N.vapidPublicKey}).then(t=>{this.ledStripService.createSubscription(t,this.key).subscribe(i=>{i.id&&localStorage.setItem("led-strip/subscriptionId",""+i.id)})}),this.eventSubscription=this.swPush.messages.subscribe(t=>{!t.event||(this.events.unshift(t.event),this.events.length>10&&(this.events.length=10))}))}ngAfterViewInit(){this.key||this.modalService.open(this.keyModal,{ariaLabelledBy:"key-modal-title"})}ngOnDestroy(){var t;null===(t=this.eventSubscription)||void 0===t||t.unsubscribe()}getColor(){return{r:parseInt(this.color.substring(1,3),16),g:parseInt(this.color.substring(3,5),16),b:parseInt(this.color.substring(5,7),16)}}submit(){if(!this.effect)return;const t=this.getColor(),i=Object.assign({effect:this.effect.id,message:this.message},t);this.submitting=!0,this.ledStripService.playEffect(i,this.key).subscribe(()=>{this.submitting=!1,this.error=void 0},r=>{this.submitting=!1,this.error="Failed to play animation: "+r.message})}saveKey(){!this.key||localStorage.setItem("led-strip/key",this.key)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z),e.Y36(d.gz),e.Y36(v.Mk),e.Y36(_.FF))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-led-strip"]],viewQuery:function(t,i){if(1&t&&e.Gf(S,5),2&t){let r;e.iGM(r=e.CRH())&&(i.keyModal=r.first)}},decls:33,vars:11,consts:[[1,"container"],[1,"form","mb-3"],[1,"form-group"],["for","effectSelect"],["id","effectSelect","aria-describedby","emailDescription",1,"custom-select",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["id","emailDescription",1,"form-text","text-muted"],["for","colorInput"],["type","color","id","colorInput",1,"form-control",3,"ngModel","ngModelChange"],["for","presets"],["role","group","id","presets",1,"btn-group","d-block"],["class","btn",3,"background","click",4,"ngFor","ngForOf"],["for","messageInput"],["type","text","id","messageInput",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[4,"ngIf"],["keyModal",""],[3,"ngValue"],[1,"btn",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["role","alert",1,"alert","alert-danger"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"text-muted","float-right"],[1,"modal-header"],["id","key-modal-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form"],["for","keyInput"],["type","text","id","keyInput","placeholder","XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",1,"form-control","text-monospace",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"h1"),e._uU(2,"LED Strip"),e.qZA(),e.TgZ(3,"p"),e._uU(4," Use the effect and color selection below to control my LED strip. "),e.qZA(),e.TgZ(5,"div",1),e.TgZ(6,"div",2),e.TgZ(7,"label",3),e._uU(8,"Effect"),e.qZA(),e.TgZ(9,"select",4),e.NdJ("ngModelChange",function(s){return i.effect=s}),e.YNc(10,y,2,2,"option",5),e.qZA(),e.TgZ(11,"div",6),e._uU(12),e.qZA(),e.qZA(),e.TgZ(13,"div",2),e.TgZ(14,"label",7),e._uU(15,"Color"),e.qZA(),e.TgZ(16,"input",8),e.NdJ("ngModelChange",function(s){return i.color=s}),e.qZA(),e.qZA(),e.TgZ(17,"div",2),e.TgZ(18,"label",9),e._uU(19,"Presets"),e.qZA(),e.TgZ(20,"div",10),e.YNc(21,T,2,2,"button",11),e.qZA(),e.qZA(),e.TgZ(22,"div",2),e.TgZ(23,"label",12),e._uU(24,"Message"),e.qZA(),e.TgZ(25,"input",13),e.NdJ("ngModelChange",function(s){return i.message=s}),e.qZA(),e.qZA(),e.TgZ(26,"button",14),e.NdJ("click",function(){return i.submit()}),e.YNc(27,C,1,0,"span",15),e._uU(28),e.qZA(),e.qZA(),e.YNc(29,A,2,1,"div",16),e.YNc(30,M,6,1,"ng-container",17),e.qZA(),e.YNc(31,X,15,1,"ng-template",null,18,e.W1O)),2&t&&(e.xp6(9),e.Q6J("ngModel",i.effect),e.xp6(1),e.Q6J("ngForOf",i.effects),e.xp6(2),e.hij(" ",i.effect?i.effect.description:"No effect selected."," "),e.xp6(4),e.Q6J("ngModel",i.color),e.xp6(5),e.Q6J("ngForOf",i.presets),e.xp6(4),e.Q6J("ngModel",i.message),e.xp6(1),e.Q6J("disabled",i.submitting),e.xp6(1),e.Q6J("ngIf",i.submitting),e.xp6(1),e.hij(" ",i.submitting?"Playing...":"Play"," "),e.xp6(1),e.Q6J("ngIf",i.error),e.xp6(1),e.Q6J("ngIf",i.events.length>0))},directives:[c.EJ,c.JJ,c.On,a.sg,c.Fj,a.O5,c.YN,c.Kr],pipes:[a.uU],styles:[""]}),n})()}];let U=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[d.Bz.forChild(x)],d.Bz]}),n})(),k=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[a.ez,c.u5,U]]}),n})()}}]);