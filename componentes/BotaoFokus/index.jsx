import { Pressable, StyleSheet, Text } from "react-native";

export function BotaoFokus({ aoPressionar, titulo }) {
  return (
    <Pressable style={estilos.botao} onPress={aoPressionar}>
      <Text style={estilos.textoBotao}>{titulo}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  botao: {
    backgroundColor: "#B872FF",
    borderRadius: 32,
    padding: 8,
  },
  textoBotao: {
    fontSize: 18,
    color: "#021123",
    textAlign: "center",
    fontWeight: "bold",
  },
});
