/*
    generate by magix-combine@3.11.21: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-copy/__test__/index",["magix","__test__/example","$","mx-title/second","../index","__test__/hl","__test__/api"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-title/second");
require("../index");
require("__test__/hl");
require("__test__/api");
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
} if (!$i) {
    $i = function (ref, v, k, f) { for (f = ref[$g]; --f;)
        if (ref[k = $g + f] === v)
            return k; ref[k = $g + ref[$g]++] = v; return k; };
} ; var $g = '', $_temp, $p = '', viewId = $$.viewId, success = $$.success, text2 = $$.text2, text3 = $$.text3, options = $$.options; var $expr, $art, $line; try {
    $p += '<div mxs="_zs_gallery::_" mx-view="mx-title/second?content=%E4%BD%BF%E7%94%A8%E7%A4%BA%E4%BE%8B"></div><div mxv mxa="_zs_gallery::_" class="_zs_gallery___test___layout_-example"><div mxv mxa="_zs_gallery::a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_gallery::b" class="mb20"><div class="btn btn-brand" mx-success="' + $viewId + 'done2()" mx-view="mx-copy/index?copyNode=';
    $line = 5;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1">复制</div>';
    $line = 7;
    $art = 'if success';
    ;
    $expr = '<%if (success) {%>';
    if (success) {
        ;
        $p += '<span mxs="_zs_gallery::a" class="color-green ml20">复制成功</span>';
        $line = 9;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div><textarea cols="30" rows="4" id="';
    $line = 11;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">Magix棒棒的！</textarea></div><div mxa="_zs_gallery::c" class="clearfix"><div mxa="_zs_gallery::d" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half"><div mxs="_zs_gallery::b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 16;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_gallery::e" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 18;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_gallery::c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 21;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\n&lt;div class="mb20"&gt;\n    &lt;mx-copy copy-node="&#123;&#123;=viewId&#125;&#125;_text_1" class="btn btn-brand"\n        mx-success="done()"&gt;复制&lt;/mx-copy&gt;\n    &#123;&#123;if success&#125;&#125;\n    &lt;span class="color-green ml20"&gt;复制成功&lt;/span&gt;\n    &#123;&#123;/if&#125;&#125;\n&lt;/div&gt;\n&lt;textarea cols="30" rows="4" id="&#123;&#123;=viewId&#125;&#125;_text_1"&gt;Magix棒棒的！&lt;/textarea&gt;</pre></div><div mxa="_zs_gallery::f" class="_zs_gallery___test___layout_-eg-desc _zs_gallery___test___layout_-half _zs_gallery___test___layout_-half-right"><div mxs="_zs_gallery::b" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:3})" mx-view="mx-copy/index?copyNode=';
    $line = 33;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_3"><span mxa="_zs_gallery::g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 35;
    $art = '!text3';
    ;
    $p += ($expr = '<%!text3%>', $n(text3)) + '</span><i mxs="_zs_gallery::c" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 38;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_3">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            viewId: this.id\n        &#125;);\n    &#125;,\n    \'done&lt;success&gt;\'(e) &#123;\n        this.updater.digest(&#123;\n            success: true\n        &#125;)\n    &#125;\n&#125;);</pre></div></div></div><div mxs="_zs_gallery::d" mx-view="mx-title/second?content=API"></div><div mxv="options" mx-view="__test__/api?options=';
    $line = 60;
    $art = '@options';
    ;
    $p += ($expr = '<%@options%>', $i($$ref, options)) + '"></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-copy/__test__/index.html';
    throw msg;
} return $p; },
    render: function () {
        var options = [{
                key: 'copy-node',
                desc: '需要复制的节点id',
                type: 'string',
                def: ''
            }];
        this.updater.digest({
            options: options
        });
    },
    'done2<success>': function (e) {
        this.updater.digest({
            success: true
        });
    }
});

});