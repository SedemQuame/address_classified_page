// jshint esversion:7
exports.about = (request, response, next) => {
    response.render('about.views.ejs');
};

exports.services = (request, response, next) => {
    response.render('services.views.ejs');
};

exports.contact = (request, response, next) => {
    response.render('contact.views.ejs', {msg: null});
};