import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const {placeholder, value, onChangeText} = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={styles.input}
      onChangeText={onChangeText}
    />
  );
};
export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 10,
    height: '100%',
    padding: 3,
  },
});
