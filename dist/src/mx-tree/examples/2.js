define("mx-tree/examples/2",["magix","examples/example","mx-form/index","mx-form/validator","$","../index","mx-copy/index","examples/hl"],(e,l,a)=>{e("../index"),e("mx-copy/index"),e("examples/hl");var s=e("magix"),t=e("examples/example"),r=e("mx-form/index"),i=e("mx-form/validator");s.Vframe,e("$");s.applyStyle("_zs_galleryaI","._zs_gallerylg{width:300px;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_gallerylg ._zs_gallerylh{padding:20px 20px 5px}"),a.exports=t.extend({tmpl:function(e,l,a,s,t,r,i,d){if(a||(a=e),!t){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,v=function(e){return"&"+n[e]+";"};t=function(e){return""+(null==e?"":e)},s=function(e){return t(e).replace(x,v)}}if(!r){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},p=/[!')(*]/g;r=function(e){return encodeURIComponent(t(e)).replace(p,m)}}if(!d){var u=/[\\'"]/g;d=function(e){return t(e).replace(u,"\\$&")}}i||(i=function(e,l,a,s){for(s=e[_];--s;)if(e[a=_+s]===l)return a;return e[a=_+e[_]++]=l,a});var _="",o="",g=e.selected,f=e.viewId,y=e.list,z=e.text1;return o+='<div mxv mxa="_zs_galleryfr:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryfr:a" class="_zs_galleryj"><div mxs="_zs_galleryfr:_" class="mb10 clearfix"><div class="color-9 fl">使用场景：</div><div class="fl"><div>双向绑定，实时反馈选中结果，每次操作都响应事件</div><div>默认选中某些选项</div><div>可展开收起子选项</div></div></div><div mxa="_zs_galleryfr:b" class="mb20"><span mxs="_zs_galleryfr:a" class="color-9">当前已选中：</span><span>'+s(g)+'</span></div><div mxs="_zs_galleryfr:b" class="mb20"><span class="color-9">说明：</span><span class="color-brand mr10">修改数据时保留历史选中数据+展开收起状态</span><a href="javascript:;" mx-click="'+l+'changeData()" class="btn btn-brand">修改数据</a></div><div mxv mxa="_zs_galleryfr:c" class="_zs_gallerylg"><div mxv mxa="_zs_galleryfr:d" class="_zs_gallerylh"><div mxv="list,selected" mxe="'+l+"_0\" mxc=\"[{p:'selected',f:{refresh:true},a:'bottom-values'}]\" id=\""+s(f)+'_tree" mx-view="mx-tree/index?needExpand=true&hasLine=true&list='+i(a,y)+"&bottomValues="+i(a,g)+'"></div></div></div></div><div mxa="_zs_galleryfr:e" class="_zs_galleryk"><div mxs="_zs_galleryfr:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(f)+'_text_1"><span mxa="_zs_galleryfr:f" class="_zs_galleryn">'+t(z)+'</span><i mxs="_zs_galleryfr:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+s(f)+'_text_1">\n&lt;div class="mb20"&gt;\n    &lt;span class="color-9"&gt;当前已选中：&lt;/span&gt;\n    &lt;span&gt;&#123;&#123;=selected&#125;&#125;&lt;/span&gt;\n&lt;/div&gt;\n\n&lt;mx-tree id="&#123;&#123;=viewId&#125;&#125;_tree"\n    need-expand="true"\n    has-line="true"\n    list="&#123;&#123;@list&#125;&#125;"\n    bottom-values="&#123;&#123;:selected&#123;refresh:true&#125;&#125;&#125;"&gt;&lt;/mx-tree&gt;</pre></div></div>'},mixins:[r,i],render:function(){this.updater.digest({list:[{value:1,pValue:"",text:"1"},{value:2,pValue:"",text:"2"},{value:3,pValue:"",text:"3"},{value:11,pValue:1,text:"1-1"},{value:12,pValue:1,text:"1-2"},{value:21,pValue:2,text:"2-1"},{value:211,pValue:21,text:"2-1-1"},{value:212,pValue:21,text:"2-1-2"},{value:22,pValue:2,text:"2-2"},{value:23,pValue:2,text:"2-3"}],selected:[211,23,3],index:3})},"changeData<click>":function(e){var l=this.updater.get("list"),a=this.updater.get("index")+1;l.push({value:"2"+a,pValue:2,text:"2-"+a}),this.updater.digest({index:a,list:l})}})});