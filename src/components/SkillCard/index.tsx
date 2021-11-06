import React from "react";
import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import styles from "./styles";

interface ISkillCardProps extends TouchableOpacityProps {
  title: string;
}

const SkillCard = ({ title, ...props }: ISkillCardProps) => {
  return (
    <TouchableOpacity style={styles.buttonSkill} activeOpacity={0.7} {...props}>
      <Text style={styles.textSkill}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SkillCard;
