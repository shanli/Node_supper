var site = require('./controller/index.js');
exports = module.exports = function(app) {
    app.get('/', site.index);
    app.get('/index', site.index);
    app.get('/list', site.list);
}