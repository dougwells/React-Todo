var expect = require('expect');
var TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(()=>{
      localStorage.removeItem('todos');
    })
    it('should exist', () => {
      expect(TodoAPI).toExist();
    });


  describe('setTodos', ()=>{
    it('should set valid todos array', ()=>{
    var todos = [{
      id: 23,
      text: "test",
      completed: false
    }];
    TodoAPI.setTodos(todos);
    var actualTodos = JSON.parse(localStorage.getItem('todos'));
    expect(actualTodos).toEqual(todos);
    });

    it('should return empty array if invalid data entered', ()=>{
    var badTodos = {text: "Devcon 5!"};
    TodoAPI.setTodos(badTodos);
    var actualTodos = JSON.parse(localStorage.getItem('todos'));
    expect(actualTodos).toEqual(null);
    });

  });

  describe('getTodos', ()=>{

  });

});
