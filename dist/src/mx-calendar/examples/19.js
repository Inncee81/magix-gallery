define("mx-calendar/examples/19",["magix","examples/example","moment","$","../datepicker","mx-copy/index","examples/hl"],(e,a,l)=>{e("../datepicker"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example"),r=e("moment");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,r,i,n,t){if(l||(l=e),!r){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};r=function(e){return""+(null==e?"":e)},s=function(e){return r(e).replace(c,m)}}if(!i){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return x[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(r(e)).replace(p,_)}}if(!t){var o=/[\\'"]/g;t=function(e){return r(e).replace(o,"\\$&")}}var g="",v=e.today,y=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallery&:_" class="_zs_galleryg"><div mxa="_zs_gallery&:a" class="_zs_galleryj"><div mxs="_zs_gallery&:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>禁止选择</div><div class="w200" mx-view="mx-calendar/datepicker?selected='+i(v)+'&disabled=true"></div></div><div mxa="_zs_gallery&:b" class="_zs_galleryk"><div mxs="_zs_gallery&:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_gallery&:c" class="_zs_galleryn">'+r(u)+'</span><i mxs="_zs_gallery&:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;mx-calendar.datepicker class="w200"\n    selected="&#123;&#123;=today&#125;&#125;"\n    disabled="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest({today:r().format("YYYY-MM-DD")})}})});