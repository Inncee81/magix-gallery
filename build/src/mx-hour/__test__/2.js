define("mx-hour/__test__/2",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,s,l)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var i=e("magix"),a=i.Vframe,r=e("__test__/example");e("$");i.applyStyle("_zs_galleryS","._zs_galleryfT{box-shadow:0 2px 4px rgba(51,51,51,.08);border:1px solid #eee}._zs_galleryfU{padding:10px;border-radius:4px;border:1px solid #e6e6e6}._zs_galleryfV{width:760px}._zs_galleryfW{width:800px}"),l.exports=r.extend({tmpl:function(e,s,l,i,a,r,_,t){if(l||(l=e),!a){var d={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+d[e]+";"};a=function(e){return""+(null==e?"":e)},i=function(e){return a(e).replace(n,c)}}if(!r){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},v=function(e){return x[e]},m=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(m,v)}}if(!t){var g=/[\\'"]/g;t=function(e){return a(e).replace(g,"\\$&")}}_||(_=function(e,s,l,i){for(i=e[o];--i;)if(e[l=o+i]===s)return l;return e[l=o+e[o]++]=s,l});var o="",f="",p=e.selected,y=e.viewId,u=e.text1;f+='<div mxv mxa="_zs_gallerybs:_" class="_zs_galleryf"><div mxv mxa="_zs_gallerybs:a" class="_zs_galleryh"><div mxs="_zs_gallerybs:_" class="clearfix lh22 mb15"><div class="fl color-9">以下示例：</div><div class="fl"><div>每日单独选择</div><div>提供快捷操作</div></div></div><div mxa="_zs_gallerybs:b" class="mb20 clearfix"><div mxs="_zs_gallerybs:a" class="fl mr10"><a href="javascript:;" class="btn btn-brand" mx-click="'+s+'get()">获取选中值</a></div><div mxa="_zs_gallerybs:c" class="fl">';for(var z=0,b=p.length;z<b;z++){var h=p[z];f+="<div>"+i(h.name)+"："+i(h.times)+"</div>"}return f+='</div></div><div mxv="selected" class="_zs_galleryfU _zs_galleryfW" id="'+i(y)+'_hour" mx-view="mx-hour/index?simple=false&selected='+_(l,p)+'"></div></div><div mxa="_zs_gallerybs:d" class="_zs_galleryi"><div mxs="_zs_gallerybs:b" class="_zs_galleryg">HTML Code</div><div class="_zs_galleryj" mx-success="'+s+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(y)+'_text_1"><span mxa="_zs_gallerybs:e" class="_zs_galleryl">'+a(u)+'</span><i mxs="_zs_gallerybs:c" class="mc-iconfont _zs_galleryk">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+i(y)+'_text_1">\n&lt;mx-hour style="width: 760px;"\n    simple="false"\n    selected="&#123;&#123;@[&#123;\n        week: 1,\n        times: [2,3,4,21,22,23]\n    &#125;, &#123;\n        week: 3,\n        times: [0,1,2,3,4,10,11,12]\n    &#125;]&#125;&#125;"/&gt;</pre></div></div>'},render:function(){this.updater.digest({viewId:this.id,selected:[{week:1,name:"周一",times:[2,3,4,21,22,23]},{week:3,name:"周三",times:[0,1,2,3,4,10,11,12]}]})},"get<click>":function(){var e=a.get(this.id+"_hour").invoke("val");this.updater.digest({selected:e})}})});