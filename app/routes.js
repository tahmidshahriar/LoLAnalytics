module.exports = function(app) {
  // application -------------------------------------------------------------
  app.get('*', function(req, res) {
    res.send('./public/index.html');
  });
};