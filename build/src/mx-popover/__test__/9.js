define("mx-popover/__test__/9",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");t.exports=l.extend({tmpl:function(e,n,t,l,s,a,_,i){if(t||(t=e),!s){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,c=function(e){return"&"+r[e]+";"};s=function(e){return""+(null==e?"":e)},l=function(e){return s(e).replace(o,c)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return d[e]},p=/[!')(*]/g;a=function(e){return encodeURIComponent(s(e)).replace(p,x)}}if(!i){var m=/[\\'"]/g;i=function(e){return s(e).replace(m,"\\$&")}}var g="",v=e.viewId,y=e.text1;return g+='<div mxa="_zs_gallerydy:_" class="_zs_galleryg"><div mxs="_zs_gallerydy:_" class="_zs_galleryj"><div class="mb20"><span class="color-9">以下示例：</span>提示浮层显示样式为黑底白字</div><span class="mc-iconfont color-9 fontsize-18" mx-view="mx-popover/index?width=60&content=%E5%88%A0%E9%99%A4&mode=dark&placement=top&alignText=center">&#xe68d;</span></div><div mxa="_zs_gallerydy:a" class="_zs_galleryk"><div mxs="_zs_gallerydy:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_gallerydy:b" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_gallerydy:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-popover class="mc-iconfont color-9 fontsize-18"\n    width="60"\n    content="删除"\n    mode="dark"\n    placement="top"\n    align-text="center"&gt;&amp;#xe68d;&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});