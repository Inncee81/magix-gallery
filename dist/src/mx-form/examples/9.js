define("mx-form/examples/9",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(e,l,a)=>{e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),r=e("mx-form/index"),i=e("mx-form/validator");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,r,i,n,t){if(a||(a=e),!r){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(o,x)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(d,_)}}if(!t){var g=/[\\'"]/g;t=function(e){return r(e).replace(g,"\\$&")}}var p="",v=e.bool,u=e.viewId,y=e.text1,f=e.text2;return p+='<div mxv mxa="_zs_galleryco:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryco:a" class="_zs_galleryj"><div mxs="_zs_galleryco:_" class="mb20"><span class="color-9">以下示例：</span>配置refresh:true，数据改变的时候，刷新view</div><div mxv mxa="_zs_galleryco:b" class="clearfix mb20"><label mxv mxa="_zs_galleryco:c" class="fl mr20 lh32"><input mxe="'+l+'_0" mxc="[{p:\'bool\',f:{refresh:true}}]" type="checkbox" name="bool" class="checkbox" ',v&&(p+=' checked="true" '),p+="/>切换控制input的显示与隐藏</label>",v&&(p+='<input mxs="_zs_galleryco:a" class="fl input"/>'),p+='</div></div><div mxa="_zs_galleryco:d" class="clearfix"><div mxa="_zs_galleryco:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryco:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryco:f" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_galleryco:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;label class="fl mr20 lh32"&gt;\n        &lt;input type="checkbox" name="bool" class="checkbox"\n            &#123;&#123;:bool&#123;refresh:true&#125;&#125;&#125;  \n            &#123;&#123;if bool&#125;&#125; checked="true" &#123;&#123;/if&#125;&#125;/&gt;\n            切换控制input的显示与隐藏\n    &lt;/label&gt;\n    &#123;&#123;if bool&#125;&#125;\n    &lt;input type="text" class="fl input"/&gt;\n    &#123;&#123;/if&#125;&#125; \n&lt;/div&gt;</pre></div><div mxa="_zs_galleryco:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryco:d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryco:h" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryco:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            bool: true\n        });\n    }\n});</pre></div></div></div>"},mixins:[r,i],render:function(){this.updater.digest({bool:!0})}})});