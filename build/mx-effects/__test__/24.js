define("mx-effects/__test__/24",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example");e("$");t.exports=s.extend({tmpl:function(e,_,t,s,r,l,n,a){if(t||(t=e),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(c,o)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},m=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(m,g)}}if(!a){var x=/[\\'"]/g;a=function(e){return r(e).replace(x,"\\$&")}}var p,v,f,u="",y=e.viewId,b=e.text1;try{u+='<div mxa="_zs_gallerybK:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybK:_" class="_zs_gallery___test___layout_-eg-content"><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60&color=%23ffb400"></div><div mx-view="mx-effects/progress?type=degree&num=80&color=rgb%2881%2C%20163%2C%200%29"></div></div></div><div mxa="_zs_gallerybK:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybK:a" class="_zs_gallery___test___layout_-eg-title">自定义颜色</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',f=17,v="=viewId",u+=(p="<%!$eu(viewId)%>",l(y)+'_text_1"><span mxa="_zs_gallerybK:b" class="_zs_gallery___test___layout_-desc-tip">'),f=19,v="!text1",u+=(p="<%!text1%>",r(b)+'</span><i mxs="_zs_gallerybK:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),f=22,v="=viewId",u+=(p="<%=viewId%>",s(y)+'_text_1">\n&lt;mx-effects.progress\n    type="degree"\n    num="60" \n    color="#ffb400"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="80" \n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>')}catch(e){var z="render view error:"+(e.message||e);throw v&&(z+="\r\n\tsrc art:{{"+v+"}}\r\n\tat line:"+f),z+="\r\n\t"+(v?"translate to:":"expr:"),z+=p+"\r\n\tat file:mx-effects/__test__/24.html"}return u},render:function(){this.updater.digest()}})});