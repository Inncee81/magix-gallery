define("mx-loading/index",["$","magix","./base"],(n,i,a)=>{var d=n("$"),e=n("magix");e.applyStyle("_zs_gallery_mx-loading_index_","._zs_gallery_mx-loading_index_-mask-loading {\n  display: none;\n  position: fixed;\n  z-index: 999999;\n  background-color: rgba(0, 0, 0, 0.5);\n  border-radius: var(--border-radius);\n}\n._zs_gallery_mx-loading_index_-mask-loading-backdrop {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999998;\n  width: 100%;\n  height: 100%;\n  background: transparent;\n}\n._zs_gallery_mx-loading_index_-full-loading {\n  display: none;\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 999999;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n._zs_gallery_mx-loading_index_-full-loading ._zs_gallery_mx-loading_index_-loading-overwite {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 160px;\n  height: 36px;\n  margin-top: -18px;\n  margin-left: -80px;\n}\n");var l=function(n,i,a,d,e,l,t,o){if(a||(a=n),!e){var r={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,s=function(n){return"&"+r[n]+";"};e=function(n){return""+(null==n?"":n)},d=function(n){return e(n).replace(g,s)}}if(!l){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(n){return _[n]},p=/[!')(*]/g;l=function(n){return encodeURIComponent(e(n)).replace(p,x)}}if(!o){var h=/[\\'"]/g;o=function(n){return e(n).replace(h,"\\$&")}}var c,m,u,f="",y=n.id,v=n.width,b=n.height;try{f+='<div id="',u=1,m="=id",f+=(c="<%=id%>",d(y)+'" class="_zs_gallery_mx-loading_index_-mask-loading" style="width: '),u=1,m="=width",f+=(c="<%=width%>",d(v)+"px; height: "),u=1,m="=height",f+=(c="<%=height%>",d(b)+'px;"><div mxs="_zs_galleryc5:_" class="loading _zs_gallery_mx-loading_index_-loading-overwite" style="padding: 10px 0;"><span class="loading-anim"></span></div></div>')}catch(n){var w="render view error:"+(n.message||n);throw m&&(w+="\r\n\tsrc art:{{"+m+"}}\r\n\tat line:"+u),w+="\r\n\t"+(m?"translate to:":"expr:"),w+=c+"\r\n\tat file:mx-loading/index.html"}return f},t=n("./base");a.exports=e.mix({"@{loading.build}":function(){var n=this.id+"_loading",i=d("#"+n);if(!i.length){var a=d.isFunction(l)?l({id:n,width:"150px",height:"36px"},this.id):l;d(document.body).append(a),i=d("#"+n)}return i},showLoading:function(n){var i=this.id+"_loading",a=this["@{loading.build}"](),e=d(window),l=(e.width()-150)/2|0,t=(e.height()-36)/2|0;if(a.css({left:l,top:t,display:"block"}),!n){var o=d("#"+i+"_mask");o.length||(d(document.body).append('<div id="'+i+'_mask" class="_zs_gallery_mx-loading_index_-mask-loading-backdrop"></div>'),o=d("#"+i+"_mask")),o.css({display:"block"})}}},t)});