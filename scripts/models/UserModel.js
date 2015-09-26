var Backbone = require('backbone')
module.exports = Backbone.Model.extend({
  defaults: {
    name: 'Roger',
    events:[{

    }],
    preferences: {}
  },
  urlRoot: 'https://yonder.herokuapp.com/users/1'
})
