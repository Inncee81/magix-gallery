define("mx-form/__test__/9",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(e,l,s)=>{e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example"),r=e("mx-form/index"),i=e("mx-form/validator");e("$");s.exports=a.extend({tmpl:function(e,l,s,a,r,i,t,_){if(s||(s=e),!r){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+n[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(x,m)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},d=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(d,o)}}if(!_){var g=/[\\'"]/g;_=function(e){return r(e).replace(g,"\\$&")}}var v="",p=e.bool,u=e.viewId,y=e.text1,f=e.text2;return v+='<div mxv mxa="_zs_galleryb):_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb):a" class="_zs_galleryj"><div mxs="_zs_galleryb):_" class="mb20"><span class="color-9">以下示例：</span>配置refresh:true，数据改变的时候，刷新view</div><div mxv mxa="_zs_galleryb):b" class="clearfix mb20"><label mxv mxa="_zs_galleryb):c" class="fl mr20 lh32"><input mxe="'+l+'_0" mxc="[{p:\'bool\',f:{refresh:true}}]" type="checkbox" name="bool" class="checkbox" ',p&&(v+=' checked="true" '),v+="/>切换控制input的显示与隐藏</label>",p&&(v+='<input mxs="_zs_galleryb):a" class="fl input"/>'),v+='</div></div><div mxa="_zs_galleryb):d" class="clearfix"><div mxa="_zs_galleryb):e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryb):b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryb):f" class="_zs_galleryn">'+r(y)+'</span><i mxs="_zs_galleryb):c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+'_text_1">\n&lt;div class="clearfix"&gt;\n    &lt;label class="fl mr20 lh32"&gt;\n        &lt;input type="checkbox" name="bool" class="checkbox"\n            &#123;&#123;:bool&#123;refresh:true&#125;&#125;&#125;  \n            &#123;&#123;if bool&#125;&#125; checked="true" &#123;&#123;/if&#125;&#125;/&gt;\n            切换控制input的显示与隐藏\n    &lt;/label&gt;\n    &#123;&#123;if bool&#125;&#125;\n    &lt;input type="text" class="fl input"/&gt;\n    &#123;&#123;/if&#125;&#125; \n&lt;/div&gt;</pre></div><div mxa="_zs_galleryb):g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryb):d" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_2"><span mxa="_zs_galleryb):h" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_galleryb):c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(u)+"_text_2\">\nlet Magix = require('magix');\nlet Form = require('@../mx-form/index');\nlet Validator = require('@../mx-form/validator');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend({\n    tmpl: '@index.html',\n    mixins: [Form, Validator],\n    render() {\n        this.updater.digest({\n            bool: true\n        });\n    }\n});</pre></div></div></div>"},mixins:[r,i],render:function(){this.updater.digest({bool:!0})}})});