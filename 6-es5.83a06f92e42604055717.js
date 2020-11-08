!function(){function t(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{qEqj:function(n,a,i){"use strict";i.r(a),i.d(a,"AwardsModule",(function(){return L}));var r=i("ofXK"),c=i("tyNb"),o=i("mrSG"),s=i("fXoL"),b=i("H+bZ"),d=i("f0Cb"),p=i("Wp6s"),u=i("XiUz");function l(t,e){if(1&t&&(s.Mb(0,"mat-card",1),s.Mb(1,"mat-card-header"),s.Kb(2,"img",2),s.Mb(3,"mat-card-title"),s.nc(4),s.Lb(),s.Mb(5,"mat-card-subtitle"),s.nc(6),s.Xb(7,"date"),s.Lb(),s.Lb(),s.Mb(8,"mat-card-content"),s.nc(9),s.Lb(),s.Lb()),2&t){var n=e.$implicit;s.zb(2),s.bc("src",n.editorial_logo,s.gc),s.zb(2),s.oc(n.title),s.zb(2),s.pc("",s.Yb(7,4,n.publication_date,"yyyy")," "),s.zb(3),s.pc(" ",n.description," ")}}var f,m=((f=function t(){e(this,t)}).\u0275fac=function(t){return new(t||f)},f.\u0275cmp=s.Db({type:f,selectors:[["app-publications-card"]],inputs:{publications:"publications"},decls:1,vars:1,consts:[["class","border-card","fxFlex","100",4,"ngFor","ngForOf"],["fxFlex","100",1,"border-card"],["mat-card-avatar","",1,"image",3,"src"]],template:function(t,e){1&t&&s.mc(0,l,10,7,"mat-card",0),2&t&&s.bc("ngForOf",e.publications)},directives:[r.j,p.a,u.a,p.e,p.c,p.i,p.h,p.d],pipes:[r.d],styles:["[_nghost-%COMP%]{flex-direction:row;flex-wrap:wrap;box-sizing:border-box;place-content:space-between;display:flex}.border-card[_ngcontent-%COMP%]{margin:5px}.image[_ngcontent-%COMP%]{height:auto;max-height:50px;width:100%;max-width:80px;border-radius:0;-o-object-fit:unset;object-fit:unset}"]}),f);function h(t,e){if(1&t&&(s.Mb(0,"mat-card",1),s.Mb(1,"mat-card-header"),s.Kb(2,"img",2),s.Mb(3,"mat-card-title"),s.nc(4),s.Lb(),s.Mb(5,"mat-card-subtitle"),s.nc(6),s.Xb(7,"date"),s.Lb(),s.Lb(),s.Mb(8,"mat-card-content"),s.nc(9),s.Lb(),s.Lb()),2&t){var n=e.$implicit;s.zb(2),s.bc("src",n.issuer_logo,s.gc),s.zb(2),s.oc(n.title),s.zb(2),s.pc("",s.Yb(7,4,n.expedition,"yyyy")," "),s.zb(3),s.pc(" ",n.description," ")}}var g,w,x,y,v=((g=function t(){e(this,t)}).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=s.Db({type:g,selectors:[["app-awards-card"]],inputs:{awards:"awards"},decls:1,vars:1,consts:[["class","border-card","fxFlex","100",4,"ngFor","ngForOf"],["fxFlex","100",1,"border-card"],["mat-card-avatar","",1,"image",3,"src"]],template:function(t,e){1&t&&s.mc(0,h,10,7,"mat-card",0),2&t&&s.bc("ngForOf",e.awards)},directives:[r.j,p.a,u.a,p.e,p.c,p.i,p.h,p.d],pipes:[r.d],styles:["[_nghost-%COMP%]{flex-direction:row;flex-wrap:wrap;box-sizing:border-box;place-content:space-between;display:flex}.border-card[_ngcontent-%COMP%]{margin:5px}.image[_ngcontent-%COMP%]{height:auto;max-height:40px;width:100%;max-width:80px;border-radius:0;-o-object-fit:unset;object-fit:unset}"]}),g),M=[{path:"",component:(w=function(){function n(t){e(this,n),this.apiService=t,this.awards=[],this.publications=[]}var a,i,r;return a=n,(i=[{key:"ngOnInit",value:function(){return Object(o.a)(this,void 0,void 0,regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.apiService.getAwards();case 2:return this.awards=t.sent,t.next=5,this.apiService.getPublications();case 5:this.publications=t.sent;case 6:case"end":return t.stop()}}),t,this)})))}}])&&t(a.prototype,i),r&&t(a,r),n}(),w.\u0275fac=function(t){return new(t||w)(s.Jb(b.a))},w.\u0275cmp=s.Db({type:w,selectors:[["app-awards"]],decls:8,vars:2,consts:[[3,"publications"],[3,"awards"]],template:function(t,e){1&t&&(s.Mb(0,"h1"),s.nc(1,"Publicaciones"),s.Lb(),s.Kb(2,"mat-divider"),s.Kb(3,"app-publications-card",0),s.Mb(4,"h1"),s.nc(5,"Premios"),s.Lb(),s.Kb(6,"mat-divider"),s.Kb(7,"app-awards-card",1)),2&t&&(s.zb(3),s.bc("publications",e.publications),s.zb(4),s.bc("awards",e.awards))},directives:[d.a,m,v],styles:["[_nghost-%COMP%]{flex-direction:column;box-sizing:border-box;display:flex;height:100%;padding-top:10px}h1[_ngcontent-%COMP%]{font-size:28px;font-weight:600;margin-top:15px}"]}),w)}],z=((x=function t(){e(this,t)}).\u0275mod=s.Hb({type:x}),x.\u0275inj=s.Gb({factory:function(t){return new(t||x)},imports:[[c.e.forChild(M)],c.e]}),x),O=i("PCNd"),L=((y=function t(){e(this,t)}).\u0275mod=s.Hb({type:y}),y.\u0275inj=s.Gb({factory:function(t){return new(t||y)},imports:[[r.b,z,O.a]]}),y)}}])}();