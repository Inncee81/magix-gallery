let Magix = require('magix');
let $ = require('$');
Magix.applyStyle('@cross.less');

module.exports = Magix.View.extend({
    tmpl: '@init.html',
    render() {
        this.updater.digest({
            viewId: this.id
        });
    }
});