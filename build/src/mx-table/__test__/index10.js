define("mx-table/__test__/index10",["magix","$","__test__/subs","mx-title/second","./8","./18","__test__/api"],(e,t,i)=>{e("__test__/subs"),e("mx-title/second"),e("./8"),e("./18"),e("__test__/api");var d=e("magix");e("$");i.exports=d.View.extend({tmpl:function(e,t,i,d,r,s,n,_){if(i||(i=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,m=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},d=function(e){return r(e).replace(a,m)}}if(!s){var l={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return l[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(c,v)}}if(!_){var y=/[\\'"]/g;_=function(e){return r(e).replace(y,"\\$&")}}n||(n=function(e,t,i,d){for(d=e[x];--d;)if(e[i=x+d]===t)return i;return e[i=x+e[x]++]=t,i});var x="",p="",u=e.viewId,f=e.options;return p+='<div mxv mxa="_zs_galleryeq:_" class="pr pr120"><div mx-view="__test__/subs?list='+n(i,[{name:"使用示例",key:u+"_demo",subs:[{name:"本页排序",key:u+"_demo1"},{name:"默认某个指标排序",key:u+"_demo2"},{name:"自定义路由参数",key:u+"_demo2"}]},{name:"API",key:u+"_api"},{name:"Methods",key:u+"_method"}])+'"></div><div id="'+d(u)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeq:a" class="mb20 clearfix"><div mx-view="mx-table/__test__/8" id="'+d(u)+'_demo1"></div><div mx-view="mx-table/__test__/18" id="'+d(u)+'_demo2"></div></div><div id="'+d(u)+'_api" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options='+n(i,f)+'" class="mb40"></div><div id="'+d(u)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryeq:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>sort</td><td>mixin中实现本页排序，如果从接口获取排序则忽略此方法</td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id,options:[{key:"sort-trigger",desc:"需要排序的字段key值",type:"string"},{key:"order-field-key",desc:"保留在路由上的排序字段",type:"string",def:"orderField"},{key:"order-by-key",desc:"保留在路由上的排序方式，降序（desc），升序（asc）",type:"string",def:"orderBy"},{key:"sort-field",desc:"当前是哪个字段进行排序，用于指定某个指标进行默认排序",type:"string",def:""},{key:"sort-orderby",desc:"当前是那种排序方式，用于指定某个指标进行默认排序时，指定排序方式",type:"string",def:""}]})}})});