define("mx-status/examples/dropdown",["magix","$","examples/subs","mx-title/second","./4","./5","./options","./events"],(e,i,s)=>{e("examples/subs"),e("mx-title/second"),e("./4"),e("./5"),e("./options"),e("./events");var t=e("magix");e("$");s.exports=t.View.extend({tmpl:function(e,i,s,t,n,d,a,m){if(s||(s=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,l=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(v,l)}}if(!d){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},u=/[!')(*]/g;d=function(e){return encodeURIComponent(n(e)).replace(u,x)}}if(!m){var c=/[\\'"]/g;m=function(e){return n(e).replace(c,"\\$&")}}a||(a=function(e,i,s,t){for(t=e[p];--t;)if(e[s=p+t]===i)return s;return e[s=p+e[p]++]=i,s});var p="",_="",f=e.viewId;return _+='<div mxa="_zs_galleryd::_" class="pr pr120"><div mx-view="examples/subs?list='+a(s,[{name:"使用示例",key:f+"_demo",subs:[{name:"纯操作",key:f+"_demo4"},{name:"纯提示",key:f+"_demo5"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+t(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd::a" class="clearfix mb20"><div mxa="_zs_galleryd::b" class="_zs_galleryd"><div mx-view="mx-status/examples/4" id="'+t(f)+'_demo4"></div></div><div mxa="_zs_galleryd::c" class="_zs_galleryd"><div mx-view="mx-status/examples/5" id="'+t(f)+'_demo5"></div></div></div><div mx-view="mx-status/examples/options" id="'+t(f)+'_api" class="mb40"></div><div mx-view="mx-status/examples/events" id="'+t(f)+'_event"></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});