define("mx-main/tip",["magix","$"],(l,r,_)=>{var e=l("magix");l("$");e.applyStyle("_zs_galleryag",'[mx-view*="mx-main/index"]{position:relative;background-color:#e8ebf2}._zs_galleryhW{position:absolute;top:0;left:0;bottom:0;padding-top:16px;background-color:var(--app-nav-bg);z-index:3}._zs_galleryhW ._zs_galleryhX{position:relative;font-size:14px}._zs_galleryhW ._zs_galleryhX:before{content:"";position:absolute;top:0;left:24px;bottom:0;width:0;border-left:1px solid #4d5873}._zs_galleryhW ._zs_galleryhX:first-child:before{top:23px}._zs_galleryhW ._zs_galleryhX:last-child:before{bottom:23px}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY{position:relative;display:block;height:46px;line-height:46px;padding-left:36px}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY ._zs_galleryhZ{color:#fff;opacity:.5}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY ._zs_galleryi_{opacity:0;position:absolute;top:0;left:0;z-index:-1;width:100%;height:100%;background-image:linear-gradient(-90deg,var(--app-brand),var(--app-brand-gradient));background-color:var(--app-brand);transition:all var(--duration)}._zs_galleryhW ._zs_galleryhX ._zs_galleryhY._zs_galleryia ._zs_galleryi_,._zs_galleryhW ._zs_galleryhX ._zs_galleryhY._zs_galleryia ._zs_galleryhZ,._zs_galleryhW ._zs_galleryhX ._zs_galleryhY:hover ._zs_galleryhZ{opacity:1}._zs_galleryhW ._zs_galleryhX ._zs_galleryic ._zs_galleryid{position:absolute;top:50%;left:16px;width:16px;height:16px;margin-top:-8px;border-radius:50%;background-color:#4d5873;color:#fff;text-align:center;line-height:16px;font-size:12px;transition:all var(--duration)}._zs_galleryhW ._zs_galleryhX ._zs_galleryie:before{content:"";position:absolute;top:50%;left:24px;width:10px;height:0;border-top:1px solid #4d5873}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic ._zs_galleryhZ{opacity:1}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic ._zs_galleryi_{opacity:.2}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic._zs_galleryia ._zs_galleryid{background-color:#fff;color:var(--app-brand)}._zs_galleryhW ._zs_galleryhX._zs_galleryif ._zs_galleryic._zs_galleryia ._zs_galleryi_{opacity:1}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryhY{cursor:not-allowed}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryhY:hover ._zs_galleryhZ{opacity:.5}._zs_galleryhW ._zs_galleryhX._zs_galleryig ._zs_galleryih{position:absolute;top:50%;right:16px;margin-top:-6px;font-size:14px;font-weight:700;color:#4d5873}._zs_galleryii{position:relative;z-index:2}._zs_galleryii ._zs_galleryij{position:relative;margin-bottom:16px;border-radius:var(--border-radius);background-color:#fff}._zs_galleryii ._zs_galleryij ._zs_galleryik{padding:8px 24px;border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom:1px solid var(--color-border)}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil>*,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryim,._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryin{display:inline-block;height:32px;line-height:32px;vertical-align:middle;overflow:hidden}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryil{margin-right:5px;color:#999}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryim{font-size:16px}._zs_galleryii ._zs_galleryij ._zs_galleryik ._zs_galleryio{margin-left:20px;color:#999}._zs_galleryii ._zs_galleryij ._zs_galleryip{padding:16px 24px}._zs_galleryii ._zs_galleryiq{position:absolute;background-color:#fff;border-radius:var(--border-radius)}._zs_galleryii ._zs_galleryiq ._zs_galleryir{padding:8px 24px;line-height:32px;font-size:16px;border-bottom:1px solid var(--color-border)}._zs_galleryii ._zs_galleryiq ._zs_galleryis{padding:16px 24px;color:#666}._zs_galleryii ._zs_galleryit{text-align:center;padding:40px 0}._zs_galleryii ._zs_galleryit ._zs_galleryiu{min-width:100px;margin-right:20px}._zs_galleryii ._zs_galleryit ._zs_galleryiu:last-child{margin-right:0}._zs_galleryiv{display:inline-block;position:relative;margin-top:10px;color:var(--color-red)}'),_.exports=e.View.extend({tmpl:function(l,r,_,e,a,i,s,g){if(_||(_=l),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,y=function(l){return"&"+o[l]+";"};a=function(l){return""+(null==l?"":l)},e=function(l){return a(l).replace(t,y)}}if(!i){var z={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},n=function(l){return z[l]},p=/[!')(*]/g;i=function(l){return encodeURIComponent(a(l)).replace(p,n)}}if(!g){var d=/[\\'"]/g;g=function(l){return a(l).replace(d,"\\$&")}}var h="",c=l.view,x=l.title,f=l.content;return c?h+='<div mx-view="'+e(c)+'"><div mxs="_zs_gallerydb:_" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div>':(h+=" ",x&&(h+='<div mxa="_zs_gallerydb:_" class="_zs_galleryir">'+a(x)+"</div>"),h+='<div mxa="_zs_gallerydb:a" class="_zs_galleryis">'+a(f)+"</div>"),h},init:function(l){var r=l.data||{};this.updater.set(r)},render:function(){this.updater.digest()}})});