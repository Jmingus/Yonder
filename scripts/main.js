'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var Router = Backbone.Router.extend({
  routes: {
    '': 'landingPage',
    'maps': 'mapsPage',
    'following': 'followingPage'
  },
  landingPage: function(){

  },
  mapsPage: function(){

  },
  followingPage: function(){

  }
});

var app = new Router();
Backbone.history.start();

$(document).ready(function(){

});
