define("mx-dropdown/__test__/6",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");t.exports=n.extend({tmpl:function(e,_,t,n,l,a,r,s){if(t||(t=e),!l){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};l=function(e){return""+(null==e?"":e)},n=function(e){return l(e).replace(d,o)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(m,c)}}if(!s){var p=/[\\'"]/g;s=function(e){return l(e).replace(p,"\\$&")}}var u,v,g,y="",w=e.viewId,f=e.text1;try{y+='<div mxa="_zs_galleryba:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryba:_" class="_zs_gallery___test___layout_-eg-content"><div class="w200" mx-view="mx-dropdown/index"><i value="wed" class="none">周三</i><i value="thu" class="none">周四</i></div></div><div mxa="_zs_galleryba:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryba:a" class="_zs_gallery___test___layout_-eg-title">mx-dropdown.item</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',g=14,v="=viewId",y+=(u="<%!$eu(viewId)%>",a(w)+'_text_1"><span mxa="_zs_galleryba:b" class="_zs_gallery___test___layout_-desc-tip">'),g=16,v="!text1",y+=(u="<%!text1%>",l(f)+'</span><i mxs="_zs_galleryba:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=19,v="=viewId",y+=(u="<%=viewId%>",n(w)+'_text_1">\n&lt;mx-dropdown class="w200"&gt;\n    &lt;mx-dropdown.item value="wed"&gt;\n        周三\n    &lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="thu"&gt;\n        周四\n    &lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown&gt;</pre></div></div>')}catch(e){var z="render view error:"+(e.message||e);throw v&&(z+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+g),z+="\r\n\t"+(v?"translate to:":"expr:"),z+=u+"\r\n\tat file:mx-dropdown/__test__/6.html"}return y},render:function(){this.updater.digest()}})});