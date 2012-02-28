var mailer = require("../mailer/contact-mailer")
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' });
};

exports.about = function(req, res){
  res.render('about', { title: 'About' });
};

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Get in Touch' });
};

exports.contactPost = function(req, res){
  res.render('contact', { title: 'Get in Touch' });
  mailer.send_mail(req.body.name, req.body.message.email_address, req.body.message.body, req.body.message.budget);
};

exports.services = function(req, res){
  res.render('services', { title: 'Services' });
};
