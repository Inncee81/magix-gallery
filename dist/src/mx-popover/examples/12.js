define("mx-popover/examples/12",["magix","examples/example","$","../index"],(e,i,l)=>{e("../index");var s=e("magix"),a=e("examples/example");e("$");s.applyStyle("_zs_galleryao","._zs_galleryiS{color:#ccc;border:1px solid var(--color-border);width:24px;height:24px;border-radius:4px;text-align:center;line-height:22px}._zs_galleryiT{zoom:2}._zs_galleryiU{transform:scale(2)}"),l.exports=a.extend({tmpl:function(e,i,l,s,a,r,n,c){if(l||(l=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,v=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},function(e){return a(e).replace(o,v)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},t=function(e){return m[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(x,t)}}if(!c){var p=/[\\'"]/g;c=function(e){return a(e).replace(p,"\\$&")}}return'<div mxs="_zs_gallerydr:_" class="_zs_galleryg"><div class="_zs_galleryj"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_galleryiT _zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_galleryiU _zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>','<div mxs="_zs_gallerydr:_" class="_zs_galleryg"><div class="_zs_galleryj"><div class="mb20">异常场景：zoom不会影响CSSOM，transform会影响部分，使用这类样式的时候，相对节点定位会出错</div><div class="mb20 clearfix"><div class="fl mr20">原icon</div><div class="fl"><span class="_zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">zoom: 2</div><div class="fl"><span class="_zs_galleryiT _zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div><div class="mb20 clearfix"><div class="fl mr20">transform: scale(2);</div><div class="fl"><span class="_zs_galleryiU _zs_galleryiS mc-iconfont" mx-view="mx-popover/index?content=%E6%8F%90%E7%A4%BA%E5%86%85%E5%AE%B9">&#xe7be;</span></div></div></div></div>'},render:function(){this.updater.digest()}})});