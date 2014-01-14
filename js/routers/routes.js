window.AllRoutes = Backbone.Router.extend({
    routes: {
        "" : "home",
        "!manifesto": "manifesto"
    },
    home: function () {
        new homeView();
    },
    manifesto: function () {
        new manifestoView();
    }
});