define("mx-form/__test__/6",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,a)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example"),t=e("mx-form/index"),r=e("mx-form/validator");e("$");a.exports=n.extend({tmpl:function(e,l,a,n,t,r,i,_){if(a||(a=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(s,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(p,u)}}if(!_){var d=/[\\'"]/g;_=function(e){return t(e).replace(d,"\\$&")}}var o="",g=e.number,v=e.viewId,f=e.text1;return o+='<div mxv mxa="_zs_galleryca:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryca:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryca:b" class="clearfix"><input mxe="'+l+'_0" mxc="[{p:\'number\',f:{blength:[4, 8]}}]" class="input mr20 mb20" placeholder="4到8个字符之间" value="'+n(g)+'"/> <input mxe="'+l+'_1" mxc="[{p:\'number\',f:{bminlength:2}}]" class="input mr20 mb20" placeholder="最少2个字符" value="'+n(g)+'"/> <input mxe="'+l+'_2" mxc="[{p:\'number\',f:{bmaxlength:3}}]" class="input mr20 mb20" placeholder="最多3个字符" value="'+n(g)+'"/></div></div><div mxa="_zs_galleryca:c" class="_zs_galleryk"><div mxs="_zs_galleryca:_" class="_zs_galleryi">字符个数（一个汉字两个字符）</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_galleryca:d" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_galleryca:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_1">\n&lt;input class="input" placeholder="4到8个字之间" value="&#123;&#123;:number&#123;blength:[4, 8]&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最少2个字" value="&#123;&#123;:number&#123;bminlength:2&#125;&#125;&#125;"/&gt;\n\n&lt;input class="input" placeholder="最多3个字" value="&#123;&#123;:number&#123;bmaxlength:3&#125;&#125;&#125;"/&gt;</pre></div></div>'},mixins:[t,r],render:function(){this.updater.digest()}})});