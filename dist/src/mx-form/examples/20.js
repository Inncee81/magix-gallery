define("mx-form/examples/20",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(l,a,s)=>{l("mx-copy/index"),l("examples/hl");l("magix");var t=l("examples/example"),e=l("mx-form/index"),r=l("mx-form/validator");l("$");s.exports=t.extend({tmpl:function(l,a,s,t,e,r,i,m){if(s||(s=l),!e){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+n[l]+";"};e=function(l){return""+(null==l?"":l)},t=function(l){return e(l).replace(c,d)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(l){return o[l]},x=/[!')(*]/g;r=function(l){return encodeURIComponent(e(l)).replace(x,v)}}if(!m){var f=/[\\'"]/g;m=function(l){return e(l).replace(f,"\\$&")}}var g="",_=l.viewId,p=l.text1;return g+='<div mxv mxa="_zs_gallerycd:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycd:a" class="_zs_galleryj clearfix"><div mxs="_zs_gallerycd:_" class="mb10 lh22"><div>class：form-4（左文字预留4个字），支持form-4，form-6，form-8，form-10</div></div><form mxv mxa="_zs_gallerycd:b" class="form form-4"><div mxv mxa="_zs_gallerycd:c" class="form-item"><div mxs="_zs_gallerycd:a" class="form-label">请输入</div><div mxv mxa="_zs_gallerycd:d" class="form-content"><input mxs="_zs_gallerycd:b" class="input w200"/></div></div><div mxv mxa="_zs_gallerycd:e" class="form-item"><div mxs="_zs_gallerycd:a" class="form-label">请输入</div><div mxv mxa="_zs_gallerycd:f" class="form-content"><input mxs="_zs_gallerycd:b" class="input w200"/></div></div><div mxs="_zs_gallerycd:c" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+a+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_gallerycd:g" class="_zs_galleryk"><div mxs="_zs_gallerycd:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(_)+'_text_1"><span mxa="_zs_gallerycd:h" class="_zs_galleryn">'+e(p)+'</span><i mxs="_zs_gallerycd:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(_)+'_text_1">\n&lt;form class="form form-4"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[e,r],render:function(){this.updater.digest({viewId:this.id})}})});