define("mx-pagination/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var i=e("__test__/example");e("$");_.exports=i.extend({tmpl:function(e,n,_,i,t,a,l,s){if(_||(_=e),!t){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};t=function(e){return""+(null==e?"":e)},i=function(e){return t(e).replace(c,x)}}if(!a){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return d[e]},g=/[!')(*]/g;a=function(e){return encodeURIComponent(t(e)).replace(g,m)}}if(!s){var o=/[\\'"]/g;s=function(e){return t(e).replace(o,"\\$&")}}var p="",u=e.viewId,v=e.text1;return p+='<div mxa="_zs_gallerycT:_" class="_zs_galleryh"><div mxs="_zs_gallerycT:_" class="_zs_galleryk"><div mx-view="mx-pagination/index?mini=true&jump=false&total=100&size=40&page=1"></div></div><div mxa="_zs_gallerycT:a" class="_zs_galleryl"><div mxs="_zs_gallerycT:a" class="_zs_galleryj">只能顺序翻页</div><div class="_zs_gallerym" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(u)+'_text_1"><span mxa="_zs_gallerycT:b" class="_zs_galleryo">'+t(v)+'</span><i mxs="_zs_gallerycT:b" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(u)+'_text_1">\n&lt;mx-pagination \n    mini="true"\n    jump="false"\n    total="100" \n    size="40" \n    page="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});