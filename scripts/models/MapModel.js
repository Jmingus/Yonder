var Backbone = require('backbone');
module.exports = Backbone.Model.extend({
    defaults: {
        official: false,
        name: '',
        day_id: null,
        time_of_day_id: '',
        venue: '',
        category_id: null,
        location_id: null,
        description: '',
        specific_time: ''
    },
    urlRoot: 'https://yonder.herokuapp.com/events',
    parse: function (data) {
        if (parseInt(data.day_id) === 1) {
            data.day_id = 'Monday';
            return data;
        } else if (parseInt(data.day_id) === 2) {
            data.day_id = 'Tuesday';
            return data;
        } else if (parseInt(data.day_id) === 3) {
            data.day_id = 'Wednesday';
            return data;
        } else if (parseInt(data.day_id) === 4) {
            data.day_id = 'Thursday';
            return data;
        } else if (parseInt(data.day_id) === 5) {
            data.day_id = 'Friday';
            return data;
        } else if (parseInt(data.day_id) === 6) {
            data.day_id = 'Saturday';
            return data;
        } else if (parseInt(data.day_id) === 7) {
            data.day_id = 'Sunday';
            return data;
        } else {
            return data
        }
    }
});