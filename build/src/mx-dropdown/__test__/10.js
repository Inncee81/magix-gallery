define("mx-dropdown/__test__/10",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("$");t.exports=n.extend({tmpl:function(e,l,t,n,a,i,s,r){if(t||(t=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(d,m)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},c=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(c,x)}}if(!r){var p=/[\\'"]/g;r=function(e){return a(e).replace(p,"\\$&")}}s||(s=function(e,l,t,n){for(n=e[u];--n;)if(e[t=u+n]===l)return t;return e[t=u+e[u]++]=l,t});var u="",v="",g=e.viewId,z=e.text1;return v+='<div mxa="_zs_galleryaz:_" class="_zs_galleryh"><div mxa="_zs_galleryaz:a" class="_zs_galleryk"><div mxa="_zs_galleryaz:b" class="mb20"><div class="w200" mx-view="mx-dropdown/multiple?needAll=false&list='+s(t,[1,2,3])+'"></div></div><div mxs="_zs_galleryaz:_" class="w200" mx-view="mx-dropdown/multiple?needAll=false"><i value="1" class="none">1</i><i value="2" class="none">2</i><i value="3" class="none">3</i></div></div><div mxa="_zs_galleryaz:c" class="_zs_galleryl"><div mxs="_zs_galleryaz:a" class="_zs_galleryj">显示文案和前后端传递值一致</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(g)+'_text_1"><span mxa="_zs_galleryaz:d" class="_zs_galleryo">'+a(z)+'</span><i mxs="_zs_galleryaz:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(g)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    need-all="false"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    need-all="false"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="3"&gt;3&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});