define("mx-popover/__test__/custom",["magix"],(r,a,e)=>{var i=r("magix");i.applyStyle("_zs_galleryaq","._zs_galleryiR{border-radius:var(--border-radius)}._zs_galleryiR ._zs_galleryiS{padding:10px;background-color:var(--color-bg);border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius)}._zs_galleryiR ._zs_galleryiT{float:left;width:33.3%;padding:10px}"),e.exports=i.View.extend({tmpl:function(r,a,e,i,l,d,t,s){if(e||(e=r),!l){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,o=function(r){return"&"+n[r]+";"};l=function(r){return""+(null==r?"":r)},i=function(r){return l(r).replace(_,o)}}if(!d){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},g=function(r){return c[r]},u=/[!')(*]/g;d=function(r){return encodeURIComponent(l(r)).replace(u,g)}}if(!s){var v=/[\\'"]/g;s=function(r){return l(r).replace(v,"\\$&")}}var p="",f=r.list;p+='<div mxa="_zs_gallerydc:_" class="_zs_galleryiR"><div mxs="_zs_gallerydc:_" class="_zs_galleryiS">标题标题</div><div mxa="_zs_gallerydc:a" class="clearfix">';for(var y=0,m=f.length;y<m;y++){p+='<div mxa="_zs_gallerydc:b" class="_zs_galleryiT"><div mxa="_zs_gallerydc:c" class="mb5 color-9">'+i(f[y].name)+'</div><div mxs="_zs_gallerydc:a">-</div></div>'}return p+="</div></div>"},init:function(r){this.updater.set(r.data)},render:function(){i.Router.parse();this.updater.digest({})}})});