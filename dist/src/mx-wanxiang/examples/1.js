define("mx-wanxiang/examples/1",["magix","examples/example","$","mx-copy/index","examples/hl"],(e,a,n)=>{e("mx-copy/index"),e("examples/hl");e("magix");var l=e("examples/example");e("$");n.exports=l.extend({tmpl:function(e,a,n,l,r,s,i,t){if(n||(n=e),!r){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,g=function(e){return"&"+o[e]+";"};r=function(e){return""+(null==e?"":e)},l=function(e){return r(e).replace(x,g)}}if(!s){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return m[e]},_=/[!')(*]/g;s=function(e){return encodeURIComponent(r(e)).replace(_,d)}}if(!t){var c=/[\\'"]/g;t=function(e){return r(e).replace(c,"\\$&")}}var p="",f=e.viewId,u=e.text1;return p+='<div mxa="_zs_galleryfg:_" class="_zs_galleryg"><div mxs="_zs_galleryfg:_" class="_zs_galleryj"><a href="#!/wanxiang/demo1" target="_blank" rel="noopener noreferrer" class="color-brand">新页面查看示例</a>，注意只在taobao域名下可用</div><div mxa="_zs_galleryfg:a" class="_zs_galleryk"><div mxs="_zs_galleryfg:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(f)+'_text_1"><span mxa="_zs_galleryfg:b" class="_zs_galleryn">'+r(u)+'</span><i mxs="_zs_galleryfg:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+l(f)+'_text_1">\n&lt;mx-wanxiang \n    biz-code="PCMaMaAnyWhereWindow"\n    default-source-id="432"\n    source-map="&#123;&#123;@&#123;\n        \'/wanxiang/demo1\': 496,\n        \'/wanxiang/demo2?version=1\': 502\n    &#125;&#125;&#125;"\n    bottom="50"/&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({})}})});