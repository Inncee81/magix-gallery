define("mx-tabs/__test__/box",["magix","$","__test__/subs","mx-title/second","./3","./6","./9","./7","./5","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./3"),e("./6"),e("./9"),e("./7"),e("./5"),e("__test__/api"),e("__test__/event");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,s,n,_,a){if(i||(i=e),!s){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};s=function(e){return""+(null==e?"":e)},d=function(e){return s(e).replace(m,r)}}if(!n){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return l[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(c,o)}}if(!a){var x=/[\\'"]/g;a=function(e){return s(e).replace(x,"\\$&")}}_||(_=function(e,t,i,d){for(d=e[y];--d;)if(e[i=y+d]===t)return i;return e[i=y+e[y]++]=t,i});var y="",p="",u=e.viewId,g=e.options,k=e.events;return p+='<div mxv mxa="_zs_galleryeB:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"打标 + 事件处理",key:u+"_demo3"},{name:"双向绑定",key:u+"_demo9"},{name:"空心版",key:u+"_demo7"},{name:"带提示",key:u+"_demo5"},{name:"禁止操作",key:u+"_demo6"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"}])+'"></div><div id="'+d(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeB:a" class="clearfix mb20"><div mxa="_zs_galleryeB:b" class="_zs_galleryd"><div mx-view="mx-tabs/__test__/3" id="'+d(u)+'_demo3"></div><div mx-view="mx-tabs/__test__/6" id="'+d(u)+'_demo6"></div></div><div mxa="_zs_galleryeB:c" class="_zs_galleryd"><div mx-view="mx-tabs/__test__/9" id="'+d(u)+'_demo9"></div><div mx-view="mx-tabs/__test__/7" id="'+d(u)+'_demo7"></div><div mx-view="mx-tabs/__test__/5" id="'+d(u)+'_demo5"></div></div></div><div id="'+d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,g)+'" class="mb40"></div><div id="'+d(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+_(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'<pre>\n对象数组，格式如下：\n[{\n    value:1,\n    text:"选项1",\n    tag:"打标标签",\n    tips:"提示信息"\n}]</pre>',type:"array"},{key:"selected",desc:"当前选中值",type:"string",def:"不传默认取list第一个"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"mx-disabled",desc:"是否禁用，请在节点上配置mx-disabled<br/>&lt;mx-calendar.datepicker mx-disabled /&gt;",type:"",def:""},{key:"mode",desc:"样式版本，可选实心（solid），空心（hollow）",type:"string",def:"solid"},{key:"tag",desc:"打标内容",type:"string",def:""}],events:[{type:"change",desc:"切换tab时触发",params:[{key:"selected",desc:"当前选中value，同value",type:"string"},{key:"value",desc:"当前选中value",type:"string"},{key:"text",desc:"当前选中text",type:"string"},{key:"item",desc:"当前选中完整对象",type:"object"}]}]})},"changeTab<change>":function(e){this.updater.set({selectedId:e.value}).digest()}})});