define("mx-grid/examples/6",["magix","examples/example","$","mx-copy/index","examples/hl"],(r,t,l)=>{r("mx-copy/index"),r("examples/hl");var a=r("magix"),i=r("examples/example");r("$");a.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),l.exports=i.extend({tmpl:function(r,t,l,a,i,g,e,c){if(l||(l=r),!i){var o={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,n=function(r){return"&"+o[r]+";"};i=function(r){return""+(null==r?"":r)},a=function(r){return i(r).replace(d,n)}}if(!g){var x={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},s=function(r){return x[r]},m=/[!')(*]/g;g=function(r){return encodeURIComponent(i(r)).replace(m,s)}}if(!c){var v=/[\\'"]/g;c=function(r){return i(r).replace(v,"\\$&")}}var p="",y=r.viewId,_=r.text1;return p+='<div mxa="_zs_gallerycM:_" class="_zs_galleryg"><div mxs="_zs_gallerycM:_" class="_zs_galleryj"><div class="mb10">嵌套：右侧固定200px，左侧自适应，间隔20px</div><div style="display: flex;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)"><div style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"><div style="height: 100%; background-color: var(--color-brand); opacity: .2;"></div></div><div style="flex: 0 0 200px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"><div style="display: flex;flex-direction: column;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-top: calc(0px - var(--mx-grid-gutter) / 2);margin-bottom: calc(0px - var(--mx-grid-gutter) / 2)"><div style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div style="height: 20px; background-color: var(--color-brand); opacity: .2;"></div></div><div style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div style="height: 40px; background-color: var(--color-brand); opacity: .2;"></div></div><div style="flex: 1;margin-top: calc(var(--mx-grid-gutter) / 2);margin-bottom: calc(var(--mx-grid-gutter) / 2)"><div style="height: 60px; background-color: var(--color-brand); opacity: .2;"></div></div></div></div></div></div><div mxa="_zs_gallerycM:a" class="_zs_galleryk"><div mxs="_zs_gallerycM:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+t+'done({id:1})" mx-view="mx-copy/index?copyNode='+g(y)+'_text_1"><span mxa="_zs_gallerycM:b" class="_zs_galleryn">'+i(_)+'</span><i mxs="_zs_gallerycM:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;mx-grid.row gutter="20px"&gt;\n    &lt;mx-grid.col&gt;\n        &lt;div style="height: 100%; background-color: var(--color-brand); opacity: .2;"&gt;&lt;/div&gt;\n    &lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="200px"&gt;\n        &lt;mx-grid.row direction="col" gutter="20px"&gt;\n            &lt;mx-grid.col&gt;\n                &lt;div style="height: 20px; background-color: var(--color-brand); opacity: .2;"&gt;&lt;/div&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col&gt;\n                &lt;div style="height: 40px; background-color: var(--color-brand); opacity: .2;"&gt;&lt;/div&gt;\n            &lt;/mx-grid.col&gt;\n            &lt;mx-grid.col&gt;\n                &lt;div style="height: 60px; background-color: var(--color-brand); opacity: .2;"&gt;&lt;/div&gt;\n            &lt;/mx-grid.col&gt;\n        &lt;/mx-grid.row&gt;\n    &lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});