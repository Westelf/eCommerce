// Functions______________________________________________________________________________________
function reloadHeaderAndFooterIfNotLoaded(present) {
    if (present) { //If "ifNotPresentClause" is true then the method reloads header and footer sections only if they are not already loaded.
        if (!$('#header').html() || !$('#footer').html()) {
            templateLoader.loadTemplate('header',document.getElementById('header'), content);
            templateLoader.loadTemplate('footer', document.getElementById('footer'), content);
        }
    } else {
        templateLoader.loadTemplate('header',document.getElementById('header'), content);
        templateLoader.loadTemplate('footer', document.getElementById('footer'), content);
    }

}


// function mainRouter(lang) {
//     var router = new Navigo("https://localhost/" + configs.lang, false);

//     router.on('/home', function () {
//         reloadHeaderAndFooterIfNotLoaded()
//         templateLoader.loadTemplate('home', document.getElementById('body-container'));
//         console.log('index');
//     })
//     .on('sectionTest', function () {
//         templateLoader.loadTemplate('section', document.getElementById('body-container'));
//         reloadHeaderAndFooterIfNotLoaded()
//         console.log('section');
//     }).on('product', function () {
//         templateLoader.loadTemplate('product', document.getElementById('body-container'));
//         reloadHeaderAndFooterIfNotLoaded()
//         console.log('Product');
//     }).on('checkout', function () {
//         templateLoader.loadTemplate('checkout', document.getElementById('body-container'));
//         reloadHeaderAndFooterIfNotLoaded()
//         console.log('Checkout');
//     });

// }

// // end Functions___________________________________________________________________________________________


// var routerLanguageChange = new Navigo("https://localhost", false);

// routerLanguageChange.on('bg/*', function () {
//     $.getJSON('../lang/bg.json', function (json) {
//         content = json;

//         configs.lang = 'bg';


//     })
//     if (window.location.href === 'http://localhost/') {
//         window.location.href = 'http://localhost/#/' + configs.lang + '/home';
//         console.log('change function');
//     }
// }).on('en/*', function () {
//     $.getJSON('../lang/en.json', function (json) {
//         content = json;

//         router.resolve();

//     })

// });

// var router = new Navigo("https://localhost/" + configs.lang, false);




// if (window.location.href === 'http://localhost/') {
//     window.location.href = 'http://localhost/#/' + configs.lang + '/home';
//     console.log('change function');
// }


var router = new Navigo(configs.url, false);

router.on('home', function () {
    reloadHeaderAndFooterIfNotLoaded(false);
    templateLoader.loadTemplate('home', document.getElementById('body-container'));
    console.log('index');
})
    .on('sectionTest', function () {
        templateLoader.loadTemplate('section', document.getElementById('body-container'));
        reloadHeaderAndFooterIfNotLoaded(false);
        console.log('section');
    }).on('product', function () {
        templateLoader.loadTemplate('product', document.getElementById('body-container'));
        reloadHeaderAndFooterIfNotLoaded(false);
        console.log('Product');
    }).on('checkout', function () {
        templateLoader.loadTemplate('checkout', document.getElementById('body-container'));
        reloadHeaderAndFooterIfNotLoaded(false);
        console.log('Checkout');
    });

