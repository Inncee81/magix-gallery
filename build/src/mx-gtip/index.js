define("mx-gtip/index",["magix","$"],(t,e,i)=>{var n=t("magix"),r=t("$");n.applyStyle("_zs_galleryW","._zs_gallerygf{position:fixed;top:-50px;left:0;z-index:100000;width:100%;height:50px;padding:0 46px;line-height:50px;background-color:rgba(33,33,33,.72)}._zs_gallerygf,._zs_gallerygf ._zs_gallerygg{color:#fff;transition:all var(--duration);text-align:center}._zs_gallerygf ._zs_gallerygg{opacity:.5;position:absolute;top:50%;right:20px;width:26px;height:26px;margin-top:-13px;line-height:26px;font-size:20px;font-weight:700;border-radius:50%;cursor:pointer}._zs_gallerygf ._zs_gallerygg:hover{opacity:1}");i.exports=n.View.extend({tmpl:function(t,e,i,n,r,o,a,_){if(i||(i=t),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,u=function(t){return"&"+g[t]+";"};r=function(t){return""+(null==t?"":t)},n=function(t){return r(t).replace(l,u)}}if(!o){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(t){return s[t]},p=/[!')(*]/g;o=function(t){return encodeURIComponent(r(t)).replace(p,c)}}if(!_){var m=/[\\'"]/g;_=function(t){return r(t).replace(m,"\\$&")}}var f="",d=t.top,x=t.msg,y=t.timeout;return f+='<div class="_zs_gallerygf" style="top: '+n(d)+';"><span>'+r(x)+"</span>",y||(f+='<i mxs="_zs_gallerycz:_" class="mc-iconfont _zs_gallerygg" mx-click="'+e+'__aL()">&#xe603;</i>'),f+="</div>"},init:function(t){var e=this;e.extra=t,e.__a=r("#"+e.id),e.__a.on("__q",function(t){e.extra={msg:t.msg,timeout:t.timeout},e.__o()}),e.on("destroy",function(){e.owner.unmountVframe(),e.__a.remove()})},render:function(){this.updater.digest({}),this.__o()},__o:function(t){var e=this;clearTimeout(e.__ct),clearTimeout(e.__bO),clearTimeout(e.__bN);var i=e.extra,n=i.timeout;e.__bN=setTimeout(e.wrapAsync(function(){e.updater.digest({msg:i.msg,timeout:n,top:0})}),200),n&&(e.__ct=setTimeout(e.wrapAsync(function(){e["__aL<click>"]()}),n))},"__aL<click>":function(t){var e=this;clearTimeout(e.__ct),clearTimeout(e.__bO),clearTimeout(e.__bN),e.__bO=setTimeout(e.wrapAsync(function(){e.updater.digest({top:"-50px"})}),200)}},{gtip:function(t,e){var i=this.id+"_guid",n=r("#"+i);n.length?n.trigger({type:"__q",msg:t,timeout:e}):(r("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",{msg:t,timeout:e}))}})});