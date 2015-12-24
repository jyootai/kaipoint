/**
 * @file app.js
 * @author jyootai
 * @description app.js 项目初始模块
 */
define([
  'angular',
  'angular-couch-potato',
  'angular-ui-router',
  'lodash',
], function (angular, couchPotato) {
  var app = angular.module('app', [
      'scs.couch-potato',
      'ui.router',
  ], ['$compileProvider', function ($compileProvider) {
      $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|data):/);
  }]);

  //azyload, couchPotato托管app
  couchPotato.configureApp(app);

  return app;
});
