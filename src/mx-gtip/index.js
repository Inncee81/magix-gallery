define("mx-gtip/index",["magix","$"],(t,i,n)=>{var o=t("magix"),e=t("$"),r={lt:function(t,i){t.css({top:65*i+5*(i+1),left:10})},rt:function(t,i){t.css({top:65*i+5*(i+1),right:10})},lb:function(t,i){t.css({bottom:65*i+5*(i+1),left:10})},rb:function(t,i){t.css({bottom:65*i+5*(i+1),right:10})}};o.applyStyle("_u","._ds{border:1px solid #e6e6e6;background-color:#fff;padding:8px 20px;position:fixed;z-index:450;border-radius:4px;width:300px;height:65px;overflow:hidden;word-break:break-all;transition:all .3s;opacity:0}._dt{opacity:1}._du{opacity:0}");var c={__cT:function(t){var i=this["$"+t];if(i&&i.length)for(var n=0,o=void 0;n<i.length;n++){o=i[n];(0,r[t])(o,n)}},__n:function(t,i){i||(i="rt");var n=this;if(!r[i])throw new Error("mx-gip unsupport dock:"+i);(n["$"+i]||(n["$"+i]=[])).push(t),t.on("__cU",function(){n.__i(t,i)}),n.__cT(i)},__i:function(t,i){t.off("close");for(var n=this["$"+i],o=n.length-1;o>=0;o--){if(n[o]==t){n.splice(o,1);break}}this.__cT(i)}};n.exports=o.View.extend({tmpl:function(t){var i,n="",o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},e=/[&<>"'`]/g,r=function(t){return null==t?"":""+t},c=function(t){return"&"+o[t]+";"};return n+=""+(i=t.tip.msg,r(i).replace(e,c))},init:function(t){var i=this;i.__e=t,i.on("destroy",function(){i.__k.trigger("__cU").remove()})},render:function(){var t=this,i=e("#"+t.id);i.addClass("_ds"),t.__k=i,t.updater.digest({tip:t.__e}),t.__e.timeout&&setTimeout(t.wrapAsync(function(){t.__bn()}),t.__e.timeout),setTimeout(t.wrapAsync(function(){i.addClass("_dt")}),20)},__bn:function(){var t=this;t.__k.addClass("_du"),setTimeout(t.wrapAsync(function(){t.owner.unmountVframe()}),300)}},{__cV:function(t){var i=o.guid("gtip-");e("body").append('<div id="'+i+'" />'),this.owner.mountVframe(i,"mx-gtip/index",t),c.__n(e("#"+i),t.dock)},gtipRT:function(t,i){this.__cV({msg:t,dock:"rt",timeout:i||3e3})},gtipRB:function(t,i){this.__cV({msg:t,dock:"rb",timeout:i||3e3})},gtipLT:function(t,i){this.__cV({msg:t,dock:"lt",timeout:i||3e3})},gtipLB:function(t,i){this.__cV({msg:t,dock:"lb",timeout:i||3e3})}})});