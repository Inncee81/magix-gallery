define("mx-dragsort/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,d,_,s,r){if(i||(i=e),!d){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,a=function(e){return"&"+o[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(v,a)}}if(!_){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},l=/[!')(*]/g;_=function(e){return encodeURIComponent(d(e)).replace(l,c)}}if(!r){var p=/[\\'"]/g;r=function(e){return d(e).replace(p,"\\$&")}}s||(s=function(e,t,i,n){for(n=e[x];--n;)if(e[i=x+n]===t)return i;return e[i=x+e[x]++]=t,i});var x="",u="",y=e.viewId,f=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryaY:_" class="pr pr120"><div mx-view="__test__/subs?list='+s(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"垂直拖动",key:y+"_demo1"},{name:"水平拖动",key:y+"_demo2"},{name:"自定义拖动节点",key:y+"_demo3"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+n(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaY:a" class="clearfix mb20"><div mx-view="mx-dragsort/__test__/1" id="'+n(y)+'_demo1"></div><div mx-view="mx-dragsort/__test__/2" id="'+n(y)+'_demo2"></div><div mx-view="mx-dragsort/__test__/3" id="'+n(y)+'_demo3"></div></div><div id="'+n(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+s(i,f)+'" class="mb40"></div><div id="'+n(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+s(i,g)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"view-vertical",desc:"是否可以垂直拖动",type:"boolean",def:"true"},{key:"view-horizonal",desc:"是否可以水平拖动\t",type:"boolean",def:"false"},{key:"view-selector",desc:"用于拖动的元素选择器，默认子节点",type:"string",def:""}],events:[{type:"dragbegin",desc:"开始拖动时触发",params:[{key:"dragNode",desc:"拖动节点",type:"HTMLElement"},{key:"dragZone",desc:"拖动节点所在的容器",type:"HTMLElement"}]},{type:"dragfinish",desc:"结束拖动时触发",params:[{key:"dragNode",desc:"拖动节点",type:"HTMLElement"},{key:"dragZone",desc:"拖动节点所在的容器",type:"HTMLElement"}]}]})}})});