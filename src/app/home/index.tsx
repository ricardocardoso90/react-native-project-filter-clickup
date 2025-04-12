import { useState } from "react";
import { styles } from "./styles";
import { FILTERS } from "@/utils/filters";
import { FlatList, useWindowDimensions, View } from "react-native";
import { Filter, FilterProps } from "@/components/filter";
import Svg, { RadialGradient, Stop, Rect } from "react-native-svg";

export function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);
  const [centerX, setCenterX] = useState("14.17%");

  const dimensions = useWindowDimensions();

  function handleItemPress(item: FilterProps, event: any) {
    const locationX = event.nativeEvent.pageX;
    const percentage = (locationX / dimensions.width) * 100;

    setCenterX(`${percentage}%`);
    setFilter(item);
  };

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.gradient}>
        <RadialGradient id="gradient" cx={centerX} cy="50%" rx="60%" ry="60%">
          <Stop offset="70%" stopColor={filter.colors[0]} stopOpacity={0.3} />
          <Stop offset="100%" stopColor="transparent" stopOpacity={0.1} />
        </RadialGradient>

        <Rect width="100%" height="100%" fill="url(#gradient)" />
      </Svg>

      <FlatList
        data={FILTERS}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Filter
            icon={item.icon}
            name={item.name}
            colors={item.colors}
            isSelected={filter.name === item.name}
            onPress={(event) => handleItemPress(item, event)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.content} />
    </View>
  )
}