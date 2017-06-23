var content;

var configs = {
  lang: "en",
  allowedLanguages: [
    'bg',
    'en'
  ],
  //url: "http://localhost/"
  url: "https://pharmacy-westelf.c9users.io/"
}


window.onload = function () {

};



// Initialize Firebase
// var config = {
//   apiKey: "AIzaSyCMKwdSlr2UTyg_Yip5CUvQvIId94qfuOY",
//   authDomain: "teamkhameleon.firebaseapp.com",
//   databaseURL: "https://teamkhameleon.firebaseio.com",
//   storageBucket: "teamkhameleon.appspot.com",
//   messagingSenderId: "818068003629"
// };
// firebase.initializeApp(config);

// var testRef = firebase.database().ref('books').once('value').then(function(snapshot){
//   test =  snapshot.val();
//     console.log(test);
// });

function changeInitialAddress() {
    if (window.location.href === configs.url) {
    window.location.href = configs.url + '#/' + configs.lang + '/home';
    console.log('change function');
  }
}

function checkLanguageValidity(lang) {
  var i, len, result = false;
  for (i = 0, len  = configs.allowedLanguages.length; i < len; i++) {
    if (lang = configs.allowedLanguages[i]) {
      result = true;
      break;
    }
  }

  if (!result) {
    // TODO: Implementation of logic that should be executed if the language is not supported.
    throw new Error('Language exception: Language is not valid: ' + lang);
  }
}

function changeUrlLanguage(lang) {
  var currentUrl = window.location.href, newUrl;

  newUrl = currentUrl.replace(configs.lang, lang);

  window.location.href = newUrl;
}

function changeLanguage(lang) {
  checkLanguageValidity(lang);
  //changeUrlLanguage(lang);
  $.getJSON('../lang/' + lang + '.json', function (json) {
    content = json;
    configs.lang = lang;
    router.resolve();
  })
}

function init() {
  changeInitialAddress();
  changeLanguage(configs.lang);
}

