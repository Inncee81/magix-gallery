define("mx-popover/__test__/12",["magix","__test__/example","$","../index"],(e,s,l)=>{e("../index");var i=e("magix"),a=e("__test__/example");e("$");i.applyStyle("_zs_galleryaq","._zs_gallerykv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykw{color:#ccc;border:1px solid #e6e6e6;width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_gallerykx{zoom:2}._zs_galleryky{-webkit-transform:scale(2);transform:scale(2)}"),l.exports=a.extend({tmpl:function(e,s,l,i,a,r,n,c){if(l||(l=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,v=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},function(e){return a(e).replace(d,v)}}if(!r){var t={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return t[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(x,_)}}if(!c){var m=/[\\'"]/g;c=function(e){return a(e).replace(m,"\\$&")}}return'<div mxs="_zs_galleryc$:_" class="_zs_galleryh"><div class="_zs_galleryk"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_gallerykx _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_galleryky _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>','<div mxs="_zs_galleryc$:_" class="_zs_galleryh"><div class="_zs_galleryk"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_gallerykx _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_galleryky _zs_gallerykw mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>'},render:function(){this.updater.digest()}})});