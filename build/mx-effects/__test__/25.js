define("mx-effects/__test__/25",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,l,r,i,a){if(t||(t=e),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(n,d)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},y=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(y,x)}}if(!a){var m=/[\\'"]/g;a=function(e){return l(e).replace(m,"\\$&")}}var g,v,p,u="",f=e.viewId,z=e.text1,w=e.text2;try{u+='<div mxa="_zs_gallerybM:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybM:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-effects/progress?type=circle&width=80&num=40"></div><div mx-view="mx-effects/progress?type=circle&border=4&num=40"></div></div><div mxa="_zs_gallerybM:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybM:a" class="_zs_gallery___test___layout_-eg-title">自定义width</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',p=15,v="=viewId",u+=(g="<%!$eu(viewId)%>",r(f)+'_text_1"><span mxa="_zs_gallerybM:b" class="_zs_gallery___test___layout_-desc-tip">'),p=17,v="!text1",u+=(g="<%!text1%>",l(z)+'</span><i mxs="_zs_gallerybM:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=20,v="=viewId",u+=(g="<%=viewId%>",s(f)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    width="80"\n    num="40"/&gt;</pre></div><div mxa="_zs_gallerybM:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybM:c" class="_zs_gallery___test___layout_-eg-title">自定义border</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode='),p=28,v="=viewId",u+=(g="<%!$eu(viewId)%>",r(f)+'_text_2"><span mxa="_zs_gallerybM:d" class="_zs_gallery___test___layout_-desc-tip">'),p=30,v="!text2",u+=(g="<%!text2%>",l(w)+'</span><i mxs="_zs_gallerybM:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=33,v="=viewId",u+=(g="<%=viewId%>",s(f)+'_text_2">\n&lt;mx-effects.progress\n    type="circle"\n    border="4"\n    num="40"/&gt;</pre></div></div>')}catch(e){var b="render view error:"+(e.message||e);throw v&&(b+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+p),b+="\r\n\t"+(v?"translate to:":"expr:"),b+=g+"\r\n\tat file:mx-effects/__test__/25.html"}return u},render:function(){this.updater.digest()}})});