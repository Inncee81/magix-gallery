define("mx-effects/__test__/icon",["magix","$","__test__/subs","mx-title/second","./14","./15","./16","./17","./28","__test__/api"],(e,i,d)=>{e("__test__/subs"),e("mx-title/second"),e("./14"),e("./15"),e("./16"),e("./17"),e("./28"),e("__test__/api");var t=e("magix");e("$");d.exports=t.View.extend({tmpl:function(e,i,d,t,_,n,m,s){if(d||(d=e),!_){var v={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+v[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(o,a)}}if(!n){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},w=function(e){return r[e]},c=/[!')(*]/g;n=function(e){return encodeURIComponent(_(e)).replace(c,w)}}if(!s){var l=/[\\'"]/g;s=function(e){return _(e).replace(l,"\\$&")}}m||(m=function(e,i,d,t){for(t=e[x];--t;)if(e[d=x+t]===i)return d;return e[d=x+e[x]++]=i,d});var y,f,I,x="",p="",u=e.viewId,k=e.options;try{p+='<div mxv mxa="_zs_galleryb2:_" class="pr pr120"><div mx-view="__test__/subs?list=',I=2,f="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '实心默认',\n            key: viewId + '_demo14'\n        },{\n            name: '带提示信息',\n            key: viewId + '_demo17'\n        },{\n            name: '空心默认',\n            key: viewId + '_demo15'\n        },{\n            name: '自定义颜色',\n            key: viewId + '_demo16'\n        },{\n            name: '实际应用',\n            key: viewId + '_demo28'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }]",p+=(y="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '实心默认',                    key: viewId + '_demo14'                }, {                    name: '带提示信息',                    key: viewId + '_demo17'                }, {                    name: '空心默认',                    key: viewId + '_demo15'                }, {                    name: '自定义颜色',                    key: viewId + '_demo16'                }, {                    name: '实际应用',                    key: viewId + '_demo28'                }]        }, {            name: 'API',            key: viewId + '_api'        }]%>",m(d,[{name:"使用示例",key:u+"_demo",subs:[{name:"实心默认",key:u+"_demo14"},{name:"带提示信息",key:u+"_demo17"},{name:"空心默认",key:u+"_demo15"},{name:"自定义颜色",key:u+"_demo16"},{name:"实际应用",key:u+"_demo28"}]},{name:"API",key:u+"_api"}])+'"></div><div id="'),I=26,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryb2:a" class="clearfix mb20"><div mxa="_zs_galleryb2:b" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/14" id="'),I=29,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo14"></div><div mx-view="mx-effects/__test__/15" id="'),I=30,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo15"></div><div mx-view="mx-effects/__test__/16" id="'),I=31,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo16"></div></div><div mxa="_zs_galleryb2:c" class="_zs_gallery___test___layout_-half"><div mx-view="mx-effects/__test__/17" id="'),I=34,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo17"></div><div mx-view="mx-effects/__test__/28" id="'),I=35,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_demo28"></div></div></div><div id="'),I=39,f="=viewId",p+=(y="<%=viewId%>",t(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),I=40,f="@options",p+=(y="<%@options%>",m(d,k)+'"></div></div>')}catch(e){var g="render view error:"+(e.message||e);throw f&&(g+="\r\n\tsrc art:{{"+f+"}}\r\n\tat line:"+I),g+="\r\n\t"+(f?"translate to:":"expr:"),g+=y+"\r\n\tat file:mx-effects/__test__/icon.html"}return p},render:function(){var e=[{key:"mode",desc:"icon类型，可选实心打标（solid），空心打标（hollow）",type:"string",def:"solid"},{key:"type",desc:["展示类型","error：红色错误类型提示","warn：黄色警告类型提示","highlight：品牌色图标强调提示"].join("<br>"),type:"string",def:"默认灰色提示"},{key:"color",desc:"自定义颜色",type:"hex格式色号",def:""},{key:"tip",desc:"hover提示信息",type:"string",def:""}];this.updater.digest({viewId:this.id,options:e})}})});