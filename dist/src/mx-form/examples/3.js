define("mx-form/examples/3",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,a,l)=>{e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example"),m=e("mx-form/index"),r=e("mx-form/validator");e("$");l.exports=n.extend({tmpl:function(e,a,l,n,m,r,s,i){if(l||(l=e),!m){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+t[e]+";"};m=function(e){return""+(null==e?"":e)},n=function(e){return m(e).replace(x,c)}}if(!r){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return p[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(m(e)).replace(u,_)}}if(!i){var d=/[\\'"]/g;i=function(e){return m(e).replace(d,"\\$&")}}var o="",v=e.name,f=e.viewId,g=e.text1;return o+='<div mxv mxa="_zs_gallerycm:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycm:a" class="_zs_galleryj"><div mxv mxa="_zs_gallerycm:b" class="mb20"><input mxe="'+a+'_0" mxc="[{p:\'name\',f:{pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'}}]" class="input w280 mr20" placeholder="正则：汉字/字母/数字/下划线" value="'+n(v)+'"/> <input mxe="'+a+'_1" mxc="[{p:\'name\',f:{pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']}}]" class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" value="'+n(v)+'"/></div></div><div mxa="_zs_gallerycm:c" class="_zs_galleryk"><div mxs="_zs_gallerycm:_" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_gallerycm:d" class="_zs_galleryn">'+m(g)+'</span><i mxs="_zs_gallerycm:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(f)+'_text_1">\n&lt;input class="input w280" placeholder="正则：汉字/字母/数字/下划线"         \n    value="&#123;&#123;:name&#123;pattern:\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\'&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input w280" placeholder="正则自定义提示：汉字/字母/数字/下划线" \n    value="&#123;&#123;:name&#123;pattern:[\'^[a-zA-Z0-9_\\u4e00-\\u9fa5]+$\', \'只支持汉字、字母、数字、下划线\']&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[m,r],render:function(){this.updater.digest()}})});