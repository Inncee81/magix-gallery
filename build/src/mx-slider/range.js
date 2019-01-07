define("mx-slider/range",["magix","$","../mx-dragdrop/index"],(_,l,a)=>{var e=_("magix"),r=_("$"),s=_("../mx-dragdrop/index");e.applyStyle("_zs_galleryl",'._zs_galleryld{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-slider/index"],[mx-view*="mx-slider/range"]{position:relative;display:inline-block;outline:0;cursor:pointer}[mx-view*="mx-slider/index"] ._zs_galleryle,[mx-view*="mx-slider/range"] ._zs_galleryle{position:absolute;top:0;right:-74px;width:64px}[mx-view*="mx-slider/index"][mx-disabled],[mx-view*="mx-slider/range"][mx-disabled]{cursor:not-allowed}[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*="mx-slider/index"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before,[mx-view*="mx-slider/range"][mx-disabled] ._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{background-color:#ccc}._zs_galleryaK{line-height:28px}._zs_galleryaK ._zs_galleryaL{display:inline-block;position:relative;border-radius:2px;background:#f0f0f0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM{position:absolute;border-radius:2px;left:0;background-color:#cddbff}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylf{height:4px;top:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaM._zs_gallerylg{width:4px;bottom:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN{position:absolute;width:8px;height:8px;border-radius:50%;background-color:#4d7fff;outline:0}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN:before{content:" ";position:absolute;top:-4px;left:-4px;width:16px;height:16px;border-radius:50%;background-color:#4d7fff;opacity:.3}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_gallerylh{top:-2px}._zs_galleryaK ._zs_galleryaL ._zs_galleryaN._zs_galleryli{left:-2px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj._zs_gallerylk{top:-23px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylj._zs_galleryll{right:12px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylm,._zs_galleryaK ._zs_galleryaL ._zs_galleryln,._zs_galleryaK ._zs_galleryaL ._zs_gallerylo,._zs_galleryaK ._zs_galleryaL ._zs_gallerylp{position:absolute;font-size:12px;pointer-events:none;line-height:normal}._zs_galleryaK ._zs_galleryaL ._zs_gallerylm{left:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_galleryln{right:0;top:9px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylo{bottom:0;left:12px}._zs_galleryaK ._zs_galleryaL ._zs_gallerylp{top:0;left:12px}._zs_galleryaK ._zs_galleryaL._zs_gallerylq{height:4px;top:-2px}._zs_galleryaK ._zs_galleryaL._zs_gallerylr{width:4px;left:8px}._zs_galleryaK ._zs_galleryls{margin-left:3px;color:#999}');a.exports=e.View.extend({tmpl:function(_,l,a,e,r,s,t,i){if(a||(a=_),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(_){return"&"+d[_]+";"};r=function(_){return""+(null==_?"":_)},e=function(_){return r(_).replace(n,g)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(_){return o[_]},c=/[!')(*]/g;s=function(_){return encodeURIComponent(r(_)).replace(c,y)}}if(!i){var z=/[\\'"]/g;i=function(_){return r(_).replace(z,"\\$&")}}var p="",f=_.vertical,x=_.height,h=_.width,m=_.viewId,u=_.min,v=_.max;return p+='<div mxa="_zs_galleryc;:_" class="_zs_galleryaK"><span class="_zs_galleryaL',p+=f?" _zs_gallerylr":" _zs_gallerylq",p+='" mx-contextmenu="'+l+'__H()" style="',p+=f?"height:"+e(x):"width:"+e(h),p+='px"><span class="_zs_galleryaM',p+=f?" _zs_gallerylg":" _zs_gallerylf",p+='"></span><span tabindex="0" mx-keydown="'+l+'__dp({start:true})" class="_zs_galleryaN',p+=f?" _zs_galleryli":" _zs_gallerylh",p+='" mx-mousedown="'+l+'__dj({start:true})" id="left_'+e(m)+'"></span><span class="_zs_gallerylj',p+=f?" _zs_galleryll":" _zs_gallerylk",p+='" id="leftl_'+e(m)+'"></span><span tabindex="0" mx-keydown="'+l+'__dp()" class="_zs_galleryaN',p+=f?" _zs_galleryli":" _zs_gallerylh",p+='" mx-mousedown="'+l+'__dj({end:true})" id="right_'+e(m)+'"></span><span class="_zs_gallerylj',p+=f?" _zs_galleryll":" _zs_gallerylk",p+='" id="rightl_'+e(m)+'"></span><span class="',p+=f?"_zs_gallerylo":"_zs_gallerylm",p+='">'+e(u)+'</span><span class="',p+=f?"_zs_gallerylp":"_zs_galleryln",p+='">'+e(v)+"</span></span></div>"},mixins:[s],init:function(_){var l=this,a=r("#"+l.id);l.assign(_);var s=function(_){if(!l.__df&&!l.__d_){var r=a.offset(),s=l.__dg(),t=((l.__da?s.rMax-_.pageY+r.top:_.pageX-r.left)-s.half)/s.max,i=l.__dh(t),d=+l.__Z,n=+l.__dl;Math.abs(d-i)<Math.abs(n-i)?(l.__dm(i),l.__Z=i,l.__y(),e.node("left_"+l.id).focus()):(l.__dn(i),l.__dl=i,l.__y(),e.node("right_"+l.id).focus())}};a.on("click",s),l.on("destroy",function(){a.off("click",s)}),l.__j=a},assign:function(_){var l=this;l.__cp=+_.width||280,l.__cV=+_.height||280,l.__cW=+_.min||0,l.__cX=+_.max||100,l.__cY=+_.step||1;var a=r("#"+l.id+"[mx-disabled]");l.__d_=a&&a.length>0,l.__da=_.vertical+""=="true";var e=l.__cY+"",s=e.indexOf(".");s=s>=0?e.slice(s+1).length:0,l.__dc=s;var t=_.value;return t?(t=(t+"").split(","),l.__Z=+t[0]||0,l.__dl=+t[1]||0):(l.__Z=l.__cW,l.__dl=(l.__cW+l.__cX)/2),!0},render:function(){var _=this;_.updater.digest({min:_.__cW.toFixed(_.__dc),max:_.__cX.toFixed(_.__dc),viewId:_.id,height:_.__cV,width:_.__cp,vertical:_.__da}),_.val([_.__Z,_.__dl])},__dg:function(){var _=this,l=_.__j.find("._zs_galleryaL"),a=_.__j.find("._zs_galleryaM"),e=r("#left_"+_.id),s=r("#right_"+_.id),t=_.__da?l.height():l.width(),i=e.outerWidth()/2,d=t-2*i;return{rail:l,iLeftL:r("#leftl_"+_.id),iRightL:r("#rightl_"+_.id),tracker:a,iLeft:e,iRight:s,left:parseInt(e.css(_.__da?"bottom":"left"),10),right:parseInt(s.css(_.__da?"bottom":"left"),10),rMax:t,max:d,half:i}},__dm:function(_){var l=this;_=+_;var a=l.__cX,e=l.__cW;_>a?_=a:_<e&&(_=e);var r=(_-e)/(a-e),s=l.__dg(),t=r*s.max;l.__da?s.iLeft.css({bottom:t}):s.iLeft.css({left:t}),_=l.__dh(r);var i=s.iLeftL;i.html(_);var d,n=t+s.half;l.__da?(n-(d=i.height()/2)<0?n=0:n+d>s.rMax?n=s.rMax-2*d:n-=d,i.css({bottom:n}),s.tracker.css({bottom:t+s.half}).height(s.right-t)):(n<(d=i.width()/2)?n=0:n+d>s.rMax?n=s.rMax-2*d:n-=d,i.css({left:n}),s.tracker.css({left:t+s.half}).width(s.right-t));return _},__dn:function(_){var l=this;_=+_;var a=l.__cX,e=l.__cW;_>a?_=a:_<e&&(_=e);var r=(_-e)/(a-e),s=l.__dg(),t=r*s.max;l.__da?s.iRight.css({bottom:t}):s.iRight.css({left:t}),_=l.__dh(r);var i=s.iRightL;i.html(_);var d,n=t+s.half;l.__da?(n-(d=i.height()/2)<0?n=0:n+d>s.rMax?n=s.rMax-2*d:n-=d,i.css({bottom:n}),s.tracker.height(t-s.left)):(n<(d=i.width()/2)?n=0:n+d>s.rMax?n=s.rMax-2*d:n-=d,i.css({left:n}),s.tracker.width(t-s.left));return _},val:function(_){var l,a=this;if(_){var e=(_+"").split(","),r=+e[0]||0,s=+e[1]||0;r>s&&(r=(l=[s,r])[0],s=l[1]),a.__j.prop("value",[r,s]),r=a.__dm(r),s=a.__dn(s),a.__Z==r&&a.__dl==s||(a.__Z=r,a.__dl=s,a.__y())}return[+a.__Z,+a.__dl]},__dh:function(_){var l,a=this.__cX,e=this.__cW,r=this.__cY;return 0===_?l=e:1===_?l=a:(l=e+(a-e)*_,l=Math.round(l/r)*r),l=l.toFixed(this.__dc)},__y:function(){var _=[+this.__Z,+this.__dl];this.__j.prop("value",_).trigger({type:"change",value:_,start:+this.__Z,end:+this.__dl})},__do:function(_,l){var a=this;_==a.__Z&&l==a.__dl||(a.__Z=_,a.__dl=l,a.__y())},"__dj<mousedown>":function(_){var l=this;if(!l.__d_){var a=r(_.eventTarget),t=a.outerWidth(),i=-1;i=l.__da?a.parent().height()-t:a.parent().width()-t;var d=parseInt(a.css(l.__da?"bottom":"left"),10),n=l.__Z,g=l.__dl;l.__di=1,l.dragdrop(_.eventTarget,function(a){s.clear();var r=-1;(r=l.__da?d+_.pageY-a.pageY:d+a.pageX-_.pageX)<0?r=0:r>i&&(r=i);var t=r/i,o=l.__dh(t),y=+o;if(_.params.end){var c=+l.__Z;y>=c?(l.__Z!=n&&(n=l.__dm(c)),g=l.__dn(o),e.node("right_"+l.id).focus()):(l.__Z!=g&&(g=l.__dn(c)),n=l.__dm(o),e.node("left_"+l.id).focus())}else{var z=+l.__dl;y<=z?(l.__dl!=g&&(g=l.__dn(z)),n=l.__dm(o),e.node("left_"+l.id).focus()):(l.__dl!=n&&(n=l.__dm(z)),g=l.__dn(o),e.node("right_"+l.id).focus())}},function(){l.__do(n,g),l.__df=!0,setTimeout(l.wrapAsync(function(){delete l.__df}),20),delete l.__di})}},"__dp<keydown>":function(_){var l,a=this,r=a.__cY;if(!a.__di&&(37==_.keyCode||40==_.keyCode?(_.preventDefault(),r=-r,l=!0):39!=_.keyCode&&38!=_.keyCode||(_.preventDefault(),l=!0),l)){var s=a.__Z,t=+s,i=a.__dl,d=+i,n=_.params.start;n?t+=r:d+=r,t>d?(n?e.node("right_"+a.id).focus():e.node("left_"+a.id).focus(),d!=+s&&(s=a.__dm(d)),t!=+i&&(i=a.__dn(t))):n?s=a.__dm(t):i=a.__dn(d),a.__do(s,i)}},"__H<contextmenu>":function(_){_.preventDefault()}})});