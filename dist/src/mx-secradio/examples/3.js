define("mx-secradio/examples/3",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(e,l,t)=>{e("../index"),e("mx-copy/index"),e("examples/hl");e("magix");var a=e("examples/example");e("$");t.exports=a.extend({tmpl:function(e,l,t,a,s,i,r,n){if(t||(t=e),!s){var x={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,_=function(e){return"&"+x[e]+";"};s=function(e){return""+(null==e?"":e)},a=function(e){return s(e).replace(d,_)}}if(!i){var c={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(e){return c[e]},u=/[!')(*]/g;i=function(e){return encodeURIComponent(s(e)).replace(u,m)}}if(!n){var v=/[\\'"]/g;n=function(e){return s(e).replace(v,"\\$&")}}r||(r=function(e,l,t,a){for(a=e[o];--a;)if(e[t=o+a]===l)return t;return e[t=o+e[o]++]=l,t});var o="",p="",g=e.list,y=e.viewId,f=e.text1;return p+='<div mxv mxa="_zs_galleryd*:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryd*:a" class="_zs_galleryj"><div mxv="list" mx-view="mx-secradio/index?list='+r(t,g)+'&close=true"></div></div><div mxa="_zs_galleryd*:b" class="_zs_galleryk"><div mxs="_zs_galleryd*:_" class="_zs_galleryi">默认收起</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryd*:c" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryd*:a" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;mx-secradio \n    list="&#123;&#123;@list&#125;&#125;"\n    close="true"/&gt;</pre></div></div>'},render:function(){this.updater.digest({list:[{value:1,text:"单品推广计划1",subs:[{value:11,text:"单品推广计划1_单元1"},{value:12,text:"单品推广计划1_单元2"},{value:13,text:"单品推广计划1_单元3"}]},{value:2,text:"单品推广计划2",subs:[{value:21,text:"单品推广计划2_单元1"},{value:22,text:"单品推广计划2_单元2"},{value:23,text:"单品推广计划2_单元3"}]}]})}})});