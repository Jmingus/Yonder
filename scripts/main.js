'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var EventCollection = require('./collections/EventCollection');
<<<<<<< HEAD
var EventView= require('./views/EventView');

=======
>>>>>>> ace60180d3d49049033f7c669e49b8b014fe6042
var EventModel = require('./models/EventModel');

var UserCollection = require('./collections/UserCollection');
var UserModel = require('./models/UserModel');
var UserView = require('./views/UserView')

//Router
var Router = Backbone.Router.extend({
  routes: {
    '': 'landingPage',
    'maps': 'mapsPage',
    'following': 'followingPage'
  },
  landingPage: function(){
    $('section').hide()
    $('#landingPage').show()
    $('#landingPage').append('<form id="username">'+
      '<input type="text">'+
      '<label><input type="checkbox" name="music-checkbox" value="music">Music</label>'+
      '<label><input type="checkbox" name="athletics-checkbox" value="athletics">Athletics</label>'+
      '<label><input type="checkbox" name="tech-checkbox" value="tech">Tech</label>'+
      '<label><input type="checkbox" name="food-checkbox" value="food">Food</label>'+
      '<label><input type="checkbox" name="personal-checkbox" value="personal">Personal</label>'+
      '</form>')
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

//Google Maps Api Stuff

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 30.2669444, lng: -97.7427778},
    zoom: 18
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      map.setCenter(pos);
      // var location = new google.maps.LatLng(pos.lat,pos.lng);
      // var request = {
      //   location: location,
      //   radius: '10'
      // }
      // var service = new google.maps.places.PlacesService(map);
      // service.nearbySearch(request)
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ? 'Error: The Geolocation service failed.' :
    'Error: Your browser doesn\'t support geolocation.');
}
google.maps.event.addDomListener(window, 'load', initMap)
//DOM Code
$(document).ready(function(){
  var $form = $('#form');
  var $inputName = $('#inputName');
  var $inputDay = $('#inputDay');
  var $inputTime= $('#inputTime');
  var $inputArea = $('#inputArea');
  var $inputType = $('#inputType');

<<<<<<< HEAD
  var newEvents = new EventCollection();
=======
  var newEvent = new EventCollection();

//UserView
  var userCollection = new UserCollection();

  $('#username').submit(function(e){
    e.preventDefault
    console.log($('#username > input').val())

    userCollection.create({
      username: $('#username > input').val()
    });
    console.log('Username Posted')
  })

  userCollection.on('add', function(userEvents){
    var x = new UserView({model: userEvents})
    $('#landingPage').append(x.$el);
    console.log(x.$el)
  })

  userCollection.fetch()

  function checkCheckboxes(){
    if ($('input[type=checkbox]').checked){

    }
  }

>>>>>>> ace60180d3d49049033f7c669e49b8b014fe6042
  function onFormSubmit(e){
    e.preventDefault();
      newEvents.create({
        name: $inputName.val(),
        day: parseInt($inputDay.val()),
        time: $inputTime.val(),
        location: parseInt($inputArea.val()),
        categories: parseInt($inputType.val())
    });

    console.log($inputName.val());
    console.log(parseInt($inputDay.val()));
    console.log(parseInt($inputArea.val()));
    console.log(parseInt($inputType.val()));
  }
  $form.on('submit',onFormSubmit);

newEvents.on('add',function(eventX){
  var eventY = new EventView({model:eventX});
  $('#landingPage').append(eventY.$el);
})


var app = new Router();
Backbone.history.start();

});


