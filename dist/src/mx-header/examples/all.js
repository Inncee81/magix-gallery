define("mx-header/examples/all",["magix","$","../index"],(e,r,a)=>{e("../index");var l=e("magix");e("$");l.applyStyle("_zs_galleryY","._zs_gallerygj{height:1200px;background-color:var(--color-bg)}._zs_gallerygj ._zs_gallerygk{width:1000px;padding-top:100px;margin:auto}._zs_gallerygl{height:400px;overflow-y:auto;background-color:var(--color-bg);border:1px solid var(--color-border)}._zs_gallerygl ._zs_gallerygk{height:800px}._zs_gallerygm{margin-left:15px;border:1px solid var(--color-border)}"),a.exports=l.View.extend({tmpl:function(e,r,a,l,n,t,g,i){if(a||(a=e),!n){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,u=function(e){return"&"+o[e]+";"};n=function(e){return""+(null==e?"":e)},l=function(e){return n(e).replace(c,u)}}if(!t){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(e){return d[e]},v=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(v,s)}}if(!i){var x=/[\\'"]/g;i=function(e){return n(e).replace(x,"\\$&")}}g||(g=function(e,r,a,l){for(l=e[p];--l;)if(e[a=p+l]===r)return a;return e[a=p+e[p]++]=r,a});var p="",_="",f=e.navs,m=e.cur,h=e.curText;return _+='<div mxv="navs" mx-navchange="'+r+'change()" mx-view="mx-header/index?navs='+g(a,f)+"&cur="+t(m)+'&logo=%2F%2Fimg.alicdn.com%2Ftfs%2FTB1Z0ggLPTpK1RjSZKPXXa3UpXa-534-98.png"></div><div mxa="_zs_gallerycP:_" class="_zs_gallerygj"><div mxa="_zs_gallerycP:a" class="_zs_gallerygk">',_+=m?" 当前导航："+l(h)+"（"+l(m)+"） ":" 点击导航切换区块内容 ",_+="</div></div>"},render:function(){this.updater.digest({navs:[{value:1,text:"营销中台",subs:[{value:21,text:"标准推广"},{value:22,text:"智能推广"}]},{value:2,text:"创意中台"}],cur:"",curText:""})},"change<navchange>":function(e){var r=e.nav;this.updater.digest({cur:r.value,curText:r.text})}})});