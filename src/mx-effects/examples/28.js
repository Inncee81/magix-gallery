let Magix = require('magix');
let Base = require('examples/example');
let $ = require('$');

module.exports = Base.extend({
    tmpl: '@28.html',
    render() {
        this.updater.digest();
    }
});