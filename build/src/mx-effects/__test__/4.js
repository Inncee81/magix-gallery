define("mx-effects/__test__/4",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");n.exports=r.extend({tmpl:function(e,t,n,r,i,s,l,_){if(n||(n=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,o=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(a,o)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(d,m)}}if(!_){var f=/[\\'"]/g;_=function(e){return i(e).replace(f,"\\$&")}}var g="",v=e.viewId,p=e.text1;return g+='<div mxa="_zs_gallerya\\:_" class="_zs_galleryh"><div mxs="_zs_gallerya\\:_" class="_zs_galleryk"><div class="mb20" mx-view="mx-effects/notice?type=error&content=%E9%94%99%E8%AF%AF%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?type=error&content=%E9%94%99%E8%AF%AF%E5%B1%85%E4%B8%AD%E6%8F%90%E7%A4%BA&textAlign=center"></div><div class="mb20" mx-view="mx-effects/notice?type=error&border=true&textAlign=center&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E7%9A%84%E9%94%99%E8%AF%AF%E5%B1%85%E4%B8%AD%E6%8F%90%E7%A4%BA"></div></div><div mxa="_zs_gallerya\\:a" class="_zs_galleryl"><div mxs="_zs_gallerya\\:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerya\\:b" class="_zs_galleryo">'+i(p)+'</span><i mxs="_zs_gallerya\\:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(v)+'_text_1">\n&lt;mx-effects.notice \n    type="error"\n    content="错误提示"/&gt;\n\n&lt;mx-effects.notice \n    type="error"\n    content="错误居中提示" \n    text-align="center"/&gt;\n\n&lt;mx-effects.notice \n    type="error"\n    content="带边框的错误居中提示"\n    border="true"\n    text-align="center"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});