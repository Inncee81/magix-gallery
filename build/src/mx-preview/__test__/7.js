define("mx-preview/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),i=e("__test__/example");e("$");r.applyStyle("_zs_galleryap","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),l.exports=i.extend({tmpl:function(e,a,l,r,i,s,_,n){if(l||(l=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(d,x)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return o[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,c)}}if(!n){var m=/[\\'"]/g;n=function(e){return i(e).replace(m,"\\$&")}}var g="",v=e.viewId,f=e.text1;return g+='<div mxa="_zs_galleryc8:_" class="_zs_galleryh"><div mxs="_zs_galleryc8:_" class="_zs_galleryk"><div class="mb10"><span class="color-9">以下示例：</span>只有缩略图没有预览</div><div class="_zs_gallerykE" mx-view="mx-preview/index?preview=false&format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc8:a" class="_zs_galleryl"><div mxs="_zs_galleryc8:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryc8:b" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryc8:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(v)+'_text_1">\n&lt;mx-preview class="demo"\n    preview="false"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});