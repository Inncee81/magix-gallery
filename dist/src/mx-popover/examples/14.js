define("mx-popover/examples/14",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,n)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");n.exports=s.extend({tmpl:function(e,l,n,s,a,r,t,i){if(n||(n=e),!a){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},o=/[&<>"'`]/g,p=function(e){return"&"+x[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(o,p)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return d[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(m,c)}}if(!i){var _=/[\\'"]/g;i=function(e){return a(e).replace(_,"\\$&")}}t||(t=function(e,l,n,s){for(s=e[v];--s;)if(e[n=v+s]===l)return n;return e[n=v+e[v]++]=l,n});var v="",f="",g=e.viewId,u=e.text1;return f+='<div mxa="_zs_galleryd1:_" class="_zs_galleryg"><div mxa="_zs_galleryd1:a" class="_zs_galleryj"><div mxs="_zs_galleryd1:_" class="mb20"><span class="color-9">说明：</span>默认为节点下方 10px 显示，可配置offset设置微量偏移</div><span class="btn" mx-view="mx-popover/index?content=%E4%B8%8B%E4%B8%AD%E5%AF%B9%E9%BD%90%EF%BC%8C%E5%90%91%E5%B7%A640%EF%BC%8C%E5%90%91%E4%B8%8B20&offset='+t(n,{left:-40,top:-10})+'">微量偏移</span></div><div mxa="_zs_galleryd1:b" class="_zs_galleryk"><div mxs="_zs_galleryd1:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_galleryd1:c" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_galleryd1:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(g)+'_text_1">\n&lt;mx-popover class="btn"\n    content="下中对齐，向左40，向下20"\n    offset="&#123;&#123;@&#123;\n        left: -40,\n        top: -10\n    &#125;&#125;&#125;"&gt;微量偏移&lt;/mx-popover&gt;</pre></div></div>'},render:function(){this.updater.digest()}})});