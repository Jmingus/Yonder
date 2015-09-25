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

$(document).ready(function(){
  var $form = $('#form');
  var $inputName = $('#inputName');
  var $inputDay = $('#inputDay');
  var $inputTime= $('#inputTime');
  var $inputArea = $('#inputArea');
  var $inputType = $('#inputType');

  var newEvent = new EventCollection();


  function onFormSubmit(e){
    e.preventDefault();
    newEvent.add({
      name: $inputName.val(),
      day: parseInt($inputDay.val()),
      time: $inputTime.val(),
      location: parseInt($inputArea.val()),
      type: parseInt($inputType.val())

    });
    console.log($inputName.val());
    console.log(parseInt($inputDay.val()));
    console.log(parseInt($inputArea.val()));
    console.log(parseInt($inputType.val()));
  }

  $form.on('submit',onFormSubmit);




});
var app = new Router();
Backbone.history.start();