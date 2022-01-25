import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useContext, useState} from 'react';
import {ToDoContext} from '../../context/ToDo';
import uuid from 'react-native-uuid';

const Form = ({navigation, route}) => {
  const {data} = route.params;
  const {addToDo, changeToDo} = useContext(ToDoContext);
  const [title, setTitle] = useState(data.title);
  const [detail, setDetail] = useState(data.detail);
  const [id, setId] = useState(data.id);
  const handleSubmit = e => {
    e.preventDefault();
    if (data.id !== '') {
      changeToDo({
        title: title,
        detail: detail,
        id: id,
      });
    } else {
      addToDo({
        title: title,
        detail: detail,
        id: uuid.v4(),
      });
    }

    setTitle('');
    setDetail('');
    setId('');
    navigation.navigate('Home');
  };
  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={styles.textInput}
          placeholder="Tittle"
          value={title}
          onChangeText={e => setTitle(e)}
        />

        <TextInput
          style={styles.textInputDetail}
          placeholder="Detail"
          value={detail}
          multiline={true}
          numberOfLines={20}
          onChangeText={e => setDetail(e)}
        />
      </View>
      <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 15,
  },
  form: {
    padding: 12,
    marginHorizontal: 20,
  },
  textInputDetail: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    height: 150,
    textAlignVertical: 'top',
  },
  submit: {
    alignItems: 'center',
    borderWidth: 1,
    marginHorizontal: 12,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#35858B',
    borderColor: '#35858B',
    marginHorizontal: 30,
  },
});
