define("mx-header/examples/white",["magix","$","../index"],(e,r,n)=>{e("../index");var l=e("magix"),a=l.Router;e("$");l.applyStyle("_zs_galleryX","._zs_gallerygg{height:1200px;background-color:var(--color-bg)}._zs_gallerygg ._zs_gallerygh{width:1000px;padding-top:100px;margin:auto}._zs_gallerygi{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygi ._zs_gallerygh{height:800px;padding-top:100px;text-align:center;font-size:14px}._zs_gallerygj{margin-left:15px;border:1px solid var(--color-border)}"),n.exports=l.View.extend({tmpl:function(e,r,n,l,a,i,t,o){if(n||(n=e),!a){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,c=function(e){return"&"+g[e]+";"};a=function(e){return""+(null==e?"":e)},l=function(e){return a(e).replace(u,c)}}if(!i){var s={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return s[e]},x=/[!')(*]/g;i=function(e){return encodeURIComponent(a(e)).replace(x,v)}}if(!o){var d=/[\\'"]/g;o=function(e){return a(e).replace(d,"\\$&")}}t||(t=function(e,r,n,l){for(l=e[p];--l;)if(e[n=p+l]===r)return n;return e[n=p+e[p]++]=r,n});var p="",h="",_=e.navs,f=e.cur,m=e.login,w=e.user,y=e.rightView,b=e.loginView,z=e.logoutUrl,k=e.links,V=e.ceiling,U=e.map;return h+='<div mxv="navs" mx-navchange="'+r+'change()" mx-view="mx-header/index?dark=false&navs='+t(n,_)+"&cur="+i(f)+"&login="+i(m)+"&user="+i(w)+"&rightView="+i(y)+"&loginView="+i(b)+"&logoutUrl="+i(z)+"&links="+i(k)+"&ceiling="+i(V)+'"></div><div mxa="_zs_galleryc1:_" class="_zs_gallerygg"><div mxa="_zs_galleryc1:a" class="_zs_gallerygh"><div mxa="_zs_galleryc1:b" class="fontsize-20 mb40">当前导航：'+l(U[f])+"（"+l(f)+'）</div><pre>\n&lt;mx-header \n    dark="false"\n    navs="&#123;&#123;@navs&#125;&#125;"\n    cur="&#123;&#123;=cur&#125;&#125;"\n    right-view="'+l(y)+'"\n    links="'+l(k)+'"\n    ceiling="'+l(V)+'"\n    login="'+l(m)+'"\n    user="'+l(w)+'"\n    login-view="'+l(b)+'"\n    logout-url="'+l(z)+'"\n    mx-navchange="change()"/&gt;\n        </pre></div></div>'},render:function(){var e=[{value:1,text:"本页打开1"},{value:2,text:"支持二级",subs:[{value:21,text:"本页打开"},{value:22,text:"外链打开",link:"https://www.taobao.com/"}]},{value:3,text:"本页打开2"},{value:4,text:"外链打开",link:"https://www.taobao.com/"}],r={};e.forEach(function(e){r[e.value]=e.text,(e.subs||[]).forEach(function(n){r[n.value]=e.text+"_"+n.text})});var n=a.parse().params;this.updater.digest({navs:e,map:r,cur:n.cur||e[0].value,login:n.login||"",user:n.user||"",loginView:n.loginView||"",logoutUrl:n.logoutUrl||"",rightView:n.rightView||"",links:n.links||!0,ceiling:n.ceiling||!0}),this.observeLocation(["cur"])},"change<navchange>":function(e){a.to({cur:e.nav.value})}})});