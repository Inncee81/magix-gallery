define("mx-main/hor",["magix","mx-main/steps"],(l,r,e)=>{var a=l("magix"),i=l("mx-main/steps");a.applyStyle("_zs_galleryae",'._zs_galleryhP{box-sizing:border-box;display:flex}._zs_galleryhQ{position:relative;display:inline-block;margin-right:10px;white-space:nowrap;flex:1;vertical-align:top;overflow:hidden}._zs_galleryhQ ._zs_galleryhR{float:left;position:relative;z-index:3;border-radius:50%;border:1px solid var(--color-brand);color:var(--color-brand);background-color:#fff;cursor:pointer;transition:all var(--duration)}._zs_galleryhQ ._zs_galleryhR,._zs_galleryhQ ._zs_galleryhR ._zs_galleryhS{width:28px;height:28px;text-align:center;line-height:26px}._zs_galleryhQ ._zs_galleryhR ._zs_galleryhS{position:absolute;top:0;left:0;font-size:26px}._zs_galleryhQ ._zs_galleryhT{float:left;position:relative;z-index:3;padding-right:10px;padding-left:6px;font-size:14px;background-color:#fff;cursor:pointer;line-height:28px}._zs_galleryhQ ._zs_galleryhT,._zs_galleryhQ:after{transition:all var(--duration)}._zs_galleryhQ:after{content:"";position:absolute;z-index:2;top:50%;left:0;width:100%;height:0;border-top:1px solid var(--color-border)}._zs_galleryhQ:last-child{flex:none}._zs_galleryhQ:last-child:after{display:none}._zs_galleryhQ._zs_galleryhU ._zs_galleryhR{border-color:var(--color-border);background-color:var(--color-disabled)}._zs_galleryhQ._zs_galleryhU ._zs_galleryhR,._zs_galleryhQ._zs_galleryhU ._zs_galleryhT{color:#999;cursor:not-allowed}._zs_galleryhQ._zs_galleryhV:after{border-top:1px solid var(--color-brand)}._zs_galleryhQ._zs_galleryhW ._zs_galleryhR{border-color:var(--color-brand);background-color:var(--color-brand-opacity)}._zs_galleryhQ._zs_galleryhW ._zs_galleryhR,._zs_galleryhQ._zs_galleryhW ._zs_galleryhT{color:var(--color-brand)}'),e.exports=i.extend({tmpl:function(l,r,e,a,i,o,_,s){if(e||(e=l),!i){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,d=function(l){return"&"+n[l]+";"};i=function(l){return""+(null==l?"":l)},a=function(l){return i(l).replace(t,d)}}if(!o){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(l){return g[l]},h=/[!')(*]/g;o=function(l){return encodeURIComponent(i(l)).replace(h,c)}}if(!s){var y=/[\\'"]/g;s=function(l){return i(l).replace(y,"\\$&")}}_||(_=function(l,r,e,a){for(a=l[z];--a;)if(l[e=z+a]===r)return e;return l[e=z+l[z]++]=r,e});var z="",p="",v=l.stepInfos,x=l.curStepInfo,f=l.viewId;p+='<div mxa="_zs_gallerydt:_" class="_zs_galleryhP">';for(var u=0,b=v.length;u<b;u++){var m=v[u];p+='<div class="clearfix _zs_galleryhQ ',m.current&&(p+=" _zs_galleryhW "),p+=" ",m.locked&&(p+=" _zs_galleryhU "),p+=" ",m.locked&&(p+=" _zs_galleryhU "),p+=" ",m.lineOn&&(p+=" _zs_galleryhV "),p+='" ',m.locked||(p+=' mx-click="'+r+"nav({stepIndex:"+a(m.index)+'})" '),p+='><div mxa="_zs_gallerydt:a" class="_zs_galleryhR">',m.lineOn?p+='<i mxs="_zs_gallerydt:_" class="mc-iconfont _zs_galleryhS">&#xe65d;</i>':p+=" "+a(m.index)+" ",p+='</div><div mxa="_zs_gallerydt:b" class="_zs_galleryhT">'+a(m.label)+"</div></div>"}return p+='</div><div mxv="curStepInfo" mx-view="'+a(x.view)+"?info="+_(e,x)+'" class="pt20 pb20" id="'+a(f)+'_cur_content"><div mxs="_zs_gallerydt:a" class="loading" style="padding: 150px 0;"><span class="loading-anim"></span></div></div><div>',x.prevTip&&(p+='<a mxa="_zs_gallerydt:c" href="javascript:;" class="btn min-width-100 mr15" mx-click="'+r+'prev()">'+a(x.prevTip)+"</a>"),p+=" ",x.nextTip&&(p+='<a mxa="_zs_gallerydt:d" href="javascript:;" class="btn min-width-100 btn-brand" mx-click="'+r+'next()">'+a(x.nextTip)+"</a>"),p+='</div><div id="'+a(f)+'_error"></div>'}})});