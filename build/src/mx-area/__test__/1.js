define("mx-area/__test__/1",["magix","__test__/example","$","../index","mx-copy/index","__test__/hl"],(e,l,i)=>{e("../index"),e("mx-copy/index"),e("__test__/hl");var s=e("magix"),a=e("__test__/example");e("$");s.applyStyle("_zs_gallerym","._zs_gallerybg,._zs_gallerybh{padding:20px 20px 0;border:1px solid var(--color-border);border-radius:var(--border-radius)}._zs_gallerybg{width:740px}._zs_gallerybh{width:600px}._zs_gallerybi{width:740px;border:1px solid var(--color-border);border-radius:var(--border-radius);padding:20px 0}"),i.exports=a.extend({tmpl:function(e,l,i,s,a,r,d,_){if(i||(i=e),!a){var t={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},n=/[&<>"'`]/g,c=function(e){return"&"+t[e]+";"};a=function(e){return""+(null==e?"":e)},s=function(e){return a(e).replace(n,c)}}if(!r){var v={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},x=function(e){return v[e]},g=/[!')(*]/g;r=function(e){return encodeURIComponent(a(e)).replace(g,x)}}if(!_){var m=/[\\'"]/g;_=function(e){return a(e).replace(m,"\\$&")}}d||(d=function(e,l,i,s){for(s=e[o];--s;)if(e[i=o+s]===l)return i;return e[i=o+e[o]++]=l,i});var o="",y="",p=e.viewId,z=e.selected,u=e.text1,f=e.text2;y+='<div mxv mxa="_zs_galleryP:_" class="_zs_galleryg"><div mxv mxa="_zs_galleryP:a" class="_zs_galleryj"><div mxs="_zs_galleryP:_" class="clearfix lh22 mb20"><div class="fl color-9">以下示例：</div><div class="fl"><div>可以选择城市</div><div>每个省份和城市都有各自的id，若选择了省份，则获取选中值时只有省份的id（不包含该省份下所有城市id）</div><div>宽度由容器宽度决定，自适应</div></div></div><div mxv mxa="_zs_galleryP:b" class="clearfix mb20"><div mxv mxa="_zs_galleryP:c" class="_zs_gallerybg fl mr20"><div mxv="selected" id="'+s(p)+'_area" mx-view="mx-area/index?city=true&selected='+d(i,z)+'"></div></div><div mxa="_zs_galleryP:d" class="fl"><div mxs="_zs_galleryP:a" class="mb10"><a href="javascript:;" class="btn btn-brand" mx-click="'+l+'get()">获取选中值</a></div><div mxa="_zs_galleryP:e" class="clearfix lh22"><div mxs="_zs_galleryP:b" class="fl color-9">当前选中值：</div><div mxa="_zs_galleryP:f" class="fl">';for(var h=0,b=z.length;h<b;h++){y+="<div>"+s(z[h])+"</div>"}return y+='</div></div></div></div></div><div mxa="_zs_galleryP:g" class="clearfix"><div mxa="_zs_galleryP:h" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryP:c" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:1})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_1"><span mxa="_zs_galleryP:i" class="_zs_galleryn">'+a(u)+'</span><i mxs="_zs_galleryP:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+'_text_1">\n&lt;mx-area id="&#123;&#123;=viewId&#125;&#125;_area"\n    city="true"\n    selected="&#123;&#123;@selected&#125;&#125;"/&gt;</pre></div><div mxa="_zs_galleryP:j" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryP:e" class="_zs_galleryi">JS Code</div><div class="_zs_galleryl" mx-success="'+l+'done({id:2})" mx-view="mx-copy/index?copyNode='+r(p)+'_text_2"><span mxa="_zs_galleryP:k" class="_zs_galleryn">'+a(f)+'</span><i mxs="_zs_galleryP:d" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+s(p)+"_text_2\">\nlet Magix = require('magix');\nlet $ = require('$');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: '@index.html',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id,\n            selected: [1]\n        &#125;);\n    &#125;,\n    'get&lt;click&gt;' (event) &#123;\n        let id = this.id + '_area'\n        let selected = Magix.Vframe.get(id).invoke('val');\n        this.updater.digest(&#123;\n            selected: selected\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div>"},render:function(){this.updater.digest({viewId:this.id,selected:[1]})},"get<click>":function(e){var l=this.id+"_area",i=s.Vframe.get(l).invoke("val");this.updater.digest({selected:i})}})});