define("mx-loading/__test__/7",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,t,l)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,t,l,_,i,a,s,n){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},_=function(e){return i(e).replace(r,c)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return o[e]},x=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(x,g)}}if(!n){var v=/[\\'"]/g;n=function(e){return i(e).replace(v,"\\$&")}}var m,p,u,y="",f=e.viewId,b=e.text1;try{y+='<div mxa="_zs_galleryc4:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_galleryc4:_" class="_zs_gallery___test___layout_-eg-content clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-cube1 mx-loading-bg-grey"></div><div class="mx-loading-cube2 mx-loading-bg-grey"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-cube1 mx-loading-bg-brand"></div><div class="mx-loading-cube2 mx-loading-bg-brand"></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-cube1" style="background-color:#51a300"></div><div class="mx-loading-cube2" style="background-color:#51a300"></div></div></div></div><div mxa="_zs_galleryc4:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryc4:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode=',u=9,p="=viewId",y+=(m="<%!$eu(viewId)%>",a(f)+'_text_1"><span mxa="_zs_galleryc4:b" class="_zs_gallery___test___layout_-desc-tip">'),u=11,p="!text1",y+=(m="<%!text1%>",i(b)+'</span><i mxs="_zs_galleryc4:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),u=14,p="=viewId",y+=(m="<%=viewId%>",_(f)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="cubes" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="cubes" type="brand" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="cubes" color="#51a300" /&gt;</pre></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw p&&(h+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+u),h+="\r\n\t"+(p?"translate to:":"expr:"),h+=m+"\r\n\tat file:mx-loading/__test__/7.html"}return y},render:function(){this.updater.digest()}})});