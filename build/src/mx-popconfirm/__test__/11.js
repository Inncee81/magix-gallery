/*
    generate by magix-combine@3.11.10: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-popconfirm/__test__/11",["magix","__test__/example","mx-dialog/index","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,Dialog,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var Dialog = require("mx-dialog/index"); //mixins dialog
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref) { if (!$$ref)
    $$ref = $$; var $g = '', $_temp, $p = '', $em = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er = /[&<>"'`]/g, $n = function (v) { return '' + (v == null ? '' : v); }, $ef = function (m) { return "&" + $em[m] + ";"; }, $e = function (v) { return $n(v).replace($er, $ef); }, $um = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf = function (m) { return $um[m]; }, $uq = /[!')(*]/g, $eu = function (v) { return encodeURIComponent($n(v)).replace($uq, $uf); }, $qr = /[\\'"]/g, $eq = function (v) { return $n(v).replace($qr, '\\$&'); }, viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybf:_" class="_zs_gallery___test___base_-example"><div mxs="_zs_gallerybf:_" class="_zs_gallery___test___base_-eg-content"><div class="lh32 color-brand">异常情况说明：</div><div class="lh22">popover的小浮层追加到body绝对定位，如果其可滚动父元素不是window，在内容展开的情况下滚动父元素，定位会出错。此时可手动指定其滚动父元素scroll-wrapper，以下以浮层使用场景示例：</div><div class="lh22 mb5">1. 浮层内容未限制高度时，组件本身做了兼容，不需要额外指定scroll-wrapper</div><div class="pl15 mb5"><a href="javascript:;" mx-click="' + $viewId + 'open1()" class="btn btn-brand">未限制滚动高度的浮层</a></div><div class="lh22 mb5">2. 浮层中间区域滚动</div><div class="pl15 mb5"><a href="javascript:;" mx-click="' + $viewId + 'open2()" class="btn btn-brand">popover在滚动区域内</a></div></div><div mxa="_zs_gallerybf:a" class="_zs_gallery___test___base_-eg-desc"><div mxs="_zs_gallerybf:a" class="_zs_gallery___test___base_-eg-title">浮层中使用popover</div><div class="_zs_gallery___test___base_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybf:b" class="_zs_gallery___test___base_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += '' + ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybf:b" class="mc-iconfont _zs_gallery___test___base_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += '' + ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-popover class="btn"\n    scroll-wrapper="&#123;&#123;=id&#125;&#125;"\n    content="提示内容"&gt;文案&lt;/mx-popover&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-popconfirm/__test__/11.html';
    throw msg;
} return $p; },
    mixins: [Dialog],
    render: function () {
        this.updater.digest();
    },
    'open1<click>': function (e) {
        this.mxDialog('mx-popconfirm/__test__/multi', {
            number: 1
        }, {
            width: 800
        });
    },
    'open2<click>': function (e) {
        this.mxDialog('mx-popconfirm/__test__/multi2', {
            number: 1
        }, {
            width: 800,
            height: 300
        });
    }
});

});