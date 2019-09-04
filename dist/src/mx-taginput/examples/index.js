define("mx-taginput/examples/index",["magix","$","examples/subs","mx-title/second","./1","./3","./4","./2","./6","./7","./8","./5","examples/api","examples/event"],(e,t,d)=>{e("examples/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./4"),e("./2"),e("./6"),e("./7"),e("./8"),e("./5"),e("examples/api"),e("examples/event");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,a,n,s,m){if(d||(d=e),!a){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,r=function(e){return"&"+v[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(l,r)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},x=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(x,p)}}if(!m){var y=/[\\'"]/g;m=function(e){return a(e).replace(y,"\\$&")}}s||(s=function(e,t,d,i){for(i=e[c];--i;)if(e[d=c+i]===t)return d;return e[d=c+e[c]++]=t,d});var c="",u="",g=e.viewId,_=e.options,k=e.events;return u+='<div mxv mxa="_zs_gallerye::_" class="pr pr120"><div mx-view="examples/subs?list='+s(d,[{name:"使用示例",key:g+"_demo",subs:[{name:"一次性获取选中值",key:g+"_demo1"},{name:"动态单个选择",key:g+"_demo7"},{name:"动态连续选择",key:g+"_demo5"},{name:"实时获取选中值",key:g+"_demo6"},{name:"自定义key",key:g+"_demo2"},{name:"简单list",key:g+"_demo3"},{name:"选择上限",key:g+"_demo8"},{name:"禁用",key:g+"_demo4"}]},{name:"API",key:g+"_api"},{name:"Event",key:g+"_event"},{name:"Methods",key:g+"_method"}])+'"></div><div mxs="_zs_gallerye::_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div class="clearfix mb20" id="'+i(g)+'_demo"><div mxa="_zs_gallerye::a" class="_zs_galleryd"><div mx-view="mx-taginput/examples/1" id="'+i(g)+'_demo1"></div><div mx-view="mx-taginput/examples/3" id="'+i(g)+'_demo3"></div><div mx-view="mx-taginput/examples/4" id="'+i(g)+'_demo4"></div><div mx-view="mx-taginput/examples/2" id="'+i(g)+'_demo2"></div><div mx-view="mx-taginput/examples/6" id="'+i(g)+'_demo6"></div></div><div mxa="_zs_gallerye::b" class="_zs_galleryd"><div mx-view="mx-taginput/examples/7" id="'+i(g)+'_demo7"></div><div mx-view="mx-taginput/examples/8" id="'+i(g)+'_demo8"></div><div mx-view="mx-taginput/examples/5" id="'+i(g)+'_demo5"></div></div></div><div id="'+i(g)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(d,_)+'" class="mb40"></div><div id="'+i(g)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(d,k)+'" class="mb40"></div><div id="'+i(g)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_gallerye::a" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>update(suggest: Array)</td><td>动态更新下拉列表数据</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'update\');\n                        </pre></td></tr><tr><td>showLoading</td><td>动态更新数据时有延时，增加loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'showLoading\');\n                        </pre></td></tr><tr><td>hideLoading</td><td>动态更新数据完毕，去掉loading</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'hideLoading\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({options:[{key:"list",desc:'列表数组<br>支持简单数组如[1,2,3]<br>支持对象数组，如[{value:1,text:"a"}]，可自定义text-key和value-key',type:"array"},{key:"selected",desc:"当前选中值，多个值逗号分隔",type:"string",def:""},{key:"items",desc:'当前选中对象，<br>格式：[{value:1,text:"a"}]，同时配置了items和selected，以items为准',type:"array[object]",def:"[]"},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"placeholder",desc:"空状态提示文案",type:"string",def:"请选择"},{key:"dynamic-list",desc:"动态单个选择",type:"boolean",def:"false"},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"max",desc:"最大可选择几个，不配置或为0为不限制",type:"number",def:0}],events:[{type:"change",desc:"选择某个标签或者删除某个标签时触发",params:[{key:"items",desc:"当前选中的所有标签完成对象",type:"array[object]"},{key:"selected",desc:"当前选中的所有标签的value值，逗号分隔",type:"string"}]},{type:"show",desc:"出现提示框的时候触发，常用于动态更新可选项",params:[{key:"keyword",desc:"当前输入的关键词",type:"string"}]}],viewId:this.id})}})});