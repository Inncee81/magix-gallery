let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@6.html',
    render() {
        this.updater.digest();
    }
});