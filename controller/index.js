
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};
exports.list = function(req, res){
    res.render('list', { title: 'list' });
};
exports.today = function(req, res){
    res.render('today', { title: 'today' });
};
exports.discuss = function(req, res){
    res.render('discuss', { title: 'dis' });
};
exports.user = function(req, res){
    res.render('user', { title: 'user' });
};
exports.nofind = function(req, res){
    res.render('404', { title: '404' });
};
