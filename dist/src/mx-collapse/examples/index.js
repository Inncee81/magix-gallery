define("mx-collapse/examples/index",["magix","$","examples/subs","mx-title/second","./1","./2","./3","./4","examples/api","examples/event"],(e,i,n)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./3"),e("./4"),e("examples/api"),e("examples/event");var t=e("magix");e("$");n.exports=t.View.extend({tmpl:function(e,i,n,t,a,d,s,m){if(n||(n=e),!a){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,o=function(e){return"&"+v[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(l,o)}}if(!d){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return r[e]},x=/[!')(*]/g;d=function(e){return encodeURIComponent(a(e)).replace(x,p)}}if(!m){var c=/[\\'"]/g;m=function(e){return a(e).replace(c,"\\$&")}}s||(s=function(e,i,n,t){for(t=e[u];--t;)if(e[n=u+t]===i)return n;return e[n=u+e[u]++]=i,n});var u="",f="",y=e.viewId,_=e.options,w=e.events;return f+='<div mxv mxa="_zs_galleryaz:_" class="pr pr120"><div mx-view="examples/subs?list='+s(n,[{name:"使用示例",key:y+"_demo",subs:[{name:"展开单个+事件",key:y+"_demo1"},{name:"展开多个+禁用",key:y+"_demo2"},{name:"内容自定义view",key:y+"_demo3"},{name:"自定义icon",key:y+"_demo4"}]},{name:"API",key:y+"_api"},{name:"Event",key:y+"_event"}])+'"></div><div id="'+t(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryaz:a" class="clearfix mb20"><div mx-view="mx-collapse/examples/1" id="'+t(y)+'_demo1"></div><div mx-view="mx-collapse/examples/2" id="'+t(y)+'_demo2"></div><div mx-view="mx-collapse/examples/3" id="'+t(y)+'_demo3"></div><div mx-view="mx-collapse/examples/4" id="'+t(y)+'_demo4"></div></div><div id="'+t(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(n,_)+'" class="mb40"></div><div id="'+t(y)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(n,w)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"面板数据<pre>\nlist: [{\n    disabled: true / false, //是否禁用\n    expand: true / false, //是否展开，disabled=true是expand=true也不展开，所有都不配置默认展开非禁用第一个\n    title: '面板标题',\n    content: '面板内容',\n    view: '面板自定义view，优先级view > content',\n    arrow: '自定义展开箭头，默认为 &gt;'\n}]\n</pre>",type:"array",def:""},{key:"only-one",desc:"是否只展开一个",type:"boolean",def:"true"}],events:[{type:"change",desc:"选中下拉框中某个选项时触发",params:[{key:"expands",desc:"[true, false, ...]，当前每个实体对象的展开收起状态",type:"array"}]}]})}})});