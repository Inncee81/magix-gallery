define("mx-popover/__test__/custom",["magix"],(r,a,e)=>{var i=r("magix");i.applyStyle("_zs_galleryar","._zs_galleryiW{border-radius:var(--border-radius)}._zs_galleryiW ._zs_galleryiX{padding:10px;background-color:var(--color-bg);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}._zs_galleryiW ._zs_galleryiY{float:left;width:33.3%;padding:10px}"),e.exports=i.View.extend({tmpl:function(r,a,e,i,l,d,t,s){if(e||(e=r),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,o=function(r){return"&"+n[r]+";"};l=function(r){return""+(null==r?"":r)},i=function(r){return l(r).replace(_,o)}}if(!d){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},u=function(r){return g[r]},c=/[!')(*]/g;d=function(r){return encodeURIComponent(l(r)).replace(c,u)}}if(!s){var v=/[\\'"]/g;s=function(r){return l(r).replace(v,"\\$&")}}var z="",p=r.list;z+='<div mxa="_zs_gallerydz:_" class="_zs_galleryiW"><div mxs="_zs_gallerydz:_" class="_zs_galleryiX">标题标题</div><div mxa="_zs_gallerydz:a" class="clearfix">';for(var f=0,y=p.length;f<y;f++){z+='<div mxa="_zs_gallerydz:b" class="_zs_galleryiY"><div mxa="_zs_gallerydz:c" class="mb5 color-9">'+i(p[f].name)+'</div><div mxs="_zs_gallerydz:a">-</div></div>'}return z+="</div></div>"},init:function(r){this.updater.set(r.data)},render:function(){i.Router.parse();this.updater.digest({})}})});