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
  developer: 'Doug Wells',
  app: {
    name: "React Todo App",
    version: '1.2.11'
  },

  user: {
    name: "Ted",
    age: 52,
    isOld: false
}
});

// firebaseRef.child('user').once('value').then(
//   (snapshot)=> {console.log('FB Data Retrieved', snapshot.val())},
//   (err)=> {console.log("Error retrieiving FB data.  Error: ", err)}
// );

firebaseRef.child('user').on('value', (snapshot)=>{
  console.log('We Have Your Data: ', snapshot.val());
});
firebaseRef.update({'user/name': 'Erik'});
firebaseRef.update({'app/name': 'Modern Todo App'});
// firebaseRef.off();


// firebaseRef.update({
//   "app/name": "Todo App with React-Redux-Firebase ",
//   "user/name" : "Erik"
// });

// firebaseRef.child('app').update({name: 'Todo App'});
// firebaseRef.off();
// firebaseRef.child('user').update({name:'Erk', isOld: true});

// firebaseRef.child('app').update({name: null, version: '2.0.0'});
// firebaseRef.child('user').update({age: null});
// firebaseRef.child('developer').remove();
