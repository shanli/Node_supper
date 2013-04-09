var site = require('./controller/index.js');
exports = module.exports = function(app) {
    app.get('/', site.index);
    app.get('/index', site.index);
    app.get('/list', site.list);
    app.get('/today', site.today);
    app.get('/discuss', site.discuss);
    app.get('/user', site.user);
    app.get('*', site.nofind);
}