define("mx-search/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,a,s,t,_,l,r,i){if(s||(s=e),!_){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};_=function(e){return""+(null==e?"":e)},t=function(e){return _(e).replace(n,d)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(e){return x[e]},v=/[!')(*]/g;l=function(e){return encodeURIComponent(_(e)).replace(v,u)}}if(!i){var y=/[\\'"]/g;i=function(e){return _(e).replace(y,"\\$&")}}r||(r=function(e,a,s,t){for(t=e[g];--t;)if(e[s=g+t]===a)return s;return e[s=g+e[g]++]=a,s});var h,o,m,g="",p="",f=e.searchKey,z=e.searchValue,w=e.list,K=e.viewId,V=e.text1,I=e.text2;try{p+='<div mxv mxa="_zs_gallerydP:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerydP:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydP:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>支持上下键切换选择项</div><div>未搜索状态下，回车默认搜索第一个</div><div>已搜索状态下，回车搜索当前选中项</div><div>默认placeholder=list.map(item => {return item.text;})，对item.text去重</div><div>事件处理</div></div></div><div mxa="_zs_gallerydP:b" class="mb20"><span mxs="_zs_gallerydP:a" class="color-9">当前搜索：</span>',m=15,o="if searchKey",h="<%if (searchKey) {%>",f&&(p+="<span>",m=16,o="=searchKey",p+=(h="<%=searchKey%>",t(f)+" = "),m=16,o="=searchValue",p+=(h="<%=searchValue%>",t(z)+"</span>"),m=17,o="/if",h="<%}%>"),p+='</div><div mxv><div mxv="list" class="w200" mx-search="'+a+'change()" mx-view="mx-search/index?list=',m=21,o="@list",p+=(h="<%@list%>",r(s,w)+"&searchKey="),m=22,o="=searchKey",p+=(h="<%!$eu(searchKey)%>",l(f)+"&searchValue="),m=23,o="=searchValue",p+=(h="<%!$eu(searchValue)%>",l(z)+'"></div></div></div><div mxa="_zs_gallerydP:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydP:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='),m=29,o="=viewId",p+=(h="<%!$eu(viewId)%>",l(K)+'_text_1"><span mxa="_zs_gallerydP:d" class="_zs_gallery___test___layout_-desc-tip">'),m=31,o="!text1",p+=(h="<%!text1%>",_(V)+'</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=34,o="=viewId",p+=(h="<%=viewId%>",t(K)+'_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@list&#125;&#125;" \n    search-key="&#123;&#123;=searchKey&#125;&#125;"\n    search-value="&#123;&#123;=searchValue&#125;&#125;"\n    mx-search="change()"&gt;&lt;/mx-search&gt;</pre></div><div mxa="_zs_gallerydP:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydP:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+a+'done({id:2})" mx-view="mx-copy/index?copyNode='),m=43,o="=viewId",p+=(h="<%!$eu(viewId)%>",l(K)+'_text_2"><span mxa="_zs_gallerydP:f" class="_zs_gallery___test___layout_-desc-tip">'),m=45,o="!text2",p+=(h="<%!text2%>",_(I)+'</span><i mxs="_zs_gallerydP:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),m=48,o="=viewId",p+=(h="<%=viewId%>",t(K)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            list: [&#123;\n                text: '计划',\n                value: 'campaignId'\n            &#125;, &#123;\n                text: '单元',\n                value: 'adgroupId'\n            &#125;],\n            searchKey: '',\n            searchValue: ''\n        &#125;);\n    &#125;,\n    'change&lt;search&gt;' (e) &#123;\n        e.preventDefault();\n        // e.searchKey 搜索对应的key值\n        // e.searchValue input文本框输入的对应的内容\n        this.updater.digest(&#123;\n            searchKey: e.searchKey,\n            searchValue: e.searchValue\n        &#125;)\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var P="render view error:"+(e.message||e);throw o&&(P+="\r\n\tsrc art:{{"+o+"}}\r\n\tat line:"+m),P+="\r\n\t"+(o?"translate to:":"expr:"),P+=h+"\r\n\tat file:mx-search/__test__/1.html"}return p},render:function(){this.updater.digest({list:[{text:"计划",value:"campaignId"},{text:"单元",value:"adgroupId"}],searchKey:"",searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchKey:e.searchKey,searchValue:e.searchValue})}})});