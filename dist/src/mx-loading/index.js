define("mx-loading/index",["$","magix","./base"],(i,a,n)=>{var e=i("$"),r=i("magix");r.applyStyle("_zs_galleryad","._zs_galleryi_{display:none;position:fixed;z-index:999999;background-color:rgba(0,0,0,.5);border-radius:var(--border-radius)}._zs_galleryia{z-index:999998;background:transparent}._zs_galleryic,._zs_galleryia{display:none;position:fixed;top:0;left:0;width:100%;height:100%}._zs_galleryic{z-index:999999;background-color:rgba(0,0,0,.5)}._zs_galleryic ._zs_galleryid{position:absolute;top:50%;left:50%;width:160px;height:36px;margin-top:-18px;margin-left:-80px}");var t=function(i,a,n,e,r,t,l,d){if(n||(n=i),!r){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,g=function(i){return"&"+s[i]+";"};r=function(i){return""+(null==i?"":i)},e=function(i){return r(i).replace(o,g)}}if(!t){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(i){return p[i]},c=/[!')(*]/g;t=function(i){return encodeURIComponent(r(i)).replace(c,_)}}if(!d){var u=/[\\'"]/g;d=function(i){return r(i).replace(u,"\\$&")}}var h="",f=i.id,y=i.width,x=i.height;return h+='<div id="'+e(f)+'" class="_zs_galleryi_" style="width: '+e(y)+"px; height: "+e(x)+'px;"><div mxs="_zs_gallerydf:_" class="loading _zs_galleryid" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>'},l=i("./base");n.exports=r.mix({__cB:function(){var i=this.id+"_loading",a=e("#"+i);if(!a.length){var n=e.isFunction(t)?t({id:i,width:"150px",height:"36px"},this.id):t;e(document.body).append(n),a=e("#"+i)}return a},showLoading:function(i){var a=this.id+"_loading",n=this.__cB(),r=e(window),t=(r.width()-150)/2|0,l=(r.height()-36)/2|0;if(n.css({left:t,top:l,display:"block"}),!i){var d=e("#"+a+"_mask");d.length||(e(document.body).append('<div id="'+a+'_mask" class="_zs_galleryia"></div>'),d=e("#"+a+"_mask")),d.css({display:"block"})}}},l)});