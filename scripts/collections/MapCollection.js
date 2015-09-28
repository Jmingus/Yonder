var Backbone = require('backbone');
var mapModel = require('../models/MapModel.js');
module.exports = Backbone.Collection.extend({
    model: mapModel,
    url: 'https://yonder.herokuapp.com/events'
})