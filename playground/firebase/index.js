import firebase from 'firebase';
var todoSecrets = require('./../../secrets');

var config = {
  apiKey: todoSecrets.apiKeyFirebase,
  authDomain: "react-todo-app-udemy-mead.firebaseapp.com",
  databaseURL: "https://react-todo-app-udemy-mead.firebaseio.com",
  storageBucket: "react-todo-app-udemy-mead.appspot.com",
};
firebase.initializeApp(config);
firebase.database().ref().set({
  appName: 'React Todo App'
});
