define("mx-effects/notice",["magix","$","mx-color/util"],(e,r,l)=>{var o=e("magix"),a=(e("$"),e("mx-color/util"));o.applyStyle("_zs_galleryK","._zs_galleryey{padding:10px;line-height:18px;border-radius:inherit}._zs_galleryey ._zs_galleryez{display:inline-block;position:relative;padding-left:18px;word-break:break-all}._zs_galleryey ._zs_galleryez ._zs_galleryeA{position:absolute;top:0;left:0;height:18px;line-height:18px}._zs_galleryey._zs_galleryeB{border-width:1px;border-style:solid;border-radius:4px}._zs_galleryey._zs_galleryeC{color:#999;background-color:var(--color-bg)}._zs_galleryey._zs_galleryeC ._zs_galleryeA{color:#ccc}._zs_galleryey._zs_galleryeC._zs_galleryeB{border-color:var(--color-border)}._zs_galleryey._zs_galleryeD{color:#333;background-color:var(--color-bg)}._zs_galleryey._zs_galleryeD ._zs_galleryeA{color:var(--color-brand)}._zs_galleryey._zs_galleryeD._zs_galleryeB{border-color:var(--color-border)}");var t={common:"_zs_galleryeC",highlight:"_zs_galleryeD",border:"_zs_galleryeB",notice:"_zs_galleryey"};l.exports=o.View.extend({tmpl:function(e,r,l,o,a,t,n,s){if(l||(l=e),!a){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},i=/[&<>"'`]/g,g=function(e){return"&"+_[e]+";"};a=function(e){return""+(null==e?"":e)},o=function(e){return a(e).replace(i,g)}}if(!t){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},y=function(e){return c[e]},d=/[!')(*]/g;t=function(e){return encodeURIComponent(a(e)).replace(d,y)}}if(!s){var u=/[\\'"]/g;s=function(e){return a(e).replace(u,"\\$&")}}var z="",p=e.classNames,b=e.textAlign,m=e.styles,f=e.icon,x=e.content;return z+='<div class="_zs_galleryey '+o(p)+'" style="text-align:'+o(b)+"; "+o(m)+'">',z+=f?'<div mxa="_zs_gallerybM:_" class="_zs_galleryez"><i mxs="_zs_gallerybM:_" class="mc-iconfont _zs_galleryeA">&#xe6ad;</i>'+a(x)+"</div>":" "+a(x)+" ",z+="</div>"},init:function(e){var r,l=e.textAlign||"left",o=[],n=e.color,s=[],_=e.border+""=="true",i=!(e.icon+""=="false"),g=e.type||"common";if(_&&o.push(t.border),!n&&("common"!=g&&"highlight"!=g||o.push(t[g]),"error"==g||"warn"==g)){var c=getComputedStyle(document.documentElement),y="error"==g?"--color-red":"--color-warn";n=(n=document.body.style.getPropertyValue(y)||c.getPropertyValue(y)).trim()}if(n){var d=a.toRgb(n);r="rgba("+d.r+", "+d.g+", "+d.b+", 0.2)",s.push("color:"+n,"background-color:"+r),_&&s.push("border-color:"+n)}this.updater.set({content:e.content||"提示内容",classNames:o.join(" "),textAlign:l,color:n,styles:s.join(";"),icon:i})},render:function(){this.updater.digest()}})});