define("mx-btn/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./3","./2","./4","./5","__test__/api"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./3"),e("./2"),e("./4"),e("./5"),e("__test__/api");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,n,_,o,m){if(d||(d=e),!n){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,s=function(e){return"&"+a[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(v,s)}}if(!_){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return r[e]},c=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(c,l)}}if(!m){var y=/[\\'"]/g;m=function(e){return n(e).replace(y,"\\$&")}}o||(o=function(e,t,d,i){for(i=e[I];--i;)if(e[d=I+i]===t)return d;return e[d=I+e[I]++]=t,d});var w,f,x,I="",p="",k=e.viewId,u=e.options;try{p+='<div mxv mxa="_zs_gallery2:_" class="pr pr120"><div mx-view="__test__/subs?list=',x=2,f="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '品牌色按钮',\n            key: viewId + '_demo1'\n        },{\n            name: '普通按钮',\n            key: viewId + '_demo2'\n        },{\n            name: '白色按钮',\n            key: viewId + '_demo3'\n        },{\n            name: '禁用按钮',\n            key: viewId + '_demo4'\n        },{\n            name: '自定义按钮',\n            key: viewId + '_demo5'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }]",p+=(w="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '品牌色按钮',                    key: viewId + '_demo1'                }, {                    name: '普通按钮',                    key: viewId + '_demo2'                }, {                    name: '白色按钮',                    key: viewId + '_demo3'                }, {                    name: '禁用按钮',                    key: viewId + '_demo4'                }, {                    name: '自定义按钮',                    key: viewId + '_demo5'                }]        }, {            name: 'API',            key: viewId + '_api'        }]%>",o(d,[{name:"使用示例",key:k+"_demo",subs:[{name:"品牌色按钮",key:k+"_demo1"},{name:"普通按钮",key:k+"_demo2"},{name:"白色按钮",key:k+"_demo3"},{name:"禁用按钮",key:k+"_demo4"},{name:"自定义按钮",key:k+"_demo5"}]},{name:"API",key:k+"_api"}])+'"></div><div id="'),x=26,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallery2:a" class="clearfix mb20"><div mxa="_zs_gallery2:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-btn/__test__/1" id="'),x=29,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo1"></div><div mx-view="mx-btn/__test__/3" id="'),x=30,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo3"></div></div><div mxa="_zs_gallery2:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-btn/__test__/2" id="'),x=33,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo2"></div><div mx-view="mx-btn/__test__/4" id="'),x=34,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo4"></div><div mx-view="mx-btn/__test__/5" id="'),x=35,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_demo5"></div></div></div><div id="'),x=39,f="=viewId",p+=(w="<%=viewId%>",i(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),x=40,f="@options",p+=(w="<%@options%>",o(d,u)+'" class="mb40"></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw f&&(b+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+x),b+="\r\n\t"+(f?"translate to:":"expr:"),b+=w+"\r\n\tat file:mx-btn/__test__/index.html"}return p},render:function(){var e=this.id;this.updater.digest({viewId:e,options:[{key:"content",desc:"按钮显示文案",type:"string",def:""},{key:"brand",desc:"是否为品牌色按钮",type:"boolean",def:"false"},{key:"white",desc:"是否为白色按钮",type:"boolean",def:"false"},{key:"small",desc:"是否为小号尺寸按钮",type:"boolean",def:"false"},{key:"color",desc:"按钮背景颜色",type:"合法色值",def:""},{key:"color-hover",desc:"hover按钮背景颜色",type:"合法色值",def:"配置了color才生效，默认=color"},{key:"color-text",desc:"按钮文字颜色",type:"合法色值",def:"配置了color才生效，默认=#ffffff"},{key:"color-hover-text",desc:"hover按钮文案颜色",type:"合法色值",def:"配置了color才生效，默认=color-text"},{key:"tag-content",desc:"打标文案",type:"string",def:""},{key:"tag-color",desc:"打标颜色，品牌色按钮默认红色，禁用按钮默认灰色，其他默认品牌色",type:"合法色值",def:""}]})}})});