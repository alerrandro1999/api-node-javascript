const { MASTER_DIR } = require("../helpers/constants");

const index = function(req, res) {
   return res.render('home', {layout: MASTER_DIR, title: 'home'});
};

module.exports = { index };