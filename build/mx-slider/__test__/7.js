define("mx-slider/__test__/7",["magix","__test__/example","$","../range","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../range"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");t.exports=a.extend({tmpl:function(e,_,t,a,l,r,s,i){if(t||(t=e),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};l=function(e){return""+(null==e?"":e)},a=function(e){return l(e).replace(d,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!i){var v=/[\\'"]/g;i=function(e){return l(e).replace(v,"\\$&")}}var u,g,y,p="",f=e.viewId,z=e.text1;try{p+='<div mxa="_zs_galleryd!:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryd!:_" class="_zs_gallery___test___layout_-eg-content"><div class="pt20 pb20"><div mx-view="mx-slider/range?max=200&min=100&value=120%2C150&disabled=true"></div></div></div><div mxa="_zs_galleryd!:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd!:a" class="_zs_gallery___test___layout_-eg-title">禁止选择</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode=',y=13,g="=viewId",p+=(u="<%!$eu(viewId)%>",r(f)+'_text_1"><span mxa="_zs_galleryd!:b" class="_zs_gallery___test___layout_-desc-tip">'),y=15,g="!text1",p+=(u="<%!text1%>",l(z)+'</span><i mxs="_zs_galleryd!:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=18,g="=viewId",p+=(u="<%=viewId%>",a(f)+'_text_1">\n&lt;mx-slider.range\n    max="200"\n    min="100"\n    value="120,150"\n    disabled="true"/&gt;</pre></div></div>')}catch(e){var w="render view error:"+(e.message||e);throw g&&(w+="\r\n\tsrc art:{{"+g+"}}\r\n\tat line:"+y),w+="\r\n\t"+(g?"translate to:":"expr:"),w+=u+"\r\n\tat file:mx-slider/__test__/7.html"}return p},render:function(){this.updater.digest()}})});