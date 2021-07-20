import React from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import styles from './styles';

import { ButtonProps } from '../../Interfaces/components';

const Button = ({
  onClick,
  text,
}: ButtonProps): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={()=> onClick()}
    >
      <Text style={styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );



};

export default Button;

