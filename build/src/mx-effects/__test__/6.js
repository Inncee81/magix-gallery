/*
    generate by magix-combine@3.11.26: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-effects/__test__/6",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
module.exports = Base.extend({
    tmpl: function ($$, $viewId, $$ref, $e, $n, $eu, $i, $eq) { if (!$$ref)
    $$ref = $$; if (!$n) {
    var $em_1 = { '&': 'amp', '<': 'lt', '>': 'gt', '"': '#34', '\'': '#39', '`': '#96' }, $er_1 = /[&<>"'`]/g, $ef_1 = function (m) { return "&" + $em_1[m] + ";"; };
    $n = function (v) { return '' + (v == null ? '' : v); };
    $e = function (v) { return $n(v).replace($er_1, $ef_1); };
} if (!$eu) {
    var $um_1 = { '!': '%21', '\'': '%27', '(': '%28', ')': '%29', '*': '%2A' }, $uf_1 = function (m) { return $um_1[m]; }, $uq_1 = /[!')(*]/g;
    $eu = function (v) { return encodeURIComponent($n(v)).replace($uq_1, $uf_1); };
} if (!$eq) {
    var $qr_1 = /[\\'"]/g;
    $eq = function (v) { return $n(v).replace($qr_1, '\\$&'); };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, text1 = $$.text1; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_gallerybC:_" class="_zs_gallery___test___layout_-example"><div mxs="_zs_gallerybC:_" class="_zs_gallery___test___layout_-eg-content"><div class="mx-notice mb20" style="color:rgb(81, 163, 0);background-color:rgba(81, 163, 0, 0.2);text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>自定义颜色提示</div></div><div class="mx-notice mx-notice-border mb20" style="color:rgb(81, 163, 0);background-color:rgba(81, 163, 0, 0.2);border-color:rgb(81, 163, 0);text-align: left"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>带边框自定义颜色提示</div></div><div text-align="right" class="mx-notice mx-notice-border mb20" style="color:rgb(81, 163, 0);background-color:rgba(81, 163, 0, 0.2);border-color:rgb(81, 163, 0);text-align: right"><div class="mx-notice-inner mx-notice-inner-with"><i class="mc-iconfont mx-notice-icon">&#xe6ad;</i>带边框自定义颜色居右提示</div></div></div><div mxa="_zs_gallerybC:a" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_gallerybC:a" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 18;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_gallerybC:b" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 20;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_gallerybC:b" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 23;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="自定义颜色提示"/&gt;\n\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="带边框自定义颜色提示" \n    border="true"/&gt;\n\n&lt;mx-effects.notice \n    color="rgb(81, 163, 0)" \n    content="带边框自定义颜色居右提示" \n    text-align="right" \n    border="true"/&gt;</pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-effects/__test__/6.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest();
    }
});

});