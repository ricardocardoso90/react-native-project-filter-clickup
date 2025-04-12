import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { Text, ColorValue, TouchableOpacity, TouchableHighlightProps } from "react-native";

export type FilterProps = {
  name: string;
  colors: ColorValue[];
  isSelected?: boolean;
  icon: keyof typeof MaterialIcons.glyphMap;
};

type Props = TouchableHighlightProps & FilterProps;

export function Filter({ name, colors, isSelected = false, icon, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <MaterialIcons
        size={24}
        name={icon}
        color={isSelected ? colors[0] : '#000'}
      />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  )
};