google.maps.__gjsload__('overlay', function(_){var Xt=function(a){this.g=a},yla=function(){},Yt=function(a){a.tp=a.tp||new yla;return a.tp},zla=function(a){this.Ha=new _.Vh(function(){var b=a.tp;if(a.getPanes()){if(a.getProjection()){if(!b.so&&a.onAdd)a.onAdd();b.so=!0;a.draw()}}else{if(b.so)if(a.onRemove)a.onRemove();else a.remove();b.so=!1}},0)},Ala=function(a,b){function c(){return _.Wh(e.Ha)}var d=Yt(a),e=d.Ym;e||(e=d.Ym=new zla(a));_.qb(d.Xa||[],_.K.removeListener);var f=d.Wa=d.Wa||new _.Nr,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);
f.bindTo("center",g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.ht=d.ht||new Xt(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Xa=[_.K.addListener(a,"panes_changed",c),_.K.addListener(g,"zoom_changed",c),_.K.addListener(g,"offset_changed",c),_.K.addListener(b,"projection_changed",c),_.K.addListener(g,"projectioncenterq_changed",c)];c();b instanceof
_.lf&&(_.O(b,"Ox"),_.N(b,148440))},Ela=function(a){if(a){var b=a.getMap();if(Bla(a)!==b&&b&&b instanceof _.lf){var c=b.__gm;c.overlayLayer?a.__gmop=new Cla(b,a,c.overlayLayer):c.g.then(function(d){d=d.Ka;var e=new Zt(b,d);d.fb(e);c.overlayLayer=e;Dla(a);Ela(a)})}}},Dla=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,b.g.unbindAll(),b.g.set("panes",null),b.g.set("projection",null),b.i.og(b),b.h&&(b.h=!1,b.g.onRemove?b.g.onRemove():b.g.remove()))}},Bla=function(a){return(a=a.__gmop)?a.map:null},
Cla=function(a,b,c){this.map=a;this.g=b;this.i=c;this.h=!1;_.O(this.map,"Ox");_.N(this.map,148440);c.uf(this)},Fla=function(a,b){a.g.get("projection")!=b&&(a.g.bindTo("panes",a.map.__gm),a.g.set("projection",b))},Zt=function(a,b){this.j=a;this.i=b;this.g=null;this.h=[]};_.D(Xt,_.L);
Xt.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.ke(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.g:null))};var $t={};_.D(zla,_.L);$t.uf=function(a){if(a){var b=a.getMap();(Yt(a).Ms||null)!==b&&(b&&Ala(a,b),Yt(a).Ms=b)}};$t.og=function(a){var b=Yt(a),c=b.Wa;c&&c.unbindAll();(c=b.ht)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Xa&&_.qb(b.Xa,_.K.removeListener);b.Xa=null;b.Ym&&(b.Ym.Ha.Od(),b.Ym=null);delete Yt(a).Ms};var au={};Cla.prototype.draw=function(){this.h||(this.h=!0,this.g.onAdd&&this.g.onAdd());this.g.draw&&this.g.draw()};Zt.prototype.dispose=function(){};Zt.prototype.Oc=function(a,b,c,d,e,f,g,h){var k=this.g=this.g||new _.pp(this.j,this.i,function(){});k.Oc(a,b,c,d,e,f,g,h);a=_.A(this.h);for(b=a.next();!b.done;b=a.next())b=b.value,Fla(b,k),b.draw()};Zt.prototype.uf=function(a){this.h.push(a);this.g&&Fla(a,this.g);this.i.refresh()};Zt.prototype.og=function(a){_.xb(this.h,a)};au.uf=Ela;au.og=Dla;_.Xe("overlay",{Iq:function(a){if(a){(0,$t.og)(a);(0,au.og)(a);var b=a.getMap();b&&(b instanceof _.lf?(0,au.uf)(a):(0,$t.uf)(a))}},preventMapHitsFrom:function(a){_.Up(a,{onClick:function(b){return _.zp(b.event)},Ad:function(b){return _.wp(b)},ri:function(b){return _.xp(b)},he:function(b){return _.xp(b)},Gd:function(b){return _.yp(b)}}).nj(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.bf);a.addEventListener("contextmenu",_.bf);a.addEventListener("dblclick",_.bf);a.addEventListener("mousedown",
_.bf);a.addEventListener("mousemove",_.bf);a.addEventListener("MSPointerDown",_.bf);a.addEventListener("pointerdown",_.bf);a.addEventListener("touchstart",_.bf);a.addEventListener("wheel",_.bf)}});});
