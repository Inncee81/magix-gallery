define("mx-search/examples/5",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");n.exports=a.extend({tmpl:function(e,l,n,a,s,i,t,r){if(n||(n=e),!s){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(x,c)}}if(!i){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},p=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(p,_)}}if(!r){var o=/[\\'"]/g;r=function(e){return s(e).replace(o,"\\$&")}}t||(t=function(e,l,n,a){for(a=e[v];--a;)if(e[n=v+a]===l)return n;return e[n=v+e[v]++]=l,n});var v="",u="",g=e.viewId,y=e.text1;return u+='<div mxa="_zs_galleryd9:_" class="_zs_galleryg"><div mxa="_zs_galleryd9:a" class="_zs_galleryj"><div mxs="_zs_galleryd9:_" class="mb10 clearfix"><span class="color-9">以下示例：</span>自定义搜索列表文案</div><div><div class="w200" mx-view="mx-search/index?list='+t(n,[{text:"优惠券id",value:"id",tmpl:"搜索id含有“${content}”的优惠券"},{text:"优惠券名称",value:"name",tmpl:"搜索名称含有“${content}”的优惠券"}])+'"></div></div></div><div mxa="_zs_galleryd9:b" class="_zs_galleryk"><div mxs="_zs_galleryd9:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(g)+'_text_1"><span mxa="_zs_galleryd9:c" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryd9:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(g)+"_text_1\">\n&lt;mx-search class=\"w200\"\n    list=\"&#123;&#123;@[&#123;\n        text: '优惠券id',\n        value: 'id',\n        tmpl: '搜索id含有“$&#123;content&#125;”的优惠券'\n    &#125;, &#123;\n        text: '优惠券名称',\n        value: 'name',\n        tmpl: '搜索名称含有“$&#123;content&#125;”的优惠券'\n    &#125;]&#125;&#125;\" /&gt;</pre></div></div>"},render:function(){this.updater.digest()}})});