'top@./vendor/clipboard.js';
let Magix = require('magix');
let $ = require('$');
module.exports = Magix.View.extend({
    init(extra) {
        let that = this;
        that.assign(extra);

        let owner = $('#' + that.id);
        let options = {};
        if (that['@{copy.node}']) {
            // 复制另外一个节点
            options = {
                target() {
                    return Magix.node(that['@{copy.node}']);
                }
            };

        } else {
            // 复制本节点信息
            options = {
                text(trigger) {
                    return extra.copyText;
                }
            };
        }

        let clipboard = new window.Clipboard(owner[0], options);
        clipboard.on('success', (e) => {
            e.clearSelection();
            owner.trigger('success');
        });
        clipboard.on('error', () => {
            owner.trigger('error');
        });
        that.capture('@{clipboard}', clipboard);
    },
    assign(ops) {
        this['@{copy.node}'] = ops.copyNode;
        return true;
    }
});