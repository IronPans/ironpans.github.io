webpackJsonp([22],{e7Hd:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},ePRG:function(l,n,u){"use strict";var e=u("gDXf"),t=u("H6Nv"),i=u("KDcH");u.d(n,"c",function(){return r}),u.d(n,"b",function(){return a}),u.d(n,"a",function(){return o});var r=function(){function l(l,n,u){this.contextMenu=l,this.location=n,this.domRenderer=u}return l.prototype.onMouseenter=function(l,n,u){if(!n.disabled){this.activeItem=u;var e=u.children[0].nextElementSibling;if(e){var t=e.children[0];this.position(t,u)}}},l.prototype.clickDisabled=function(l,n){if(!n.url)return l.preventDefault(),!1},l.prototype.onMouseleave=function(l){this.activeItem=null},l.prototype.position=function(l,n){var u=this.domRenderer.getRect(n),e=[window.innerWidth,window.innerHeight],t=e[0],i=e[1],r="100%",a=0,o=l.offsetWidth,c=l.offsetHeight;if(!o){var f=this.domRenderer.getHiddenElementOuterHeight(l);o=f.width,c=f.height}u.left+u.width+o>t&&(r="-100%"),u.top+c>i&&(a=c-u.height),l.style.left=r,l.style.top=a},l.prototype.itemClick=function(l,n){this.contextMenu.hide(),n&&n.back&&this.location.back()},l.ctorParameters=function(){return[{type:a,decorators:[{type:e.N,args:[u.i(e.O)(function(){return a})]}]},{type:t.i},{type:i.a}]},l}(),a=function(){function l(l,n){this.domRenderer=l,this.renderer2=n}return l.prototype.ngAfterViewInit=function(){var l=this;this.container=this.containerViewChild.nativeElement,this.documentClickListener=this.renderer2.listen("document","click",function(){l.hide()}),this.global?this.documentClickListener=this.renderer2.listen("document","contextmenu",function(){l.container&&(l.show(event),event.preventDefault())}):this.target&&(this.childClickListener=this.renderer2.listen(this.target,"contextmenu",function(n){l.show(n),n.stopPropagation(),n.preventDefault()}))},l.prototype.show=function(l){this.visible||(this.visible=!0,this.position(l),l&&l.preventDefault())},l.prototype.position=function(l){if(l){var n=[l.pageX-document.body.scrollLeft,l.pageY-document.body.scrollTop],u=n[0],e=n[1],t=this.container.offsetWidth,i=this.container.offsetHeight;if(!t){var r=this.domRenderer.getHiddenElementOuterHeight(this.container);t=r.width,i=r.height}var a=[window.innerWidth,window.innerHeight],o=a[0],c=a[1];t+u>o&&(u-=t),i+e>c&&(e-=i),this.container.style.left=u+"px",this.container.style.top=e+"px"}},l.prototype.hide=function(){this.visible=!1},l.prototype.ngOnDestroy=function(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null),this.childClickListener&&(this.childClickListener(),this.childClickListener=null),this.container=null},l.ctorParameters=function(){return[{type:i.a},{type:e.Q}]},l}(),o=function(){function l(){}return l}()},mE7b:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=[""]},oLpy:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){}return l}()},qg9q:function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=u("gDXf"),t=u("e7Hd"),i=u("v2eu"),r=u("H6Nv"),a=u("Xk16"),o=u("nuaA"),c=u("gWk7"),f=u("hd0A"),s=u("PByS"),d=u("SlvP"),p=u("3/gQ"),m=u("nUUg"),T=u("kJXZ"),h=u("9ayU"),b=u("cgMo"),g=u("xTcG"),_=u("PQ8Y"),U=u("nRRs"),X=u("ePRG"),v=u("oLpy"),x=u("EEW6"),k=u("RqK6"),y=u("udnR");u.d(n,"MainContextmenuModuleNgFactory",function(){return C});var C=e.b(t.a,[],function(l){return e.c([e.d(512,e.e,e.f,[[8,[i.a]],[3,e.e],e.g]),e.d(4608,r.a,r.b,[e.h]),e.d(4608,a.a,a.b,[]),e.d(4608,o.a,o.b,[]),e.d(4608,c.a,c.b,[]),e.d(4608,f.a,f.b,[]),e.d(4608,s.c,s.c,[d.a,a.a,o.a,c.a,f.a,s.a,s.b]),e.d(512,r.d,r.d,[]),e.d(512,p.a,p.a,[]),e.d(512,m.a,m.a,[]),e.d(512,T.a,T.a,[]),e.d(512,h.a,h.a,[]),e.d(512,b.a,b.a,[]),e.d(512,g.a,g.a,[]),e.d(512,_.a,_.a,[]),e.d(512,U.w,U.w,[[2,U.m],[2,U.c]]),e.d(512,X.a,X.a,[]),e.d(512,v.a,v.a,[]),e.d(512,x.a,x.a,[]),e.d(512,k.c,k.c,[]),e.d(512,t.a,t.a,[]),e.d(1024,U.r,function(){return[[{path:"",component:y.a}]]},[]),e.d(256,s.b,void 0,[]),e.d(256,s.a,void 0,[])])})},rtr7:function(l,n,u){"use strict";function e(l){return U.S(0,[(l()(),U.U(0,null,null,0,"li",[["class","free-contextmenu-separator"]],null,null,null,null,null))],null,null)}function t(l){return U.S(0,[(l()(),U.U(0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,0,0,U._21(1,"fa fa-",n.parent.parent.parent.context.$implicit.icon,""))})}function i(l){return U.S(0,[(l()(),U.U(0,null,null,0,"span",[["class","fa fa-fw fa-caret-right"]],null,null,null,null,null))],null,null)}function r(l){return U.S(0,[(l()(),U.U(0,null,null,9,"a",[],[[8,"href",4],[1,"target",0]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.clickDisabled(u,l.parent.parent.context.$implicit)&&e}return e},null,null)),(l()(),U.T(null,["\n            "])),(l()(),U.U(0,null,null,3,"span",[],null,null,null,null,null)),(l()(),U._2(16777216,null,null,1,null,t)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["",""])),(l()(),U.T(null,["\n            "])),(l()(),U._2(16777216,null,null,1,null,i)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "]))],function(l,n){l(n,4,0,n.parent.parent.context.$implicit.icon),l(n,8,0,n.parent.parent.context.$implicit.item)},function(l,n){l(n,0,0,n.parent.parent.context.$implicit.url,n.parent.parent.context.$implicit.target),l(n,5,0,n.parent.parent.context.$implicit.label)})}function a(l){return U.S(0,[(l()(),U.U(0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,0,0,U._21(1,"fa fa-",n.parent.parent.parent.context.$implicit.icon,""))})}function o(l){return U.S(0,[(l()(),U.U(0,null,null,0,"span",[["class","fa fa-fw fa-caret-right"]],null,null,null,null,null))],null,null)}function c(l){return U.S(0,[(l()(),U.U(0,null,null,10,"a",[],[[8,"href",4],[1,"target",0],[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==U.V(l,1).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&e}if("click"===n){e=!1!==t.itemClick(u)&&e}return e},null,null)),U.X(671744,null,0,x.x,[x.c,x.a,v.e],{routerLink:[0,"routerLink"]},null),(l()(),U.T(null,["\n            "])),(l()(),U.U(0,null,null,3,"span",[],null,null,null,null,null)),(l()(),U._2(16777216,null,null,1,null,a)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["",""])),(l()(),U.T(null,["\n            "])),(l()(),U._2(16777216,null,null,1,null,o)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "]))],function(l,n){l(n,1,0,n.parent.parent.context.$implicit.routerLink),l(n,5,0,n.parent.parent.context.$implicit.icon),l(n,9,0,n.parent.parent.context.$implicit.item)},function(l,n){l(n,0,0,n.parent.parent.context.$implicit.url,n.parent.parent.context.$implicit.target,U.V(n,1).target,U.V(n,1).href),l(n,6,0,n.parent.parent.context.$implicit.label)})}function f(l){return U.S(0,[(l()(),U.U(0,null,null,0,"i",[],[[8,"className",0]],null,null,null,null))],null,function(l,n){l(n,0,0,U._21(1,"fa fa-",n.parent.parent.parent.context.$implicit.icon,""))})}function s(l){return U.S(0,[(l()(),U.U(0,null,null,0,"span",[["class","fa fa-fw fa-caret-right"]],null,null,null,null,null))],null,null)}function d(l){return U.S(0,[(l()(),U.U(0,null,null,9,"a",[],null,[[null,"click"]],function(l,n,u){var e=!0,t=l.component;if("click"===n){e=!1!==t.itemClick(u,l.parent.parent.context.$implicit)&&e}return e},null,null)),(l()(),U.T(null,["\n            "])),(l()(),U.U(0,null,null,3,"span",[],null,null,null,null,null)),(l()(),U._2(16777216,null,null,1,null,f)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["",""])),(l()(),U.T(null,["\n            "])),(l()(),U._2(16777216,null,null,1,null,s)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "]))],function(l,n){l(n,4,0,n.parent.parent.context.$implicit.icon),l(n,8,0,n.parent.parent.context.$implicit.item)},function(l,n){l(n,5,0,n.parent.parent.context.$implicit.label)})}function p(l){return U.S(0,[(l()(),U.U(0,null,null,2,"free-contextmenu-item",[],null,null,null,h,C)),U.W(512,null,k.a,k.a,[U.Q]),U.X(49152,null,0,X.c,[X.b,v.i,k.a],{item:[0,"item"]},null)],function(l,n){l(n,2,0,n.parent.parent.context.$implicit.item)},null)}function m(l){return U.S(0,[(l()(),U.U(0,[["item",1]],null,15,"li",[["class","free-contextmenu-item"]],null,[[null,"mouseenter"],[null,"mouseleave"]],function(l,n,u){var e=!0,t=l.component;if("mouseenter"===n){e=!1!==t.onMouseenter(u,l.parent.context.$implicit,U.V(l,0))&&e}if("mouseleave"===n){e=!1!==t.onMouseleave(u)&&e}return e},null,null)),U.X(278528,null,0,v.j,[U.l,U.n,U.K,U.Z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),U._0({"free-contextmenu-active":0,"free-contextmenu-disabled":1}),(l()(),U.T(null,["\n          "])),(l()(),U._2(16777216,null,null,1,null,r)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "])),(l()(),U._2(16777216,null,null,1,null,c)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "])),(l()(),U._2(16777216,null,null,1,null,d)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n          "])),(l()(),U._2(16777216,null,null,1,null,p)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n        "]))],function(l,n){var u=n.component;l(n,1,0,"free-contextmenu-item",l(n,2,0,U.V(n,0)==u.activeItem,n.parent.context.$implicit.disabled)),l(n,5,0,!n.parent.context.$implicit.routerLink&&!n.parent.context.$implicit.back),l(n,8,0,n.parent.context.$implicit.routerLink&&!n.parent.context.$implicit.back),l(n,11,0,n.parent.context.$implicit.back),l(n,14,0,n.parent.context.$implicit.item)},null)}function T(l){return U.S(0,[(l()(),U.T(null,["\n        "])),(l()(),U._2(16777216,null,null,1,null,e)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n        "])),(l()(),U._2(16777216,null,null,1,null,m)),U.X(16384,null,0,v.l,[U._3,U._4],{ngIf:[0,"ngIf"]},null),(l()(),U.T(null,["\n      "]))],function(l,n){l(n,2,0,n.context.$implicit.separator),l(n,5,0,!n.context.$implicit.separator)},null)}function h(l){return U.S(0,[(l()(),U.T(null,["\n    "])),(l()(),U.U(0,null,null,6,"ul",[["class","free-contextmenu-wrapper"]],null,null,null,null,null)),U.X(278528,null,0,v.j,[U.l,U.n,U.K,U.Z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),U._0({"free-contextmenu-child":0}),(l()(),U.T(null,["\n      "])),(l()(),U._2(16777216,null,null,1,null,T)),U.X(802816,null,0,v.k,[U._3,U._4,U.l],{ngForOf:[0,"ngForOf"]},null),(l()(),U.T(null,["\n    "])),(l()(),U.T(null,["\n  "]))],function(l,n){var u=n.component;l(n,2,0,"free-contextmenu-wrapper",l(n,3,0,!u.root)),l(n,6,0,u.item)},null)}function b(l){return U.S(0,[(l()(),U.U(0,null,null,2,"free-contextmenu-item",[],null,null,null,h,C)),U.W(512,null,k.a,k.a,[U.Q]),U.X(49152,null,0,X.c,[X.b,v.i,k.a],null,null)],null,null)}function g(l){return U.S(0,[U._5(402653184,1,{containerViewChild:0}),(l()(),U.T(null,["\n    "])),(l()(),U.U(0,[[1,0],["container",1]],null,5,"div",[["class","free-contextmenu"]],[[4,"display",null]],null,null,null,null)),(l()(),U.T(null,["\n      "])),(l()(),U.U(0,null,null,2,"free-contextmenu-item",[],null,null,null,h,C)),U.W(512,null,k.a,k.a,[U.Q]),U.X(49152,null,0,X.c,[X.b,v.i,k.a],{item:[0,"item"],root:[1,"root"]},null),(l()(),U.T(null,["\n    "])),(l()(),U.T(null,["\n  "]))],function(l,n){l(n,6,0,n.component.menu,!0)},function(l,n){l(n,2,0,n.component.visible?"block":"none")})}function _(l){return U.S(0,[(l()(),U.U(0,null,null,2,"free-contextmenu",[],null,null,null,g,O)),U.W(512,null,k.a,k.a,[U.Q]),U.X(4374528,null,0,X.b,[k.a,U.Q],null,null)],null,null)}var U=u("gDXf"),X=u("ePRG"),v=u("H6Nv"),x=u("nRRs"),k=u("KDcH");u.d(n,"b",function(){return O}),n.a=g;var y=(U.b(X.a,[],function(l){return U.c([U.d(512,U.e,U.f,[[8,[]],[3,U.e],U.g]),U.d(4608,v.a,v.b,[U.h]),U.d(512,v.d,v.d,[]),U.d(512,x.w,x.w,[[2,x.m],[2,x.c]]),U.d(512,X.a,X.a,[])])}),[]),C=U.R({encapsulation:2,styles:y,data:{}}),I=(U.Y("free-contextmenu-item",X.c,b,{item:"item",root:"root"},{},[]),[]),O=U.R({encapsulation:2,styles:I,data:{}});U.Y("free-contextmenu",X.b,_,{target:"target",menu:"menu",global:"global"},{},[])},udnR:function(l,n,u){"use strict";u.d(n,"a",function(){return e});var e=function(){function l(){this.display="block",this.menu=[],this.globalMenu=[],this.pageTitle="Components-Contextmenu"}return l.prototype.ngOnInit=function(){this.menu=[{label:"Child",icon:"user",item:[{label:"Child"}]},{separator:!0},{label:"Child",icon:"user",disabled:!0},{label:"Child",icon:"user",item:[{label:"Child"}]}],this.globalMenu=[{label:"Root",icon:"user",item:[{label:"Child",item:[{label:"Child",icon:"user",back:!0}]}]}]},l.ctorParameters=function(){return[]},l}()},v2eu:function(l,n,u){"use strict";function e(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("PROPERTY")))})}function t(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("TYPE")))})}function i(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("DESCRIPTION")))})}function r(l){return b.S(0,[(l()(),b.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),b.T(null,["String"]))],null,null)}function a(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("DEMO.CONTEXTMENU.OPTION.0")))})}function o(l){return b.S(0,[(l()(),b.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),b.T(null,["Array"]))],null,null)}function c(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("DEMO.CONTEXTMENU.OPTION.1")))})}function f(l){return b.S(0,[(l()(),b.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),b.T(null,["Boolean"]))],null,null)}function s(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("DEMO.CONTEXTMENU.OPTION.2")))})}function d(l){return b.S(0,[(l()(),b.U(0,null,null,1,"code",[],null,null,null,null,null)),(l()(),b.T(null,["Boolean"]))],null,null)}function p(l){return b.S(0,[(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L])],null,function(l,n){l(n,0,0,b._20(n,0,0,b.V(n,1).transform("DEMO.CONTEXTMENU.OPTION.3")))})}function m(l){return b.S(0,[(l()(),b.U(0,null,null,218,"div",[["class","main-container"]],null,null,null,null,null)),(l()(),b.T(null,["\n  "])),(l()(),b.U(0,null,null,211,"div",[["class","row"]],null,null,null,null,null)),(l()(),b.T(null,["\n    "])),(l()(),b.U(0,null,null,148,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),b.W(512,null,U.a,U.a,[b.Q]),b.X(4210688,null,0,X.b,[b.K,U.a],{grid:[0,"grid"]},null),(l()(),b.T(null,["\n      "])),(l()(),b.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),b.T(null,["\n        ","\n      "])),b._19(131072,g.a,[_.c,b.L]),(l()(),b.T(null,["\n      "])),(l()(),b.U(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),b.T(null,["\n      "])),(l()(),b.U(0,null,null,3,"h3",[["class","free-head-title"]],null,null,null,null,null)),(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L]),(l()(),b.U(0,null,null,0,"span",[["class","symbol component"]],null,null,null,null,null)),(l()(),b.T(null,["\n      "])),(l()(),b.U(0,null,null,132,"div",[["class","free-demo-row"]],null,null,null,null,null)),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,1,"h3",[["class","free-title"]],null,null,null,null,null)),(l()(),b.T(null,["free-contextmenu"])),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,2,"p",[],null,null,null,null,null)),(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L]),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,122,"free-table",[],null,null,null,v.a,v.b)),b.X(4308992,null,0,x.b,[b.Q],null,null),(l()(),b.T(null,["\n          "])),(l()(),b.U(0,null,null,21,"free-table-header",[],null,null,null,v.c,v.d)),b.X(49152,null,0,x.c,[],null,null),(l()(),b.T(null,["\n            "])),(l()(),b.U(0,null,null,17,"free-table-row",[],null,null,null,v.e,v.f)),b.X(49152,null,0,x.d,[],null,null),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),b.X(4308992,null,1,x.e,[x.b,b.K],null,null),b._5(335544320,1,{template:0}),(l()(),b._2(0,[[1,2]],0,0,null,e)),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),b.X(4308992,null,1,x.e,[x.b,b.K],null,null),b._5(335544320,2,{template:0}),(l()(),b._2(0,[[2,2]],0,0,null,t)),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-head",[],null,null,null,v.g,v.h)),b.X(4308992,null,1,x.e,[x.b,b.K],null,null),b._5(335544320,3,{template:0}),(l()(),b._2(0,[[3,2]],0,0,null,i)),(l()(),b.T(0,["\n            "])),(l()(),b.T(null,["\n          "])),(l()(),b.T(null,["\n\n          "])),(l()(),b.U(0,null,null,95,"free-table-body",[],null,null,null,v.i,v.j)),b.X(4308992,null,1,x.f,[x.b],null,null),b._5(603979776,4,{_rows:1}),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),b.X(49152,[[4,4]],0,x.d,[],null,null),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,5,{template:0}),(l()(),b.T(0,["target"])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,6,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[6,2]],0,0,null,r)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,7,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[7,2]],0,0,null,a)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n            "])),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),b.X(49152,[[4,4]],0,x.d,[],null,null),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,8,{template:0}),(l()(),b.T(0,["menu"])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,9,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[9,2]],0,0,null,o)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,10,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[10,2]],0,0,null,c)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n            "])),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),b.X(49152,[[4,4]],0,x.d,[],null,null),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,11,{template:0}),(l()(),b.T(0,["global"])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,12,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[12,2]],0,0,null,f)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,13,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[13,2]],0,0,null,s)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n            "])),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,21,"free-table-row",[],null,null,null,v.e,v.f)),b.X(49152,[[4,4]],0,x.d,[],null,null),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,3,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,14,{template:0}),(l()(),b.T(0,["back"])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,15,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[15,2]],0,0,null,d)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n              "])),(l()(),b.U(0,null,0,5,"free-table-cell",[],null,null,null,v.k,v.l)),b.X(4308992,null,1,x.g,[x.d,b.K],null,null),b._5(335544320,16,{template:0}),(l()(),b.T(0,["\n                "])),(l()(),b._2(0,[[16,2]],0,0,null,p)),(l()(),b.T(0,["\n              "])),(l()(),b.T(0,["\n            "])),(l()(),b.T(0,["\n          "])),(l()(),b.T(null,["\n        "])),(l()(),b.T(null,["\n      "])),(l()(),b.T(null,["\n    "])),(l()(),b.T(null,["\n\n    "])),(l()(),b.U(0,null,null,58,"div",[["class","free-demo-board"],["fGrid","6"]],null,null,null,null,null)),b.W(512,null,U.a,U.a,[b.Q]),b.X(4210688,null,0,X.b,[b.K,U.a],{grid:[0,"grid"]},null),(l()(),b.T(null,["\n      "])),(l()(),b.U(0,null,null,17,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),b.T(null,["Import"])),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,11,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,k.a,k.b)),b.X(1097728,null,1,y.b,[b.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),b._5(603979776,17,{tabGroup:1}),(l()(),b.T(0,["\n          "])),(l()(),b.U(0,null,0,6,"free-tab",[["header","CODE"]],null,null,null,k.c,k.d)),b.X(114688,[[17,4]],0,y.c,[],{header:[0,"header"]},null),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,2,"free-code",[["lang","typescript"]],null,null,null,C.a,C.b)),b.X(4243456,null,0,I.b,[b.Q],{lang:[0,"lang"]},null),(l()(),b.T(0,["\n              import {ContextmenuModule} from 'freeng/freeng';\n            "])),(l()(),b.T(0,["\n          "])),(l()(),b.T(0,["\n        "])),(l()(),b.T(null,["\n      "])),(l()(),b.T(null,["\n\n      "])),(l()(),b.U(0,null,null,34,"div",[["class","free-card-board"]],null,null,null,null,null)),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,1,"h3",[["class","free-toolbar"]],null,null,null,null,null)),(l()(),b.T(null,["Default"])),(l()(),b.T(null,["\n        "])),(l()(),b.U(0,null,null,28,"free-tab-group",[["direction","right"],["theme","line"]],null,null,null,k.a,k.b)),b.X(1097728,null,1,y.b,[b.Q],{theme:[0,"theme"],direction:[1,"direction"]},null),b._5(603979776,18,{tabGroup:1}),(l()(),b.T(0,["\n          "])),(l()(),b.U(0,null,0,8,"free-tab",[["header","PREVIEW"]],null,null,null,k.c,k.d)),b.X(114688,[[18,4]],0,y.c,[],{header:[0,"header"]},null),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,[["cm",1]],0,4,"button",[["fButton",""]],null,null,null,null,null)),b.W(512,null,U.a,U.a,[b.Q]),b.X(4210688,null,0,O.b,[b.K,U.a],null,null),(l()(),b.T(null,["",""])),b._19(131072,g.a,[_.c,b.L]),(l()(),b.T(0,["\n          "])),(l()(),b.T(0,["\n          "])),(l()(),b.U(0,null,0,13,"free-tab",[["header","CODE"]],null,null,null,k.c,k.d)),b.X(114688,[[18,4]],0,y.c,[],{header:[0,"header"]},null),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,2,"free-code",[["lang","html"]],null,null,null,C.a,C.b)),b.X(4243456,null,0,I.b,[b.Q],{lang:[0,"lang"]},null),(l()(),b.T(0,['\n              <free-contextmenu [target]="cm" [menu]="menu"></free-contextmenu>\n            '])),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,1,"h4",[],null,null,null,null,null)),(l()(),b.T(null,["Javascript"])),(l()(),b.T(0,["\n            "])),(l()(),b.U(0,null,0,2,"free-code",[["lang","javascript"]],null,null,null,C.a,C.b)),b.X(4243456,null,0,I.b,[b.Q],{lang:[0,"lang"]},null),(l()(),b.T(0,["\n              this.menu = [\n                {label: 'Child', icon: 'user', item: [{label: 'Child'}]},\n                {separator: true},\n                {label: 'Child', icon: 'user', disabled: true},\n                {label: 'Child', icon: 'user', item: [{label: 'Child'}]}\n              ];\n            "])),(l()(),b.T(0,["\n          "])),(l()(),b.T(0,["\n        "])),(l()(),b.T(null,["\n      "])),(l()(),b.T(null,["\n    "])),(l()(),b.T(null,["\n\n  "])),(l()(),b.T(null,["\n  "])),(l()(),b.U(0,null,null,2,"blockquote",[],null,null,null,null,null)),(l()(),b.T(null,["FreeNG - ",""])),b._19(131072,g.a,[_.c,b.L]),(l()(),b.T(null,["\n"])),(l()(),b.T(null,["\n\n"])),(l()(),b.U(0,null,null,2,"free-contextmenu",[],null,null,null,E.a,E.b)),b.W(512,null,U.a,U.a,[b.Q]),b.X(4374528,null,0,S.b,[U.a,b.Q],{target:[0,"target"],menu:[1,"menu"]},null),(l()(),b.T(null,["\n\n"])),(l()(),b.U(0,null,null,2,"free-contextmenu",[],null,null,null,E.a,E.b)),b.W(512,null,U.a,U.a,[b.Q]),b.X(4374528,null,0,S.b,[U.a,b.Q],{menu:[0,"menu"],global:[1,"global"]},null),(l()(),b.T(null,["\n"]))],function(l,n){var u=n.component;l(n,6,0,"6"),l(n,29,0),l(n,38,0),l(n,43,0),l(n,48,0),l(n,55,0),l(n,62,0),l(n,67,0),l(n,74,0),l(n,85,0),l(n,90,0),l(n,97,0),l(n,108,0),l(n,113,0),l(n,120,0),l(n,131,0),l(n,136,0),l(n,143,0);l(n,156,0,"6");l(n,164,0,"line","right");l(n,168,0,"CODE");l(n,171,0,"typescript");l(n,183,0,"line","right");l(n,187,0,"PREVIEW");l(n,197,0,"CODE");l(n,200,0,"html");l(n,207,0,"javascript"),l(n,222,0,b.V(n,189),u.menu);l(n,226,0,u.globalMenu,!0)},function(l,n){l(n,9,0,b._20(n,9,0,b.V(n,10).transform("DEMO.CONTEXTMENU.DESCRIPTION"))),l(n,15,0,b._20(n,15,0,b.V(n,16).transform("API-OPTION"))),l(n,25,0,b._20(n,25,0,b.V(n,26).transform("COMPONENT.CONTEXTMENU"))),l(n,192,0,b._20(n,192,0,b.V(n,193).transform("COMPONENT.CONTEXTMENU"))),l(n,216,0,b._20(n,216,0,b.V(n,217).transform("MOTTO")))})}function T(l){return b.S(0,[(l()(),b.U(0,null,null,1,"free-main-contextmenu",[],[[40,"@fadeInUpState",0],[4,"display",null]],null,null,m,M)),b.X(114688,null,0,w.a,[],null,null)],function(l,n){l(n,1,0)},function(l,n){l(n,0,0,b.V(n,1).fadeInUpState,b.V(n,1).display)})}var h=u("mE7b"),b=u("gDXf"),g=u("XB9y"),_=u("PByS"),U=u("KDcH"),X=u("xTcG"),v=u("3N/a"),x=u("cgMo"),k=u("uh4r"),y=u("3/gQ"),C=u("VpmR"),I=u("nUUg"),O=u("PQ8Y"),E=u("rtr7"),S=u("ePRG"),w=u("udnR");u.d(n,"a",function(){return $});var N=[h.a],M=b.R({encapsulation:0,styles:N,data:{animation:[{type:7,name:"fadeInUpState",definitions:[{type:0,name:"in",styles:{type:6,styles:{opacity:1,transform:"translate3d(0, 0, 0)"},offset:null},options:void 0},{type:1,expr:"void => *",animation:[{type:6,styles:{opacity:0,transform:"translate3d(0, 100%, 0)"},offset:null},{type:4,styles:null,timings:".4s cubic-bezier(.25,.8,.25,1)"}],options:null}],options:{}}]}}),$=b.Y("free-main-contextmenu",w.a,T,{},{},[])}});