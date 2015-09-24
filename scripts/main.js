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
    $('section').hide()
    $('#landingPage').show()
  },
  mapsPage: function(){
    $('section').hide()
    $('#mapsPage').show()
  },
  followingPage: function(){
    $('section').hide()
    $('#followingPage').show()
  }
});

var app = new Router();
Backbone.history.start();

$(document).ready(function(){

});
