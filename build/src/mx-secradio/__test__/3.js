define("mx-secradio/__test__/3",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var _=e("__test__/example");e("$");l.exports=_.extend({tmpl:function(e,t,l,_,s,i,a,r){if(l||(l=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},_=function(e){return s(e).replace(x,c)}}if(!i){var u={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return u[e]},v=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(v,d)}}if(!r){var m=/[\\'"]/g;r=function(e){return s(e).replace(m,"\\$&")}}a||(a=function(e,t,l,_){for(_=e[o];--_;)if(e[l=o+_]===t)return l;return e[l=o+e[o]++]=t,l});var o="",g="",p=e.list,y=e.viewId,f=e.text1;return g+='<div mxv mxa="_zs_galleryc&:_" class="_zs_galleryh"><div mxv mxa="_zs_galleryc&:a" class="_zs_galleryk"><div mxv="list" mx-view="mx-secradio/index?list='+a(l,p)+'&close=true"></div></div><div mxa="_zs_galleryc&:b" class="_zs_galleryl"><div mxs="_zs_galleryc&:_" class="_zs_galleryj">默认收起</div><div class="_zs_gallerym" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryc&:c" class="_zs_galleryo">'+s(f)+'</span><i mxs="_zs_galleryc&:a" class="mc-iconfont _zs_galleryn">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+_(y)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    close="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,text:"单品推广计划1",subs:[{value:11,text:"单品推广计划1_单元1"},{value:12,text:"单品推广计划1_单元2"},{value:13,text:"单品推广计划1_单元3"}]},{value:2,text:"单品推广计划2",subs:[{value:21,text:"单品推广计划2_单元1"},{value:22,text:"单品推广计划2_单元2"},{value:23,text:"单品推广计划2_单元3"}]}]})}})});