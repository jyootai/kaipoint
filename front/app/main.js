/**
 * @file main.js
 * @author jyootai
 * @description main.js 项目脚本的入口文件
 */

// requirejs config
var configObj = {
  waitSeconds: 0,
  baseUrl: '../app',
  paths: {
    'text': '../vendor/requirejs/text',
    'angular': '../vendor/angular/angular',
    'angular-deferred-bootstrap': '../vendor/angular-deferred-bootstrap/deferred-bootstrap',
    'angular-ui-router': '../vendor/angular-ui-router/angular-ui-router',
    'angular-couch-potato': '../vendor/angular-couch-potato/angular-couch-potato',
    'lodash': '../vendor/lodash/lodash',
    'jquery': '../vendor/jquery/jquery'
  },
  shim: {
    'angular': {
      exports: 'angular',
      deps: ['jquery']
    },
    'angular-deferred-bootstrap': {
      deps: ['angular'],
      exports: 'deferredBootstrap'
    },
    'angular-couch-potato': {
      deps: ['angular']
    },
    'angular-ui-router': {
      deps: ['angular']
    },
    'lodash': {
      exports: '_'
    }
  }
};
require.config(configObj);

require([
  'app',
  'angular',
  'angular-deferred-bootstrap'
], function (app, angular, deferredBootstrap) {

  window.deferredBootstrapper.bootstrap({
    element: document.body,
    module: app.name,
  });
});
