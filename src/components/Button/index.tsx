import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import styles from "./styles";

interface IButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...props }: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
