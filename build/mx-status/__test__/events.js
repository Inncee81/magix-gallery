define("mx-status/__test__/events",["magix","$","mx-title/second","__test__/event"],(e,t,n)=>{e("mx-title/second"),e("__test__/event");var r=e("magix");e("$");n.exports=r.View.extend({tmpl:function(e,t,n,r,i,s,v,a){if(n||(n=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,u=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(o,u)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return _[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(f,d)}}if(!a){var m=/[\\'"]/g;a=function(e){return i(e).replace(m,"\\$&")}}v||(v=function(e,t,n,r){for(r=e[g];--r;)if(e[n=g+r]===t)return n;return e[n=g+e[g]++]=t,n});var l,p,x,g="",w="",h=e.viewId,y=e.events;try{w+='<div id="',x=1,p="=viewId",w+=(l="<%=viewId%>",r(h)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='),x=2,p="@events",w+=(l="<%@events%>",v(n,y)+'"></div>')}catch(e){var I="render view error:"+(e.message||e);throw p&&(I+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+x),I+="\r\n\t"+(p?"translate to:":"expr:"),I+=l+"\r\n\tat file:mx-status/__test__/events.html"}return w},render:function(){this.updater.digest({events:[{type:"change",desc:"切换操作项的时候触发",params:[{key:"status",desc:"当前选中操作项完整对象",type:"object"}]}]})}})});