define("mx-calendar/__test__/15",["magix","__test__/example","moment","$","../rangepicker","mx-copy/index","__test__/hl"],(e,a,s)=>{e("../rangepicker"),e("mx-copy/index"),e("__test__/hl");e("magix");var n=e("__test__/example");e("moment"),e("$");s.exports=n.extend({tmpl:function(e,a,s,n,r,l,t,_){if(s||(s=e),!r){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+i[e]+";"};r=function(e){return""+(null==e?"":e)},n=function(e){return r(e).replace(c,d)}}if(!l){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return m[e]},o=/[!')(*]/g;l=function(e){return encodeURIComponent(r(e)).replace(o,x)}}if(!_){var g=/[\\'"]/g;_=function(e){return r(e).replace(g,"\\$&")}}t||(t=function(e,a,s,n){for(n=e[p];--n;)if(e[s=p+n]===a)return s;return e[s=p+e[p]++]=a,s});var p="",u="",v=e.viewId,f=e.text1;return u+='<div mxa="_zs_gallery7:_" class="_zs_galleryg"><div mxa="_zs_gallery7:a" class="_zs_galleryj"><div mxs="_zs_gallery7:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>限制周二到周四不可选</div><div class="w240" mx-view="mx-calendar/rangepicker?min=2018-08-01&max=2018-08-29&start=2018-08-06&end=2018-08-10&shortcuts=false&disabledWeeks='+t(s,[2,3,4])+'"></div></div><div mxa="_zs_gallery7:b" class="_zs_galleryk"><div mxs="_zs_gallery7:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(v)+'_text_1"><span mxa="_zs_gallery7:c" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_gallery7:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(v)+'_text_1">\n&lt;mx-calendar.rangepicker class="w240"   \n    min="2018-08-01"\n    max="2018-08-29"\n    start="2018-08-06"\n    end="2018-08-10"\n    shortcuts="false"\n    disabled-weeks="&#123;&#123;@[2,3,4]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});