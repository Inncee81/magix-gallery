define("mx-pagination/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,n,_)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");_.exports=a.extend({tmpl:function(e,n,_,a,i,s,t,l){if(_||(_=e),!i){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+r[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(c,x)}}if(!s){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(e){return d[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(m,g)}}if(!l){var o=/[\\'"]/g;l=function(e){return i(e).replace(o,"\\$&")}}var p="",v=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryc*:_" class="_zs_galleryg"><div mxs="_zs_galleryc*:_" class="_zs_galleryj"><div mx-view="mx-pagination/index?total=600&size=40&step=4&sizesChange=false&page=1"></div></div><div mxa="_zs_galleryc*:a" class="_zs_galleryk"><div mxs="_zs_galleryc*:a" class="_zs_galleryi">禁止修改每页展示数 + 页码过多时中间显示4条页码（默认5条）</div><div class="_zs_galleryl" mx-success="'+n+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryc*:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_galleryc*:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(v)+'_text_1">\n&lt;mx-pagination \n    total="600" \n    size="40" \n    step="4"\n    sizes-change="false"\n    page="1" /&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});