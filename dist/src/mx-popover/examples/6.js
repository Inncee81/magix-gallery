define("mx-popover/examples/6",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var t=e("examples/example");e("$");l.exports=t.extend({tmpl:function(e,a,l,t,n,s,r,i){if(l||(l=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,x=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},t=function(e){return n(e).replace(m,x)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(n(e)).replace(d,c)}}if(!i){var _=/[\\'"]/g;i=function(e){return n(e).replace(_,"\\$&")}}var g="",v=e.viewId,u=e.text1;return g+='<div mxa="_zs_gallerydI:_" class="_zs_galleryg"><div mxs="_zs_gallerydI:_" class="_zs_galleryj"><span class="btn" mx-view="mx-popover/index?content=%E7%AC%AC%E4%B8%80%E8%A1%8C%3Cbr%2F%3E%E7%AC%AC%E4%BA%8C%E8%A1%8C%3Ca%20href%3D%27https%3A%2F%2Fwww.taobao.com%2F%27%20target%3D%27_blank%27%20class%3D%27link-brand%27%3E%E8%B7%B3%E8%BD%AC%E9%93%BE%E6%8E%A5%3C%2Fa%3E&placement=bottom">内容包含html</span></div><div mxa="_zs_gallerydI:a" class="_zs_galleryk"><div mxs="_zs_gallerydI:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_gallerydI:b" class="_zs_galleryn">'+n(u)+'</span><i mxs="_zs_gallerydI:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+t(v)+'_text_1">\n&lt;mx-popover class="btn"\n    content="第一行&lt;br/&gt;第二行&lt;a href=\'https://www.taobao.com/\' target=\'_blank\' class=\'link-brand\'&gt;跳转链接&lt;/a&gt;"\n    placement="bottom"&gt;内容包含html&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});