define("mx-table/__test__/index7",["magix","$","__test__/subs","mx-title/second","./14","./15"],(t,e,i)=>{t("__test__/subs"),t("mx-title/second"),t("./14"),t("./15");var d=t("magix");t("$");i.exports=d.View.extend({tmpl:function(t,e,i,d,n,r,a,s){if(i||(i=t),!n){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},v=/[&<>"'`]/g,l=function(t){return"&"+_[t]+";"};n=function(t){return""+(null==t?"":t)},d=function(t){return n(t).replace(v,l)}}if(!r){var o={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(t){return o[t]},u=/[!')(*]/g;r=function(t){return encodeURIComponent(n(t)).replace(u,m)}}if(!s){var c=/[\\'"]/g;s=function(t){return n(t).replace(c,"\\$&")}}a||(a=function(t,e,i,d){for(d=t[g];--d;)if(t[i=g+d]===e)return i;return t[i=g+t[g]++]=e,i});var g="",x="",h=t.viewId;return x+='<div mxa="_zs_galleryeq:_" class="pr pr120"><div mx-view="__test__/subs?list='+a(i,[{name:"使用示例",key:h+"_demo",subs:[{name:"一次性获取",key:h+"_demo1"},{name:"实时获取",key:h+"_demo2"}]},{name:"Methods",key:h+"_method",subs:[{name:"getStoreState",key:h+"_method"},{name:"clearStoreState",key:h+"_method"}]}])+'"></div><div id="'+d(h)+'_demo" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxa="_zs_galleryeq:a" class="clearfix mb20"><div mx-view="mx-table/__test__/14" id="'+d(h)+'_demo1"></div><div mx-view="mx-table/__test__/15" id="'+d(h)+'_demo2"></div></div><div id="'+d(h)+'_method" mx-view="mx-title/second?content=Methods"></div><div mxs="_zs_galleryeq:_" class="pr20"><table class="table _zs_galleryq"><thead><tr><th width="100">方法名</th><th width="200">说明</th></tr></thead><tbody><tr><td>this.getStoreState([linkage:string])</td><td><div>linkage：父节点input.attr(\'linkage\')</div><div>有：获取父节点为该值的所有选中项</div><div>无：获取已配置的所有input的选中项</div></td></tr><tr><td>this.clearStoreState([linkage:string])</td><td><div>linkage：父节点input.attr(\'linkage\')</div><div>有：清空父节点为该值的所有选中项</div><div>无：清空已配置的所有input的选中项</div></td></tr></tbody></table></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});