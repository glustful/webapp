// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic','starter.services']);
var SETTING = {
BaseUrl:'http://192.168.1.199/',
ApiUrl:'http://192.168.1.199:9010/api',
ImgUrl:'http://img.iyookee.cn/',
eventApiUrl:'http://192.168.1.199:16857/API'
};
app.run(function($ionicPlatform) {
     $ionicPlatform.ready(function() {
                          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                          // for form inputs)
                          if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                          cordova.plugins.Keyboard.disableScroll(true);
                          
                          }
                          if (window.StatusBar) {
                          // org.apache.cordova.statusbar required
                          StatusBar.styleLightContent();
                          }
                          });
        });

app.config(function($stateProvider, $urlRouterProvider) {
        
        // Ionic uses AngularUI Router which uses the concept of states
        // Learn more here: https://github.com/angular-ui/ui-router
        // Set up the various states which the app can be in.
        // Each state's controller can be found in controllers.js
        $stateProvider
        
        // setup an abstract state for the tabs directive
        .state('tab', {
               url: '/tab',
               abstract: true,
               templateUrl: 'templates/tabs.html'
               })
        
        // Each tab has its own nav history stack:
        
        .state('tab.active', {
               url: '/active',
               views: {
               'tab-active': {
               templateUrl: 'templates/tab-active.html',
               controller: 'ActiveCtrl'
               }
               }
               })
        
        .state('tab.house', {
               url: '/house',
               views: {
               'tab-house': {
               templateUrl: 'templates/tab-house.html',
               controller: 'HouseCtrl'
               }
               }
               })
        .state('tab.house-detail', {
               url: '/house/:houseId',
               views: {
               'tab-house': {
               templateUrl: 'templates/house-detail.html',
               controller: 'HouseDetailCtrl'
               }
               }
               })
        
        .state('tab.agent', {
               url: '/agent',
               views: {
               'tab-agent': {
               templateUrl: 'templates/tab-agent.html',
               controller: 'AgentCtrl'
               }
               }
               })
        .state('tab.me', {
               url: '/me',
               views: {
               'tab-me': {
               templateUrl: 'templates/tab-me.html',
               controller: 'MeCtrl'
               }
               }
               });
        
        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('/tab/active');
        
});


