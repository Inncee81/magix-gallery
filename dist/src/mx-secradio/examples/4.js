define("mx-secradio/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");a.exports=s.extend({tmpl:function(e,l,a,s,i,n,r,t){if(a||(a=e),!i){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,m=function(e){return"&"+x[e]+";"};i=function(e){return""+(null==e?"":e)},s=function(e){return i(e).replace(d,m)}}if(!n){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},o=/[!')(*]/g;n=function(e){return encodeURIComponent(i(e)).replace(o,_)}}if(!t){var p=/[\\'"]/g;t=function(e){return i(e).replace(p,"\\$&")}}r||(r=function(e,l,a,s){for(s=e[v];--s;)if(e[a=v+s]===l)return a;return e[a=v+e[v]++]=l,a});var v="",u="",g=e.list,f=e.viewId,y=e.text1;return u+='<div mxv mxa="_zs_galleryd(:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd(:a" class="_zs_galleryj"><div mxs="_zs_galleryd(:_" class="mb10"><span class="color-9">以下示例：</span>可选范围限制最大高度200，一键收起功能吸顶</div><div mxv="list" mx-view="mx-secradio/index?maxHeight=200&list='+r(a,g)+'"></div></div><div mxa="_zs_galleryd(:b" class="_zs_galleryk"><div mxs="_zs_galleryd(:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+n(f)+'_text_1"><span mxa="_zs_galleryd(:c" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryd(:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(f)+'_text_1">\n&lt;mx-secradio \n    max-height="200"    \n    list="&#123;&#123;@list&#125;&#125;"/&gt;</pre></div></div>'},render:function(){var e=[1,2,3,4,5].map(function(e){return{text:"计划"+e,subs:[1,2,3,4].map(function(l){return{value:e+""+l,text:"单元"+e+"_"+l}})}});this.updater.digest({list:e})}})});