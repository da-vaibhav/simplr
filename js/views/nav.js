// Nav View

window.navView = Backbone.View.extend({
    el: "#nav",
    initialize: function() {
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).empty();
        $(this.el).html($('#nav-template').html());
    }
});