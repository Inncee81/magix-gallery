define("mx-carousel/examples/4",["magix","examples/example","$","../index","mx-copy/index","examples/hl"],(l,e,a)=>{l("../index"),l("mx-copy/index"),l("examples/hl");var r=l("magix"),s=l("examples/example");l("$");r.applyStyle("_zs_galleryw","._zs_gallerycL{position:relative;padding-left:10%;padding-right:10%}._zs_gallerycL ._zs_gallerycM{position:absolute;top:20px;width:40px;height:40px;text-align:center;line-height:40px;font-size:32px;color:var(--color-brand);opacity:.5;transition:all var(--duration);cursor:pointer}._zs_gallerycL ._zs_gallerycM:hover{opacity:.8}._zs_gallerycL ._zs_gallerycM._zs_gallerycN{left:0}._zs_gallerycL ._zs_gallerycM._zs_gallerycO{right:0;transform:rotate(180deg)}._zs_gallerycL ._zs_gallerycP{float:left;width:40%;height:80px;margin-right:5%;margin-left:5%;line-height:80px;background-repeat:no-repeat;background-position:top;color:#fff;text-align:center;font-size:20px;font-weight:700;border-radius:6px}._zs_gallerycL ._zs_gallerycP,._zs_gallerycL ._zs_gallerycQ{background-color:var(--color-brand)}._zs_gallerycL ._zs_gallerycQ{margin-top:8px}"),a.exports=s.extend({tmpl:function(l,e,a,r,s,i,n,t){if(a||(a=l),!s){var c={"&":"amp","<":"lt",">":"gt",'"':"#34","'":"#39","`":"#96"},g=/[&<>"'`]/g,d=function(l){return"&"+c[l]+";"};s=function(l){return""+(null==l?"":l)},r=function(l){return s(l).replace(g,d)}}if(!i){var _={"!":"%21","'":"%27","(":"%28",")":"%29","*":"%2A"},o=function(l){return _[l]},x=/[!')(*]/g;i=function(l){return encodeURIComponent(s(l)).replace(x,o)}}if(!t){var p=/[\\'"]/g;t=function(l){return s(l).replace(p,"\\$&")}}var v="",y=l.viewId,m=l.dotClass,z=l.text1,f=l.text2;return v+='<div mxa="_zs_galleryac:_" class="_zs_galleryg"><div mxa="_zs_galleryac:a" class="_zs_galleryj"><div mxs="_zs_galleryac:_" class="mb20 clearfix"><div class="color-9 fl">以下示例：</div><div class="fl"><div>自定义切换trigger</div><div>自定义轮播点样式</div></div></div><div mxa="_zs_galleryac:b" class="clearfix mb40"><div mxa="_zs_galleryac:c" class="_zs_gallerycL"><div mx-view="mx-carousel/index?height=100&prevTrigger='+i(y)+"_prev&nextTrigger="+i(y)+"_next&dotClass="+i(m)+'"><div mxs="_zs_galleryac:a" class="clearfix" data-carousel="true"><div class="_zs_gallerycP">1</div><div class="_zs_gallerycP">2</div></div><div mxs="_zs_galleryac:b" class="clearfix" data-carousel="true"><div class="_zs_gallerycP">3</div><div class="_zs_gallerycP">4</div></div><div mxs="_zs_galleryac:c" class="clearfix" data-carousel="true"><div class="_zs_gallerycP">5</div><div class="_zs_gallerycP">6</div></div></div><i class="mc-iconfont _zs_gallerycM _zs_gallerycN" id="'+r(y)+'_prev">&#xe61e;</i><i class="mc-iconfont _zs_gallerycM _zs_gallerycO" id="'+r(y)+'_next">&#xe61e;</i></div></div></div><div mxa="_zs_galleryac:d" class="clearfix"><div mxa="_zs_galleryac:e" class="_zs_galleryk _zs_galleryd"><div mxs="_zs_galleryac:d" class="_zs_galleryi">HTML Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:1})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_1"><span mxa="_zs_galleryac:f" class="_zs_galleryn">'+s(z)+'</span><i mxs="_zs_galleryac:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(y)+'_text_1">\n&lt;div class="wrapper"&gt;\n    &lt;mx-carousel height="100" \n        prev-trigger="&#123;&#123;=viewId&#125;&#125;_prev"\n        next-trigger="&#123;&#123;=viewId&#125;&#125;_next"\n        dot-class="&#123;&#123;=dotClass&#125;&#125;"&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;1&lt;/div&gt;\n            &lt;div class="bg"&gt;2&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;3&lt;/div&gt;\n            &lt;div class="bg"&gt;4&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n        &lt;mx-carousel.panel class="clearfix"&gt;\n            &lt;div class="bg"&gt;5&lt;/div&gt;\n            &lt;div class="bg"&gt;6&lt;/div&gt;\n        &lt;/mx-carousel.panel&gt;\n    &lt;/mx-carousel&gt;\n    &lt;i class="mc-iconfont arrow prev" id="&#123;&#123;=viewId&#125;&#125;_prev"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n    &lt;i class="mc-iconfont arrow next" id="&#123;&#123;=viewId&#125;&#125;_next"&gt;\n        &#38;&#35;xe61e;\n    &lt;/i&gt;\n&lt;/div&gt;</pre></div><div mxa="_zs_galleryac:g" class="_zs_galleryk _zs_galleryd _zs_gallerye"><div mxs="_zs_galleryac:f" class="_zs_galleryi">CSS Code</div><div class="_zs_galleryl" mx-success="'+e+'done({id:2})" mx-view="mx-copy/index?copyNode='+i(y)+'_text_2"><span mxa="_zs_galleryac:h" class="_zs_galleryn">'+s(f)+'</span><i mxs="_zs_galleryac:e" class="mc-iconfont _zs_gallerym">&#xe610;</i></div><pre mx-view="examples/hl" id="'+r(y)+'_text_2">\n.wrapper&#123;\n    position: relative;\n    padding-left: 10%;\n    padding-right: 10%;\n\n    .arrow&#123;\n        position: absolute;\n        top: 20px;\n        width: 40px;\n        height: 40px;\n        text-align: center;\n        line-height: 40px;\n        font-size: 32px;\n        color: @color-brand;\n        opacity: .5;\n        transition: all @duration;\n        cursor: pointer;\n\n        &:hover&#123;\n            opacity: .8;\n        &#125;\n\n        &.prev&#123;\n            left: 0;\n        &#125;\n\n        &.next&#123;\n            right: 0;\n            transform: rotate(180deg);\n        &#125;\n    &#125;\n    .bg &#123;\n        float: left;\n        width: 40%;\n        height: 80px;\n        margin-right: 5%;\n        margin-left: 5%;\n        line-height: 80px;\n        background-repeat: no-repeat;\n        background-position: center top;\n        background-color: @color-brand;\n        color: #fff;\n        text-align: center;\n        font-size: 20px;\n        font-weight: bold;\n        border-radius: 6px;\n    &#125;\n\n    .dot&#123;\n        margin-top: 8px;\n        background-color: @color-brand;\n    &#125;\n&#125;</pre></div></div></div>'},render:function(){this.updater.digest({viewId:this.id,dotClass:"_zs_gallerycQ"})}})});