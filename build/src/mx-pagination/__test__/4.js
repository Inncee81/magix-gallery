define("mx-pagination/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");i.exports=l.extend({tmpl:function(e,t,i,l,n,a,_,s){if(i||(i=e),!n){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+r[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,d)}}if(!a){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return x[e]},m=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(m,g)}}if(!s){var o=/[\\'"]/g;s=function(e){return n(e).replace(o,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryc{:_" class="_zs_galleryg"><div mxs="_zs_galleryc{:_" class="_zs_galleryj"><div class="text-center"><div mx-view="mx-pagination/index?jump=false&simplify=true&hideTotal=true&total=100&size=40&page=2"></div></div></div><div mxa="_zs_galleryc{:a" class="_zs_galleryk"><div mxs="_zs_galleryc{:a" class="_zs_galleryi">只有翻页器，没有汇总数据，可自行控制位置</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(v)+'_text_1"><span mxa="_zs_galleryc{:b" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_galleryc{:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;div class="text-center"&gt;\n    &lt;mx-pagination \n        simplify="true"\n        jump="false"\n        hide-total="true"\n        total="100" \n        size="40" \n        page="2"/&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});