define("mx-pagination/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");a.exports=i.extend({tmpl:function(e,l,a,i,n,t,s,r){if(a||(a=e),!n){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+x[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(c,d)}}if(!t){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return m[e]},_=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(_,p)}}if(!r){var g=/[\\'"]/g;r=function(e){return n(e).replace(g,"\\$&")}}var o="",v=e.viewId,u=e.text1;return o+='<div mxa="_zs_galleryc-:_" class="_zs_galleryg"><div mxs="_zs_galleryc-:_" class="_zs_galleryj"><div class="text-center"><div mx-view="mx-pagination/index?jump=false&simplify=true&hideTotal=true&total=100&size=40&page=2"></div></div></div><div mxa="_zs_galleryc-:a" class="_zs_galleryk"><div mxs="_zs_galleryc-:a" class="_zs_galleryi">只有翻页器，没有汇总数据，可自行控制位置</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(v)+'_text_1"><span mxa="_zs_galleryc-:b" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_galleryc-:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(v)+'_text_1">\n&lt;div class="text-center"&gt;\n    &lt;mx-pagination \n        simplify="true"\n        jump="false"\n        hide-total="true"\n        total="100" \n        size="40" \n        page="2"/&gt;\n&lt;/div&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});