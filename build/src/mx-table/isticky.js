define("mx-table/isticky",["magix","$"],(_,e,i)=>{var t=_("magix"),s=_("$");i.exports=t.View.extend({init:function(_){var e,i=this;_.stickyWrapper?(e=s("#"+_.stickyWrapper),i.__en=s("#app_header").height()||50):(e=s(window),i.__en=0);var t=function(){i.__eo(e)};i.on("destroy",function(){e.off("scroll",t)}),e.on("scroll",t),i.__ep=e,i.__j=s("#"+i.id)},render:function(){this.__eq(),this.__er(),this.__eo(this.__ep)},__er:function(){var _=this.__es,e=this.__et,i=_.height();i!=this.__ej&&(e.css({height:i,display:"none"}),this.__ej=i)},__eq:function(){var _=s("#"+this.id).find("thead"),e="ph_"+this.id,i=s("#"+e);i.length||(i=s("<caption />").insertBefore(_).attr("id",e)),this.__et=i,this.__es=_},__ew:function(){var _=this,e=s.now();if(!_.__eu||_.__eu+3e3<e){_.__eu=e;var i,t=_.__j,n=void 0;n=_.__en?t.offset().top+_.__ep.scrollTop()-_.__en:t.offset().top,i=t.height();var o=t.find("tfoot"),r=0;return o.length&&(r=o.height()),_.__ev={min:n,max:n+i-_.__ej-r}}return _.__ev},__eo:function(_){var e=this,i=_.scrollTop(),t=e.__ew(),s=e.__ex;i>t.min&&i<t.max?(e.__ex="s",e.__et.css({display:"block"}),e.__es.css({position:"absolute",top:i-t.min})):"i"!=s&&(e.__ex="i",e.__et.css({display:"none"}),e.__es.css({position:"initial",top:"auto"}))}})});