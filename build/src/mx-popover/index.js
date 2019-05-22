define("mx-popover/index",["magix","mx-popover/base","$"],(r,_,i)=>{var e=r("magix"),a=(e.Vframe,r("mx-popover/base")),o=r("$");e.applyStyle("_zs_galleryam","._zs_galleryiq,._zs_galleryir,._zs_galleryis,._zs_galleryit,._zs_galleryiu,._zs_galleryiv,._zs_galleryiw,._zs_galleryix,._zs_galleryiy,._zs_galleryiz,._zs_galleryiA,._zs_galleryiB{opacity:0;transition:opacity .15s,-webkit-transform .15s;transition:transform .15s,opacity .15s;transition:transform .15s,opacity .15s,-webkit-transform .15s;-webkit-transform:scale(0);transform:scale(0)}._zs_galleryir,._zs_galleryiy{-webkit-transform-origin:0 0;transform-origin:0 0}._zs_galleryis,._zs_galleryiv{-webkit-transform-origin:100% 0;transform-origin:100% 0}._zs_galleryiq{-webkit-transform-origin:50% 0;transform-origin:50% 0}._zs_galleryiw,._zs_galleryiA{-webkit-transform-origin:0 100%;transform-origin:0 100%}._zs_galleryit,._zs_galleryiB{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}._zs_galleryiz{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}._zs_galleryiu{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}._zs_galleryix{-webkit-transform-origin:0 50%;transform-origin:0 50%}._zs_galleryiC{opacity:1;-webkit-transform:scale(1);transform:scale(1)}._zs_galleryiD{display:none}._zs_galleryiE,._zs_galleryiF{position:absolute;z-index:9999;height:auto;border-radius:var(--border-radius);font-size:12px;line-height:22px;white-space:normal;font-weight:400;font-family:Helvetica,Arial,Microsoft Yahei,Hiragino Sans GB,Heiti SC,WenQuanYi Micro Hei,sans-serif}._zs_galleryiE{background-color:#fff;color:#333}._zs_galleryiE ._zs_galleryiG{padding:10px;word-break:break-all}._zs_galleryiF{background-color:rgba(33,33,33,.72);color:#fff}._zs_galleryiF ._zs_galleryiG{padding:4px 10px}"),i.exports=a.extend({tmpl:function(r,_,i,e,a,o,t,n){if(i||(i=r),!a){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,c=function(r){return"&"+s[r]+";"};a=function(r){return""+(null==r?"":r)},function(r){return a(r).replace(l,c)}}if(!o){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(r){return g[r]},y=/[!')(*]/g;o=function(r){return encodeURIComponent(a(r)).replace(y,f)}}if(!n){var m=/[\\'"]/g;n=function(r){return a(r).replace(m,"\\$&")}}var u="",p=r.trigger;return u+=a(p)+""},init:function(r){var _=this,i=r.placement||"bottom",e=r.align||"center";_.__cz=i,_.__cA=e,_.__cB=_.constants.classNames[[i,e].join("-")],"dark"==r.mode||"dark"==r.type?(_.__cB+=" _zs_galleryiF",r.type):_.__cB+=" _zs_galleryiE mx-shadow",_.__cL=r.left,_.__cK=r.top,_.__cI=r.offset,_.__bK=!1,_.__cC=!1,_.__cD=!1,_.__bJ=r.scrollWrapper,_.__cE=r.content||"",_.__cF=r.width||200,_.__cM=r.zIndex||9999,_.__cN=/^true$/i.test(r.auto)||!1,_.__cO=r.view||"",_.__cP=r.data||{},_.__cG=r.alignText||"left",_.on("destroy",function(){_.__a.off("mouseenter mouseleave"),_.__bL&&clearTimeout(_.__bL),_.__bM&&clearTimeout(_.__bM),o("#popover_"+_.id).remove()});var a=o("#"+_.id);_.__cH=a.html(),_.__a=a,a.hover(function(){clearTimeout(_.__bM),_.__bL=setTimeout(_.wrapAsync(function(){_.__o()}),_.constants.showDelay)},function(){_.__n()})},render:function(){var r=this;r.updater.digest({trigger:r.__cH}),r.__cN&&(r.__bL=setTimeout(r.wrapAsync(function(){r.__o()}),r.constants.showDelay)),r.bindScroll()},__bS:function(){var r=this,_=r.__cB,i=r.__cF,e=r.__cM,a=r.__cO,t=r.__cP,n=r.id;a||(a="mx-popover/content",t={content:r.__cE});var s='<div class="_zs_galleryiD '+_+'" id="popover_'+n+'"\n                style="width: '+i+"px; z-index: "+e+';"></div>';o(document.body).append(s);var l=r.owner.mountVframe("popover_"+n,"");l.on("created",function(){var _=r.__bQ();_.removeClass("_zs_galleryiD"),_.hover(function(){clearTimeout(r.__bM)},function(){r.__n()})}),l.mountView(a,{data:t})},__o:function(){var r=this;(clearTimeout(r.__bL),r.__bK||(r.__bK=!0,r.__bS()),r.__cD)||(r.__cD=!0,r.__bQ().addClass("_zs_galleryiC"))},__n:function(){var r=this;clearTimeout(r.__bL),clearTimeout(r.__bM),r.__bM=setTimeout(r.wrapAsync(function(){r.__cD&&(r.__cD=!1,o("#popover_"+r.id).removeClass("_zs_galleryiC"))}),r.constants.hideDelay)}})});