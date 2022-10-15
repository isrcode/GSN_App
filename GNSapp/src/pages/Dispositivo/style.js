import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textHeader: {
    fontSize: 17,
    fontWeight: "500",
    marginHorizontal: 50,
    marginVertical: 12,
  },
  containerDispositivo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#32A060",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,

    elevation: 24,
    width: "45%",
    height: 150,
    borderBottomRightRadius: 50,
  },
  textTitle: {
    fontSize: 28,
    fontWeight: "700",
    color: "#fff",
    marginBottom: 12,
  },
  textSub: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "500",
  },
  containerPlanta: {

    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(219, 219, 219, 0.6)",
    width: 140,
    position: "absolute",
    height: 160,
    borderRadius: 10,
    alignSelf: "flex-end",
    top: 300,
    right: 20,
    marginRight: 10,
 
    zIndex: 1,
  },
  textPlanta: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "500",
    alignSelf: "center",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    bottom: 10,

  },
  containerInfo: {
    display: "flex",
    elevation: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 12,
      height: 12,
    },
    shadowOpacity: 0.81,
    flexDirection: "column",
    backgroundColor: "#32A060",
    justifyContent: "center",
    padding: 30,
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  containerUmidade: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  containerLuz: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  textInfoTexto: {
    fontSize: 20,
    color: "#fff",
    marginHorizontal: 10,
  },
  textInfoNum: {
    fontSize: 26,
    color: "#fff",
    fontWeight: "700",
    marginHorizontal: 10,
  },
  containerStatus: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    backgroundColor: "#fff",
    width: "35%",
    height: 100,
    borderTopLeftRadius: 20,
    position: "absolute",
    bottom: 50,
    right: 0,
  },
});

export default styles;