define("mx-time/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,l,a,i,r){if(t||(t=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(d,c)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(l(e)).replace(o,m)}}if(!r){var u=/[\\'"]/g;r=function(e){return l(e).replace(u,"\\$&")}}var v,g,y,p="",f=e.viewId,z=e.text1;try{p+='<div mxa="_zs_gallerye(:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerye(:_" class="_zs_gallery___test___layout_-eg-content"><div class="w220" mx-view="mx-time/index?disabled=true&time=10%3A10%3A10"></div></div><div mxa="_zs_gallerye(:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerye(:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=9,g="=viewId",p+=(v="<%!$eu(viewId)%>",a(f)+'_text_1"><span mxa="_zs_gallerye(:b" class="_zs_gallery___test___layout_-desc-tip">'),y=11,g="!text1",p+=(v="<%!text1%>",l(z)+'</span><i mxs="_zs_gallerye(:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=14,g="=viewId",p+=(v="<%=viewId%>",s(f)+'_text_1">\n&lt;mx-time class="w220" \n    disabled="true"\n    time="10:10:10" /&gt;\n        </pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=v+"\r\n\tat file:mx-time/__test__/3.html"}return p},render:function(){this.updater.digest()}})});