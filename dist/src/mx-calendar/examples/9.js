define("mx-calendar/examples/9",["magix","examples/example","moment","$","../rangepicker","mx-copy/index","examples/hl"],(e,a,n)=>{e("../rangepicker"),e("mx-copy/index"),e("examples/hl");e("magix");var r=e("examples/example"),i=e("moment");e("$");n.exports=r.extend({tmpl:function(e,a,n,r,i,l,t,s){if(n||(n=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(c,m)}}if(!l){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return x[e]},y=/[!')(*]/g;l=function(e){return encodeURIComponent(i(e)).replace(y,o)}}if(!s){var _=/[\\'"]/g;s=function(e){return i(e).replace(_,"\\$&")}}t||(t=function(e,a,n,r){for(r=e[v];--r;)if(e[n=v+r]===a)return n;return e[n=v+e[v]++]=a,n});var v="",p="",g=e.today,f=e.viewId,u=e.text1;return p+='<div mxa="_zs_gallery/:_" class="_zs_galleryg"><div mxa="_zs_gallery/:a" class="_zs_galleryj"><div mxs="_zs_gallery/:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>不对比</div><div>快捷方式包含不限和动态计算的</div></div></div><div class="w240" mx-view="mx-calendar/rangepicker?start='+l(g)+"&end=%E4%B8%8D%E9%99%90&shortkeys="+t(n,["dynamicStart15","dynamicStart30","dynamicStart60","dynamicStart90","dynamicEndThisMonth","dynamicEndNextMonth","forever"])+'"></div></div><div mxa="_zs_gallery/:b" class="_zs_galleryk"><div mxs="_zs_gallery/:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+l(f)+'_text_1"><span mxa="_zs_gallery/:c" class="_zs_galleryn">'+i(u)+'</span><i mxs="_zs_gallery/:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(f)+'_text_1">\n&lt;mx-calendar.rangepicker class="w240"\n    start="'+r(g)+"\"\n    end=\"不限\"\n    shortkeys=\"&#123;&#123;@[\n        'dynamicStart15',\n        'dynamicStart30',\n        'dynamicStart60',\n        'dynamicStart90',\n        'dynamicEndThisMonth',\n        'dynamicEndNextMonth',\n        'forever'\n    ]&#125;&#125;\"/&gt;</pre></div></div>"},render:function(){this.updater.digest({today:i().format("YYYY-MM-DD")})}})});