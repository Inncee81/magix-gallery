define("mx-main/__test__/hor",["magix","$","__test__/subs","mx-title/second","./hor-demo1","./hor-demo2","./steps"],(e,n,i)=>{e("__test__/subs"),e("mx-title/second"),e("./hor-demo1"),e("./hor-demo2"),e("./steps");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,n,i,t,d,m,s,_){if(i||(i=e),!d){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+r[e]+";"};d=function(e){return""+(null==e?"":e)},t=function(e){return d(e).replace(a,o)}}if(!m){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},w=function(e){return v[e]},c=/[!')(*]/g;m=function(e){return encodeURIComponent(d(e)).replace(c,w)}}if(!_){var p=/[\\'"]/g;_=function(e){return d(e).replace(p,"\\$&")}}s||(s=function(e,n,i,t){for(t=e[y];--t;)if(e[i=y+t]===n)return i;return e[i=y+e[y]++]=n,i});var u,I,k,y="",l="",x=e.viewId;try{l+='<div mxa="_zs_galleryc@:_" class="pr pr120"><div mx-view="__test__/subs?list=',k=2,I="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '初态示例',\n            key: viewId + '_demo1',\n        }, {\n            name: '中间态+单步禁止',\n            key: viewId + '_demo2',\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'step-infos配置',\n        key: viewId + '_step',\n        subs: [{\n            name: '可配参数',\n            key: viewId + '_step1',\n        }, {\n            name: 'check',\n            key: viewId + '_step2',\n        }]\n    }]",l+=(u="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '初态示例',                    key: viewId + '_demo1'                }, {                    name: '中间态+单步禁止',                    key: viewId + '_demo2'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'step-infos配置',            key: viewId + '_step',            subs: [{                    name: '可配参数',                    key: viewId + '_step1'                }, {                    name: 'check',                    key: viewId + '_step2'                }]        }]%>",s(i,[{name:"使用示例",key:x+"_demo",subs:[{name:"初态示例",key:x+"_demo1"},{name:"中间态+单步禁止",key:x+"_demo2"}]},{name:"API",key:x+"_api"},{name:"step-infos配置",key:x+"_step",subs:[{name:"可配参数",key:x+"_step1"},{name:"check",key:x+"_step2"}]}])+'"></div><div id="'),k=27,I="=viewId",l+=(u="<%=viewId%>",t(x)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryc@:a" class="clearfix"><div mx-view="mx-main/__test__/hor-demo1" id="'),k=29,I="=viewId",l+=(u="<%=viewId%>",t(x)+'_demo1"></div><div mx-view="mx-main/__test__/hor-demo2" id="'),k=30,I="=viewId",l+=(u="<%=viewId%>",t(x)+'_demo2"></div></div><div mx-view="mx-main/__test__/steps" id="'),k=33,I="=viewId",l+=(u="<%=viewId%>",t(x)+'_step"></div></div>')}catch(e){var f="render view error:"+(e.message||e);throw I&&(f+="\r\n\tsrc art:{{"+I+"}}\r\n\tat line:"+k),f+="\r\n\t"+(I?"translate to:":"expr:"),f+=u+"\r\n\tat file:mx-main/__test__/hor.html"}return l},render:function(){this.updater.digest({viewId:this.id})}})});