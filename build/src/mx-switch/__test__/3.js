define("mx-switch/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");_.exports=l.extend({tmpl:function(e,s,_,l,i,t,a,n){if(_||(_=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(c,d)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},p=/[!')(*]/g;t=function(e){return encodeURIComponent(i(e)).replace(p,m)}}if(!n){var o=/[\\'"]/g;n=function(e){return i(e).replace(o,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_galleryeh:_" class="_zs_galleryg"><div mxs="_zs_galleryeh:_" class="_zs_galleryj clearfix"><div class="mb20"><span class="color-9">以下示例：</span>未选中 + 禁止选择 + 禁用原因说明</div><span mx-view="mx-switch/index?tip=%E7%A6%81%E6%AD%A2%E9%80%89%E6%8B%A9%E7%9A%84%E5%8E%9F%E5%9B%A0%E8%AF%B4%E6%98%8E&disabled=true"></span></div><div mxa="_zs_galleryeh:a" class="_zs_galleryk"><div mxs="_zs_galleryeh:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryeh:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryeh:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-switch\n    tip="禁止选择的原因说明"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});