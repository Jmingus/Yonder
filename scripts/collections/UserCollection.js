var Backbone = require('backbone');
var userModel = require('../models/UserModel.js');
var UserCollection = Backbone.Collection.extend({
  model: userModel
})
