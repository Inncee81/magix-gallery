define("mx-grid/examples/1",["magix","examples/example","$","mx-copy/index","examples/hl"],(l,r,e)=>{l("mx-copy/index"),l("examples/hl");var a=l("magix"),t=l("examples/example");l("$");a.applyStyle("_zs_galleryV","._zs_galleryfY{opacity:.1}._zs_galleryfY,._zs_galleryfZ{background-color:var(--color-brand)}._zs_galleryfZ{opacity:.2}._zs_galleryg_{opacity:.3}._zs_galleryg_,._zs_galleryga{background-color:var(--color-brand)}._zs_galleryga{opacity:.4}._zs_gallerygb{padding:16px;background-color:var(--app-bg)}"),e.exports=t.extend({tmpl:function(l,r,e,a,t,g,i,s){if(e||(e=l),!t){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},x=/[&<>"'`]/g,d=function(l){return"&"+c[l]+";"};t=function(l){return""+(null==l?"":l)},a=function(l){return t(l).replace(x,d)}}if(!g){var n={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},m=function(l){return n[l]},_=/[!')(*]/g;g=function(l){return encodeURIComponent(t(l)).replace(_,m)}}if(!s){var o=/[\\'"]/g;s=function(l){return t(l).replace(o,"\\$&")}}var y="",p=l.viewId,v=l.text1;y+='<div mxa="_zs_gallerycG:_" class="_zs_galleryg"><div mxa="_zs_gallerycG:a" class="_zs_galleryj"><div mxs="_zs_gallerycG:_" class="mb10">1:1:1:1等分，间隔为20px</div><div mxa="_zs_gallerycG:b" class="mb40" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)">';for(var f=0;f<4;f+=1)y+='<div mxs="_zs_gallerycG:a" class="_zs_galleryfY" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div>';return y+='</div><div mxs="_zs_gallerycG:b" class="mb10">1:3:1，间隔为20px</div><div mxs="_zs_gallerycG:c" style="display: flex;height: 100px;flex-direction: row;justify-content: flex-start;align-items: stretch;--mx-grid-gutter: 20px;margin-left: calc(0px - var(--mx-grid-gutter) / 2);margin-right: calc(0px - var(--mx-grid-gutter) / 2)"><div flex="1" class="_zs_galleryfY" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div flex="3" class="_zs_galleryfZ" style="flex: 3;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div><div flex="1" class="_zs_galleryg_" style="flex: 1;margin-left: calc(var(--mx-grid-gutter) / 2);margin-right: calc(var(--mx-grid-gutter) / 2)"></div></div></div><div mxa="_zs_gallerycG:c" class="_zs_galleryk"><div mxs="_zs_gallerycG:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+r+'done({id:1})" mx-view="mx-copy/index?copyNode='+g(p)+'_text_1"><span mxa="_zs_gallerycG:d" class="_zs_galleryn">'+t(v)+'</span><i mxs="_zs_gallerycG:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+a(p)+'_text_1">\n&lt;!-- 1:1:1:1（支持动态） --&gt;\n&lt;mx-grid.row height="100px" gutter="20px" class="mb40"&gt;\n    &#123;&#123;for(let i=0;i&lt;4;i+=1)&#125;&#125;\n    &lt;mx-grid.col class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &#123;&#123;/for&#125;&#125;\n&lt;/mx-grid.row&gt;\n\n&lt;!-- 1:3:1 --&gt;\n&lt;mx-grid.row height="100px" gutter="20px"&gt;\n    &lt;mx-grid.col flex="1" class="grid1"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="3" class="grid2"&gt;&lt;/mx-grid.col&gt;\n    &lt;mx-grid.col flex="1" class="grid3"&gt;&lt;/mx-grid.col&gt;\n&lt;/mx-grid.row&gt;\n        </pre></div></div>'},render:function(){this.updater.digest()}})});