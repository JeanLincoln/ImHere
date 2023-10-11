import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    padding: 24,
  },

  eventName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FDFCFE",
    marginTop: 48,
  },

  eventDate: { color: "black", fontSize: 20 },

  form: {
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    flexDirection: "row",
    gap: 10,
  },

  input: {
    flex: 1,
    backgroundColor: "#1f1e25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
  },

  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31cf67",
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",
    fontSize: 24,
  },

  listEmptyText: {
    color: "#ffff",
    fontSize: 14,
    textAlign: "center",
  },
});
