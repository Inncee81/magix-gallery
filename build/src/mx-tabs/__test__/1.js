define("mx-tabs/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,n,s,i,_){if(l||(l=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},a=function(e){return n(e).replace(r,c)}}if(!s){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},v=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(v,g)}}if(!_){var m=/[\\'"]/g;_=function(e){return n(e).replace(m,"\\$&")}}i||(i=function(e,t,l,a){for(a=e[u];--a;)if(e[l=u+a]===t)return l;return e[l=u+e[u]++]=t,l});var u="",o="",p=e.list,y=e.selected,z=e.viewId,h=e.text1,f=e.text2;return o+='<div mxv mxa="_zs_galleryd9:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryd9:a" class="_zs_galleryk"><div mxv="list" mx-change="'+t+'changeTab()" mx-view="mx-tabs/index?list='+i(l,p)+"&selected="+s(y)+'"></div><div mxa="_zs_galleryd9:b" class="mt20"><a mxs="_zs_galleryd9:_" href="javascript:;" class="btn btn-brand" mx-click="'+t+'changeData()">改变数据</a><span mxs="_zs_galleryd9:a" class="ml20 color-9">当前选中：</span><span>'+a(y)+'</span></div></div><div mxa="_zs_galleryd9:c" class="clearfix"><div mxa="_zs_galleryd9:d" class="_zs_galleryl _zs_gallerye"><div mxs="_zs_galleryd9:b" class="_zs_galleryj">HTML Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(z)+'_text_1"><span mxa="_zs_galleryd9:e" class="_zs_galleryo">'+n(h)+'</span><i mxs="_zs_galleryd9:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+'_text_1">\n&lt;mx-tabs \n    list="&#123;&#123;@list&#125;&#125;" \n    selected="&#123;&#123;=selected&#125;&#125;"\n    mx-change="changeTab()"&gt;&lt;/mx-tabs&gt;\n\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="changeData()"&gt;改变数据&lt;/a&gt;</pre></div><div mxa="_zs_galleryd9:f" class="_zs_galleryl _zs_gallerye _zs_galleryf"><div mxs="_zs_galleryd9:d" class="_zs_galleryj">JS Code</div><div class="_zs_gallerym" mx-success="'+t+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(z)+'_text_2"><span mxa="_zs_galleryd9:g" class="_zs_galleryo">'+n(f)+'</span><i mxs="_zs_galleryd9:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(z)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        let list = [&#123;\n            value: 1,\n            text: '模块1',\n            tag: 'New'\n        &#125;, &#123;\n            value: 2,\n            text: '模块2'\n        &#125;, &#123;\n            value: 3,\n            text: '模块3',\n            tag: '内容上新'\n        &#125;];\n\n        this.updater.digest(&#123;\n            list,\n            selected: list[1].value\n        &#125;);\n    &#125;,\n    'changeData&lt;click&gt;' (e) &#123;\n        let list = [&#123;\n            value: 4,\n            text: '新模块1',\n            tag: 'New'\n        &#125;, &#123;\n            value: 5,\n            text: '新模块2'\n        &#125;];\n        let selected = list[0].value;\n        this.updater.digest(&#123;\n            list,\n            selected\n        &#125;)\n    &#125;,\n    'changeTab&lt;change&gt;' (e) &#123;\n        // e.value 当前选中的key值\n        // e.text 当前选中的文案\n        this.updater.digest(&#123;\n            selected: e.value\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){var e=[{value:1,text:"模块1",tag:"New"},{value:2,text:"模块2"},{value:3,text:"模块3",tag:"内容上新"}];this.updater.digest({list:e,selected:e[1].value})},"changeData<click>":function(e){var t=[{value:4,text:"新模块1",tag:"New"},{value:5,text:"新模块2"}],l=t[0].value;this.updater.digest({list:t,selected:l})},"changeTab<change>":function(e){this.updater.digest({selected:e.value})}})});