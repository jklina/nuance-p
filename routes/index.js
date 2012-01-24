
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'About' })
};


exports.about = function(req, res){
  res.render('about', { title: 'About' })
};
