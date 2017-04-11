var routerLanguageChange = new Navigo("https://localhost/", false);

routerLanguageChange.on('bg/*',function () {
        $.getJSON('../lang/bg.json', function (json) {
        content = json;

        router.resolve();

        })
         if (window.location.href === 'http://localhost/') {
    window.location.href = 'http://localhost/#/' + configs.lang + '/home';
    console.log('change function');
}
    }).on('en/*',function () {
        $.getJSON('../lang/en.json', function (json) {
        content = json;

        router.resolve();

        })
         
    });

    var router = new Navigo("https://localhost/" + configs.lang, false);
    

    function reloadHeaderAndFooterIfNotLoaded() {

        if (!$('#header').html()) {
            // $.getJSON('../lang/bg.json',function (json) {
            //     var content = json;
            //     templateLoader.loadTemplate('header',document.getElementById('header'), content);
            // });

            templateLoader.loadTemplate('header',document.getElementById('header'), content);
            
        }

        if (!$('#footer').html()) {
            templateLoader.loadTemplate('footer',document.getElementById('footer'));
        }
    }

    router.on('/home',function () {
         reloadHeaderAndFooterIfNotLoaded()
        templateLoader.loadTemplate('home',document.getElementById('body-container'));
        console.log('index');
    })
    .on('sectionTest', function () {
        templateLoader.loadTemplate('section',document.getElementById('body-container'));
         reloadHeaderAndFooterIfNotLoaded()
        console.log('section');
    }).on('product', function () {
        templateLoader.loadTemplate('product',document.getElementById('body-container'));
        reloadHeaderAndFooterIfNotLoaded()
        console.log('Product');
    }).on('checkout', function () {
        templateLoader.loadTemplate('checkout',document.getElementById('body-container'));
        reloadHeaderAndFooterIfNotLoaded()
        console.log('Checkout');
    });

    if (window.location.href === 'http://localhost/') {
    window.location.href = 'http://localhost/#/' + configs.lang + '/home';
    console.log('change function');
}