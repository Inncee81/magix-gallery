define("mx-suggest/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");l.exports=t.extend({tmpl:function(e,s,l,t,a,d,n,i){if(l||(l=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(c,r)}}if(!d){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},u=/[!')(*]/g;d=function(e){return encodeURIComponent(a(e)).replace(u,g)}}if(!i){var v=/[\\'"]/g;i=function(e){return a(e).replace(v,"\\$&")}}n||(n=function(e,s,l,t){for(t=e[m];--t;)if(e[l=m+t]===s)return l;return e[l=m+e[m]++]=s,l});var m="",o="",p=e.selectedValue,y=e.selectedText,z=e.viewId,f=e.text1,h=e.text2;return o+='<div mxa="_zs_galleryd::_" class="_zs_galleryg"><div mxa="_zs_galleryd::a" class="_zs_galleryj"><div mxs="_zs_galleryd::_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>支持上下键切换选择项</div><div>模糊检索不区分大小写</div><div>回车默认选中第一个</div></div></div><div mxa="_zs_galleryd::b" class="mb20"><span mxs="_zs_galleryd::a" class="color-9">当前选中：</span>',p&&(o+=" "+t(p)+"（"+t(y)+"） "),o+='</div><div class="w250" mx-suggest="'+s+'suggest()" mx-view="mx-suggest/index?selected='+d(p)+"&placeholder=%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D%E6%90%9C%E7%B4%A2&list="+n(l,[{text:"test1",value:1},{text:"test12",value:2},{text:"abc1",value:3},{text:"abc2",value:4}])+'"></div></div><div mxa="_zs_galleryd::c" class="_zs_galleryk"><div mxs="_zs_galleryd::b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+d(z)+'_text_1"><span mxa="_zs_galleryd::d" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(z)+'_text_1">\n&lt;mx-suggest class="w250"\n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    placeholder="输入关键词搜索"\n    list="&#123;&#123;@[&#123;\n        text: \'test1\',\n        value: 1\n    &#125;, &#123;\n        text: \'test12\',\n        value: 2\n    &#125;, &#123;\n        text: \'abc1\',\n        value: 3\n    &#125;, &#123;\n        text: \'abc2\',\n        value: 4\n    &#125;]&#125;&#125;"\n    mx-suggest="suggest()"/&gt;</pre></div><div mxa="_zs_galleryd::e" class="_zs_galleryk"><div mxs="_zs_galleryd::d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+d(z)+'_text_2"><span mxa="_zs_galleryd::f" class="_zs_galleryn">'+a(h)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            selectedValue: ''\n        &#125;);\n    &#125;,\n    'suggest&lt;suggest&gt;'(e) &#123;\n        // e.selected [object]\n        //      value\n        //      text\n        let selected = e.selected;\n        this.updater.digest(&#123;\n            selectedValue: selected.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>"},render:function(){this.updater.digest({selectedValue:"",selectedText:""})},"suggest<suggest>":function(e){var s=e.selected;this.updater.digest({selectedValue:s.value,selectedText:s.text})}})});