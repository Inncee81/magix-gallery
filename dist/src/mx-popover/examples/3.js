define("mx-popover/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,n,t,i,r){if(l||(l=e),!n){var m={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,p=function(e){return"&"+m[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(c,p)}}if(!t){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return x[e]},o=/[!')(*]/g;t=function(e){return encodeURIComponent(n(e)).replace(o,d)}}if(!r){var v=/[\\'"]/g;r=function(e){return n(e).replace(v,"\\$&")}}i||(i=function(e,a,l,s){for(s=e[_];--s;)if(e[l=_+s]===a)return l;return e[l=_+e[_]++]=a,l});var _="",u="",g=e.custom,y=e.viewId,f=e.text1;return u+='<div mxv mxa="_zs_gallerydJ:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerydJ:a" class="_zs_galleryj"><div mxs="_zs_gallerydJ:_" class="mb20"><span class="color-9">说明：</span>view自定义页面地址，data为传入view的数据</div><span mxv="custom" class="btn" mx-view="mx-popover/index?width=420&view=mx-popover%2Fexamples%2Fcustom&data='+i(l,g)+'&placement=bottom">提示内容为自定义view</span></div><div mxa="_zs_gallerydJ:b" class="_zs_galleryk"><div mxs="_zs_gallerydJ:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_1"><span mxa="_zs_gallerydJ:c" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerydJ:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(y)+'_text_1">\n&lt;mx-popover class="btn"\n    width="420"\n    view="@./custom"\n    data="&#123;&#123;@custom&#125;&#125;"&gt;提示内容为自定义view&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest({custom:{list:[{name:"消耗",key:"charge",type:"double"},{name:"展现量",key:"adPv",type:"integer"},{name:"点击量",key:"click",type:"integer"},{name:"点击率",key:"ctr",type:"percent"}]}})}})});