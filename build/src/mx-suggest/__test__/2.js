define("mx-suggest/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,a,d,n,i){if(s||(s=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(c,r)}}if(!d){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},u=/[!')(*]/g;d=function(e){return encodeURIComponent(a(e)).replace(u,g)}}if(!i){var v=/[\\'"]/g;i=function(e){return a(e).replace(v,"\\$&")}}n||(n=function(e,t,s,l){for(l=e[m];--l;)if(e[s=m+l]===t)return s;return e[s=m+e[m]++]=t,s});var m="",o="",p=e.selectedValue,y=e.selectedText,z=e.viewId,f=e.text1,h=e.text2;return o+='<div mxa="_zs_gallerydt:_" class="_zs_galleryh"><div mxa="_zs_gallerydt:a" class="_zs_galleryk"><div mxs="_zs_gallerydt:_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>支持上下键切换选择项</div><div>模糊检索不区分大小写</div><div>回车默认选中第一个</div></div></div><div mxa="_zs_gallerydt:b" class="mb20"><span mxs="_zs_gallerydt:a" class="color-9">当前选中：</span>',p&&(o+=" "+l(p)+"（"+l(y)+"） "),o+='</div><div class="w250" mx-suggest="'+t+'suggest()" mx-view="mx-suggest/index?selected='+d(p)+"&placeholder=%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D%E6%90%9C%E7%B4%A2&list="+n(s,[{text:"test1",value:1},{text:"test12",value:2},{text:"abc1",value:3},{text:"abc2",value:4}])+'"></div></div><div mxa="_zs_gallerydt:c" class="_zs_galleryl"><div mxs="_zs_gallerydt:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(z)+'_text_1"><span mxa="_zs_gallerydt:d" class="_zs_galleryo">'+a(f)+'</span><i mxs="_zs_gallerydt:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+'_text_1">\n&lt;mx-suggest class="w250"\n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    placeholder="输入关键词搜索"\n    list="&#123;&#123;@[&#123;\n        text: \'test1\',\n        value: 1\n    &#125;, &#123;\n        text: \'test12\',\n        value: 2\n    &#125;, &#123;\n        text: \'abc1\',\n        value: 3\n    &#125;, &#123;\n        text: \'abc2\',\n        value: 4\n    &#125;]&#125;&#125;"\n    mx-suggest="suggest()"/&gt;</pre></div><div mxa="_zs_gallerydt:e" class="_zs_galleryl"><div mxs="_zs_gallerydt:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(z)+'_text_2"><span mxa="_zs_gallerydt:f" class="_zs_galleryo">'+a(h)+'</span><i mxs="_zs_gallerydt:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            selectedValue: ''\n        &#125;);\n    &#125;,\n    'suggest&lt;suggest&gt;'(e) &#123;\n        // e.selected [object]\n        //      value\n        //      text\n        let selected = e.selected;\n        this.updater.digest(&#123;\n            selectedValue: selected.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({selectedValue:"",selectedText:""})},"suggest<suggest>":function(e){var t=e.selected;this.updater.digest({selectedValue:t.value,selectedText:t.text})}})});