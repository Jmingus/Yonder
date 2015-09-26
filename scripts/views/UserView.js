var Backbone = require('backbone')
var _ = require('backbone/node_modules/underscore')
var $ = require('jquery')
module.exports = Backbone.View.extend({
  initialize: function(){
    _.bindAll(
      this,
      'render');
    this.model.on('sync', this.render);
    this.render();
  },
  template: _.template($('#landingPage-template').html()),
  render: function(){
    console.log(this.$el)
    this.$el.html(this.template(this.model.attributes))
    console.log(this.model.get('name'))
  }
})
