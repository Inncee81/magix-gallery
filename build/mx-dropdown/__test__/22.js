define("mx-dropdown/__test__/22",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,_,t,l,s,a,r,n){if(t||(t=e),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+i[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(d,o)}}if(!a){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(m,u)}}if(!n){var x=/[\\'"]/g;n=function(e){return s(e).replace(x,"\\$&")}}r||(r=function(e,_,t,l){for(l=e[y];--l;)if(e[t=y+l]===_)return t;return e[t=y+e[y]++]=_,t});var v,p,g,y="",f="",w=e.viewId,z=e.text1;try{f+='<div mxa="_zs_gallerya]:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_gallerya]:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerya]:_" class="mb20 clearfix lh22"><div class="fl color-9">以下示例：</div><div class="fl">要求连续选择 + 至少选择一个</div></div><div class="w280" mx-view="mx-dropdown/multiple?min=1&continuous=true&name=%E6%95%B0%E5%AD%97&list=',g=11,p="@[1,2,3,4,5,6]",f+=(v="<%@[1, 2, 3, 4, 5, 6]%>",r(t,[1,2,3,4,5,6])+'"></div></div><div mxa="_zs_gallerya]:b" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerya]:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='),g=15,p="=viewId",f+=(v="<%!$eu(viewId)%>",a(w)+'_text_1"><span mxa="_zs_gallerya]:c" class="_zs_gallery___test___layout_-desc-tip">'),g=17,p="!text1",f+=(v="<%!text1%>",s(z)+'</span><i mxs="_zs_gallerya]:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),g=20,p="=viewId",f+=(v="<%=viewId%>",l(w)+'_text_1">\n&lt;mx-dropdown.multiple class="w280"  \n    min="1"\n    continuous="true"\n    name="数字"\n    list="&#123;&#123;@[1,2,3,4,5,6]&#125;&#125;"/&gt;\n        </pre></div></div>')}catch(e){var h="render view error:"+(e.message||e);throw p&&(h+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+g),h+="\r\n\t"+(p?"translate to:":"expr:"),h+=v+"\r\n\tat file:mx-dropdown/__test__/22.html"}return f},render:function(){this.updater.digest()}})});