webpackJsonp([7],{"/Z/a":function(l,n,u){"use strict";var e=u("43CL"),t=u("I0k3");u.d(n,"b",function(){return a}),u.d(n,"a",function(){return r});var a=(t.f,u.i(e.O)(function(){return a}),function(){function l(l){this.renderer2=l,this.onChange=new e.P,this.onModelChange=function(){},this.onTouchChange=function(){}}return l.prototype.ngAfterViewInit=function(){var l=this.container.nativeElement;this.type&&this.renderer2.addClass(l,"free-switch-"+this.type),this.theme&&this.renderer2.addClass(l,"free-"+this.theme)},l.prototype.inputChange=function(l,n){this.disabled||(this.checked=n,this.onModelChange(this.checked),this.onChange.emit({originEvent:l,value:this.value,checked:this.checked}))},l.prototype.writeValue=function(l){this.checked!==l&&(this.checked=l)},l.prototype.registerOnChange=function(l){this.onModelChange=l},l.prototype.registerOnTouched=function(l){this.onTouchChange=l},l.ctorParameters=function(){return[{type:e.Q}]},l}()),r=function(){function l(){}return l}()},"0aEg":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},EB9S:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=[""]},"H+on":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},NlHi:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("43CL"),t=u("H+on"),a=u("ossU"),r=u("f8OW"),c=u("I0k3"),i=u("II8n"),o=u("/5mt"),f=u("LdBt"),d=u("u/4r"),h=u("65G7"),s=u("wPca"),T=u("8etH"),b=u("0aEg"),g=u("3/gQ"),p=u("nUUg"),U=u("kJXZ"),m=u("9ayU"),w=u("cgMo"),_=u("/Z/a"),S=u("xTcG"),X=u("3RUF"),C=u("RqK6"),y=u("zp+V");u.d(n,"MainSwitchModuleNgFactory",function(){return E});var E=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[a.a]],[3,e.e],e.g]),e.d(4608,r.a,r.b,[e.h]),e.d(4608,c.a,c.a,[]),e.d(4608,i.a,i.b,[]),e.d(4608,o.a,o.b,[]),e.d(4608,f.a,f.b,[]),e.d(4608,d.a,d.b,[]),e.d(4608,h.c,h.c,[s.a,i.a,o.a,f.a,d.a,h.a,h.b]),e.d(512,r.d,r.d,[]),e.d(512,c.c,c.c,[]),e.d(512,c.d,c.d,[]),e.d(512,T.w,T.w,[[2,T.m],[2,T.c]]),e.d(512,b.a,b.a,[]),e.d(512,g.a,g.a,[]),e.d(512,p.a,p.a,[]),e.d(512,U.a,U.a,[]),e.d(512,m.a,m.a,[]),e.d(512,w.a,w.a,[]),e.d(512,_.a,_.a,[]),e.d(512,S.a,S.a,[]),e.d(512,X.a,X.a,[]),e.d(512,C.c,C.c,[]),e.d(512,t.a,t.a,[]),e.d(1024,T.r,function(){return[[{path:"",component:y.a}]]},[]),e.d(256,h.b,void 0,[]),e.d(256,h.a,void 0,[])])})},ZwjE:function(l,n,u){"use strict";function e(l){return a.S(0,[a._5(402653184,1,{container:0}),(l()(),a.T(null,["\n    "])),(l()(),a.U(0,[[1,0],["container",1]],null,11,"label",[["class","free-switch"]],null,null,null,null,null)),(l()(),a.T(null,["\n      "])),(l()(),a.U(0,[["checkbox",1]],null,0,"input",[["type","checkbox"]],[[8,"disabled",0],[8,"checked",0]],[[null,"change"]],function(l,n,u){var e=!0,t=l.component;if("change"===n){e=!1!==t.inputChange(u,a.V(l,4).checked)&&e}return e},null,null)),(l()(),a.T(null,["\n      "])),(l()(),a.U(0,null,null,3,"div",[["class","free-switch-media"]],null,null,null,null,null)),(l()(),a.T(null,["\n        "])),(l()(),a.U(0,null,null,0,"span",[["class","switch-label"]],null,null,null,null,null)),(l()(),a.T(null,["\n      "])),(l()(),a.T(null,["\n      "])),(l()(),a.U(0,null,null,1,"div",[["class","free-switch-inner"]],null,null,null,null,null)),(l()(),a.T(null,["",""])),(l()(),a.T(null,["\n    "]))],null,function(l,n){var u=n.component;l(n,4,0,u.disabled,u.checked),l(n,12,0,u.label)})}function t(l){return a.S(0,[(l()(),a.U(0,null,null,2,"free-switch",[],null,null,null,e,f)),a.W(5120,null,i.f,function(l){return[l]},[r.b]),a.X(4243456,null,0,r.b,[a.Q],null,null)],null,null)}var a=u("43CL"),r=u("/Z/a"),c=u("f8OW"),i=u("I0k3");u.d(n,"b",function(){return f}),n.a=e;var o=(a.b(r.a,[],function(l){return a.c([a.d(512,a.e,a.f,[[8,[]],[3,a.e],a.g]),a.d(4608,c.a,c.b,[a.h]),a.d(512,c.d,c.d,[]),a.d(512,r.a,r.a,[])])}),[]),f=a.R({encapsulation:2,styles:o,data:{}});a.Y("free-switch",r.b,t,{label:"label",checked:"checked",value:"value",type:"type",disabled:"disabled",theme:"theme"},{onChange:"onChange"},[])},ossU:function(l,n,u){"use strict";function e(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("PROPERTY")))})}function t(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("TYPE")))})}function a(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DESCRIPTION")))})}function r(l){return S.S(0,[(l()(),S.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),S.T(null,["String"]))],null,null)}function c(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.SWITCH.OPTION.0")))})}function i(l){return S.S(0,[(l()(),S.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),S.T(null,["String"]))],null,null)}function o(l){return S.S(0,[(l()(),S.T(null,["\n                  ","(primary/info/success/warning/danger)\n                "])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.SWITCH.OPTION.1")))})}function f(l){return S.S(0,[(l()(),S.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),S.T(null,["String"]))],null,null)}function d(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.SWITCH.OPTION.2")))})}function h(l){return S.S(0,[(l()(),S.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),S.T(null,["Boolean"]))],null,null)}function s(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.SWITCH.OPTION.3")))})}function T(l){return S.S(0,[(l()(),S.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),S.T(null,["Boolean"]))],null,null)}function b(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.SWITCH.OPTION.4")))})}function g(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("EVENT")))})}function p(l){return S.S(0,[(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DESCRIPTION")))})}function U(l){return S.S(0,[(l()(),S.T(null,["\n                  ","\n                "])),S._19(131072,X.a,[C.c,S.L])],null,function(l,n){l(n,0,0,S._20(n,0,0,S.V(n,1).transform("DEMO.PAGINATION.EVENTS.0")))})}function m(l){return S.S(0,[(l()(),S.U(0,null,null,404,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),S.T(null,["\n  "])),(l()(),S.U(0,null,null,397,"div",[["class","row"]],null,null,null,null,null)),(l()(),S.T(null,["\n    "])),(l()(),S.U(0,null,null,218,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),S.W(512,null,y.a,y.a,[S.Q]),S.X(4210688,null,0,E.b,[S.K,y.a],{grid:[0,"grid"]},null),(l()(),S.T(null,["\n      "])),(l()(),S.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),S.T(null,["\n        ","\n      "])),S._19(131072,X.a,[C.c,S.L]),(l()(),S.T(null,["\n      "])),(l()(),S.U(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),S.T(null,["\n      "])),(l()(),S.U(0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L]),(l()(),S.U(0,null,null,0,"span",[["class","symbol component"]],null,null,null,null,null)),(l()(),S.T(null,["\n\n      "])),(l()(),S.U(0,null,null,202,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),S.T(null,["free-switch"])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L]),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,145,"free-table",[],null,null,null,v.a,v.b)),S.X(4308992,null,0,k.b,[S.Q],null,null),(l()(),S.T(null,["\n          "])),(l()(),S.U(0,null,null,21,"free-table-header",[],null,null,null,v.c,v.d)),S.X(49152,null,0,k.c,[],null,null),(l()(),S.T(null,["\n            "])),(l()(),S.U(0,null,null,17,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,null,0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),S.X(4308992,null,1,k.e,[k.b,S.K],null,null),S._5(335544320,1,{template:0}),(l()(),S._2(0,[[1,2]],0,0,null,e)),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),S.X(4308992,null,1,k.e,[k.b,S.K],null,null),S._5(335544320,2,{template:0}),(l()(),S._2(0,[[2,2]],0,0,null,t)),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),S.X(4308992,null,1,k.e,[k.b,S.K],null,null),S._5(335544320,3,{template:0}),(l()(),S._2(0,[[3,2]],0,0,null,a)),(l()(),S.T(0,["\n            "])),(l()(),S.T(null,["\n          "])),(l()(),S.T(null,["\n\n          "])),(l()(),S.U(0,null,null,118,"free-table-body",[],null,null,null,v.i,v.j)),S.X(4308992,null,1,k.f,[k.b],null,null),S._5(603979776,4,{_rows:1}),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[4,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,5,{template:0}),(l()(),S.T(0,["label"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,6,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[6,2]],0,0,null,r)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,7,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[7,2]],0,0,null,c)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[4,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,8,{template:0}),(l()(),S.T(0,["theme"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,9,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[9,2]],0,0,null,i)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,10,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[10,2]],0,0,null,o)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[4,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,11,{template:0}),(l()(),S.T(0,["type"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,12,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[12,2]],0,0,null,f)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,13,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[13,2]],0,0,null,d)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[4,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,14,{template:0}),(l()(),S.T(0,["checked"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,15,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[15,2]],0,0,null,h)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,16,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[16,2]],0,0,null,s)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[4,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,17,{template:0}),(l()(),S.T(0,["disabled"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,18,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[18,2]],0,0,null,T)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,19,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[19,2]],0,0,null,b)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n          "])),(l()(),S.T(null,["\n        "])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,2,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),S.T(null,["",""])),S._19(131072,X.a,[C.c,S.L]),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,41,"free-table",[],null,null,null,v.a,v.b)),S.X(4308992,null,0,k.b,[S.Q],null,null),(l()(),S.T(null,["\n          "])),(l()(),S.U(0,null,null,16,"free-table-header",[],null,null,null,v.c,v.d)),S.X(49152,null,0,k.c,[],null,null),(l()(),S.T(null,["\n            "])),(l()(),S.U(0,null,null,12,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,null,0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),S.X(4308992,null,1,k.e,[k.b,S.K],null,null),S._5(335544320,20,{template:0}),(l()(),S._2(0,[[20,2]],0,0,null,g)),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),S.X(4308992,null,1,k.e,[k.b,S.K],null,null),S._5(335544320,21,{template:0}),(l()(),S._2(0,[[21,2]],0,0,null,p)),(l()(),S.T(0,["\n            "])),(l()(),S.T(null,["\n          "])),(l()(),S.T(null,["\n\n          "])),(l()(),S.U(0,null,null,19,"free-table-body",[],null,null,null,v.i,v.j)),S.X(4308992,null,1,k.f,[k.b],null,null),S._5(603979776,22,{_rows:1}),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,14,"free-table-row",[],null,null,null,v.e,v.f)),S.X(49152,[[22,4]],0,k.d,[],null,null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,23,{template:0}),(l()(),S.T(0,["onChange"])),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),S.X(4308992,null,1,k.g,[k.d,S.K],null,null),S._5(335544320,24,{template:0}),(l()(),S.T(0,["\n                "])),(l()(),S._2(0,[[24,2]],0,0,null,U)),(l()(),S.T(0,["\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n          "])),(l()(),S.T(null,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n    "])),(l()(),S.T(null,["\n\n    "])),(l()(),S.U(0,null,null,174,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),S.W(512,null,y.a,y.a,[S.Q]),S.X(4210688,null,0,E.b,[S.K,y.a],{grid:[0,"grid"]},null),(l()(),S.T(null,["\n      "])),(l()(),S.U(0,null,null,20,"div",[["class","free-demo-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n          "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),S.T(null,["Import"])),(l()(),S.T(null,["\n          "])),(l()(),S.U(0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,O.a,O.b)),S.X(1097728,null,1,V.b,[S.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),S._5(603979776,25,{tabGroup:1}),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,O.c,O.d)),S.X(114688,[[25,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n              "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,["\n                import {SwitchModule} from 'freeng/freeng';\n              "])),(l()(),S.T(0,["\n            "])),(l()(),S.T(0,["\n          "])),(l()(),S.T(null,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n\n      "])),(l()(),S.U(0,null,null,42,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),S.T(null,["Default"])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,36,"free-tab-group",[["direction","right"]],null,null,null,O.a,O.b)),S.X(1097728,null,1,V.b,[S.Q],{direction:[0,"direction"]},null),S._5(603979776,26,{tabGroup:1}),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,23,"free-tab",[["header","PREVIEW"]],null,null,null,O.c,O.d)),S.X(114688,[[26,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,1,"p",[["style","width: 100%"]],null,null,null,null,null)),(l()(),S.T(null,["当前状态：",""])),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,16,"p",[],null,null,null,null,null)),(l()(),S.T(null,["\n              "])),(l()(),S.U(0,null,null,5,"free-switch",[["label","Switch"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"]],function(l,n,u){var e=!0,t=l.component;if("ngModelChange"===n){e=!1!==(t.checked=u)&&e}return e},Q.a,Q.b)),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"]},null),S.W(1024,null,D.f,function(l){return[l]},[K.b]),S.X(671744,null,0,D.g,[[8,null],[8,null],[8,null],[2,D.f]],{model:[0,"model"]},{update:"ngModelChange"}),S.W(2048,null,D.h,null,[D.g]),S.X(16384,null,0,D.i,[D.h],null,null),(l()(),S.T(null,["\n              "])),(l()(),S.U(0,null,null,2,"free-switch",[["label","Switch"],["type","2"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],checked:[1,"checked"],type:[2,"type"]},null),(l()(),S.T(null,["\n              "])),(l()(),S.U(0,null,null,2,"free-switch",[["label","Switch"],["type","3"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],type:[1,"type"]},null),(l()(),S.T(null,["\n            "])),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,O.c,O.d)),S.X(114688,[[26,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,['\n              <free-switch label="Switch"></free-switch>\n              <free-switch label="Switch" type="2" [checked]="true"></free-switch>\n              <free-switch label="Switch" type="3"></free-switch>\n            '])),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n\n      "])),(l()(),S.U(0,null,null,25,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),S.T(null,["Disabled"])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,19,"free-tab-group",[["direction","right"]],null,null,null,O.a,O.b)),S.X(1097728,null,1,V.b,[S.Q],{direction:[0,"direction"]},null),S._5(603979776,27,{tabGroup:1}),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","PREVIEW"]],null,null,null,O.c,O.d)),S.X(114688,[[27,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],disabled:[1,"disabled"]},null),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,O.c,O.d)),S.X(114688,[[27,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,['\n              <free-switch label="Switch" [disabled]="true"></free-switch>\n            '])),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n\n      "])),(l()(),S.U(0,null,null,45,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),S.T(null,["Theme"])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,39,"free-tab-group",[["direction","right"]],null,null,null,O.a,O.b)),S.X(1097728,null,1,V.b,[S.Q],{direction:[0,"direction"]},null),S._5(603979776,28,{tabGroup:1}),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,26,"free-tab",[["header","PREVIEW"]],null,null,null,O.c,O.d)),S.X(114688,[[28,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"],["theme","primary"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],theme:[1,"theme"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"],["theme","info"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],theme:[1,"theme"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"],["theme","success"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],theme:[1,"theme"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"],["theme","warning"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],theme:[1,"theme"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"],["theme","danger"]],null,null,null,Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"],theme:[1,"theme"]},null),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,O.c,O.d)),S.X(114688,[[28,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,['\n              <free-switch label="Switch"></free-switch>\n              <free-switch label="Switch" theme="primary"></free-switch>\n              <free-switch label="Switch" theme="info"></free-switch>\n              <free-switch label="Switch" theme="success"></free-switch>\n              <free-switch label="Switch" theme="warning"></free-switch>\n              <free-switch label="Switch" theme="danger"></free-switch>\n            '])),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n\n      "])),(l()(),S.U(0,null,null,29,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),S.T(null,["Change Event"])),(l()(),S.T(null,["\n        "])),(l()(),S.U(0,null,null,23,"free-tab-group",[["direction","right"]],null,null,null,O.a,O.b)),S.X(1097728,null,1,V.b,[S.Q],{direction:[0,"direction"]},null),S._5(603979776,29,{tabGroup:1}),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,6,"free-tab",[["header","PREVIEW"]],null,null,null,O.c,O.d)),S.X(114688,[[29,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-switch",[["label","Switch"]],null,[[null,"onChange"]],function(l,n,u){var e=!0,t=l.component;if("onChange"===n){e=!1!==t.onChange(u)&&e}return e},Q.a,Q.b)),S.W(5120,null,D.f,function(l){return[l]},[K.b]),S.X(4243456,null,0,K.b,[S.Q],{label:[0,"label"]},{onChange:"onChange"}),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n          "])),(l()(),S.U(0,null,0,10,"free-tab",[["header","CODE"]],null,null,null,O.c,O.d)),S.X(114688,[[29,4]],0,V.c,[],{header:[0,"header"]},null),(l()(),S.T(0,["\n            "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,['\n              <free-switch label="Switch" (onChange)="onChange($event)"></free-switch>\n            '])),(l()(),S.T(0,["\n\n            "])),(l()(),S.U(0,null,0,2,"free-code",[["lang","javascript"]],null,null,null,I.a,I.b)),S.X(4243456,null,0,W.b,[S.Q],{lang:[0,"lang"]},null),(l()(),S.T(0,["\n              onChange(event: any) {\n                console.log(event.target.checked);\n              }\n            "])),(l()(),S.T(0,["\n          "])),(l()(),S.T(0,["\n        "])),(l()(),S.T(null,["\n      "])),(l()(),S.T(null,["\n    "])),(l()(),S.T(null,["\n  "])),(l()(),S.T(null,["\n  "])),(l()(),S.U(0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),S.T(null,["FreeNG - ",""])),S._19(131072,X.a,[C.c,S.L]),(l()(),S.T(null,["\n"])),(l()(),S.T(null,["\n"]))],function(l,n){var u=n.component;l(n,6,0,"6"),l(n,29,0),l(n,38,0),l(n,43,0),l(n,48,0),l(n,55,0),l(n,62,0),l(n,67,0),l(n,74,0),l(n,85,0),l(n,90,0),l(n,97,0),l(n,108,0),l(n,113,0),l(n,120,0),l(n,131,0),l(n,136,0),l(n,143,0),l(n,154,0),l(n,159,0),l(n,166,0),l(n,180,0),l(n,189,0),l(n,194,0),l(n,201,0),l(n,208,0),l(n,213,0);l(n,226,0,"6");l(n,236,0,"line","right");l(n,240,0,"CODE");l(n,243,0,"typescript");l(n,256,0,"right");l(n,260,0,"PREVIEW");l(n,268,0,"Switch"),l(n,270,0,u.checked);l(n,276,0,"Switch",!0,"2");l(n,280,0,"Switch","3");l(n,285,0,"CODE");l(n,288,0,"html");l(n,300,0,"right");l(n,304,0,"PREVIEW");l(n,308,0,"Switch",!0);l(n,312,0,"CODE");l(n,315,0,"html");l(n,327,0,"right");l(n,331,0,"PREVIEW");l(n,335,0,"Switch");l(n,339,0,"Switch","primary");l(n,343,0,"Switch","info");l(n,347,0,"Switch","success");l(n,351,0,"Switch","warning");l(n,355,0,"Switch","danger");l(n,359,0,"CODE");l(n,362,0,"html");l(n,374,0,"right");l(n,378,0,"PREVIEW");l(n,382,0,"Switch");l(n,386,0,"CODE");l(n,389,0,"html");l(n,393,0,"javascript")},function(l,n){var u=n.component;l(n,9,0,S._20(n,9,0,S.V(n,10).transform("DEMO.SWITCH.DESCRIPTION"))),l(n,15,0,S._20(n,15,0,S.V(n,16).transform("API-OPTION"))),l(n,25,0,S._20(n,25,0,S.V(n,26).transform("COMPONENT.SWITCH"))),l(n,176,0,S._20(n,176,0,S.V(n,177).transform("EVENT"))),l(n,263,0,u.checked),l(n,267,0,S.V(n,272).ngClassUntouched,S.V(n,272).ngClassTouched,S.V(n,272).ngClassPristine,S.V(n,272).ngClassDirty,S.V(n,272).ngClassValid,S.V(n,272).ngClassInvalid,S.V(n,272).ngClassPending),l(n,402,0,S._20(n,402,0,S.V(n,403).transform("MOTTO")))})}function w(l){return S.S(0,[(l()(),S.U(0,null,null,1,"free-main-switch",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,m,M)),S.X(114688,null,0,P.a,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,S.V(n,1).fadeInUpState,S.V(n,1).display)})}var _=u("EB9S"),S=u("43CL"),X=u("aO6n"),C=u("65G7"),y=u("KDcH"),E=u("xTcG"),v=u("3N/a"),k=u("cgMo"),O=u("uh4r"),V=u("3/gQ"),I=u("VpmR"),W=u("nUUg"),P=u("zp+V"),Q=u("ZwjE"),K=u("/Z/a"),D=u("I0k3");u.d(n,"a",function(){return N});var L=[_.a],M=S.R({encapsulation:0,styles:L,data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}}),N=S.Y("free-main-switch",P.a,w,{},{},[])},"zp+V":function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.display="block",this.pageTitle="Components-Switch"}return l.prototype.ngOnInit=function(){},l.prototype.onChange=function(l){alert("是否选中："+l.target.checked)},l.ctorParameters=function(){return[]},l}()}});