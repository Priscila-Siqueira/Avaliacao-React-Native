import { useEffect, useRef, useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { BotaoFokus } from "../componentes/BotaoFokus";
import { BotaoOpcao } from "../componentes/BotaoOpcao";
import { Temporizador } from "../componentes/Temporizador";

//Lista de objetos{}(botoes)
const listaBotoes = [
  { 
    id: "foco",
    valorInicialMinutos: 25,
    imagem: require("./foco.png"),
    rotulo: "Foco"
  },
  { 
    id: "pausa_curta",
    valorInicialMinutos: 5, 
    imagem: require("./curto.png"),
    rotulo: "Pausa curta"
  },
  { 
    id: "pausa_longa", 
    valorInicialMinutos: 15,
    imagem: require("./longo.png"),
    rotulo: "Pausa longa"
  },
];

export default function TelaPomodoro() {
  // modo atual (foco/pausa)
  const [modoAtual, definirModoAtual] = useState(listaBotoes[0]);

  // tempo restante em segundos
  const [segundosRestantes, definirSegundosRestantes] = useState(listaBotoes[0].valorInicialMinutos * 60);

  // texto do botão principal
  const [tituloBotao, definirTituloBotao] = useState("Começar");

  // referência do intervalo ativo
  const intervaloRef = useRef(null);

  const pararTemporizador = () => {
    if (intervaloRef.current) {
      clearInterval(intervaloRef.current);
      intervaloRef.current = null;
    }
  };

  const alternarTemporizador = () => {
    // se já está rodando: pausa
    if (intervaloRef.current) {
      pararTemporizador();
      definirTituloBotao("Começar");
      return;
    }

    // se está parado: inicia
    definirTituloBotao("Pausar");
    intervaloRef.current = setInterval(() => {
      definirSegundosRestantes((anterior) => {
        if (anterior <= 1) {
          // acabou o tempo
          pararTemporizador();
          definirTituloBotao("Começar");
          return 0;
        }
        return anterior - 1;
      });
    }, 1000);
  };

  // quando o usuário troca de modo (Foco/Curta/Longa)
  const aoSelecionarModo = (modo) => {
    definirModoAtual(modo);
    pararTemporizador();
    definirSegundosRestantes(modo.valorInicialMinutos * 60); // minutos -> segundos
    definirTituloBotao("Começar");
  };

  // limpar o intervalo ao desmontar
  useEffect(() => {
    return () => pararTemporizador();
  }, []);

  return (
    <View style={estilos.container}>
      <Image source={modoAtual.imagem} />

      <View style={estilos.acoes}>
        <View style={estilos.opcoes}>
          {listaBotoes.map((m) => (
            <BotaoOpcao
              key={m.id}
              ativo={modoAtual.id === m.id}
              aoPressionar={() => aoSelecionarModo(m)}
              rotulo={m.rotulo}
            />
          ))}
        </View>

        <Temporizador totalEmSegundos={segundosRestantes} />

        <BotaoFokus aoPressionar={alternarTemporizador} titulo={tituloBotao} />
      </View>

      <View style={estilos.rodape}>
        <Text style={estilos.textoRodape}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={estilos.textoRodape}>Desenvolvido por Aluno.</Text>
      </View>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#021123',
    gap: 40,
  },
  acoes:{
    padding: 24,
    backgroundColor: '#14448080',
    width: '80%',
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#144480',
    gap: 32,
  },
  opcoes: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  relogio: {
    fontSize: 54,
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: "center",
  },
  rodape: {
    width: '80%',
  },
  textoRodape: {
    color: '#98A0A8',
    fontSize: 12.5,
    textAlign: "center",
  }
});