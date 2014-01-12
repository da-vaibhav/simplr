// Home View

window.homeView = Backbone.View.extend({
    el: "#container",
    initialize: function() {
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).html($('#home-template').html());
    }
});