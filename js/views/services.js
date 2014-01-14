// Home View

window.servicesView = Backbone.View.extend({
    el: "#container",
    initialize: function() {
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).html($('#services-template').html());
    }
});