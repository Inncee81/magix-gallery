define("mx-form/__test__/3",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,a,l)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example"),n=e("mx-form/index"),_=e("mx-form/validator");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,n,_,r,s){if(l||(l=e),!n){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+i[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(m,x)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return c[e]},d=/[!')(*]/g;_=function(e){return encodeURIComponent(n(e)).replace(d,u)}}if(!s){var p=/[\\'"]/g;s=function(e){return n(e).replace(p,"\\$&")}}var o="",v=e.name,f=e.viewId,g=e.text1;return o+='<div mxv mxa="_zs_galleryb#:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb#:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryb#:b" class="mb20"><input mxe="'+a+'_0" mxc="[{p:\'name\',f:{pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w280 mr20" placeholder="正则：汉字/字母/数字/下划线" value="'+t(v)+'"/> <input mxe="'+a+'_1" mxc="[{p:\'name\',f:{pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']}}]" class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" value="'+t(v)+'"/></div></div><div mxa="_zs_galleryb#:c" class="_zs_galleryk"><div mxs="_zs_galleryb#:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(f)+'_text_1"><span mxa="_zs_galleryb#:d" class="_zs_galleryn">'+n(g)+'</span><i mxs="_zs_galleryb#:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+'_text_1">\n&lt;input class="input w280" placeholder="正则：汉字/字母/数字/下划线"         \n    value="&#123;&#123;:name&#123;pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" \n    value="&#123;&#123;:name&#123;pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[n,_],render:function(){this.updater.digest()}})});