define("mx-slider/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./5","./2","./3","./4","__test__/api","__test__/event"],(e,d,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./5"),e("./2"),e("./3"),e("./4"),e("__test__/api"),e("__test__/event");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,d,i,t,n,_,v,s){if(i||(i=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,r=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(a,r)}}if(!_){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return o[e]},y=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(y,l)}}if(!s){var w=/[\\'"]/g;s=function(e){return n(e).replace(w,"\\$&")}}v||(v=function(e,d,i,t){for(t=e[I];--t;)if(e[i=I+t]===d)return i;return e[i=I+e[I]++]=d,i});var c,p,x,I="",u="",k=e.viewId,f=e.options,b=e.events;try{u+='<div mxv mxa="_zs_galleryd%:_" class="pr pr120"><div mx-view="__test__/subs?list=',x=2,p="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '输入框+单位',\n            key: viewId + '_demo1'\n        },{\n            name: '刻度',\n            key: viewId + '_demo2'\n        },{\n            name: '禁用',\n            key: viewId + '_demo3'\n        },{\n            name: '垂直',\n            key: viewId + '_demo4'\n        },{\n            name: '范围修正',\n            key: viewId + '_demo5'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'Event',\n        key: viewId + '_event'\n    }]",u+=(c="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '输入框+单位',                    key: viewId + '_demo1'                }, {                    name: '刻度',                    key: viewId + '_demo2'                }, {                    name: '禁用',                    key: viewId + '_demo3'                }, {                    name: '垂直',                    key: viewId + '_demo4'                }, {                    name: '范围修正',                    key: viewId + '_demo5'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'Event',            key: viewId + '_event'        }]%>",v(i,[{name:"使用示例",key:k+"_demo",subs:[{name:"输入框+单位",key:k+"_demo1"},{name:"刻度",key:k+"_demo2"},{name:"禁用",key:k+"_demo3"},{name:"垂直",key:k+"_demo4"},{name:"范围修正",key:k+"_demo5"}]},{name:"API",key:k+"_api"},{name:"Event",key:k+"_event"}])+'"></div><div id="'),x=29,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryd%:a" class="clearfix mb20"><div mxa="_zs_galleryd%:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-slider/__test__/1" id="'),x=32,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo1"></div><div mx-view="mx-slider/__test__/5" id="'),x=33,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo5"></div></div><div mxa="_zs_galleryd%:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-slider/__test__/2" id="'),x=36,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo2"></div><div mx-view="mx-slider/__test__/3" id="'),x=37,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo3"></div><div mx-view="mx-slider/__test__/4" id="'),x=38,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_demo4"></div></div></div><div id="'),x=42,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),x=43,p="@options",u+=(c="<%@options%>",v(i,f)+'" class="mb40"></div><div id="'),x=45,p="=viewId",u+=(c="<%=viewId%>",t(k)+'_event" mx-view="mx-title/second?content=Event"></div><div mxv="events" mx-view="__test__/event?options='),x=46,p="@events",u+=(c="<%@events%>",v(i,b)+'"></div></div>')}catch(e){var g="render view error:"+(e.message||e);throw p&&(g+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+x),g+="\r\n\t"+(p?"translate to:":"expr:"),g+=c+"\r\n\tat file:mx-slider/__test__/index.html"}return u},render:function(){this.updater.digest({viewId:this.id,options:[{key:"min",desc:"区间最小值，保留小数位同step",type:"number",def:0},{key:"max",desc:"区间最大值，保留小数位同step",type:"number",def:100},{key:"step",desc:"步长，滑动时变化的刻度",type:"number",def:1},{key:"value",desc:"滑块当前值，超过可选范围会根据可选范围进行修正",type:"string",def:"默认取中间值"},{key:"need-input",desc:"是否需要输入框，横向时才有，width不包含输入框宽度",type:"boolean",def:"false"},{key:"width",desc:"滑块宽度，横向时可设置",type:"number",def:280},{key:"vertical",desc:"是否垂直",type:"boolean",def:"false"},{key:"height",desc:"滑块高度，纵向时（vertical=true）可设置",type:"number",def:280},{key:"disabled",desc:"是否禁用",type:"",def:"false"},{key:"tip",desc:"提示文案",type:"",def:""}],events:[{type:"change",desc:"刻度变化（输入框调整或者拖动滑轴）时触发",params:[{key:"value",desc:"当前刻度值",type:"number"}]}]})}})});