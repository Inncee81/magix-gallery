define("mx-grid/examples/2",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,r,e)=>{l("mx-copy/index"),l("examples/hl");var a=l("magix"),g=l("examples/example");l("$");a.applyStyle("_zs_galleryW","._zs_gallerygb{opacity:.1}._zs_gallerygb,._zs_gallerygc{background-color:var(--color-brand)}._zs_gallerygc{opacity:.2}._zs_gallerygd{opacity:.3}._zs_gallerygd,._zs_galleryge{background-color:var(--color-brand)}._zs_galleryge{opacity:.4}._zs_gallerygf{padding:16px;background-color:var(--app-bg)}"),e.exports=g.extend({tmpl:function(l,r,e,a,g,t,i,c){if(e||(e=l),!g){var s={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},d=/[&<>"'`]/g,x=function(l){return"&"+s[l]+";"};g=function(l){return""+(null==l?"":l)},a=function(l){return g(l).replace(d,x)}}if(!t){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},_=function(l){return n[l]},m=/[!')(*]/g;t=function(l){return encodeURIComponent(g(l)).replace(m,_)}}if(!c){var o=/[\\'"]/g;c=function(l){return g(l).replace(o,"\\$&")}}var p="",y=l.viewId,v=l.text1;return p+='<div mxa="_zs_gallerycw:_" class="_zs_galleryg"><div mxs="_zs_gallerycw:_" class="_zs_galleryj"><div class="mb10">某一个固定宽度，最右侧固定为100px，剩余部分自适应</div><div style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)"><div flex="1" class="_zs_gallerygb" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div flex="1" class="_zs_gallerygc" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div class="_zs_gallerygd" style="flex: 0 0 100px;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div></div></div><div mxa="_zs_gallerycw:a" class="_zs_galleryk"><div mxs="_zs_gallerycw:a" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+t(y)+'_text_1"><span mxa="_zs_gallerycw:b" class="_zs_galleryn">'+g(v)+'</span><i mxs="_zs_gallerycw:b" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(y)+'_text_1">\n&lt;!-- 某一个固定宽度 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col width="100px" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});