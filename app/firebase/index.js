import firebase from 'firebase';
var todoSecrets = require('./../../secrets');

try{
  var config = {
    apiKey: todoSecrets.apiKeyFirebase,
    authDomain: "react-todo-app-udemy-mead.firebaseapp.com",
    databaseURL: "https://react-todo-app-udemy-mead.firebaseio.com",
    storageBucket: "react-todo-app-udemy-mead.appspot.com",
  };
  firebase.initializeApp(config);
} catch (err){

}
export var firebaseRef = firebase.database().ref();
export default firebase;
