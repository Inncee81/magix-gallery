define("mx-effects/examples/23",["magix","examples/example","$","../progress","mx-copy/index","examples/hl"],(e,s,l)=>{e("../progress"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");l.exports=a.extend({tmpl:function(e,s,l,a,r,n,i,t){if(l||(l=e),!r){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(m,_)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return c[e]},d=/[!')(*]/g;n=function(e){return encodeURIComponent(r(e)).replace(d,p)}}if(!t){var g=/[\\'"]/g;t=function(e){return r(e).replace(g,"\\$&")}}var o="",f=e.viewId,v=e.text2;return o+='<div mxa="_zs_gallerybR:_" class="_zs_galleryg"><div mxs="_zs_gallerybR:_" class="_zs_galleryj"><div mx-view="mx-effects/progress?text=false&num=60.555"></div></div><div mxa="_zs_gallerybR:a" class="_zs_galleryk"><div mxs="_zs_gallerybR:a" class="_zs_galleryi">不需要文案</div><div class="_zs_galleryl" mx-success="'+s+'done({id:2})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_2"><span mxa="_zs_gallerybR:b" class="_zs_galleryn">'+r(v)+'</span><i mxs="_zs_gallerybR:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(f)+'_text_2">\n&lt;mx-effects.progress\n    text="false"\n    num="60.12"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});