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

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot)=>{
  console.log('Child added.', snapshot.key, snapshot.val());
});

todosRef.on('child_changed', (snapshot)=>{
  console.log('Child changed.', snapshot.key, snapshot.val());
});

todosRef.on('child_removed', (snapshot)=>{
  console.log('Child removed.', snapshot.key, snapshot.val());
});

var newTodo1 = todosRef.push().set({text: "Grill burgers"});
var newTodo2 = todosRef.push().set({text: "Make salad"});

console.log("Todo1 id: ", newTodo1.key);
console.log("Todo2 id: ", newTodo2.key);
