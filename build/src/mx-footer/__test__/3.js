define("mx-footer/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,t)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var r=e("__test__/example");e("$");t.exports=r.extend({tmpl:function(e,_,t,r,l,s,i,n){if(t||(t=e),!l){var a={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+a[e]+";"};l=function(e){return""+(null==e?"":e)},r=function(e){return l(e).replace(d,x)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},m=/[!')(*]/g;s=function(e){return encodeURIComponent(l(e)).replace(m,o)}}if(!n){var g=/[\\'"]/g;n=function(e){return l(e).replace(g,"\\$&")}}var u="",v=e.viewId,p=e.text1;return u+='<div mxa="_zs_galleryb3:_" class="_zs_galleryg"><div mxs="_zs_galleryb3:_" class="_zs_galleryj"><div mx-view="mx-footer/index?products=true"></div></div><div mxa="_zs_galleryb3:a" class="_zs_galleryk"><div mxs="_zs_galleryb3:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryb3:b" class="_zs_galleryn">'+l(p)+'</span><i mxs="_zs_galleryb3:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(v)+'_text_1">\n&lt;mx-footer products="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});