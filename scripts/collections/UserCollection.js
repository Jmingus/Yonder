var Backbone = require('backbone');
var userModel = require('../models/UserModel.js');
module.exports = Backbone.Collection.extend({
  model: userModel,
  url: 'http://tiyfe.herokuapp.com/collections/yonder'
})
