webpackJsonp([17],{"4wlH":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},H46Z:function(n,l,e){"use strict";function t(n){return a.S(0,[(n()(),a.T(null,["\n    "])),(n()(),a.U(0,null,null,31,"free-fullpage",[],null,[["window","resize"],["document","wheel"]],function(n,l,e){var t=!0;if("window:resize"===l){t=!1!==a.V(n,3).onResize()&&t}if("document:wheel"===l){t=!1!==a.V(n,3).onWheel(e)&&t}return t},r.a,r.b)),a.W(512,null,s.a,s.a,[a.Q]),a.X(4374528,null,0,o.b,[s.a],{pagination:[0,"pagination"],paginationClickable:[1,"paginationClickable"]},null),(n()(),a.T(0,["\n      "])),(n()(),a.U(0,null,0,5,"free-fullpage-slide",[],null,null,null,r.c,r.d)),a.X(49152,null,0,o.c,[o.b],null,null),(n()(),a.T(0,["\n        "])),(n()(),a.U(0,null,0,1,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),a.U(0,null,null,0,"img",[["alt",""],["src","freeng/assets/images/f1.jpg"]],null,null,null,null,null)),(n()(),a.T(0,["\n      "])),(n()(),a.T(0,["\n      "])),(n()(),a.U(0,null,0,5,"free-fullpage-slide",[],null,null,null,r.c,r.d)),a.X(49152,null,0,o.c,[o.b],null,null),(n()(),a.T(0,["\n        "])),(n()(),a.U(0,null,0,1,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),a.U(0,null,null,0,"img",[["alt",""],["src","freeng/assets/images/f2.jpg"]],null,null,null,null,null)),(n()(),a.T(0,["\n      "])),(n()(),a.T(0,["\n      "])),(n()(),a.U(0,null,0,5,"free-fullpage-slide",[],null,null,null,r.c,r.d)),a.X(49152,null,0,o.c,[o.b],null,null),(n()(),a.T(0,["\n        "])),(n()(),a.U(0,null,0,1,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),a.U(0,null,null,0,"img",[["alt",""],["src","freeng/assets/images/f3.jpg"]],null,null,null,null,null)),(n()(),a.T(0,["\n      "])),(n()(),a.T(0,["\n      "])),(n()(),a.U(0,null,0,5,"free-fullpage-slide",[],null,null,null,r.c,r.d)),a.X(49152,null,0,o.c,[o.b],null,null),(n()(),a.T(0,["\n        "])),(n()(),a.U(0,null,0,1,"div",[["class","fullpage"]],null,null,null,null,null)),(n()(),a.U(0,null,null,0,"img",[["alt",""],["src","freeng/assets/images/f4.jpg"]],null,null,null,null,null)),(n()(),a.T(0,["\n      "])),(n()(),a.T(0,["\n    "])),(n()(),a.T(null,["\n  "]))],function(n,l){n(l,3,0,!0,!0)},null)}function i(n){return a.S(0,[(n()(),a.U(0,null,null,1,"free-review-fullpage",[],null,null,null,t,f)),a.X(49152,null,0,c.a,[],null,null)],null,null)}var u=e("zao0"),a=e("43CL"),r=e("soRY"),s=e("KDcH"),o=e("axQs"),c=e("rsUX");e.d(l,"a",function(){return p});var d=[u.a],f=a.R({encapsulation:0,styles:d,data:{}}),p=a.Y("free-review-fullpage",c.a,i,{},{},[])},ILni:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},NY7b:function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("43CL"),i=e("ILni"),u=e("H46Z"),a=e("f8OW"),r=e("axQs"),s=e("8etH"),o=e("4wlH"),c=e("rsUX");e.d(l,"ReviewFullpageModuleNgFactory",function(){return d});var d=t.b(i.a,[],function(n){return t.c([t.d(512,t.e,t.f,[[8,[u.a]],[3,t.e],t.g]),t.d(4608,a.a,a.b,[t.h]),t.d(512,a.d,a.d,[]),t.d(512,r.a,r.a,[]),t.d(512,s.w,s.w,[[2,s.m],[2,s.c]]),t.d(512,o.a,o.a,[]),t.d(512,i.a,i.a,[]),t.d(1024,s.r,function(){return[[{path:"",component:c.a}]]},[])])})},axQs:function(n,l,e){"use strict";var t=e("43CL"),i=e("KDcH");e.d(l,"c",function(){return u}),e.d(l,"d",function(){return a}),e.d(l,"b",function(){return r}),e.d(l,"a",function(){return s});var u=function(){function n(n){this.group=n,this.group.addSlide(this)}return n.ctorParameters=function(){return[{type:r,decorators:[{type:t.N,args:[e.i(t.O)(function(){return r})]}]}]},n}(),a=function(){function n(){}return n}(),r=function(){function n(n){this.domRenderer=n,this.slideStart=new t.P,this.slideEnd=new t.P,this.activeIndex=0,this.win={width:window.innerWidth,height:window.innerHeight},this.slides=[]}return n.prototype.onResize=function(){this.win={width:window.innerWidth,height:window.innerHeight}},n.prototype.onWheel=function(n){n=n||window.event,this.isScroll||(n.wheelDelta?n.wheelDelta>0?this.scrollPrev():n.wheelDelta<0&&this.scrollNext():n.detail&&(n.detail<0?this.scrollPrev():n.detail>0&&this.scrollNext()))},n.prototype.addSlide=function(n){this.slides.push(n)},n.prototype.ngAfterViewInit=function(){var n=this;this.container=this.containerViewChild.nativeElement,this.wrapper=this.wrapperViewChild.nativeElement,this.pagination&&(this.paginationElem=this.paginationViewChild.nativeElement),this.refreshView(),this.transitionstartListener=this.domRenderer.listen(this.wrapper,"transitionstart",function(){n.container&&(n.isScroll=!0,n.slideStart.emit({activeIndex:n.activeIndex}))}),this.transitionendListerner=this.domRenderer.listen(this.wrapper,"transitionend",function(){n.container&&(n.isScroll=!1,n.slideEnd.emit({activeIndex:n.activeIndex}))})},n.prototype.onPaginationClick=function(n){this.paginationClickable&&this.scrollTo(n)},n.prototype.refreshView=function(){var n=this.win.height;this.totalSlides=this.slides.length,this.wrapper.style.height=n*this.totalSlides+"px";for(var l=0,e=this.slides;l<e.length;l++){e[l].height=n}},n.prototype.scrollPrev=function(){this.activeIndex>0&&(this.activeIndex--,this.scrollTo(this.activeIndex))},n.prototype.scrollNext=function(){this.activeIndex<this.totalSlides-1&&(this.activeIndex++,this.scrollTo(this.activeIndex))},n.prototype.scrollTo=function(n){n<this.totalSlides&&(this.isScroll=!0,this.wrapper.style.transform="translate3d(0,-"+this.win.height*n+"px,0)",this.activeIndex=n)},n.prototype.ngOnDestroy=function(){this.transitionstartListener&&this.transitionstartListener(),this.transitionendListerner&&this.transitionendListerner(),this.container=null},n.ctorParameters=function(){return[{type:i.a}]},n}(),s=function(){function n(){}return n}()},rsUX:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){this.pageTitle="Components-Fullpage"}return n}()},soRY:function(n,l,e){"use strict";function t(n){return d.S(0,[(n()(),d.T(null,["\n    "])),(n()(),d.U(0,null,null,5,"div",[["class","free-fullpage-slide"]],[[4,"height","px"]],null,null,null,null)),d.X(278528,null,0,p.j,[d.l,d.n,d.K,d.Z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),d._0({"free-fullpage-slide-active":0}),(n()(),d.T(null,["\n      "])),d._1(null,0),(n()(),d.T(null,["\n    "])),(n()(),d.T(null,["\n  "]))],function(n,l){n(l,2,0,"free-fullpage-slide",n(l,3,0,l.component.active))},function(n,l){n(l,1,0,l.component.height)})}function i(n){return d.S(0,[(n()(),d.U(0,null,null,1,"free-fullpage-slide",[],null,null,null,t,v)),d.X(49152,null,0,f.c,[f.b],null,null)],null,null)}function u(n){return d.S(0,[(n()(),d.T(null,["\n    "])),(n()(),d.U(0,null,null,2,"div",[["class","free-pagination-bullet"]],null,null,null,null,null)),d.X(278528,null,0,p.j,[d.l,d.n,d.K,d.Z],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),d._0({"free-pagination-bullet-active":0}),(n()(),d.T(null,["\n  "]))],function(n,l){n(l,2,0,"free-pagination-bullet",n(l,3,0,l.component.active))},null)}function a(n){return d.S(0,[(n()(),d.U(0,null,null,1,"free-pagination-bullet",[],null,null,null,u,T)),d.X(49152,null,0,f.d,[],null,null)],null,null)}function r(n){return d.S(0,[(n()(),d.U(0,null,null,2,"free-pagination-bullet",[],null,[[null,"click"]],function(n,l,e){var t=!0,i=n.component;if("click"===l){t=!1!==i.onPaginationClick(n.context.index)&&t}return t},u,T)),d.X(49152,null,0,f.d,[],{index:[0,"index"],active:[1,"active"]},null),(n()(),d.T(null,["\n        "]))],function(n,l){var e=l.component;n(l,1,0,l.context.index,e.activeIndex===l.context.index)},null)}function s(n){return d.S(0,[(n()(),d.U(0,[[3,0],["pagination",1]],null,4,"div",[["class","free-fullpage-pagination"]],null,null,null,null,null)),(n()(),d.T(null,["\n        "])),(n()(),d._2(16777216,null,null,1,null,r)),d.X(802816,null,0,p.k,[d._3,d._4,d.l],{ngForOf:[0,"ngForOf"]},null),(n()(),d.T(null,["\n      "]))],function(n,l){n(l,3,0,l.component.slides)},null)}function o(n){return d.S(0,[d._5(402653184,1,{containerViewChild:0}),d._5(402653184,2,{wrapperViewChild:0}),d._5(671088640,3,{paginationViewChild:0}),(n()(),d.T(null,["\n    "])),(n()(),d.U(0,[[1,0],["container",1]],null,9,"div",[["class","free-fullpage-container"]],null,null,null,null,null)),(n()(),d.T(null,["\n      "])),(n()(),d.U(0,[[2,0],["wrapper",1]],null,3,"div",[["class","free-fullpage-wrapper"]],null,null,null,null,null)),(n()(),d.T(null,["\n        "])),d._1(null,0),(n()(),d.T(null,["\n      "])),(n()(),d.T(null,["\n      "])),(n()(),d._2(16777216,null,null,1,null,s)),d.X(16384,null,0,p.l,[d._3,d._4],{ngIf:[0,"ngIf"]},null),(n()(),d.T(null,["\n    "])),(n()(),d.T(null,["\n  "]))],function(n,l){n(l,12,0,l.component.pagination)},null)}function c(n){return d.S(0,[(n()(),d.U(0,null,null,2,"free-fullpage",[],null,[["window","resize"],["document","wheel"]],function(n,l,e){var t=!0;if("window:resize"===l){t=!1!==d.V(n,2).onResize()&&t}if("document:wheel"===l){t=!1!==d.V(n,2).onWheel(e)&&t}return t},o,x)),d.W(512,null,h.a,h.a,[d.Q]),d.X(4374528,null,0,f.b,[h.a],null,null)],null,null)}var d=e("43CL"),f=e("axQs"),p=e("f8OW"),h=e("KDcH");e.d(l,"d",function(){return v}),l.c=t,e.d(l,"b",function(){return x}),l.a=o;var g=(d.b(f.a,[],function(n){return d.c([d.d(512,d.e,d.f,[[8,[]],[3,d.e],d.g]),d.d(4608,p.a,p.b,[d.h]),d.d(512,p.d,p.d,[]),d.d(512,f.a,f.a,[])])}),[]),v=d.R({encapsulation:2,styles:g,data:{}}),w=(d.Y("free-fullpage-slide",f.c,i,{index:"index"},{},["*"]),[]),T=d.R({encapsulation:2,styles:w,data:{}}),m=(d.Y("free-pagination-bullet",f.d,a,{index:"index",active:"active"},{},[]),[]),x=d.R({encapsulation:2,styles:m,data:{}});d.Y("free-fullpage",f.b,c,{pagination:"pagination",paginationClickable:"paginationClickable"},{slideStart:"slideStart",slideEnd:"slideEnd"},["*"])},zao0:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=["[_nghost-%COMP%]     .fullpage, [_nghost-%COMP%]     .fullpage img{display:block;width:100%;height:100%}"]}});