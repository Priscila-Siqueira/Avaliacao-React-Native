import { Pressable, StyleSheet, Text } from "react-native";

export function BotaoOpcao({ ativo, aoPressionar, rotulo }) {
  return (
    <Pressable style={ativo ? estilos.opcaoAtiva : null} onPress={aoPressionar}>
      <Text style={estilos.textoOpcao}>{rotulo}</Text>
    </Pressable>
  );
}

const estilos = StyleSheet.create({
  opcaoAtiva: {
    backgroundColor: "#144480",
    borderRadius: 8,
  },
  textoOpcao: {
    fontSize: 12.5,
    color: "#FFF",
    padding: 8,
  },
});
