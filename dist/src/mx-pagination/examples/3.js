define("mx-pagination/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,a,l,i,n,s,r,t){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(x,d)}}if(!s){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return _[e]},c=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(c,p)}}if(!t){var g=/[\\'"]/g;t=function(e){return n(e).replace(g,"\\$&")}}var o="",u=e.viewId,v=e.text1;return o+='<div mxa="_zs_gallerydm:_" class="_zs_galleryg"><div mxs="_zs_gallerydm:_" class="_zs_galleryj"><div mx-view="mx-pagination/index?mini=true&jump=false&total=100&size=40&page=1"></div></div><div mxa="_zs_gallerydm:a" class="_zs_galleryk"><div mxs="_zs_gallerydm:a" class="_zs_galleryi">只能顺序翻页</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(u)+'_text_1"><span mxa="_zs_gallerydm:b" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_gallerydm:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(u)+'_text_1">\n&lt;mx-pagination \n    mini="true"\n    jump="false"\n    total="100" \n    size="40" \n    page="1"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});