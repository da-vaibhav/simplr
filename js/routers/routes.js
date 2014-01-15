window.AllRoutes = Backbone.Router.extend({
    routes: {
        "" : "home",
        "!manifesto": "manifesto",
        "!services": "services",
        "!about": "about"
    },
    home: function () {
        new homeView();
        $('#nav').addClass('homeNav');
        // $('body#home #nav').removeClass('collapsed').addClass("expanded");
    },
    manifesto: function () {
        new manifestoView();
        $('#nav').removeClass('homeNav');
        foo();
    },
    services: function () {
        new servicesView();
        $('#nav').removeClass('homeNav');
        foo();
    },
    about: function () {
        new aboutView();
        $('#nav').removeClass('homeNav');
        foo();
    }
});