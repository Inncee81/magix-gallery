define("mx-search/index",["magix","$","../mx-util/monitor"],(t,e,i)=>{var _=t("magix"),a=t("$");_.applyStyle("_zs_galleryar","._zs_galleryjp,._zs_galleryjq{position:relative;height:32px}._zs_galleryjq ._zs_galleryjr{left:auto;right:0}._zs_galleryjp ._zs_galleryjr{left:0;right:auto}");var s=t("../mx-util/monitor");i.exports=_.View.extend({tmpl:function(t,e,i,_,a,s,r,c){if(i||(i=t),!a){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},l=/[&<>"'`]/g,u=function(t){return"&"+n[t]+";"};a=function(t){return""+(null==t?"":t)},_=function(t){return a(t).replace(l,u)}}if(!s){var h={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(t){return h[t]},p=/[!')(*]/g;s=function(t){return encodeURIComponent(a(t)).replace(p,o)}}if(!c){var g=/[\\'"]/g;c=function(t){return a(t).replace(g,"\\$&")}}r||(r=function(t,e,i,_){for(_=t[f];--_;)if(t[i=f+_]===e)return i;return t[i=f+t[f]++]=e,i});var f="",d="",m=t.align,v=t.placeholder,x=t.searchValue,y=t.list,T=t.show,V=t.searchKey;d+='<div mxv class="search-box ',d+="right"==m?" _zs_galleryjq ":" _zs_galleryjp ",d+='"><i mxs="_zs_galleryd(:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+_(v)+'" autocomplete="off" value="'+_(x)+'" mx-keyup="'+e+'__g()" mx-paste="'+e+'__g()" mx-focusin="'+e+'__g()" mx-focusout="'+e+'__m()" mx-change="'+e+'__m()"/><div class="mx-output mx-output-bottom ',y.length>1&&x&&T&&(d+=" mx-output-open "),d+=' _zs_galleryjr"><ul mxa="_zs_galleryd(:_" class="mx-output-list">';for(var z=0,k=y.length;z<k;z++){var j=y[z];d+='<li mxa="_zs_galleryd(:a" class="mx-output-item"><span class="mx-output-link ',V==j.value&&(d+=" mx-output-link-active "),d+='" mx-click="'+e+"__ab({item:'"+r(i,j)+"'})\">"+_(j.prefix)+_(x)+_(j.suffix)+"</span></li>"}return d+="</ul></div></div>"},init:function(t){var e=this;e.updater.snapshot(),e.assign(t),s.__h(),e.on("destroy",function(){s.__i(e),s.__j(),e.__bY&&clearTimeout(e.__bY)})},assign:function(t){var e=this.updater.altered();this.__cT=t.searchKey||"",this.__cU=this.__cT,this.__cV=t.searchValue||"",this.__cW=t.placeholder||"",this.__cX=t.align||"left";var i=[];if(t.list){var _=t.listText||"text",s=t.listValue||"value";try{i=new Function("return "+t.list)()}catch(e){i=t.list}if(i=i.map(function(t){var e=(t.tmpl||"搜索含有 “${content}” 的"+t[_]).split("${content}");return{prefix:e[0],suffix:e[1],text:t[_],value:t[s]}}),!this.__cW){var r=i.map(function(t){return t.text});this.__cW=a.unique(r).join("/")}}else this.__cW||(this.__cW="搜索");return this.__cY=i,this.__a=a("#"+this.id),this.updater.set({viewId:this.id,list:this.__cY,searchValue:this.__cV,searchKey:this.__cT,placeholder:this.__cW,align:this.__cX}),e||(e=this.updater.altered()),!!e&&(this.updater.snapshot(),!0)},render:function(){this.updater.digest()},"__g<focusin,keyup,paste>":function(t){t.stopPropagation();var e=this;e.__bY&&clearTimeout(e.__bY);var i=e.updater.get("show"),_=e.__cY;if(40==t.keyCode||38==t.keyCode){if(i){for(var s=-1,r=e.__cT,c=0;c<_.length;c++)if(_[c].value==r){s=c;break}40==t.keyCode&&(s+=1)>=_.length&&(s=0),38==t.keyCode&&(s-=1)<0&&(s=_.length-1),e.updater.digest({searchKey:e.__cT=_[s].value})}}else 13==t.keyCode?(!e.__cT&&_&&_.length>0&&(e.__cT=_[0].value),e.__cU=e.__cT,e.__cV=a.trim(t.eventTarget.value),e.__n(),e.__ae()):e.__bY=setTimeout(e.wrapAsync(function(){e.__cV=a.trim(t.eventTarget.value),e.__o()}),250)},__n:function(){this.__cT!=this.__cU&&(this.__cT=this.__cU),this.updater.digest({searchKey:this.__cT,searchValue:this.__cV,show:!1}),s.__i(this)},__o:function(){this.updater.digest({searchKey:this.__cT,searchValue:this.__cV,show:!0}),s.__q(this)},__l:function(t){return _.inside(t,this.id)},"__m<change,focusout>":function(t){t.stopPropagation()},"__ab<click>":function(t){t.stopPropagation();var e=t.params.item;this.updater.digest({searchKey:this.__cT=this.__cU=e.value,show:!1}),this.__ae()},__ae:function(){var t=this.__cV;this.__a.trigger({type:"change",searchKey:this.__cT,searchValue:t,selected:t}),this.__a.trigger({type:"search",searchKey:this.__cT,searchValue:t})}})});