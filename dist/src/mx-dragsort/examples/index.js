define("mx-dragsort/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","examples/api","examples/event"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("examples/api"),e("examples/event");var n=e("magix");e("$");t.exports=n.View.extend({tmpl:function(e,i,t,n,d,a,s,m){if(t||(t=e),!d){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,v=function(e){return"&"+r[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(o,v)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return l[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(d(e)).replace(x,p)}}if(!m){var c=/[\\'"]/g;m=function(e){return d(e).replace(c,"\\$&")}}s||(s=function(e,i,t,n){for(n=e[u];--n;)if(e[t=u+n]===i)return t;return e[t=u+e[u]++]=i,t});var u="",y="",f=e.viewId,g=e.options,_=e.events;return y+='<div mxv mxa="_zs_gallerya#:_" class="pr pr120"><div mx-view="examples/subs?list='+s(t,[{name:"使用示例",key:f+"_demo",subs:[{name:"垂直拖动",key:f+"_demo1"},{name:"水平拖动",key:f+"_demo2"},{name:"自定义拖动节点",key:f+"_demo3"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+n(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerya#:a" class="clearfix mb20"><div mx-view="mx-dragsort/examples/1" id="'+n(f)+'_demo1"></div><div mx-view="mx-dragsort/examples/2" id="'+n(f)+'_demo2"></div><div mx-view="mx-dragsort/examples/3" id="'+n(f)+'_demo3"></div></div><div id="'+n(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(t,g)+'" class="mb40"></div><div id="'+n(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(t,_)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"view-vertical",desc:"是否可以垂直拖动",type:"boolean",def:"true"},{key:"view-horizonal",desc:"是否可以水平拖动\t",type:"boolean",def:"false"},{key:"view-selector",desc:"用于拖动的元素选择器，默认子节点",type:"string",def:""}],events:[{type:"dragbegin",desc:"开始拖动时触发",params:[{key:"dragNode",desc:"拖动节点",type:"HTMLElement"},{key:"dragZone",desc:"拖动节点所在的容器",type:"HTMLElement"}]},{type:"dragfinish",desc:"结束拖动时触发",params:[{key:"dragNode",desc:"拖动节点",type:"HTMLElement"},{key:"dragZone",desc:"拖动节点所在的容器",type:"HTMLElement"}]}]})}})});