define("mx-popover/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,n,t,i,r){if(s||(s=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},p=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(p,_)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return m[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(d,c)}}if(!r){var o=/[\\'"]/g;r=function(e){return n(e).replace(o,"\\$&")}}var g="",v=e.viewId,y=e.text1,z=e.text2,u=e.text3;return g+='<div mxa="_zs_galleryd3:_" class="_zs_galleryg"><div mxs="_zs_galleryd3:_" class="_zs_galleryj"><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8A%E4%B8%AD%E5%AF%B9%E9%BD%90&placement=top">上中对齐</span><span class="btn mr20" mx-view="mx-popover/index?content=%E4%B8%8A%E5%B7%A6%E5%AF%B9%E9%BD%90&placement=top&align=left">上左对齐</span><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8A%E5%8F%B3%E5%AF%B9%E9%BD%90&placement=top&align=right">上右对齐</span></div><div mxa="_zs_galleryd3:a" class="_zs_galleryk"><div mxs="_zs_galleryd3:a" class="_zs_galleryi">上中对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryd3:b" class="_zs_galleryn">'+n(y)+'</span><i mxs="_zs_galleryd3:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="上中对齐"\n    placement="top"&gt;上中对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryd3:c" class="_zs_galleryk"><div mxs="_zs_galleryd3:c" class="_zs_galleryi">上左对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_2"><span mxa="_zs_galleryd3:d" class="_zs_galleryn">'+n(z)+'</span><i mxs="_zs_galleryd3:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_2">\n&lt;mx-popover class="btn"\n    content="上左对齐"\n    placement="top"\n    align="left"&gt;上左对齐&lt;/mx-popover&gt;</pre></div><div mxa="_zs_galleryd3:e" class="_zs_galleryk"><div mxs="_zs_galleryd3:d" class="_zs_galleryi">上右对齐</div><div class="_zs_galleryl" mx-success="'+l+'done({id:3})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_3"><span mxa="_zs_galleryd3:f" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_galleryd3:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(v)+'_text_3">\n&lt;mx-popover class="btn"\n    content="上右对齐"\n    placement="top"\n    align="right"&gt;上右对齐&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});