define("mx-editor/examples/2",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var i=e("examples/example");e("$");l.exports=i.extend({tmpl:function(e,s,l,i,n,a,r,t){if(l||(l=e),!n){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},c=/[&<>"'`]/g,x=function(e){return"&"+d[e]+";"};n=function(e){return""+(null==e?"":e)},i=function(e){return n(e).replace(c,x)}}if(!a){var m={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(e){return m[e]},o=/[!')(*]/g;a=function(e){return encodeURIComponent(n(e)).replace(o,_)}}if(!t){var v=/[\\'"]/g;t=function(e){return n(e).replace(v,"\\$&")}}r||(r=function(e,s,l,i){for(i=e[u];--i;)if(e[l=u+i]===s)return l;return e[l=u+e[u]++]=s,l});var u="",p="",g=e.content,y=e.viewId,f=e.text1;return p+='<div mxa="_zs_gallerybs:_" class="_zs_galleryg"><div mxa="_zs_gallerybs:a" class="_zs_galleryj"><div mxs="_zs_gallerybs:_" class="mb10 clearfix"><div class="color-9 fl lh22">以下示例：</div><div class="fl lh22"><div>纯文案编辑</div><div>输入框小尺寸 + 自定义宽度</div></div></div><div mxa="_zs_gallerybs:b" class="mb20"><span mxs="_zs_gallerybs:a" class="color-9">当前内容：</span><span>'+i(g)+'（要求必填且不小于200）</span></div><div mxa="_zs_gallerybs:c" class="mb20"><div mx-view="mx-editor/index?width=200&small=true&content='+a(g)+"&rules="+r(l,{required:!0,min:[200,"不小于200"]})+'"></div></div></div><div mxa="_zs_gallerybs:d" class="_zs_galleryk"><div mxs="_zs_gallerybs:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+a(y)+'_text_1"><span mxa="_zs_gallerybs:e" class="_zs_galleryn">'+n(f)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+i(y)+'_text_1">\n&lt;mx-editor\n    width="200"\n    small="true"\n    content="&#123;&#123;=content&#125;&#125;"\n    rules="&#123;&#123;@&#123;\n        required: true,\n        min: [200, \'不小于200\']\n    &#125;&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({content:2e3})},"change<edit>":function(e){this.updater.digest({content:e.editText})}})});