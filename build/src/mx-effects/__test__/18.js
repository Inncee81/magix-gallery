define("mx-effects/__test__/18",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(e,s,l)=>{e("mx-copy/index"),e("__test__/hl");var a=e("magix"),_=e("__test__/example");e("$");a.applyStyle("_zs_galleryH","._zs_galleryeJ{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryeK{width:100px;height:100px;border-radius:50%;background-color:#4d7fff}._zs_galleryeL{padding-top:35px;color:#fff}._zs_galleryeM,._zs_galleryeL{text-align:center}._zs_galleryeM{padding-top:5px}._zs_galleryeM ._zs_galleryeN{font-size:24px;color:#fff}"),l.exports=_.extend({tmpl:function(e,s,l,a,_,i,n,t){if(l||(l=e),!_){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};_=function(e){return""+(null==e?"":e)},a=function(e){return _(e).replace(c,d)}}if(!i){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return o[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(_(e)).replace(x,g)}}if(!t){var p=/[\\'"]/g;t=function(e){return _(e).replace(p,"\\$&")}}var v="",y=e.viewId,m=e.text1;return v+='<div mxa="_zs_gallerya{:_" class="_zs_galleryh"><div mxs="_zs_gallerya{:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>上下浮动效果</div><div class="_zs_galleryeK"><div class="_zs_galleryeL">浏览更多</div><div class="_zs_galleryeM"><i class="mc-iconfont _zs_galleryeN mx-anim-suspension">&#xeb95;</i></div></div></div><div mxa="_zs_gallerya{:a" class="_zs_galleryl"><div mxs="_zs_gallerya{:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_gallerya{:b" class="_zs_galleryo">'+_(m)+'</span><i mxs="_zs_gallerya{:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(y)+'_text_1">\n&lt;!-- 添加 class mx-anim-suspension --&gt;\n&lt;div class="suspension"&gt;\n    &lt;div class="text"&gt;浏览更多&lt;/div&gt;\n    &lt;div class="icon"&gt;\n        &lt;i class="mc-iconfont suspension-icon mx-anim-suspension"&gt;\n            &#38;&#35;xeb95;\n        &lt;/i&gt;\n    &lt;/div&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});