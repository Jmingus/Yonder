var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
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
