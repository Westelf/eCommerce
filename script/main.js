var content;

var configs = {
  lang: "bg",
  url: "http://localhost:6060/"
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
    window.location.href = configs + '#/' + content.general.lang + '/home';
    console.log('change function');
  }
}



function changeUrlLanguage(lang) {

}

function changeLanguage(lang) {
  $.getJSON('../lang/' + lang + '.json', function (json) {
    content = json;
    router.resolve();
  })
}

