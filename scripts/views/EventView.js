var Backbone = require('backbone');
var $ = require('jquery');
var _ =require('backbone/node_modules/underscore');
module.export = Backbone.View.extend({
	tagName: 'article',
	intitalize:function(){
		_.bindAll(
			this,
			'render',
			'unfollow'
		);
		this.$el.on('change',this.render());
		this.render();
	},
	template: _.template($('#Eventtemplate').html()),
	render:function(){
		var inputName = this.model.get('name');
		var inputDay = this.model.getDayString();
		var inputTimeOfDay = this.model.get('timeOfDay');
		var inputLocation =this.model.getLocationString();
		var inputType = this.model.getTypeString();

		this.$el.html(this.template(this.model.attributes))
	},
	unfollow: function(){
		this.$el.remove();
		this.model.destroy();
	},


});





