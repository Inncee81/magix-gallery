define("mx-secradio/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),l=e("$");_.exports=s.extend({tmpl:function(e,t,_,s,l,n,a,i){if(_||(_=e),!l){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};l=function(e){return""+(null==e?"":e)},s=function(e){return l(e).replace(r,c)}}if(!n){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(l(e)).replace(o,v)}}if(!i){var u=/[\\'"]/g;i=function(e){return l(e).replace(u,"\\$&")}}a||(a=function(e,t,_,s){for(s=e[p];--s;)if(e[_=p+s]===t)return _;return e[_=p+e[p]++]=t,_});var g,m,y,p="",f="",z=e.selected,h=e.list,w=e.viewId,W=e.text1,I=e.text2;try{f+='<div mxv mxa="_zs_gallerydW:_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallerydW:a" class="_zs_gallery___test___layout_-eg-content"><div mxs="_zs_gallerydW:_" class="clearfix lh22"><div class="color-9 fl">以下示例：</div><div class="fl"><div>mx-change实时获取选中值</div><div>支持展开收起功能</div><div>父节点，子节点都有前缀</div></div></div><div mxa="_zs_gallerydW:b" class="mb15 lh22"><span mxs="_zs_gallerydW:a" class="color-9">当前选择：</span>',y=11,m="=selected",f+=(g="<%=selected%>",s(z)+'</div><div mxv="list" mx-change="'+t+'select()" mx-view="mx-secradio/index?list='),y=13,m="@list",f+=(g="<%@list%>",a(_,h)+"&selected="),y=14,m="=selected",f+=(g="<%!$eu(selected)%>",n(z)+'&parentPrefix=%E8%AE%A1%E5%88%92&prefix=%E5%8D%95%E5%85%83"></div></div><div mxa="_zs_gallerydW:c" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydW:b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='),y=21,m="=viewId",f+=(g="<%!$eu(viewId)%>",n(w)+'_text_1"><span mxa="_zs_gallerydW:d" class="_zs_gallery___test___layout_-desc-tip">'),y=23,m="!text1",f+=(g="<%!text1%>",l(W)+'</span><i mxs="_zs_gallerydW:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=26,m="=viewId",f+=(g="<%=viewId%>",s(w)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    parent-prefix="计划"\n    prefix="单元"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerydW:e" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerydW:d" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='),y=36,m="=viewId",f+=(g="<%!$eu(viewId)%>",n(w)+'_text_2"><span mxa="_zs_gallerydW:f" class="_zs_gallery___test___layout_-desc-tip">'),y=38,m="!text2",f+=(g="<%!text2%>",l(I)+'</span><i mxs="_zs_gallerydW:c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="'),y=41,m="=viewId",f+=(g="<%=viewId%>",s(w)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@html.html',\n    render() &#123;\n        let list = [&#123;\n            text: '单品推广计划1',\n            subs: [&#123;\n                value: 11,\n                text: '单品推广计划1_单元1'\n            &#125;, &#123;\n                value: 12,\n                text: '单品推广计划1_单元2'\n            &#125;]\n        &#125;, &#123;\n            text: '单品推广计划2',\n            subs: [&#123;\n                value: 21,\n                text: '单品推广计划2_单元1'\n            &#125;, &#123;\n                value: 22,\n                text: '单品推广计划2_单元2'\n            &#125;]\n        &#125;]\n        this.updater.digest(&#123;\n            list,\n            selected: 21\n        &#125;);\n    &#125;,\n    'select&lt;change&gt;'(event)&#123;\n        // $(event.eventTarget) 当前组件\n        this.updater.digest(&#123;\n            selected: $(event.eventTarget).val()\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>")}catch(e){var $="render view error:"+(e.message||e);throw m&&($+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+y),$+="\r\n\t"+(m?"translate to:":"expr:"),$+=g+"\r\n\tat file:mx-secradio/__test__/1.html"}return f},render:function(){this.updater.digest({selected:21,list:[{text:"单品推广计划1",subs:[{value:11,text:"单品推广计划1_单元1"},{value:12,text:"单品推广计划1_单元2"}]},{text:"单品推广计划2",subs:[{value:21,text:"单品推广计划2_单元1"},{value:22,text:"单品推广计划2_单元2"}]}]})},"select<change>":function(e){this.updater.digest({selected:l(e.eventTarget).val()})}})});