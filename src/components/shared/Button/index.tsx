import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
  disabled?: boolean;
}

const Button = (props: ButtonProps) => {
  const {title, onPress, disabled} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        if (disabled) {
          return;
        } else {
          onPress && onPress();
        }
      }}
      style={styles.button}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'yellow',
    padding: 10,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 12,
    display: 'flex',
    alignItems: 'center',
  },
});
