define("mx-popmenu/content",["magix"],(i,r,e)=>{var a=i("magix");a.applyStyle("_zs_galleryal","._zs_galleryiQ{padding:8px 10px;overflow:auto}._zs_galleryiQ ._zs_galleryiR{padding:2px 0}._zs_galleryiQ ._zs_galleryiR ._zs_galleryiS{display:block;width:100%;padding:0 8px;cursor:pointer;height:var(--input-small-height);line-height:var(--input-small-height);border-radius:var(--border-radius);transition:all var(--duration)}._zs_galleryiQ ._zs_galleryiR ._zs_galleryiS:hover{background-color:var(--color-bg-hover)}"),e.exports=a.View.extend({tmpl:function(i,r,e,a,l,n,t,s){if(e||(e=i),!l){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(i){return"&"+u[i]+";"};l=function(i){return""+(null==i?"":i)},a=function(i){return l(i).replace(o,g)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(i){return _[i]},d=/[!')(*]/g;n=function(i){return encodeURIComponent(l(i)).replace(d,p)}}if(!s){var c=/[\\'"]/g;s=function(i){return l(i).replace(c,"\\$&")}}var v="",m=i.menus;v+='<div mxa="_zs_gallerydm:_" class="_zs_galleryiQ">';for(var y=0,f=m.length;y<f;y++){var h=m[y];v+='<div mxa="_zs_gallerydm:a" class="_zs_galleryiR"><span class="_zs_galleryiS ellipsis" mx-click="'+r+"submit({value:'"+a(s(h.value))+"'})\">"+a(h.text)+"</span></div>"}return v+="</div>"},init:function(i){this.viewOptions=i;var r=i.data||{};this.updater.set({menus:r.menus})},render:function(){this.updater.digest({})},"submit<click>":function(i){var r=this.viewOptions;r.submit&&r.submit(i.params.value)}})});