import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingTop: 72,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 200,
  },
  list: {
    maxHeight: 80,
  },
  listContent: {
    gap: 16,
    paddingHorizontal: 24,
    marginBottom: 30,
  },
  content: {
    // flex: 1,
    height: '80%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: "#CECECE",
  }
});