var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.View.extend({
	tagName: 'div',
	template: _.template($('#events-template').html()),
	initialize: function(){
		// this.model.on('sync',this.render);
		this.render();
	},
	render: function(){
		console.log(this.model);
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},
	unfollow: function(){
		this.$el.remove();
	}


});

//when the data is coming from the server, I want to change it from the int values back to the strings




