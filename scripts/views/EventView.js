var Backbone = require('backbone');
var _ =require('backbone/node_modules/underscore');
module.export = Backbone.View.extend({
	tagName: 'section',
	intitalize:function(){
		_.bindAll(
			this,
			'render',
			'unfollow'
		);
		this.$el.on('change',this.render());
		this.render();
	},
	render:function(){
		var inputName = this.model.get('name');
		var inputDay = this.model.getDayString();
		var inputTimeOfDay = this.model.get('timeOfDay');
		var inputLocation =this.model.getLocationString();
		var inputType = this.model.getTypeString();

		this.$el.html('<div>'+inputName+'<br>'+inputDay+'<br>'+inputTimeOfDay+'<br>'+inputLocation+'<br>'+inputType+'</div>');
	},
	unfollow: function(){
		this.$el.remove();
	},
	template


});

//when the data is coming from the server, I want to change it from the int values back to the strings




