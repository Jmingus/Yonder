var Backbone = require('backbone');
module.exports = Backbone.Module.extend({
	defaults:{
		official: false,
		name: '',
		type: '',
		day: '',
		timeOfDay: '',
		location: ''
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/EventLogging'
});