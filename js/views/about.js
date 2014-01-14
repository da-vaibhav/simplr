// Home View

window.aboutView = Backbone.View.extend({
    el: "#container",
    initialize: function() {
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).html($('#about-template').html());
    }
});