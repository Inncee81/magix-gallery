define("mx-carousel/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),s=e("__test__/example");e("$");r.applyStyle("_zs_galleryt","._zs_gallerycF{width:100%;height:100%;background-repeat:no-repeat;background-position:top;line-height:100px;color:#fff;text-align:center;font-size:20px;font-weight:700}._zs_gallerycG{background-color:var(--color-brand)}._zs_gallerycH{background-color:var(--color-brand-vs)}._zs_gallerycI{background-color:var(--color-warn)}"),a.exports=s.extend({tmpl:function(e,l,a,r,s,n,t,i){if(a||(a=e),!s){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};s=function(e){return""+(null==e?"":e)},r=function(e){return s(e).replace(c,d)}}if(!n){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return o[e]},v=/[!')(*]/g;n=function(e){return encodeURIComponent(s(e)).replace(v,g)}}if(!i){var x=/[\\'"]/g;i=function(e){return s(e).replace(x,"\\$&")}}var u="",m=e.viewId,p=e.text1,y=e.text2;return u+='<div mxa="_zs_gallery~:_" class="_zs_galleryg"><div mxs="_zs_gallery~:_" class="_zs_galleryj"><div class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>渐显渐隐切换</div><div>自动播放</div><div>显示面板指示点</div><div><a class="link-brand" rel="noopener noreferrer" href="#!/carousel/demo" target="_blank">跳转查看全屏案例</a></div></div></div><div class="clearfix mb10"><div mx-view="mx-carousel/index?height=100&autoplay=true&mode=fade"><div data-carousel="true"><div class="_zs_gallerycF _zs_gallerycG">1</div></div><div data-carousel="true"><div class="_zs_gallerycF _zs_gallerycH">2</div></div><div data-carousel="true"><div class="_zs_gallerycF _zs_gallerycI">3</div></div></div></div></div><div mxa="_zs_gallery~:a" class="clearfix"><div mxa="_zs_gallery~:b" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallery~:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(m)+'_text_1"><span mxa="_zs_gallery~:c" class="_zs_galleryn">'+s(p)+'</span><i mxs="_zs_gallery~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(m)+'_text_1">\n&lt;mx-carousel height="100" autoplay="true" mode="fade"&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg1"&gt;1&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg2"&gt;2&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n    &lt;mx-carousel.panel&gt;\n        &lt;div class="bg bg3"&gt;3&lt;/div&gt;\n    &lt;/mx-carousel.panel&gt;\n&lt;/mx-carousel&gt;</pre></div><div mxa="_zs_gallery~:d" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallery~:c" class="_zs_galleryi">CSS</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(m)+'_text_2"><span mxa="_zs_gallery~:e" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallery~:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(m)+'_text_2">\n.bg &#123;\n    width: 100%;\n    height: 100%;\n    background-repeat: no-repeat;\n    background-position: center top;\n    line-height: 100px;\n    color: #fff;\n    text-align: center;\n    font-size: 20px;\n    font-weight: bold;\n&#125;\n\n.bg1 &#123;\n    background-color: #4d7fff;\n&#125;\n\n.bg2 &#123;\n    background-color: #14c9ce;\n&#125;\n\n.bg3 &#123;\n    background-color: #ffb400;\n&#125;</pre></div></div></div>'},render:function(){this.updater.digest({})}})});