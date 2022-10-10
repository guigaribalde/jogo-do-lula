# Jogo da Lula

Esse desafio é uma simulação do Jogo da Lula - um desafio competitivo pela sobrevivência, onde os sobreviventes dividem uma grande quantia em dinheiro

## Regras

O jogo começa com 69 jogadores. cada jogador possui um prêmio de $420,000. sempre que um jogador e eliminado do jogo, seu prêmio é somado aos fundos do prêmio.

O jogo é jogado em rodadas, e todos os jogadores devem participar. Toda rodada, cada jogador tem 42% de chances de ser eliminado.

No final de cada rodada, os jogadores restantes vão votar se o jogo deve ser encerrado, o jogo é encerrado se mais de 50% dos paritipantes optem pelo encerramento ou se nao sobram jogadores restante. Quando o jogo é encerrado, o total dos fundos do prêmio é distribuido igualmente entre os jogadores restantes.

Durante a votação, cada jogador tem uma probabilidade percentual calculada de votar Sim ou Não. A chance de um jogador optar pelo fim do jogo e de 30%

## Desafio

Crie uma ferramenta visual para simular o Jogo da Lula.

### Inicialização

Para iniciar o jogo, o App devera a partir da pagina Home disponiliza um botao "Iniciar" que redirecionara para pagina do Jogo. Inicialize o jogo com 69 jogadores randomicos.

### Jogo

Crie um botão para iniciar cada round do jogo. O App deve exibir a lista de jogadores remanescentes, o fundo do prêmio atual, a lista de jogadores eliminados, o número de rodadas jogadas e o numero de votos pelo fim do jogo da rodada anterior (deve exibir 0 caso seja a primeira rodada). Essas informaçoes sobre o jogo deve estar visivel duranto todo o tempo.

### Final

Quando o jogo termina, devera ser exibido:

- O total de rodadas jogadas
- O número total de jogadores remanescentes
- O número de jogadores eliminados
- O número de jogadores que votaram pelo fim do jogo
- O valor de dinheiro total ganho por cada jogador remanescente

Deve haver um botão para que um redirecionar a pagina Home.

### Bonus

- Tocar `red-light-sound.mp3` toda vez que uma rodada comecar.
- Tocar `main-theme.mp3` quando um novo jogo iniciar.

## Avaliação

Você sera avaliado por:

- Quantidade de entrega do projeto
- Priorização de tarefas
- Resolução de problema
- Estruturação
- Qualidade de código
