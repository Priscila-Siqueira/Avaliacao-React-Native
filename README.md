Fokus Pomodoro (React Native)

Aplicativo simples em React Native para auxiliar no foco usando a técnica Pomodoro.
Possui três modos (Foco, Pausa curta e Pausa longa), um botão único que alterna entre Começar e Pausar, e um temporizador que exibe o tempo em mm:ss.

✨ Funcionalidades

Três modos de uso:

  Foco (25 min)

  Pausa curta (5 min)

  Pausa longa (15 min)

Botão único Começar/Pausar:

Ao iniciar, o texto muda para “Pausar”.

Ao pausar ou ao terminar, volta para “Começar”.

Reset automático ao trocar de modo:

Trocar de Foco → Pausa curta/longa (ou vice-versa) para e zera o temporizador do novo modo.

Temporizador estável (mm:ss):

Contagem regressiva a cada segundo, com parada ao chegar em zero.

Controle sem re-renderizações desnecessárias:

Uso de useRef para guardar o setInterval ativo.

Interface simples e responsiva:

Botões de seleção de modo com destaque visual para o modo ativo.

🛠 Tecnologias Utilizadas

React Native (JavaScript)

React Hooks: useState, useRef, useEffect

StyleSheet para estilização

(Opcional) Expo para facilitar execução em desenvolvimento

▶️ Como Executar
1) Pré-requisitos

Node.js 18+

Android: Android Studio (SDK/Emulador) ou dispositivo físico com depuração USB

iOS (macOS): Xcode (se for rodar no iPhone/simulador)

Caso use Expo, basta ter o app Expo Go no celular (Android/iOS)

Dica: Se você preferir o fluxo com Expo, pule os requisitos de Android Studio/Xcode e veja a seção (Alternativa com Expo) abaixo.
