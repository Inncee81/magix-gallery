define("mx-status/dropdown",["magix","mx-status/base"],(l,e,r)=>{var a=l("magix"),s=l("mx-status/base");a.applyStyle("_zs_galleryai",'._zs_galleryjz{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}[mx-view*="mx-status/dropdown"],[mx-view*="mx-status/index"]{display:inline-block}._zs_galleryjA{position:relative}._zs_galleryjA ._zs_galleryjB>*{font-size:20px;line-height:25px}._zs_galleryjA ._zs_galleryjC{position:absolute;top:-10px;left:-10px;z-index:10;box-shadow:0 2px 4px rgba(51,51,51,.08);background-color:#fff;border:0;border-radius:4px;text-align:left;word-wrap:break-word;overflow:hidden}._zs_galleryjA ._zs_galleryjC ._zs_galleryjB{float:left}._zs_galleryjA ._zs_galleryjC ._zs_galleryjD{float:left;margin-left:8px}._zs_galleryjA ._zs_galleryjC ._zs_galleryjE{min-width:140px;height:45px;line-height:25px;padding:10px;cursor:pointer}._zs_galleryjA ._zs_galleryjC ._zs_galleryjE ._zs_galleryjF{display:none;float:right;color:#999;font-weight:700;font-size:20px;line-height:25px}._zs_galleryjA ._zs_galleryjC ._zs_galleryjE:hover{background-color:#fafafa}._zs_galleryjA ._zs_galleryjC ._zs_galleryjE._zs_galleryjG{cursor:default}._zs_galleryjA ._zs_galleryjC ._zs_galleryjE._zs_galleryjG ._zs_galleryjF{display:block}._zs_galleryjA ._zs_galleryjC ._zs_galleryjH{min-width:140px;height:45px;line-height:25px;padding:10px}._zs_galleryjA ._zs_galleryjC ._zs_galleryjI{width:200px;font-size:12px;padding:0 10px 10px;line-height:18px}._zs_galleryjA ._zs_galleryjC._zs_galleryjJ{top:0;left:0}._zs_galleryjA ._zs_galleryjK{position:relative;width:36px;height:25px;line-height:25px}._zs_galleryjA ._zs_galleryjK ._zs_galleryjL{position:absolute;top:10.5px;left:31px;width:0;height:0;line-height:0;font-size:0;overflow:hidden;border-color:#999 transparent transparent;border-style:solid;border-width:3px 3px 0}._zs_galleryjA ._zs_galleryjM{position:relative;width:110px}._zs_galleryjA ._zs_galleryjM ._zs_galleryjN{width:100%}._zs_galleryjA ._zs_galleryjM ._zs_galleryjL{position:absolute;top:50%;right:0;width:28px;height:28px;margin-top:-14px;line-height:28px;text-align:center;color:#ccc;font-size:20px}._zs_galleryjA ._zs_galleryjO{height:0;border-top:1px solid #e6e6e6}'),r.exports=s.extend({tmpl:function(l,e,r,a,s,_,t,o){if(r||(r=l),!s){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,n=function(l){return"&"+i[l]+";"};s=function(l){return""+(null==l?"":l)},a=function(l){return s(l).replace(g,n)}}if(!_){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(l){return p[l]},z=/[!')(*]/g;_=function(l){return encodeURIComponent(s(l)).replace(z,y)}}if(!o){var x=/[\\'"]/g;o=function(l){return s(l).replace(x,"\\$&")}}t||(t=function(l,e,r,a){for(a=l[j];--a;)if(l[r=j+a]===e)return r;return l[r=j+l[j]++]=e,r});var j="",c="",d=l.showInfo,h=l.info,f=l.cur,u=l.show,m=l.opers;if(c+='<div mxa="_zs_gallerycH:_" class="_zs_galleryjA" mx-mouseout="'+e+'out()"><div mxa="_zs_gallerycH:a" class="_zs_galleryjM" mx-mouseover="'+e+'over()">',c+=d?'<span class="input _zs_galleryjN cursor-not-allow" style="color: '+a(h.color)+';">'+a(h.text)+"</span>":'<span class="input _zs_galleryjN" style="color: '+a(f.color)+';">'+a(f.text)+'</span><i mxs="_zs_gallerycH:_" class="mc-iconfont _zs_galleryjL">&#xe692;</i>',c+="</div>",u&&!d&&m.length>0){c+='<ul mxa="_zs_gallerycH:b" class="_zs_galleryjC _zs_galleryjJ">';for(var w=0,v=m.length;w<v;w++){var b=m[w];c+='<li class="_zs_galleryjE clearfix ',b.value==f.value&&(c+=" _zs_galleryjG "),c+='" mx-click="'+e+"select({item:'"+t(r,b)+'\'})"><span class="_zs_galleryjB" style="color: '+a(b.color)+';">'+s(b.icon)+'</span><span mxa="_zs_gallerycH:c" class="_zs_galleryjD">'+a(b.text)+'</span><i mxs="_zs_gallerycH:a" class="mc-iconfont _zs_galleryjF">&#xe65d;</i></li>'}c+="</ul>"}return c+="</div>"}})});