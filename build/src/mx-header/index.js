define("mx-header/index",["magix","$","mx-header/data"],(e,r,l)=>{var a=e("magix"),g=e("$"),t=e("mx-header/data");a.applyStyle("_zs_galleryY","._zs_gallerygk{position:relative;height:88px;background-color:#09122b}._zs_gallerygk ._zs_gallerygl{opacity:.8;color:#fff}._zs_gallerygk ._zs_gallerygm:hover{opacity:1;color:var(--color-brand)}._zs_gallerygk ._zs_gallerygn{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo{position:relative}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygl{cursor:pointer}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygp{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform var(--duration) ease-out;transition:transform var(--duration) ease-out;transition:transform var(--duration) ease-out,-webkit-transform var(--duration) ease-out}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygq{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height var(--duration) ease-out;background-color:#f5f5f5;border-radius:var(--border-radius)}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygq dl{padding:10px 20px}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygq dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo ._zs_gallerygq dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo:hover ._zs_gallerygl{opacity:1}._zs_gallerygk ._zs_gallerygn ._zs_gallerygo:hover ._zs_gallerygp{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_gallerygk ._zs_gallerygr{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color var(--duration) ease-out}._zs_gallerygk ._zs_gallerygr ._zs_gallerygs{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_gallerygk ._zs_gallerygr ._zs_gallerygs ._zs_gallerygt{float:left;height:40px;margin-right:50px}._zs_gallerygk ._zs_gallerygr ._zs_gallerygs ._zs_gallerygt img{height:100%}._zs_gallerygk ._zs_gallerygr ._zs_gallerygs ._zs_gallerygu{float:left;height:40px;line-height:40px;font-size:14px}._zs_gallerygk ._zs_gallerygr ._zs_gallerygs ._zs_gallerygu ._zs_gallerygv{color:var(--color-brand)}._zs_gallerygk ._zs_gallerygr._zs_gallerygw{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),l.exports=a.View.extend({tmpl:function(e,r,l,a,g,t,s,i){if(l||(l=e),!g){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,n=function(e){return"&"+o[e]+";"};g=function(e){return""+(null==e?"":e)},a=function(e){return g(e).replace(_,n)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return d[e]},y=/[!')(*]/g;t=function(e){return encodeURIComponent(g(e)).replace(y,p)}}if(!i){var h=/[\\'"]/g;i=function(e){return g(e).replace(h,"\\$&")}}s||(s=function(e,r,l,a){for(a=e[z];--a;)if(e[l=z+a]===r)return l;return e[l=z+e[z]++]=r,l});var z="",c="",u=e.width,f=e.list,v=e.fixed,x=e.styles,m=e.logo,k=e.navs,w=e.cur;c+='<div mxa="_zs_gallerycE:_" class="_zs_gallerygk"><div class="_zs_gallerygn clearfix" style="width: '+a(u)+'px;"><div mxs="_zs_gallerycE:_" class="fl mr35"><a class="_zs_gallerygl _zs_gallerygm" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var b=0,E=f.length;b<E;b++){var q=f[b];c+='<div class="_zs_gallerygo fl mr35" mx-mouseover="'+r+"toggle({index:"+a(b)+",height:"+a(q.height)+'})" mx-mouseout="'+r+"toggle({index:"+a(b)+',height:0})"><span mxa="_zs_gallerycE:a" class="_zs_gallerygl">'+a(q.title)+'</span><span mxs="_zs_gallerycE:a" class="mc-iconfont ml5 _zs_gallerygp">&#xe692;</span><div class="_zs_gallerygq ',q.showHeight>0&&(c+=" mx-shadow "),c+='" style="height: '+a(q.showHeight)+'px;">';for(var H=0,$=q.seconds,T=$.length;H<T;H++){var j=$[H];c+="<dl>",j.title&&(c+="<dt>"+a(j.title)+"</dt>"),c+=" ";for(var I=0,W=j.thirds,X=W.length;I<X;I++){var B=W[I];c+='<dd><a href="'+a(B.link)+'" target="_blank" rel="noopener noreferrer">'+a(B.name)+"</a></dd>"}c+="</dl>"}c+="</div></div>"}if(c+='</div><div class="_zs_gallerygr ',v&&(c+=" _zs_gallerygw "),c+='" ',v&&(c+=' style="'+a(x)+'" '),c+='><div class="_zs_gallerygs clearfix" style="width: '+a(u)+'px;"><div mxa="_zs_gallerycE:b" class="_zs_gallerygt"><img src="'+a(m)+'"/></div>',k.length>0){c+='<div mxa="_zs_gallerycE:c" class="_zs_gallerygu">';for(var R=0,S=k.length;R<S;R++){var V=k[R];c+='<a class="mr40 ',w==V.value&&(c+=" _zs_gallerygv "),c+='" href="javascript:;" mx-click="'+r+"to({nav:'"+s(l,V)+"'})\">"+a(V.text)+"</a>"}c+="</div>"}return c+="</div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var r=this.updater.altered(),l=e.wrapper||"",a=g(l?"#"+l:window),t=e.cur||"",s=e.width||1200,i=e.navs||[],o=e.logo||"//img.alicdn.com/tfs/TB1G_ozLNnaK1RjSZFBXXcW7VXa-292-98.png",_=a.outerWidth();return+s>_-40&&(s=_-40),this.updater.set({wrapperId:l,width:s,navs:i,logo:o,cur:t}),this.__cu=a,r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var e=this,r=e.updater.get(),l=t.products;l.forEach(function(e){var r=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(r+=30),r+=32*e.thirds.length}),e.height=r,e.showHeight=0}),e.updater.digest({list:l,fixed:!1});var a=e.__cu,s=a.outerWidth(),i=r.wrapperId,o=function(){g("#"+e.id+" ._zs_gallerygr");var r=g("#"+e.id+" ._zs_gallerygn"),l=a.scrollTop(),t=r.outerHeight(),o=["width:"+s+"px","left: 0"];i?o.push("position: absolute","top: "+l+"px"):o.push("position: fixed","top: 0"),l>t?e.updater.digest({fixed:!0,styles:o.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",o),e.on("destroy",function(){a.off("scroll",o)})),o()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var r=e.params.index,l=e.params.height,g=this.updater.get("list");g[r].showHeight=l,this.updater.digest({list:g})}},"to<click>":function(e){var r=e.params.nav;this.updater.digest({cur:r.value}),g("#"+this.id).trigger({type:"navchange",nav:r})}})});