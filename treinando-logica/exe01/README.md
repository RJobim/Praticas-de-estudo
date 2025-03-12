# Exercício: Controle de Inventário de Loja

## Descrição
Desenvolva uma aplicação que permita gerenciar o inventário de uma loja. Sua lógica deve incluir:
- Um array de objetos que represente os produtos, contendo informações como **nome**, **preço**, **quantidade** e **categoria**.

### Funções necessárias
1. Adicionar novos produtos ao inventário.
2. Atualizar informações de produtos existentes (como quantidade ou preço).
3. Remover produtos que estão fora de estoque.
4. Listar todos os produtos de uma categoria específica.
5. Exibir o valor total do inventário.

## Objetivo
Praticar:
- Manipulação de arrays e objetos.
- Criação de funções.
- Aplicação de condicionais e loops.

---

## Resumo do script usado para o teste

1. Cria 4 produtos para testar a função de criação (`createNewProduct`).
2. Exibe o valor total inicial do estoque (`totalValueInStock`).
3. Atualiza as informações de um produto existente e tenta atualizar um produto inexistente.
4. Exibe novamente o valor total atualizado.
5. Remove um produto existente e tenta remover outro que não existe.
6. Lista produtos por categoria, incluindo uma categoria inexistente.
7. Mostra o estado final do estoque no console.
