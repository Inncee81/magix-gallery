define("mx-footer/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");t.exports=r.extend({tmpl:function(e,_,t,r,s,l,a,i){if(t||(t=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(o,d)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(s(e)).replace(m,c)}}if(!i){var v=/[\\'"]/g;i=function(e){return s(e).replace(v,"\\$&")}}var u,g,y,p="",f=e.viewId,z=e.text1;try{p+='<div mxa="_zs_galleryb(:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryb(:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-footer/index"></div></div><div mxa="_zs_galleryb(:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryb(:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=7,g="=viewId",p+=(u="<%!$eu(viewId)%>",l(f)+'_text_1"><span mxa="_zs_galleryb(:b" class="_zs_gallery___test___layout_-desc-tip">'),y=9,g="!text1",p+=(u="<%!text1%>",s(z)+'</span><i mxs="_zs_galleryb(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=12,g="=viewId",p+=(u="<%=viewId%>",r(f)+'_text_1">\n&lt;mx-footer/&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-footer/__test__/1.html"}return p},render:function(){this.updater.digest()}})});