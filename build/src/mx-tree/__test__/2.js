define("mx-tree/__test__/2",["magix","__test__/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","__test__/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var t=e("magix"),s=e("__test__/example"),r=e("mx-form/index"),i=e("mx-form/validator");t.Vframe,e("$");t.applyStyle("_zs_galleryaI","._zs_gallerykG{width:300px;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_gallerykG ._zs_gallerykH{padding:20px 20px 5px}"),a.exports=s.extend({tmpl:function(e,l,a,t,s,r,i,d){if(a||(a=e),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},_=/[&<>"'`]/g,x=function(e){return"&"+n[e]+";"};s=function(e){return""+(null==e?"":e)},t=function(e){return s(e).replace(_,x)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},c=function(e){return v[e]},u=/[!')(*]/g;r=function(e){return encodeURIComponent(s(e)).replace(u,c)}}if(!d){var m=/[\\'"]/g;d=function(e){return s(e).replace(m,"\\$&")}}i||(i=function(e,l,a,t){for(t=e[p];--t;)if(e[a=p+t]===l)return a;return e[a=p+e[p]++]=l,a});var p="",o="",g=e.selected,y=e.viewId,f=e.list,z=e.text1;return o+='<div mxv mxa="_zs_gallerye@:_" class="_zs_galleryg"><div mxv mxa="_zs_gallerye@:a" class="_zs_galleryj"><div mxs="_zs_gallerye@:_" class="mb10 clearfix"><div class="color-9 fl">使用场景：</div><div class="fl"><div>双向绑定，实时反馈选中结果，每次操作都响应事件</div><div>默认选中某些选项</div><div>可展开收起子选项</div></div></div><div mxa="_zs_gallerye@:b" class="mb20"><span mxs="_zs_gallerye@:a" class="color-9">当前已选中：</span><span>'+t(g)+'</span></div><div mxs="_zs_gallerye@:b" class="mb20"><span class="color-9">说明：</span><span class="color-brand mr10">修改数据时保留历史选中数据+展开收起状态</span><a href="javascript:;" mx-click="'+l+'changeData()" class="btn btn-brand">修改数据</a></div><div mxv mxa="_zs_gallerye@:c" class="_zs_gallerykG"><div mxv mxa="_zs_gallerye@:d" class="_zs_gallerykH"><div mxv="list,selected" mxe="'+l+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'bottom-values'}]\" id=\""+t(y)+'_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&list='+i(a,f)+"&bottomValues="+i(a,g)+'"></div></div></div></div><div mxa="_zs_gallerye@:e" class="_zs_galleryk"><div mxs="_zs_gallerye@:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerye@:f" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_gallerye@:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+t(y)+'_text_1">\n&lt;div class="mb20"&gt;\n    &lt;span class="color-9"&gt;当前已选中：&lt;/span&gt;\n    &lt;span&gt;&#123;&#123;=selected&#125;&#125;&lt;/span&gt;\n&lt;/div&gt;\n\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"\n    bottom-values="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},mixins:[r,i],render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"}],selected:[211,23,3],index:3})},"changeData<click>":function(e){var l=this.updater.get("list"),a=this.updater.get("index")+1;l.push({value:"2"+a,pValue:2,text:"2-"+a}),this.updater.digest({index:a,list:l})}})});