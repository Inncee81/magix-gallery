define("mx-tree/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,u,r,_,i){if(l||(l=e),!u){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};u=function(e){return""+(null==e?"":e)},a=function(e){return u(e).replace(s,x)}}if(!r){var d={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return d[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(u(e)).replace(p,v)}}if(!i){var c=/[\\'"]/g;i=function(e){return u(e).replace(c,"\\$&")}}_||(_=function(e,t,l,a){for(a=e[m];--a;)if(e[l=m+a]===t)return l;return e[l=m+e[m]++]=t,l});var m="",o="",g=e.viewId,f=e.list,y=e.text1;return o+='<div mxv mxa="_zs_gallerydu:_" class="_zs_galleryf"><div mxv mxa="_zs_gallerydu:a" class="_zs_galleryh"><div mxv="list" id="'+a(g)+'_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&close=true&list='+_(l,f)+'"></div></div><div mxa="_zs_gallerydu:b" class="_zs_galleryi"><div mxs="_zs_gallerydu:_" class="_zs_galleryg">可展开收起 + 默认收起</div><div class="_zs_galleryj" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(g)+'_text_1"><span mxa="_zs_gallerydu:c" class="_zs_galleryl">'+u(y)+'</span><i mxs="_zs_gallerydu:a" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    close="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:12,pValue:1,text:"1-2"},{value:121,pValue:12,text:"1-2-1"},{value:122,pValue:12,text:"1-2-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:221,pValue:22,text:"2-2-1"},{value:222,pValue:22,text:"2-2-2"}]})}})});