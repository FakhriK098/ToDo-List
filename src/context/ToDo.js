import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ToDoContext = createContext();

const ToDoProvider = props => {
  const [todos, setTodos] = useState(async () => {});

  const showData = async () => {
    let localData = await AsyncStorage.getItem('todos');
    localData = localData ? JSON.parse(localData) : [];
    setTodos(localData);
  };
  useEffect(() => {
    showData();
  }, []);

  const addToDo = async todo => {
    try {
      const data = [...todos];
      data.push(todo);
      setTodos(data);
      await AsyncStorage.setItem('todos', JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  };

  const removeToDo = async todo => {
    try {
      let todoJSON = await AsyncStorage.getItem('todos');
      let todoArray = JSON.parse(todoJSON);
      const alteredTodo = todoArray.filter(function (e) {
        return e.id !== todo.id;
      });
      AsyncStorage.setItem('todos', JSON.stringify(alteredTodo));
      setTodos({todo: alteredTodo});
      showData();
    } catch (e) {
      console.log(e);
    }
  };

  const changeToDo = async todo => {
    try {
      let todoJSON = await AsyncStorage.getItem('todos');
      let todoArray = JSON.parse(todoJSON);
      const alteredTodo = todoArray.filter(function (e) {
        return e.id !== todo.id;
      });
      alteredTodo.push(todo);
      AsyncStorage.setItem('todos', JSON.stringify(alteredTodo));
      setTodos({todo: alteredTodo});
      showData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ToDoContext.Provider value={{todos, addToDo, removeToDo, changeToDo}}>
      {props.children}
    </ToDoContext.Provider>
  );
};

export {ToDoContext, ToDoProvider};
