var Backbone = require('backbone')
var _ = require('backbone/node_modules/underscore')
var $ = require('jquery')
module.exports = Backbone.View.extend({
  tagName: 'div',
  initialize: function(){
    _.bindAll(
      this,
      'render');
    this.model.on('sync', this.render);
    this.render();
  },
  template: _.template($('#landingPage-template').html()),
  render: function(){
    this.$el.html(this.template(this.model.attributes))
  }
})
