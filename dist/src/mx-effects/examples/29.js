define("mx-effects/examples/29",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,l)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example");e("$");l.exports=r.extend({tmpl:function(e,s,l,r,n,a,i,t){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},r=function(e){return n(e).replace(c,x)}}if(!a){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},d=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(d,p)}}if(!t){var v=/[\\'"]/g;t=function(e){return n(e).replace(v,"\\$&")}}var _="",g=e.viewId,f=e.text1;return _+='<div mxa="_zs_galleryb1:_" class="_zs_galleryg"><div mxs="_zs_galleryb1:_" class="_zs_galleryj"><div class="mb60 clearfix"><span class="mr60">左右对比：</span><div mx-view="mx-effects/progress?vs=true&num=30.56"></div></div><div class="mb40"><span class="mr60">自定义颜色：</span><div mx-view="mx-effects/progress?vs=true&num=50.6&color=%23ffb400&colorVs=%23fe4186"></div></div></div><div mxa="_zs_galleryb1:a" class="_zs_galleryk"><div mxs="_zs_galleryb1:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(g)+'_text_1"><span mxa="_zs_galleryb1:b" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_galleryb1:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(g)+'_text_1">\n&lt;!-- 默认颜色 --&gt;\n&lt;mx-effects.progress \n    vs="true"\n    num="30.56" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-effects.progress\n    vs="true"\n    num="50.6" \n    color="#ffb400"\n    color-vs="#fe4186"/&gt;\n\n        </pre></div></div>'},render:function(){this.updater.digest()}})});