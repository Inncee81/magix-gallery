/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-btn/__test__/1",["magix","__test__/example","$","mx-copy/index","__test__/hl"],(require,exports,module)=>{
/*Magix,Base,$*/
require("mx-copy/index");
require("__test__/hl");
var Magix = require("magix");
var Base = require("__test__/example");
var $ = require("$");
Magix.applyStyle("_zs_gallery_mx-btn___test___index_","._zs_gallery_mx-btn___test___index_-dark {\n  padding: 20px;\n  background-color: var(--app-bg);\n}\n._zs_gallery_mx-btn___test___index_-cont {\n  padding: 20px 0;\n}\n");
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
} ; var $g = '', $_temp, $p = '', icon = $$.icon, viewId = $$.viewId, text1 = $$.text1, text2 = $$.text2; var $expr, $art, $line; try {
    $p += '<div mxa="_zs_galleryV:_" class="_zs_gallery___test___layout_-example"><div mxa="_zs_galleryV:a" class="_zs_gallery___test___layout_-eg-content"><div mxa="_zs_galleryV:b" class="_zs_gallery_mx-btn___test___index_-cont"><a mxs="_zs_galleryV:_" href="javascript:;" brand="true" class="mx-btn btn-brand mr40 mb20" content="品牌色按钮">品牌色按钮</a><a mxs="_zs_galleryV:a" href="javascript:;" brand="true" class="mx-btn btn-brand btn-small mb20" small="true" content="小号品牌色按钮">小号品牌色按钮</a><br mxs="_zs_galleryV:b"/><a mxa="_zs_galleryV:c" href="javascript:;" brand="true" class="mx-btn btn-brand mr60 mb20"><i mxs="_zs_galleryV:c" class="mc-iconfont">&#xe731;</i>品牌色按钮<span mxa="_zs_galleryV:d" class="mx-tag btn-tag"><span mxs="_zs_galleryV:d" class="mx-tag-arrow btn-tag-arrow"></span><span mxa="_zs_galleryV:e" class="mx-tag-name">';
    $line = 7;
    $art = '!icon';
    ;
    $p += ($expr = '<%!icon%>', $n(icon)) + '</span></span></a><a mxs="_zs_galleryV:e" href="javascript:;" brand="true" class="mx-btn btn-brand mb20" content="品牌色按钮">品牌色按钮<span class="mx-tag btn-tag"><span class="mx-tag-arrow btn-tag-arrow"></span><span class="mx-tag-name">New</span></span></a></div></div><div mxa="_zs_galleryV:f" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryV:f" class="_zs_gallery___test___layout_-eg-title">HTML Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:1})" mx-view="mx-copy/index?copyNode=';
    $line = 15;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_1"><span mxa="_zs_galleryV:g" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 17;
    $art = '!text1';
    ;
    $p += ($expr = '<%!text1%>', $n(text1)) + '</span><i mxs="_zs_galleryV:g" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 20;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_1">\n&lt;mx-btn brand="true" content="品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" small="true" content="小号品牌色按钮"/&gt;\n\n&lt;mx-btn brand="true" tag-content="&#123;&#123;!icon&#125;&#125;"&gt;\n    &lt;i class="mc-iconfont"&gt;&#38;&#35;xe731;&lt;/i&gt;品牌色按钮\n&lt;/mx-btn&gt;\n\n&lt;mx-btn brand="true" content="品牌色按钮" tag-content="New"/&gt;\n        </pre></div><div mxa="_zs_galleryV:h" class="_zs_gallery___test___layout_-eg-desc"><div mxs="_zs_galleryV:h" class="_zs_gallery___test___layout_-eg-title">JS Code</div><div class="_zs_gallery___test___layout_-desc-oper" mx-success="' + $viewId + 'done({id:2})" mx-view="mx-copy/index?copyNode=';
    $line = 34;
    $art = '=viewId';
    ;
    $p += ($expr = '<%!$eu(viewId)%>', $eu(viewId)) + '_text_2"><span mxa="_zs_galleryV:i" class="_zs_gallery___test___layout_-desc-tip">';
    $line = 36;
    $art = '!text2';
    ;
    $p += ($expr = '<%!text2%>', $n(text2)) + '</span><i mxs="_zs_galleryV:g" class="mc-iconfont _zs_gallery___test___layout_-desc-icon">&#xe610;</i></div><pre mx-view="__test__/hl" id="';
    $line = 39;
    $art = '=viewId';
    ;
    $p += ($expr = '<%=viewId%>', $e(viewId)) + '_text_2">\nlet Magix = require(\'magix\');\nlet $ = require(\'$\');\nMagix.applyStyle(\'@index.less\');\n\nmodule.exports = Magix.View.extend(&#123;\n    tmpl: \'@index.html\',\n    render() &#123;\n        this.updater.digest(&#123;\n            icon: \'&lt;i class="mc-iconfont"&gt;&#38;&#35;xe601;&lt;/i&gt;\'\n        &#125;);\n    &#125;\n&#125;);\n        </pre></div></div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-btn/__test__/1.html';
    throw msg;
} return $p; },
    render: function () {
        this.updater.digest({
            icon: '<i class="mc-iconfont">&#xe601;</i>'
        });
    }
});

});