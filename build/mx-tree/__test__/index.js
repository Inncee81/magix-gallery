define("mx-tree/__test__/index",["magix","$","__test__/subs","mx-title/second","./2","./5","./4","./1","./3","__test__/api","__test__/event"],(e,t,n)=>{e("__test__/subs"),e("mx-title/second"),e("./2"),e("./5"),e("./4"),e("./1"),e("./3"),e("__test__/api"),e("__test__/event");var d=e("magix");e("$");n.exports=d.View.extend({tmpl:function(e,t,n,d,i,a,_,s){if(n||(n=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,o=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},d=function(e){return i(e).replace(v,o)}}if(!a){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(e){return l[e]},y=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(y,r)}}if(!s){var w=/[\\'"]/g;s=function(e){return i(e).replace(w,"\\$&")}}_||(_=function(e,t,n,d){for(d=e[k];--d;)if(e[n=k+d]===t)return n;return e[n=k+e[k]++]=t,n});var c,u,I,k="",p="",x=e.viewId,f=e.options,h=e.events;try{p+='<div mxv mxa="_zs_galleryfa:_" class="pr pr120"><div mx-view="__test__/subs?list=',I=2,u="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '双向绑定',\n            key: viewId + '_demo2',\n        }, {\n            name: '一次性获取value',\n            key: viewId + '_demo1',\n        }, {\n            name: '一次性获取对象',\n            key: viewId + '_demo5',\n        }, {\n            name: '默认收起',\n            key: viewId + '_demo3',\n        }, {\n            name: '只读',\n            key: viewId + '_demo4',\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'Event',\n        key: viewId + '_event'\n    }, {\n        name: 'Methods',\n        key: viewId + '_method',\n        subs: [{\n            name: 'getBottomValues',\n            key: viewId + '_method',\n        }, {\n            name: 'getBottomItems',\n            key: viewId + '_method',\n        }]\n    }]",p+=(c="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '双向绑定',                    key: viewId + '_demo2'                }, {                    name: '一次性获取value',                    key: viewId + '_demo1'                }, {                    name: '一次性获取对象',                    key: viewId + '_demo5'                }, {                    name: '默认收起',                    key: viewId + '_demo3'                }, {                    name: '只读',                    key: viewId + '_demo4'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'Event',            key: viewId + '_event'        }, {            name: 'Methods',            key: viewId + '_method',            subs: [{                    name: 'getBottomValues',                    key: viewId + '_method'                }, {                    name: 'getBottomItems',                    key: viewId + '_method'                }]        }]%>",_(n,[{name:"使用示例",key:x+"_demo",subs:[{name:"双向绑定",key:x+"_demo2"},{name:"一次性获取value",key:x+"_demo1"},{name:"一次性获取对象",key:x+"_demo5"},{name:"默认收起",key:x+"_demo3"},{name:"只读",key:x+"_demo4"}]},{name:"API",key:x+"_api"},{name:"Event",key:x+"_event"},{name:"Methods",key:x+"_method",subs:[{name:"getBottomValues",key:x+"_method"},{name:"getBottomItems",key:x+"_method"}]}])+'"></div><div id="'),I=39,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryfa:a" class="clearfix mb20"><div mxa="_zs_galleryfa:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-tree/__test__/2" id="'),I=42,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo2"></div><div mx-view="mx-tree/__test__/5" id="'),I=43,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo5"></div><div mx-view="mx-tree/__test__/4" id="'),I=44,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo3"></div></div><div mxa="_zs_galleryfa:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-tree/__test__/1" id="'),I=47,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo1"></div><div mx-view="mx-tree/__test__/3" id="'),I=48,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_demo4"></div></div></div><div id="'),I=52,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),I=53,u="@options",p+=(c="<%@options%>",_(n,f)+'" class="mb40"></div><div id="'),I=55,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='),I=56,u="@events",p+=(c="<%@events%>",_(n,h)+'" class="mb40"></div><div id="'),I=58,u="=viewId",p+=(c="<%=viewId%>",d(x)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryfa:_" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th><th width="200">调用方法</th></tr></thead><tbody><tr><td>getBottomValues</td><td>获取选中值：最底层数据的value</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomValues\');\n                        </pre></td></tr><tr><td>getBottomItems</td><td>获取选中值：最底层数据完整对象</td><td><pre>\nlet instance = Vframe.get(id);\ninstance.invoke(\'getBottomItems\');\n                        </pre></td></tr></tbody></table></div></div>')}catch(e){var g="render view error:"+(e.message||e);throw u&&(g+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+I),g+="\r\n\t"+(u?"translate to:":"expr:"),g+=c+"\r\n\tat file:mx-tree/__test__/index.html"}return p},render:function(){this.updater.digest({viewId:this.id,options:[{key:"list",desc:"<pre>\n页面展示数据列表，例如：\n[{\n    value: 1,\n    pValue: '', //父节点value值，根节点无\n    text: '计划1'\n}, {\n    value: 11,\n    pValue: 1,\n    text: '单元1-1'\n}]\n</pre>",type:"array",def:""},{key:"bottom-values",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array",def:""},{key:"text-key",desc:"渲染text时读取的key",type:"string",def:"text"},{key:"value-key",desc:"渲染value时读取的key",type:"string",def:"value"},{key:"parent-key",desc:"表示父节点value的字段",type:"string",def:"pValue"},{key:"need-all",desc:"是否需要全选功能",type:"boolean",def:"false"},{key:"read-only",desc:"是否只是展示",type:"boolean",def:"false"},{key:"has-line",desc:"是否有连接线",type:"boolean",def:"false"},{key:"need-expand",desc:"是否需要展开收起功能",type:"boolean",def:"false"},{key:"close",desc:"默认状态下是否收起",type:"boolean",def:"false"}],events:[{type:"change",desc:"切换某个标签状态时触发",params:[{key:"bottomValues",desc:"已选中的最底层value列表，组件认为选中项最终获取的都是最底层数据",type:"array"}]}]})}})});