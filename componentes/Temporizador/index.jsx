import { StyleSheet, Text } from "react-native";

export function Temporizador({ totalEmSegundos }) {
  const minutos = String(Math.floor(totalEmSegundos / 60)).padStart(2, "0");
  const segundos = String(totalEmSegundos % 60).padStart(2, "0");

  return <Text style={estilos.relogio}>{minutos}:{segundos}</Text>;
}

const estilos = StyleSheet.create({
  relogio: {
    fontSize: 54,
    color: "#FFF",
    fontWeight: "bold",
    textAlign: "center",
  },
});
