let Magix = require('magix');
let Base = require('__test__/example');
let $ = require('$');
Magix.applyStyle('@1.less');

module.exports = Base.extend({
    tmpl: '@1.html',
    render() {
        this.updater.digest({});
    }
});