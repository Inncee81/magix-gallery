define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(r,l,e)=>{r("mx-popover/index");var a=r("magix"),o=r("mx-tabs/base");a.applyStyle("_zs_galleryaD",'[mx-view*="mx-tabs/box"]{display:inline-block}._zs_galleryky{position:relative;border-bottom:1px solid var(--color-border)}._zs_galleryky ._zs_gallerykz{position:relative;float:left;padding:10px 24px;font-size:16px;line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_galleryky ._zs_gallerykz:hover{color:#333}._zs_galleryky ._zs_gallerykz._zs_gallerykA{color:var(--color-brand)}._zs_galleryky ._zs_gallerykz ._zs_gallerykB{position:absolute;top:50%;left:100%;z-index:3;display:inline-block;margin-top:calc(4px - var(--input-height));margin-left:-24px}._zs_galleryky ._zs_gallerykz ._zs_gallerykB ._zs_gallerykC{display:inline-block;width:8px;height:8px;background-color:red;border-radius:50%}._zs_galleryky ._zs_gallerykz ._zs_gallerykD{margin-left:-24px}._zs_galleryky ._zs_gallerykE{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_gallerykF{position:relative;display:inline-block;height:var(--input-height);vertical-align:middle}._zs_gallerykF ._zs_gallerykG{position:relative;top:1px;font-size:14px}._zs_gallerykF ._zs_gallerykH{position:relative;padding:0 12px;text-align:center;cursor:pointer;transition:all var(--duration)}._zs_gallerykF ._zs_gallerykH:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_gallerykF ._zs_gallerykH:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_gallerykF ._zs_gallerykH ._zs_gallerykD{margin-left:-14px}._zs_gallerykF._zs_gallerykI ._zs_gallerykH{color:#999;cursor:not-allowed}._zs_gallerykF._zs_gallerykI ._zs_gallerykH:hover{color:#999}._zs_gallerykF._zs_gallerykI ._zs_gallerykH._zs_gallerykA{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_gallerykJ ._zs_gallerykH{position:relative;z-index:2;display:inline-block;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_gallerykJ ._zs_gallerykH:hover{color:#333}._zs_gallerykJ ._zs_gallerykH._zs_gallerykA{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_gallerykJ:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerykJ:after,._zs_gallerykK{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_gallerykK ._zs_gallerykH{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_gallerykK ._zs_gallerykH:hover{color:#333}._zs_gallerykK ._zs_gallerykH._zs_gallerykA{color:var(--color-brand);background-color:var(--color-brand-opacity)}'),e.exports=o.extend({tmpl:function(r,l,e,a,o,t,s,i){if(e||(e=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},a=function(r){return o(r).replace(n,g)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(r){return c[r]},y=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(y,d)}}if(!i){var p=/[\\'"]/g;i=function(r){return o(r).replace(p,"\\$&")}}s||(s=function(r,l,e,a){for(a=r[z];--a;)if(r[e=z+a]===l)return e;return r[e=z+r[z]++]=l,e});var z="",k="",u=r.type,v=r.list,h=r.selected,b=r.viewId,x=r.spm,f=r.left,m=r.width,H=r.disabled;if("border"==u){k+='<div mxa="_zs_gallerye(:_" class="_zs_galleryky clearfix">';for(var w=0,F=v.length;w<F;w++){k+='<a class="_zs_gallerykz '+a((D=v[w]).value==h?"_zs_gallerykA":"")+'" href="javascript:;" id="'+a(b)+"_"+a(D.value)+'" mx-mouseover="'+l+"__eP({value:'"+a(i(D.value))+'\'})" mx-mouseout="'+l+'__cn()" mx-click="'+l+"__ac({item:'"+s(e,D)+"'})\" ",x&&(k+=' data-spm-click="'+a(x)+a(w)+'" '),k+=">"+a(D.text)+" ",D.tagContent?k+='<span mxa="_zs_gallerye(:a" class="_zs_gallerykB">'+o(D.tagContent)+"</span>":(k+=" ",D.tag&&(k+='<span class="mx-tag _zs_gallerykD" style="background-color: '+a(D.color)+';"><span class="mx-tag-arrow" style="border-color: '+a(D.color)+" transparent transparent "+a(D.color)+';"></span><span mxa="_zs_gallerye(:b" class="mx-tag-name">'+o(D.tag)+"</span></span>"),k+=" "),k+=" ",D.tips&&(k+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content='+t(D.tips)+'">&#xe7aa;</i>'),k+="</a>"}k+='<span class="_zs_gallerykE" style="left: '+a(f)+"px; width: "+a(m)+'px;"></span></div>'}else{k+='<div class="_zs_gallerykF '+a(H?"_zs_gallerykI":"")+'">';for(var A=0,I=v.length;A<I;A++){var D=v[A];k+='<a href="javascript:;" ',H||(k+=' mx-click="'+l+"__ac({item:'"+s(e,D)+"'})\" "),k+=' class="_zs_gallerykH '+a(D.value==h?"_zs_gallerykA":"")+'" ',x&&(k+=' data-spm-click="'+a(x)+a(w)+'" '),k+=">"+a(D.text)+" ",D.tag&&(k+='<span mxa="_zs_gallerye(:c" class="_zs_gallerykD">'+a(D.tag)+"</span>"),k+="</a>"}k+="</div>"}return k},render:function(){this.updater.digest(),this.__eN(this.__eL)},__eN:function(r){if("border"==this.__eM){this.__eO=r;var l=$("#"+this.id+"_"+r),e=l.offset().left-this.__a.offset().left,a=l.outerWidth();this.updater.digest({left:e,width:a})}},"__eP<mouseover>":function(r){var l=r.params.value;this.__eN(l)},"__cn<mouseout>":function(r){this.__eN(this.__eL)}})});