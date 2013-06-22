/**
 * Module dependencies
 */
var debug = require('simple-debug')('consulate-google')
  , passport = require('passport')
  , GoogleStrategy = require('passport-google').Strategy;

/**
 * Google Exchange Plugin
 */

module.exports = function(options, getUserByGoogleOrCreate) {
  if (!getUserByGoogleOrCreate) throw new Error('`getUserByGoogleOrCreate` callback required for `consulate-google`');

  var path = options.path || '/login/google';
  delete options.path;

  debug('registering google passport strategy with options', options)

  passport.use(new GoogleStrategy(options, getUserByGoogleOrCreate));

  return function(app) {
    app.get(path, app.authenticate('google'), app.viewCallback('login'));
  };
};
