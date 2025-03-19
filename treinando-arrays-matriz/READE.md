# Exercício: Sistema de Reserva de Assentos para Cinema 🎟️

## Descrição
Este exercício simula um sistema de reserva de assentos para um cinema. O sistema é capaz de:
- Exibir o mapa completo dos assentos (disponíveis ou reservados).
- Identificar o status de um assento específico.
- Reservar assentos disponíveis.
- Cancelar reservas de assentos já ocupados.

O objetivo é praticar manipulação de arrays bidimensionais, condicionais, e criar funções que gerenciem estados e interações.

---

## Resumo do Código

- Os assentos são representados por uma **matriz bidimensional**, onde cada fileira e coluna indicam o status da cadeira, que pode ser "Disponível" ou "Reservado".
- As funções implementadas incluem:
  1. **`seeAllChairs`**: Mostra o mapa completo das cadeiras de forma tabular no console.
  2. **`chairStatus(row, column)`**: Exibe a situação (Disponível ou Reservado) de uma cadeira específica.
  3. **`reserveChair(row, column)`**: Permite reservar uma cadeira, alterando seu status para "Reservado".
  4. **`cancelReservation(row, column)`**: Cancela a reserva de uma cadeira, alterando seu status para "Disponível".
- O sistema inclui validações para evitar erros ao acessar cadeiras fora dos limites da matriz ou realizar ações inadequadas, como reservar uma cadeira já reservada.

