define("mx-tree/examples/index",["magix","$","examples/subs","mx-title/second","./2","./5","./4","./1","./3","examples/api","examples/event"],(e,t,d)=>{e("examples/subs"),e("mx-title/second"),e("./2"),e("./5"),e("./4"),e("./1"),e("./3"),e("examples/api"),e("examples/event");var a=e("magix");e("$");d.exports=a.View.extend({tmpl:function(e,t,d,a,n,i,s,m){if(d||(d=e),!n){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,v=function(e){return"&"+l[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(o,v)}}if(!i){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return r[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(n(e)).replace(x,p)}}if(!m){var y=/[\\'"]/g;m=function(e){return n(e).replace(y,"\\$&")}}s||(s=function(e,t,d,a){for(a=e[c];--a;)if(e[d=c+a]===t)return d;return e[d=c+e[c]++]=t,d});var c="",u="",f=e.viewId,_=e.options,k=e.events;return u+='<div mxv mxa="_zs_galleryfh:_" class="pr pr120"><div mx-view="examples/subs?list='+s(d,[{name:"使用示例",key:f+"_demo",subs:[{name:"双向绑定",key:f+"_demo2"},{name:"一次性获取value",key:f+"_demo1"},{name:"一次性获取对象",key:f+"_demo5"},{name:"默认收起",key:f+"_demo3"},{name:"只读",key:f+"_demo4"}]},{name:"API",key:f+"_api"},{name:"Event",key:f+"_event"},{name:"Methods",key:f+"_method",subs:[{name:"getBottomValues",key:f+"_method"},{name:"getBottomItems",key:f+"_method"}]}])+'"></div><div id="'+a(f)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryfh:a" class="clearfix mb20"><div mxa="_zs_galleryfh:b" class="_zs_galleryd"><div mx-view="mx-tree/examples/2" id="'+a(f)+'_demo2"></div><div mx-view="mx-tree/examples/5" id="'+a(f)+'_demo5"></div><div mx-view="mx-tree/examples/4" id="'+a(f)+'_demo3"></div></div><div mxa="_zs_galleryfh:c" class="_zs_galleryd"><div mx-view="mx-tree/examples/1" id="'+a(f)+'_demo1"></div><div mx-view="mx-tree/examples/3" id="'+a(f)+'_demo4"></div></div></div><div id="'+a(f)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="examples/api?options='+s(d,_)+'" class="mb40"></div><div id="'+a(f)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="examples/event?options='+s(d,k)+'" class="mb40"></div><div id="'+a(f)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryfh:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>getBottomValues</td><td>获取选中值：最底层数据的value</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomValues\');\n                        </pre></td></tr><tr><td>getBottomItems</td><td>获取选中值：最底层数据完整对象</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomItems\');\n                        </pre></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"bottom-values",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"need-all",desc:"是否需要全选功能",type:"boolean",def:"false"},{key:"read-only",desc:"是否只是展示",type:"boolean",def:"false"},{key:"has-line",desc:"是否有连接线",type:"boolean",def:"false"},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"false"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"}],events:[{type:"change",desc:"切换某个标签状态时触发",params:[{key:"bottomValues",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array"}]}]})}})});