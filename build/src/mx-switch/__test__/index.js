define("mx-switch/__test__/index",["magix","__test__/example","$","__test__/subs","mx-title/second","./1","./2","./3","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("__test__/api"),e("__test__/event");e("magix");var _=e("__test__/example");e("$");i.exports=_.extend({tmpl:function(e,t,i,_,s,d,n,v){if(i||(i=e),!s){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,o=function(e){return"&"+a[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(m,o)}}if(!d){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return r[e]},l=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(l,c)}}if(!v){var x=/[\\'"]/g;v=function(e){return s(e).replace(x,"\\$&")}}n||(n=function(e,t,i,_){for(_=e[p];--_;)if(e[i=p+_]===t)return i;return e[i=p+e[p]++]=t,i});var p="",u="",f=e.viewId,y=e.options,g=e.events;return u+='<div mxv mxa="_zs_galleryd}:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:f+"_demo",subs:[{name:"可用切换",key:f+"_demo1"},{name:"已开禁用",key:f+"_demo2"},{name:"禁用原因",key:f+"_demo3"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+_(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd}:a" class="mb20 clearfix"><div mxa="_zs_galleryd}:b" class="_zs_galleryd"><div mx-view="mx-switch/__test__/1" id="'+_(f)+'_demo1"></div></div><div mxa="_zs_galleryd}:c" class="_zs_galleryd"><div mx-view="mx-switch/__test__/2" id="'+_(f)+'_demo2"></div><div mx-view="mx-switch/__test__/3" id="'+_(f)+'_demo3"></div></div></div><div id="'+_(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(i,y)+'" class="mb40"></div><div id="'+_(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+n(i,g)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"state",desc:"当前状态是开还是关，默认关闭",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"tip",desc:"禁止操作时的补充说明",type:"string",def:""}],events:[{type:"change",desc:"切换开关时触发",params:[{key:"state",desc:"当前是开或者关",type:"boolean"}]}],viewId:this.id})}})});