define("mx-effects/__test__/23",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,r,l,a,n){if(t||(t=e),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(c,o)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(m,d)}}if(!n){var g=/[\\'"]/g;n=function(e){return r(e).replace(g,"\\$&")}}var u,v,p,y="",f=e.viewId,z=e.text2;try{y+='<div mxa="_zs_gallerybJ:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybJ:_" class="_zs_gallery___test___layout_-eg-content"><div mx-view="mx-effects/progress?text=false&num=60.555"></div></div><div mxa="_zs_gallerybJ:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybJ:a" class="_zs_gallery___test___layout_-eg-title">不需要文案</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:2})" mx-view="mx-copy/index?copyNode=',p=9,v="=viewId",y+=(u="<%!$eu(viewId)%>",l(f)+'_text_2"><span mxa="_zs_gallerybJ:b" class="_zs_gallery___test___layout_-desc-tip">'),p=11,v="!text2",y+=(u="<%!text2%>",r(z)+'</span><i mxs="_zs_gallerybJ:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),p=14,v="=viewId",y+=(u="<%=viewId%>",s(f)+'_text_2">\n&lt;mx-effects.progress\n    text="false"\n    num="60.12"/&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw v&&(w+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+p),w+="\r\n\t"+(v?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-effects/__test__/23.html"}return y},render:function(){this.updater.digest()}})});