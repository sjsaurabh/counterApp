// todosReducer.js
import { ADD_TODO, DELETE_ALL_TODOS, REMOVE_TODO, UPDATE_TODO } from '../ACTION/Action';

const initialState = {
  todos: [{
    name:'sanju'
  }],
};

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        // todos: state.todos.filter((todo) => todo.id !== action.payload),
        todos:state.todos.filter((todo)=>todo.id !== action.payload)
      };
      case DELETE_ALL_TODOS:
        return{
          ...state,
          todos:[]
        }
      // case UPDATE_TODO :
      //   const updateTodo= state.todos.map((todo)=>todo.id===action.payload.id? action.payload :todo)
      //   return{
      //     ...state,

      //   }

        case UPDATE_TODO:
          console.log('action.payload=====', action.payload)
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
      console.log('updatedTodos=====', updatedTodos)
      return {
        ...state,
        todos: updatedTodos,
      };

    default:
      return state;
  }
};

export default todosReducer;
