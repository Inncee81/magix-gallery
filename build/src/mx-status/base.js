define("mx-status/base",["magix"],(e,t,i)=>{var s=e("magix");i.exports=s.View.extend({init:function(e){var t=e.opers||[],i=e.selected||(t[0]||"").value,s={};if(t.length>0){for(var r=0;r<t.length;r++)if(t[r].value==i){s=t[r],t.splice(r,1);break}t.unshift(s)}var a=e.info||{},n=!1;$.isEmptyObject(a)||(n=!0),this.updater.set({info:a,opers:t,cur:s,showInfo:n,show:!1})},render:function(){this.updater.digest()},"select<click>":function(e){var t=e.params.item;this.updater.get("cur").value!=t.value&&(this.updater.digest({show:!1}),$("#"+this.id).trigger({type:"change",status:t}))},"over<mouseover>":function(e){s.inside(e.relatedTarget,e.eventTarget)||this.updater.digest({show:!0})},"out<mouseout>":function(e){s.inside(e.relatedTarget,e.eventTarget)||this.updater.digest({show:!1})}})});