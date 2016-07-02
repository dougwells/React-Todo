import firebase from 'firebase';
var todoSecrets = require('./../../secrets');

var config = {
  apiKey: todoSecrets.apiKeyFirebase,
  authDomain: "react-todo-app-udemy-mead.firebaseapp.com",
  databaseURL: "https://react-todo-app-udemy-mead.firebaseio.com",
  storageBucket: "react-todo-app-udemy-mead.appspot.com",
};
firebase.initializeApp(config);
var firebaseRef = firebase.database().ref();
firebaseRef.set({
  app: {
    name: "React Todo App",
    version: 1.2
  },

  user: {
    name: "Doug Wells",
    age: 52,
    isOld: false
}
}).then(()=>{
  console.log("Success.  Set to firebase worked as expected")
}, (e)=>{
  console.dir('Error in call to Firebase from playground/firebase/index.js', e);
}
);

firebaseRef.child('user').set({
  name: "Doug W.",
  isOld: false,
  age: 52
})
