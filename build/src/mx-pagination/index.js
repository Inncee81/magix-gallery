define("mx-pagination/index",["magix","$","../mx-medusa/util","mx-dropdown/index"],(l,e,a)=>{l("mx-dropdown/index");var s=l("magix"),r=l("$"),_=[10,20,30,40],t=l("../mx-medusa/util");s.applyStyle("_zs_galleryag","._zs_galleryhC{color:#666}._zs_galleryhC ._zs_galleryhD{float:left;line-height:var(--input-small-height)}._zs_galleryhC ._zs_galleryhD ._zs_galleryhE{min-width:66px}._zs_galleryhC ._zs_galleryhF{display:inline-block}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG{float:left;line-height:var(--input-small-height)}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhH,._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhI{display:block;min-width:var(--input-small-height);height:var(--input-small-height);margin:0 2px;font-size:var(--font-size);border-radius:var(--border-radius);text-align:center}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhI{color:#666}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhI:hover{color:#333}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhI._zs_galleryhJ{color:#333;background-color:#eee}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhI._zs_galleryhK{background:transparent;cursor:not-allowed}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhH{color:#999;line-height:calc(var(--input-small-height) + 2px)}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhH:hover{color:#666}._zs_galleryhC ._zs_galleryhF ._zs_galleryhG ._zs_galleryhH._zs_galleryhK{color:#eee;background:transparent;cursor:not-allowed}._zs_galleryhC ._zs_galleryhL{float:right;margin-left:15px}._zs_galleryhC ._zs_galleryhL ._zs_galleryhM{width:40px;text-align:center}"),a.exports=s.View.extend({tmpl:function(l,e,a,s,r,_,t,i){if(a||(a=l),!r){var g={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,h=function(l){return"&"+g[l]+";"};r=function(l){return""+(null==l?"":l)},s=function(l){return r(l).replace(n,h)}}if(!_){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(l){return c[l]},z=/[!')(*]/g;_=function(l){return encodeURIComponent(r(l)).replace(z,p)}}if(!i){var o=/[\\'"]/g;i=function(l){return r(l).replace(o,"\\$&")}}t||(t=function(l,e,a,s){for(s=l[y];--s;)if(l[a=y+s]===e)return a;return l[a=y+l[y]++]=e,a});var y="",m="",u=l.simplify,f=l.mini,d=l.tipOffset,x=l.tipTotal,v=l.tipPer,C=l.sizesChange,G=l.sizesPlacement,w=l.sizes,k=l.size,I=l.tipUnit,b=l.jump,F=l.tipJumpTo,J=l.next,j=l.viewId,P=l.tipJumpUnit,M=l.hideTotal,T=l.page,$=l.pages,H=l.start,K=l.end;if(m+='<div mxv mxa="_zs_galleryc8:_" class="clearfix _zs_galleryhC">',u||f||(m+='<div mxv mxa="_zs_galleryc8:a" class="_zs_galleryhD"><span>'+r(d)+"</span><span>"+r(x)+"，</span><span>"+r(v)+"</span>",m+=C?'<div mxv="sizes,size" class="ml10 mr10 _zs_galleryhE" mx-change="'+e+'__cx()" mx-view="mx-dropdown/index?small=true&placement='+_(G)+"&list="+t(a,w)+"&selected="+t(a,k)+'"></div>':" "+s(k)+" ",m+="<span>"+r(I)+"</span></div>"),m+=" ",b||(m+='<div mxv mxa="_zs_galleryc8:b" class="_zs_galleryhL"><span mxa="_zs_galleryc8:c" class="mr5">'+s(F)+'</span><input class="input input-small _zs_galleryhM mr5" value="'+s(J)+'" id="'+s(j)+'_jump_input" mx-change="'+e+'__m()" mx-focusin="'+e+'__m()" mx-focusout="'+e+'__m()"/><span mxa="_zs_galleryc8:d" class="mr10">'+s(P)+'</span><a mxs="_zs_galleryc8:_" href="javascript:;" class="btn btn-small" mx-click="'+e+'__cy()">跳转</a></div>'),m+='<ul class="clearfix _zs_galleryhF" ',M||(m+=' style="float: right;" '),m+='><li mxa="_zs_galleryc8:e" class="_zs_galleryhG"><a class="mc-iconfont _zs_galleryhH ',1==T&&(m+="_zs_galleryhK"),m+='" href="#" mx-click="'+e+"",m+=T>1?"__cw({page:"+s(T-1)+"})":"__J()",m+='">&#xe61e;</a></li>',f)m+='<li mxa="_zs_galleryc8:f" class="_zs_galleryhG">'+s(T)+" / "+s($)+"</li>";else{m+=" ",H>1&&(m+='<li mxs="_zs_galleryc8:a" class="_zs_galleryhG"><a class="_zs_galleryhI" href="#" mx-click="'+e+'__cw({page:1})">1</a></li>'),m+=" ",H>2&&(m+='<li mxs="_zs_galleryc8:b" class="_zs_galleryhG"><a class="_zs_galleryhI _zs_galleryhK" href="#" mx-click="'+e+'__J()">...</a></li>'),m+=" ";for(var A=H;A<=K;A++)m+='<li mxa="_zs_galleryc8:g" class="_zs_galleryhG"><a class="_zs_galleryhI ',A==T&&(m+="_zs_galleryhJ"),m+='" href="#" mx-click="'+e+"__cw({page:"+s(A)+'})">'+s(A)+"</a></li>";m+=" ",K+2<=$&&(m+='<li mxs="_zs_galleryc8:b" class="_zs_galleryhG"><a class="_zs_galleryhI _zs_galleryhK" href="#" mx-click="'+e+'__J()">...</a></li>'),m+=" ",K<$&&(m+='<li mxa="_zs_galleryc8:h" class="_zs_galleryhG"><a class="_zs_galleryhI" href="#" mx-click="'+e+"__cw({page:"+s($)+'})">'+s($)+"</a></li>"),m+=" "}return m+='<li mxa="_zs_galleryc8:i" class="_zs_galleryhG"><a class="mc-iconfont _zs_galleryhH rotate180 ',T==$&&(m+="_zs_galleryhK"),m+='" href="#" mx-click="'+e+"",m+=T<$?"__cw({page:"+s(T+1)+"})":"__J()",m+='">&#xe61e;</a></li>',M||(m+='<li mxa="_zs_galleryc8:j" class="_zs_galleryhG ml10">'+r(x)+"</li>"),m+="</ul></div>"},init:function(l){this.updater.snapshot(),this.assign(l)},assign:function(l){var e=this,a=e.updater.altered(),s=[];try{s=JSON.parse(l.sizes)}catch(e){s=l.sizes}s&&s.length||(s=_);var r=!0;/^false$/i.test(l.sizesChange)&&(r=!1);var t,i=l.size||40;return t=l.page?l.page:l.offset?parseInt(l.offset/i)+1:1,e.updater.set({viewId:e.id,step:l.step||5,simplify:l.simplify+""=="true",mini:l.mini+""=="true",hideTotal:l.hideTotal+""=="true",jump:l.jump+""=="false",total:0|l.total||0,page:t,size:i,sizesChange:r,sizesPlacement:l.sizesPlacement||"bottom",sizes:s}),a||(a=e.updater.altered()),!!a&&(e.updater.snapshot(),!0)},render:function(){var l=this.__cv();this.updater.digest(l)},__cv:function(){var l=this.updater.get(),e=l.total,a=0|l.page,s=Math.ceil((l.total||1)/l.size);a>s&&(a=s);var r,_=0|l.step,i=_/2|0,g=Math.max(1,a-i),n=Math.min(s,g+_-1);(g=Math.max(1,n-_+1))<=2&&n+(r=3-g)<s&&(n+=r),n+2>s&&g-(r=2-(s-n))>1&&(g-=r),3==g&&(g-=1),n+2==s&&(n+=1);var h=(a-1)*l.size+1,c=Math.min(l.total,a*l.size);0==e&&(h=c=0);var p=a+1;return p>s&&(p=s),{pages:s,offsetStart:h,offsetEnd:c,page:a,start:g,end:n,next:p,tipOffset:t["pager.offset"].replace("${min}",""+h).replace("${max}",""+c),tipTotal:t["pager.total"].replace("${total}",""+e),tipPer:t["pager.per.page"],tipUnit:t["pager.unit"],tipJumpTo:t["pager.jump.to"],tipJumpUnit:t["pager.jump.unit"]}},__A:function(){var l=r("#"+this.id),e=this.updater.get(),a=+e.page,s=+e.size,_=(a-1)*s;l.trigger({type:"change",page:a,size:s,offset:_})},"__cw<click>":function(l){l.preventDefault();this.updater.set(l.params),this.render(),this.__A()},"__cx<change>":function(l){l.stopPropagation();this.updater.set({size:l.value}),this.render(),this.__A()},"__m<change,focusin,focusout>":function(l){l.stopPropagation()},"__cy<click>":function(l){l.stopPropagation();var e=+r("#"+this.id+"_jump_input").val();Number.isInteger(e)&&(this.updater.set({page:e}),this.render(),this.__A())},"__J<click>":function(l){l.preventDefault()}})});