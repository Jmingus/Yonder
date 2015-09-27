'use strict';
var Backbone = require('backbone');
var $ = require('jquery');
var EventCollection = require('./collections/EventCollection');
var EventView = require('./views/EventView');
var EventModel = require('./models/EventModel');

var UserCollection = require('./collections/UserCollection');
var UserModel = require('./models/UserModel');
var UserView = require('./views/UserView');
var newEvents = new EventCollection();
var _ =require('backbone/node_modules/underscore');

var currentUser = 1;
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
    newEvents.on('add',userEvent);
    newEvents.fetch({success: function(response){
    }});
  },
  mapsPage: function(){
    $('section').hide();
    $('#mapsPage').show()
  },
  followingPage: function(){
    $('section').hide();
    $('#followingPage').show()
  }
});

var app = new Router();
Backbone.history.start();

function userEvent(model){
  // console.log(temp(model.attributes));
  var y = new EventView({model: model});

  $('#eventsPage').append(y.$el);
}
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
  var $form = $('form');
  var $inputName = $('#inputName');
  var $inputDay = $('#inputDay');
  var $inputTime= $('#inputTime');
  var $inputArea = $('#inputArea');
  var $inputType = $('#inputType');

//UserView
  var userCollection = new UserCollection();

  $('#username').submit(function(e){
    e.preventDefault;
    console.log($('#username > input').val())

    userCollection.create({
      id: currentUser,
      username: $('#username > input').val()
    });
    console.log('Username Posted')
  })

  userCollection.on('add', function(userEvents){
    var x = new UserView({model: userEvents})
    $('#landingPage').append(x.$el);

  })

  userCollection.fetch();

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
var $smNav = $('.nav-sm');

var $taggle = $('#taggle');
var $moreInfoDiv = $('#taggleDiv');

var $preferenceLink=$('#preferences-link');
var $preferences = $('.preferences');

var $addEvent = $('.add-event');
var $addEventDiv = $('#addEventDiv');

var $followingClick= $('#followingClick');
var $followingMoreInfo = $('#followingMoreInfo');

var $mapsTuggle = $('#mapsFilterTuggle');
var $mapsFilter = $('#mapsFilter');

var $mapEventTaggle =$('#mapEventTaggle');
var $mapEventDiv = $('#mapEventDiv');

var $mapEventTaggle2 =$('#mapEventTaggle2');
var $mapEventDiv2 = $('#mapEventDiv2');

$menuLink.on('click',function(){
  $smNav.toggle();
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
$mapsTuggle.on('click',function(){
  $mapsFilter.toggle();
})
$mapEventTaggle.on('click',function(){
  $mapEventDiv.toggle();
})
$mapEventTaggle2.on('click',function(){
  $mapEventDiv2.toggle();
})


});


