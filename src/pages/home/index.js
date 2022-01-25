import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {FAB} from 'react-native-elements';
import Task from './Task';
import {ToDoContext} from '../../context/ToDo';

const Home = ({navigation, todo}) => {
  const onPress = () => {
    navigation.navigate('Form', {data: {title: '', detail: '', id: ''}});
  };
  const {todos} = useContext(ToDoContext);

  return todos.length ? (
    <View style={styles.container}>
      {todos.map(todo => {
        return <Task todo={todo} navigation={navigation} />;
      })}
      <FAB
        icon={{name: 'add', color: 'white'}}
        style={styles.fab}
        placement="right"
        onPress={onPress}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.textEmpty}>No To Do</Text>
      <FAB
        icon={{name: 'add', color: 'white'}}
        style={styles.fab}
        placement="right"
        onPress={onPress}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  textEmpty: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
