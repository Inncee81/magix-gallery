define("mx-form/__test__/19",["magix","__test__/example","mx-form/index","mx-form/validator","$","mx-copy/index","__test__/hl"],(l,t,s)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var a=l("__test__/example"),i=l("mx-form/index"),r=l("mx-form/validator");l("$");s.exports=a.extend({tmpl:function(l,t,s,a,i,r,e,n){if(s||(s=l),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,c=function(l){return"&"+m[l]+";"};i=function(l){return""+(null==l?"":l)},a=function(l){return i(l).replace(_,c)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(l){return d[l]},o=/[!')(*]/g;r=function(l){return encodeURIComponent(i(l)).replace(o,v)}}if(!n){var g=/[\\'"]/g;n=function(l){return i(l).replace(g,"\\$&")}}var x="",f=l.viewId,b=l.text1;return x+='<div mxv mxa="_zs_galleryb#:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryb#:a" class="_zs_galleryj clearfix"><div mxs="_zs_galleryb#:_" class="mb10 lh22"><div>class：small-form（margin-bottom:20px）；align-right（文字右对齐）</div></div><form mxv mxa="_zs_galleryb#:b" class="form small-form align-right"><div mxv mxa="_zs_galleryb#:c" class="form-item"><div mxs="_zs_galleryb#:a" class="form-label">请输入</div><div mxv mxa="_zs_galleryb#:d" class="form-content"><input mxs="_zs_galleryb#:b" class="input w200"/></div></div><div mxv mxa="_zs_galleryb#:e" class="form-item"><div mxs="_zs_galleryb#:c" class="form-label">右对齐输入框</div><div mxv mxa="_zs_galleryb#:f" class="form-content"><input mxs="_zs_galleryb#:b" class="input w200"/></div></div><div mxs="_zs_galleryb#:d" class="form-footer"><a href="javascript:;" class="btn w80 btn-brand mr20" mx-click="'+t+'confirm()">确定</a><a href="javascript:;" class="btn w80">取消</a></div></form></div><div mxa="_zs_galleryb#:g" class="_zs_galleryk"><div mxs="_zs_galleryb#:e" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_galleryb#:h" class="_zs_galleryn">'+i(b)+'</span><i mxs="_zs_galleryb#:f" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(f)+'_text_1">\n&lt;form class="form small-form align-right"&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;请输入&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-item"&gt;\n        &lt;div class="form-label"&gt;右对齐输入框&lt;/div&gt;\n        &lt;div class="form-content"&gt;\n            &lt;input class="input w200"/&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class="form-footer"&gt;\n        &lt;a href="javascript:;" class="btn w80 btn-brand mr20"\n            mx-click="confirm()"&gt;确定&lt;/a&gt;\n        &lt;a href="javascript:;" class="btn w80"&gt;取消&lt;/a&gt;\n    &lt;/div&gt;\n&lt;/form&gt;\n        </pre></div></div>'},mixins:[i,r],render:function(){this.updater.digest({viewId:this.id})}})});