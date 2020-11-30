(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{QYAZ:function(t,e,n){"use strict";n.r(e),n.d(e,"MultiTimerModule",function(){return m});var i=n("8g87"),r=n("kIdj"),c=n("x4Pv"),s=n("03On"),a=n("DBYE");let o=(()=>{class t{transform(t){const e=(t/1e3|0)%60;return`${t/6e4|0}:${e<10?"0":""}${e}.${String(t%1e3).padStart(3,"0")}`}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Jb({name:"duration",type:t,pure:!0}),t})(),u=(()=>{class t{transform(t){return t<=0?[]:[...Array(t).keys()]}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Jb({name:"range",type:t,pure:!0}),t})();function b(t,e){if(1&t){const t=c.Rb();c.Qb(0,"button",18),c.ac("click",function(){return c.sc(t),c.dc().reset()}),c.Ac(1," Reset "),c.Pb()}}function d(t,e){if(1&t&&(c.Qb(0,"div",22),c.Ac(1),c.ec(2,"duration"),c.Pb()),2&t){const t=e.$implicit,n=c.dc().$implicit,i=c.dc();c.xc("width",((t.end||i.currentDate)-t.start)/(1e3*i.duration)*100,"%"),c.Cb("bg-secondary",t.timer!=n),c.xb(1),c.Cc(" ",c.fc(2,5,(t.end||i.currentDate)-t.start)," ")}}function l(t,e){if(1&t){const t=c.Rb();c.Qb(0,"a",19),c.ac("click",function(){c.sc(t);const n=e.$implicit;return c.dc().select(n)}),c.Qb(1,"h2"),c.Ac(2),c.Pb(),c.Qb(3,"span",13),c.Ac(4),c.ec(5,"duration"),c.Pb(),c.Ac(6," total "),c.Qb(7,"div",20),c.yc(8,d,3,7,"div",21),c.Pb(),c.Pb()}if(2&t){const t=e.$implicit,n=c.dc();c.Cb("active",n.active==t),c.xb(2),c.Cc("Timer #",t+1,""),c.xb(2),c.Bc(c.fc(5,5,n.elapsed[t]||0)),c.xb(4),c.jc("ngForOf",n.events)}}const h=[{path:"",component:(()=>{class t{constructor(){this.total=0,this.elapsed=[],this.active=0,this.currentDate=0,this.events=[]}ngOnInit(){const t=JSON.parse(localStorage.getItem("multiTimer")||"{}");this.count=t.count||3,this.duration=t.duration||60}save(){localStorage.setItem("multiTimer",JSON.stringify({count:this.count,duration:this.duration}))}start(){this.startTime=+new Date,this.events.push({timer:this.active,start:this.startTime}),this.handle=setInterval(()=>this.update(),0)}reset(){this.startTime=void 0,this.active=0,this.total=0,this.elapsed=[],this.events.length=0}stop(){void 0!==this.handle&&(clearInterval(this.handle),this.handle=void 0)}select(t){if(this.active=t,void 0===this.startTime||!this.handle||this.total===1e3*this.duration)return;const e=+new Date;this.events.length>0&&(this.events[this.events.length-1].end=e),this.events.push({timer:t,start:e})}update(){this.currentDate=+new Date;let t=this.currentDate-this.startTime;t>=1e3*this.duration&&(t=1e3*this.duration,this.stop());const e=t-this.total;this.total=t,this.elapsed[this.active]=(this.elapsed[this.active]||0)+e}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Eb({type:t,selectors:[["app-multi-timer"]],decls:32,vars:20,consts:[[1,"container"],[1,"form"],[1,"form-group"],["for","timerCount"],["type","number","id","timerCount","min","0","step","1","max","99","pattern","[0-9]{0,2}",1,"form-control",3,"ngModel","ngModelChange","change"],["timerCountModel","ngModel"],[1,"invalid-feedback"],["for","timerDuration"],["type","number","id","timerDuration","min","0","step","1","max","99999","pattern","[0-9]{0,5}",1,"form-control",3,"ngModel","ngModelChange","change"],["timerDurationModel","ngModel"],["type","button",1,"btn","btn-lg","btn-primary",3,"click"],["type","button","class","btn btn btn-danger ml-3",3,"click",4,"ngIf"],[1,"display-4","text-center"],[1,"text-monospace"],[1,"mb-3"],["type","success","height","3em",3,"value","max"],[1,"list-group","mb-3"],["class","list-group-item list-group-item-action",3,"active","click",4,"ngFor","ngForOf"],["type","button",1,"btn","btn","btn-danger","ml-3",3,"click"],[1,"list-group-item","list-group-item-action",3,"click"],[1,"progress"],["role","progressbar","class","progress-bar",3,"bg-secondary","width",4,"ngFor","ngForOf"],["role","progressbar",1,"progress-bar"]],template:function(t,e){if(1&t&&(c.Qb(0,"div",0),c.Qb(1,"h1"),c.Ac(2,"Multi-Timer"),c.Pb(),c.Qb(3,"div",1),c.Qb(4,"div",2),c.Qb(5,"label",3),c.Ac(6,"Number of timers"),c.Pb(),c.Qb(7,"input",4,5),c.ac("ngModelChange",function(t){return e.count=t})("change",function(){return e.save()}),c.Pb(),c.Qb(9,"div",6),c.Ac(10," Number of timers must be between 0 and 99. "),c.Pb(),c.Pb(),c.Qb(11,"div",2),c.Qb(12,"label",7),c.Ac(13,"Duration in seconds"),c.Pb(),c.Qb(14,"input",8,9),c.ac("ngModelChange",function(t){return e.duration=t})("change",function(){return e.save()}),c.Pb(),c.Qb(16,"div",6),c.Ac(17," Duration must be between 0 and 99999. "),c.Pb(),c.Pb(),c.Pb(),c.Qb(18,"div"),c.Qb(19,"button",10),c.ac("click",function(){return e.handle?e.stop():e.start()}),c.Ac(20),c.Pb(),c.yc(21,b,2,0,"button",11),c.Pb(),c.Qb(22,"div",12),c.Qb(23,"span",13),c.Ac(24),c.ec(25,"duration"),c.Pb(),c.Ac(26," remaining! "),c.Pb(),c.Qb(27,"div",14),c.Lb(28,"ngb-progressbar",15),c.Pb(),c.Qb(29,"div",16),c.yc(30,l,9,7,"a",17),c.ec(31,"range"),c.Pb(),c.Pb()),2&t){const t=c.rc(8),n=c.rc(15);c.xb(7),c.Cb("is-invalid",t.invalid&&(t.touched||t.dirty)),c.jc("ngModel",e.count),c.xb(2),c.Cb("d-block",t.invalid&&(t.touched||t.dirty)),c.xb(5),c.Cb("is-invalid",n.invalid&&(n.touched||n.dirty)),c.jc("ngModel",e.duration),c.xb(2),c.Cb("d-block",n.invalid&&(n.touched||n.dirty)),c.xb(4),c.Cc(" ",e.handle?"Stop":"Start!"," "),c.xb(1),c.jc("ngIf",!e.handle&&0!==e.total),c.xb(3),c.Bc(c.fc(25,16,1e3*e.duration-e.total)),c.xb(4),c.jc("value",e.total)("max",1e3*e.duration),c.xb(2),c.jc("ngForOf",c.fc(31,18,e.count<100?e.count:100))}},directives:[s.i,s.b,s.j,s.f,s.g,i.l,a.j,i.k],pipes:[o,u],styles:[".progress-bar{transition:none}"]}),t})()}];let p=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[r.c.forChild(h)],r.c]}),t})(),m=(()=>{class t{}return t.\u0275mod=c.Ib({type:t}),t.\u0275inj=c.Hb({factory:function(e){return new(e||t)},imports:[[i.c,s.c,a.k,p]]}),t})()}}]);