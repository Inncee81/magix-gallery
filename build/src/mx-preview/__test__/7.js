define("mx-preview/__test__/7",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,r,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var a=e("magix"),i=e("__test__/example");e("$");a.applyStyle("_zs_galleryas","._zs_galleryiW{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiX{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),l.exports=i.extend({tmpl:function(e,r,l,a,i,s,_,n){if(l||(l=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(d,o)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(m,c)}}if(!n){var g=/[\\'"]/g;n=function(e){return i(e).replace(g,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallerydu:_" class="_zs_galleryg"><div mxs="_zs_gallerydu:_" class="_zs_galleryj"><div class="mb10"><span class="color-9">以下示例：</span>只有缩略图没有预览</div><div class="_zs_galleryiW" mx-view="mx-preview/index?preview=false&format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydu:a" class="_zs_galleryk"><div mxs="_zs_gallerydu:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydu:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallerydu:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-preview class="demo"\n    preview="false"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});