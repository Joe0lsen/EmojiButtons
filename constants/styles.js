import { Platform, StyleSheet } from "react-native";

const REM = 16;

const styles = StyleSheet.create({
  app: {
    fontFamily: "Arial",
    color: "#ccc",
    backgroundColor: "#444",
  },
  body: {
    width: "100%",
    height: "100%",
  },
  main: {
    textAlign: "center",
    marginHorizontal: "auto",
    marginTop: REM * 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  setButton: {
    borderRadius: "10%",
    backgroundColor: "dodgerblue",
    padding: 4,
    margin: 4,
  },
  setButtonText: {
    fontSize: REM * 2,
  },
  bigButton: {
    borderRadius: "10%",
    marginHorizontal: "auto",
    marginVertical: REM * 1,
    width: REM * 10,
    aspectRatio: 1,
  },
  bigButtonText: {
    textAlign: "center",
    margin: "auto",
    fontSize: REM * 5,
  },
  up: {
    marginTop: REM * 5,
  },
  foot: {
    opacity: 0.25,
    position: "absolute",
    bottom: Platform.OS == "android" ? REM * 3 : 0,
    left: 0,
    width: "100%",
    textAlign: "right",
    marginHorizontal: -6,
    marginVertical: 4,
    padding: 0,
    color: "#ffffff",
  },
});

export default styles;
