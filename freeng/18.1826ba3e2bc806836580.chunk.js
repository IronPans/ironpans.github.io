webpackJsonp([18],{"2ihW":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.display="block",this.pageTitle="Components-Knob"}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},"2mRl":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=[""]},"46kL":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},"8Jyl":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("43CL"),t=u("y5Wb"),r=u("pUhD"),a=u("f8OW"),i=u("II8n"),o=u("/5mt"),c=u("LdBt"),f=u("u/4r"),d=u("65G7"),s=u("wPca"),T=u("8etH"),h=u("46kL"),b=u("3/gQ"),p=u("nUUg"),m=u("kJXZ"),U=u("9ayU"),g=u("cgMo"),_=u("xTcG"),v=u("3RUF"),k=u("RqK6"),X=u("JWiZ"),O=u("2ihW");u.d(n,"MainKnobModuleNgFactory",function(){return C});var C=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[r.a]],[3,e.e],e.g]),e.d(4608,a.a,a.b,[e.h]),e.d(4608,i.a,i.b,[]),e.d(4608,o.a,o.b,[]),e.d(4608,c.a,c.b,[]),e.d(4608,f.a,f.b,[]),e.d(4608,d.c,d.c,[s.a,i.a,o.a,c.a,f.a,d.a,d.b]),e.d(512,a.d,a.d,[]),e.d(512,T.w,T.w,[[2,T.m],[2,T.c]]),e.d(512,h.a,h.a,[]),e.d(512,b.a,b.a,[]),e.d(512,p.a,p.a,[]),e.d(512,m.a,m.a,[]),e.d(512,U.a,U.a,[]),e.d(512,g.a,g.a,[]),e.d(512,_.a,_.a,[]),e.d(512,v.a,v.a,[]),e.d(512,k.c,k.c,[]),e.d(512,X.a,X.a,[]),e.d(512,t.a,t.a,[]),e.d(1024,T.r,function(){return[[{path:"",component:O.a}]]},[]),e.d(256,d.b,void 0,[]),e.d(256,d.a,void 0,[])])})},JWiZ:function(l,n,u){"use strict";var e=u("43CL"),t=u("I0k3");u.d(n,"b",function(){return r}),u.d(n,"a",function(){return a});var r=(t.f,u.i(e.O)(function(){return r}),function(){function l(){this.onModelChange=function(){},this.onTouchChange=function(){},this.size=100,this.trackColor="#eee",this.barColor="#5db2ff",this.lineWidth=5,this.currentValue=0,this.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||function(l){return window.setTimeout(l,1e3/60)}}return l.prototype.ngOnInit=function(){var l=this.value;"string"==typeof l&&(l=l.split("%")[0]),this.percent=l},l.prototype.ngAfterViewInit=function(){this.canvas=this.canvasViewChild.nativeElement,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.size,this.canvas.height=this.size,this.draw(),this.initialed=!0},l.prototype.writeValue=function(l){this.initialed&&(this.value=l)},l.prototype.registerOnChange=function(l){this.onModelChange=l},l.prototype.registerOnTouched=function(l){this.onTouchChange=l},l.prototype.drawCircle=function(l,n,u){var e=this.size/2,t=this.size/2,r=this.size/2-this.lineWidth;this.ctx.save(),this.ctx.beginPath(),this.round&&(this.ctx.lineCap="round"),this.ctx.strokeStyle=l,this.ctx.translate(e,t),this.ctx.rotate(-Math.PI/2),this.ctx.arc(0,0,r,0,2*Math.PI*n/100,u),this.ctx.lineWidth=this.lineWidth,this.ctx.stroke(),this.ctx.closePath(),this.ctx.restore()},l.prototype.draw=function(){var l=this;this.ctx.clearRect(0,0,this.size,this.size),this.drawCircle(this.trackColor,100,!0),this.currentValue++,this.drawCircle(this.barColor,this.currentValue,!1),this.percent>this.currentValue&&this.requestAnimationFrame(function(){return l.draw()})},l.ctorParameters=function(){return[]},l}()),a=function(){function l(){}return l}()},TrvV:function(l,n,u){"use strict";function e(l){return r.S(0,[r._5(402653184,1,{canvasViewChild:0}),(l()(),r.T(null,["\n    "])),(l()(),r.U(0,null,null,10,"div",[["class","free-knob"]],null,null,null,null,null)),r.X(278528,null,0,i.o,[r.n,r.K,r.Z],{ngStyle:[0,"ngStyle"]},null),r._0({width:0,height:1}),(l()(),r.T(null,["\n      "])),(l()(),r.U(0,[[1,0],["canvas",1]],null,0,"canvas",[],null,null,null,null,null)),(l()(),r.T(null,["\n      "])),(l()(),r.U(0,null,null,3,"div",[["class","free-knob-inner"]],null,null,null,null,null)),(l()(),r.T(null,["\n        "])),r._1(null,0),(l()(),r.T(null,["\n      "])),(l()(),r.T(null,["\n    "])),(l()(),r.T(null,["\n  "]))],function(l,n){var u=n.component;l(n,3,0,l(n,4,0,u.size+"px",u.size+"px"))},null)}function t(l){return r.S(0,[(l()(),r.U(0,null,null,2,"free-knob",[],null,null,null,e,f)),r.W(5120,null,o.f,function(l){return[l]},[a.b]),r.X(4308992,null,0,a.b,[],null,null)],function(l,n){l(n,2,0)},null)}var r=u("43CL"),a=u("JWiZ"),i=u("f8OW"),o=u("I0k3");u.d(n,"b",function(){return f}),n.a=e;var c=(r.b(a.a,[],function(l){return r.c([r.d(512,r.e,r.f,[[8,[]],[3,r.e],r.g]),r.d(4608,i.a,i.b,[r.h]),r.d(512,i.d,i.d,[]),r.d(512,a.a,a.a,[])])}),[]),f=r.R({encapsulation:2,styles:c,data:{}});r.Y("free-knob",a.b,t,{size:"size",value:"value",trackColor:"trackColor",barColor:"barColor",lineWidth:"lineWidth",round:"round"},{},["*"])},pUhD:function(l,n,u){"use strict";function e(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("PROPERTY")))})}function t(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("TYPE")))})}function r(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DESCRIPTION")))})}function a(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["Number"]))],null,null)}function i(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.0")))})}function o(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["Number"]))],null,null)}function c(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.1")))})}function f(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["String"]))],null,null)}function d(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.1")))})}function s(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["String"]))],null,null)}function T(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.1")))})}function h(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["Number"]))],null,null)}function b(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.1")))})}function p(l){return v.S(0,[(l()(),v.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),v.T(null,["Boolean"]))],null,null)}function m(l){return v.S(0,[(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L])],null,function(l,n){l(n,0,0,v._20(n,0,0,v.V(n,1).transform("DEMO.KNOB.OPTION.1")))})}function U(l){return v.S(0,[(l()(),v.U(0,null,null,312,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),v.T(null,["\n  "])),(l()(),v.U(0,null,null,305,"div",[["class","row"]],null,null,null,null,null)),(l()(),v.T(null,["\n    "])),(l()(),v.U(0,null,null,192,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),v.W(512,null,O.a,O.a,[v.Q]),v.X(4210688,null,0,C.b,[v.K,O.a],{grid:[0,"grid"]},null),(l()(),v.T(null,["\n      "])),(l()(),v.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),v.T(null,["\n        ","\n      "])),v._19(131072,k.a,[X.c,v.L]),(l()(),v.T(null,["\n      "])),(l()(),v.U(0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L]),(l()(),v.U(0,null,null,0,"span",[["class","symbol component"]],null,null,null,null,null)),(l()(),v.T(null,["\n      "])),(l()(),v.U(0,null,null,178,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),v.T(null,["free-knob"])),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),v.T(null,["",""])),v._19(131072,k.a,[X.c,v.L]),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,168,"free-table",[],null,null,null,y.a,y.b)),v.X(4308992,null,0,K.b,[v.Q],null,null),(l()(),v.T(null,["\n          "])),(l()(),v.U(0,null,null,21,"free-table-header",[],null,null,null,y.c,y.d)),v.X(49152,null,0,K.c,[],null,null),(l()(),v.T(null,["\n            "])),(l()(),v.U(0,null,null,17,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,null,0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-head",[],null,null,null,y.g,y.h)),v.X(4308992,null,1,K.e,[K.b,v.K],null,null),v._5(335544320,1,{template:0}),(l()(),v._2(0,[[1,2]],0,0,null,e)),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-head",[],null,null,null,y.g,y.h)),v.X(4308992,null,1,K.e,[K.b,v.K],null,null),v._5(335544320,2,{template:0}),(l()(),v._2(0,[[2,2]],0,0,null,t)),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-head",[],null,null,null,y.g,y.h)),v.X(4308992,null,1,K.e,[K.b,v.K],null,null),v._5(335544320,3,{template:0}),(l()(),v._2(0,[[3,2]],0,0,null,r)),(l()(),v.T(0,["\n            "])),(l()(),v.T(null,["\n          "])),(l()(),v.T(null,["\n\n          "])),(l()(),v.U(0,null,null,141,"free-table-body",[],null,null,null,y.i,y.j)),v.X(4308992,null,1,K.f,[K.b],null,null),v._5(603979776,4,{_rows:1}),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,5,{template:0}),(l()(),v.T(0,["size"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,6,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[6,2]],0,0,null,a)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,7,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[7,2]],0,0,null,i)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,8,{template:0}),(l()(),v.T(0,["value"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,9,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[9,2]],0,0,null,o)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,10,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[10,2]],0,0,null,c)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,11,{template:0}),(l()(),v.T(0,["trackColor"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,12,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[12,2]],0,0,null,f)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,13,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[13,2]],0,0,null,d)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,14,{template:0}),(l()(),v.T(0,["barColor"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,15,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[15,2]],0,0,null,s)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,16,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[16,2]],0,0,null,T)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,17,{template:0}),(l()(),v.T(0,["lineWidth"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,18,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[18,2]],0,0,null,h)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,19,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[19,2]],0,0,null,b)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,21,"free-table-row",[],null,null,null,y.e,y.f)),v.X(49152,[[4,4]],0,K.d,[],null,null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,3,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,20,{template:0}),(l()(),v.T(0,["round"])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,21,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[21,2]],0,0,null,p)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,5,"free-table-cell",[],null,null,null,y.k,y.l)),v.X(4308992,null,1,K.g,[K.d,v.K],null,null),v._5(335544320,22,{template:0}),(l()(),v.T(0,["\n                "])),(l()(),v._2(0,[[22,2]],0,0,null,m)),(l()(),v.T(0,["\n              "])),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(null,["\n        "])),(l()(),v.T(null,["\n      "])),(l()(),v.T(null,["\n    "])),(l()(),v.T(null,["\n\n    "])),(l()(),v.U(0,null,null,108,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),v.W(512,null,O.a,O.a,[v.Q]),v.X(4210688,null,0,C.b,[v.K,O.a],{grid:[0,"grid"]},null),(l()(),v.T(null,["\n      "])),(l()(),v.U(0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),v.T(null,["Import"])),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,E.a,E.b)),v.X(1097728,null,1,w.b,[v.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),v._5(603979776,23,{tabGroup:1}),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,E.c,E.d)),v.X(114688,[[23,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,W.a,W.b)),v.X(4243456,null,0,I.b,[v.Q],{lang:[0,"lang"]},null),(l()(),v.T(0,["\n              import {KnobModule} from 'freeng/freeng';\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n        "])),(l()(),v.T(null,["\n      "])),(l()(),v.T(null,["\n\n      "])),(l()(),v.U(0,null,null,26,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),v.T(null,["Default"])),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,20,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,E.a,E.b)),v.X(1097728,null,1,w.b,[v.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),v._5(603979776,24,{tabGroup:1}),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,7,"free-tab",[["header","PREVIEW"]],null,null,null,E.c,E.d)),v.X(114688,[[24,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,3,"free-knob",[],null,null,null,V.a,V.b)),v.W(5120,null,S.f,function(l){return[l]},[P.b]),v.X(4308992,null,0,P.b,[],{value:[0,"value"]},null),(l()(),v.T(0,["\n              ","\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,E.c,E.d)),v.X(114688,[[24,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,W.a,W.b)),v.X(4243456,null,0,I.b,[v.Q],{lang:[0,"lang"]},null),(l()(),v.T(0,['\n              <free-knob [value]="80">\n                ',"\n              </free-knob>\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n        "])),(l()(),v.T(null,["\n      "])),(l()(),v.T(null,["\n\n      "])),(l()(),v.U(0,null,null,28,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),v.T(null,["Theme"])),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,22,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,E.a,E.b)),v.X(1097728,null,1,w.b,[v.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),v._5(603979776,25,{tabGroup:1}),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,9,"free-tab",[["header","PREVIEW"]],null,null,null,E.c,E.d)),v.X(114688,[[25,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,5,"free-knob",[],null,null,null,V.a,V.b)),v.W(5120,null,S.f,function(l){return[l]},[P.b]),v.X(4308992,null,0,P.b,[],{value:[0,"value"],trackColor:[1,"trackColor"],barColor:[2,"barColor"]},null),(l()(),v.T(0,["\n              "])),(l()(),v.U(0,null,0,0,"i",[["class","fa fa-tags pink"]],null,null,null,null,null)),(l()(),v.T(0,["\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,E.c,E.d)),v.X(114688,[[25,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,W.a,W.b)),v.X(4243456,null,0,I.b,[v.Q],{lang:[0,"lang"]},null),(l()(),v.T(0,['\n              <free-knob [value]="40" [barColor]="\'#E75B8D\'" [trackColor]="\'#eee\'">\n                <i class="fa fa-tags pink"></i>\n              </free-knob>\n            '])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n        "])),(l()(),v.T(null,["\n      "])),(l()(),v.T(null,["\n\n      "])),(l()(),v.U(0,null,null,26,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),v.T(null,["Size"])),(l()(),v.T(null,["\n        "])),(l()(),v.U(0,null,null,20,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,E.a,E.b)),v.X(1097728,null,1,w.b,[v.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),v._5(603979776,26,{tabGroup:1}),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,7,"free-tab",[["header","PREVIEW"]],null,null,null,E.c,E.d)),v.X(114688,[[26,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,3,"free-knob",[],null,null,null,V.a,V.b)),v.W(5120,null,S.f,function(l){return[l]},[P.b]),v.X(4308992,null,0,P.b,[],{size:[0,"size"],value:[1,"value"],lineWidth:[2,"lineWidth"]},null),(l()(),v.T(0,["\n              ","\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n          "])),(l()(),v.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,E.c,E.d)),v.X(114688,[[26,4]],0,w.c,[],{header:[0,"header"]},null),(l()(),v.T(0,["\n            "])),(l()(),v.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,W.a,W.b)),v.X(4243456,null,0,I.b,[v.Q],{lang:[0,"lang"]},null),(l()(),v.T(0,['\n              <free-knob [value]="80" [size]="70" [lineWidth]="8">\n                ',"\n              </free-knob>\n            "])),(l()(),v.T(0,["\n          "])),(l()(),v.T(0,["\n        "])),(l()(),v.T(null,["\n      "])),(l()(),v.T(null,["\n    "])),(l()(),v.T(null,["\n\n  "])),(l()(),v.T(null,["\n  "])),(l()(),v.U(0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),v.T(null,["FreeNG - ",""])),v._19(131072,k.a,[X.c,v.L]),(l()(),v.T(null,["\n"])),(l()(),v.T(null,["\n"]))],function(l,n){l(n,6,0,"6"),l(n,27,0),l(n,36,0),l(n,41,0),l(n,46,0),l(n,53,0),l(n,60,0),l(n,65,0),l(n,72,0),l(n,83,0),l(n,88,0),l(n,95,0),l(n,106,0),l(n,111,0),l(n,118,0),l(n,129,0),l(n,134,0),l(n,141,0),l(n,152,0),l(n,157,0),l(n,164,0),l(n,175,0),l(n,180,0),l(n,187,0);l(n,200,0,"6");l(n,208,0,"line","right");l(n,212,0,"CODE");l(n,215,0,"typescript");l(n,227,0,"line","right");l(n,231,0,"PREVIEW");l(n,235,0,80);l(n,240,0,"CODE");l(n,243,0,"html");l(n,255,0,"line","right");l(n,259,0,"PREVIEW");l(n,263,0,40,"#eee","#E75B8D");l(n,270,0,"CODE");l(n,273,0,"html");l(n,285,0,"line","right");l(n,289,0,"PREVIEW");l(n,293,0,70,80,8);l(n,298,0,"CODE");l(n,301,0,"html")},function(l,n){l(n,9,0,v._20(n,9,0,v.V(n,10).transform("DEMO.KNOB.DESCRIPTION"))),l(n,13,0,v._20(n,13,0,v.V(n,14).transform("API-OPTION"))),l(n,23,0,v._20(n,23,0,v.V(n,24).transform("COMPONENT.KNOB")));l(n,236,0,"80%");l(n,244,0,"80%");l(n,294,0,"80%");l(n,302,0,"80%"),l(n,310,0,v._20(n,310,0,v.V(n,311).transform("MOTTO")))})}function g(l){return v.S(0,[(l()(),v.U(0,null,null,1,"free-main-knob",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,U,L)),v.X(114688,null,0,N.a,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,v.V(n,1).fadeInUpState,v.V(n,1).display)})}var _=u("2mRl"),v=u("43CL"),k=u("aO6n"),X=u("65G7"),O=u("KDcH"),C=u("xTcG"),y=u("3N/a"),K=u("cgMo"),E=u("uh4r"),w=u("3/gQ"),W=u("VpmR"),I=u("nUUg"),V=u("TrvV"),S=u("I0k3"),P=u("JWiZ"),N=u("2ihW");u.d(n,"a",function(){return x});var D=[_.a],L=v.R({encapsulation:0,styles:D,data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}}),x=v.Y("free-main-knob",N.a,g,{},{},[])},y5Wb:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()}});