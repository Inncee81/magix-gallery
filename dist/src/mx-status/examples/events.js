define("mx-status/examples/events",["magix","$","mx-title/second","examples/event"],(e,t,n)=>{e("mx-title/second"),e("examples/event");var r=e("magix");e("$");n.exports=r.View.extend({tmpl:function(e,t,n,r,i,s,u,v){if(n||(n=e),!i){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+a[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(c,o)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,m)}}if(!v){var f=/[\\'"]/g;v=function(e){return i(e).replace(f,"\\$&")}}u||(u=function(e,t,n,r){for(r=e[x];--r;)if(e[n=x+r]===t)return n;return e[n=x+e[x]++]=t,n});var x="",l="",g=e.viewId,w=e.events;return l+='<div id="'+r(g)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+u(n,w)+'"></div>'},render:function(){this.updater.digest({events:[{type:"change",desc:"切换操作项的时候触发",params:[{key:"status",desc:"当前选中操作项完整对象",type:"object"}]}]})}})});