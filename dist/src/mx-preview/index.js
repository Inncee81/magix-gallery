define("mx-preview/index",["magix","$"],(e,i,r)=>{var t,a=e("magix"),l=e("$");a.applyStyle("_zs_galleryaq",'[mx-view*="mx-preview/index"]{display:inline-block;vertical-align:middle}._zs_galleryjh{color:#ccc;font-size:30px}._zs_galleryji{display:table;text-align:center}._zs_galleryji ._zs_galleryjj{display:table-cell;vertical-align:middle}._zs_galleryji ._zs_galleryjj ._zs_galleryjk,._zs_galleryji ._zs_galleryjj ._zs_galleryjl{max-width:100%;max-height:100%}._zs_galleryji ._zs_galleryjj ._zs_galleryjm{word-break:break-all;overflow:hidden;text-overflow:ellipsis}._zs_galleryji ._zs_galleryjj ._zs_galleryjn{transform-origin:left top}._zs_galleryjo{display:none;position:absolute;z-index:999999;border-collapse:separate;background-color:#fff;padding:10px}._zs_galleryjo ._zs_galleryjp{display:block;width:100%;height:100%;overflow:hidden}'),r.exports=a.View.extend({tmpl:function(e,i,r,t,a,l,n,s){if(r||(r=e),!a){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(e){return"&"+o[e]+";"};a=function(e){return""+(null==e?"":e)},t=function(e){return a(e).replace(d,c)}}if(!l){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return h[e]},g=/[!')(*]/g;l=function(e){return encodeURIComponent(a(e)).replace(g,p)}}if(!s){var m=/[\\'"]/g;s=function(e){return a(e).replace(m,"\\$&")}}var v="",f=e.maxWidth,_=e.maxHeight,u=e.preview,w=e.type,y=e.viewId;return v+='<div class="_zs_galleryji" style="width: '+t(f)+"px; height: "+t(_)+'px;" ',u&&(v+=' mx-mouseover="'+i+'preview()" mx-mouseout="'+i+'hide()" '),v+='><div class="_zs_galleryjj" style="height: '+t(_)+"px; ","text"!=w&&(v+=" font-size: 0; "),v+='" id="'+t(y)+'_inner"><i mxs="_zs_galleryd{:_" class="mc-iconfont _zs_galleryjh">&#xe615;</i></div></div>'},init:function(e){var i=this;i.updater.snapshot(),i.assign(e),i.on("destroy",function(){clearTimeout(i.timer),l("#pic_preview_"+i.id).remove()})},assign:function(e){var i,r=this.updater.altered();if(e.format){var t=+e.format||5,a={image:[2,11],flash:[3,9],video:[4],text:[5],iframe:[10]};for(var l in a)a[l].indexOf(t)>-1&&(i=l)}else i=e.type||"text";return this.updater.set({viewId:this.id,placement:e.placement||"right",preview:e.preview+""!="false",type:i,url:e.url,clickUrl:e.clickUrl,width:+e.width,height:+e.height,maxWidth:+e.maxWidth||100,maxHeight:+e.maxHeight||100,previewData:e.previewData||{}}),r||(r=this.updater.altered()),!!r&&(this.updater.snapshot(),!0)},render:function(){var e=this;if(e.updater.digest({}),window.IntersectionObserver){var i=new IntersectionObserver(function(r){r.forEach(function(r){var t=r.target;(r.isIntersecting||r.intersectionRatio>0)&&(e.thumbnail(),i.unobserve(t))})},{rootMargin:"10px 0px"});i.observe(document.querySelector("#"+e.id)),e.capture("observer",{destroy:function(){i.disconnect()}})}else e.thumbnail()},thumbnail:function(){var e=this.updater.get(),i=e.type,r=e.url,t=e.maxWidth,a=e.maxHeight,n=e.width,s=e.height,o=e.clickUrl,d="";switch(i){case"image":d='<img class="_zs_galleryjk" src="'+r+'"/>';break;case"flash":d="flash已下线";case"video":d='<video src="'+r+'" class="_zs_galleryjl"></video>';break;case"text":(d=l('<div class="_zs_galleryjm" style="max-width: '+t+"px; max-height: "+a+'px;"></div>'))[0].innerText=r;break;case"iframe":var c=Math.min(t/n,a/s);d='<div style="width: '+n*c+"px; height: "+s*c+'px; overflow: hidden">\n                                <iframe src="'+r+'" class="_zs_galleryjn"\n                                    sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n                                    style="transform:scale('+c+')"\n                                    width="'+n+'" \n                                    height="'+s+'" \n                                    frameborder="0"\n                                    scrolling="no" \n                                    marginheight="0" \n                                    marginwidth="0" \n                                    border="0"></iframe>\n                            </div>'}o&&(d=l(d).wrap('<a href="'+o+'" target="_blank" rel="noopener noreferrer"></a>')),l("#"+this.id+"_inner").html(d)},"preview<mouseover>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.show()},show:function(){var e=this,i=l("#"+e.id+" ._zs_galleryji"),r=i.offset(),a=r.left,n=r.top;t&&t!=e&&t.immediatelyHide(),t=e,clearTimeout(e.timer);var s=e.updater.get(),o={},d=(o=l.isEmptyObject(s.previewData)?s:s.previewData).type,c=o.url;if(c&&d&&"flash"!=d){var h=function(r,t){o.scale&&(r*=+o.scale,t*=+o.scale);var h=l(window),p=h.width(),g=h.height(),m=h.scrollTop();n<m&&(n=m);var v=s.placement,f=0;if((f="left"==v?a-10:p-(a+=i.outerWidth()+10))<r&&(t*=f/r,r=f),t>g&&(r=r*g/t,t=g),m+g<n+t){var _=Math.min(n+t-m-g,n-m);n-=_}var u="";switch(d){case"image":u=l('<img src="'+c+'" class="_zs_galleryjp"/>');break;case"video":u=l('<video src="'+c+'" class="_zs_galleryjp"\n                        controls="controls" autoplay="autoplay"></video>');break;case"text":(u=l('<div class="_zs_galleryjp"></div>'))[0].innerText=c;break;case"iframe":var w=o.width,y=o.height;u=l('<div class="_zs_galleryjp">\n                        <iframe src="'+c+'"\n                            sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"\n                            style="transform: scale('+(r-20)/w+'); transform-origin: left top;"\n                            width="'+w+'" \n                            height="'+y+'"\n                            frameborder="0" \n                            scrolling="no" \n                            marginheight="0" \n                            marginwidth="0" \n                            border="0"></iframe>\n                    </div>')}var x=s.clickUrl;x&&u.wrap('<a href="'+x+'" target="_blank" rel="noopener noreferrer"></a>');var j=l("#pic_preview_"+e.id);j.length||(j=l('<div id="pic_preview_'+e.id+'" class="_zs_galleryjo mx-shadow"></div>').appendTo("body")),j.empty().append(u),j.css({width:r,height:t||"auto",left:"left"==v?a-r-10:a,top:n,display:"block"})};if(o.width&&o.height)h(+o.width+20,+o.height+20);else if("text"==d)h(600,0);else if("image"==d){var p=new Image;p.onload=function(){h(this.width+20,this.height+20)},p.src=c}}},"hide<mouseout>":function(e){a.inside(e.relatedTarget,e.eventTarget)||this.hide()},hide:function(){var e=this;e.delayHide();var i=l("#pic_preview_"+e.id);i.off("mouseover.preview").on("mouseover.preview",function(){clearTimeout(e.timer),i.off("mouseout.preview").on("mouseout.preview",function(i){e.delayHide()})})},immediatelyHide:function(){clearTimeout(this.timer),l("#pic_preview_"+this.id).empty().css({display:"none"})},delayHide:function(){var e=this;clearTimeout(e.timer),e.timer=setTimeout(function(){l("#pic_preview_"+e.id).empty().css({display:"none"})},300)}})});