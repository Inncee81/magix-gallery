define("mx-preview/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(l,e,a)=>{l("../index"),l("mx-copy/index"),l("__test__/hl");var i=l("magix"),r=l("__test__/example");l("$");i.applyStyle("_zs_galleryar","._zs_galleryiU{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryiV{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=r.extend({tmpl:function(l,e,a,i,r,s,n,t){if(a||(a=l),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(l){return"&"+_[l]+";"};r=function(l){return""+(null==l?"":l)},i=function(l){return r(l).replace(d,c)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(l){return o[l]},x=/[!')(*]/g;s=function(l){return encodeURIComponent(r(l)).replace(x,m)}}if(!t){var g=/[\\'"]/g;t=function(l){return r(l).replace(g,"\\$&")}}var p="",v=l.viewId,h=l.text1,y=l.text2;return p+='<div mxa="_zs_gallerydh:_" class="_zs_galleryg"><div mxs="_zs_gallerydh:_" class="_zs_galleryj"><div class="mb10">1. 图片预览：不配置尺寸按图片实际尺寸展示，<span class="color-brand">可不配width和height，不配则按照实际尺寸展示</span></div><div class="_zs_galleryiU ml15" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="mb10">2. 图片预览：可配置预览图上的跳转链接click-url</div><div class="_zs_galleryiU ml15" mx-view="mx-preview/index?format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&clickUrl=%2F%2Fwww.taobao.com%2F&width=400&height=125&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_gallerydh:a" class="_zs_galleryk"><div mxs="_zs_gallerydh:a" class="_zs_galleryi">图片预览</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydh:b" class="_zs_galleryn">'+r(h)+'</span><i mxs="_zs_gallerydh:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_1">\n&lt;!-- 不配展示尺寸按实际尺寸展示 --&gt;\n&lt;mx-preview class="demo"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    max-width="100"\n    max-height="100"/&gt;\n\n&lt;!-- click-url 点击预览图的跳转链接 --&gt;\n&lt;mx-preview class="demo"\n    format="2"\n    url="//img.alicdn.com/tfscom/TB10l9lbgZC2uNjSZFnXXaxZpXa.png"\n    click-url="//www.taobao.com/"\n    width="400"\n    height="125"\n    max-width="100"\n    max-height="100"/&gt;</pre></div><div mxa="_zs_gallerydh:c" class="_zs_galleryk"><div mxs="_zs_gallerydh:c" class="_zs_galleryi">CSS</div><div class="_zs_galleryl" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_2"><span mxa="_zs_gallerydh:d" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_gallerydh:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(v)+'_text_2">\n.demo {\n    margin-right: 20px;\n    border: 1px solid #e6e6e6;\n    background-color: #fafafa;\n}</pre></div></div>'},render:function(){this.updater.digest()}})});