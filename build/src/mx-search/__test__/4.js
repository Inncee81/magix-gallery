define("mx-search/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var l=e("__test__/example");e("$");s.exports=l.extend({tmpl:function(e,a,s,l,c,_,r,n){if(s||(s=e),!c){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};c=function(e){return""+(null==e?"":e)},l=function(e){return c(e).replace(t,d)}}if(!_){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return x[e]},g=/[!')(*]/g;_=function(e){return encodeURIComponent(c(e)).replace(g,m)}}if(!n){var p=/[\\'"]/g;n=function(e){return c(e).replace(p,"\\$&")}}var o="",u=e.searchValue,v=e.viewId,h=e.text1;return o+='<div mxa="_zs_galleryc%:_" class="_zs_galleryh"><div mxa="_zs_galleryc%:a" class="_zs_galleryk"><div mxa="_zs_galleryc%:b" class="mb20"><span mxs="_zs_galleryc%:_" class="color-9">回车搜索：</span><span>campaignId = '+l(u)+'</span></div><div mxs="_zs_galleryc%:a" class="w200" mx-search="'+a+'change()" mx-view="mx-search/index?searchKey=campaignId&placeholder=%E6%90%9C%E7%B4%A2%E8%AE%A1%E5%88%92"></div></div><div mxa="_zs_galleryc%:c" class="_zs_galleryl"><div mxs="_zs_galleryc%:b" class="_zs_galleryj">单个搜索，封装事件</div><div class="_zs_gallerym" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(v)+'_text_1"><span mxa="_zs_galleryc%:d" class="_zs_galleryo">'+c(h)+'</span><i mxs="_zs_galleryc%:c" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(v)+'_text_1">\n&lt;mx-search class="w200"\n    search-key="campaignId"\n    placeholder="搜索计划"\n    mx-search="change()"/&gt;</pre></div></div>'},render:function(){this.updater.digest({searchValue:""})},"change<search>":function(e){e.preventDefault(),this.updater.digest({searchValue:e.searchValue})}})});