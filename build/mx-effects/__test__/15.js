define("mx-effects/__test__/15",["magix","__test__/example","$","../icon","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../icon"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");_.exports=n.extend({tmpl:function(e,t,_,n,s,l,o,a){if(_||(_=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,i=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},n=function(e){return s(e).replace(c,i)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},d=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(d,x)}}if(!a){var p=/[\\'"]/g;a=function(e){return s(e).replace(p,"\\$&")}}var f,g,y,v="",u=e.viewId,w=e.text1;try{v+='<div mxa="_zs_gallerybA:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybA:_" class="_zs_gallery___test___layout_-eg-content"><span class="mr10" mx-view="mx-effects/icon?mode=hollow&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=error&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=warn&content=%E6%B5%8B%E8%AF%95"></span><span class="mr10" mx-view="mx-effects/icon?mode=hollow&type=highlight&content=%E6%B5%8B%E8%AF%95"></span></div><div mxa="_zs_gallerybA:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybA:a" class="_zs_gallery___test___layout_-eg-title">空心打标</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=10,g="=viewId",v+=(f="<%!$eu(viewId)%>",l(u)+'_text_1"><span mxa="_zs_gallerybA:b" class="_zs_gallery___test___layout_-desc-tip">'),y=12,g="!text1",v+=(f="<%!text1%>",s(w)+'</span><i mxs="_zs_gallerybA:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=15,g="=viewId",v+=(f="<%=viewId%>",n(u)+'_text_1">\n&lt;mx-effects.icon mode="hollow" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="error" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="warn" content="测试"/&gt;\n\n&lt;mx-effects.icon mode="hollow" type="highlight" content="测试"/&gt;</pre></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw g&&(h+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),h+="\r\n\t"+(g?"translate to:":"expr:"),h+=f+"\r\n\tat file:mx-effects/__test__/15.html"}return v},render:function(){this.updater.digest()}})});