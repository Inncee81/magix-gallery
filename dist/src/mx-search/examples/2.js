define("mx-search/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");n.exports=l.extend({tmpl:function(e,a,n,l,i,s,r,t){if(n||(n=e),!i){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,m=function(e){return"&"+d[e]+";"};i=function(e){return""+(null==e?"":e)},l=function(e){return i(e).replace(x,m)}}if(!s){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return c[e]},p=/[!')(*]/g;s=function(e){return encodeURIComponent(i(e)).replace(p,_)}}if(!t){var g=/[\\'"]/g;t=function(e){return i(e).replace(g,"\\$&")}}r||(r=function(e,a,n,l){for(l=e[u];--l;)if(e[n=u+l]===a)return n;return e[n=u+e[u]++]=a,n});var u="",o="",v=e.viewId,y=e.text1;return o+='<div mxa="_zs_galleryd[:_" class="_zs_galleryg"><div mxa="_zs_galleryd[:a" class="_zs_galleryj"><div class="w200" mx-view="mx-search/index?list='+r(n,[{name:"计划",id:"campaignId"},{name:"单元",id:"adgroupId"}])+'&listText=name&listValue=id"></div></div><div mxa="_zs_galleryd[:b" class="_zs_galleryk"><div mxs="_zs_galleryd[:_" class="_zs_galleryi">自定义&nbsp;list-text&nbsp;和&nbsp;list-value</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(v)+'_text_1"><span mxa="_zs_galleryd[:c" class="_zs_galleryn">'+i(y)+'</span><i mxs="_zs_galleryd[:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(v)+'_text_1">\n&lt;mx-search class="w200"\n    list="&#123;&#123;@[&#123;\n        name: \'计划\',\n        id: \'campaignId\'\n    &#125;, &#123;\n        name: \'单元\',\n        id: \'adgroupId\'\n    &#125;]&#125;&#125;"\n    list-text="name"\n    list-value="id"/&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});