define("mx-header/index",["magix","$","mx-header/data"],(e,l,r)=>{var a=e("magix"),s=e("$"),t=e("mx-header/data");a.applyStyle("_zs_galleryY","._zs_galleryho{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryhp{position:relative;height:88px;background-color:#09122b}._zs_galleryhp ._zs_galleryhq{opacity:.8;color:#fff}._zs_galleryhp ._zs_galleryhr:hover{opacity:1;color:#4d7fff}._zs_galleryhp ._zs_galleryhs{height:50px;margin:0 auto;padding:0 40px;line-height:50px}._zs_galleryhp ._zs_galleryhs ._zs_galleryht{position:relative}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhq{cursor:pointer}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhu{display:inline-block;position:relative;top:4px;right:0;font-size:20px;color:#fff;transition:-webkit-transform .25s ease-out;transition:transform .25s ease-out;transition:transform .25s ease-out,-webkit-transform .25s ease-out}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhv{position:absolute;top:38px;left:50%;z-index:3;width:160px;height:0;margin-left:-80px;overflow:hidden;transition:height .25s ease-out;background-color:#f7f7f7;border-radius:4px}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhv dl{padding:10px 20px}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhv dl dt{height:30px;line-height:30px;color:#999;font-size:14px}._zs_galleryhp ._zs_galleryhs ._zs_galleryht ._zs_galleryhv dl dd{height:32px;margin-left:25px;line-height:32px;font-size:12px}._zs_galleryhp ._zs_galleryhs ._zs_galleryht:hover ._zs_galleryhq{opacity:1}._zs_galleryhp ._zs_galleryhs ._zs_galleryht:hover ._zs_galleryhu{-webkit-transform:rotate(180deg);transform:rotate(180deg)}._zs_galleryhp ._zs_galleryhs ._zs_galleryht:hover ._zs_galleryhv{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryhp ._zs_galleryhw{position:absolute;z-index:2;width:100%;top:50px;left:0;transition:background-color .25s ease-out}._zs_galleryhp ._zs_galleryhw ._zs_galleryhx{height:76px;margin:0 auto;padding:18px 40px;background-color:#fff;border-radius:60px}._zs_galleryhp ._zs_galleryhw ._zs_galleryhx ._zs_galleryhy{float:left;height:40px;margin-right:50px}._zs_galleryhp ._zs_galleryhw ._zs_galleryhx ._zs_galleryhy img{height:100%}._zs_galleryhp ._zs_galleryhw ._zs_galleryhx ._zs_galleryhz{float:left;height:40px;line-height:40px;font-size:14px}._zs_galleryhp ._zs_galleryhw ._zs_galleryhx ._zs_galleryhz ._zs_galleryhA{color:#4d7fff}._zs_galleryhp ._zs_galleryhw._zs_galleryhB{position:fixed;background-color:#fff;box-shadow:0 1px 1px 0 rgba(0,0,0,.08)}"),r.exports=a.View.extend({tmpl:function(e,l,r,a,s,t,i,_){if(r||(r=e),!s){var h={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,o=function(e){return"&"+h[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(g,o)}}if(!t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return n[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(s(e)).replace(d,p)}}if(!_){var y=/[\\'"]/g;_=function(e){return s(e).replace(y,"\\$&")}}i||(i=function(e,l,r,a){for(a=e[z];--a;)if(e[r=z+a]===l)return r;return e[r=z+e[z]++]=l,r});var z="",f="",c=e.width,x=e.list,u=e.fixed,v=e.styles,m=e.logo,w=e.navs,b=e.cur;f+='<div mxa="_zs_galleryb;:_" class="_zs_galleryhp"><div class="_zs_galleryhs clearfix" style="width: '+a(c)+'px;"><div mxs="_zs_galleryb;:_" class="fl mr35"><a class="_zs_galleryhq _zs_galleryhr" href="//www.alimama.com" target="_blank" rel="noopener noreferrer">阿里妈妈首页</a></div>';for(var k=0,q=x.length;k<q;k++){var $=x[k];f+='<div class="_zs_galleryht fl mr35" mx-mouseover="'+l+"toggle({index:"+a(k)+",height:"+a($.height)+'})" mx-mouseout="'+l+"toggle({index:"+a(k)+',height:0})"><span mxa="_zs_galleryb;:a" class="_zs_galleryhq">'+a($.title)+'</span><span mxs="_zs_galleryb;:a" class="mc-iconfont ml5 _zs_galleryhu">&#xe692;</span><div class="_zs_galleryhv" style="height: '+a($.showHeight)+'px;">';for(var A=0,H=$.seconds,T=H.length;A<T;A++){var j=H[A];f+="<dl>",j.title&&(f+="<dt>"+a(j.title)+"</dt>"),f+=" ";for(var B=0,I=j.thirds,X=I.length;B<X;B++){var E=I[B];f+='<dd><a href="'+a(E.link)+'" target="_blank" rel="noopener noreferrer">'+a(E.name)+"</a></dd>"}f+="</dl>"}f+="</div></div>"}if(f+='</div><div class="_zs_galleryhw ',u&&(f+=" _zs_galleryhB "),f+='" ',u&&(f+=' style="'+a(v)+'" '),f+='><div class="_zs_galleryhx clearfix" style="width: '+a(c)+'px;"><div mxa="_zs_galleryb;:b" class="_zs_galleryhy"><img src="'+a(m)+'"/></div>',w.length>0){f+='<div mxa="_zs_galleryb;:c" class="_zs_galleryhz">';for(var R=0,S=w.length;R<S;R++){var V=w[R];f+='<a class="mr40 ',b==V.value&&(f+=" _zs_galleryhA "),f+='" href="javascript:;" mx-click="'+l+"to({nav:'"+i(r,V)+"'})\">"+a(V.text)+"</a>"}f+="</div>"}return f+="</div></div></div>"},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=e.wrapper||"",a=s(r?"#"+r:window),t=e.cur||"",i=e.width||1200,_=e.navs||[],h=e.logo||"//img.alicdn.com/tfs/TB1vee6iAzoK1RjSZFlXXai4VXa-534-98.png",g=a.outerWidth();return+i>g-40&&(i=g-40),this.updater.set({wrapperId:r,width:i,navs:_,logo:h,cur:t}),this.__cp=a,l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){var e=this,l=e.updater.get(),r=t.products;r.forEach(function(e){var l=20*e.seconds.length;e.seconds.forEach(function(e){e.title&&(l+=30),l+=32*e.thirds.length}),e.height=l,e.showHeight=0}),e.updater.digest({list:r,fixed:!1});var a=e.__cp,i=a.outerWidth(),_=l.wrapperId,h=function(){s("#"+e.id+" ._zs_galleryhw");var l=s("#"+e.id+" ._zs_galleryhs"),r=a.scrollTop(),t=l.outerHeight(),h=["width:"+i+"px","left: 0"];_?h.push("position: absolute","top: "+r+"px"):h.push("position: fixed","top: 0"),r>t?e.updater.digest({fixed:!0,styles:h.join(";")}):e.updater.digest({fixed:!1})};e.$init||(e.$init=1,a.on("scroll",h),e.on("destroy",function(){a.off("scroll",h)})),h()},"toggle<mouseover,mouseout>":function(e){if(!a.inside(e.relatedTarget,e.eventTarget)){var l=e.params.index,r=e.params.height,s=this.updater.get("list");s[l].showHeight=r,this.updater.digest({list:s})}},"to<click>":function(e){var l=e.params.nav;this.updater.digest({cur:l.value}),s("#"+this.id).trigger({type:"navchange",nav:l})}})});