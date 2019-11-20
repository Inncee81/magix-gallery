define("mx-gtip/index",["magix","$","../mx-util/view"],(e,t,i)=>{"use strict";var o=e("magix"),r=e("$"),n=e("../mx-util/view");o.default.applyStyle("_zs_galleryW","._zs_gallerygc{opacity:0;position:fixed;left:0;z-index:100000;width:100%;height:0;padding:16px 50px 16px 24px;line-height:1.5}._zs_gallerygc,._zs_gallerygc ._zs_gallerygd{text-align:center;transition:all var(--duration)}._zs_gallerygc ._zs_gallerygd{opacity:.5;position:absolute;top:50%;right:14px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_gallerygc ._zs_gallerygd:hover{opacity:1}._zs_galleryge{opacity:1;height:auto}"),i.exports=n.extend({tmpl:function(e,t,i,o,r,n,a,s){if(i||(i=e),!r){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,_=function(e){return"&"+l[e]+";"};r=function(e){return""+(null==e?"":e)},o=function(e){return r(e).replace(c,_)}}if(!n){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return g[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(p,u)}}if(!s){var d=/[\\'"]/g;s=function(e){return r(e).replace(d,"\\$&")}}var f="",y=e.show,h=e.styleShow,m=e.styleHide,x=e.msg,v=e.colorIcon,w=e.timeout,b=e.styles;return f+='<div class="_zs_gallerygc ',y&&(f+=" _zs_galleryge "),f+='" style="'+o(y?h:m)+'">',x&&(f+='<span><i class="mc-iconfont mr5 displacement-2" style="color: '+o(v)+';">&#xe6ad;</i>'+r(x)+"</span>"),f+=" ",w||(f+='<i style="color: '+o(b.color)+';" class="mc-iconfont _zs_gallerygd" mx-click="'+t+'__aO()">&#xe603;</i>'),f+="</div>"},init:function(e){var t=this;t.viewOptions=e,t.__a=r("#"+t.id),t.__a.on("__t",function(e){t.viewOptions=e,t.__r()}),t.on("destroy",function(){t.__cu(),t.owner.unmountVframe(t.id),t.__a.remove()})},render:function(){this.updater.digest({show:!1,styleShow:"",styleHide:"",styles:{}}),this.__r()},__r:function(e){var t=this;t.__cu();var i,r,n,a,s=t.viewOptions,l=s.displayType,c=void 0===l?"common":l,_=s.styles,g=void 0===_?{}:_,u=s.msg,p=s.timeout;switch(c){case"common":r="rgba(33, 33, 33, .72)",n="#ffffff",a=a||"#ffffff";break;case"highlight":i="--color-brand",n="#666666";break;case"error":i="--color-red",n="#666666";break;case"warn":i="--color-warn",n="#666666";case"pass":i="--color-green",n="#666666"}if(i){var d=t.__cr(i,"#4d7fff"),f=t.__b(d);r=t.__c({r:f.r,g:f.g,b:f.b,alpha:.1}),a=a||d}g.backgroundColor=g.backgroundColor||r,g.color=g.color||n,g.top=g.top||"0px",t.updater.digest(o.default.mix({msg:u,colorIcon:a,timeout:p,displayType:c,styles:g},t.__cv(g))),t.__bP=setTimeout(t.wrapAsync(function(){t.updater.digest({show:!0})}),200),p&&(t.__cw=setTimeout(t.wrapAsync(function(){t["__aO<click>"]()}),p))},__cv:function(e){var t=[],i=[];for(var o in e){var r=e[o]+"",n=o.replace(/([A-Z])/g,"-$1").toLowerCase();t.push(n+":"+r),i.push(n+":"+("top"==o?+r.replace("px","")-32+"px":r))}return{styleShow:t.join(";")+";",styleHide:i.join(";")+";"}},"__aO<click>":function(e){var t=this;t.__cu(),t.__bQ=setTimeout(t.wrapAsync(function(){t.updater.digest({show:!1})}),200)},__cu:function(){this.__cw&&clearTimeout(this.__cw),this.__bQ&&clearTimeout(this.__bQ),this.__bP&&clearTimeout(this.__bP)}},{gtip:function(e,t){var i,n={msg:e};r.isPlainObject(t)?(n.displayType=t.type,delete t.type,o.default.mix(n,t),n.singleton=n.singleton+""!="false"):o.default.mix(n,{timeout:t,singleton:!0}),i=n.singleton?this.id+"_guid":this.id+"_"+o.default.guid("guid_");var a=r("#"+i);a.length?a.trigger(o.default.mix({type:"__t"},n)):(r("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",n))}})});