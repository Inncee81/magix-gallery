define("mx-popover/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var n=e("examples/example");e("$");l.exports=n.extend({tmpl:function(e,a,l,n,i,s,r,t){if(l||(l=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,o=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},n=function(e){return i(e).replace(c,o)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,m)}}if(!t){var v=/[\\'"]/g;t=function(e){return i(e).replace(v,"\\$&")}}var _="",g=e.viewId,f=e.text1;return _+='<div mxa="_zs_gallerydx:_" class="_zs_galleryg"><div mxs="_zs_gallerydx:_" class="_zs_galleryj"><div class="clearfix mb20"><div class="fl color-9">说明：</div><div class="fl"><div>popover默认使用span标签生成</div><div>支持使用 tag="div" 之类的自定义生成标签</div></div></div><div class="clearfix mb20"><div class="fl color-9">以下示例：</div><div class="fl">使用a标签生成，文案居中对齐</div></div><div class="clearfix mb20"><span class="color-9">示例：</span><a href="https://www.taobao.com/" rel="noopener noreferrer" target="_blank" mx-view="mx-popover/index?content=%E7%94%A8%20a%20%E6%A0%87%E7%AD%BE%E7%94%9F%E6%88%90%EF%BC%8C%E5%AE%BD%E5%BA%A6400%EF%BC%8C%E6%96%87%E5%AD%97%E5%B1%85%E4%B8%AD%E5%AF%B9%E9%BD%90&width=400&alignText=center">打开外链<i class="mc-iconfont displacement-2 ml5">&#xe7aa;</i></a></div></div><div mxa="_zs_gallerydx:a" class="_zs_galleryk"><div mxs="_zs_gallerydx:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(g)+'_text_1"><span mxa="_zs_gallerydx:b" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerydx:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(g)+'_text_1">\n&lt;mx-popover\n    tag="a" \n    href="https://www.taobao.com/"\n    rel="noopener noreferrer"\n    target="_blank"\n    content="用 a 标签生成，宽度400，文字居中对齐"\n    width="400"\n    align-text="center"&gt;\n    打开外链&lt;i class="mc-iconfont displacement-2 ml5"&gt;&#xe7aa;&lt;/i&gt;\n&lt;/mx-popover&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});