var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('backbone/node_modules/underscore');

module.exports = Backbone.View.extend({
	tagName: 'article',
    className: 'event',
	template: _.template($('#events-template').html()),
	initialize: function(){
		_.bindAll(
			this,
			'render',
			'unfollow'
			);
		//this.model.on('sync',this.render);
		this.render();
	},
	render: function(){
		this.$el.html('<div class="'+this.model.get('category_id')+'"></div>'+this.template(this.model.toJSON()));
		console.log(this.model.get('category_id'));
	},
	unfollow: function(){
		this.$el.remove();
	}


});

//when the data is coming from the server, I want to change it from the int values back to the strings




