webpackJsonp([18],{B4uo:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("0YDh"),t=u("hdX2"),o=u("zBjR"),r=u("7PPw"),i=u("9Gw1"),a=u("JZuG"),c=u("qJYQ"),s=u("roNs"),f=u("ijni"),d=u("8UQZ"),p=u("0Q+q"),T=u("aB1M"),h=u("9ayU"),b=u("3/gQ"),g=u("nUUg"),m=u("xTcG"),v=u("PQ8Y"),U=u("kJXZ"),P=u("cgMo"),X=u("dosf"),_=u("7rIk"),k=u("C30A"),I=u("RqK6"),y=u("SAVK");u.d(n,"MainPopoverModuleNgFactory",function(){return O});var O=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[o.a]],[3,e.e],e.g]),e.d(4608,r.a,r.b,[e.h]),e.d(4608,i.a,i.b,[]),e.d(4608,a.a,a.b,[]),e.d(4608,c.a,c.b,[]),e.d(4608,s.a,s.b,[]),e.d(4608,f.c,f.c,[d.a,i.a,a.a,c.a,s.a,f.a,f.b]),e.d(512,r.d,r.d,[]),e.d(512,p.w,p.w,[[2,p.m],[2,p.c]]),e.d(512,T.a,T.a,[]),e.d(512,h.a,h.a,[]),e.d(512,b.a,b.a,[]),e.d(512,g.a,g.a,[]),e.d(512,m.a,m.a,[]),e.d(512,v.a,v.a,[]),e.d(512,U.a,U.a,[]),e.d(512,P.a,P.a,[]),e.d(512,X.a,X.a,[]),e.d(512,_.a,_.a,[]),e.d(512,k.a,k.a,[]),e.d(512,I.c,I.c,[]),e.d(512,t.a,t.a,[]),e.d(1024,p.r,function(){return[[{path:"",component:y.a}]]},[]),e.d(256,f.b,void 0,[]),e.d(256,f.a,void 0,[])])})},SAVK:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.display="block"}return l.prototype.ngOnInit=function(){},l.ctorParameters=function(){return[]},l}()},Xfjc:function(l,n,u){"use strict";function e(l){return o.S(0,[(l()(),o.T(-1,null,["\n    "])),(l()(),o.U(1,0,null,null,8,"div",[["class","free-popover"]],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.onPanelClick()&&e}return e},null,null)),o.X(2,278528,null,0,i.o,[o.n,o.K,o.Z],{ngStyle:[0,"ngStyle"]},null),o._0(3,{top:0,left:1,zIndex:2,display:3}),(l()(),o.T(-1,null,["\n      "])),(l()(),o.U(5,0,null,null,3,"div",[["class","free-popover-body"]],null,null,null,null,null)),(l()(),o.T(-1,null,["\n        "])),o._1(null,0),(l()(),o.T(-1,null,["\n      "])),(l()(),o.T(-1,null,["\n    "])),(l()(),o.T(-1,null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,l(n,3,0,u.top+"px",u.left+"px",u.zIndex,u.visible?"block":"none"))},null)}function t(l){return o.S(0,[(l()(),o.U(0,0,null,null,2,"free-popover",[],null,null,null,e,s)),o.W(512,null,a.a,a.a,[o.Q]),o.X(2,4440064,null,0,r.b,[a.a,o.K,o.Q],null,null)],function(l,n){l(n,2,0)},null)}var o=u("0YDh"),r=u("dosf"),i=u("7PPw"),a=u("KDcH");u.d(n,"b",function(){return s}),n.a=e;var c=(o.b(r.a,[],function(l){return o.c([o.d(512,o.e,o.f,[[8,[]],[3,o.e],o.g]),o.d(4608,i.a,i.b,[o.h]),o.d(512,i.d,i.d,[]),o.d(512,r.a,r.a,[])])}),[]),s=o.R({encapsulation:2,styles:c,data:{}});o.Y("free-popover",r.b,t,{popoverPosition:"popoverPosition",dimiss:"dimiss"},{onShow:"onShow",onHide:"onHide"},["*"])},aB1M:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},dosf:function(l,n,u){"use strict";var e=u("0YDh"),t=u("KDcH");u.d(n,"b",function(){return o}),u.d(n,"a",function(){return r});var o=function(){function l(l,n,u){this.domRenderer=l,this.er=n,this.renderer2=u,this.onShow=new e.P,this.onHide=new e.P,this.visible=!1,this.dimiss=!0,this.popoverPosition="top"}return l.prototype.ngOnInit=function(){var l=this;this.dimiss&&(this.documentClickListener=this.renderer2.listen("document","click",function(){l.selfClick||l.targetClick||l.hide(),l.selfClick=!1,l.targetClick=!1}))},l.prototype.ngAfterViewInit=function(){this.popoverElem=this.er.nativeElement.firstElementChild},l.prototype.toggle=function(l,n){var u=n||l.currentTarget||l.target;this.target&&this.target!==u?this.show(l,n):this.visible?this.hide():this.show(l,n),this.dimiss&&(this.targetClick=!0),this.target=u},l.prototype.hide=function(){this.visible&&(this.visible=!1,this.onHide.emit(null))},l.prototype.show=function(l,n){this.dimiss&&(this.targetClick=!0);var u=this.domRenderer.getHiddenElementOuterHeight(this.popoverElem),e=u.width,o=u.height,r=n||l.currentTarget||l.target;if(this.zIndex=t.a.zIndex++,!this.visible){this.visible=!0,this.onShow.emit(null);var i=0,a=0,c=this.domRenderer.getRect(r);switch(this.popoverPosition){case"left":i=c.top-o/2+c.height/2,a=c.left-e;break;case"right":i=c.top-o/2+c.height/2,a=c.left+c.width;break;case"top":i=c.top-o,a=c.left-e/2+c.width/2;break;case"bottom":i=c.top+c.height,a=c.left-e/2+c.width/2}this.left=a,this.top=i,this.domRenderer.addClass(this.popoverElem,this.popoverPosition)}},l.prototype.onPanelClick=function(){this.selfClick=!0},l.prototype.ngOnDestroy=function(){this.documentClickListener&&this.documentClickListener(),this.target=null},l.ctorParameters=function(){return[{type:t.a},{type:e.K},{type:e.Q}]},l}(),r=function(){function l(){}return l}()},hdX2:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},t8AT:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=[""]},zBjR:function(l,n,u){"use strict";function e(l){return p.S(0,[(l()(),p.T(0,null,["",""])),p._19(131072,T.a,[h.c,p.L])],null,function(l,n){l(n,0,0,p._20(n,0,0,p.V(n,1).transform("PROPERTY")))})}function t(l){return p.S(0,[(l()(),p.T(0,null,["",""])),p._19(131072,T.a,[h.c,p.L])],null,function(l,n){l(n,0,0,p._20(n,0,0,p.V(n,1).transform("TYPE")))})}function o(l){return p.S(0,[(l()(),p.T(0,null,["",""])),p._19(131072,T.a,[h.c,p.L])],null,function(l,n){l(n,0,0,p._20(n,0,0,p.V(n,1).transform("DESCRIPTION")))})}function r(l){return p.S(0,[(l()(),p.U(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),p.T(-1,null,["String"]))],null,null)}function i(l){return p.S(0,[(l()(),p.T(0,null,["",""])),p._19(131072,T.a,[h.c,p.L])],null,function(l,n){l(n,0,0,p._20(n,0,0,p.V(n,1).transform("DEMO.POPOVER.OPTION.0")))})}function a(l){return p.S(0,[(l()(),p.U(0,0,null,null,1,"code",[],null,null,null,null,null)),(l()(),p.T(-1,null,["Boolean"]))],null,null)}function c(l){return p.S(0,[(l()(),p.T(0,null,["",""])),p._19(131072,T.a,[h.c,p.L])],null,function(l,n){l(n,0,0,p._20(n,0,0,p.V(n,1).transform("DEMO.POPOVER.OPTION.1")))})}function s(l){return p.S(0,[(l()(),p.U(0,0,null,null,212,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n  "])),(l()(),p.U(2,0,null,null,205,"div",[["class","row"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n    "])),(l()(),p.U(4,0,null,null,102,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(6,4210688,null,0,g.b,[p.K,b.a],{grid:[0,"grid"]},null),(l()(),p.T(-1,null,["\n      "])),(l()(),p.U(8,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),p.T(9,null,["\n        ","\n      "])),p._19(131072,T.a,[h.c,p.L]),(l()(),p.T(-1,null,["\n      "])),(l()(),p.U(12,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),p.T(-1,null,["\n      "])),(l()(),p.U(14,0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),p.T(15,null,["",""])),p._19(131072,T.a,[h.c,p.L]),(l()(),p.U(17,0,null,null,0,"span",[["class","symbol directive"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n\n      "])),(l()(),p.U(19,0,null,null,86,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(21,0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),p.T(-1,null,["free-popover"])),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(24,0,null,null,2,"p",[],null,null,null,null,null)),(l()(),p.T(25,null,["",""])),p._19(131072,T.a,[h.c,p.L]),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(28,0,null,null,76,"free-table",[],null,null,null,m.a,m.b)),p.X(29,4308992,null,0,v.b,[p.Q],null,null),(l()(),p.T(-1,null,["\n          "])),(l()(),p.U(31,0,null,null,21,"free-table-header",[],null,null,null,m.c,m.d)),p.X(32,49152,null,0,v.c,[],null,null),(l()(),p.T(-1,null,["\n            "])),(l()(),p.U(34,0,null,null,17,"free-table-row",[],null,null,null,m.e,m.f)),p.X(35,49152,null,0,v.d,[],null,null),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(37,0,null,0,3,"free-table-head",[],null,null,null,m.g,m.h)),p.X(38,4308992,null,1,v.e,[v.b,p.K],null,null),p._5(335544320,1,{template:0}),(l()(),p._2(0,[[1,2]],0,0,null,e)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(42,0,null,0,3,"free-table-head",[],null,null,null,m.g,m.h)),p.X(43,4308992,null,1,v.e,[v.b,p.K],null,null),p._5(335544320,2,{template:0}),(l()(),p._2(0,[[2,2]],0,0,null,t)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(47,0,null,0,3,"free-table-head",[],null,null,null,m.g,m.h)),p.X(48,4308992,null,1,v.e,[v.b,p.K],null,null),p._5(335544320,3,{template:0}),(l()(),p._2(0,[[3,2]],0,0,null,o)),(l()(),p.T(-1,0,["\n            "])),(l()(),p.T(-1,null,["\n          "])),(l()(),p.T(-1,null,["\n\n          "])),(l()(),p.U(54,0,null,null,49,"free-table-body",[],null,null,null,m.i,m.j)),p.X(55,4308992,null,1,v.f,[v.b],null,null),p._5(603979776,4,{_rows:1}),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(58,0,null,0,21,"free-table-row",[],null,null,null,m.e,m.f)),p.X(59,49152,[[4,4]],0,v.d,[],null,null),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(61,0,null,0,3,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(62,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,5,{template:0}),(l()(),p.T(-1,0,["popoverPosition"])),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(66,0,null,0,5,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(67,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,6,{template:0}),(l()(),p.T(-1,0,["\n                "])),(l()(),p._2(0,[[6,2]],0,0,null,r)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(73,0,null,0,5,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(74,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,7,{template:0}),(l()(),p.T(-1,0,["\n                "])),(l()(),p._2(0,[[7,2]],0,0,null,i)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(81,0,null,0,21,"free-table-row",[],null,null,null,m.e,m.f)),p.X(82,49152,[[4,4]],0,v.d,[],null,null),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(84,0,null,0,3,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(85,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,8,{template:0}),(l()(),p.T(-1,0,["dimiss"])),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(89,0,null,0,5,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(90,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,9,{template:0}),(l()(),p.T(-1,0,["\n                "])),(l()(),p._2(0,[[9,2]],0,0,null,a)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(96,0,null,0,5,"free-table-cell",[],null,null,null,m.k,m.l)),p.X(97,4308992,null,1,v.g,[v.d,p.K],null,null),p._5(335544320,10,{template:0}),(l()(),p.T(-1,0,["\n                "])),(l()(),p._2(0,[[10,2]],0,0,null,c)),(l()(),p.T(-1,0,["\n              "])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,null,["\n        "])),(l()(),p.T(-1,null,["\n      "])),(l()(),p.T(-1,null,["\n    "])),(l()(),p.T(-1,null,["\n\n    "])),(l()(),p.U(108,0,null,null,98,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(110,4210688,null,0,g.b,[p.K,b.a],{grid:[0,"grid"]},null),(l()(),p.T(-1,null,["\n      "])),(l()(),p.U(112,0,null,null,20,"div",[["class","free-demo-board"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(114,0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n          "])),(l()(),p.U(116,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),p.T(-1,null,["Import"])),(l()(),p.T(-1,null,["\n          "])),(l()(),p.U(119,0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,U.a,U.b)),p.X(120,1097728,null,0,P.b,[p.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(122,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,U.c,U.d)),p.X(123,4308992,null,1,P.c,[P.b],{header:[0,"header"]},null),p._5(603979776,11,{templates:1}),(l()(),p.T(-1,0,["\n              "])),(l()(),p.U(126,0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,X.a,X.b)),p.X(127,4243456,null,0,_.b,[p.Q],{lang:[0,"lang"]},null),(l()(),p.T(-1,0,["\n                import {PopoverModule} from 'freeng/freeng';\n              "])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,null,["\n        "])),(l()(),p.T(-1,null,["\n      "])),(l()(),p.T(-1,null,["\n\n      "])),(l()(),p.U(134,0,null,null,42,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(136,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),p.T(-1,null,["Position"])),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(139,0,null,null,36,"free-tab-group",[["direction","right"]],null,null,null,U.a,U.b)),p.X(140,1097728,null,0,P.b,[p.Q],{direction:[0,"direction"]},null),(l()(),p.T(-1,0,["\n          "])),(l()(),p.U(142,0,null,0,23,"free-tab",[["header","PREVIEW"]],null,null,null,U.c,U.d)),p.X(143,4308992,null,1,P.c,[P.b],{header:[0,"header"]},null),p._5(603979776,12,{templates:1}),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(146,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==p.V(l,216).toggle(u)&&e}return e},null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(148,4210688,null,0,k.b,[p.K,b.a],null,null),(l()(),p.T(-1,null,["Top"])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(151,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==p.V(l,223).toggle(u)&&e}return e},null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(153,4210688,null,0,k.b,[p.K,b.a],null,null),(l()(),p.T(-1,null,["Right"])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(156,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==p.V(l,251).toggle(u)&&e}return e},null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(158,4210688,null,0,k.b,[p.K,b.a],null,null),(l()(),p.T(-1,null,["Bottom"])),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(161,0,null,0,3,"button",[["fButton",""]],null,[[null,"click"]],function(l,n,u){var e=!0;if("click"===n){e=!1!==p.V(l,244).toggle(u)&&e}return e},null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(163,4210688,null,0,k.b,[p.K,b.a],null,null),(l()(),p.T(-1,null,["Left"])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.U(167,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,U.c,U.d)),p.X(168,4308992,null,1,P.c,[P.b],{header:[0,"header"]},null),p._5(603979776,13,{templates:1}),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(171,0,null,0,2,"free-code",[["lang","html"]],null,null,null,X.a,X.b)),p.X(172,4243456,null,0,_.b,[p.Q],{lang:[0,"lang"]},null),(l()(),p.T(-1,0,['\n              <button fButton (click)="popover.toggle($event)">Top</button>\n              <button fButton (click)="rightPopover.toggle($event)">Right</button>\n              <button fButton (click)="bottomPopover.toggle($event)">Bottom</button>\n              <button fButton (click)="leftPopover.toggle($event)">Left</button>\n              <free-popover #popover>\n                <img src="freeng/assets/images/f1.jpg" alt="">\n              </free-popover>\n              <free-popover #rightPopover [popoverPosition]="\'right\'">\n                <free-accordion-group>\n                  <free-accordion header="Item 1">\n                    Item 1 content.\n                  </free-accordion>\n                  <free-accordion header="Item 2">\n                    Item 2 content.\n                  </free-accordion>\n                  <free-accordion header="Item 3">\n                    Item 3 content.\n                  </free-accordion>\n                </free-accordion-group>\n              </free-popover>\n              <free-popover #leftPopover [popoverPosition]="\'left\'">\n                <img src="freeng/assets/images/f1.jpg" alt="">\n              </free-popover>\n              <free-popover #bottomPopover [popoverPosition]="\'bottom\'">\n                <img src="freeng/assets/images/f1.jpg" alt="">\n              </free-popover>\n            '])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,0,["\n        "])),(l()(),p.T(-1,null,["\n      "])),(l()(),p.T(-1,null,["\n\n      "])),(l()(),p.U(178,0,null,null,27,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(180,0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),p.T(-1,null,["Mouse"])),(l()(),p.T(-1,null,["\n        "])),(l()(),p.U(183,0,null,null,21,"free-tab-group",[["direction","right"]],null,null,null,U.a,U.b)),p.X(184,1097728,null,0,P.b,[p.Q],{direction:[0,"direction"]},null),(l()(),p.T(-1,0,["\n          "])),(l()(),p.U(186,0,null,0,8,"free-tab",[["header","PREVIEW"]],null,null,null,U.c,U.d)),p.X(187,4308992,null,1,P.c,[P.b],{header:[0,"header"]},null),p._5(603979776,14,{templates:1}),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(190,0,null,0,3,"button",[["fButton",""]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var e=!0;if("mouseenter"===n){e=!1!==p.V(l,258).show(u)&&e}if("mouseleave"===n){e=!1!==p.V(l,258).hide()&&e}return e},null,null)),p.W(512,null,b.a,b.a,[p.Q]),p.X(192,4210688,null,0,k.b,[p.K,b.a],null,null),(l()(),p.T(-1,null,["mouseIn"])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.U(196,0,null,0,7,"free-tab",[["header","CODE"]],null,null,null,U.c,U.d)),p.X(197,4308992,null,1,P.c,[P.b],{header:[0,"header"]},null),p._5(603979776,15,{templates:1}),(l()(),p.T(-1,0,["\n            "])),(l()(),p.U(200,0,null,0,2,"free-code",[["lang","html"]],null,null,null,X.a,X.b)),p.X(201,4243456,null,0,_.b,[p.Q],{lang:[0,"lang"]},null),(l()(),p.T(-1,0,['\n              <button fButton\n                      (mouseenter)="mousePopover.show($event)" (mouseleave)="mousePopover.hide()">mouseIn</button>\n              <free-popover #mousePopover>\n                <img src="freeng/assets/images/f1.jpg" alt="">\n              </free-popover>\n            '])),(l()(),p.T(-1,0,["\n          "])),(l()(),p.T(-1,0,["\n        "])),(l()(),p.T(-1,null,["\n      "])),(l()(),p.T(-1,null,["\n    "])),(l()(),p.T(-1,null,["\n  "])),(l()(),p.T(-1,null,["\n  "])),(l()(),p.U(209,0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),p.T(210,null,["FreeNG - ",""])),p._19(131072,T.a,[h.c,p.L]),(l()(),p.T(-1,null,["\n"])),(l()(),p.T(-1,null,["\n\n"])),(l()(),p.U(214,0,null,null,5,"free-popover",[],null,null,null,I.a,I.b)),p.W(512,null,b.a,b.a,[p.Q]),p.X(216,4440064,[["popover",4]],0,y.b,[b.a,p.K,p.Q],null,null),(l()(),p.T(-1,0,["\n  "])),(l()(),p.U(218,0,null,0,0,"img",[["alt",""],["src","freeng/assets/images/f1.jpg"]],null,null,null,null,null)),(l()(),p.T(-1,0,["\n"])),(l()(),p.T(-1,null,["\n"])),(l()(),p.U(221,0,null,null,19,"free-popover",[],null,null,null,I.a,I.b)),p.W(512,null,b.a,b.a,[p.Q]),p.X(223,4440064,[["rightPopover",4]],0,y.b,[b.a,p.K,p.Q],{popoverPosition:[0,"popoverPosition"]},null),(l()(),p.T(-1,0,["\n  "])),(l()(),p.U(225,0,null,0,14,"free-accordion-group",[],null,null,null,O.a,O.b)),p.X(226,49152,null,0,Q.b,[],null,null),(l()(),p.T(-1,0,["\n    "])),(l()(),p.U(228,0,null,0,2,"free-accordion",[["header","Item 1"]],null,null,null,O.c,O.d)),p.X(229,114688,null,0,Q.c,[Q.b],{header:[0,"header"]},null),(l()(),p.T(-1,1,["\n      Item 1 content.\n    "])),(l()(),p.T(-1,0,["\n    "])),(l()(),p.U(232,0,null,0,2,"free-accordion",[["header","Item 2"]],null,null,null,O.c,O.d)),p.X(233,114688,null,0,Q.c,[Q.b],{header:[0,"header"]},null),(l()(),p.T(-1,1,["\n      Item 2 content.\n    "])),(l()(),p.T(-1,0,["\n    "])),(l()(),p.U(236,0,null,0,2,"free-accordion",[["header","Item 3"]],null,null,null,O.c,O.d)),p.X(237,114688,null,0,Q.c,[Q.b],{header:[0,"header"]},null),(l()(),p.T(-1,1,["\n      Item 3 content.\n    "])),(l()(),p.T(-1,0,["\n  "])),(l()(),p.T(-1,0,["\n"])),(l()(),p.T(-1,null,["\n"])),(l()(),p.U(242,0,null,null,5,"free-popover",[],null,null,null,I.a,I.b)),p.W(512,null,b.a,b.a,[p.Q]),p.X(244,4440064,[["leftPopover",4]],0,y.b,[b.a,p.K,p.Q],{popoverPosition:[0,"popoverPosition"]},null),(l()(),p.T(-1,0,["\n  "])),(l()(),p.U(246,0,null,0,0,"img",[["alt",""],["src","freeng/assets/images/f1.jpg"]],null,null,null,null,null)),(l()(),p.T(-1,0,["\n"])),(l()(),p.T(-1,null,["\n"])),(l()(),p.U(249,0,null,null,5,"free-popover",[],null,null,null,I.a,I.b)),p.W(512,null,b.a,b.a,[p.Q]),p.X(251,4440064,[["bottomPopover",4]],0,y.b,[b.a,p.K,p.Q],{popoverPosition:[0,"popoverPosition"]},null),(l()(),p.T(-1,0,["\n  "])),(l()(),p.U(253,0,null,0,0,"img",[["alt",""],["src","freeng/assets/images/f1.jpg"]],null,null,null,null,null)),(l()(),p.T(-1,0,["\n"])),(l()(),p.T(-1,null,["\n\n"])),(l()(),p.U(256,0,null,null,5,"free-popover",[],null,null,null,I.a,I.b)),p.W(512,null,b.a,b.a,[p.Q]),p.X(258,4440064,[["mousePopover",4]],0,y.b,[b.a,p.K,p.Q],null,null),(l()(),p.T(-1,0,["\n  "])),(l()(),p.U(260,0,null,0,0,"img",[["alt",""],["src","freeng/assets/images/f1.jpg"]],null,null,null,null,null)),(l()(),p.T(-1,0,["\n"])),(l()(),p.T(-1,null,["\n"]))],function(l,n){l(n,6,0,"6"),l(n,29,0),l(n,38,0),l(n,43,0),l(n,48,0),l(n,55,0),l(n,62,0),l(n,67,0),l(n,74,0),l(n,85,0),l(n,90,0),l(n,97,0);l(n,110,0,"6");l(n,120,0,"line","right");l(n,123,0,"CODE");l(n,127,0,"typescript");l(n,140,0,"right");l(n,143,0,"PREVIEW");l(n,168,0,"CODE");l(n,172,0,"html");l(n,184,0,"right");l(n,187,0,"PREVIEW");l(n,197,0,"CODE");l(n,201,0,"html"),l(n,216,0);l(n,223,0,"right");l(n,229,0,"Item 1");l(n,233,0,"Item 2");l(n,237,0,"Item 3");l(n,244,0,"left");l(n,251,0,"bottom"),l(n,258,0)},function(l,n){l(n,9,0,p._20(n,9,0,p.V(n,10).transform("DEMO.POPOVER.DESCRIPTION"))),l(n,15,0,p._20(n,15,0,p.V(n,16).transform("API-OPTION"))),l(n,25,0,p._20(n,25,0,p.V(n,26).transform("DEMO.POPOVER.DESCRIPTION"))),l(n,210,0,p._20(n,210,0,p.V(n,211).transform("MOTTO")))})}function f(l){return p.S(0,[(l()(),p.U(0,0,null,null,1,"free-main-popover",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,s,V)),p.X(1,114688,null,0,E.a,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,p.V(n,1).fadeInUpState,p.V(n,1).display)})}var d=u("t8AT"),p=u("0YDh"),T=u("LzuQ"),h=u("ijni"),b=u("KDcH"),g=u("xTcG"),m=u("3N/a"),v=u("cgMo"),U=u("uh4r"),P=u("3/gQ"),X=u("VpmR"),_=u("nUUg"),k=u("PQ8Y"),I=u("Xfjc"),y=u("dosf"),O=u("Cq5k"),Q=u("7rIk"),E=u("SAVK");u.d(n,"a",function(){return w});var K=[d.a],V=p.R({encapsulation:0,styles:K,data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}}),w=p.Y("free-main-popover",E.a,f,{},{},[])}});