var expect = require('expect');
var TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });

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
    it('should get valid data if input data is valid', ()=>{
    var todos = [{
      id: 23,
      text: "test",
      completed: false
    }];
    TodoAPI.setTodos(todos);
    var retrievedTodos = TodoAPI.getTodos();
    expect(retrievedTodos).toEqual(todos);
    });

    it('should get empty array/null if invalid data entered', ()=>{
    var badTodos = {text: "Devcon 5!"};
    TodoAPI.setTodos(badTodos);
    var retrievedTodos = TodoAPI.getTodos();
    expect(retrievedTodos).toEqual([]);
    });
  });

  describe("filterTodos", ()=>{
    var todos = [
      {
        id: 1,
        text: "Some Text Here",
        completed: true
      },
      {
        id: 2,
        text: "Other Text",
        completed: false
      },
      {
        id: 3,
        text: "And a bit more text",
        completed: true
      }
    ];
    it('should display completed todos when show completed is true(checked)', () => {
      expect(TodoAPI.filterTodos(todos, true, "abc").length).toBe(3);
      expect(TodoAPI.filterTodos(todos, false, "abc").length).toBe(1);
    });

    it('should NOT display completed todos when show completed is false (not checked)', () => {
      expect(TodoAPI.filterTodos(todos, false, "abc").length).toBe(1);
    });

    it('should display completed todos after incomplete ones', () => {
      expect(TodoAPI.filterTodos(todos, true, "abc")[0].id).toBe(2);
    });
  });

});
