window.AllRoutes = Backbone.Router.extend({
    routes: {
        "" : "home",
        "!manifesto": "manifesto",
        "!services": "services",
        "!about": "about"
    },
    home: function () {
        new homeView();
    },
    manifesto: function () {
        new manifestoView();
    },
    services: function () {
        new servicesView();
    },
    about: function () {
        new aboutView();
    }
});