define("mx-hour/__test__/index",["magix","$","__test__/subs","mx-title/second","./1","./2","__test__/api"],(e,n,i)=>{e("__test__/subs"),e("mx-title/second"),e("./1"),e("./2"),e("__test__/api");var t=e("magix");e("$");i.exports=t.View.extend({tmpl:function(e,n,i,t,d,s,r,_){if(i||(i=e),!d){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,a=function(e){return"&"+m[e]+";"};d=function(e){return""+(null==e?"":e)},t=function(e){return d(e).replace(o,a)}}if(!s){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return v[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(d(e)).replace(c,p)}}if(!_){var l=/[\\'"]/g;_=function(e){return d(e).replace(l,"\\$&")}}r||(r=function(e,n,i,t){for(t=e[I];--t;)if(e[i=I+t]===n)return i;return e[i=I+e[I]++]=n,i});var u,w,x,I="",f="",y=e.viewId,k=e.options;try{f+='<div mxv mxa="_zs_gallerycK:_" class="pr pr120"><div mx-view="__test__/subs?list=',x=3,w="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '极简模式',\n            key: viewId + '_demo1'\n        },{\n            name: '每日单独选择',\n            key: viewId + '_demo2'\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }]",f+=(u="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '极简模式',                    key: viewId + '_demo1'                }, {                    name: '每日单独选择',                    key: viewId + '_demo2'                }]        }, {            name: 'API',            key: viewId + '_api'        }]%>",r(i,[{name:"使用示例",key:y+"_demo",subs:[{name:"极简模式",key:y+"_demo1"},{name:"每日单独选择",key:y+"_demo2"}]},{name:"API",key:y+"_api"}])+'"></div><div id="'),x=17,w="=viewId",f+=(u="<%=viewId%>",t(y)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_gallerycK:a" class="clearfix mb20"><div mx-view="mx-hour/__test__/1" id="'),x=19,w="=viewId",f+=(u="<%=viewId%>",t(y)+'_demo1"></div><div mx-view="mx-hour/__test__/2" id="'),x=20,w="=viewId",f+=(u="<%=viewId%>",t(y)+'_demo2"></div></div><div id="'),x=23,w="=viewId",f+=(u="<%=viewId%>",t(y)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),x=24,w="@options",f+=(u="<%@options%>",r(i,k)+'"></div></div>')}catch(e){var g="render view error:"+(e.message||e);throw w&&(g+="\r\n\tsrc art:{{"+w+"}}\r\n\tat line:"+x),g+="\r\n\t"+(w?"translate to:":"expr:"),g+=u+"\r\n\tat file:mx-hour/__test__/index.html"}return f},render:function(){this.updater.digest({viewId:this.id,options:[{key:"simple",desc:"极简模式，默认只区分工作日和双休日，如需每天单独选择，请设置simple=false",type:"boolean",def:"true"},{key:"selected",desc:"<pre>\n当前选中值，week表示周几（1周一，7周日，以此类推），times表示当前选中小时，0 ~ 23\n1. simple = true时\n    selected = [{\n        week: 12345, //工作日\n        times: [2,3,4]\n    },{\n        week: 67, //双休日\n        times: []\n    }]\n\n2. simple = false时\n    selected = [{\n        week: 1, //周一\n        times: [2,3,4]\n    },\n    ...\n    {\n        week: 7, //周日\n        times: [1,2,4]\n    }]\n</pre>",type:"array",def:"[]"},{key:"tip",desc:"右下角提示文案信息",type:"string",def:""}]})}})});