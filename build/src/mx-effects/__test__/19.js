define("mx-effects/__test__/19",["magix","__test__/example","$","../progress","mx-copy/index","__test__/hl"],(e,r,s)=>{e("../progress"),e("mx-copy/index"),e("__test__/hl");e("magix");var t=e("__test__/example");e("$");s.exports=t.extend({tmpl:function(e,r,s,t,n,l,_,i){if(s||(s=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},a=/[&<>"'`]/g,m=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(a,m)}}if(!l){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return d[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(n(e)).replace(x,o)}}if(!i){var f=/[\\'"]/g;i=function(e){return n(e).replace(f,"\\$&")}}var g="",p=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryaZ:_" class="_zs_galleryf"><div mxs="_zs_galleryaZ:_" class="_zs_galleryh"><div mx-view="mx-effects/progress?type=circle&num=23.3"></div><div mx-view="mx-effects/progress?type=circle&num=50"></div><div mx-view="mx-effects/progress?type=circle&width=100&border=6&num=75.25&color=%23ffb400"></div></div><div mxa="_zs_galleryaZ:a" class="_zs_galleryi"><div mxs="_zs_galleryaZ:a" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(p)+'_text_1"><span mxa="_zs_galleryaZ:b" class="_zs_galleryl">'+n(v)+'</span><i mxs="_zs_galleryaZ:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(p)+'_text_1">\n&lt;mx-effects.progress\n    type="circle"\n    num="23.3"/&gt;\n\n&lt;mx-effects.progress\n    type="circle"\n    num="50"/&gt;\n\n&lt;mx-effects.progress\n    type="circle"\n    width="100"\n    border="6"\n    num="75.25"\n    color="#ffb400"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});