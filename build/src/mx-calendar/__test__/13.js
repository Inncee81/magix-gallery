define("mx-calendar/__test__/13",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,l,s)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("moment"),e("$");s.exports=a.extend({tmpl:function(e,l,s,a,i,r,n,_){if(s||(s=e),!i){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+t[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(c,d)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return m[e]},x=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(x,v)}}if(!_){var o=/[\\'"]/g;_=function(e){return i(e).replace(o,"\\$&")}}var g="",p=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallery5:_" class="_zs_galleryg"><div mxs="_zs_gallery5:_" class="_zs_galleryj"><div class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>历史选中结果不在可选范围内</div><div>重新选择时只能在新范围内选择</div></div></div><div class="w240" mx-view="mx-calendar/rangepicker?min=2018-08-17&start=2018-08-06&end=2018-08-10&shortcuts=false"></div></div><div mxa="_zs_gallery5:a" class="_zs_galleryk"><div mxs="_zs_gallery5:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_gallery5:b" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallery5:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(p)+'_text_1">\n&lt;mx-calendar.rangepicker class="w240"   \n    min="2018-08-17"\n    start="2018-08-06"\n    end="2018-08-10"\n    shortcuts="false"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});