define("mx-popconfirm/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var n=e("magix"),t=e("examples/example");e("$");n.applyStyle("_zs_galleryak","._zs_galleryiL,._zs_galleryiM{margin-right:20px;padding-top:32px}._zs_galleryiN{position:relative;margin-right:20px}._zs_galleryiN ._zs_galleryiO{margin-bottom:136px}._zs_galleryiN ._zs_galleryiP{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=t.extend({tmpl:function(e,l,s,n,t,i,a,r){if(s||(s=e),!t){var p={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+p[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(c,m)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(d,o)}}if(!r){var _=/[\\'"]/g;r=function(e){return t(e).replace(_,"\\$&")}}var E="",g=e.cur,v=e.viewId,y=e.text1,f=e.text2;return E+='<div mxa="_zs_gallerydh:_" class="_zs_galleryg"><div mxa="_zs_gallerydh:a" class="_zs_galleryj"><div mxa="_zs_gallerydh:b" class="clearfix mb20"><div mxs="_zs_gallerydh:_" class="fl _zs_galleryiL"><div class="mb20"><span class="btn" mx-popconfirm="'+l+'test({text:\'左上对齐（lt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lt">左上对齐（lt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="'+l+'test({text:\'左中对齐（lc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lc">左中对齐（lc）</span></div><span class="btn" mx-popconfirm="'+l+'test({text:\'左下对齐（lb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=lb">左下对齐（lb）</span></div><div mxa="_zs_gallerydh:c" class="fl _zs_galleryiN"><div mxs="_zs_gallerydh:a" class="_zs_galleryiO"><span class="btn mr20" mx-popconfirm="'+l+'test({text:\'上左对齐（tl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tl">上左对齐（tl）</span><span class="btn mr20" mx-popconfirm="'+l+'test({text:\'上中对齐（tc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tc">上中对齐（tc）</span><span class="btn" mx-popconfirm="'+l+'test({text:\'上右对齐（tr）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=tr">上右对齐（tr）</span></div>',g&&(E+='<div mxa="_zs_gallerydh:d" class="_zs_galleryiP">确认操作：'+n(g)+"</div>"),E+='<div mxs="_zs_gallerydh:b"><span class="btn mr20" mx-popconfirm="'+l+'test({text:\'下左对齐（bl）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bl">下左对齐（bl）</span><span class="btn mr20" mx-popconfirm="'+l+'test({text:\'下中对齐（bc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=bc">下中对齐（bc）</span><span class="btn" mx-popconfirm="'+l+'test({text:\'下右对齐（br）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=br">下右对齐（br）</span></div></div><div mxs="_zs_gallerydh:c" class="fl _zs_galleryiM"><div class="mb20"><span class="btn" mx-popconfirm="'+l+'test({text:\'右上对齐（rt）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rt">右上对齐（rt）</span></div><div class="mb20"><span class="btn" mx-popconfirm="'+l+'test({text:\'右中对齐（rc）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rc">右中对齐（rc）</span></div><span class="btn" mx-popconfirm="'+l+'test({text:\'右下对齐（rb）\'})" mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E6%93%8D%E4%BD%9C%E5%90%97%EF%BC%9F&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerydh:e" class="clearfix"><div mxa="_zs_gallerydh:f" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerydh:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_1"><span mxa="_zs_gallerydh:g" class="_zs_galleryn">'+t(y)+'</span><i mxs="_zs_gallerydh:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+'_text_1">\n&lt;mx-popconfirm class="btn"\n    content="确认操作吗？"\n    place="rc"\n    mx-popconfirm="submit()"&gt;右中对齐（rc）&lt;/mx-popconfirm&gt;</pre></div><div mxa="_zs_gallerydh:h" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_gallerydh:f" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(v)+'_text_2"><span mxa="_zs_gallerydh:i" class="_zs_galleryn">'+t(f)+'</span><i mxs="_zs_gallerydh:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(v)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'submit&lt;popconfirm&gt;'(e)&#123;\n        // 确认操作之后的回调 \n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest()},"test<popconfirm>":function(e){var l=e.params.text;this.updater.digest({cur:l})}})});