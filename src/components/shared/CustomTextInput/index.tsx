import React from 'react';
import {KeyboardTypeOptions, StyleSheet, TextInput} from 'react-native';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
}

const CustomTextInput = (props: CustomTextInputProps) => {
  const {
    placeholder,
    value,
    keyboardType = 'default',
    onChangeText,
    multiline = false,
  } = props;
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      style={styles.input}
      onChangeText={onChangeText}
      keyboardType={keyboardType}
      multiline={multiline}
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
