define("mx-effects/__test__/5",["magix","__test__/example","$","../notice","mx-copy/index","__test__/hl"],(e,t,n)=>{e("../notice"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");n.exports=i.extend({tmpl:function(e,t,n,i,r,s,l,_){if(n||(n=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(a,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(d,m)}}if(!_){var y=/[\\'"]/g;_=function(e){return r(e).replace(y,"\\$&")}}var g="",f=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryby:_" class="_zs_galleryg"><div mxs="_zs_galleryby:_" class="_zs_galleryj"><div class="mb20" mx-view="mx-effects/notice?type=warn&content=%E8%AD%A6%E5%91%8A%E6%8F%90%E7%A4%BA"></div><div class="mb20" mx-view="mx-effects/notice?type=warn&content=%E8%AD%A6%E5%91%8A%E5%B1%85%E4%B8%AD%E6%8F%90%E7%A4%BA&textAlign=center"></div><div class="mb20" mx-view="mx-effects/notice?type=warn&border=true&textAlign=center&content=%E5%B8%A6%E8%BE%B9%E6%A1%86%E7%9A%84%E8%AD%A6%E5%91%8A%E5%B1%85%E4%B8%AD%E6%8F%90%E7%A4%BA"></div></div><div mxa="_zs_galleryby:a" class="_zs_galleryk"><div mxs="_zs_galleryby:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryby:b" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_galleryby:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(f)+'_text_1">\n&lt;mx-effects.notice \n    type="warn"\n    content="警告提示"/&gt;\n\n&lt;mx-effects.notice \n    type="warn"\n    content="警告居中提示" \n    text-align="center"/&gt;\n\n&lt;mx-effects.notice \n    type="warn"\n    content="带边框的警告居中提示"\n    border="true"\n    text-align="center"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});