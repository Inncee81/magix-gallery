define("mx-footer/index",["magix","$","mx-header/data"],(e,_,r)=>{var l=e("magix"),n=(e("$"),e("mx-header/data"));l.applyStyle("_zs_gallery_mx-footer_index_","._zs_gallery_mx-footer_index_-footer {\n  padding: 30px 0;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line {\n  line-height: 28px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #333;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link {\n  position: relative;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  right: 0;\n  width: 0;\n  height: 12px;\n  border-left: 1px solid #eee;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:last-child:after {\n  content: none;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line {\n  padding-top: 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img ._zs_gallery_mx-footer_index_-line-img {\n  transition: opacity var(--duration);\n  opacity: 0.5;\n  border: none;\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-filter: gray;\n          filter: gray;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img:hover ._zs_gallery_mx-footer_index_-line-img {\n  opacity: 1;\n  -webkit-filter: grayscale(0%);\n  -moz-filter: grayscale(0%);\n  -ms-filter: grayscale(0%);\n  -o-filter: grayscale(0%);\n  filter: grayscale(0%);\n  -webkit-filter: none;\n          filter: none;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #fff;\n  opacity: 1;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #fff;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-footer._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-line._zs_gallery_mx-footer_index_-gap-line ._zs_gallery_mx-footer_index_-line-link:after {\n  border-left: 1px solid #fff;\n  opacity: 0.3;\n}\n@media screen and (max-width: 767px) {\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n    padding: 0 5px;\n  }\n}\n._zs_gallery_mx-footer_index_-products {\n  position: relative;\n  max-width: 100%;\n  margin-bottom: 20px;\n  padding-left: 220px;\n  padding-right: 220px;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo img {\n  width: 110px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  display: block;\n  width: 110px;\n  margin-top: 5px;\n  font-size: 36px;\n  color: #666;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  position: absolute;\n  top: 0;\n  right: 0;\n  line-height: 22px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode img {\n  width: 92px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-footer_index_-products dl {\n  float: left;\n  font-size: 16px;\n  line-height: 32px;\n}\n._zs_gallery_mx-footer_index_-products dl dt {\n  margin-bottom: 16px;\n  opacity: 0.5;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dt {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a {\n  color: #fff;\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white dl dd a:hover {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-footer_index_-products._zs_gallery_mx-footer_index_-white ._zs_gallery_mx-footer_index_-qrcode {\n  color: #fff;\n}\n"),r.exports=l.View.extend({tmpl:function(e,_,r,l,n,o,a,i){if(r||(r=e),!n){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+t[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(s,x)}}if(!o){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return f[e]},d=/[!')(*]/g;o=function(e){return encodeURIComponent(n(e)).replace(d,m)}}if(!i){var g=/[\\'"]/g;i=function(e){return n(e).replace(g,"\\$&")}}var c,y,z,p="",h=e.len,w=e.dark,b=e.width,k=e.products,u=e.tanx,v=e.taobao,$=e.alimama,X=e.year,j=e.simple;try{if(z=1,y="if len > 0",c="<%if (len > 0) {%>",h>0){p+='<div class="_zs_gallery_mx-footer_index_-products ',z=2,y="if dark",c="<%if (dark) {%>",w&&(p+=" _zs_gallery_mx-footer_index_-white ",z=2,y="/if",c="<%}%>"),p+='" style="width: ',z=2,y="=width",p+=(c="<%=width%>",l(b)+'px;"><div mxs="_zs_galleryb{:_" class="_zs_gallery_mx-footer_index_-logo"><img src="//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png"><i class="mc-iconfont _zs_gallery_mx-footer_index_-mama-icon">&#xe601;</i></div><div mxa="_zs_galleryb{:_" class="clearfix">'),z=8,y="each products as p",c="<%for (var $art_ibaidtvicl$art_i = 0, $art_cqeajw$art_c = products.length; $art_ibaidtvicl$art_i < $art_cqeajw$art_c; $art_ibaidtvicl$art_i++) {        var p = products[$art_ibaidtvicl$art_i]%>";for(var q=0,T=k.length;q<T;q++){var A=k[q];p+='<dl style="width: ',z=9,y="=(100 / len)",p+=(c="<%=(100 / len)%>",l(100/h)+'%;"><dt>'),z=10,y="=p.title",p+=(c="<%=p.title%>",l(A.title)+"</dt>"),z=11,y="each p.thirds as t",c="<%for (var $art_itvahg$art_i = 0, $art_objdqqbngw$art_obj = p.thirds, $art_chpstlgyds$art_c = $art_objdqqbngw$art_obj.length; $art_itvahg$art_i < $art_chpstlgyds$art_c; $art_itvahg$art_i++) {            var t = $art_objdqqbngw$art_obj[$art_itvahg$art_i]%>";for(var C=0,F=A.thirds,I=F.length;C<I;C++){var P=F[C];p+='<dd><a href="',z=13,y="=t.link",p+=(c="<%=t.link%>",l(P.link)+'" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">'),z=13,y="=t.name",p+=(c="<%=t.name%>",l(P.name)+"</a></dd>"),z=15,y="/each",c="<%}%>"}p+="</dl>",z=17,y="/each",c="<%}%>"}p+='</div><div mxs="_zs_galleryb{:a" class="_zs_gallery_mx-footer_index_-qrcode"><img src="//gw.alicdn.com/tfs/TB1C2cNrv1TBuNjy0FjXXajyXXa-300-300.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div>',z=25,y="/if",c="<%}%>"}p+='<div class="_zs_gallery_mx-footer_index_-footer ',z=26,y="if dark",c="<%if (dark) {%>",w&&(p+=" _zs_gallery_mx-footer_index_-white ",z=26,y="/if",c="<%}%>"),p+='"><div mxa="_zs_galleryb{:a" class="_zs_gallery_mx-footer_index_-line"><a mxs="_zs_galleryb{:b" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_galleryb{:c" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a>',z=30,y="if tanx",c="<%if (tanx) {%>",u&&(p+='<a mxs="_zs_galleryb{:d" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//tanx.com/web/opt.html">隐私权保护</a>',z=32,y="/if",c="<%}%>"),p+=" ",z=33,y="if taobao",c="<%if (taobao) {%>",v&&(p+='<a mxs="_zs_galleryb{:e" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>',z=35,y="/if",c="<%}%>"),p+=" ",z=36,y="if alimama",c="<%if (alimama) {%>",$&&(p+='<a mxs="_zs_galleryb{:e" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html">法律声明</a>',z=38,y="/if",c="<%}%>"),p+='<a mxs="_zs_galleryb{:f" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a><a mxs="_zs_galleryb{:g" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a>',z=41,y="if tanx",c="<%if (tanx) {%>",u&&(p+='<span mxs="_zs_galleryb{:h" class="_zs_gallery_mx-footer_index_-line-text">Tanx.com版权所有</span><a mxs="_zs_galleryb{:i" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">浙ICP备09109183号-10</a>',z=44,y="/if",c="<%}%>"),p+=" ",z=45,y="if taobao",c="<%if (taobao) {%>",v&&(p+='<span mxa="_zs_galleryb{:b" class="_zs_gallery_mx-footer_index_-line-text">Taobao.com版权所有 2003-',z=46,y="=year",p+=(c="<%=year%>",l(X)+'</span><a mxs="_zs_galleryb{:j" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20080224-1</a>'),z=48,y="/if",c="<%}%>"),p+=" ",z=49,y="if alimama",c="<%if (alimama) {%>",$&&(p+='<span mxa="_zs_galleryb{:c" class="_zs_gallery_mx-footer_index_-line-text">阿里妈妈版权所有 2007-',z=50,y="=year",p+=(c="<%=year%>",l(X)+'</span><a mxs="_zs_galleryb{:k" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.miibeian.gov.cn">ICP证：浙B2-20070195</a>'),z=52,y="/if",c="<%}%>"),p+="</div>",z=54,y="if !simple",c="<%if (!simple) {%>",j||(p+='<div mxs="_zs_galleryb{:l" class="_zs_gallery_mx-footer_index_-line _zs_gallery_mx-footer_index_-gap-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">阿里妈妈</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a></div><div mxs="_zs_galleryb{:m" class="_zs_gallery_mx-footer_index_-line _zs_gallery_mx-footer_index_-gap-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_galleryb{:n" class="_zs_gallery_mx-footer_index_-img-line"><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>',z=89,y="/if",c="<%}%>"),p+="</div>"}catch(e){var B="render view error:"+(e.message||e);throw y&&(B+="\r\n\tsrc art:{{"+y+"}}\r\n\tat line:"+z),B+="\r\n\t"+(y?"translate to:":"expr:"),B+=c+"\r\n\tat file:mx-footer/index.html"}return p},init:function(e){this.assign(e)},assign:function(e){this["@{mode.simple}"]="simple"===e.mode,this["@{need.products}"]=e.products+""=="true",this["@{products.width}"]=e.width||1200,this["@{ui.dark}"]=e.dark+""=="true"},render:function(){var e=this,_=e["@{need.products}"],r=[];_&&n.products.forEach(function(e){e.seconds.forEach(function(_){_.title||(_.title=e.title)}),r=r.concat(e.seconds)});var l,o,a,i=e["@{mode.simple}"];/alimama\.(com|net)/i.test(window.location.href)?l=!0:/taobao\.(com|net)/i.test(window.location.href)?o=!0:/tanx\.(com|net)/i.test(window.location.href)?a=!0:l=!0;(new Date).getFullYear();var t={simple:i,alimama:l,taobao:o,tanx:a,products:r,len:r.length,width:e["@{products.width}"],dark:e["@{ui.dark}"],year:"现在"};e.updater.digest(t)}})});