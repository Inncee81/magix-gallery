define("mx-grid/__test__/6",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(r,t,l)=>{r("mx-copy/index"),r("__test__/hl");var e=r("magix"),i=r("__test__/example");r("$");e.applyStyle("_zs_galleryS","._zs_galleryfE{opacity:.1}._zs_galleryfE,._zs_galleryfF{background-color:var(--color-brand)}._zs_galleryfF{opacity:.2}._zs_galleryfG{opacity:.3}._zs_galleryfG,._zs_galleryfH{background-color:var(--color-brand)}._zs_galleryfH{opacity:.4}._zs_galleryfI{padding:16px;background-color:var(--app-bg)}"),l.exports=i.extend({tmpl:function(r,t,l,e,i,g,a,d){if(l||(l=r),!i){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},s=/[&<>"'`]/g,x=function(r){return"&"+c[r]+";"};i=function(r){return""+(null==r?"":r)},e=function(r){return i(r).replace(s,x)}}if(!g){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(r){return n[r]},o=/[!')(*]/g;g=function(r){return encodeURIComponent(i(r)).replace(o,_)}}if(!d){var m=/[\\'"]/g;d=function(r){return i(r).replace(m,"\\$&")}}var v="",p=r.viewId,f=r.text1;return v+='<div mxa="_zs_galleryb/:_" class="_zs_galleryg"><div mxs="_zs_galleryb/:_" class="_zs_galleryj"><div class="mb10">嵌套：右侧固定200px，左侧自适应，间隔20px</div><div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2);"><div flex="1" class="_zs_galleryfE" style="overflow: hidden;flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"></div><div style="overflow: hidden;flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2);"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2);"><div class="_zs_galleryfF" style="overflow: hidden;flex: 1;height: 20px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfG" style="overflow: hidden;flex: 1;height: 40px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div><div class="_zs_galleryfH" style="overflow: hidden;flex: 1;height: 60px;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2);"></div></div></div></div></div><div mxa="_zs_galleryb/:a" class="_zs_galleryk"><div mxs="_zs_galleryb/:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+g(p)+'_text_1"><span mxa="_zs_galleryb/:b" class="_zs_galleryn">'+i(f)+'</span><i mxs="_zs_galleryb/:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="__test__/hl" id="'+e(p)+'_text_1">\n&lt;mx-grid.row gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="20px"&gt;\n            &lt;mx-grid.col class="grid2" height="20px"&gt;&lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid3" height="40px"&gt;&lt;/mx-grid.col&gt;\n            &lt;mx-grid.col class="grid4" height="60px"&gt;&lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});