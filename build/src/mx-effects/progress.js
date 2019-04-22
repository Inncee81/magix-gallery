define("mx-effects/progress",["magix","$","mx-util/color"],(e,l,r)=>{var a=e("magix"),t=e("$"),i=e("mx-util/color");a.applyStyle("_zs_galleryL",'[mx-view*="mx-effects/progress"]{display:inline-block}._zs_galleryeE-gradient,._zs_galleryeE-line{position:relative;background:#f0f0f0}._zs_galleryeE-gradient ._zs_galleryeF,._zs_galleryeE-line ._zs_galleryeF{position:absolute;top:0;left:0;width:0;height:100%;transition:width var(--duration)}._zs_galleryeE-gradient ._zs_galleryeG,._zs_galleryeE-line ._zs_galleryeG{position:absolute;width:60px;height:24px;line-height:24px;font-family:Tahoma;color:#999;transition:all var(--duration)}._zs_galleryeE-gradient ._zs_galleryeH,._zs_galleryeE-line ._zs_galleryeH{top:-9px;left:100%;padding-left:10px;text-align:left}._zs_galleryeE-gradient ._zs_galleryeI,._zs_galleryeE-line ._zs_galleryeI{top:-9px;left:-60px;padding-right:10px;text-align:right}._zs_galleryeE-gradient ._zs_galleryeJ,._zs_galleryeE-line ._zs_galleryeJ{top:-24px;margin-left:-30px;text-align:center}._zs_galleryeE-gradient ._zs_galleryeK,._zs_galleryeE-line ._zs_galleryeK{bottom:-24px;margin-left:-30px;text-align:center}._zs_galleryeE-line{height:6px;border-radius:3px}._zs_galleryeE-line ._zs_galleryeF{border-radius:3px;background:var(--color-brand)}._zs_galleryeE-gradient{height:12px;border-radius:6px}._zs_galleryeE-gradient ._zs_galleryeF{border-radius:6px;background:var(--color-brand);background-size:24px 12px}._zs_galleryeL{position:relative}._zs_galleryeL ._zs_galleryeM{display:inline-block;width:4px;height:14px;margin-right:3px;border-radius:2px}._zs_galleryeL ._zs_galleryeM:last-child{margin-right:0}._zs_galleryeL ._zs_galleryeN ._zs_galleryeM{background-color:#f0f0f0}._zs_galleryeL ._zs_galleryeO{position:absolute;top:0;left:0}._zs_galleryeL ._zs_galleryeO ._zs_galleryeM{background-color:var(--color-brand)}._zs_galleryeP{position:relative}._zs_galleryeP ._zs_galleryeQ,._zs_galleryeP ._zs_galleryeR{position:absolute;top:0;left:50%}._zs_galleryeP ._zs_galleryeR{z-index:4;text-align:center;font-family:Tahoma;font-size:14px;color:#666}._zs_galleryeP ._zs_galleryeQ{z-index:2;border-radius:50%}._zs_galleryeP ._zs_galleryeS{position:relative;z-index:3}._zs_galleryeP ._zs_galleryeS ._zs_galleryeT{border-radius:50%;position:absolute;top:0;-webkit-transform:rotate(-135deg);transform:rotate(-135deg);text-indent:1px}._zs_galleryeP ._zs_galleryeS ._zs_galleryeU{position:absolute;top:0;overflow:hidden}._zs_galleryeP ._zs_galleryeS ._zs_galleryeU._zs_galleryeV{left:0}._zs_galleryeP ._zs_galleryeS ._zs_galleryeU._zs_galleryeW{right:0}');var s={left:"_zs_galleryeI",right:"_zs_galleryeH",top:"_zs_galleryeJ",bottom:"_zs_galleryeK"};r.exports=a.View.extend({tmpl:function(e,l,r,a,t,i,s,_){if(r||(r=e),!t){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,n=function(e){return"&"+g[e]+";"};t=function(e){return""+(null==e?"":e)},a=function(e){return t(e).replace(o,n)}}if(!i){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return d[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(t(e)).replace(p,y)}}if(!_){var z=/[\\'"]/g;_=function(e){return t(e).replace(z,"\\$&")}}var c="",x=e.type,h=e.width,u=e.border,f=e.viewId,b=e.color,v=e.text,m=e.num,w=e.color1,E=e.color2,k=e.colorGradient,P=e.cName,N=e.placement,M=e.degree;if("circle"==x&&(c+='<div mxa="_zs_gallerybN:_" class="_zs_galleryeP"><div class="_zs_galleryeQ" style="width: '+a(h)+"px; height: "+a(h)+"px; margin-left: "+a(0-h/2)+"px; border: "+a(u)+'px solid #f0f0f0;"></div><div id="'+a(f)+'_circle" class="_zs_galleryeS" style="width: '+a(h+2*u)+"px; height: "+a(h+2*u)+'px;"><div class="_zs_galleryeU _zs_galleryeV" style="width: '+a(h/2+u)+"px; height: "+a(h+2*u)+'px;"><div class="_zs_galleryeT" style="left: '+a(u)+"px; width: "+a(h)+"px; height: "+a(h)+"px; border: "+a(u)+"px solid transparent; border-bottom: "+a(u)+"px solid "+a(b)+"; border-left: "+a(u)+"px solid "+a(b)+';"></div></div><div class="_zs_galleryeU _zs_galleryeW" style="width: '+a(h/2+u)+"px; height: "+a(h+2*u)+'px;"><div class="_zs_galleryeT" style="right: '+a(u)+"px; width: "+a(h)+"px; height: "+a(h)+"px; border: "+a(u)+"px solid transparent; border-top: "+a(u)+"px solid "+a(b)+"; border-right: "+a(u)+"px solid "+a(b)+';"></div></div></div>',v&&(c+='<div class="_zs_galleryeR" style="width: '+a(h)+"px; height: "+a(h)+"px; margin-left: "+a(0-h/2)+"px; line-height: "+a(h)+'px;">'+a(m)+"</div>"),c+="</div>"),c+=" ","line"!=x&&"gradient"!=x||(c+='<div class="_zs_galleryeE-'+a(x)+'" style="width: '+a(h)+'px;"><div class="_zs_galleryeF" style="width: '+a(m)+"; ",w&&E?c+=" background: linear-gradient(45deg, "+a(w)+" 33%, "+a(E)+" 34%, "+a(E)+" 59%, "+a(w)+" 60%); background-size: 24px 12px; ":(c+=" ",c+=k?" background: linear-gradient(to right, "+a(b)+", "+a(k)+"); ":" background: "+a(b)+"; ",c+="  "),c+='"></div>',v&&(c+='<div class="_zs_galleryeG '+a(P)+'" ',"top"!=N&&"bottom"!=N||(c+=' style="left: '+a(m)+';" '),c+=">"+a(m)+"</div>"),c+="</div>"),c+=" ","degree"==x){c+='<div mxa="_zs_gallerybN:a" class="_zs_galleryeL"><div mxa="_zs_gallerybN:b" class="_zs_galleryeN">';for(var I=0;I<10;I+=1)c+='<span mxs="_zs_gallerybN:_" class="_zs_galleryeM"></span>';c+='</div><div mxa="_zs_gallerybN:c" class="_zs_galleryeO">';for(I=0;I<M;I+=1)c+='<span class="_zs_galleryeM" style="opacity: '+a(I/10+.08)+"; ",b&&(c+=" background-color: "+a(b)+"; "),c+='"></span>';c+="</div></div>"}return c},init:function(e){this.updater.snapshot(),this.assign(e)},assign:function(e){var l=this.updater.altered(),r=+e.num||0,a=r+"",t=a.indexOf(".");(t=t>=0?a.slice(t+1).length:0)>2&&(t=2),r<0&&(r=0),r>100&&(r=100);var _,g,o,n=e.type||"line",d=e.textPlacement||"top",y=0,p=e.border||8,z=e.color||"",c=e.colorGradient||"",x=getComputedStyle(document.documentElement),h=document.body.style.getPropertyValue("--color-brand").trim()||x.getPropertyValue("--color-brand").trim();switch(n){case"degree":y=parseInt(r/10);break;case"circle":z||(z=h),_=e.width||120;break;case"gradient":if(z=z||h){var u=i.toRgb(z);g="rgba("+u.r+", "+u.g+", "+u.b+", 0.4)",o="rgba("+u.r+", "+u.g+", "+u.b+", 0.2)"}case"line":_=e.width||200}return this.updater.set({viewId:this.id,placement:d,originNum:r,num:r.toFixed(t)+"%",cName:s[d],color:z,colorGradient:c,color1:g,color2:o,type:n,text:e.text+""!="false",degree:y,width:+_,border:+p,gradient:"gradient"==n}),l||(l=this.updater.altered()),!!l&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest();var e=this.updater.get("type"),l=this.updater.get("originNum");if("circle"==e){var r,a,i=t("#"+this.id+"_circle"),s=i.find("._zs_galleryeW ._zs_galleryeT"),_=i.find("._zs_galleryeV ._zs_galleryeT"),g=Math.ceil(360*l/100);g>180?a=g-(r=180):(r=g,a=0);var o=Math.ceil(1e3*l/100),n=Math.floor(o*r/g),d=Math.floor(o*a/g);s.animate({textIndent:0},{step:function(e,l){var a=(1-e)*r-135;t(this).css({"-webkit-transform":"rotate("+a+"deg)",transform:"rotate("+a+"deg)"})},duration:n,done:function(){a>0&&_.animate({textIndent:0},{step:function(e,l){var r=(1-e)*a-135;t(this).css({"-webkit-transform":"rotate("+r+"deg)",transform:"rotate("+r+"deg)"})},duration:d},"linear")}},"linear")}}})});