var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.View.extend({
	tagName: 'article',
    className: 'event',
	template: _.template($('#events-template').html()),
	initialize: function(){
		this.render();
	},
	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
	},
	unfollow: function(){
		this.$el.remove();
	}


});

//when the data is coming from the server, I want to change it from the int values back to the strings




