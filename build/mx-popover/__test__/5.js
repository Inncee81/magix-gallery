define("mx-popover/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,l,r,a,i){if(t||(t=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(d,o)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(p,c)}}if(!i){var v=/[\\'"]/g;i=function(e){return l(e).replace(v,"\\$&")}}var m,g,u,y="",f=e.viewId,z=e.text1;try{y+='<div mxa="_zs_gallerydx:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerydx:_" class="_zs_gallery___test___layout_-eg-content"><div class="w100 ellipsis" mx-view="mx-popover/index?content=%E8%B6%85%E9%95%BF%E5%86%85%E5%AE%B9%E7%BC%A9%E7%95%A5%E6%98%BE%E7%A4%BA">内容超长部分缩略点显示</div></div><div mxa="_zs_gallerydx:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydx:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',u=9,g="=viewId",y+=(m="<%!$eu(viewId)%>",r(f)+'_text_1"><span mxa="_zs_gallerydx:b" class="_zs_gallery___test___layout_-desc-tip">'),u=11,g="!text1",y+=(m="<%!text1%>",l(z)+'</span><i mxs="_zs_gallerydx:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=14,g="=viewId",y+=(m="<%=viewId%>",s(f)+'_text_1">\n&lt;mx-popover class="w100 ellipsis"\n    tag="div"\n    content="超长内容缩略显示"&gt;内容超长部分缩略点显示&lt;/mx-popover&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+u),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=m+"\r\n\tat file:mx-popover/__test__/5.html"}return y},render:function(){this.updater.digest()}})});