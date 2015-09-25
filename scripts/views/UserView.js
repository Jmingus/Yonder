var Backbone = require('backbone')
var _ = require('backbone/node_modules/underscore')
module.exports = Backbone.View.extend({
  tagName: 'div',
  initialize: function(){
    _.bindAll(
      this,
      'render');
    this.model.on('change', this.render);
    this.render();
  },
  render: function(){
    var userEvent = this.model.get('username')
    this.$el.html('<span>'+userEvent+'</span>')
  }
})
