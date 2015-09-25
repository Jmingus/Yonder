var Backbone = require('backbone')
module.exports = Backbone.Model.extend({
  defaults: {
    username: 'Testing',
    events: {},
    preferences: {}
  },
  urlRoot: 'http://tiyfe.herokuapp.com/collections/yonder',
  idAttribute: '_id'
})
