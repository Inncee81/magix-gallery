define("mx-feedback/examples/1",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,a,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var s=e("examples/example");e("$");l.exports=s.extend({tmpl:function(e,a,l,s,n,r,d,i){if(l||(l=e),!n){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},t=/[&<>"'`]/g,x=function(e){return"&"+c[e]+";"};n=function(e){return""+(null==e?"":e)},s=function(e){return n(e).replace(t,x)}}if(!r){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(e){return m[e]},_=/[!')(*]/g;r=function(e){return encodeURIComponent(n(e)).replace(_,o)}}if(!i){var p=/[\\'"]/g;i=function(e){return n(e).replace(p,"\\$&")}}d||(d=function(e,a,l,s){for(s=e[f];--s;)if(e[l=f+s]===a)return l;return e[l=f+e[f]++]=a,l});var f="",g="",b=e.viewId,v=e.text1;return g+='<div mxa="_zs_galleryb;:_" class="_zs_galleryg"><div mxa="_zs_galleryb;:a" class="_zs_galleryj"><div mxs="_zs_galleryb;:_" class="mb20"><span class="color-9">上述“投放效果预估”功能对您是否有帮助？</span><span class="color-brand cursor-pointer" mx-view="mx-feedback/index?fdId=19">填写反馈（默认样式）</span></div><div mxa="_zs_galleryb;:b" class="mb20"><span mxs="_zs_galleryb;:a" class="color-9">上述“投放效果预估”功能对您是否有帮助？</span><span class="color-brand cursor-pointer" mx-view="mx-feedback/index?fdId=21&fdStyle='+d(l,{bottom:"200px"})+'">填写反馈（自定义样式）</span></div></div><div mxa="_zs_galleryb;:c" class="_zs_galleryk"><div mxs="_zs_galleryb;:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+a+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(b)+'_text_1"><span mxa="_zs_galleryb;:d" class="_zs_galleryn">'+n(v)+'</span><i mxs="_zs_galleryb;:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(b)+'_text_1">\n&lt;mx-feedback class="color-brand"\n    fd-id="19"&gt;填写反馈（默认样式）&lt;/mx-feedback&gt;\n\n&lt;mx-feedback class="color-brand"\n    fd-id="21"\n    fd-style="&#123;&#123;@&#123;\n        bottom: \'200px\'\n    &#125;&#125;&#125;"&gt;填写反馈（自定义样式）&lt;/mx-feedback&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});