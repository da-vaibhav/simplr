// Manifesto View

window.manifestoView = Backbone.View.extend({
    el: "#container",
    initialize: function() {
        _.bindAll(this, 'render');
        this.render();
    },
    render: function() {
        $(this.el).html($('#manifesto-template').html());
    }
});