define("mx-popmenu/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),t=e("__test__/example");e("$");n.applyStyle("_zs_galleryak","._zs_galleryki{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerykj,._zs_gallerykk{margin-right:20px;padding-top:32px}._zs_gallerykl{position:relative;margin-right:20px}._zs_gallerykl ._zs_gallerykm{margin-bottom:136px}._zs_gallerykl ._zs_gallerykn{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=t.extend({tmpl:function(e,l,s,n,t,a,c,i){if(s||(s=e),!t){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,r=function(e){return"&"+m[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(x,r)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(g,p)}}if(!i){var d=/[\\'"]/g;i=function(e){return t(e).replace(d,"\\$&")}}c||(c=function(e,l,s,n){for(n=e[v];--n;)if(e[s=v+n]===l)return s;return e[s=v+e[v]++]=l,s});var v="",u="",y=e.menus,o=e.text,z=e.selected,w=e.viewId,h=e.text1,b=e.text2;return u+='<div mxv mxa="_zs_gallerycB:_" class="_zs_galleryh"><div mxv mxa="_zs_gallerycB:a" class="_zs_galleryk"><div mxs="_zs_gallerycB:_" class="mb20"><span class="color-9">以下示例：</span>点击显示菜单</div><div mxv mxa="_zs_gallerycB:b" class="clearfix mb20"><div mxv mxa="_zs_gallerycB:c" class="fl _zs_gallerykj"><div mxv mxa="_zs_gallerycB:d" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左上对齐（lt）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_gallerycB:e" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左中对齐（lc）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'左下对齐（lb）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_gallerycB:f" class="fl _zs_gallerykl"><div mxv mxa="_zs_gallerycB:g" class="_zs_gallerykm"><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'上左对齐（tl）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'上中对齐（tc）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'上右对齐（tr）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=tr">上右对齐（tr）</span></div>',o&&z&&(u+='<div mxa="_zs_gallerycB:h" class="_zs_gallerykn">'+n(o)+"：选择操作"+n(z)+"</div>"),u+='<div mxv><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'下左对齐（bl）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn w100 mr20" mx-change="'+l+"select({text:'下中对齐（bc）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'下右对齐（br）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_gallerycB:i" class="fl _zs_gallerykk"><div mxv mxa="_zs_gallerycB:j" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右上对齐（rt）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_gallerycB:k" class="mb20"><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右中对齐（rc）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn w100" mx-change="'+l+"select({text:'右下对齐（rb）'})\" mx-view=\"mx-popmenu/index?menus="+c(s,y)+'&width=100&triggerType=click&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerycB:l" class="clearfix"><div mxa="_zs_gallerycB:m" class="_zs_galleryl _zs_gallerye _zs_galleryg"><div mxs="_zs_gallerycB:a" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(w)+'_text_1"><span mxa="_zs_gallerycB:n" class="_zs_galleryo">'+t(h)+'</span><i mxs="_zs_gallerycB:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(w)+'_text_1">\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"&gt;下中对齐（bc）&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn w100"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    trigger-type="click"\n    place="lc"\n    mx-change="select()"&gt;左中对齐（lc）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_gallerycB:o" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_gallerycB:c" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(w)+'_text_2"><span mxa="_zs_gallerycB:p" class="_zs_galleryo">'+t(b)+'</span><i mxs="_zs_gallerycB:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(w)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@2.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'select&lt;change&gt;'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n            </pre></div></div></div>"},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var l=e.params.text,s=e.selected;this.updater.digest({text:l,selected:s})}})});