define("mx-indics/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./2","./4","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./4"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,s,d,_,a){if(i||(i=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,m=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(v,m)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},y=/[!')(*]/g;d=function(e){return encodeURIComponent(s(e)).replace(y,o)}}if(!a){var l=/[\\'"]/g;a=function(e){return s(e).replace(l,"\\$&")}}_||(_=function(e,t,i,n){for(n=e[p];--n;)if(e[i=p+n]===t)return i;return e[i=p+e[p]++]=t,i});var p="",u="",x=e.viewId,f=e.options,k=e.events;return u+='<div mxv mxa="_zs_gallerycP:_" class="pr pr120"><div mx-view="__test__/subs?list='+_(i,[{name:"使用示例",key:x+"_demo",subs:[{name:"上限+排序+分组",key:x+"_demo1"},{name:"不限制+不排序",key:x+"_demo3"},{name:"不限制+排序",key:x+"_demo2"},{name:"自定义key",key:x+"_demo4"}]},{name:"API",key:x+"_api"},{name:"Event",key:x+"_event"}])+'"></div><div mxs="_zs_gallerycP:_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycP:a" class="clearfix mb20"><div mx-view="mx-indics/__test__/1" id="'+n(x)+'_demo1"></div><div mx-view="mx-indics/__test__/3" id="'+n(x)+'_demo3"></div><div mx-view="mx-indics/__test__/2" id="'+n(x)+'_demo2"></div><div mx-view="mx-indics/__test__/4" id="'+n(x)+'_demo4"></div></div><div id="'+n(x)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+_(i,f)+'" class="mb40"></div><div id="'+n(x)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='+_(i,k)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"fields",desc:"<pre>\n指标数组，格式如下：\n[{\n    text: '指标文案',\n    value: '跟后台交互的指标字段',\n    pValue: '可选，需要分组时配置parents对应的value', \n    tip: '指标提示文案'\n}]\n</pre>",type:"array",def:""},{key:"parents",desc:"<pre>\n分组数组，格式如下：\n[{\n    text: '组文案',\n    value: '分组值，对应fields的pValue'\n}]\n</pre>",type:"array",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"custom",desc:"当前是否为自定义指标，false（默认指标），true（自定义指标）<br/>可能存在customs=defaults的情况，因此需要明确指定当前是自定义还是默认",type:"boolean",def:"false"},{key:"customs",desc:'自定义指标value值的数组，例如["cost"]<br/>为[]的时候，默认=defaults，确保每次切换都有选中的指标',type:"array",def:""},{key:"defaults",desc:"默认指标value值的数组，必填",type:"array",def:""},{key:"limit",desc:"指标选中上限，不传不限制选择个数",type:"number",def:""},{key:"line-number",desc:"每行展现指标个数",type:"number",def:"可排序：默认每行4个<br/>不可排序：默认每行5个"},{key:"sortable",desc:"是否需要排序",type:"boolean",def:"false"}],events:[{type:"change",desc:"指标有变化时触发，<br/>包括切换自定义和默认指标",params:[{key:"triggerType",desc:"触发类型：<br/>btn-switch（快捷切换自定义和默认）<br/>dialog-setting（开浮层编辑自定义指标）",type:"string"},{key:"defaults",desc:"默认指标，固定值",type:"array"},{key:"custom",desc:"是否是自定义",type:"boolean"},{key:"customs",desc:"自定义指标",type:"array"}]}]})}})});