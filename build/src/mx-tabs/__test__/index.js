define("mx-tabs/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","./4","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("./4"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,d,_,a){if(i||(i=e),!s){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,m=function(e){return"&"+v[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(r,m)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return c[e]},o=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(o,l)}}if(!a){var x=/[\\'"]/g;a=function(e){return s(e).replace(x,"\\$&")}}_||(_=function(e,t,i,n){for(n=e[y];--n;)if(e[i=y+n]===t)return i;return e[i=y+e[y]++]=t,i});var y="",p="",u=e.viewId,g=e.options,f=e.events;return p+='<div mxv mxa="_zs_galleryd[:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"打标 + 事件处理",key:u+"_demo1"},{name:"自定义key",key:u+"_demo2"},{name:"带提示",key:u+"_demo4"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+n(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mx-view="mx-tabs/__test__/1" id="'+n(u)+'_demo1"></div><div mxa="_zs_galleryd[:a" class="clearfix mb20"><div mxa="_zs_galleryd[:b" class="_zs_gallerye"><div mx-view="mx-tabs/__test__/2" id="'+n(u)+'_demo2"></div></div><div mxa="_zs_galleryd[:c" class="_zs_gallerye"><div mx-view="mx-tabs/__test__/4" id="'+n(u)+'_demo4"></div></div></div><div id="'+n(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,g)+'" class="mb40"></div><div id="'+n(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+_(i,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'<pre>\n对象数组，格式如下：\n[{\n    value:1,\n    text:"选项1",\n    tag:"打标标签",\n    tips:"提示信息"\n}]</pre>',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"不传默认取list第一个"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"tag",desc:"打标内容",type:"string",def:""}],events:[{type:"change",desc:"切换tab时触发",params:[{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"}]}]})},"changeTab<change>":function(e){this.updater.set({selectedId:e.value}).digest()}})});