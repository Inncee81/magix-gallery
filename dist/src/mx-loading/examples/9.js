define("mx-loading/examples/9",["magix","examples/example","$","mx-copy/index","examples/hl"],(i,l,d)=>{i("mx-copy/index"),i("examples/hl");i("magix");var e=i("examples/example");i("$");d.exports=e.extend({tmpl:function(i,l,d,e,a,s,t,n){if(d||(d=i),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,x=function(i){return"&"+o[i]+";"};a=function(i){return""+(null==i?"":i)},e=function(i){return a(i).replace(g,x)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},r=function(i){return m[i]},v=/[!')(*]/g;s=function(i){return encodeURIComponent(a(i)).replace(v,r)}}if(!n){var c=/[\\'"]/g;n=function(i){return a(i).replace(c,"\\$&")}}var p="",_=i.viewId,y=i.text1;return p+='<div mxa="_zs_galleryc+:_" class="_zs_galleryg"><div mxs="_zs_galleryc+:_" class="_zs_galleryj clearfix"><div class="pr fl ml40"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-dots"><div class="mx-loading-dot1 mx-loading-bg-grey"></div><div class="mx-loading-dot2 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 60px; height:60px; margin-left: -30px;"><div class="mx-loading-dots"><div class="mx-loading-dot1 mx-loading-bg-brand"></div><div class="mx-loading-dot2 mx-loading-bg-brand"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-dots"><div class="mx-loading-dot1 mx-loading-bg-grey"></div><div class="mx-loading-dot2 mx-loading-bg-grey"></div></div></div></div><div class="pr fl ml80"><div style="position:relative; left: 50%; width: 40px; height:40px; margin-left: -20px;"><div class="mx-loading-dots"><div class="mx-loading-dot1" style="background-color:#51a300"></div><div class="mx-loading-dot2" style="background-color:#51a300"></div></div></div></div></div><div mxa="_zs_galleryc+:a" class="_zs_galleryk"><div mxs="_zs_galleryc+:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(_)+'_text_1"><span mxa="_zs_galleryc+:b" class="_zs_galleryn">'+a(y)+'</span><i mxs="_zs_galleryc+:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+e(_)+'_text_1">\n&lt;!-- 默认 --&gt;\n&lt;mx-loading.anim mode="dots" /&gt;\n\n&lt;!-- 品牌色 --&gt;\n&lt;mx-loading.anim mode="dots" type="brand" /&gt;\n\n&lt;!-- 自定义尺寸 --&gt;\n&lt;mx-loading.anim mode="dots" size="40" /&gt;\n\n&lt;!-- 自定义颜色 --&gt;\n&lt;mx-loading.anim mode="dots" size="40" color="#51a300" /&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});