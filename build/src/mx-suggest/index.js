define("mx-suggest/index",["magix","$","../mx-medusa/util","../mx-monitor/index"],(t,a,r)=>{var s=t("magix"),e=t("$"),n=t("../mx-medusa/util"),l=t("../mx-monitor/index");s.applyStyle("_zs_galleryaw",'._zs_gallerylN{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}[mx-view*="mx-suggest/index"]{display:inline-block}._zs_gallerylO{position:relative;height:32px}'),s.applyStyle("_zs_galleryax","._zs_gallerylP{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}@keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryF{0%{transform:translateY(-20%);-ms-transform:translateY(-20%);-moz-transform:translateY(-20%);-webkit-transform:translateY(-20%);-o-transform:translateY(-20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@-webkit-keyframes _zs_galleryG{0%{transform:translateY(20%);-ms-transform:translateY(20%);-moz-transform:translateY(20%);-webkit-transform:translateY(20%);-o-transform:translateY(20%);opacity:0}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0);opacity:1}}@keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryH{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-15%);-ms-transform:translateY(-15%);-moz-transform:translateY(-15%);-webkit-transform:translateY(-15%);-o-transform:translateY(-15%)}75%{transform:translateY(15%);-ms-transform:translateY(15%);-moz-transform:translateY(15%);-webkit-transform:translateY(15%);-o-transform:translateY(15%)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryI{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}@-webkit-keyframes _zs_galleryJ{0%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}25%{transform:translateY(-2px);-ms-transform:translateY(-2px);-moz-transform:translateY(-2px);-webkit-transform:translateY(-2px);-o-transform:translateY(-2px)}50%{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}75%{transform:translateY(2px);-ms-transform:translateY(2px);-moz-transform:translateY(2px);-webkit-transform:translateY(2px);-o-transform:translateY(2px)}to{transform:translate(0);-ms-transform:translate(0);-moz-transform:translate(0);-webkit-transform:translate(0);-o-transform:translate(0)}}._zs_gallerylQ{display:none;position:absolute;top:100%;z-index:99;min-width:100%;max-height:300px;margin-top:10px;padding:8px 10px;border-radius:4px;background-color:#fff;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;overflow-y:auto;box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_gallerylQ ._zs_gallerylR{margin:2px 0;padding:0 10px;cursor:pointer;height:26px;line-height:26px;border-radius:4px;white-space:nowrap;word-break:break-all}._zs_gallerylQ ._zs_gallerylR._zs_gallerylS,._zs_gallerylQ ._zs_gallerylR:hover{background-color:#f0f0f0}._zs_gallerylQ ._zs_gallerylR._zs_gallerylT,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:active,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:focus,._zs_gallerylQ ._zs_gallerylR._zs_gallerylT:hover{color:#4d7fff;background-color:#f6f9ff}._zs_gallerylQ._zs_gallerylU{display:block;-webkit-animation:_zs_galleryF .25s ease-out;animation:_zs_galleryF .25s ease-out;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}"),r.exports=s.View.extend({tmpl:function(t,a,r,s,e,n,l,o){if(r||(r=t),!e){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},f=/[&<>"'`]/g,i=function(t){return"&"+m[t]+";"};e=function(t){return""+(null==t?"":t)},s=function(t){return e(t).replace(f,i)}}if(!n){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(t){return _[t]},d=/[!')(*]/g;n=function(t){return encodeURIComponent(e(t)).replace(d,p)}}if(!o){var u=/[\\'"]/g;o=function(t){return e(t).replace(u,"\\$&")}}l||(l=function(t,a,r,s){for(s=t[x];--s;)if(t[r=x+s]===a)return r;return t[r=x+t[x]++]=a,r});var x="",g="",c=t.placeholder,y=t.viewId,h=t.selectText,z=t.show,Y=t.align,k=t.loading,w=t.list,b=t.selectedValue,v=t.emptyText;if(g+='<div mxv mxa="_zs_gallerydv:_" class="search-box"><i mxs="_zs_gallerydv:_" class="mc-iconfont search-icon">&#xe651;</i><input class="input search-input" placeholder="'+s(c)+'" id="'+s(y)+'_input" value="'+s(h)+'" mx-keyup="'+a+'__dv()" mx-paste="'+a+'__dv()" mx-focusin="'+a+'__dv()" mx-focusout="'+a+'__l()" mx-change="'+a+'__l()"/><ul class="_zs_gallerylQ ',z&&(g+=" _zs_gallerylU "),g+='" style="',g+="right"==Y?"right: 0;":"left: 0;",g+='">',k)g+='<li mxs="_zs_gallerydv:a"><div class="loading" style="padding: 40px 0;"><span class="loading-anim"></span></div></li>';else{if(g+=" ",w.length>0){g+=" ";for(var T=0,Q=w.length;T<Q;T++){var R=w[T];g+='<li class="_zs_gallerylR ',b+""==R.value+""&&(g+=" _zs_gallerylT "),g+='" mx-click="'+a+"__aa({item:'"+l(r,R)+"'})\">"+e(R.text)+"</li>"}g+=" "}else g+='<li mxa="_zs_gallerydv:a" class="text-center color-9">'+s(v)+"</li>";g+=" "}return g+="</ul></div>"},init:function(t){var a=this;a.updater.snapshot(),a.assign(t),l.__f(),a.on("destroy",function(){l.__g(a),l.__h(),a.__dq&&clearTimeout(a.__dq)})},assign:function(t){var a=this.updater.altered(),r=t.placeholder||"";r||(r=n.search),this["key.value"]=t.listValue||"value",this["key.text"]=t.listText||"text";var s=this.__dr(t.list),l=t.selected||"",o="";if(l)for(var m=0;m<s.length;m++)if(s[m].value==l){o=s[m].text;break}this.__ds=l,this.__dt=s;var f=(t.type||"text")+"";return"all"==f&&(f="text,value"),this.__du=f.split(","),this.__j=e("#"+this.id),this.updater.set({viewId:this.id,list:s,selectedValue:l,selectText:o,placeholder:r,align:t.align||"left",show:!1,emptyText:n["empty.text"]}),a||(a=this.updater.altered()),!!a&&(this.updater.snapshot(),!0)},__dr:function(t){var a=this["key.value"],r=this["key.text"],s=[];return t&&t.length>0&&(s="object"==typeof t[0]?t.map(function(t){return{value:t[a],text:t[r]}}):t.map(function(t){return{value:t,text:t}})),s},render:function(){this.updater.digest()},"__dv<focusin,keyup,paste>":function(t){t.stopPropagation();var a=this;a.__dq&&clearTimeout(a.__dq);for(var r=a.updater.get(),s=r.list,e=r.selectedValue,n=-1,l=0;l<s.length;l++)if(s[l].value==e){n=l;break}40==t.keyCode||38==t.keyCode?(40==t.keyCode&&(n+=1)>=s.length&&(n=0),38==t.keyCode&&(n-=1)<0&&(n=s.length-1),a.updater.digest({selectedValue:s[n].value})):13==t.keyCode?(n<0&&(n=0),a.__ds=s[n].value,a.__m(),a.__cd()):a.__dq=setTimeout(a.wrapAsync(function(){a.__n()}),300)},__m:function(){for(var t=this.updater.get().list,a=this.__ds+"",r="",s=0;s<t.length;s++){var e=t[s];if(e.value+""===a){r=e.text;break}}this.updater.digest({selectedValue:a,selectText:r,show:!1}),l.__g(this)},showLoading:function(){this.updater.digest({loading:!0})},hideLoading:function(){this.updater.digest({loading:!1})},update:function(t){this.__dt=this.__dr(t);var a=e("#"+this.id+"_input").val();this.updater.digest({list:this.__dt,selectText:a,show:!0}),l.__p(this)},__n:function(t){var a=this.__dt,r=e("#"+this.id+"_input").val(),s=(r+"").toLowerCase(),n=[],o=this.__du;a.forEach(function(t){var a=!1;o.forEach(function(r){(t[r]+"").toLowerCase().indexOf(s)>-1&&(a=!0)}),a&&n.push(t)}),this.updater.digest({list:n,selectText:r,show:!0}),l.__p(this),this.__j.trigger({type:"show",keyword:r})},__k:function(t){return s.inside(t,this.id)},"__l<change,focusout>":function(t){t.stopPropagation()},"__aa<click>":function(t){t.stopPropagation();var a=t.params.item;this.updater.digest({selectText:a.text,selectedValue:this.__ds=a.value,show:!1}),this.__cd()},__cd:function(){var t=this.updater.get("selectedValue"),a=this.updater.get("selectText");this.__j.val(t).trigger({type:"suggest",selected:{value:t,text:a}})}})});