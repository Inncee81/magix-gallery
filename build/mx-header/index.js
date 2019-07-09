define("mx-header/index",["magix","$","mx-header/data"],(e,r,_)=>{var a=e("magix"),i=e("$"),n=e("mx-header/data");a.applyStyle("_zs_gallery_mx-header_index_","._zs_gallery_mx-header_index_-header {\n  position: relative;\n  height: 88px;\n  background-color: #09122b;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-text {\n  opacity: 0.8;\n  color: #fff;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-text-h-brand:hover {\n  opacity: 1;\n  color: var(--color-brand);\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others {\n  height: 50px;\n  margin: 0 auto;\n  padding: 0 40px;\n  line-height: 50px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item {\n  position: relative;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-text {\n  cursor: pointer;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-arrow {\n  display: inline-block;\n  position: relative;\n  top: 4px;\n  right: 0;\n  font-size: 20px;\n  color: #fff;\n  transition: transform var(--duration) ease-out;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links {\n  position: absolute;\n  top: 38px;\n  left: 50%;\n  z-index: 3;\n  width: 160px;\n  height: 0;\n  margin-left: -80px;\n  overflow: hidden;\n  transition: height var(--duration) ease-out;\n  background-color: #f5f5f5;\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl {\n  padding: 10px 20px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl dt {\n  height: 30px;\n  line-height: 30px;\n  color: #999;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item ._zs_gallery_mx-header_index_-links dl dd {\n  height: 32px;\n  margin-left: 25px;\n  line-height: 32px;\n  font-size: 12px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-text {\n  opacity: 1;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-others ._zs_gallery_mx-header_index_-item:hover ._zs_gallery_mx-header_index_-arrow {\n  transform: rotate(180deg);\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front {\n  position: absolute;\n  z-index: 2;\n  width: 100%;\n  top: 50px;\n  left: 0;\n  transition: background-color var(--duration) ease-out;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner {\n  height: 76px;\n  margin: 0 auto;\n  padding: 18px 40px;\n  background-color: #fff;\n  border-radius: 60px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-logo {\n  float: left;\n  height: 40px;\n  margin-right: 50px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-logo img {\n  height: 100%;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-navs {\n  float: left;\n  height: 40px;\n  line-height: 40px;\n  font-size: 14px;\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front ._zs_gallery_mx-header_index_-front-inner ._zs_gallery_mx-header_index_-navs ._zs_gallery_mx-header_index_-cur {\n  color: var(--color-brand);\n}\n._zs_gallery_mx-header_index_-header ._zs_gallery_mx-header_index_-front._zs_gallery_mx-header_index_-fixed {\n  position: fixed;\n  background-color: #fff;\n  box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.08);\n}\n"),_.exports=a.View.extend({tmpl:function(e,r,_,a,i,n,t,d){if(_||(_=e),!i){var l={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+l[e]+";"};i=function(e){return""+(null==e?"":e)},a=function(e){return i(e).replace(s,x)}}if(!n){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return h[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(g,o)}}if(!d){var m=/[\\'"]/g;d=function(e){return i(e).replace(m,"\\$&")}}t||(t=function(e,r,_,a){for(a=e[y];--a;)if(e[_=y+a]===r)return _;return e[_=y+e[y]++]=r,_});var c,p,f,y="",z="",u=e.width,v=e.list,$=e.fixed,w=e.styles,b=e.logo,j=e.navs,k=e.cur;try{z+='<div mxa="_zs_gallerycE:_" class="_zs_gallery_mx-header_index_-header"><div class="_zs_gallery_mx-header_index_-others clearfix" style="width: ',f=2,p="=width",z+=(c="<%=width%>",a(u)+'px;"><div mxs="_zs_gallerycE:_" class="fl mr35"><a class="_zs_gallery_mx-header_index_-text _zs_gallery_mx-header_index_-text-h-brand" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>'),f=6,p="each list as item index",c="<%for (var index = 0, $art_cozbxhq$art_c = list.length; index < $art_cozbxhq$art_c; index++) {    var item = list[index]%>";for(var H=0,E=v.length;H<E;H++){var q=v[H];z+='<div class="_zs_gallery_mx-header_index_-item fl mr35" mx-mouseover="'+r+"toggle({index:",f=8,p="=index",z+=(c="<%=index%>",a(H)+",height:"),f=8,p="=item.height",z+=(c="<%=item.height%>",a(q.height)+'})" mx-mouseout="'+r+"toggle({index:"),f=9,p="=index",z+=(c="<%=index%>",a(H)+',height:0})"><span mxa="_zs_gallerycE:a" class="_zs_gallery_mx-header_index_-text">'),f=10,p="=item.title",z+=(c="<%=item.title%>",a(q.title)+'</span><span mxs="_zs_gallerycE:a" class="mc-iconfont ml5 _zs_gallery_mx-header_index_-arrow">&#xe692;</span><div class="_zs_gallery_mx-header_index_-links '),f=12,p="if (item.showHeight > 0)",c="<%if (item.showHeight > 0) {%>",q.showHeight>0&&(z+=" mx-shadow ",f=12,p="/if",c="<%}%>"),z+='" style="height: ',f=12,p="=item.showHeight",z+=(c="<%=item.showHeight%>",a(q.showHeight)+'px;">'),f=13,p="each item.seconds as second",c="<%for (var $art_ipyrysui$art_i = 0, $art_objtqxhiswji$art_obj = item.seconds, $art_czpkp$art_c = $art_objtqxhiswji$art_obj.length; $art_ipyrysui$art_i < $art_czpkp$art_c; $art_ipyrysui$art_i++) {        var second = $art_objtqxhiswji$art_obj[$art_ipyrysui$art_i]%>";for(var T=0,I=q.seconds,W=I.length;T<W;T++){var X=I[T];z+="<dl>",f=15,p="if second.title",c="<%if (second.title) {%>",X.title&&(z+="<dt>",f=16,p="=second.title",z+=(c="<%=second.title%>",a(X.title)+"</dt>"),f=17,p="/if",c="<%}%>"),z+=" ",f=18,p="each second.thirds as third",c="<%for (var $art_iejmmdays$art_i = 0, $art_objxpxjpwod$art_obj = second.thirds, $art_cpkqu$art_c = $art_objxpxjpwod$art_obj.length; $art_iejmmdays$art_i < $art_cpkqu$art_c; $art_iejmmdays$art_i++) {            var third = $art_objxpxjpwod$art_obj[$art_iejmmdays$art_i]%>";for(var B=0,R=X.thirds,S=R.length;B<S;B++){var V=R[B];z+='<dd><a href="',f=19,p="=third.link",z+=(c="<%=third.link%>",a(V.link)+'" target="_blank" rel="noopener noreferrer">'),f=19,p="=third.name",z+=(c="<%=third.name%>",a(V.name)+"</a></dd>"),f=20,p="/each",c="<%}%>"}z+="</dl>",f=22,p="/each",c="<%}%>"}z+="</div></div>",f=25,p="/each",c="<%}%>"}if(z+='</div><div class="_zs_gallery_mx-header_index_-front ',f=27,p="if fixed",c="<%if (fixed) {%>",$&&(z+=" _zs_gallery_mx-header_index_-fixed ",f=27,p="/if",c="<%}%>"),z+='" ',f=27,p="if fixed",c="<%if (fixed) {%>",$&&(z+=' style="',f=27,p="=styles",z+=(c="<%=styles%>",a(w)+'" '),f=27,p="/if",c="<%}%>"),z+='><div class="_zs_gallery_mx-header_index_-front-inner clearfix" style="width: ',f=28,p="=width",z+=(c="<%=width%>",a(u)+'px;"><div mxa="_zs_gallerycE:b" class="_zs_gallery_mx-header_index_-logo"><img src="'),f=30,p="=logo",z+=(c="<%=logo%>",a(b)+'"/></div>'),f=32,p="if (navs.length > 0)",c="<%if (navs.length > 0) {%>",j.length>0){z+='<div mxa="_zs_gallerycE:c" class="_zs_gallery_mx-header_index_-navs">',f=34,p="each navs as nav",c="<%for (var $art_ipbdoyiui$art_i = 0, $art_cljoajj$art_c = navs.length; $art_ipbdoyiui$art_i < $art_cljoajj$art_c; $art_ipbdoyiui$art_i++) {        var nav = navs[$art_ipbdoyiui$art_i]%>";for(var A=0,C=j.length;A<C;A++){var F=j[A];z+='<a class="mr40 ',f=35,p="if (cur == nav.value)",c="<%if (cur == nav.value) {%>",k==F.value&&(z+=" _zs_gallery_mx-header_index_-cur ",f=35,p="/if",c="<%}%>"),z+='" href="javascript:;" mx-click="'+r+"to({nav:'",f=35,p="@nav",z+=(c="<%@nav%>",t(_,F)+"'})\">"),f=35,p="=nav.text",z+=(c="<%=nav.text%>",a(F.text)+"</a>"),f=36,p="/each",c="<%}%>"}z+="</div>",f=38,p="/if",c="<%}%>"}z+="</div></div></div>"}catch(e){var G="render view error:"+(e.message||e);throw p&&(G+="\r\n\tsrc art:{{"+p+"}}\r\n\tat line:"+f),G+="\r\n\t"+(p?"translate to:":"expr:"),G+=c+"\r\n\tat file:mx-header/index.html"}return z},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var r=this.updater.altered(),_=e.wrapper||"",a=i(_?"#"+_:window),n=e.cur||"",t=e.width||1200,d=e.navs||[],l=e.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",s=a.outerWidth();return+t>s-40&&(t=s-40),this.updater.set({wrapperId:_,width:t,navs:d,logo:l,cur:n}),this["@{wrapper}"]=a,r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var e=this,r=e.updater.get(),_=n.products;_.forEach(function(e){var r=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(r+=30),r+=32*e.thirds.length}),e.height=r,e.showHeight=0}),e.updater.digest({list:_,fixed:!1});var a=e["@{wrapper}"],t=a.outerWidth(),d=r.wrapperId,l=function(){i("#"+e.id+" ._zs_gallery_mx-header_index_-front");var r=i("#"+e.id+" ._zs_gallery_mx-header_index_-others"),_=a.scrollTop(),n=r.outerHeight(),l=["width:"+t+"px","left: 0"];d?l.push("position: absolute","top: "+_+"px"):l.push("position: fixed","top: 0"),_>n?e.updater.digest({fixed:!0,styles:l.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",l),e.on("destroy",function(){a.off("scroll",l)})),l()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var r=e.params.index,_=e.params.height,i=this.updater.get("list");i[r].showHeight=_,this.updater.digest({list:i})}},"to<click>":function(e){var r=e.params.nav;this.updater.digest({cur:r.value}),i("#"+this.id).trigger({type:"navchange",nav:r})}})});