define("mx-dropdown/examples/multiple",["magix","$","examples/subs","mx-title/second","./8","./13","./16","./9","./22","./18","./11","./7","./20","./32","./10","examples/api","examples/event"],(e,d,i)=>{e("examples/subs"),e("mx-title/second"),e("./8"),e("./13"),e("./16"),e("./9"),e("./22"),e("./18"),e("./11"),e("./7"),e("./20"),e("./32"),e("./10"),e("examples/api"),e("examples/event");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,d,i,t,n,m,s,r){if(i||(i=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,v=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(o,v)}}if(!m){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return l[e]},x=/[!')(*]/g;m=function(e){return encodeURIComponent(n(e)).replace(x,p)}}if(!r){var y=/[\\'"]/g;r=function(e){return n(e).replace(y,"\\$&")}}s||(s=function(e,d,i,t){for(t=e[c];--t;)if(e[i=c+t]===d)return i;return e[i=c+e[c]++]=d,i});var c="",u="",k=e.viewId,_=e.options,f=e.events;return u+='<div mxv mxa="_zs_gallerybr:_" class="pr pr120"><div mx-view="examples/subs?list='+s(i,[{name:"使用示例",key:k+"_demo",subs:[{name:"事件+双向绑定值",key:k+"_demo8"},{name:"复杂分组",key:k+"_demo7"},{name:"限制选择上限",key:k+"_demo20"},{name:"hover展开",key:k+"_demo13"},{name:"带搜索框",key:k+"_demo16"},{name:"自定义校验函数",key:k+"_demo32"},{name:"禁选",key:k+"_demo11"},{name:"自定义key",key:k+"_demo9"},{name:"连续选择+下限",key:k+"_demo22"},{name:"向上展开",key:k+"_demo18"},{name:"简单数组",key:k+"_demo10"}]},{name:"API",key:k+"_api"},{name:"Event",key:k+"_event"}])+'"></div><div id="'+t(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybr:a" class="clearfix mb20"><div mxa="_zs_gallerybr:b" class="_zs_galleryd"><div mx-view="mx-dropdown/examples/8" id="'+t(k)+'_demo8"></div><div mx-view="mx-dropdown/examples/13" id="'+t(k)+'_demo13"></div><div mx-view="mx-dropdown/examples/16" id="'+t(k)+'_demo16"></div><div mx-view="mx-dropdown/examples/9" id="'+t(k)+'_demo9"></div><div mx-view="mx-dropdown/examples/22" id="'+t(k)+'_demo22"></div><div mx-view="mx-dropdown/examples/18" id="'+t(k)+'_demo18"></div><div mx-view="mx-dropdown/examples/11" id="'+t(k)+'_demo11"></div></div><div mxa="_zs_gallerybr:c" class="_zs_galleryd"><div mx-view="mx-dropdown/examples/7" id="'+t(k)+'_demo7"></div><div mx-view="mx-dropdown/examples/20" id="'+t(k)+'_demo20"></div><div mx-view="mx-dropdown/examples/32" id="'+t(k)+'_demo32"></div><div mx-view="mx-dropdown/examples/10" id="'+t(k)+'_demo10"></div></div></div><div id="'+t(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(i,_)+'" class="mb40"></div><div id="'+t(k)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(i,f)+'"></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:'列表数组<br/>可为简单数组或[1,2,3]<br/>或对象数组，如[{value:1,text:"a"}]',type:"array"},{key:"selected",desc:"当前选中值",type:"string|array",def:"选中值，支持：<br/>1. 逗号分隔，如1,2,3，此时双向绑定返回值逗号分隔；<br/>2. 数组[1,2,3]，此时双向绑定返回值为数组；<br/><br/>不传默认为空，返回默认为逗号分隔"},{key:"trigger-type",desc:"浮层唤起方式，可选值：<br/>点击（click）<br/>鼠标悬浮展开（hover）",type:"string",def:"click"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"min",desc:"选择个数下限，min > 0时，点击确定时若len < min，不允许提交",type:"number",def:""},{key:"max",desc:"选择个数上限，len >= max时不允许再选择",type:"number",def:""},{key:"submit-checker",desc:"自定义提交校验函数",type:"function",def:"<pre>\n(selected) => {\n    // selected 当前选中值\n    return new Promise(resolve => {\n        // 错误提示信息，无错误信息才继续提交\n        let errorMsg = '';\n        resolve(errorMsg);\n    })\n}\n</pre>"},{key:"searchbox",desc:"是否开启搜索框",type:"boolean",def:"false"},{key:"need-all",desc:"多选下拉框是否需要全选功能，默认true",type:"boolean",def:"true"},{key:"height",desc:"下拉框最大高度",type:"number",def:"400"},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"name",desc:"全选时候的提示文案，比如“全部XX”",type:"string",def:""},{key:"empty-text",desc:"没有选择时的提示文案",type:"string",def:""},{key:"placement",desc:"可选内容展示方向，bottom（下方），top（上方）",type:"string",def:"bottom"},{key:"continuous",desc:"是否要求选择连续的数据<br/>continuous = true时，点击确定时若选择不是连续数据，不允许提交<br/>提示请选择连续的(${name} || 数据)",type:"boolean",def:"false"}],events:[{type:"change",desc:"点击下拉框中“确定”按钮时触发",params:[{key:"selected",desc:"当前选中value值，初始化selected是数组则返回数组，否则为逗号分隔",type:"array or string"},{key:"values",desc:"当前选中value",type:"array"},{key:"texts",desc:"当前选中text，顺序同values",type:"array"}]}]})}})});