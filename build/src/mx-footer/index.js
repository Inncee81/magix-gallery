define("mx-footer/index",["magix","mx-mustache/index","$"],(l,e,a)=>{var t=l("magix"),r=l("mx-mustache/index"),o=l("$");t.applyStyle("_zs_galleryN","._zs_galleryfj{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryfk #alimama-footer{text-align:center}._zs_galleryfk._zs_galleryfl #alimama-footer a,._zs_galleryfk._zs_galleryfl #alimama-footer span{color:#fff}._zs_galleryfm{position:relative;max-width:100%;margin-bottom:20px;padding-left:220px;padding-right:220px;text-align:center}._zs_galleryfm ._zs_galleryfn{position:absolute;top:0;left:0}._zs_galleryfm ._zs_galleryfn img{width:110px}._zs_galleryfm ._zs_galleryfn ._zs_galleryfo{display:block;width:110px;margin-top:5px;font-size:36px;color:#666}._zs_galleryfm ._zs_galleryfp{position:absolute;top:0;right:0;line-height:22px}._zs_galleryfm ._zs_galleryfp img{width:92px;margin-bottom:10px}._zs_galleryfm dl{float:left;font-size:16px;line-height:32px}._zs_galleryfm dl dt{margin-bottom:16px;opacity:.5}._zs_galleryfm._zs_galleryfl ._zs_galleryfn ._zs_galleryfo,._zs_galleryfm._zs_galleryfl dl dd a,._zs_galleryfm._zs_galleryfl dl dt{color:#fff}._zs_galleryfm._zs_galleryfl dl dd a:hover{color:#4d7fff}._zs_galleryfm._zs_galleryfl ._zs_galleryfp{color:#fff}"),a.exports=t.View.extend({tmpl:function(l,e,a,t,r,o,n,i){if(a||(a=l),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,f=function(l){return"&"+s[l]+";"};r=function(l){return""+(null==l?"":l)},t=function(l){return r(l).replace(_,f)}}if(!o){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(l){return c[l]},d=/[!')(*]/g;o=function(l){return encodeURIComponent(r(l)).replace(d,g)}}if(!i){var m=/[\\'"]/g;i=function(l){return r(l).replace(m,"\\$&")}}var p="",y=l.len,u=l.dark,z=l.width,h=l.products,x=l.footerHtml;if(y>0){p+='<div class="_zs_galleryfm ',u&&(p+=" _zs_galleryfl "),p+='" style="width: '+t(z)+'px;"><div mxs="_zs_gallerya.:_" class="_zs_galleryfn"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_galleryfo">&#xe601;</i></div><div mxa="_zs_gallerya.:_" class="clearfix">';for(var v=0,b=h.length;v<b;v++){var w=h[v];p+='<dl style="width: '+t(100/y)+'%;"><dt>'+t(w.title)+"</dt>";for(var j=0,k=w.thirds,X=k.length;j<X;j++){var P=k[j];p+='<dd><a href="'+t(P.link)+'" target="_blank" rel="noopener noreferrer">'+t(P.name)+"</a></dd>"}p+="</dl>"}p+='</div><div mxs="_zs_gallerya.:a" class="_zs_galleryfp"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>'}return p+='<div class="_zs_galleryfk ',u&&(p+=" _zs_galleryfl "),p+='">'+r(x)+"</div>"},init:function(l){this.assign(l)},assign:function(l){this.__bR="simple"===l.mode,this.__bS=l.products+""=="true",this.__bT=l.width||1184,this.__bq=l.dark+""=="true"},render:function(){var l,e,a,t=this,r=t.__bS,o=t.__bR;/alimama\.(com|net)/i.test(window.location.href)?l=!0:/taobao\.(com|net)/i.test(window.location.href)?e=!0:/tanx\.(com|net)/i.test(window.location.href)?a=!0:l=!0;var n={simple:o,alimama:l,taobao:e,tanx:a},i=[t.getFooter(n)];r&&i.push(t.getProducts()),Promise.all(i).then(function(l){var e=l[0],a=l[1];a=a||[],t.updater.digest({products:a,len:a.length,footerHtml:e,width:t.__bT,dark:t.__bq})})},getFooter:function(l){return new Promise(function(e){o.ajax({url:"//mos.m.taobao.com/union/jsonp/footer",dataType:"jsonp",jsonp:"callback",cache:!0,success:function(a){e(r.render(a.html,l))},error:function(l){e("")}})})},getProducts:function(){return new Promise(function(l){o.ajax({url:"//mos.m.taobao.com/zuanshi/jsonp_201805231426009",dataType:"jsonp",jsonp:"callback",cache:!0,success:function(e,a){var t=e.list||[],r=[];t.forEach(function(l){l.seconds.forEach(function(e){e.title||(e.title=l.title)}),r=r.concat(l.seconds)}),l(r)},error:function(e){l([])}})})}})});