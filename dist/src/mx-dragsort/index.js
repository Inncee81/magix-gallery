define("mx-dragsort/index",["magix","../mx-dragdrop/index","../mx-util/runner","$"],(_,e,t)=>{var i=_("magix"),o=_("../mx-dragdrop/index"),r=_("../mx-util/runner"),a=_("$");i.applyStyle("_zs_galleryG",'._zs_gallerydZ{left:-1000px;top:0;background:var(--color-brand)}._zs_gallerydZ,._zs_gallerye_{position:absolute;z-index:10000}._zs_gallerye_{width:20px;height:20px;border-radius:var(--border-radius)}._zs_gallerye_:after{position:absolute;left:0;right:0;top:0;bottom:0;font-size:var(--font-size);line-height:20px;text-align:center;color:var(--color-brand)}._zs_galleryea{background:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_galleryea:after{content:"✓"}');var n=i.guid("dbar_"),b=i.guid("pt_"),l=a(window),d=a(document),h={__aX:function(){a("#"+n).length||a('<div class="_zs_gallerydZ" id="'+n+'"/>').appendTo("body")},__aY:function(_){_.child&&(a(_.child).css({opacity:.4}),this.__aX())},__ba:function(_){_&&_.child&&a(_.child).css({opacity:1}),this.__aZ(),this.__b_()},__aZ:function(){a("#"+n).css({left:-1e5})},__bb:function(_,e){var t=a("#"+n),i=!1;2&_.anchor&&(2&e?(t.css({height:2,width:_.bound.width,top:_.bound.y-1,left:_.bound.x}),i=!0):8&e&&(t.css({height:2,width:_.bound.width,top:_.bound.y+_.bound.height-1,left:_.bound.x}),i=!0)),!i&&1&_.anchor&&(1&e?t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x-1}):4&e&&t.css({height:_.bound.height,width:2,top:_.bound.y,left:_.bound.x+_.bound.width-1}))},__bd:function(_){var e=this;_.atPlace&&_.child!=_.hover?(3==_.anchor?_.__bc&&e.__bb(_,_.side):_.__bd&&e.__bb(_,_.position),e.__be(!0)):(e.__aZ(),e.__be())},__bf:function(_){var e=a("#"+b);e.length||(e=a('<div class="_zs_gallerye_" id="'+b+'"/>')).appendTo("body");var t=Math.max(0,Math.min(_.pageX+10,d.width()-e.width())),i=Math.max(0,Math.min(_.pageY+18,d.height()-e.height()));e.css({left:t,top:i,display:"block"})},__be:function(_){var e=a("#"+b);_?e.addClass("_zs_galleryea"):e.removeClass("_zs_galleryea")},__b_:function(){a("#"+b).hide()}};t.exports=i.View.extend({mixins:[o],init:function(_){var e=this,t=a("#"+e.id);t.on("mousedown",_.selector,function(_){_.preventDefault(),e.__aY(_)}),e.on("destroy",function(){t.off("mousedown")}),e.__a=t;var o=[t.get(0)];_.drops&&(o=o.concat(_.drops.split(","))),e.__bg=o;var r=_.horizonal+""=="true",n=_.vertical+""=="true";r||n||(n=!0);var b=0;r&&(b|=1),n&&(b|=2),e.__bh=b;var l=!0;i.has(_,"sort")&&(l=_.sort+""=="true"),e.__bi=l},__bj:function(_){for(var e=0,t=this.__bg;e<t.length;e++){var o=t[e];if(i.inside(_,o))return i.node(o)}return null},__bl:function(_,e){var t=null;if(e||(e=this.__bj(_)),!this.__bi&&this.__bk)return{child:this.__bk,zone:e};for(;e!=_;){if(_.parentNode==e){t=_;break}_=_.parentNode}return!e||e.firstChild||t||(t=e),t&&"false"===t.getAttribute("ds-draggable")&&(t=null),{child:t,zone:e}},__bn:function(_,e){var t=0,i=0,o=-1,r=-1,a=-1,n=-1,b=!1;if(e.pageX>=_.x&&e.pageX<=_.x+_.width&&e.pageY>=_.y&&e.pageY<=_.y+_.height&&(t|=e.pageX<=_.x+_.width/2?1:4,o=e.pageX-_.x,a=_.x+_.width-e.pageX,t|=e.pageY<=_.y+_.height/2?2:8,r=e.pageY-_.y,n=_.y+_.height-e.pageY,b=!0),b){var l=Math.min(o,r,a,n);l>-1&&(l==o?i=1:l==r?i=2:l==a?i=4:l==n&&(i=8))}var d=this.__bm;return d&&d.zone===d.hover&&(t=2,i=1),{position:t,atPlace:b,side:i}},__aY:function(_){if(1===_.which){var e=this,t=e.__bl(_.target);t.child&&(e.__bk=t.child,e.__bo=t.zone,e.__a.trigger({type:"dragbegin",dragNode:t.child,dragZone:t.zone}),h.__aY(t),e.dragdrop(t.zone,function(_){e.__bp(_)},function(_){e.__ba(_)}))}},__bs:function(_,e,t){var i=this,o=i.__bn(_,e),r=o.side!=i.__bq,a=o.position!=i.__br;(r||a)&&(i.__bq=o.side,i.__br=o.position,t.__bc=r,t.__bd=a,t.side=o.side,t.position=o.position,t.atPlace=o.atPlace,t.anchor=i.__bh,h.__bd(t))},__bp:function(_){var e=o.fromPoint(_.clientX,_.clientY),t=this;if(h.__bf(_),t.__bt=_,t.__bu=!0,t.__bv(),t.__bw(),t.__bx||t.__by||!e)return delete t.__bz,delete t.__bq,void delete t.__br;if(t.__bz!=e){if(e.id===n)return;t.__bz=e,delete t.__bq;var r=t.__bj(e);if(r){r!=t.__bA&&(t.__bA=r,t.__a.trigger({type:"enterzone",zone:r,changePointer:h.__be}));var b=t.__bl(e,r);if(!b.child)return;var l=a(b.child),d=l.offset(),s={x:d.left,y:d.top,width:l.outerWidth(),height:l.outerHeight()};d=(l=a(b.zone)).offset(),t.__bB={x:d.left,y:d.top,scrollX:l.prop("scrollLeft"),scrollY:l.prop("scrollTop"),maxWidth:l.prop("scrollWidth"),maxHeight:l.prop("scrollHeight"),width:l.width(),height:l.height()},t.__bs(t.__bC=s,_,t.__bm={child:t.__bk,bound:s,zone:b.zone,hover:b.child})}else t.__bA&&(t.__a.trigger({type:"leavezone",zone:t.__bA,changePointer:h.__be}),delete t.__bA)}else t.__bC&&i.inside(e,t.__bm.zone)?t.__bs(t.__bC,_,t.__bm):(delete t.__bq,delete t.__br,t.__bi&&(h.__aZ(),h.__be()))},__ba:function(){var _=this;_.__bD(),_.__bE(),h.__ba({child:_.__bk});var e=_.__br,t=_.__bq,i=_.__bu,o=_.__bm,r=_.__bk;if(i&&(e||t)){var a=o.zone,n=_.__bh,b=3===n?t:e;if(1&n&&1&b||2&b&&2&n)o.hover==a?a.appendChild(r):a.insertBefore(r,o.hover);else if(8&b&&2&n||4&b&&1&n){for(var l=o.hover.nextSibling;l&&1!=l.nodeType;)l=l.nextSibling;a.insertBefore(r,l),l||(a.scrollTop=a.scrollHeight)}}o&&_.__a.trigger({type:"dragfinish",moved:i,dragNode:r,dragZone:_.__bo,dropNode:o.hover,dropZone:o.zone,outZone:!_.__bA}),delete _.__bk,delete _.__bo,delete _.__bz,delete _.__bm,delete _.__bC,delete _.__br,delete _.__bq,delete _.__bt,delete _.__by,delete _.__bA,delete _.__bB,delete _.__bx,delete _.__bu},__bv:function(){var _=this;_.__bF||(_.__bF=function(){var e=_.__bB;if(e){var t=_.__bm.zone,i=0,o=0,r=_.__bt;r.pageX>e.x&&r.pageY>e.y&&r.pageX<e.x+e.width&&r.pageY<e.y+e.height?(r.pageX-e.x<20&&e.scrollX>0?i=-Math.min(7,e.scrollX):e.x+e.width-r.pageX<20&&e.scrollX+e.width<e.maxWidth&&(i=Math.min(7,e.maxWidth-e.scrollX-e.width)),r.pageY-e.y<20&&e.scrollY>0?o=-Math.min(7,e.scrollY):e.y+e.height-r.pageY<20&&e.scrollY+e.height<e.maxHeight&&(o=Math.min(7,e.maxHeight-e.scrollY-e.height)),i||o?(_.__bx=!0,_.__bG=!0,t.scrollTop+=o,t.scrollLeft+=i,e.scrollX+=i,e.scrollY+=o,delete _.__bu,h.__aZ(),h.__be()):(delete _.__bx,delete _.__bG)):(delete _.__bx,delete _.__bG)}},r.__bH(30,_.__bF))},__bw:function(){var _=this;_.__bI||(_.__bI=function(){if(!_.__bG){var e=0,t=0,i=_.__bt,o=l.scrollTop(),r=l.height(),a=d.height(),n=d.width(),b=l.width(),s=l.scrollLeft();i.pageX-s<20&&s>0?e=-Math.min(7,s):s+b-i.pageX<20&&s+b<n&&(e=Math.min(7,n-b-s)),i.pageY-o<20&&o>0?t=-Math.min(7,o):o+r-i.pageY<20&&o+r<a&&(t=Math.min(7,a-r-o)),e||t?(_.__by=!0,i.pageX+=e,i.pageY+=t,window.scrollBy(e,t),delete _.__bu,h.__aZ(),h.__bf(i),h.__be()):delete _.__by}},r.__bH(30,_.__bI))},__bD:function(){this.__bF&&(r.__bJ(this.__bF),delete this.__bF,delete this.__bG)},__bE:function(){this.__bI&&(r.__bJ(this.__bI),delete this.__bI)}})});