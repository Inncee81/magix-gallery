define("mx-taginput/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),a=e("__test__/example"),s=e("$"),l=t.Vframe;i.exports=a.extend({tmpl:function(e,n,i,t,a,s,l,d){if(i||(i=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},r=/[&<>"'`]/g,g=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(r,g)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},x=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(x,o)}}if(!d){var m=/[\\'"]/g;d=function(e){return a(e).replace(m,"\\$&")}}var v="",u=e.selected,p=e.viewId,y=e.text1,f=e.text2;return v+='<div mxa="_zs_galleryeK:_" class="_zs_galleryg"><div mxa="_zs_galleryeK:a" class="_zs_galleryj"><div mxs="_zs_galleryeK:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>用户输入关键词，动态更新提示数据</div><div>动态刷的列表可连续选择</div><div>请求数据有延时，可加loading</div></div></div><div mxa="_zs_galleryeK:b" class="mb20"><a mxs="_zs_galleryeK:a" href="javascript:;" class="btn btn-brand mr20" mx-click="'+n+'get()">获取选中值</a><span mxs="_zs_galleryeK:b" class="color-9">当前选择：</span><span>'+t(u)+'</span></div><div mxa="_zs_galleryeK:c" class="mb20"><div class="w280" id="'+t(p)+'_taginput" mx-show="'+n+'update()" mx-view="mx-taginput/index?placeholder=%E8%AF%B7%E9%80%89%E6%8B%A9%E9%9C%80%E8%A6%81%E7%9A%84%E5%80%BC"></div></div></div><div mxa="_zs_galleryeK:d" class="_zs_galleryk"><div mxs="_zs_galleryeK:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_galleryeK:e" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryeK:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;a href="javascript:;" class="btn btn-brand" \n    mx-click="get()"&gt;获取选中值&lt;/a&gt;\n\n&lt;mx-taginput class="w280"\n    id="&#123;&#123;=viewId&#125;&#125;_taginput"\n    placeholder="请选择需要的值"\n    mx-show="update()"/&gt;</pre></div><div mxa="_zs_galleryeK:f" class="_zs_galleryk"><div mxs="_zs_galleryeK:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:2})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_2"><span mxa="_zs_galleryeK:g" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_galleryeK:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\nlet Vframe = Magix.Vframe;\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest();\n    &#125;,\n    'update&lt;show&gt;'(e)&#123;\n        // e.keyword 用户输入的关键词\n        // 用户无输入的情况下不响应\n        let keyword = e.keyword;\n        if(!keyword)&#123;\n            return;\n        &#125;\n\n        let instance = Vframe.get(this.id + '_taginput');\n\n        // 请求接口有延时，加loading动画\n        instance.invoke('showLoading');\n        setTimeout(() =&gt; &#123;\n            let suggest = [1, 2, 3].map(v =&gt; &#123;\n                return &#123;\n                    text: Magix.guid('dynamic_'),\n                    value: Magix.guid('dynamic_')\n                &#125;;\n            &#125;)\n\n            // 更新下拉框提示数据\n            instance.invoke('update', [suggest]);\n\n            // 结束loading\n            instance.invoke('hideLoading');\n        &#125;, 1500);\n    &#125;,\n    'get&lt;click&gt;'()&#123;\n        let node = $('#' + this.id + '_taginput');\n        this.updater.digest(&#123;\n            selected: node.val()\n        &#125;)\n    &#125;\n&#125;);\n        </pre></div></div>"},render:function(){this.updater.digest()},"update<show>":function(e){if(e.keyword){var n=l.get(this.id+"_taginput");n.invoke("showLoading"),setTimeout(function(){var e=[1,2,3].map(function(e){return{text:t.guid("dynamic_"),value:t.guid("dynamic_")}});n.invoke("update",[e]),n.invoke("hideLoading")},1500)}},"get<click>":function(){var e=s("#"+this.id+"_taginput");this.updater.digest({selected:e.val()})}})});