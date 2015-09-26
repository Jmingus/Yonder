var Backbone = require('backbone');
var userModel = require('../models/UserModel.js');
module.exports = Backbone.Collection.extend({
  model: userModel,
  url: 'https://yonder.herokuapp.com/users/1'
})
