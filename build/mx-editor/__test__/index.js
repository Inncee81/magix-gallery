define("mx-editor/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./4","./3","./2","__test__/api","__test__/event"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./4"),e("./3"),e("./2"),e("__test__/api"),e("__test__/event");var n=e("magix");e("$");i.exports=n.View.extend({tmpl:function(e,t,i,n,d,_,v,s){if(i||(i=e),!d){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+m[e]+";"};d=function(e){return""+(null==e?"":e)},n=function(e){return d(e).replace(a,o)}}if(!_){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return r[e]},w=/[!')(*]/g;_=function(e){return encodeURIComponent(d(e)).replace(w,l)}}if(!s){var y=/[\\'"]/g;s=function(e){return d(e).replace(y,"\\$&")}}v||(v=function(e,t,i,n){for(n=e[I];--n;)if(e[i=I+n]===t)return i;return e[i=I+e[I]++]=t,i});var c,x,p,I="",u="",k=e.viewId,f=e.options,g=e.events;try{u+='<div mxv mxa="_zs_gallerybs:_" class="pr pr120"><div mx-view="__test__/subs?list=',p=2,x="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '自定义模板',\n            key: viewId + '_demo1'\n        },{\n            name: '表格中',\n            key: viewId + '_demo3'\n        },{\n            name: '小号输入框',\n            key: viewId + '_demo2'\n        },{\n            name: '多行缩略',\n            key: viewId + '_demo4'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'Event',\n        key: viewId + '_event'\n    }]",u+=(c="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '自定义模板',                    key: viewId + '_demo1'                }, {                    name: '表格中',                    key: viewId + '_demo3'                }, {                    name: '小号输入框',                    key: viewId + '_demo2'                }, {                    name: '多行缩略',                    key: viewId + '_demo4'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'Event',            key: viewId + '_event'        }]%>",v(i,[{name:"使用示例",key:k+"_demo",subs:[{name:"自定义模板",key:k+"_demo1"},{name:"表格中",key:k+"_demo3"},{name:"小号输入框",key:k+"_demo2"},{name:"多行缩略",key:k+"_demo4"}]},{name:"API",key:k+"_api"},{name:"Event",key:k+"_event"}])+'"></div><div id="'),p=26,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerybs:a" class="clearfix mb20"><div mxa="_zs_gallerybs:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-editor/__test__/1" id="'),p=29,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_demo1"></div><div mx-view="mx-editor/__test__/4" id="'),p=30,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_demo4"></div></div><div mxa="_zs_gallerybs:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-editor/__test__/3" id="'),p=33,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_demo3"></div><div mx-view="mx-editor/__test__/2" id="'),p=34,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_demo2"></div></div></div><div id="'),p=38,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),p=39,x="@options",u+=(c="<%@options%>",v(i,f)+'" class="mb40"></div><div id="'),p=41,x="=viewId",u+=(c="<%=viewId%>",n(k)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='),p=42,x="@events",u+=(c="<%@events%>",v(i,g)+'"></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw x&&(b+="\r\n\tsrc art:{{"+x+"}}\r\n\tat line:"+p),b+="\r\n\t"+(x?"translate to:":"expr:"),b+=c+"\r\n\tat file:mx-editor/__test__/index.html"}return u},render:function(){this.updater.digest({viewId:this.id,options:[{key:"content",desc:"需要编辑的文案",type:"string",def:""},{key:"tmpl",desc:"编辑内容不是纯文本，需要有html片段的，配置展示模板，使用${content}当占位符显示编辑内容",type:"string",def:"${content}"},{key:"rules",desc:"校验规则",type:"object",def:"支持form所支持的所有类型校验"},{key:"small",desc:"是否是缩小尺寸的input",type:"boolean",def:"false"},{key:"width",desc:"input的宽度",type:"number",def:140}],events:[{type:"edit",desc:"回车或者失去焦点触发，只调用一次",params:[{key:"editText",desc:"编辑完成的内容",type:"string"}]}]})}})});