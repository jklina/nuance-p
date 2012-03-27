var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "bot@madewithnuance.com",
        pass: "sorrydave"
    }
});

exports.send_mail = function (name, from, body, budget) {
  
  var mailOptionsToNuance = {
      transport: transport, // transport method to use
      from: name + "<" + from + ">", // sender address
      to: "hello@madewithnuance.com", // list of receivers
      subject: "You Have a New Contact Request", // Subject line
      html: "<p>A new contact has arrived!</p>" +
            "<p><b>Name: </b>" + name + "</p>" +
            "<p><b>E-mail: </b>" + from + "</p>" +
            "<p><b>Budget: </b>" + budget + "</p>" +
            "<p><b>Message: </b></p>" +
            "<p>" + body + "</p>"
  }

  var mailOptionsToIssuer = {
      transport: transport, // transport method to use
      from: "Nuance<hello@madewithnuance.com>", // sender address
      to: from, // list of receivers
      subject: "Thank You for Contacting Us", // Subject line
      text: "Hello, /n/nWe just wanted to let you know we appreciate you reaching out to us and that we will get back to you as soon as possible. /n/nSincerely, /nThe Nuance Team", // plaintext body
      html: "<p>Hello,</p> <p>We just wanted to let you know we appreciate you reaching out to us and that we will get back to you as soon as possible.</p><p>Sincerely, </br>The Nuance Team</p>" // html body
  }

  nodemailer.sendMail(mailOptionsToNuance, function(error){
    if(error){
        console.log(error);
    }else{
        nodemailer.sendMail(mailOptionsToIssuer, function(error){
          if(error) {
            console.log(error)
          } else {
            console.log("Message sent!")
          }
        });
        console.log("Message sent!");
    }
    transport.close(); // lets shut down the connection pool
  });

};

