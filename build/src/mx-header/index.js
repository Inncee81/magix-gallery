define("mx-header/index",["magix","$","mx-header/data"],(e,l,r)=>{var a=e("magix"),g=e("$"),t=e("mx-header/data");a.applyStyle("_zs_galleryX","._zs_gallerygf{position:relative;height:88px;background-color:#09122b}._zs_gallerygf ._zs_gallerygg{opacity:.8;color:#fff}._zs_gallerygf ._zs_gallerygh:hover{opacity:1;color:var(--color-brand)}._zs_gallerygf ._zs_gallerygi{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj{position:relative}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygg{cursor:pointer}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygk{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform var(--duration) ease-out;transition:transform var(--duration) ease-out;transition:transform var(--duration) ease-out,-webkit-transform var(--duration) ease-out}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygl{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height var(--duration) ease-out;background-color:#f5f5f5;border-radius:var(--border-radius)}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygl dl{padding:10px 20px}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygl dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj ._zs_gallerygl dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj:hover ._zs_gallerygg{opacity:1}._zs_gallerygf ._zs_gallerygi ._zs_gallerygj:hover ._zs_gallerygk{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerygf ._zs_gallerygm{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color var(--duration) ease-out}._zs_gallerygf ._zs_gallerygm ._zs_gallerygn{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_gallerygf ._zs_gallerygm ._zs_gallerygn ._zs_gallerygo{float:left;height:40px;margin-right:50px}._zs_gallerygf ._zs_gallerygm ._zs_gallerygn ._zs_gallerygo img{height:100%}._zs_gallerygf ._zs_gallerygm ._zs_gallerygn ._zs_gallerygp{float:left;height:40px;line-height:40px;font-size:14px}._zs_gallerygf ._zs_gallerygm ._zs_gallerygn ._zs_gallerygp ._zs_gallerygq{color:var(--color-brand)}._zs_gallerygf ._zs_gallerygm._zs_gallerygr{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),r.exports=a.View.extend({tmpl:function(e,l,r,a,g,t,s,i){if(r||(r=e),!g){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(e){return"&"+_[e]+";"};g=function(e){return""+(null==e?"":e)},a=function(e){return g(e).replace(o,n)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},f=function(e){return d[e]},p=/[!')(*]/g;t=function(e){return encodeURIComponent(g(e)).replace(p,f)}}if(!i){var y=/[\\'"]/g;i=function(e){return g(e).replace(y,"\\$&")}}s||(s=function(e,l,r,a){for(a=e[h];--a;)if(e[r=h+a]===l)return r;return e[r=h+e[h]++]=l,r});var h="",z="",c=e.width,u=e.list,x=e.fixed,v=e.styles,m=e.logo,w=e.navs,b=e.cur;z+='<div mxa="_zs_gallerycj:_" class="_zs_gallerygf"><div class="_zs_gallerygi clearfix" style="width: '+a(c)+'px;"><div mxs="_zs_gallerycj:_" class="fl mr35"><a class="_zs_gallerygg _zs_gallerygh" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var j=0,k=u.length;j<k;j++){var H=u[j];z+='<div class="_zs_gallerygj fl mr35" mx-mouseover="'+l+"toggle({index:"+a(j)+",height:"+a(H.height)+'})" mx-mouseout="'+l+"toggle({index:"+a(j)+',height:0})"><span mxa="_zs_gallerycj:a" class="_zs_gallerygg">'+a(H.title)+'</span><span mxs="_zs_gallerycj:a" class="mc-iconfont ml5 _zs_gallerygk">&#xe692;</span><div class="_zs_gallerygl ',H.showHeight>0&&(z+=" mx-shadow "),z+='" style="height: '+a(H.showHeight)+'px;">';for(var $=0,T=H.seconds,X=T.length;$<X;$++){var I=T[$];z+="<dl>",I.title&&(z+="<dt>"+a(I.title)+"</dt>"),z+=" ";for(var W=0,q=I.thirds,B=q.length;W<B;W++){var E=q[W];z+='<dd><a href="'+a(E.link)+'" target="_blank" rel="noopener noreferrer">'+a(E.name)+"</a></dd>"}z+="</dl>"}z+="</div></div>"}if(z+='</div><div class="_zs_gallerygm ',x&&(z+=" _zs_gallerygr "),z+='" ',x&&(z+=' style="'+a(v)+'" '),z+='><div class="_zs_gallerygn clearfix" style="width: '+a(c)+'px;"><div mxa="_zs_gallerycj:b" class="_zs_gallerygo"><img src="'+a(m)+'"/></div>',w.length>0){z+='<div mxa="_zs_gallerycj:c" class="_zs_gallerygp">';for(var R=0,S=w.length;R<S;R++){var V=w[R];z+='<a class="mr40 ',b==V.value&&(z+=" _zs_gallerygq "),z+='" href="javascript:;" mx-click="'+l+"to({nav:'"+s(r,V)+"'})\">"+a(V.text)+"</a>"}z+="</div>"}return z+="</div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=e.wrapper||"",a=g(r?"#"+r:window),t=e.cur||"",s=e.width||1200,i=e.navs||[],_=e.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",o=a.outerWidth();return+s>o-40&&(s=o-40),this.updater.set({wrapperId:r,width:s,navs:i,logo:_,cur:t}),this.__ct=a,l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){var e=this,l=e.updater.get(),r=t.products;r.forEach(function(e){var l=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(l+=30),l+=32*e.thirds.length}),e.height=l,e.showHeight=0}),e.updater.digest({list:r,fixed:!1});var a=e.__ct,s=a.outerWidth(),i=l.wrapperId,_=function(){g("#"+e.id+" ._zs_gallerygm");var l=g("#"+e.id+" ._zs_gallerygi"),r=a.scrollTop(),t=l.outerHeight(),_=["width:"+s+"px","left: 0"];i?_.push("position: absolute","top: "+r+"px"):_.push("position: fixed","top: 0"),r>t?e.updater.digest({fixed:!0,styles:_.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",_),e.on("destroy",function(){a.off("scroll",_)})),_()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var l=e.params.index,r=e.params.height,g=this.updater.get("list");g[l].showHeight=r,this.updater.digest({list:g})}},"to<click>":function(e){var l=e.params.nav;this.updater.digest({cur:l.value}),g("#"+this.id).trigger({type:"navchange",nav:l})}})});