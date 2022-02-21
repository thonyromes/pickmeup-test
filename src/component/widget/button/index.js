import React from 'react';
import {TouchableOpacity} from 'react-native';

const Button = (props) => (
  <TouchableOpacity activeOpacity={0.75} {...props} />
);

export default Button;
