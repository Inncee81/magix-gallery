define("mx-tabs/index",["magix","mx-tabs/base","mx-effects/icon","mx-popover/index"],(r,e,l)=>{r("mx-effects/icon"),r("mx-popover/index");var a=r("magix"),o=r("mx-tabs/base");a.applyStyle("_zs_galleryaC",'[mx-view*="mx-tabs/box"]{display:inline-block}._zs_gallerykp{position:relative;border-bottom:1px solid var(--color-border)}._zs_gallerykp ._zs_gallerykq{position:relative;float:left;padding:10px 24px;font-size:calc(4px + var(--font-size));line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_gallerykp ._zs_gallerykq:hover{color:#333}._zs_gallerykp ._zs_gallerykq._zs_gallerykr{color:var(--color-brand)}._zs_gallerykp ._zs_gallerykq ._zs_galleryks{position:absolute;top:50%;left:100%;z-index:3;display:inline-block;margin-top:calc(4px - var(--input-height));margin-left:-24px}._zs_gallerykp ._zs_gallerykt{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_galleryku{position:relative;display:inline-block;height:var(--input-height);vertical-align:middle}._zs_galleryku ._zs_gallerykv{position:relative;top:1px;font-size:calc(2px + var(--font-size))}._zs_galleryku ._zs_gallerykw{position:relative;padding:0 12px;font-size:var(--font-size);text-align:center;cursor:pointer;transition:all var(--duration)}._zs_galleryku ._zs_gallerykw:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_galleryku ._zs_gallerykw:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_galleryku._zs_gallerykx ._zs_gallerykw{color:#999;cursor:not-allowed}._zs_galleryku._zs_gallerykx ._zs_gallerykw:hover{color:#999}._zs_galleryku._zs_gallerykx ._zs_gallerykw._zs_gallerykr{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_galleryky ._zs_gallerykw{position:relative;z-index:2;display:inline-block;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_galleryky ._zs_gallerykw:hover{color:#333}._zs_galleryky ._zs_gallerykw._zs_gallerykr{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_galleryky:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_galleryky:after,._zs_gallerykz{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_gallerykz ._zs_gallerykw{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_gallerykz ._zs_gallerykw:hover{color:#333}._zs_gallerykz ._zs_gallerykw._zs_gallerykr{color:var(--color-brand);background-color:var(--color-brand-opacity)}'),l.exports=o.extend({tmpl:function(r,e,l,a,o,t,i,s){if(l||(l=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},a=function(r){return o(r).replace(n,c)}}if(!t){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(r){return g[r]},p=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(p,d)}}if(!s){var u=/[\\'"]/g;s=function(r){return o(r).replace(u,"\\$&")}}i||(i=function(r,e,l,a){for(a=r[y];--a;)if(r[l=y+a]===e)return l;return r[l=y+r[y]++]=e,l});var y="",z="",v=r.list,k=r.selected,h=r.viewId,f=r.spm,b=r.left,x=r.width;z+='<div mxa="_zs_galleryfg:_" class="_zs_gallerykp clearfix">';for(var m=0,w=v.length;m<w;m++){var q=v[m];z+='<a class="_zs_gallerykq '+a(q.value==k?"_zs_gallerykr":"")+'" href="javascript:;" id="'+a(h)+"_"+a(q.value)+'" mx-mouseover="'+e+"__cs({value:'"+a(s(q.value))+'\'})" mx-mouseout="'+e+'__cq()" mx-click="'+e+"__af({item:'"+i(l,q)+"'})\" ",f&&(z+=' data-spm-click="'+a(f)+a(m)+'" '),z+=">"+o(q.text)+" ",q.tagContent?z+='<span mxa="_zs_galleryfg:a" class="_zs_galleryks">'+o(q.tagContent)+"</span>":(z+=" ",q.tag&&(z+='<span mx-view="mx-effects/icon?type=error&color='+t(q.color)+"&content="+t(q.tag)+'"></span>'),z+=" "),z+=" ",q.tips&&(z+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content='+t(q.tips)+'">&#xe7aa;</i>'),z+="</a>"}return z+='<span class="_zs_gallerykt" style="left: '+a(b)+"px; width: "+a(x)+'px;"></span></div>'},render:function(){this.updater.digest(),this.__eR(this.__eP)},__eR:function(r){if("border"==this.__eQ){this.__eS=r;var e=$("#"+this.id+"_"+r),l=e.offset().left-this.__a.offset().left,a=e.outerWidth();this.updater.digest({left:l,width:a})}},"__cs<mouseover>":function(r){var e=r.params.value;this.__eR(e)},"__cq<mouseout>":function(r){this.__eR(this.__eP)}})});