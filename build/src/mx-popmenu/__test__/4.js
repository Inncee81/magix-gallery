define("mx-popmenu/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var n=e("magix"),a=e("__test__/example");e("$");n.applyStyle("_zs_galleryan","._zs_galleryiK,._zs_galleryiL{margin-right:20px;padding-top:32px}._zs_galleryiM{position:relative;margin-right:20px}._zs_galleryiM ._zs_galleryiN{margin-bottom:136px}._zs_galleryiM ._zs_galleryiO{position:absolute;top:50%;left:0;width:100%;height:30px;margin-top:-15px;line-height:30px;text-align:center}"),l.exports=a.extend({tmpl:function(e,t,l,n,a,s,r,_){if(l||(l=e),!a){var i={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,g=function(e){return"&"+i[e]+";"};a=function(e){return""+(null==e?"":e)},n=function(e){return a(e).replace(x,g)}}if(!s){var p={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return p[e]},d=/[!')(*]/g;s=function(e){return encodeURIComponent(a(e)).replace(d,c)}}if(!_){var o=/[\\'"]/g;_=function(e){return a(e).replace(o,"\\$&")}}r||(r=function(e,t,l,n){for(n=e[m];--n;)if(e[l=m+n]===t)return l;return e[l=m+e[m]++]=t,l});var m="",u="",v=e.selected,y=e.viewId,z=e.text1;return u+='<div mxa="_zs_gallerydh:_" class="_zs_galleryg"><div mxa="_zs_gallerydh:a" class="_zs_galleryj"><div mxa="_zs_gallerydh:b" class="mb20"><span mxs="_zs_gallerydh:_" class="color-9">trigger：</span><span class="color-brand" mx-change="'+t+'select()" mx-view="mx-popmenu/index?menus='+r(l,[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}])+'&triggerType=contextmenu">右键显示菜单</span><span mxs="_zs_gallerydh:a" class="color-9 ml40">当前选中：</span><span>',v&&(u+="操作"+n(v)),u+='</span></div></div><div mxa="_zs_gallerydh:c" class="_zs_galleryk"><div mxs="_zs_gallerydh:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+s(y)+'_text_1"><span mxa="_zs_gallerydh:d" class="_zs_galleryn">'+a(z)+'</span><i mxs="_zs_gallerydh:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+n(y)+'_text_1">\n&lt;mx-popmenu class="color-brand"\n    menus="&#123;&#123;@[&#123;\n        value: 1,\n        text: \'操作1\'\n    &#125;, &#123;\n        value: 2,\n        text: \'操作2\'\n    &#125;, &#123;\n        value: 3,\n        text: \'操作3\'\n    &#125;]&#125;&#125;"\n    trigger-type="contextmenu"&gt;右键显示菜单&lt;/mx-popmenu&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({menus:[{value:1,text:"操作1"},{value:2,text:"操作2"},{value:3,text:"操作3"}]})},"select<change>":function(e){var t=e.params.text,l=e.selected;this.updater.digest({text:t,selected:l})}})});