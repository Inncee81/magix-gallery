define("mx-header/__test__/all",["magix","$","../index"],(e,a,r)=>{e("../index");var n=e("magix");e("$");n.applyStyle("_zs_galleryQ","._zs_galleryfB{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryfC{height:1200px;background-color:#fafafa}._zs_galleryfC ._zs_galleryfD{width:1000px;padding-top:220px;margin:auto;font-size:20px;text-align:center}._zs_galleryfE{height:400px;overflow-y:auto;background-color:#fafafa;border:1px solid #e6e6e6}._zs_galleryfE ._zs_galleryfD{height:800px}"),r.exports=n.View.extend({tmpl:function(e,a,r,n,t,l,i,o){if(r||(r=e),!t){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},u=/[&<>"'`]/g,c=function(e){return"&"+g[e]+";"};t=function(e){return""+(null==e?"":e)},n=function(e){return t(e).replace(u,c)}}if(!l){var f={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(e){return f[e]},x=/[!')(*]/g;l=function(e){return encodeURIComponent(t(e)).replace(x,s)}}if(!o){var d=/[\\'"]/g;o=function(e){return t(e).replace(d,"\\$&")}}i||(i=function(e,a,r,n){for(n=e[_];--n;)if(e[r=_+n]===a)return r;return e[r=_+e[_]++]=a,r});var _="",v="",p=e.navs,h=e.cur,y=e.curText;return v+='<div mxv="navs" mx-navchange="'+a+'change()" mx-view="mx-header/index?navs='+i(r,p)+"&cur="+l(h)+'&logo=%2F%2Fgw.alicdn.com%2Ftfs%2FTB1Uhbvh_vI8KJjSspjXXcgjXXa-534-98.png"></div><div mxa="_zs_gallerybo:_" class="_zs_galleryfC"><div mxa="_zs_gallerybo:a" class="_zs_galleryfD">',v+=h?" 当前导航："+n(y)+"（"+n(h)+"） ":" 点击导航切换区块内容 ",v+="</div></div>"},render:function(){this.updater.digest({navs:[{value:1,text:"营销中台"},{value:2,text:"创意中台"}],cur:"",curText:""})},"change<navchange>":function(e){var a=e.nav;this.updater.digest({cur:a.value,curText:a.text})}})});