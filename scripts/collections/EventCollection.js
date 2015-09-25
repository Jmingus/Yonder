var Backbone = require('backbone');
var EventModel = require('../models/EventModel');
module.exports= Backbone.collection.extend({
	model: EventModel,
	url:'http://tiyfe.herokuapp.com/collections/EventLogging'
});
