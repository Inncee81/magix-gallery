define("mx-wanxiang/__test__/demo2",["magix","$"],(a,e,r)=>{var n=a("magix");a("$");r.exports=n.View.extend({tmpl:function(a,e,r,n,s,i,l,o){if(r||(r=a),!s){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(a){return"&"+t[a]+";"};s=function(a){return""+(null==a?"":a)},n=function(a){return s(a).replace(c,d)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(a){return m[a]},g=/[!')(*]/g;i=function(a){return encodeURIComponent(s(a)).replace(g,u)}}if(!o){var _=/[\\'"]/g;o=function(a){return s(a).replace(_,"\\$&")}}var v="";return v+='<div mxa="_zs_galleryeo:_" class="pt40 pl20"><div mxs="_zs_galleryeo:_" class="mb20">点击小象logo展开收起问答框</div><div mxa="_zs_galleryeo:a" class="mb20">当前：路径'+n(a.path)+'</div><div mxs="_zs_galleryeo:a" class="mb20">路径1：<a class="color-brand" href="#!/wanxiang/demo1">跳转sourceId=432</a></div><div mxs="_zs_galleryeo:b" class="mb20">路径2：<a class="color-brand" href="#!/wanxiang/demo2">跳转sourceId=496</a>，跳转到该页面，问答列表刷新</div><div mxs="_zs_galleryeo:c" class="mb20">路径3：<a class="color-brand" href="#!/wanxiang/demo3">跳转sourceId=432</a></div></div>'},render:function(){this.updater.digest({path:2})}})});