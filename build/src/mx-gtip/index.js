define("mx-gtip/index",["magix","$"],(t,e,i)=>{var n=t("magix"),r=t("$");n.applyStyle("_zs_galleryS","._zs_galleryfF{position:fixed;top:-50px;left:0;z-index:100;width:100%;height:50px;padding:0 46px;line-height:50px;background-color:rgba(33,33,33,.72)}._zs_galleryfF,._zs_galleryfF ._zs_galleryfG{color:#fff;transition:all var(--duration);text-align:center}._zs_galleryfF ._zs_galleryfG{opacity:.5;position:absolute;top:50%;right:20px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_galleryfF ._zs_galleryfG:hover{opacity:1}");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,o,_,a){if(i||(i=t),!r){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,u=function(t){return"&"+l[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(s,u)}}if(!o){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return c[t]},g=/[!')(*]/g;o=function(t){return encodeURIComponent(r(t)).replace(g,p)}}if(!a){var f=/[\\'"]/g;a=function(t){return r(t).replace(f,"\\$&")}}var m="",d=t.top,x=t.msg,y=t.timeout;return m+='<div class="_zs_galleryfF" style="top: '+n(d)+';"><span>'+r(x)+"</span>",y||(m+='<i mxs="_zs_gallerycb:_" class="mc-iconfont _zs_galleryfG" mx-click="'+e+'__aJ()">&#xe603;</i>'),m+="</div>"},init:function(t){var e=this;e.extra=t,e.___=r("#"+e.id),e.___.on("__q",function(t){e.extra={msg:t.msg,timeout:t.timeout},e.__o()}),e.on("destroy",function(){e.owner.unmountVframe(),e.___.remove()})},render:function(){this.updater.digest({}),this.__o()},__o:function(t){var e=this;clearTimeout(e.__cs),clearTimeout(e.__bM),clearTimeout(e.__bL);var i=e.extra,n=i.timeout;e.__bL=setTimeout(e.wrapAsync(function(){e.updater.digest({msg:i.msg,timeout:n,top:0})}),200),n&&(e.__cs=setTimeout(e.wrapAsync(function(){e["__aJ<click>"]()}),n))},"__aJ<click>":function(t){var e=this;clearTimeout(e.__cs),clearTimeout(e.__bM),clearTimeout(e.__bL),e.__bM=setTimeout(e.wrapAsync(function(){e.updater.digest({top:"-50px"})}),200)}},{gtip:function(t,e){var i=this.id+"_guid",n=r("#"+i);n.length?n.trigger({type:"__q",msg:t,timeout:e}):(r("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",{msg:t,timeout:e}))}})});