define("mx-preview/examples/8",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var i=e("magix"),r=e("examples/example");e("$");i.applyStyle("_zs_galleryap","._zs_galleryjf{margin-right:20px;margin-bottom:20px;border:1px solid var(--color-border);background-color:var(--color-bg)}._zs_galleryjg{width:400px;height:220px;padding:10px;border-radius:var(--border-radius);border:1px solid var(--color-border);overflow-y:auto}"),a.exports=r.extend({tmpl:function(e,l,a,i,r,t,d,m){if(a||(a=e),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,x=function(e){return"&"+s[e]+";"};r=function(e){return""+(null==e?"":e)},i=function(e){return r(e).replace(n,x)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},o=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(o,p)}}if(!m){var g=/[\\'"]/g;m=function(e){return r(e).replace(g,"\\$&")}}var v="",_=e.viewId,h=e.text1;return v+='<div mxa="_zs_galleryd*:_" class="_zs_galleryg"><div mxs="_zs_galleryd*:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>展示在目标左侧</div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F69961%2F2018%2F05%2F08%2Ff1a2711e-e9057e21-14941396.html&width=1280&height=720&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=iframe&url=%2F%2Fkb-render.alicdn.com%2Fhtml%2F10167%2F2018%2F05%2F08%2F2ae9a14d-ba8eb686-14928142.html&width=586&height=325&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=iframe&url=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=300&height=250&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=image&url=%2F%2Fimg.alicdn.com%2Ftfscom%2FTB10l9lbgZC2uNjSZFnXXaxZpXa.png&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=video&url=%2F%2Fossgw.alicdn.com%2Fcreatives-assets%2Fvideo%2F2018%2F05%2F16%2Faa7ee841-503d-497b-b802-16687fb9731f.mp4&width=540&height=960&maxWidth=100&maxHeight=100"></div><div class="_zs_galleryjf" mx-view="mx-preview/index?placement=left&type=text&url=%E6%96%87%E5%AD%97%E9%93%BE%E5%86%85%E5%AE%B9%E5%B1%95%E7%A4%BA&clickUrl=%2F%2Fwww.taobao.com%2F&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryd*:a" class="_zs_galleryk"><div mxs="_zs_galleryd*:a" class="_zs_galleryi">html 预览</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(_)+'_text_1"><span mxa="_zs_galleryd*:b" class="_zs_galleryn">'+r(h)+'</span><i mxs="_zs_galleryd*:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(_)+'_text_1">\n&lt;mx-preview class="demo"\n    placement="left"\n    type="iframe"\n    url="//kb-render.alicdn.com/html/69961/2018/05/08/f1a2711e-e9057e21-14941396.html"\n    width="1280"\n    height="720"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});