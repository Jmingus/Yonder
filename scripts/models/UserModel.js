var Backbone = require('backbone')
module.exports = Backbone.Model.extend({
  defaults: {
    name: '',
    events:[{

    }],
    preferences: {}
  },
  urlRoot: 'https://yonder.herokuapp.com/users/1'
})
