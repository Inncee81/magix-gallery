define("mx-form/examples/19",["magix","examples/example","mx-form/index","mx-form/validator","$","mx-copy/index","examples/hl"],(l,a,s)=>{l("mx-copy/index"),l("examples/hl");l("magix");var t=l("examples/example"),i=l("mx-form/index"),e=l("mx-form/validator");l("$");s.exports=t.extend({tmpl:function(l,a,s,t,i,e,r,m){if(s||(s=l),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(l){return"&"+n[l]+";"};i=function(l){return""+(null==l?"":l)},t=function(l){return i(l).replace(c,d)}}if(!e){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return v[l]},g=/[!')(*]/g;e=function(l){return encodeURIComponent(i(l)).replace(g,o)}}if(!m){var x=/[\\'"]/g;m=function(l){return i(l).replace(x,"\\$&")}}var _="",f=l.viewId,p=l.text1;return _+='<div mxv mxa="_zs_gallerycb:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerycb:a" class="_zs_galleryj clearfix"><div mxs="_zs_gallerycb:_" class="mb10 lh22"><div>class：small-form（margin-bottom:20px）；align-right（文字右对齐）</div></div><form mxv mxa="_zs_gallerycb:b" class="form small-form align-right"><div mxv mxa="_zs_gallerycb:c" class="form-item"><div mxs="_zs_gallerycb:a" class="form-label">请输入</div><div mxv mxa="_zs_gallerycb:d" class="form-content"><input mxs="_zs_gallerycb:b" class="input w200"/></div></div><div mxv mxa="_zs_gallerycb:e" class="form-item"><div mxs="_zs_gallerycb:c" class="form-label">右对齐输入框</div><div mxv mxa="_zs_gallerycb:f" class="form-content"><input mxs="_zs_gallerycb:b" class="input w200"/></div></div><div mxs="_zs_gallerycb:d" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+a+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_gallerycb:g" class="_zs_galleryk"><div mxs="_zs_gallerycb:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+e(f)+'_text_1"><span mxa="_zs_gallerycb:h" class="_zs_galleryn">'+i(p)+'</span><i mxs="_zs_gallerycb:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(f)+'_text_1">\n&lt;form class="form small-form align-right"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;请输入&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;右对齐输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[i,e],render:function(){this.updater.digest({viewId:this.id})}})});