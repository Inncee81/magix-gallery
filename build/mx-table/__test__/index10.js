define("mx-table/__test__/index10",["magix","$","__test__/subs","mx-title/second","./8","./18","__test__/api"],(e,t,d)=>{e("__test__/subs"),e("mx-title/second"),e("./8"),e("./18"),e("__test__/api");var i=e("magix");e("$");d.exports=i.View.extend({tmpl:function(e,t,d,i,n,r,_,s){if(d||(d=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(a,m)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(e){return v[e]},y=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(y,l)}}if(!s){var c=/[\\'"]/g;s=function(e){return n(e).replace(c,"\\$&")}}_||(_=function(e,t,d,i){for(i=e[I];--i;)if(e[d=I+i]===t)return d;return e[d=I+e[I]++]=t,d});var w,p,x,I="",u="",k=e.viewId,f=e.options;try{u+='<div mxv mxa="_zs_galleryeG:_" class="pr pr120"><div mx-view="__test__/subs?list=',x=2,p="@[{\n        name: '使用示例',\n        key: viewId + '_demo',\n        subs: [{\n            name: '本页排序',\n            key: viewId + '_demo1',\n        }, {\n            name: '默认某个指标排序',\n            key: viewId + '_demo2',\n        }, {\n            name: '自定义路由参数',\n            key: viewId + '_demo2',\n        }]\n    }, {\n        name: 'API',\n        key: viewId + '_api'\n    }, {\n        name: 'Methods',\n        key: viewId + '_method'\n    }]",u+=(w="<%@[{            name: '使用示例',            key: viewId + '_demo',            subs: [{                    name: '本页排序',                    key: viewId + '_demo1'                }, {                    name: '默认某个指标排序',                    key: viewId + '_demo2'                }, {                    name: '自定义路由参数',                    key: viewId + '_demo2'                }]        }, {            name: 'API',            key: viewId + '_api'        }, {            name: 'Methods',            key: viewId + '_method'        }]%>",_(d,[{name:"使用示例",key:k+"_demo",subs:[{name:"本页排序",key:k+"_demo1"},{name:"默认某个指标排序",key:k+"_demo2"},{name:"自定义路由参数",key:k+"_demo2"}]},{name:"API",key:k+"_api"},{name:"Methods",key:k+"_method"}])+'"></div><div id="'),x=23,p="=viewId",u+=(w="<%=viewId%>",i(k)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeG:a" class="mb20 clearfix"><div mx-view="mx-table/__test__/8" id="'),x=25,p="=viewId",u+=(w="<%=viewId%>",i(k)+'_demo1"></div><div mx-view="mx-table/__test__/18" id="'),x=26,p="=viewId",u+=(w="<%=viewId%>",i(k)+'_demo2"></div></div><div id="'),x=29,p="=viewId",u+=(w="<%=viewId%>",i(k)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='),x=30,p="@options",u+=(w="<%@options%>",_(d,f)+'" class="mb40"></div><div id="'),x=32,p="=viewId",u+=(w="<%=viewId%>",i(k)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryeG:_" class="pr20"><table class="table _zs_gallery___test___layout_-desc-table"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>sort</td><td>mixin中实现本页排序，如果从接口获取排序则忽略此方法</td></tr></tbody></table></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw p&&(h+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+x),h+="\r\n\t"+(p?"translate to:":"expr:"),h+=w+"\r\n\tat file:mx-table/__test__/index10.html"}return u},render:function(){this.updater.digest({viewId:this.id,options:[{key:"sort-trigger",desc:"需要排序的字段key值",type:"string"},{key:"order-field-key",desc:"保留在路由上的排序字段",type:"string",def:"orderField"},{key:"order-by-key",desc:"保留在路由上的排序方式，降序（desc），升序（asc）",type:"string",def:"orderBy"},{key:"sort-field",desc:"当前是哪个字段进行排序，用于指定某个指标进行默认排序",type:"string",def:""},{key:"sort-orderby",desc:"当前是那种排序方式，用于指定某个指标进行默认排序时，指定排序方式",type:"string",def:""}]})}})});