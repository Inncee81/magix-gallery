define("mx-secradio/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var s=e("__test__/example"),i=e("$");l.exports=s.extend({tmpl:function(e,n,l,s,i,a,t,d){if(l||(l=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,r=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(c,r)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},v=/[!')(*]/g;a=function(e){return encodeURIComponent(i(e)).replace(v,x)}}if(!d){var o=/[\\'"]/g;d=function(e){return i(e).replace(o,"\\$&")}}t||(t=function(e,n,l,s){for(s=e[g];--s;)if(e[l=g+s]===n)return l;return e[l=g+e[g]++]=n,l});var g="",p="",y=e.selected,u=e.viewId,z=e.text1,f=e.text2;return p+='<div mxa="_zs_galleryc):_" class="_zs_galleryh"><div mxa="_zs_galleryc):a" class="_zs_galleryk"><div mxs="_zs_galleryc):_" class="clearfix lh22 mb10"><div class="color-9 fl">以下示例：</div><div class="fl"><div>node.val()获取选中值</div><div>不需要展开收起功能</div><div>自定义key和value</div></div></div><div mxa="_zs_galleryc):b" class="mb15 lh22"><a mxs="_zs_galleryc):a" href="javascript:;" mx-click="'+n+'get()" class="mr10 btn btn-brand">获取选中值</a><span mxs="_zs_galleryc):b" class="color-9">当前选择：</span>'+s(y)+'</div><div id="'+s(u)+'_comp" mx-view="mx-secradio/index?list='+t(l,[{name:"单品推广计划1",list:[{id:11,name:"单品推广计划1_单元1"},{id:12,name:"单品推广计划1_单元2"}]},{name:"单品推广计划2",list:[{id:21,name:"单品推广计划2_单元1"},{id:22,name:"单品推广计划2_单元2"}]}])+"&selected="+a(y)+'&needExpand=false&subKey=list&parentTextKey=name&textKey=name&valueKey=id"></div></div><div mxa="_zs_galleryc):c" class="_zs_galleryl"><div mxs="_zs_galleryc):c" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_1"><span mxa="_zs_galleryc):d" class="_zs_galleryo">'+i(z)+'</span><i mxs="_zs_galleryc):d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@[&#123;\n        name: \'单品推广计划1\',\n        list: [&#123;\n            id: 11,\n            name: \'单品推广计划1_单元1\'\n        &#125;, &#123;\n            id: 12,\n            name: \'单品推广计划1_单元2\'\n        &#125;]\n    &#125;, &#123;\n        name: \'单品推广计划2\',\n        list: [&#123;\n            id: 21,\n            name: \'单品推广计划2_单元1\'\n        &#125;, &#123;\n            id: 22,\n            name: \'单品推广计划2_单元2\'\n        &#125;]\n    &#125;]&#125;&#125;"\n    selected="&#123;&#123;=selected&#125;&#125;"\n    need-expand="false"\n    sub-key="list"\n    parent-text-key="name"\n    text-key="name"\n    value-key="id"/&gt;</pre></div><div mxa="_zs_galleryc):e" class="_zs_galleryl"><div mxs="_zs_galleryc):e" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_2"><span mxa="_zs_galleryc):f" class="_zs_galleryo">'+i(f)+'</span><i mxs="_zs_galleryc):d" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(u)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: ''\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;'(event)&#123;\n        let comp = $('#' + this.id + '_comp');\n        this.updater.digest(&#123;\n            selected: comp.val()\n        &#125;)\n    &#125;\n&#125;);\n</pre></div></div>"},render:function(){this.updater.digest({viewId:this.id,selected:""})},"get<click>":function(e){var n=i("#"+this.id+"_comp");this.updater.digest({selected:n.val()})}})});