define("mx-preview/__test__/5",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,i,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var l=e("magix"),r=e("__test__/example");e("$");l.applyStyle("_zs_galleryad","._zs_galleryiK{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryiL{margin-right:20px;margin-bottom:20px;border:1px solid #e6e6e6;background-color:#fafafa}._zs_galleryiM{width:400px;height:220px;padding:10px;border-radius:4px;overflow-y:auto;border:1px solid #e6e6e6}"),a.exports=r.extend({tmpl:function(e,i,a,l,r,t,n,s){if(a||(a=e),!r){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+_[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(d,m)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return c[e]},x=/[!')(*]/g;t=function(e){return encodeURIComponent(r(e)).replace(x,o)}}if(!s){var g=/[\\'"]/g;s=function(e){return r(e).replace(g,"\\$&")}}var p="",u=e.viewId,y=e.text1;return p+='<div mxa="_zs_galleryb;:_" class="_zs_galleryf"><div mxs="_zs_galleryb;:_" class="_zs_galleryh"><div class="_zs_galleryiL" mx-view="mx-preview/index?format=23&datuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1HcdJr49YBuNjy0Ffwu0IsVXa.png&xiaotuUrl=%2F%2Fimg.alicdn.com%2Fsimba%2Fimg%2FTB1pJkOrGSWBuNjSsrbwu10mVXa.png&clickUrl=%2F%2Fa1.alicdn.com%2Fcreation%2Fhtml%2F2017%2F06%2F13%2Fcreation-2480Wzuixl78VWkc-10131895.html&width=190&height=43&maxWidth=100&maxHeight=100"></div></div><div mxa="_zs_galleryb;:a" class="_zs_galleryi"><div mxs="_zs_galleryb;:a" class="_zs_galleryg">套图（业务场景大小图）预览</div><div class="_zs_galleryj" mx-success="'+i+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(u)+'_text_1"><span mxa="_zs_galleryb;:b" class="_zs_galleryl">'+r(y)+'</span><i mxs="_zs_galleryb;:b" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+l(u)+'_text_1">\n&lt;mx-preview class="demo"\n    format="23"\n    datu-url="//img.alicdn.com/simba/img/TB1HcdJr49YBuNjy0Ffwu0IsVXa.png"\n    xiaotu-url="//img.alicdn.com/simba/img/TB1pJkOrGSWBuNjSsrbwu10mVXa.png"\n    click-url="//a1.alicdn.com/creation/html/2017/06/13/creation-2480Wzuixl78VWkc-10131895.html"\n    width="190"\n    height="43"\n    max-width="100"\n    max-height="100"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});