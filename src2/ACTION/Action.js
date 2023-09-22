export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const DELETE_ALL_TODOS = 'DELETE_ALL_TODOS';
export const UPDATE_TODO='UPDATE_TODO'

// export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
// export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';



export const addTodo = (todo,name,age,mobile) => ({
  type: ADD_TODO,
  payload: { id: new Date().getTime()% 8,  todo,name:name,age:age,mobile },
});

export const removeTodo = (todoId) => ({
  type: REMOVE_TODO,
  payload: todoId,
});

export const deleteAllTodos = () => ({
  type: DELETE_ALL_TODOS,
});


export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo,
});