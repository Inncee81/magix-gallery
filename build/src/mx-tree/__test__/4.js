define("mx-tree/__test__/4",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,t,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");e("magix");var a=e("__test__/example");e("$");l.exports=a.extend({tmpl:function(e,t,l,a,r,_,i,n){if(l||(l=e),!r){var u={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(e){return"&"+u[e]+";"};r=function(e){return""+(null==e?"":e)},a=function(e){return r(e).replace(s,x)}}if(!_){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},d=function(e){return v[e]},p=/[!')(*]/g;_=function(e){return encodeURIComponent(r(e)).replace(p,d)}}if(!n){var c=/[\\'"]/g;n=function(e){return r(e).replace(c,"\\$&")}}i||(i=function(e,t,l,a){for(a=e[m];--a;)if(e[l=m+a]===t)return l;return e[l=m+e[m]++]=t,l});var m="",o="",g=e.viewId,y=e.list,f=e.text1;return o+='<div mxv mxa="_zs_gallerye;:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerye;:a" class="_zs_galleryj"><div mxv="list" id="'+a(g)+'_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&close=true&list='+i(l,y)+'"></div></div><div mxa="_zs_gallerye;:b" class="_zs_galleryk"><div mxs="_zs_gallerye;:_" class="_zs_galleryi">可展开收起 + 默认收起</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+_(g)+'_text_1"><span mxa="_zs_gallerye;:c" class="_zs_galleryn">'+r(f)+'</span><i mxs="_zs_gallerye;:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+a(g)+'_text_1">\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    close="true"\n    list="&#123;&#123;@list&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:11,pValue:1,text:"1-1"},{value:111,pValue:11,text:"1-1-1"},{value:1111,pValue:111,text:"1-1-1-1"},{value:1112,pValue:111,text:"1-1-1-2"},{value:12,pValue:1,text:"1-2"},{value:121,pValue:12,text:"1-2-1"},{value:122,pValue:12,text:"1-2-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:221,pValue:22,text:"2-2-1"},{value:222,pValue:22,text:"2-2-2"}]})}})});