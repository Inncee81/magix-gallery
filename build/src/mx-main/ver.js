define("mx-main/ver",["magix","mx-main/steps"],(e,r,a)=>{var l=e("magix"),i=e("mx-main/steps");l.applyStyle("_zs_galleryaj","._zs_galleryhX{position:relative;margin-bottom:20px;padding-left:52px}._zs_galleryhX ._zs_galleryhY{position:absolute;top:47px;left:21px;z-index:2;width:0;height:100%;margin-left:-1px;border-left:2px solid var(--color-border)}._zs_galleryhX ._zs_galleryhZ{position:absolute;top:5px;left:0;z-index:3;width:42px;height:42px;border-radius:50%;border:2px solid var(--color-border);text-align:center;background-color:var(--color-bg);cursor:pointer;transition:all var(--duration)}._zs_galleryhX ._zs_galleryhZ>*{line-height:38px;color:#ccc;font-weight:700}"),a.exports=i.extend({tmpl:function(e,r,a,l,i,n,t,s){if(a||(a=e),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,d=function(e){return"&"+c[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(o,d)}}if(!n){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return p[e]},g=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(g,x)}}if(!s){var _=/[\\'"]/g;s=function(e){return i(e).replace(_,"\\$&")}}t||(t=function(e,r,a,l){for(l=e[v];--l;)if(e[a=v+l]===r)return a;return e[a=v+e[v]++]=r,a});for(var v="",m="",f=e.stepInfos,h=e.curStepInfo,u=e.viewId,y=0,z=f.length;y<z;y++){var b=f[y];m+='<div mxv mxa="_zs_galleryc!:_" class="clearfix _zs_galleryhX"><div mxa="_zs_galleryc!:a" class="_zs_galleryhZ">'+i(b.icon)+"</div>",b.index<f.length&&(m+='<div mxs="_zs_galleryc!:_" class="_zs_galleryhY"></div>'),m+='<div mxv mxa="_zs_galleryc!:b" class="grid"><div content="'+l(b.label)+'" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryc!:c" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryc!:d" style="font-size: 16px; margin-right: 16px;">'+l(b.label)+"</span></div>",b.locked||b.current||(m+='<a class="fr lh32 color-brand" href="javascript:;" mx-click="'+r+"nav({stepIndex:"+l(b.index)+'})">修改</a>'),m+="</div>",b.current&&(m+='<div mxv mxa="_zs_galleryc!:e" class="clearfix bt-e6" style="padding: 16px 24px;"><div mxv="curStepInfo" mx-view="'+l(h.view)+"?info="+t(a,h)+'" id="'+l(u)+'_cur_content"><div mxs="_zs_galleryc!:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryc!:f" class="pt20">',h.prevTip&&(m+='<a mxa="_zs_galleryc!:g" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+r+'prev()">'+l(h.prevTip)+"</a>"),m+=" ",h.nextTip&&(m+='<a mxa="_zs_galleryc!:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+r+'next()">'+l(h.nextTip)+"</a>"),m+='</div><div id="'+l(u)+'_error"></div></div>'),m+="</div></div>"}return m}})});