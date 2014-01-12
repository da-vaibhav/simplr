window.AllRoutes = Backbone.Router.extend({
    routes: {
        "" : "home",
        "manifesto": "manifesto"
    },
    home: function () {
        // alert('shit');
        new homeView();
    },
    manifesto: function () {
        // alert('shit');
        new manifestoView();
    }
});