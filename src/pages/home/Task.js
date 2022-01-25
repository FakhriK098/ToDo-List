import React, {useContext} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';
import {ToDoContext} from '../../context/ToDo';
import {Form} from '../form';

const Task = ({navigation, todo}) => {
  // const {dispatch} = useContext(ToDoContext);
  const {removeToDo} = useContext(ToDoContext);
  const onPress = () => {
    console.log('id', todo);
    navigation.navigate('Form', {data: todo});
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.item}>
        <Text style={styles.itemText}>{todo.title}</Text>
        <TouchableOpacity onPress={() => removeToDo(todo)}>
          <Icon name="delete" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  itemText: {
    maxWidth: '80%',
    alignItems: 'center',
    color: 'black',
  },
});

export default Task;
