define("mx-popover/__test__/11",["magix","__test__/example","mx-dialog/index","$","mx-copy/index","__test__/hl"],(e,l,i)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),t=e("mx-dialog/index");e("$");i.exports=s.extend({tmpl:function(e,l,i,s,t,a,r,n){if(i||(i=e),!t){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+_[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(c,o)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(m,p)}}if(!n){var v=/[\\'"]/g;n=function(e){return t(e).replace(v,"\\$&")}}var x="",g=e.viewId,u=e.text1;return x+='<div mxa="_zs_galleryc::_" class="_zs_galleryg"><div mxs="_zs_galleryc::_" class="_zs_galleryj"><div class="mb10">异常场景：popover的小浮层是追加到body进行绝对定位，如果其可滚动父元素不是window，在内容展开的情况下滚动父元素，定位会出错。</div><div class="mb10">如何解决：可手动指定其滚动父元素scroll-wrapper进行修正。</div><div class="lh22">以下以浮层使用场景示例：</div><div class="lh22 mb5">1. 浮层内容未限制高度时，组件本身做了兼容，不需要额外指定scroll-wrapper</div><div class="pl15 mb5"><a href="javascript:;" mx-click="'+l+'open1()" class="btn btn-brand">未限制滚动高度的浮层</a></div><div class="lh22 mb5">2. 浮层中间区域滚动</div><div class="pl15 mb5"><a href="javascript:;" mx-click="'+l+'open2()" class="btn btn-brand">popover在滚动区域内</a></div></div><div mxa="_zs_galleryc::a" class="_zs_galleryk"><div mxs="_zs_galleryc::a" class="_zs_galleryi">浮层中使用popover</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_galleryc::b" class="_zs_galleryn">'+t(u)+'</span><i mxs="_zs_galleryc::b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(g)+'_text_1">\n&lt;mx-popover class="btn"\n    scroll-wrapper="&#123;&#123;=id&#125;&#125;"\n    content="提示内容"&gt;文案&lt;/mx-popover&gt;</pre></div></div>'},mixins:[t],render:function(){this.updater.digest()},"open1<click>":function(e){this.mxDialog("mx-popover/__test__/multi",{number:1},{width:800})},"open2<click>":function(e){this.mxDialog("mx-popover/__test__/multi2",{number:1},{width:800,height:300})}})});