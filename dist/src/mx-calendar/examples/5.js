define("mx-calendar/examples/5",["magix","examples/example","moment","$","../datepicker","mx-copy/index","examples/hl"],(e,a,l)=>{e("../datepicker"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),i=e("moment");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,i,r,d,m){if(l||(l=e),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(t,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},_=/[!')(*]/g;r=function(e){return encodeURIComponent(i(e)).replace(_,v)}}if(!m){var o=/[\\'"]/g;m=function(e){return i(e).replace(o,"\\$&")}}var p="",y=e.yesterday,g=e.tomorrow,u=e.viewId,w=e.text1;return p+='<div mxa="_zs_gallery|:_" class="_zs_galleryg"><div mxa="_zs_gallery|:a" class="_zs_galleryj"><div mxs="_zs_gallery|:_" class="mb20"><div class="mb5">根据可选范围对默认值进行修正</div><div class="mb5">1. 未配置默认选中项且有min时，默认取min和今天中的较大值</div><div>2. 未配置默认选中项且有max时，默认取max和今天中的较小值</div></div><div mxa="_zs_gallery|:b" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min='+r(y)+'"></div></div><div mxa="_zs_gallery|:c" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?min='+r(g)+'"></div></div><div mxa="_zs_gallery|:d" class="mb20"><div class="w200" mx-view="mx-calendar/datepicker?max='+r(y)+'"></div></div><div class="w200" mx-view="mx-calendar/datepicker?max='+r(g)+'"></div></div><div mxa="_zs_gallery|:e" class="_zs_galleryk"><div mxs="_zs_gallery|:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(u)+'_text_1"><span mxa="_zs_gallery|:f" class="_zs_galleryn">'+i(w)+'</span><i mxs="_zs_gallery|:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(u)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    min="&#123;&#123;=tomorrow&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=yesterday&#125;&#125;"/&gt;\n\n&lt;mx-calendar.datepicker class="w200"\n    max="&#123;&#123;=tomorrow&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:i().format("YYYY-MM-DD"),yesterday:i().subtract(1,"days").format("YYYY-MM-DD"),tomorrow:i().add(1,"days").format("YYYY-MM-DD")})}})});