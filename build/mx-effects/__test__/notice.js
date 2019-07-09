define("mx-effects/__test__/notice",["magix","$","__test__/subs","mx-title/second","./7","./4","./3","./31","./30","./6","./5","__test__/api"],(e,i,d)=>{e("__test__/subs"),e("mx-title/second"),e("./7"),e("./4"),e("./3"),e("./31"),e("./30"),e("./6"),e("./5"),e("__test__/api");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,n,_,o,m){if(d||(d=e),!n){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,v=function(e){return"&"+s[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(r,v)}}if(!_){var a={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return a[e]},l=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(l,c)}}if(!m){var y=/[\\'"]/g;m=function(e){return n(e).replace(y,"\\$&")}}o||(o=function(e,i,d,t){for(t=e[k];--t;)if(e[d=k+t]===i)return d;return e[d=k+e[k]++]=i,d});var f,w,I,k="",x="",p=e.viewId,u=e.options;try{x+='<div mxv mxa="_zs_galleryb2:_" class="pr pr120"><div mx-view="__test__/subs?list=',I=2,w="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '品牌色强调',\n            key: viewId + '_demo7'\n        },{\n            name: '带关闭按钮',\n            key: viewId + '_demo30'\n        },{\n            name: '事件处理',\n            key: viewId + '_demo31'\n        },{\n            name: '红色错误类',\n            key: viewId + '_demo4'\n        },{\n            name: '黄色警告类',\n            key: viewId + '_demo5'\n        },{\n            name: '自定义颜色',\n            key: viewId + '_demo6'\n        },{\n            name: '默认灰底',\n            key: viewId + '_demo3'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }]",x+=(f="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '品牌色强调',                    key: viewId + '_demo7'                }, {                    name: '带关闭按钮',                    key: viewId + '_demo30'                }, {                    name: '事件处理',                    key: viewId + '_demo31'                }, {                    name: '红色错误类',                    key: viewId + '_demo4'                }, {                    name: '黄色警告类',                    key: viewId + '_demo5'                }, {                    name: '自定义颜色',                    key: viewId + '_demo6'                }, {                    name: '默认灰底',                    key: viewId + '_demo3'                }]        }, {            name: 'API',            key: viewId + '_api'        }]%>",o(d,[{name:"使用示例",key:p+"_demo",subs:[{name:"品牌色强调",key:p+"_demo7"},{name:"带关闭按钮",key:p+"_demo30"},{name:"事件处理",key:p+"_demo31"},{name:"红色错误类",key:p+"_demo4"},{name:"黄色警告类",key:p+"_demo5"},{name:"自定义颜色",key:p+"_demo6"},{name:"默认灰底",key:p+"_demo3"}]},{name:"API",key:p+"_api"}])+'"></div><div id="'),I=32,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb2:a" class="clearfix mb20"><div mxa="_zs_galleryb2:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/7" id="'),I=35,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo7"></div><div mx-view="mx-effects/__test__/4" id="'),I=36,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo4"></div><div mx-view="mx-effects/__test__/3" id="'),I=37,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo3"></div></div><div mxa="_zs_galleryb2:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/31" id="'),I=40,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo31"></div><div mx-view="mx-effects/__test__/30" id="'),I=41,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo30"></div><div mx-view="mx-effects/__test__/6" id="'),I=42,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo6"></div><div mx-view="mx-effects/__test__/5" id="'),I=43,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_demo5"></div></div></div><div id="'),I=47,w="=viewId",x+=(f="<%=viewId%>",t(p)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),I=48,w="@options",x+=(f="<%@options%>",o(d,u)+'"></div></div>')}catch(e){var g="render view error:"+(e.message||e);throw w&&(g+="\r\n\tsrc art:{{"+w+"}}\r\n\tat line:"+I),g+="\r\n\t"+(w?"translate to:":"expr:"),g+=f+"\r\n\tat file:mx-effects/__test__/notice.html"}return x},render:function(){var e=[{key:"type",desc:["展示类型","error：红色错误类型提示，color = #a40100","warn：黄色警告类型提示，color = #ffb400","highlight：强调提示，color = 品牌色","common：灰色提示，color = #ccc"].join("<br>"),type:"string",def:"默认灰色提示"},{key:"color",desc:"自定义颜色，配置了color的时候忽略type的配置，其他颜色基于此色值计算",type:"string",def:""},{key:"color-bg",desc:"背景颜色，默认为color * 0.1",type:"string",def:""},{key:"border",desc:"是否带边框，默认情况下带边框则border-radius=4",type:"boolean",def:"false"},{key:"closable",desc:"是否带关闭",type:"boolean",def:"false"},{key:"radius",desc:"是否带圆角",type:"boolean",def:"false"},{key:"color-border",desc:"边框颜色，默认=color",type:"string",def:""},{key:"icon",desc:"是否有警告icon",type:"boolean",def:"true"},{key:"color-icon",desc:"icon颜色，默认=color",type:"string",def:""},{key:"color-text",desc:"文字颜色，默认#666",type:"string",def:""},{key:"text-align",desc:"文字对齐方式，left，center，right",type:"string",def:"left"}];this.updater.digest({viewId:this.id,options:e})}})});