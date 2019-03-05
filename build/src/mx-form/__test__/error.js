define("mx-form/__test__/error",["magix","$","mx-form/index","mx-form/validator","./error-inner","__test__/hl"],(e,i,l)=>{e("./error-inner"),e("__test__/hl");var r=e("magix"),t=(e("$"),e("mx-form/index")),a=e("mx-form/validator");l.exports=r.View.extend({tmpl:function(e,i,l,r,t,a,n,s){if(l||(l=e),!t){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(v,m)}}if(!a){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return _[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(c,o)}}if(!s){var x=/[\\'"]/g;s=function(e){return t(e).replace(x,"\\$&")}}var g="",f=e.name,u=e.viewId;return g+='<div mxv mxa="_zs_galleryb7:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryb7:a" class="_zs_galleryk clearfix"><div mxs="_zs_galleryb7:_" class="mb20 clearfix"><div class="fl color-9">异常情况复现：</div><div class="fl"><div>父子view分别存在校验逻辑</div><div>子view的以父view的id为前缀加下划线进行命名，如果 &#123;&#123;=viewId&#125;&#125;_inner 这种</div><div>子view双向绑定radio或者checkbox，并且挂载在data上数据为对象 info: &#123;age: 1&#125;</div></div></div><div mxs="_zs_galleryb7:a" class="mb20 clearfix"><div class="fl color-9">异常原因说明：</div><div class="fl"><div>关于radio和checkbox的双向绑定，组件获取当前view中input[mxe="本viewid开头"]进行处理</div><div>复现情况中的子view id和magix本身处理mxe属性的规则一致，则父view处理时也获取到了子view的节点</div><div>由于子view的数据挂在info对象上，而父view上没有info对象</div></div></div><div mxs="_zs_galleryb7:b" class="mb20 clearfix"><div class="fl color-9">解决方案说明：</div><div class="fl">组件已兼容该情况</div></div><form mxv mxa="_zs_galleryb7:b" class="form form-4 mb20"><div mxv mxa="_zs_galleryb7:c" class="form-item"><div mxs="_zs_galleryb7:c" class="form-label">姓名</div><div mxv mxa="_zs_galleryb7:d" class="form-content"><input mxe="'+i+'_0" mxc="[{p:\'name\',f:{required:true}}]" class="input" placeholder="必填项" value="'+r(f)+'"/></div></div><div mxa="_zs_galleryb7:e" class="form-item"><div mxs="_zs_galleryb7:d" class="form-label">年龄</div><div mxa="_zs_galleryb7:f" class="form-content"><div mx-view="mx-form/__test__/error-inner" id="'+r(u)+'_inner"></div></div></div></form></div><div mxs="_zs_galleryb7:e" class="clearfix"><div class="_zs_galleryl _zs_gallerye _zs_galleryg"><div class="_zs_galleryj">父view HTML Code</div><pre mx-view="__test__/hl">\n&lt;form class="form form-4"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;姓名&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input" placeholder="必填项" \n                value="&#123;&#123;:name&#123;required:true&#125;&#125;&#125;"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;年龄&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;div mx-view="./error-inner" </pre><pre class="color-brand inline-block">\n                id="&#123;&#123;=viewId&#125;&#125;_inner"</pre><pre class="inline-block"> &gt;&lt;/div&gt;</pre><pre>\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/form&gt;</pre></div><div class="_zs_galleryl _zs_gallerye"><div class="_zs_galleryj">父view JS Code</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@error.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            name: \'test\'\n        &#125;);\n    &#125;\n&#125;);</pre></div></div><div mxs="_zs_galleryb7:f" class="clearfix"><div class="_zs_galleryl _zs_gallerye"><div class="_zs_galleryj">子view HTML Code</div><pre mx-view="__test__/hl">\n&#123;&#123;each list as item&#125;&#125;\n    &lt;label class="mr30"&gt;\n        &lt;input type="radio" class="radio" \n            name="&#123;&#123;=viewId&#125;&#125;_radio" \n            value="&#123;&#123;=item.value&#125;&#125;" \n            &#123;&#123;:info.age&#123;required:[true,\'必选\']&#125;&#125;&#125; /&gt;\n        &#123;&#123;=item.text&#125;&#125;\n    &lt;/label&gt;\n&#123;&#123;/each&#125;&#125;</pre></div><div class="_zs_galleryl _zs_gallerye _zs_galleryf"><div class="_zs_galleryj">子view JS Code</div><pre mx-view="__test__/hl">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nlet Form = require(\'@../mx-form/index\');\nlet Validator = require(\'@../mx-form/validator\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@error-inner.html\',\n    mixins: [Form, Validator],\n    render() &#123;\n        let that = this;\n        that.updater.digest(&#123;\n            viewId: that.id,\n            list: [&#123;\n                text: \'10~20岁\',\n                value: 1\n            &#125;, &#123;\n                text: \'20~30岁\',\n                value: 2\n            &#125;, &#123;\n                text: \'30~40岁\',\n                value: 3\n            &#125;],\n            info: &#123;\n                age: 2\n            &#125;\n        &#125;);\n    &#125;\n&#125;);</pre></div></div></div>'},mixins:[t,a],render:function(){this.updater.digest({viewId:this.id,name:"test"})}})});