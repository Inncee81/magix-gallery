define("mx-main/ver",["magix","mx-main/steps"],(i,e,r)=>{var a=i("magix"),l=i("mx-main/steps");a.applyStyle("_zs_galleryaj","._zs_galleryi_{position:relative;margin-bottom:20px;padding-left:52px}._zs_galleryi_ ._zs_galleryia{position:absolute;top:47px;left:21px;z-index:2;width:0;height:100%;margin-left:-1px;border-left:2px solid var(--color-border)}._zs_galleryi_ ._zs_galleryic{position:absolute;top:5px;left:0;z-index:3;width:42px;height:42px;border-radius:50%;border:2px solid var(--color-border);text-align:center;background-color:var(--color-bg);cursor:pointer;transition:all var(--duration)}._zs_galleryi_ ._zs_galleryic>*{line-height:38px;color:#ccc;font-weight:700}"),r.exports=l.extend({tmpl:function(i,e,r,a,l,t,n,s){if(r||(r=i),!l){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,o=function(i){return"&"+c[i]+";"};l=function(i){return""+(null==i?"":i)},a=function(i){return l(i).replace(d,o)}}if(!t){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(i){return p[i]},_=/[!')(*]/g;t=function(i){return encodeURIComponent(l(i)).replace(_,x)}}if(!s){var g=/[\\'"]/g;s=function(i){return l(i).replace(g,"\\$&")}}n||(n=function(i,e,r,a){for(a=i[v];--a;)if(i[r=v+a]===e)return r;return i[r=v+i[v]++]=e,r});for(var v="",m="",f=i.stepInfos,y=i.curStepInfo,u=i.viewId,z=0,h=f.length;z<h;z++){var b=f[z];m+='<div mxv mxa="_zs_galleryc.:_" class="clearfix _zs_galleryi_"><div mxa="_zs_galleryc.:a" class="_zs_galleryic">'+l(b.icon)+"</div>",b.index<f.length&&(m+='<div mxs="_zs_galleryc.:_" class="_zs_galleryia"></div>'),m+='<div mxv mxa="_zs_galleryc.:b" class="grid"><div mxa="_zs_galleryc.:c" class="clearfix" style="padding: 10px 24px;;"><div mxa="_zs_galleryc.:d" style="float:left; height: 32px; line-height: 32px;"><span mxa="_zs_galleryc.:e" class="grid-title" style="margin-right: 16px;">'+a(b.label)+"</span></div>",b.locked||b.current||(m+='<a class="fr lh32 color-brand" href="javascript:;" mx-click="'+e+"nav({stepIndex:"+a(b.index)+'})">修改</a>'),m+="</div>",b.current&&(m+='<div mxv mxa="_zs_galleryc.:f" class="clearfix bt-e6" style="padding: 16px 24px;"><div mxv="curStepInfo" mx-view="'+a(y.view)+"?info="+n(r,y)+'" id="'+a(u)+'_cur_content"><div mxs="_zs_galleryc.:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_galleryc.:g" class="pt20">',y.prevTip&&(m+='<a mxa="_zs_galleryc.:h" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+e+'prev()">'+a(y.prevTip)+"</a>"),m+=" ",y.nextTip&&(m+='<a mxa="_zs_galleryc.:i" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+e+'next()">'+a(y.nextTip)+"</a>"),m+='</div><div id="'+a(u)+'_error"></div></div>'),m+="</div></div>"}return m}})});