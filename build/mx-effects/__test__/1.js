define("mx-effects/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,_)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");_.exports=s.extend({tmpl:function(e,t,_,s,a,i,l,n){if(_||(_=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(c,d)}}if(!i){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return v[e]},m=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(m,o)}}if(!n){var x=/[\\'"]/g;n=function(e){return a(e).replace(x,"\\$&")}}var y,p,g,u="",f=e.viewId,z=e.text1;try{u+='<div mxa="_zs_gallerybv:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybv:_" class="_zs_gallery___test___layout_-eg-content"><div class="empty-area mb20"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>暂无内容</div></div></div><div content="自定义文案" class="empty-area"><div class="empty-inner"><div><i class="mc-iconfont no-data">&#xe685;</i></div><div>自定义文案</div></div></div></div><div mxa="_zs_gallerybv:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybv:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',g=9,p="=viewId",u+=(y="<%!$eu(viewId)%>",i(f)+'_text_1"><span mxa="_zs_gallerybv:b" class="_zs_gallery___test___layout_-desc-tip">'),g=11,p="!text1",u+=(y="<%!text1%>",a(z)+'</span><i mxs="_zs_gallerybv:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=14,p="=viewId",u+=(y="<%=viewId%>",s(f)+'_text_1">\n&lt;mx-effects.empty/&gt;\n\n&lt;mx-effects.empty content="自定义文案"/&gt;</pre></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw p&&(b+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+g),b+="\r\n\t"+(p?"translate to:":"expr:"),b+=y+"\r\n\tat file:mx-effects/__test__/1.html"}return u},render:function(){this.updater.digest()}})});