(self.webpackChunkclashsoft_apps=self.webpackChunkclashsoft_apps||[]).push([[676],{2676:(e,t,i)=>{"use strict";i.r(t),i.d(t,{LedStripModule:()=>X});var s=i(2209),n=i(7158),r=i(7011),o=i(4970),c=i(4995),l=i(8175),a=i(6790),f=i(7489);let u=(()=>{class e{constructor(e){this.http=e}createSubscription(e,t){return this.http.post(r.N.apiUrl+"/subscriptions",{subscriptionInfo:e},{headers:{"X-LED-Key":t}})}getEffects(){return this.http.get(r.N.apiUrl+"/effects").pipe((0,o.U)(e=>Object.entries(e).map(([e,t])=>Object.assign(Object.assign({},t),{id:e}))))}playEffect(e,t){return this.http.post(r.N.apiUrl+"/effect",e,{headers:{"X-LED-Key":t}})}getLatestEvents(e){return this.http.get(r.N.apiUrl+"/events",{headers:{"X-LED-Key":e}})}}return e.\u0275fac=function(t){return new(t||e)(a.LFG(f.eN))},e.\u0275prov=a.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var g=i(2306),p=i(9227),d=i(2114);const h=["keyModal"];function b(e,t){if(1&e&&(a.TgZ(0,"option",19),a._uU(1),a.qZA()),2&e){const e=t.$implicit;a.Q6J("ngValue",e),a.xp6(1),a.Oqu(e.name)}}function m(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"button",20),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().color=t}),a._uU(1," \xa0 "),a.qZA()}2&e&&a.Udp("background",t.$implicit)}function Z(e,t){1&e&&a._UZ(0,"span",21)}function v(e,t){if(1&e&&(a.TgZ(0,"div",22),a._uU(1),a.qZA()),2&e){const e=a.oxw();a.xp6(1),a.hij(" ",e.error," ")}}function y(e,t){if(1&e&&(a.TgZ(0,"li",25),a.TgZ(1,"span",26),a._uU(2),a.ALo(3,"date"),a.qZA(),a._uU(4),a.qZA()),2&e){const e=t.$implicit;a.xp6(2),a.Oqu(a.xi3(3,3,e.timestamp,"short")),a.xp6(2),a.AsE(" ",e.user,": ",e.effect.message," ")}}function A(e,t){if(1&e&&(a.ynx(0),a._UZ(1,"hr"),a.TgZ(2,"h2"),a._uU(3,"Latest Events"),a.qZA(),a.TgZ(4,"ul",23),a.YNc(5,y,5,6,"li",24),a.qZA(),a.BQk()),2&e){const e=a.oxw();a.xp6(5),a.Q6J("ngForOf",e.events)}}function q(e,t){if(1&e){const e=a.EpF();a.TgZ(0,"div",27),a.TgZ(1,"h4",28),a._uU(2,"Enter Access Key"),a.qZA(),a.TgZ(3,"button",29),a.NdJ("click",function(){return t.$implicit.close()}),a.TgZ(4,"span",30),a._uU(5,"\xd7"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"div",31),a.TgZ(7,"div",32),a.TgZ(8,"div",2),a.TgZ(9,"label",33),a._uU(10,"Key"),a.qZA(),a.TgZ(11,"input",34),a.NdJ("ngModelChange",function(t){return a.CHM(e),a.oxw().key=t}),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(12,"div",35),a.TgZ(13,"button",36),a.NdJ("click",function(){const t=a.CHM(e).$implicit;return a.oxw().saveKey(),t.close()}),a._uU(14," Save "),a.qZA(),a.qZA()}if(2&e){const e=a.oxw();a.xp6(11),a.Q6J("ngModel",e.key)}}const k=[{path:"",component:(()=>{class e{constructor(e,t,i,s){this.ledStripService=e,this.route=t,this.swPush=i,this.modalService=s,this.effects=[],this.presets=["#000000","#ffffff","#ff0000","#ff8000","#ffff00","#80ff00","#00ff00","#00ff80","#00ffff","#0080ff","#0000ff","#8000ff","#ff00ff","#ff0080"],this.color="#000000",this.message="",this.submitting=!1,this.events=[]}ngOnInit(){this.route.queryParams.pipe((0,o.U)(e=>e.key||localStorage.getItem("led-strip/key")),(0,c.b)(e=>this.key=e),(0,l.w)(e=>this.ledStripService.getLatestEvents(e))).subscribe(e=>{this.events=e.reverse()}),this.ledStripService.getEffects().subscribe(e=>{this.effects=e,this.effect=e[0]},e=>{this.error="Failed to load effects: "+e.message}),this.swPush.isEnabled&&!localStorage.getItem("led-strip/subscriptionId")&&(this.swPush.requestSubscription({serverPublicKey:r.N.vapidPublicKey}).then(e=>{this.ledStripService.createSubscription(e,this.key).subscribe(e=>{e.id&&localStorage.setItem("led-strip/subscriptionId",""+e.id)})}),this.eventSubscription=this.swPush.messages.subscribe(e=>{e.event&&(this.events.unshift(e.event),this.events.length>10&&(this.events.length=10))}))}ngAfterViewInit(){this.key||this.modalService.open(this.keyModal,{ariaLabelledBy:"key-modal-title"})}ngOnDestroy(){var e;null===(e=this.eventSubscription)||void 0===e||e.unsubscribe()}getColor(){return{r:parseInt(this.color.substring(1,3),16),g:parseInt(this.color.substring(3,5),16),b:parseInt(this.color.substring(5,7),16)}}submit(){const e=this.getColor(),t=Object.assign({effect:this.effect.id,message:this.message},e);this.submitting=!0,this.ledStripService.playEffect(t,this.key).subscribe(()=>{this.submitting=!1,this.error=void 0},e=>{this.submitting=!1,this.error="Failed to play animation: "+e.message})}saveKey(){localStorage.setItem("led-strip/key",this.key)}}return e.\u0275fac=function(t){return new(t||e)(a.Y36(u),a.Y36(n.gz),a.Y36(g.Mk),a.Y36(p.FF))},e.\u0275cmp=a.Xpm({type:e,selectors:[["app-led-strip"]],viewQuery:function(e,t){if(1&e&&a.Gf(h,5),2&e){let e;a.iGM(e=a.CRH())&&(t.keyModal=e.first)}},decls:33,vars:11,consts:[[1,"container"],[1,"form","mb-3"],[1,"form-group"],["for","effectSelect"],["id","effectSelect","aria-describedby","emailDescription",1,"custom-select",3,"ngModel","ngModelChange"],[3,"ngValue",4,"ngFor","ngForOf"],["id","emailDescription",1,"form-text","text-muted"],["for","colorInput"],["type","color","id","colorInput",1,"form-control",3,"ngModel","ngModelChange"],["for","presets"],["role","group","id","presets",1,"btn-group","d-block"],["class","btn",3,"background","click",4,"ngFor","ngForOf"],["for","messageInput"],["type","text","id","messageInput",1,"form-control",3,"ngModel","ngModelChange"],["type","button",1,"btn","btn-primary",3,"disabled","click"],["class","spinner-border spinner-border-sm","role","status","aria-hidden","true",4,"ngIf"],["class","alert alert-danger","role","alert",4,"ngIf"],[4,"ngIf"],["keyModal",""],[3,"ngValue"],[1,"btn",3,"click"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["role","alert",1,"alert","alert-danger"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"],[1,"text-muted","float-right"],[1,"modal-header"],["id","key-modal-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"form"],["for","keyInput"],["type","text","id","keyInput","placeholder","XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",1,"form-control","text-monospace",3,"ngModel","ngModelChange"],[1,"modal-footer"],["type","button",1,"btn","btn-primary",3,"click"]],template:function(e,t){1&e&&(a.TgZ(0,"div",0),a.TgZ(1,"h1"),a._uU(2,"LED Strip"),a.qZA(),a.TgZ(3,"p"),a._uU(4," Use the effect and color selection below to control my LED strip. "),a.qZA(),a.TgZ(5,"div",1),a.TgZ(6,"div",2),a.TgZ(7,"label",3),a._uU(8,"Effect"),a.qZA(),a.TgZ(9,"select",4),a.NdJ("ngModelChange",function(e){return t.effect=e}),a.YNc(10,b,2,2,"option",5),a.qZA(),a.TgZ(11,"div",6),a._uU(12),a.qZA(),a.qZA(),a.TgZ(13,"div",2),a.TgZ(14,"label",7),a._uU(15,"Color"),a.qZA(),a.TgZ(16,"input",8),a.NdJ("ngModelChange",function(e){return t.color=e}),a.qZA(),a.qZA(),a.TgZ(17,"div",2),a.TgZ(18,"label",9),a._uU(19,"Presets"),a.qZA(),a.TgZ(20,"div",10),a.YNc(21,m,2,2,"button",11),a.qZA(),a.qZA(),a.TgZ(22,"div",2),a.TgZ(23,"label",12),a._uU(24,"Message"),a.qZA(),a.TgZ(25,"input",13),a.NdJ("ngModelChange",function(e){return t.message=e}),a.qZA(),a.qZA(),a.TgZ(26,"button",14),a.NdJ("click",function(){return t.submit()}),a.YNc(27,Z,1,0,"span",15),a._uU(28),a.qZA(),a.qZA(),a.YNc(29,v,2,1,"div",16),a.YNc(30,A,6,1,"ng-container",17),a.qZA(),a.YNc(31,q,15,1,"ng-template",null,18,a.W1O)),2&e&&(a.xp6(9),a.Q6J("ngModel",t.effect),a.xp6(1),a.Q6J("ngForOf",t.effects),a.xp6(2),a.hij(" ",t.effect?t.effect.description:"No effect selected."," "),a.xp6(4),a.Q6J("ngModel",t.color),a.xp6(5),a.Q6J("ngForOf",t.presets),a.xp6(4),a.Q6J("ngModel",t.message),a.xp6(1),a.Q6J("disabled",t.submitting),a.xp6(1),a.Q6J("ngIf",t.submitting),a.xp6(1),a.hij(" ",t.submitting?"Playing...":"Play"," "),a.xp6(1),a.Q6J("ngIf",t.error),a.xp6(1),a.Q6J("ngIf",t.events.length>0))},directives:[d.EJ,d.JJ,d.On,s.sg,d.Fj,s.O5,d.YN,d.Kr],pipes:[s.uU],styles:[""]}),e})()}];let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[n.Bz.forChild(k)],n.Bz]}),e})(),X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.oAB({type:e}),e.\u0275inj=a.cJS({imports:[[s.ez,d.u5,T]]}),e})()}}]);