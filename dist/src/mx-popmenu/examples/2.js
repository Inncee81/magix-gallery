define("mx-popmenu/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,s)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var n=e("magix"),a=e("examples/example");e("$");n.applyStyle("_zs_galleryam","._zs_galleryjj,._zs_galleryjk{margin-right:20px;padding-top:32px}._zs_galleryjl{position:relative;margin-right:20px}._zs_galleryjl ._zs_galleryjm{margin-bottom:136px}._zs_galleryjl ._zs_galleryjn{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),s.exports=a.extend({tmpl:function(e,l,s,n,a,t,m,x){if(s||(s=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(c,d)}}if(!t){var r={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return r[e]},_=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(_,p)}}if(!x){var v=/[\\'"]/g;x=function(e){return a(e).replace(v,"\\$&")}}m||(m=function(e,l,s,n){for(n=e[g];--n;)if(e[s=g+n]===l)return s;return e[s=g+e[g]++]=l,s});var g="",u="",o=e.menus,y=e.text,z=e.selected,h=e.viewId,b=e.text1,w=e.text2;return u+='<div mxv mxa="_zs_gallerydR:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydR:a" class="_zs_galleryj"><div mxs="_zs_gallerydR:_" class="mb20"><span class="color-9">以下示例：</span>hover显示菜单</div><div mxv mxa="_zs_gallerydR:b" class="clearfix mb20"><div mxv mxa="_zs_gallerydR:c" class="fl _zs_galleryjj"><div mxv mxa="_zs_gallerydR:d" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左上对齐（lt）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lt">左上对齐（lt）</span></div><div mxv mxa="_zs_gallerydR:e" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左中对齐（lc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lc">左中对齐（lc）</span></div><span mxv="menus" class="btn" mx-change="'+l+"select({text:'左下对齐（lb）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=lb">左下对齐（lb）</span></div><div mxv mxa="_zs_gallerydR:f" class="fl _zs_galleryjl"><div mxv mxa="_zs_gallerydR:g" class="_zs_galleryjm"><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'上左对齐（tl）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tl">上左对齐（tl）</span><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'上中对齐（tc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tc">上中对齐（tc）</span><span mxv="menus" class="btn" mx-change="'+l+"select({text:'上右对齐（tr）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=tr">上右对齐（tr）</span></div>',y&&z&&(u+='<div mxa="_zs_gallerydR:h" class="_zs_galleryjn">'+n(y)+"：选择操作"+n(z)+"</div>"),u+='<div mxv><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'下左对齐（bl）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=bl">下左对齐（bl）</span><span mxv="menus" class="btn mr20" mx-change="'+l+"select({text:'下中对齐（bc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=bc">下中对齐（bc）</span><span mxv="menus" class="btn" mx-change="'+l+"select({text:'下右对齐（br）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=br">下右对齐（br）</span></div></div><div mxv mxa="_zs_gallerydR:i" class="fl _zs_galleryjk"><div mxv mxa="_zs_gallerydR:j" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右上对齐（rt）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rt">右上对齐（rt）</span></div><div mxv mxa="_zs_gallerydR:k" class="mb20"><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右中对齐（rc）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rc">右中对齐（rc）</span></div><span mxv="menus" class="btn" mx-change="'+l+"select({text:'右下对齐（rb）'})\" mx-view=\"mx-popmenu/index?menus="+m(s,o)+'&width=100&place=rb">右下对齐（rb）</span></div></div></div><div mxa="_zs_gallerydR:l" class="clearfix"><div mxa="_zs_gallerydR:m" class="_zs_galleryk _zs_galleryd _zs_galleryf"><div mxs="_zs_gallerydR:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(h)+'_text_1"><span mxa="_zs_gallerydR:n" class="_zs_galleryn">'+a(b)+'</span><i mxs="_zs_gallerydR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(h)+'_text_1">\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    mx-change="select()"&gt;下中对齐&lt;/mx-popmenu&gt;\n\n&lt;mx-popmenu class="btn"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    width="100"\n    place="lt"\n    mx-change="select()"&gt;左上对齐（lt）&lt;/mx-popmenu&gt;\n            </pre></div><div mxa="_zs_gallerydR:o" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_gallerydR:c" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+t(h)+'_text_2"><span mxa="_zs_gallerydR:p" class="_zs_galleryn">'+a(w)+'</span><i mxs="_zs_gallerydR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+n(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@2.html',\n    render() &#123;\n        this.updater.digest(&#123;&#125;);\n    &#125;,\n    'select&lt;change&gt;'(e)&#123;\n        // e.selected 当前选中操作value值\n    &#125;\n&#125;);\n                \n            </pre></div></div></div>"},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var l=e.params.text,s=e.selected;this.updater.digest({text:l,selected:s})}})});