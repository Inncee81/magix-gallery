define("mx-suggest/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,t,s,l,_,a,d,n){if(s||(s=e),!_){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,r=function(e){return"&"+i[e]+";"};_=function(e){return""+(null==e?"":e)},l=function(e){return _(e).replace(c,r)}}if(!a){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return u[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(_(e)).replace(v,x)}}if(!n){var g=/[\\'"]/g;n=function(e){return _(e).replace(g,"\\$&")}}d||(d=function(e,t,s,l){for(l=e[p];--l;)if(e[s=p+l]===t)return s;return e[s=p+e[p]++]=t,s});var o,m,y,p="",f="",z=e.selectedValue,w=e.selectedText,h=e.viewId,b=e.text1,V=e.text2;try{f+='<div mxa="_zs_galleryd::_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryd::a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_galleryd::_" class="mb20 lh22 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>支持上下键切换选择项</div><div>模糊检索不区分大小写</div><div>回车默认选中第一个</div></div></div><div mxa="_zs_galleryd::b" class="mb20"><span mxs="_zs_galleryd::a" class="color-9">当前选中：</span>',y=13,m="if selectedValue",o="<%if (selectedValue) {%>",z&&(f+=" ",y=14,m="=selectedValue",f+=(o="<%=selectedValue%>",l(z)+"（"),y=14,m="=selectedText",f+=(o="<%=selectedText%>",l(w)+"） "),y=15,m="/if",o="<%}%>"),f+='</div><div class="w250" mx-suggest="'+t+'suggest()" mx-view="mx-suggest/index?selected=',y=18,m="=selectedValue",f+=(o="<%!$eu(selectedValue)%>",a(z)+"&placeholder=%E8%BE%93%E5%85%A5%E5%85%B3%E9%94%AE%E8%AF%8D%E6%90%9C%E7%B4%A2&list="),y=20,m="@[{\n                text: 'test1',\n                value: 1\n            }, {\n                text: 'test12',\n                value: 2\n            }, {\n                text: 'abc1',\n                value: 3\n            }, {\n                text: 'abc2',\n                value: 4\n            }]",f+=(o="<%@[{            text: 'test1',            value: 1        }, {            text: 'test12',            value: 2        }, {            text: 'abc1',            value: 3        }, {            text: 'abc2',            value: 4        }]%>",d(s,[{text:"test1",value:1},{text:"test12",value:2},{text:"abc1",value:3},{text:"abc2",value:4}])+'"></div></div><div mxa="_zs_galleryd::c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd::b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=37,m="=viewId",f+=(o="<%!$eu(viewId)%>",a(h)+'_text_1"><span mxa="_zs_galleryd::d" class="_zs_gallery___test___layout_-desc-tip">'),y=39,m="!text1",f+=(o="<%!text1%>",_(b)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=42,m="=viewId",f+=(o="<%=viewId%>",l(h)+'_text_1">\n&lt;mx-suggest class="w250"\n    selected="&#123;&#123;=selectedValue&#125;&#125;"\n    placeholder="输入关键词搜索"\n    list="&#123;&#123;@[&#123;\n        text: \'test1\',\n        value: 1\n    &#125;, &#123;\n        text: \'test12\',\n        value: 2\n    &#125;, &#123;\n        text: \'abc1\',\n        value: 3\n    &#125;, &#123;\n        text: \'abc2\',\n        value: 4\n    &#125;]&#125;&#125;"\n    mx-suggest="suggest()"/&gt;</pre></div><div mxa="_zs_galleryd::e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryd::d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=63,m="=viewId",f+=(o="<%!$eu(viewId)%>",a(h)+'_text_2"><span mxa="_zs_galleryd::f" class="_zs_gallery___test___layout_-desc-tip">'),y=65,m="!text2",f+=(o="<%!text2%>",_(V)+'</span><i mxs="_zs_galleryd::c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=68,m="=viewId",f+=(o="<%=viewId%>",l(h)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            selectedValue: ''\n        &#125;);\n    &#125;,\n    'suggest&lt;suggest&gt;'(e) &#123;\n        // e.selected [object]\n        //      value\n        //      text\n        let selected = e.selected;\n        this.updater.digest(&#123;\n            selectedValue: selected.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var I="render view error:"+(e.message||e);throw m&&(I+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+y),I+="\r\n\t"+(m?"translate to:":"expr:"),I+=o+"\r\n\tat file:mx-suggest/__test__/2.html"}return f},render:function(){this.updater.digest({selectedValue:"",selectedText:""})},"suggest<suggest>":function(e){var t=e.selected;this.updater.digest({selectedValue:t.value,selectedText:t.text})}})});