define("mx-style/__test__/4",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,a,l)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,a,l,_,t,s,r,i){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,n=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},_=function(e){return t(e).replace(m,n)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(g,c)}}if(!i){var u=/[\\'"]/g;i=function(e){return t(e).replace(u,"\\$&")}}var o,y,v,p="",z=e.viewId,b=e.text1;try{p+='<div mxv mxa="_zs_galleryd?:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_galleryd?:a" class="_zs_gallery___test___layout_-eg-content"><div mxv mxa="_zs_galleryd?:b" class="mb20"><span mxs="_zs_galleryd?:_" class="color-9 mr10">动效：</span><label mxv mxa="_zs_galleryd?:c" class="mr20"><input mxs="_zs_galleryd?:a" type="radio" class="anim-radio" value="1" name="magix" checked="true"/> 选中</label><label mxv mxa="_zs_galleryd?:d" class="mr20"><input mxs="_zs_galleryd?:b" type="radio" class="anim-radio" value="2" name="magix"/> 未选中</label><label mxv mxa="_zs_galleryd?:e" class="mr20"><input mxs="_zs_galleryd?:c" type="radio" class="anim-radio" value="3" name="magix" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryd?:d" type="radio" class="anim-radio" value="3" name="magix2" checked="true" disabled="true"/> 选中禁止选择</label></div><div mxv><span mxs="_zs_galleryd?:e" class="color-9 mr10">普通：</span><label mxv mxa="_zs_galleryd?:f" class="mr20"><input mxs="_zs_galleryd?:f" type="radio" value="1" name="magix3" checked="true"/> 选中</label><label mxv mxa="_zs_galleryd?:g" class="mr20"><input mxs="_zs_galleryd?:g" type="radio" value="2" name="magix3"/> 未选中</label><label mxv mxa="_zs_galleryd?:h" class="mr20"><input mxs="_zs_galleryd?:h" type="radio" value="3" name="magix3" disabled="true"/> 未选中禁止选择</label><label mxv><input mxs="_zs_galleryd?:i" type="radio" value="3" name="magix4" checked="true" disabled="true"/> 选中禁止选择</label></div></div><div mxa="_zs_galleryd?:i" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd?:j" class="_zs_gallery___test___layout_-eg-title">Radio</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode=',v=44,y="=viewId",p+=(o="<%!$eu(viewId)%>",s(z)+'_text_1"><span mxa="_zs_galleryd?:j" class="_zs_gallery___test___layout_-desc-tip">'),v=46,y="!text1",p+=(o="<%!text1%>",t(b)+'</span><i mxs="_zs_galleryd?:k" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),v=49,y="=viewId",p+=(o="<%=viewId%>",_(z)+'_text_1">\n&lt;label class="mr20"&gt;\n    &lt;input type="radio" class="anim-radio"\n        value="1" name="magix" checked="true"/&gt;\n    动效加className（anim-radio）\n&lt;/label&gt;\n\n&lt;label class="mr20"&gt;\n    &lt;input type="radio"  \n        value="2" name="magix2" checked="true"/&gt;\n    普通无动效\n&lt;/label&gt;</pre></div></div>')}catch(e){var f="render view error:"+(e.message||e);throw y&&(f+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+v),f+="\r\n\t"+(y?"translate to:":"expr:"),f+=o+"\r\n\tat file:mx-style/__test__/4.html"}return p},render:function(){this.updater.digest()}})});