define("mx-main/ver",["magix","mx-main/steps"],(e,l,a)=>{var r=e("magix"),i=e("mx-main/steps");r.applyStyle("_zs_galleryaj","._zs_galleryjs{box-shadow:0 1px 1px 0 rgba(0,0,0,.08);border:1px solid #f5f5f6}._zs_galleryjt{position:relative;margin-bottom:20px;padding-left:52px}._zs_galleryjt ._zs_galleryju{position:absolute;top:47px;left:21px;z-index:2;width:0;height:100%;margin-left:-1px;border-left:2px solid #e6e6e6}._zs_galleryjt ._zs_galleryjv{position:absolute;top:5px;left:0;z-index:3;width:42px;height:42px;border-radius:50%;border:2px solid #e6e6e6;text-align:center;background-color:#fafafa;cursor:pointer;transition:all .25s}._zs_galleryjt ._zs_galleryjv>*{line-height:38px;color:#ccc;font-weight:700}._zs_galleryjt ._zs_galleryjw{border-radius:4px;background-color:#fff}._zs_galleryjt ._zs_galleryjw ._zs_galleryjx{padding:5px 20px;line-height:42px}._zs_galleryjt ._zs_galleryjw ._zs_galleryjy{padding:20px;border-top:1px solid #e6e6e6}"),a.exports=i.extend({tmpl:function(e,l,a,r,i,s,n,t){if(a||(a=e),!i){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,d=function(e){return"&"+_[e]+";"};i=function(e){return""+(null==e?"":e)},r=function(e){return i(e).replace(c,d)}}if(!s){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},p=function(e){return o[e]},g=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(g,p)}}if(!t){var x=/[\\'"]/g;t=function(e){return i(e).replace(x,"\\$&")}}n||(n=function(e,l,a,r){for(r=e[v];--r;)if(e[a=v+r]===l)return a;return e[a=v+e[v]++]=l,a});for(var v="",f="",y=e.stepInfos,m=e.curStepInfo,z=e.viewId,u=0,j=y.length;u<j;u++){var b=y[u];f+='<div mxv mxa="_zs_gallerycQ:_" class="clearfix _zs_galleryjt"><div mxa="_zs_gallerycQ:a" class="_zs_galleryjv">'+i(b.icon)+"</div>",b.index<y.length&&(f+='<div mxs="_zs_gallerycQ:_" class="_zs_galleryju"></div>'),f+='<div mxv mxa="_zs_gallerycQ:b" class="_zs_galleryjw"><div mxa="_zs_gallerycQ:c" class="_zs_galleryjx"><span mxa="_zs_gallerycQ:d" class="fontsize-16">'+r(b.label)+"</span>",b.locked||b.current||(f+='<a class="fr color-brand" href="javascript:;" mx-click="'+l+"nav({stepIndex:"+r(b.index)+'})">修改</a>'),f+="</div>",b.current&&(f+='<div mxv mxa="_zs_gallerycQ:e" class="_zs_galleryjy"><div mxv="curStepInfo" mx-view="'+r(m.view)+"?info="+n(a,m)+'" id="'+r(z)+'_cur_content"><div mxs="_zs_gallerycQ:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div mxa="_zs_gallerycQ:f" class="pt20">',m.prevTip&&(f+='<a mxa="_zs_gallerycQ:g" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+l+'prev()">'+r(m.prevTip)+"</a>"),f+=" ",m.nextTip&&(f+='<a mxa="_zs_gallerycQ:h" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+l+'next()">'+r(m.nextTip)+"</a>"),f+='</div><div id="'+r(z)+'_error"></div></div>'),f+="</div></div>"}return f}})});