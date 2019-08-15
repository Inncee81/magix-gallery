define("mx-popover/examples/11",["magix","examples/example","mx-dialog/index","$","mx-copy/index","examples/hl"],(e,l,i)=>{e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example"),s=e("mx-dialog/index");e("$");i.exports=a.extend({tmpl:function(e,l,i,a,s,r,n,p){if(i||(i=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,t=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(c,t)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return o[e]},v=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(v,m)}}if(!p){var x=/[\\'"]/g;p=function(e){return s(e).replace(x,"\\$&")}}var _="",g=e.viewId,u=e.text1;return _+='<div mxa="_zs_gallerydv:_" class="_zs_galleryg"><div mxs="_zs_gallerydv:_" class="_zs_galleryj"><div class="mb10">异常场景：popover的小浮层是追加到body进行绝对定位，如果其可滚动父元素不是window，在内容展开的情况下滚动父元素，定位会出错。</div><div class="mb10">如何解决：可手动指定其滚动父元素scroll-wrapper进行修正。</div><div class="lh22">以下以浮层使用场景示例：</div><div class="lh22 mb5">1. 浮层内容未限制高度时，组件本身做了兼容，不需要额外指定scroll-wrapper</div><div class="pl15 mb5"><a href="javascript:;" mx-click="'+l+'open1()" class="btn btn-brand">未限制滚动高度的浮层</a></div><div class="lh22 mb5">2. 浮层中间区域滚动</div><div class="pl15 mb5"><a href="javascript:;" mx-click="'+l+'open2()" class="btn btn-brand">popover在滚动区域内</a></div></div><div mxa="_zs_gallerydv:a" class="_zs_galleryk"><div mxs="_zs_gallerydv:a" class="_zs_galleryi">浮层中使用popover</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_gallerydv:b" class="_zs_galleryn">'+s(u)+'</span><i mxs="_zs_gallerydv:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+'_text_1">\n&lt;mx-popover class="btn"\n    scroll-wrapper="&#123;&#123;=id&#125;&#125;"\n    content="提示内容"&gt;文案&lt;/mx-popover&gt;</pre></div></div>'},mixins:[s],render:function(){this.updater.digest()},"open1<click>":function(e){this.mxDialog("mx-popover/examples/multi",{number:1},{width:800})},"open2<click>":function(e){this.mxDialog("mx-popover/examples/multi2",{number:1},{width:800,height:300})}})});