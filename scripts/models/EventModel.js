var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
	defaults:{
		official: false,
		name: '',
		day: null,
		timeOfDay: null,
		location: null,
		categories: null
	},
	urlRoot:  'http://tiyfe.herokuapp.com/collections/yonder',
	idAttribute: '_id',
	getDayString: function(){
		if(this.get('day') ===1){
			return  'Monday';
		}else if(this.get('day') ===2){
			return 'Tuesday';
		}else if(this.get('day') ===3){
			return 'Wednesday';
		}else if(this.get('day') ===4){
			return 'Thursday';
		}else if(this.get('day') ===5){
			return 'Friday';
		}else if(this.get('day') ===6){
			return 'Saturday';
		}else if(this.get('day') ===7){
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
