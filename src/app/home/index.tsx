import { useState } from "react";
import { styles } from "./styles";
import { FlatList, View } from "react-native";
import { Filter, FilterProps } from "@/components/filter";
import Svg, { RadialGradient, Stop, Rect } from "react-native-svg";

const FILTERS: FilterProps[] = [
  { name: "My Work", icon: "schedule", colors: ["#FF8C00", "#FF0080"] },
  { name: "Recent", icon: "history", colors: ["#6A5ACD", "#00FFFF"] },
  { name: "Favorites", icon: "star", colors: ["#FF4500", "#FFD700"] },
  { name: "Spaces", icon: "splitscreen", colors: ["#32CD32", "#008080"] },
  { name: "Docs", icon: "description", colors: ["#FF1493", "#9400D3"] },
  { name: "Dashboard", icon: "dashboard", colors: ["#1E90FF", "#00FA9A"] },
];

export function Home() {
  const [filter, setFilter] = useState(FILTERS[0]);

  return (
    <View style={styles.container}>
      <Svg height="100%" width="100%" style={styles.gradient}></Svg>

      <FlatList
        data={FILTERS}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <Filter
            icon={item.icon}
            name={item.name}
            colors={item.colors}
            isSelected={filter.name === item.name}
            onPress={() => setFilter(item)}
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