var Backbone = require('backbone');
var EventModel = require('../models/EventModel');
module.exports= Backbone.Collection.extend({
	model: EventModel,
	url:'https://yonder.herokuapp.com/events'
});
