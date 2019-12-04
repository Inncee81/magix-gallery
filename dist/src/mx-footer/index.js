/*
    generate by magix-combine@3.11.28: https://github.com/thx/magix-combine
    author: kooboy_li@163.com
    loader: cmd_es
 */
define("mx-footer/index",["magix","../mx-util/view","../mx-header/data"],(require,exports,module)=>{
/*magix_1,View,Data*/

"use strict";
exports.__esModule = true;
var magix_1 = require("magix");
var View = require("../mx-util/view");
var Data = require("../mx-header/data");
magix_1["default"].applyStyle("_zs_gallery_mx-footer_index_","._zs_gallery_mx-footer_index_-footer {\n  padding: 30px 0;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line {\n  line-height: 28px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #333;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #999;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  position: relative;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:after,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text:after {\n  content: '';\n  position: absolute;\n  top: 1px;\n  right: 0;\n  width: 0;\n  height: 12px;\n  border-left: 1px solid #eee;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:last-child:after,\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text:last-child:after {\n  content: none;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line {\n  padding-top: 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img {\n  padding: 0 10px;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img ._zs_gallery_mx-footer_index_-line-img {\n  transition: opacity var(--duration);\n  opacity: 0.5;\n  border: none;\n  -webkit-filter: grayscale(100%);\n  -moz-filter: grayscale(100%);\n  -ms-filter: grayscale(100%);\n  -o-filter: grayscale(100%);\n  filter: grayscale(100%);\n  -webkit-filter: gray;\n          filter: gray;\n}\n._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-img-line ._zs_gallery_mx-footer_index_-line-link-img:hover ._zs_gallery_mx-footer_index_-line-img {\n  opacity: 1;\n  -webkit-filter: grayscale(0%);\n  -moz-filter: grayscale(0%);\n  -ms-filter: grayscale(0%);\n  -o-filter: grayscale(0%);\n  filter: grayscale(0%);\n  -webkit-filter: none;\n          filter: none;\n}\n@media screen and (max-width: 767px) {\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n  ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n    padding: 0 5px;\n  }\n}\n._zs_gallery_mx-footer_index_-products {\n  position: relative;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-products-line {\n  position: absolute;\n  left: 0;\n  bottom: -14px;\n  width: 100%;\n  height: 0;\n  border-bottom: 1px solid var(--color-border);\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-products-inner {\n  position: relative;\n  padding: 20px 180px 0 180px;\n  max-width: 100%;\n  margin: auto;\n  text-align: center;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo,\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  position: absolute;\n  top: 20px;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo {\n  left: 0;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-logo-icon {\n  position: relative;\n  width: 100px;\n  height: 160px;\n  overflow: hidden;\n  background-image: url(//img.alicdn.com/tfs/TB14rObn7PoK1RjSZKbXXX1IXXa-191-191.png);\n  background-size: 100%;\n  background-repeat: no-repeat;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  position: absolute;\n  top: 100px;\n  left: -50px;\n  font-size: 50px;\n  color: #666;\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  right: 0;\n  line-height: 22px;\n  color: rgba(33, 33, 33, 0.5);\n}\n._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode img {\n  width: 92px;\n  margin-bottom: 10px;\n}\n._zs_gallery_mx-footer_index_-products dl {\n  float: left;\n  line-height: 28px;\n}\n._zs_gallery_mx-footer_index_-products dl dt {\n  margin-bottom: 10px;\n  opacity: 0.5;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] {\n  background-color: #434459;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link,\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:visited,\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:focus,\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:active {\n  color: #fff;\n  opacity: 0.5;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:hover {\n  color: #fff;\n  opacity: 1;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text {\n  color: #fff;\n  opacity: 0.5;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-link:after,\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-footer ._zs_gallery_mx-footer_index_-line ._zs_gallery_mx-footer_index_-line-text:after {\n  border-left: 1px solid #fff;\n  opacity: 0.3;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-products-line {\n  display: none;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-logo ._zs_gallery_mx-footer_index_-mama-icon {\n  color: #fff;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products dl dt {\n  color: #fff;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products dl dd a {\n  color: #fff;\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products dl dd a:hover {\n  color: var(--color-brand);\n}\n[mx-view*=\"mx-footer/index\"][mx-view*=\"dark=true\"] ._zs_gallery_mx-footer_index_-products ._zs_gallery_mx-footer_index_-qrcode {\n  color: rgba(255, 255, 255, 0.5);\n}\n");
exports["default"] = View.extend({
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
} ; var $g = '', $_temp, $p = '', len = $$.len, width = $$.width, products = $$.products, textAlign = $$.textAlign, copyrights = $$.copyrights, simple = $$.simple; var $expr, $art, $line; try {
    $line = 1;
    $art = 'if len > 0';
    ;
    $expr = '<%if (len > 0) {%>';
    if (len > 0) {
        ;
        $p += '<div mxa="_zs_gallerycj:_" class="_zs_gallery_mx-footer_index_-products"><div class="_zs_gallery_mx-footer_index_-products-inner" style="width: ';
        $line = 3;
        $art = '=width';
        ;
        $p += ($expr = '<%=width%>', $e(width)) + 'px;"><div mxs="_zs_gallerycj:_" class="_zs_gallery_mx-footer_index_-logo"><div class="_zs_gallery_mx-footer_index_-logo-icon"><i class="mc-iconfont _zs_gallery_mx-footer_index_-mama-icon">&#xe61f;</i></div></div><div mxa="_zs_gallerycj:a" class="clearfix">';
        $line = 10;
        $art = 'each products as p';
        ;
        $expr = '<%for (var $art_irxvgjueog$art_i = 0, $art_cfqedqe$art_c = products.length; $art_irxvgjueog$art_i < $art_cfqedqe$art_c; $art_irxvgjueog$art_i++) {        var p = products[$art_irxvgjueog$art_i]%>';
        for (var $art_irxvgjueog$art_i = 0, $art_cfqedqe$art_c = products.length; $art_irxvgjueog$art_i < $art_cfqedqe$art_c; $art_irxvgjueog$art_i++) {
            var p = products[$art_irxvgjueog$art_i];
            $p += '<dl style="width: ';
            $line = 11;
            $art = '=(100 / len)';
            ;
            $p += ($expr = '<%=(100 / len)%>', $e((100 / len))) + '%;"><dt>';
            $line = 12;
            $art = '=p.title';
            ;
            $p += ($expr = '<%=p.title%>', $e(p.title)) + '</dt>';
            $line = 13;
            $art = 'each p.thirds as t';
            ;
            $expr = '<%for (var $art_ifokklmepwsh$art_i = 0, $art_objgahcry$art_obj = p.thirds, $art_cwzpixeb$art_c = $art_objgahcry$art_obj.length; $art_ifokklmepwsh$art_i < $art_cwzpixeb$art_c; $art_ifokklmepwsh$art_i++) {            var t = $art_objgahcry$art_obj[$art_ifokklmepwsh$art_i]%>';
            for (var $art_ifokklmepwsh$art_i = 0, $art_objgahcry$art_obj = p.thirds, $art_cwzpixeb$art_c = $art_objgahcry$art_obj.length; $art_ifokklmepwsh$art_i < $art_cwzpixeb$art_c; $art_ifokklmepwsh$art_i++) {
                var t = $art_objgahcry$art_obj[$art_ifokklmepwsh$art_i];
                $p += '<dd><a href="';
                $line = 15;
                $art = '=t.link';
                ;
                $p += ($expr = '<%=t.link%>', $e(t.link)) + '" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer">';
                $line = 15;
                $art = '=t.name';
                ;
                $p += ($expr = '<%=t.name%>', $e(t.name)) + '</a></dd>';
                $line = 17;
                $art = '/each';
                ;
                $expr = '<%}%>';
            }
            ;
            $p += '</dl>';
            $line = 19;
            $art = '/each';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += '</div><div mxs="_zs_gallerycj:a" class="_zs_gallery_mx-footer_index_-qrcode"><img src="//img.alicdn.com/tfs/TB1SDhUj.z1gK0jSZLeXXb9kVXa-1024-1024.png"><div>打开淘宝扫一扫</div><div>下载阿里妈妈APP</div></div></div><div mxs="_zs_gallerycj:b" class="_zs_gallery_mx-footer_index_-products-line"></div></div>';
        $line = 29;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '<div class="_zs_gallery_mx-footer_index_-footer" style="text-align: ';
    $line = 30;
    $art = '=textAlign';
    ;
    $p += ($expr = '<%=textAlign%>', $e(textAlign)) + ';"><div mxa="_zs_gallerycj:b" class="_zs_gallery_mx-footer_index_-line"><a mxs="_zs_gallerycj:c" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com">关于阿里妈妈</a><a mxs="_zs_gallerycj:d" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//jubao.alibaba.com">廉正举报</a><a mxs="_zs_gallerycj:e" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-1.htm">联系客服</a><a mxs="_zs_gallerycj:f" class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alimama.com/home/about-4.htm">意见反馈</a>';
    $line = 36;
    $art = 'each copyrights as item';
    ;
    $expr = '<%for (var $art_ijncpecgst$art_i = 0, $art_cjwwcfdeq$art_c = copyrights.length; $art_ijncpecgst$art_i < $art_cjwwcfdeq$art_c; $art_ijncpecgst$art_i++) {    var item = copyrights[$art_ijncpecgst$art_i]%>';
    for (var $art_ijncpecgst$art_i = 0, $art_cjwwcfdeq$art_c = copyrights.length; $art_ijncpecgst$art_i < $art_cjwwcfdeq$art_c; $art_ijncpecgst$art_i++) {
        var item = copyrights[$art_ijncpecgst$art_i];
        $p += ' ';
        $line = 37;
        $art = 'if item.link';
        ;
        $expr = '<%if (item.link) {%>';
        if (item.link) {
            ;
            $p += '<a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="';
            $line = 38;
            $art = '=item.link';
            ;
            $p += ($expr = '<%=item.link%>', $e(item.link)) + '">';
            $line = 38;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</a>';
            $line = 39;
            $art = 'else';
            ;
            $expr = '<%}    else {%>';
        }
        else {
            ;
            $p += '<span mxa="_zs_gallerycj:c" class="_zs_gallery_mx-footer_index_-line-text">';
            $line = 40;
            $art = '=item.text';
            ;
            $p += ($expr = '<%=item.text%>', $e(item.text)) + '</span>';
            $line = 41;
            $art = '/if';
            ;
            $expr = '<%}%>';
        }
        ;
        $p += ' ';
        $line = 42;
        $art = '/each';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
    $line = 44;
    $art = 'if !simple';
    ;
    $expr = '<%if (!simple) {%>';
    if (!simple) {
        ;
        $p += '<div mxs="_zs_gallerycj:g" class="_zs_gallery_mx-footer_index_-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alibabagroup.com/cn/global/home">阿里巴巴集团</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.taobao.com">淘宝网</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.tmall.com">天猫</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//ju.taobao.com">聚划算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliexpress.com">全球速卖通</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibaba.com">阿里巴巴国际交易市场</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.1688.com">1688</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.fliggy.com">飞猪</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.aliyun.com">阿里云计算</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.alios.cn">AliOS</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//aliqin.tmall.com">阿里通信</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.autonavi.com/">高德</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="http://www.uc.cn/">UC</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//open.taobao.com/">开放平台</a></div><div mxs="_zs_gallerycj:h" class="_zs_gallery_mx-footer_index_-line"><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.umeng.com/">友盟</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.xiami.com">虾米</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alibabaplanet.com">阿里星球</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.dingtalk.com/?lwfrom=20150130163937547">钉钉</a><a class="_zs_gallery_mx-footer_index_-line-link" target="_blank" rel="noopener noreferrer" href="//www.alipay.com">支付宝</a></div><div mxs="_zs_gallerycj:i" class="_zs_gallery_mx-footer_index_-img-line"><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i2/T1C3z7FudfXXcsE9Te-40-42.png" alt="网监局"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://122.224.75.236/wzba/login.do?method=hdurl&doamin=http://www.alimama.com.cn&id=330108000003117&SHID=1223.0AFF_NAME=com.rouger.gs.main.UserInfoAff&AFF_ACTION=qyhzdetail&PAGE_URL=ShowDetail"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" src="//img.alicdn.com/tps/i1/T1KRgkFxdXXXaqJHTe-35-42.png"></a><a class="_zs_gallery_mx-footer_index_-line-link-img" target="_blank" rel="noopener noreferrer" href="http://www.pingpinganan.gov.cn/"><img class="_zs_gallery_mx-footer_index_-line-img" align="absmiddle" alt="网监局" src="//img.alicdn.com/tps/i4/T1VVv9FABeXXbtCInf-38-42.png"></a></div>';
        $line = 79;
        $art = '/if';
        ;
        $expr = '<%}%>';
    }
    ;
    $p += '</div>';
}
catch (ex) {
    var msg = 'render view error:' + (ex.message || ex);
    if ($art)
        msg += '\r\n\tsrc art:{{' + $art + '}}\r\n\tat line:' + $line;
    msg += '\r\n\t' + ($art ? 'translate to:' : 'expr:');
    msg += $expr + '\r\n\tat file:mx-footer/index.html';
    throw msg;
} return $p; },
    init: function (extra) {
        this.updater.snapshot();
        this.assign(extra);
    },
    assign: function (extra) {
        var that = this;
        var altered = that.updater.altered();
        // 宽度范围修正
        var width = extra.width || 1000;
        var maxWidth = window.innerWidth;
        if (+width > maxWidth) {
            width = maxWidth;
        }
        // 是否需要产品线信息
        var needProducts = (extra.products + '' === 'true'), products = [];
        if (needProducts) {
            Data.products.forEach(function (item) {
                item.seconds.forEach(function (sec) {
                    if (!sec.title) {
                        sec.title = item.title;
                    }
                });
                products = products.concat(item.seconds);
            });
        }
        var alimamaCopyrights = [{
                text: '法律声明',
                link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
            }, {
                text: '阿里妈妈版权所有 2007-现在'
            }, {
                text: 'ICP证：浙B2-20070195',
                link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
            }];
        var taobaoCopyrights = [{
                text: '法律声明',
                link: 'https://terms.alicdn.com/legal-agreement/terms/suit_bu1_ali_mama_division/suit_bu1_ali_mama_division201709111812_13128.html'
            }, {
                text: 'Taobao.com版权所有 2003-现在'
            }, {
                text: 'ICP证：浙B2-20080224-1',
                link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
            }];
        var tanxCopyrights = [{
                text: '隐私权保护',
                link: 'http://tanx.com/web/opt.html'
            }, {
                text: 'Tanx.com版权所有'
            }, {
                text: '浙ICP备09109183号-10',
                link: 'http://www.beian.miit.gov.cn?spm=a21bo.2017.1997523009.41.5af911d9xlnxIr'
            }];
        var copyrights = extra.copyrights || [];
        if (copyrights.length == 0) {
            var alimamaReg = /alimama\.(com|net)/i, tanxReg = /tanx\.(com|net)/i, taobaoReg = /taobao\.(com|net)/i;
            if (alimamaReg.test(window.location.href)) {
                copyrights = alimamaCopyrights;
            }
            else if (taobaoReg.test(window.location.href)) {
                copyrights = taobaoCopyrights;
            }
            else if (tanxReg.test(window.location.href)) {
                copyrights = tanxCopyrights;
            }
            else {
                copyrights = alimamaCopyrights;
            }
        }
        var year = (new Date()).getFullYear();
        this.updater.set({
            simple: (extra.mode === 'simple'),
            products: products,
            len: products.length,
            width: width,
            textAlign: extra.textAlign || 'center',
            copyrights: copyrights
        });
        if (!altered) {
            altered = that.updater.altered();
        }
        if (altered) {
            that.updater.snapshot();
            return true;
        }
        return false;
    },
    render: function () {
        this.updater.digest();
    }
});

});