'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var _ =require('backbone/node_modules/underscore');
var EventCollection = require('./collections/EventCollection');
var EventView = require('./views/EventView');
var EventModel = require('./models/EventModel');

var UserCollection = require('./collections/UserCollection');
var UserModel = require('./models/UserModel');
var UserView = require('./views/UserView');

var MapCollection = require('./collections/MapCollection');
var MapModel = require('./models/MapModel');
var MapView = require('./views/MapView');

var mapEvents = new MapCollection();
var newEvents = new EventCollection();
var userCollection = new UserCollection();

//Router
var Router = Backbone.Router.extend({
  routes: {
    '': 'eventsPage',
    'maps': 'mapsPage',
    'following': 'followingPage'
  },
  eventsPage: function(){
    $('section').hide();
    $('#eventsPage').show();
    newEvents.on('add', userEvent);
    newEvents.fetch();
  },
  mapsPage: function(){
    $('section').hide();
    $('#mapsPage').show();
    mapEvents.on('add', listMapEvents);
    mapEvents.fetch();
  },
  followingPage: function(){
    $('section').hide();
    $('#followingPage').show();
    userCollection.on('add', listUserEvent);
    userCollection.fetch();
  }
});

var app = new Router();
Backbone.history.start();

function userEvent(model){
    var y = new EventView({model: model});
    $('#eventsPage').append(y.$el);
}

function listUserEvent(model){
    var x = new UserView({model: model})
    $('#followingPage').append(x.$el);
}

function listMapEvents(model){
    var z = new MapView({model: model})
    $('#mapsPage').append(z.$el)
}
//Google Maps Api Stuff

function initMap() {var austinCenter = new google.maps.LatLng(30.2669444,-97.7427778);
  var map = new google.maps.Map(document.getElementById('map'), {
    center: austinCenter,
    zoom: 12
  });
  var request = {
      location: austinCenter,
      radius: '50',
      types: ['store']
  };
    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                var place = results[i];
            }
        }
    }
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


$(document).ready(function(){

 //Variables
    var $form = $('form');
    var $inputName = $('#inputName');
    var $inputDay = $('#inputDay');
    var $inputTime= $('#inputTime');
    var $inputArea = $('#inputArea');
    var $inputType = $('#inputType');

 //Functions
    function onFormSubmit(){
      var daySection = null;
      daySection.slice()
      console.log($inputTime.val());
      var newEvent = new UserModel({
        name: $inputName.val(),
        day_id: parseInt($inputDay.val()),
        specific_time: $inputTime.val(),
        venue: parseInt($inputArea.val()),
        category_id: parseInt($inputType.val())
    });

    $.post('https://yonder.herokuapp.com/events', newEvent.attributes).done(function(response){
          userCollection.add(response)
    });
    console.log($inputName.val());
    console.log(parseInt($inputDay.val()));
    console.log(parseInt($inputArea.val()));
    console.log(parseInt($inputType.val()));
  }
    $form.on('submit',function(e){
        e.preventDefault();
        onFormSubmit();
    });


  //JQUERY ACTIONS
    var $menuLink = $('.menu-link');
    var $topNav = $('.nav-sm');

    var $taggle = $('#taggle');
    var $moreInfoDiv = $('.more-info');

    var $preferenceLink=$('#preferences-link');
    var $preferences = $('.preferences');

    var $addEvent = $('.add-event');
    var $addEventDiv = $('#addEventDiv');

    var $followingClick= $('#followingClick');
    var $followingMoreInfo = $('#followingMoreInfo');

    $menuLink.on('click',function(){
      $topNav.toggle();
    })
    $preferenceLink.on('click',function(){
      $preferences.toggle();

    })
    $taggle.on('click',function(){
      $moreInfoDiv.toggle();
    })
    $addEvent.on('click',function(){
      $addEventDiv.toggle();
    })
    $followingClick.on('click',function(){
      $followingMoreInfo.toggle();
    })
});


