(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{Afwt:function(t,e,i){"use strict";i.r(e),i.d(e,"AboutModule",(function(){return d}));var n=i("tyNb"),o=i("mrSG"),r=i("fXoL"),c=i("jhN1"),a=i("qc5V"),s=i("Wp6s");const l=[{path:"",component:(()=>{class t{constructor(t,e,i,n){this.domSanitizer=t,this.apiService=e,this.titleService=i,this.metaTagService=n,this.me={}}ngOnInit(){return Object(o.a)(this,void 0,void 0,(function*(){this.titleService.setTitle("Silveo Portfolio"),this.metaTagService.updateTag({name:"description",content:"Soy Arturo Silvelo desarrollador JS Fullstack"}),this.me=yield this.apiService.getAbout(),this.aboutMe=this.domSanitizer.bypassSecurityTrustHtml(this.me.about_me)}))}}return t.\u0275fac=function(e){return new(e||t)(r.Jb(c.b),r.Jb(a.a),r.Jb(c.d),r.Jb(c.c))},t.\u0275cmp=r.Db({type:t,selectors:[["app-about"]],decls:4,vars:1,consts:[[1,"mat-elevation-z0"],[3,"innerHTML"]],template:function(t,e){1&t&&(r.Mb(0,"mat-card",0),r.Mb(1,"mat-card-title"),r.oc(2,"Sobre m\xed"),r.Lb(),r.Kb(3,"mat-card-content",1),r.Lb()),2&t&&(r.zb(3),r.Zb("innerHTML",e.me.about_me,r.gc))},directives:[s.a,s.h,s.d],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;height:100%;justify-content:center;align-items:center;align-content:center}.mat-card-title[_ngcontent-%COMP%]{font-size:28px;font-weight:700}"]}),t})()}];let u=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[n.d.forChild(l)],n.d]}),t})();var b=i("PCNd");let d=(()=>{class t{}return t.\u0275mod=r.Hb({type:t}),t.\u0275inj=r.Gb({factory:function(e){return new(e||t)},imports:[[b.a,u]]}),t})()}}]);