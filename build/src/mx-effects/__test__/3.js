define("mx-effects/__test__/3",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var c=e("__test__/example");e("$");n.exports=c.extend({tmpl:function(e,t,n,c,i,s,l,a){if(n||(n=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},c=function(e){return i(e).replace(o,r)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},f=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(f,m)}}if(!a){var d=/[\\'"]/g;a=function(e){return i(e).replace(d,"\\$&")}}var v="",E=e.viewId,g=e.text1;return v+='<div mxa="_zs_gallerya2:_" class="_zs_galleryf"><div mxs="_zs_gallerya2:_" class="_zs_galleryh"><div class="mb20" mx-view="mx-effects/notice?content=%E6%99%AE%E9%80%9A%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?content=%E6%97%A0icon%E6%8F%90%E7%A4%BA&icon=false"></div><div class="mb20" mx-view="mx-effects/notice?content=%E6%99%AE%E9%80%9A%E5%B1%85%E4%B8%AD%E6%8F%90%E7%A4%BA&textAlign=center"></div><div class="mb20" mx-view="mx-effects/notice?border=true&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E7%9A%84%E6%99%AE%E9%80%9A%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?border=true&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E7%9A%84%E6%97%A0icon%E6%8F%90%E7%A4%BA&icon=false"></div></div><div mxa="_zs_gallerya2:a" class="_zs_galleryi"><div mxs="_zs_gallerya2:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(E)+'_text_1"><span mxa="_zs_gallerya2:b" class="_zs_galleryl">'+i(g)+'</span><i mxs="_zs_gallerya2:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+c(E)+'_text_1">\n&lt;mx-effects.notice \n    content="普通提示"/&gt;\n\n&lt;mx-effects.notice \n    content="无icon提示" \n    icon="false"/&gt;\n\n&lt;mx-effects.notice \n    content="普通居中提示" \n    text-align="center"/&gt;\n\n&lt;mx-effects.notice \n    content="带边框的普通提示"\n    border="true"/&gt;\n\n&lt;mx-effects.notice \n    content="带边框的无icon提示" \n    border="true" \n    icon="false"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});