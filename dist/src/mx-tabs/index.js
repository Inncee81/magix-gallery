define("mx-tabs/index",["magix","mx-tabs/base","mx-popover/index"],(r,l,e)=>{r("mx-popover/index");var a=r("magix"),o=r("mx-tabs/base");a.applyStyle("_zs_galleryaD",'[mx-view*="mx-tabs/box"]{display:inline-block}._zs_gallerykD{position:relative;border-bottom:1px solid var(--color-border)}._zs_gallerykD ._zs_gallerykE{position:relative;float:left;padding:10px 24px;font-size:16px;line-height:var(--input-height);transition:color var(--duration) ease-out;color:#666}._zs_gallerykD ._zs_gallerykE:hover{color:#333}._zs_gallerykD ._zs_gallerykE._zs_gallerykF{color:var(--color-brand)}._zs_gallerykD ._zs_gallerykE ._zs_gallerykG{position:absolute;top:50%;left:100%;z-index:3;display:inline-block;margin-top:calc(4px - var(--input-height));margin-left:-24px}._zs_gallerykD ._zs_gallerykE ._zs_gallerykG ._zs_gallerykH{display:inline-block;width:8px;height:8px;background-color:red;border-radius:50%}._zs_gallerykD ._zs_gallerykE ._zs_gallerykI{margin-left:-24px}._zs_gallerykD ._zs_gallerykJ{position:absolute;width:0;height:0;bottom:-1px;border-bottom:2px solid var(--color-brand);transition:width var(--duration) cubic-bezier(.645,.045,.355,1),left var(--duration) cubic-bezier(.645,.045,.355,1)}._zs_gallerykK{position:relative;display:inline-block;height:var(--input-height);vertical-align:middle}._zs_gallerykK ._zs_gallerykL{position:relative;top:1px;font-size:14px}._zs_gallerykK ._zs_gallerykM{position:relative;padding:0 12px;text-align:center;cursor:pointer;transition:all var(--duration)}._zs_gallerykK ._zs_gallerykM:first-child{border-top-left-radius:var(--border-radius);border-bottom-left-radius:var(--border-radius)}._zs_gallerykK ._zs_gallerykM:last-child{border-top-right-radius:var(--border-radius);border-bottom-right-radius:var(--border-radius)}._zs_gallerykK ._zs_gallerykM ._zs_gallerykI{margin-left:-14px}._zs_gallerykK._zs_gallerykN ._zs_gallerykM{color:#999;cursor:not-allowed}._zs_gallerykK._zs_gallerykN ._zs_gallerykM:hover{color:#999}._zs_gallerykK._zs_gallerykN ._zs_gallerykM._zs_gallerykF{color:#999;background-color:var(--color-disabled);border-color:var(--color-border)}._zs_gallerykO ._zs_gallerykM{position:relative;z-index:2;display:inline-block;height:var(--input-height);line-height:calc(var(--input-height) - 2px);border-radius:var(--border-radius);color:#666;border:1px solid transparent}._zs_gallerykO ._zs_gallerykM:hover{color:#333}._zs_gallerykO ._zs_gallerykM._zs_gallerykF{color:#333;background-color:var(--color-brand-opacity);border:1px solid var(--color-brand)}._zs_gallerykO:after{content:" ";position:absolute;top:0;left:0;z-index:1;width:100%;height:100%}._zs_gallerykO:after,._zs_gallerykP{border-radius:var(--border-radius);border:1px solid var(--border-highlight)}._zs_gallerykP ._zs_gallerykM{display:inline-block;height:calc(var(--input-height) - 2px);line-height:calc(var(--input-height) - 2px);color:#999;background-color:#fff}._zs_gallerykP ._zs_gallerykM:hover{color:#333}._zs_gallerykP ._zs_gallerykM._zs_gallerykF{color:var(--color-brand);background-color:var(--color-brand-opacity)}'),e.exports=o.extend({tmpl:function(r,l,e,a,o,t,s,i){if(e||(e=r),!o){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,g=function(r){return"&"+_[r]+";"};o=function(r){return""+(null==r?"":r)},a=function(r){return o(r).replace(n,g)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(r){return c[r]},p=/[!')(*]/g;t=function(r){return encodeURIComponent(o(r)).replace(p,d)}}if(!i){var y=/[\\'"]/g;i=function(r){return o(r).replace(y,"\\$&")}}s||(s=function(r,l,e,a){for(a=r[k];--a;)if(r[e=k+a]===l)return e;return r[e=k+r[k]++]=l,e});var k="",z="",u=r.type,v=r.list,h=r.selected,b=r.viewId,x=r.spm,f=r.left,m=r.width,M=r.disabled;if("border"==u){z+='<div mxa="_zs_gallerye|:_" class="_zs_gallerykD clearfix">';for(var w=0,D=v.length;w<D;w++){z+='<a class="_zs_gallerykE '+a((E=v[w]).value==h?"_zs_gallerykF":"")+'" href="javascript:;" id="'+a(b)+"_"+a(E.value)+'" mx-mouseover="'+l+"__eP({value:'"+a(i(E.value))+'\'})" mx-mouseout="'+l+'__cn()" mx-click="'+l+"__ac({item:'"+s(e,E)+"'})\" ",x&&(z+=' data-spm-click="'+a(x)+a(w)+'" '),z+=">"+a(E.text)+" ",E.tagContent?z+='<span mxa="_zs_gallerye|:a" class="_zs_gallerykG">'+o(E.tagContent)+"</span>":(z+=" ",E.tag&&(z+='<span class="mx-tag _zs_gallerykI" style="background-color: '+a(E.color)+';"><span class="mx-tag-arrow" style="border-color: '+a(E.color)+" transparent transparent "+a(E.color)+';"></span><span mxa="_zs_gallerye|:b" class="mx-tag-name">'+o(E.tag)+"</span></span>"),z+=" "),z+=" ",E.tips&&(z+='<i class="mc-iconfont color-c" mx-view="mx-popover/index?width=280&content='+t(E.tips)+'">&#xe7aa;</i>'),z+="</a>"}z+='<span class="_zs_gallerykJ" style="left: '+a(f)+"px; width: "+a(m)+'px;"></span></div>'}else{z+='<div class="_zs_gallerykK '+a(M?"_zs_gallerykN":"")+'">';for(var K=0,N=v.length;K<N;K++){var E=v[K];z+='<a href="javascript:;" ',M||(z+=' mx-click="'+l+"__ac({item:'"+s(e,E)+"'})\" "),z+=' class="_zs_gallerykM '+a(E.value==h?"_zs_gallerykF":"")+'" ',x&&(z+=' data-spm-click="'+a(x)+a(w)+'" '),z+=">"+a(E.text)+" ",E.tag&&(z+='<span mxa="_zs_gallerye|:c" class="_zs_gallerykI">'+a(E.tag)+"</span>"),z+="</a>"}z+="</div>"}return z},render:function(){this.updater.digest(),this.__eN(this.__eL)},__eN:function(r){if("border"==this.__eM){this.__eO=r;var l=$("#"+this.id+"_"+r),e=l.offset().left-this.__a.offset().left,a=l.outerWidth();this.updater.digest({left:e,width:a})}},"__eP<mouseover>":function(r){var l=r.params.value;this.__eN(l)},"__cn<mouseout>":function(r){this.__eN(this.__eL)}})});