var Backbone = require('backbone')
module.exports = Backbone.Model.extend({
  defaults: {
    username: 'Testing',
    events: {
      music: false,
      athletics: false,
      tech: false,
      food: false,
      personal: false
    },
    preferences: {}
  },
  urlRoot: 'http://tiyfe.herokuapp.com/collections/yonder',
  idAttribute: '_id'
})
