define("mx-dropdown/__test__/8",["magix","__test__/example","$","../multiple","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../multiple"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,l,s,t,a,i,n,r){if(s||(s=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(_,c)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(v,m)}}if(!r){var o=/[\\'"]/g;r=function(e){return a(e).replace(o,"\\$&")}}n||(n=function(e,l,s,t){for(t=e[g];--t;)if(e[s=g+t]===l)return s;return e[s=g+e[g]++]=l,s});var g="",p="",u=e.list,y=e.selectedArr,z=e.selectedStr,f=e.viewId,h=e.text1,w=e.text2;return p+='<div mxv mxa="_zs_gallerya{:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerya{:a" class="_zs_galleryj"><div mxs="_zs_gallerya{:_" class="mb20 clearfix lh22"><div class="fl color-9">说明：</div><div class="fl"><div>选中项传入支持传入数组或者逗号分隔</div><div>以下两个下拉框选中项保持一致</div></div></div><div mxv mxa="_zs_gallerya{:b" class="mb20"><div mxv="list,selectedArr" class="w200" mx-change="'+l+'select()" mx-view="mx-dropdown/multiple?list='+n(s,u)+"&selected="+n(s,y)+'"></div></div><div mxv mxa="_zs_gallerya{:c" class="mb20"><div mxv="list,selectedStr" class="w200" mx-change="'+l+'select()" mx-view="mx-dropdown/multiple?list='+n(s,u)+"&selected="+n(s,z)+'"></div></div><div><span mxs="_zs_gallerya{:a" class="color-9">当前选中值：</span><span>'+t(y)+'</span></div></div><div mxa="_zs_gallerya{:d" class="_zs_galleryk"><div mxs="_zs_gallerya{:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_1"><span mxa="_zs_gallerya{:e" class="_zs_galleryn">'+a(h)+'</span><i mxs="_zs_gallerya{:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+'_text_1">\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedArr&#125;&#125;"\n    mx-change="select()"/&gt;\n\n&lt;mx-dropdown.multiple class="w200"\n    list="&#123;&#123;@list&#125;&#125;"\n    selected="&#123;&#123;@selectedStr&#125;&#125;"\n    mx-change="select()"/&gt;</pre></div><div mxa="_zs_gallerya{:f" class="_zs_galleryk"><div mxs="_zs_gallerya{:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(f)+'_text_2"><span mxa="_zs_gallerya{:g" class="_zs_galleryn">'+a(w)+'</span><i mxs="_zs_gallerya{:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(f)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [];\n        for (let index = 0; index &lt; 6; index++) &#123;\n            list.push(&#123;\n                text: '多选' + (index + 1),\n                value: index + 1\n            &#125;)\n        &#125;\n        this.updater.digest(&#123;\n            list,\n            selectedArr: [1, 2, 3],\n            selectedStr: '1,2,3'\n        &#125;);\n    &#125;,\n    \n    'select&lt;change&gt;'(e) &#123;\n        // e.values [array] 当前选中值\n        // e.texts [array] 当前选中文案\n        let values = e.values;\n        this.updater.digest(&#123;\n            selectedArr: values,\n            selectedStr: values.join(',')\n        &#125;);\n    &#125;\n&#125;);</pre></div></div>"},render:function(){for(var e=[],l=0;l<6;l++)e.push({text:"多选"+(l+1),value:l+1});this.updater.digest({list:e,selectedArr:[1,2,3],selectedStr:"1,2,3"})},"select<change>":function(e){var l=e.values;this.updater.digest({selectedArr:l,selectedStr:l.join(",")})}})});