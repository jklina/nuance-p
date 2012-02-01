
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About' })
};

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio' })
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Get in Touch' })
};

exports.services = function(req, res){
  res.render('services', { title: 'Services' })
};
