define("mx-effects/examples/10",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,r)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");r.exports=l.extend({tmpl:function(e,s,r,l,n,a,t,i){if(r||(r=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(x,d)}}if(!a){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return g[e]},c=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(c,p)}}if(!i){var _=/[\\'"]/g;i=function(e){return n(e).replace(_,"\\$&")}}var v="",o=e.viewId,f=e.text1;return v+='<div mxa="_zs_gallerybH:_" class="_zs_galleryg"><div mxs="_zs_gallerybH:_" class="_zs_galleryj"><div class="mb20"><div class="mr20" mx-view="mx-effects/progress?type=degree&num=60"></div><div class="mr20" mx-view="mx-effects/progress?type=degree&num=20.22"></div><div mx-view="mx-effects/progress?type=degree&num=100"></div></div></div><div mxa="_zs_gallerybH:a" class="_zs_galleryk"><div mxs="_zs_gallerybH:a" class="_zs_galleryi">刻度型展示值取整</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(o)+'_text_1"><span mxa="_zs_gallerybH:b" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerybH:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(o)+'_text_1">\n&lt;mx-effects.progress\n    type="degree"\n    num="60"/&gt;\n    \n&lt;mx-effects.progress\n    type="degree"\n    num="20.22"/&gt;\n\n&lt;mx-effects.progress\n    type="degree"\n    num="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});