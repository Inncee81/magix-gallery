define("mx-dragsort/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(a,e,l)=>{a("../index"),a("mx-copy/index"),a("__test__/hl");var r=a("magix"),s=a("__test__/example"),i=a("$");r.applyStyle("_zs_galleryE","._zs_gallerydX{width:120px;padding:10px;margin-bottom:10px;margin-right:10px;border:1px solid var(--color-border);border-radius:var(--border-radius);cursor:pointer}"),l.exports=s.extend({tmpl:function(a,e,l,r,s,i,t,_){if(l||(l=a),!s){var n={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,c=function(a){return"&"+n[a]+";"};s=function(a){return""+(null==a?"":a)},r=function(a){return s(a).replace(d,c)}}if(!i){var g={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(a){return g[a]},m=/[!')(*]/g;i=function(a){return encodeURIComponent(s(a)).replace(m,x)}}if(!_){var o=/[\\'"]/g;_=function(a){return s(a).replace(o,"\\$&")}}var v="",p=a.items,u=a.viewId,y=a.text1;v+='<div mxa="_zs_galleryaY:_" class="_zs_galleryg"><div mxa="_zs_galleryaY:a" class="_zs_galleryj"><div mxs="_zs_galleryaY:_" class="mb20"><span class="color-9">以下示例：</span>支持水平方向的排序</div><div mxa="_zs_galleryaY:b" class="clearfix"><div mxa="_zs_galleryaY:c" class="mb20"><span mxs="_zs_galleryaY:a" class="color-9 mr10">当前顺序：</span>'+r(p)+'</div><ul mxa="_zs_galleryaY:d" class="clearfix" mx-view="mx-dragsort/index?horizonal=true&vertical=false" mx-dragfinish="'+e+'drag()">';for(var f=0,z=p.length;f<z;f++){var h=p[f];v+='<li class="_zs_gallerydX fl" data-value="'+r(h)+'">'+r(h)+"</li>"}return v+='</ul></div></div><div mxa="_zs_galleryaY:e" class="_zs_galleryk"><div mxs="_zs_galleryaY:b" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(u)+'_text_1"><span mxa="_zs_galleryaY:f" class="_zs_galleryn">'+s(y)+'</span><i mxs="_zs_galleryaY:c" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+r(u)+'_text_1">\n&lt;ul class="clearfix"\n    mx-view="@../../mx-dragsort/index" \n    view-horizonal="true"\n    view-vertical="false"\n    mx-dragfinish="drag()"&gt;\n    &#123;&#123;each items as item&#125;&#125;\n    &lt;li class="item fl" data-value="&#123;&#123;=item&#125;&#125;"&gt;&#123;&#123;=item&#125;&#125;&lt;/li&gt;\n    &#123;&#123;/each&#125;&#125;\n&lt;/ul&gt;\n        </pre></div></div>'},render:function(){this.updater.digest({items:[1,2,3,4,5]})},"drag<dragfinish>":function(a){for(var e=[],l=i("#"+this.id+" ._zs_gallerydX"),r=0,s=l.length;r<s;r++){var t=i(l[r]);e.push(t.data("value"))}this.updater.digest({items:e})}})});