define("mx-preview/__test__/8",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),t=e("__test__/example");e("$");i.applyStyle("_zs_galleryas","._zs_gallerykD{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykE{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_gallerykF{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),l.exports=t.extend({tmpl:function(e,a,l,i,t,r,m,s){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,_=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(n,_)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return x[e]},o=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(o,c)}}if(!s){var g=/[\\'"]/g;s=function(e){return t(e).replace(g,"\\$&")}}var p="",h=e.viewId,v=e.text1;return p+='<div mxa="_zs_galleryc+:_" class="_zs_galleryh"><div mxs="_zs_galleryc+:_" class="_zs_galleryk"><div class="mb20"><span class="color-9">以下示例：</span>展示在目标左侧</div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=10&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=10&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=2&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=4&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div><div class="_zs_gallerykE" mx-view="mx-preview/index?placement=left&format=5&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryc+:a" class="_zs_galleryl"><div mxs="_zs_galleryc+:a" class="_zs_galleryj">html 预览</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(h)+'_text_1"><span mxa="_zs_galleryc+:b" class="_zs_galleryo">'+t(v)+'</span><i mxs="_zs_galleryc+:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(h)+'_text_1">\n&lt;mx-preview class="demo"\n    placement="left"\n    format="10"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});