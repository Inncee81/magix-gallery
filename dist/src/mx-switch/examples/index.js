define("mx-switch/examples/index",["magix","examples/example","$","examples/subs","mx-title/second","./1","./2","./3","examples/api","examples/event"],(e,i,t)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("examples/api"),e("examples/event");e("magix");var s=e("examples/example");e("$");t.exports=s.extend({tmpl:function(e,i,t,s,n,a,d,m){if(t||(t=e),!n){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,x=function(e){return"&"+v[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(l,x)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},r=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(r,p)}}if(!m){var c=/[\\'"]/g;m=function(e){return n(e).replace(c,"\\$&")}}d||(d=function(e,i,t,s){for(s=e[u];--s;)if(e[t=u+s]===i)return t;return e[t=u+e[u]++]=i,t});var u="",_="",f=e.viewId,y=e.options,g=e.events;return _+='<div mxv mxa="_zs_galleryeu:_" class="pr pr120"><div mx-view="examples/subs?list='+d(t,[{name:"使用示例",key:f+"_demo",subs:[{name:"可用切换",key:f+"_demo1"},{name:"已开禁用",key:f+"_demo2"},{name:"禁用原因",key:f+"_demo3"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"}])+'"></div><div id="'+s(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeu:a" class="mb20 clearfix"><div mxa="_zs_galleryeu:b" class="_zs_galleryd"><div mx-view="mx-switch/examples/1" id="'+s(f)+'_demo1"></div></div><div mxa="_zs_galleryeu:c" class="_zs_galleryd"><div mx-view="mx-switch/examples/2" id="'+s(f)+'_demo2"></div><div mx-view="mx-switch/examples/3" id="'+s(f)+'_demo3"></div></div></div><div id="'+s(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+d(t,y)+'" class="mb40"></div><div id="'+s(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+d(t,g)+'"></div></div>'},render:function(){this.updater.digest({options:[{key:"state",desc:"当前状态是开还是关，默认关闭",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"tip",desc:"禁止操作时的补充说明",type:"string",def:""}],events:[{type:"change",desc:"切换开关时触发",params:[{key:"state",desc:"当前是开或者关",type:"boolean"}]}],viewId:this.id})}})});