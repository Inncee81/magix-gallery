define("mx-effects/__test__/12",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(s,a,l)=>{s("mx-copy/index"),s("__test__/hl");s("magix");var e=s("__test__/example");s("$");l.exports=e.extend({tmpl:function(s,a,l,e,_,r,i,t){if(l||(l=s),!_){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,c=function(s){return"&"+n[s]+";"};_=function(s){return""+(null==s?"":s)},e=function(s){return _(s).replace(m,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(s){return x[s]},d=/[!')(*]/g;r=function(s){return encodeURIComponent(_(s)).replace(d,f)}}if(!t){var g=/[\\'"]/g;t=function(s){return _(s).replace(g,"\\$&")}}var o="",v=s.viewId,y=s.text1;o+='<div mxa="_zs_gallerybf:_" class="_zs_galleryg"><div mxa="_zs_gallerybf:a" class="_zs_galleryj"><div mxa="_zs_gallerybf:b" class="mb10"><div mxa="_zs_gallerybf:c" class="mx-star"><div mxa="_zs_gallerybf:d" class="mx-star-bg">';for(var b=0;b<5;b++)o+='<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';o+='</div><div mxa="_zs_gallerybf:e" class="mx-star-on" style="width: 50%;"><div mxa="_zs_gallerybf:f" class="mx-star-inner">';for(b=0;b<5;b++)o+='<span mxs="_zs_gallerybf:a" class="mx-star-item" style="color:#ffb400"><i class="mc-iconfont">&#xe60f;</i></span>';o+='</div></div></div></div><div mxa="_zs_gallerybf:g" class="mb10"><div mxa="_zs_gallerybf:h" class="mx-star"><div mxa="_zs_gallerybf:i" class="mx-star-bg">';for(b=0;b<5;b++)o+='<span mxs="_zs_gallerybf:_" class="mx-star-item"><i class="mc-iconfont">&#xe60f;</i></span>';o+='</div><div mxa="_zs_gallerybf:j" class="mx-star-on" style="width: 80%;"><div mxa="_zs_gallerybf:k" class="mx-star-inner">';for(b=0;b<5;b++)o+='<span mxs="_zs_gallerybf:b" class="mx-star-item" style="color:rgb(81, 163, 0)"><i class="mc-iconfont">&#xe60f;</i></span>';return o+='</div></div></div></div></div><div mxa="_zs_gallerybf:l" class="_zs_galleryk"><div mxs="_zs_gallerybf:c" class="_zs_galleryi">自定义颜色</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(v)+'_text_1"><span mxa="_zs_gallerybf:m" class="_zs_galleryn">'+_(y)+'</span><i mxs="_zs_gallerybf:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(v)+'_text_1">\n&lt;mx-effects.star num="2.5"\n    color="#ffb400"/&gt;\n    \n&lt;mx-effects.star num="4"\n    color="rgb(81, 163, 0)"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});