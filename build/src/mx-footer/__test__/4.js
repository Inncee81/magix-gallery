define("mx-footer/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,_,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var r=e("magix"),t=e("__test__/example");e("$");r.applyStyle("_zs_galleryR","._zs_galleryfE{padding:20px;background-color:#3d414d}"),l.exports=t.extend({tmpl:function(e,_,l,r,t,s,a,i){if(l||(l=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},r=function(e){return t(e).replace(d,x)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(t(e)).replace(g,o)}}if(!i){var m=/[\\'"]/g;i=function(e){return t(e).replace(m,"\\$&")}}var u="",p=e.viewId,v=e.text1;return u+='<div mxa="_zs_galleryb(:_" class="_zs_galleryg"><div mxs="_zs_galleryb(:_" class="_zs_galleryj"><div class="_zs_galleryfE"><div mx-view="mx-footer/index?dark=true&products=true"></div></div></div><div mxa="_zs_galleryb(:a" class="_zs_galleryk"><div mxs="_zs_galleryb(:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+_+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(p)+'_text_1"><span mxa="_zs_galleryb(:b" class="_zs_galleryn">'+t(v)+'</span><i mxs="_zs_galleryb(:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(p)+'_text_1">\n&lt;mx-footer dark="true" products="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});