define("mx-style/__test__/2",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(l,e,s)=>{l("mx-copy/index"),l("__test__/hl");l("magix");var t=l("__test__/example");l("$");s.exports=t.extend({tmpl:function(l,e,s,t,a,_,n,i){if(s||(s=l),!a){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,p=function(l){return"&"+r[l]+";"};a=function(l){return""+(null==l?"":l)},t=function(l){return a(l).replace(d,p)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(l){return c[l]},m=/[!')(*]/g;_=function(l){return encodeURIComponent(a(l)).replace(m,x)}}if(!i){var u=/[\\'"]/g;i=function(l){return a(l).replace(u,"\\$&")}}var g="",v=l.viewId,o=l.text1;return g+='<div mxv mxa="_zs_galleryd%:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd%:a" class="_zs_galleryj"><div mxv mxa="_zs_galleryd%:b" class="mb20"><input mxs="_zs_galleryd%:_" placeholder="正常尺寸input"/></div><div mxv mxa="_zs_galleryd%:c" class="mb20"><input mxs="_zs_galleryd%:a" class="input-small" placeholder="小号input"/></div><div mxs="_zs_galleryd%:b" class="mb20 clearfix"><span class="color-9 fl lh32">只使用input样式：</span><span class="input w200 fl"></span></div></div><div mxa="_zs_galleryd%:d" class="_zs_galleryk"><div mxs="_zs_galleryd%:c" class="_zs_galleryi">Input</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_galleryd%:e" class="_zs_galleryn">'+a(o)+'</span><i mxs="_zs_galleryd%:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(v)+'_text_1">\n&lt;input type="text" placeholder="正常尺寸input"/&gt;\n\n&lt;input type="text" class="input-small" placeholder="小号input"/&gt;\n\n&lt;span class="input w200 fl"&gt;&lt;/span&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});