define("mx-suggest/examples/index",["magix","$","examples/subs","mx-title/second","./2","./4","./5","./3","./6","./8","./1","examples/api","examples/event"],(e,t,d)=>{e("examples/subs"),e("mx-title/second"),e("./2"),e("./4"),e("./5"),e("./3"),e("./6"),e("./8"),e("./1"),e("examples/api"),e("examples/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,s,n,a,m){if(d||(d=e),!s){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,r=function(e){return"&"+l[e]+";"};s=function(e){return""+(null==e?"":e)},i=function(e){return s(e).replace(v,r)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},p=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(p,c)}}if(!m){var x=/[\\'"]/g;m=function(e){return s(e).replace(x,"\\$&")}}a||(a=function(e,t,d,i){for(i=e[y];--i;)if(e[d=y+i]===t)return d;return e[d=y+e[y]++]=t,d});var y="",g="",u=e.viewId,_=e.options,f=e.events;return g+='<div mxv mxa="_zs_galleryeL:_" class="pr pr120"><div mx-view="examples/subs?list='+a(d,[{name:"静态数据示例",key:u+"_demo_static",subs:[{name:"事件处理",key:u+"_demo2"},{name:"自定义字段",key:u+"_demo4"},{name:"搜索value和text",key:u+"_demo5"},{name:"简单数组",key:u+"_demo3"}]},{name:"动态数据示例",key:u+"_demo_dync",subs:[{name:"动态 + loading",key:u+"_demo6"},{name:"回车直接关键词",key:u+"_demo8"},{name:"直接更新数据",key:u+"_demo1"}]},{name:"API",key:u+"_api"},{name:"Event",key:u+"_event"},{name:"Methods",key:u+"_method"}])+'"></div><div id="'+i(u)+'_demo_static" mx-view="mx-title/second?content=%E9%9D%99%E6%80%81%E6%95%B0%E6%8D%AE%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeL:a" class="clearfix mb20"><div mxa="_zs_galleryeL:b" class="_zs_galleryd"><div mx-view="mx-suggest/examples/2" id="'+i(u)+'_demo2"></div></div><div mxa="_zs_galleryeL:c" class="_zs_galleryd"><div mx-view="mx-suggest/examples/4" id="'+i(u)+'_demo4"></div><div mx-view="mx-suggest/examples/5" id="'+i(u)+'_demo5"></div><div mx-view="mx-suggest/examples/3" id="'+i(u)+'_demo3"></div></div></div><div id="'+i(u)+'_demo_dync" mx-view="mx-title/second?content=%E5%8A%A8%E6%80%81%E6%95%B0%E6%8D%AE%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeL:d" class="clearfix mb20"><div mx-view="mx-suggest/examples/6" id="'+i(u)+'_demo6"></div><div mx-view="mx-suggest/examples/8" id="'+i(u)+'_demo8"></div><div mx-view="mx-suggest/examples/1" id="'+i(u)+'_demo1"></div></div><div id="'+i(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+a(d,_)+'" class="mb40"></div><div id="'+i(u)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+a(d,f)+'" class="mb40"></div><div id="'+i(u)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryeL:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>update(list: Array)</td><td>动态更新下拉列表数据</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'update\');\n                        </pre></td></tr><tr><td>showLoading</td><td>动态更新数据时有延时，增加loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'showLoading\');\n                        </pre></td></tr><tr><td>hideLoading</td><td>动态更新数据完毕，去掉loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'hideLoading\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>可搜素类型列表\n支持简单数组，例如：\n[1, 2, 3, 4]\n\n或者对象数组，例如：[{\n    text: '文案',\n    value: '跟后端交互字段'\n}]\n</pre>",type:"array",def:""},{key:"selected",desc:"已选中项value值，动态更新数据的时候，如果初始list为空，请使用item传入已选项",type:"string",def:""},{key:"item",desc:"<pre>动态list时初始化已选状态\nitem: {\n    text: '文案',\n    value: '选中值'\n}\n同时设置selected和item时，已item为准\n</pre>",type:"object",def:""},{key:"dynamic-enter",desc:"动态list时，回车搜当前关键词",type:"boolean",def:"false"},{key:"list-text",desc:"可搜索类型展示文案",type:"string",def:"text"},{key:"list-value",desc:"可搜索类型对应的key值",type:"string",def:"value"},{key:"placeholder",desc:"placeholder提示",type:"string",def:"搜素"},{key:"type",desc:"<pre>搜索类型：\n1. all：text或者value中包含关键词的\n2. text：只有text中包含关键词的\n3. value：只有value中包含关键词的</pre>",type:"string",def:"text"}],events:[{type:"show",desc:"输入关键词，出现提示框的时候触发，常用于动态更新可选项",params:[{key:"keyword",desc:"当前输入的关键词",type:"string"}]},{type:"change",desc:"选中下拉框中某个选项时触发",params:[{key:"item",desc:"当前选中完整对象",type:"object"},{key:"selected",desc:"当前选中value，selected = item.value",type:"string"}]},{type:"focusout",desc:"提示框隐藏时触发",params:[{key:"keyword",desc:"当前输入的关键词",type:"string"}]}]})}})});