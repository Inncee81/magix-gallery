define("mx-form/__test__/index",["magix","__test__/subs","mx-title/second","./17"],(i,e,d)=>{i("__test__/subs"),i("mx-title/second"),i("./17");var t=i("magix");d.exports=t.View.extend({tmpl:function(i,e,d,t,v,n,r,s){if(d||(d=i),!v){var _={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},m=/[&<>"'`]/g,a=function(i){return"&"+_[i]+";"};v=function(i){return""+(null==i?"":i)},t=function(i){return v(i).replace(m,a)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},l=function(i){return c[i]},o=/[!')(*]/g;n=function(i){return encodeURIComponent(v(i)).replace(o,l)}}if(!s){var u=/[\\'"]/g;s=function(i){return v(i).replace(u,"\\$&")}}r||(r=function(i,e,d,t){for(t=i[x];--t;)if(i[d=x+t]===e)return d;return i[d=x+i[x]++]=e,d});var x="",E="",f=i.viewId;return E+='<div mxa="_zs_gallerybG:_" class="pr pr120"><div mx-view="__test__/subs?list='+r(d,[{name:"使用示例",key:f+"_demo"},{name:"支持双向绑定的组件",key:f+"_api"}])+'"></div><div id="'+t(f)+'_demo" mx-view="mx-title/second?content=%E5%AE%8C%E6%95%B4%E8%A1%A8%E5%8D%95%E5%BA%94%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxs="_zs_gallerybG:_" class="clearfix mb20"><div mx-view="mx-form/__test__/17"></div></div><div id="'+t(f)+'_api" mx-view="mx-title/second?content=%E6%94%AF%E6%8C%81%E5%8F%8C%E5%90%91%E7%BB%91%E5%AE%9A%E7%9A%84%E7%BB%84%E4%BB%B6"></div><div mxs="_zs_gallerybG:a" class="lh22 mb40"><div>1. dropdown</div><div class="pl15"><div>1.1 单选</div><div>1.2 多选（传入数组即为数组，传入逗号分隔即为逗号分隔，默认逗号分隔）</div></div><div>2. 日历</div><div class="pl15"><div>1.1 单日</div><div>1.2 时间段（开始时间，结束时间，是否对比）</div></div><div>3. 开关</div><div>4. mx-taginput：标签选择</div><div>5. mx-cascade：级联选择</div><div>6. mx-time：时分秒选择</div><div>7. mx-suggest：可选项提示</div></div></div>'},render:function(){this.updater.digest({viewId:this.id})}})});