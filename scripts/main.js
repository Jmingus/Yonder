'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var EventCollection = require('./collections/EventCollection');
var EventModel = require('./models/EventModel');
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

$(document).ready(function(){
	var newEvent = new EventCollection();
	

});
var app = new Router();
Backbone.history.start();