let Magix = require('magix');
let $ = require('$');

module.exports = Magix.View.extend({
    tmpl: '@anim-expand.html',
    render() {
        this.updater.digest({});
    }
});