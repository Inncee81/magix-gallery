define("mx-status/__test__/events",["magix","$","mx-title/second","__test__/event"],(e,t,n)=>{e("mx-title/second"),e("__test__/event");var r=e("magix");e("$");n.exports=r.View.extend({tmpl:function(e,t,n,r,i,s,u,v){if(n||(n=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(o,a)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return d[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(f,_)}}if(!v){var m=/[\\'"]/g;v=function(e){return i(e).replace(m,"\\$&")}}u||(u=function(e,t,n,r){for(r=e[p];--r;)if(e[n=p+r]===t)return n;return e[n=p+e[p]++]=t,n});var p="",x="",l=e.viewId,g=e.events;return x+='<div id="'+r(l)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+u(n,g)+'"></div>'},render:function(){this.updater.digest({events:[{type:"change",desc:"切换操作项的时候触发",params:[{key:"status",desc:"当前选中操作项完整对象",type:"object"}]}]})}})});