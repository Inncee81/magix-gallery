define("mx-popconfirm/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,n,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");a.exports=l.extend({tmpl:function(e,n,a,l,i,r,s,t){if(a||(a=e),!i){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+m[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(x,c)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},_=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(_,p)}}if(!t){var o=/[\\'"]/g;t=function(e){return i(e).replace(o,"\\$&")}}var g="",v=e.viewId,f=e.text1;return g+='<div mxa="_zs_gallerydm:_" class="_zs_galleryg"><div mxs="_zs_gallerydm:_" class="_zs_galleryj"><span mx-view="mx-popconfirm/index?content=%E7%A1%AE%E8%AE%A4%E5%88%A0%E9%99%A4%E5%90%97%EF%BC%9F&width=260&alignText=center"><a href="javascript:;" class="link-brand">删除</a></span></div><div mxa="_zs_gallerydm:a" class="_zs_galleryk"><div mxs="_zs_gallerydm:a" class="_zs_galleryi">自定义宽度 + 文字居中对齐</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerydm:b" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_gallerydm:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(v)+'_text_1">\n&lt;mx-popconfirm \n    content="确认删除吗？"\n    width="260"\n    align-text="center"&gt;\n    &lt;a href="javascript:;" class="link-brand"&gt;删除&lt;/a&gt;\n&lt;/mx-popconfirm&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});