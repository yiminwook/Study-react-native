import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, Pressable, StyleSheet, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slice/todoSlice';

const InputForm = () => {
  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const hadleChangeText = (text: string) => {
    setCurrentValue(() => text);
  };

  const handleSubmit = () => {
    if (currentValue === '') {
      return;
    }
    dispatch(addTodo({ text: currentValue }));
    setCurrentValue(() => '');
  };
  return (
    <KeyboardAvoidingView style={styles.addFormContainer} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TextInput
        style={styles.inputField}
        value={currentValue}
        onChangeText={hadleChangeText}
        onSubmitEditing={handleSubmit}
        placeholder="할 일을 작성해주세요."
      />
      <Pressable style={styles.addButton} onPress={handleSubmit}>
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 42,
    padding: 5,
    marginRight: 25,
    borderRadius: 4,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderWidth: 1,
    color: '#000000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    shadowColor: '#000000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  addButtonText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
});

export default InputForm;
