var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults:{
		id: null,
		official: true,
		name: '',
		day_id: null,
		time_of_day_id: null,
		venue: null,
		category_id: null,
		location_id: null,
	},
	urlRoot: 'https://yonder.herokuapp.com/events',
	getDayString: function(){
		if(this.get('day_id') ===1){
			return  'Monday';
		}else if(this.get('day_id') ===2){
			return 'Tuesday';
		}else if(this.get('day_id') ===3){
			return 'Wednesday';
		}else if(this.get('day_id') ===4){
			return 'Thursday';
		}else if(this.get('day_id') ===5){
			return 'Friday';
		}else if(this.get('day_id') ===6){
			return 'Saturday';
		}else if(this.get('day_id') ===7){
			return 'Sunday';
		}
	},
	getTypeString: function(){
		if(inputType ===1){
			return 'Music';
		}else if(inputType ===2){
			return 'Athletics';
		}else if(inputType ===3){
			return 'Tech';
		}else if(inputType ===4){
			return 'Food';
		}else if(inputType ===5){
			return 'Personal';
			}
	},
	getLocationString: function(){
		if(inputLocation ===1){
			inputLocation = 'North Austin';
		}else if(inputLocation ===2){
			inputLocation = 'South Austin';
		}else if(inputLocation ===3){
			inputLocation = 'Barton Springs';
		}else if(inputLocation ===4){
			inputLocation = 'Downtown';
		}else if(inputLocation ===5){
			inputLocation = 'South Congress';
		}
	}
});
