define("mx-pagination/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");_.exports=i.extend({tmpl:function(e,t,_,i,a,n,s,l){if(_||(_=e),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(o,c)}}if(!n){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!l){var m=/[\\'"]/g;l=function(e){return a(e).replace(m,"\\$&")}}var p,u,v,y="",f=e.viewId,z=e.text1;try{y+='<div mxa="_zs_galleryc;:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryc;:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20" mx-view="mx-pagination/index?simplify=true&total=100&size=30&offset=30"></div><div mx-view="mx-pagination/index?simplify=true&total=100&size=30&page=3&offset=30"></div></div><div mxa="_zs_galleryc;:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc;:a" class="_zs_gallery___test___layout_-eg-title">优先级 page &gt; offset</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',v=18,u="=viewId",y+=(p="<%!$eu(viewId)%>",n(f)+'_text_1"><span mxa="_zs_galleryc;:b" class="_zs_gallery___test___layout_-desc-tip">'),v=20,u="!text1",y+=(p="<%!text1%>",a(z)+'</span><i mxs="_zs_galleryc;:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=23,u="=viewId",y+=(p="<%=viewId%>",i(f)+'_text_1">\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    offset="30"/&gt;\n\n&lt;mx-pagination \n    simplify="true"\n    total="100" \n    size="30" \n    page="3"\n    offset="30"/&gt;\n        </pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw u&&(w+="\r\n\tsrc art:{{"+u+"}}\r\n\tat line:"+v),w+="\r\n\t"+(u?"translate to:":"expr:"),w+=p+"\r\n\tat file:mx-pagination/__test__/5.html"}return y},render:function(){this.updater.digest()}})});