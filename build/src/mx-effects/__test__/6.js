define("mx-effects/__test__/6",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");n.exports=r.extend({tmpl:function(e,t,n,r,l,i,c,s){if(n||(n=e),!l){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(a,o)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},g=/[!')(*]/g;i=function(e){return encodeURIComponent(l(e)).replace(g,d)}}if(!s){var E=/[\\'"]/g;s=function(e){return l(e).replace(E,"\\$&")}}var m="",f=e.viewId,v=e.text1;return m+='<div mxa="_zs_gallerya5:_" class="_zs_galleryf"><div mxs="_zs_gallerya5:_" class="_zs_galleryh"><div class="mb20" mx-view="mx-effects/notice?color=rgb%2881%2C%20163%2C%200%29&content=%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?color=rgb%2881%2C%20163%2C%200%29&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E6%8F%90%E7%A4%BA&border=true"></div><div class="mb20" mx-view="mx-effects/notice?color=rgb%2881%2C%20163%2C%200%29&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E8%87%AA%E5%AE%9A%E4%B9%89%E9%A2%9C%E8%89%B2%E5%B1%85%E5%8F%B3%E6%8F%90%E7%A4%BA&textAlign=right&border=true"></div></div><div mxa="_zs_gallerya5:a" class="_zs_galleryi"><div mxs="_zs_gallerya5:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerya5:b" class="_zs_galleryl">'+l(v)+'</span><i mxs="_zs_gallerya5:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(f)+'_text_1">\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="自定义颜色提示"/&gt;\n\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="带边框自定义颜色提示" \n    border="true"/&gt;\n\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="带边框自定义颜色居右提示" \n    text-align="right" \n    border="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});