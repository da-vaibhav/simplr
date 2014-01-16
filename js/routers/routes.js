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
        $('#nav').removeClass('homeNav').find('a').removeClass('active');
        $('#nav a[data-attr="manifesto"]').addClass('active');
        foo();
    },
    services: function () {
        new servicesView();
        $('#nav').removeClass('homeNav').find('a').removeClass('active');
        $('#nav a[data-attr="services"]').addClass('active');
        foo();
    },
    about: function () {
        new aboutView();
        $('#nav').removeClass('homeNav').find('a').removeClass('active');
        $('#nav a[data-attr="about"]').addClass('active');
        foo();
    }
});