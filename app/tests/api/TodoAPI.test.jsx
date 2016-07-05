var expect = require('expect');
var TodoAPI = require('TodoAPI');


describe('TodoAPI', () => {
    beforeEach(()=>{
      localStorage.removeItem('todos');
    });

    it('should exist', () => {
      expect(TodoAPI).toExist();
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
      expect(TodoAPI.filterTodos(todos, true, "").length).toBe(3);
      expect(TodoAPI.filterTodos(todos, false, "").length).toBe(1);
    });

    it('should NOT display completed todos when show completed is false (not checked)', () => {
      expect(TodoAPI.filterTodos(todos, false, "").length).toBe(1);
    });

    it('should display completed todos after incomplete ones', () => {
      expect(TodoAPI.filterTodos(todos, true, "")[0].id).toBe(2);
    });

    it('should find items with search term', () => {
      expect(TodoAPI.filterTodos(todos, true, "other")[0].id).toBe(2);
    });

    it('should return all items search term is empty', () => {
      expect(TodoAPI.filterTodos(todos, true, "").length).toBe(3);
    });

  });

});
