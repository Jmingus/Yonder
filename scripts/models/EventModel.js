var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults:{
		official: false,
		name: '',
		day: '',
		timeOfDay: '',
		location: '',
		type: ''
	},
	urlRoot: 'http://tiyfe.herokuapp.com/collections/EventLogging'
});
