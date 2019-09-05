define("mx-dropdown/examples/bd",["magix","$","examples/subs","mx-title/second","./19","./23","./24","./25","./27","./28","./29","./26","examples/api","examples/event"],(e,d,i)=>{e("examples/subs"),e("mx-title/second"),e("./19"),e("./23"),e("./24"),e("./25"),e("./27"),e("./28"),e("./29"),e("./26"),e("examples/api"),e("examples/event");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,d,i,t,n,s,a,r){if(i||(i=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,l=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(v,l)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return p[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(x,o)}}if(!r){var y=/[\\'"]/g;r=function(e){return n(e).replace(y,"\\$&")}}a||(a=function(e,d,i,t){for(t=e[c];--t;)if(e[i=c+t]===d)return i;return e[i=c+e[c]++]=d,i});var c="",u="",k=e.viewId,_=e.options,f=e.events;return u+='<div mxv mxa="_zs_gallerybk:_" class="pr pr120"><div mx-view="examples/subs?list='+a(i,[{name:"使用示例",key:k+"_demo",subs:[{name:"单选搜索",key:k+"_demo1"},{name:"单选分组",key:k+"_demo2"},{name:"单选选项禁用",key:k+"_demo3"},{name:"多选搜索",key:k+"_demo6"},{name:"多选分组",key:k+"_demo7"},{name:"多选选项禁用",key:k+"_demo8"},{name:"hover展开",key:k+"_demo4"},{name:"整体禁用",key:k+"_demo5"}]},{name:"API",key:k+"_api"},{name:"Event",key:k+"_event"}])+'"></div><div id="'+t(k)+'_bd" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybk:a" class="clearfix mb20"><div mxa="_zs_gallerybk:b" class="_zs_galleryd"><div mx-view="mx-dropdown/examples/19" id="'+t(k)+'_demo1"></div><div mx-view="mx-dropdown/examples/23" id="'+t(k)+'_demo2"></div><div mx-view="mx-dropdown/examples/24" id="'+t(k)+'_demo3"></div><div mx-view="mx-dropdown/examples/25" id="'+t(k)+'_demo4"></div></div><div mxa="_zs_gallerybk:c" class="_zs_galleryd"><div mx-view="mx-dropdown/examples/27" id="'+t(k)+'_demo6"></div><div mx-view="mx-dropdown/examples/28" id="'+t(k)+'_demo7"></div><div mx-view="mx-dropdown/examples/29" id="'+t(k)+'_demo8"></div><div mx-view="mx-dropdown/examples/26" id="'+t(k)+'_demo5"></div></div></div><div id="'+t(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(i,_)+'" class="mb40"></div><div id="'+t(k)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+a(i,f)+'" class="mb40"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>列表数组\n1. 简单数组[1,2,3]\n2. 对象数组，如[{\n    value:1,\n    text:\"a\",\n    disabled: true/false,  //该选项是否禁用\n    pValue: '', //可选个，父节点value值\n}]</pre>",type:"array"},{key:"selected",desc:"当前选中值",type:"string|array",def:"单选选中值：单值<br/><br/>多选选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔"},{key:"trigger-type",desc:"浮层唤起方式，可选点击（click），鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parents",desc:"<pre>\n分组数组，格式如下：\n[{\n    text: '组文案',\n    value: '分组值，对应list的pValue'\n}]\n</pre>",type:"array",def:""},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"keyword",desc:"搜索关键词",type:"string",def:""},{key:"height",desc:"下拉框最大高度",type:"number",def:"250"},{key:"empty-text",desc:"没有选择时的提示文案",type:"string",def:""},{key:"disabled",desc:"是否禁用",type:"",def:"false"}],events:[{type:"change",desc:"",params:[{key:"values",desc:"当前选中value数组",type:"array"},{key:"texts",desc:"当前选中text数组",type:"array"},{key:"value",desc:'当前选中value值，等于values.join(",")',type:"string"},{key:"text",desc:'当前选中text值，等于texts.join(",")',type:"string"},{key:"selected",desc:"当前选中值，初始化为什么类型就保持什么类型，默认string",type:"string|array"}]}]})}})});