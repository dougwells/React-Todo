var expect = require('expect');
var actions = require('actions');

describe('Actions', ()=>{
  it('should generate SET_SEARCH_TEXT action', ()=>{
    // var searchText = actions.setSearchText("Mow").searchText;
    // expect(searchText).toBe("Mow");
    var action = {
      type: 'SET_SEARCH_TEXT',
      searchText: "Mow"
    };
    var res = actions.setSearchText('Mow');
    expect(res).toEqual(action);
  });

  it('should generate toggleShowCompleted action', ()=>{
    var action = {type: 'TOGGLE_SHOW_COMPLETED'};
    var res = actions.toggleShowCompleted()
    expect(action).toEqual(res);
  });

  it('should generate addTodo action', ()=>{
    // var newTodo = actions.addTodo("Mow Lawn");
    // expect(newTodo.text).toBe("Mow Lawn");
    var action = {
      type: 'ADD_TODO',
      text: 'Text for new todo'
    };
    var res = actions.addTodo(action.text);
    expect(action).toEqual(res);
  });

  it('should generate add todos action object', ()=>{
    var todos = [{
      id: '111',
      text: 'anything',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }];
    var action = {
      type:'ADD_TODOS',
      todos: todos
    };
    var res = actions.addTodos(todos);
    expect(res).toEqual(action);
  });

  it('should generate toggleTodo action', ()=>{
    var action = {
      type: "TOGGLE_TODO",
      id: 2
    };
    var res = actions.toggleTodo(action.id);
    expect(action).toEqual(res);
  });

});
