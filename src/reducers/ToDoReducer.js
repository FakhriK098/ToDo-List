import uuid from 'react-native-uuid';

export const ToDoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          title: action.todo.title,
          detail: action.todo.detail,
          id: uuid.v5(),
        },
      ];
      console.log(title);
    case 'REMOVE_TODO':
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
};
