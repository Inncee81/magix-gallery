define("mx-dropdown/__test__/10",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,t)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");t.exports=i.extend({tmpl:function(e,l,t,i,n,a,s,r){if(t||(t=e),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+_[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(d,m)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return o[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(c,x)}}if(!r){var p=/[\\'"]/g;r=function(e){return n(e).replace(p,"\\$&")}}s||(s=function(e,l,t,i){for(i=e[u];--i;)if(e[t=u+i]===l)return t;return e[t=u+e[u]++]=l,t});var u="",g="",v=e.viewId,w=e.text1;return g+='<div mxa="_zs_galleryak:_" class="_zs_galleryf"><div mxa="_zs_galleryak:a" class="_zs_galleryh"><div mxa="_zs_galleryak:b" class="mb20"><div class="w200" mx-view="mx-dropdown/multiple?list='+s(t,[1,2,3])+'"></div></div><div mxs="_zs_galleryak:_" class="w200" mx-view="mx-dropdown/multiple"><i value="1" class="none">1</i><i value="2" class="none">2</i><i value="3" class="none">3</i></div></div><div mxa="_zs_galleryak:c" class="_zs_galleryi"><div mxs="_zs_galleryak:a" class="_zs_galleryg">显示文案和前后端传递值一致</div><div class="_zs_galleryj" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryak:d" class="_zs_galleryl">'+n(w)+'</span><i mxs="_zs_galleryak:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@[1,2,3]&#125;&#125;"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"&gt;\n    &lt;mx-dropdown.item value="1"&gt;1&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="2"&gt;2&lt;/mx-dropdown.item&gt;\n    &lt;mx-dropdown.item value="3"&gt;3&lt;/mx-dropdown.item&gt;\n&lt;/mx-dropdown.multiple&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});