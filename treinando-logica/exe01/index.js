// Inicializa um array vazio que será usado para armazenar os produtos.
const storeData = []

// Função para criar um novo produto e adicioná-lo ao estoque.
function createNewProduct (name, price, quantity, category){
    // Criação de um objeto produto com os atributos necessários.
    const product = {
        name: name, // Nome do produto.
        price: price, // Preço do produto.
        quantity: quantity, // Quantidade do produto em estoque.
        category: category, // Categoria do produto.
        totalValue: price * quantity // Valor total do produto (preço x quantidade).
    }

    // Adiciona o objeto produto ao array storeData.
    storeData.push(product)
    
    // Exibe uma mensagem no console confirmando a adição do produto.
    console.log(`O produto: ${product.name} foi adicionado ao estoque.`)
}

// Função para atualizar as informações de um produto existente.
function updateProduct(productName, newPrice, newQuantity){
    // Localiza o produto no array storeData pelo nome.
    const productFilter = storeData.find( (product) => { return product.name === productName} )
    
    // Verifica se o produto foi encontrado.
    if (productFilter){
        // Atualiza o preço, quantidade e valor total do produto encontrado.
        productFilter.price = newPrice
        productFilter.quantity = newQuantity
        productFilter.totalValue = productFilter.price * productFilter.quantity

        // Exibe uma mensagem confirmando a atualização.
        console.log(`O produto: ${productFilter.name} teve seu preço alterado para ${productFilter.price} e sua quantidade para ${productFilter.quantity}`)
    } else {
        // Exibe uma mensagem caso o produto não seja encontrado.
        console.log('Produto não encontrado.')
    }   
}

// Função para remover um produto do estoque.
function removeProduct(productName){
    // Localiza o índice do produto no array storeData pelo nome.
    const productIndex = storeData.findIndex( (product) => {return product.name === productName})

    // Verifica se o índice é válido (produto encontrado).
    if (productIndex > -1){
        // Remove o produto do array usando o índice.
        storeData.splice(productIndex, 1)
        // Exibe uma mensagem confirmando a remoção.
        console.log(`O produto: ${productName} foi removido do estoque.`)
    }
}

// Função para listar todos os produtos de uma categoria específica.
function allProductsByCategory(category){
    // Filtra os produtos que pertencem à categoria fornecida.
    const allProducts = storeData.filter( (product) => { return product.category === category} )

    // Exibe os produtos encontrados no console.
    console.log(allProducts)
}

// Função para calcular e exibir o valor total de todos os produtos em estoque.
function totalValueInStock(){
    // Reduz o array storeData ao valor total somando o totalValue de cada produto.
    const totalValue = storeData.reduce( (acc, product) => {return acc + product.totalValue}, 0)

    // Exibe o valor total formatado com duas casas decimais.
    console.log(`Valor total dos produtos em estoque: R$ ${totalValue.toFixed(2)}`)
}


// Teste de criação de produtos
createNewProduct("Notebook", 3500.00, 5, "Eletrônicos");
createNewProduct("Celular", 2500.00, 10, "Eletrônicos");
createNewProduct("Cafeteira", 200.00, 8, "Eletrodomésticos");
createNewProduct("Fone de Ouvido", 150.00, 15, "Acessórios");

// Teste de exibição do valor total em estoque
totalValueInStock(); // Deve exibir o valor total baseado nos produtos criados

// Teste de atualização de produto
updateProduct("Notebook", 3600.00, 4); // Alteração de preço e quantidade
updateProduct("Tablet", 1200.00, 7);   // Produto inexistente, deve exibir mensagem de erro

// Teste após atualização
totalValueInStock(); // Deve exibir o valor total atualizado

// Teste de remoção de produto
removeProduct("Cafeteira"); // Produto existente, deve ser removido
removeProduct("Geladeira"); // Produto inexistente, deve exibir mensagem de erro

// Teste após remoção
totalValueInStock(); // Deve refletir o valor total atualizado sem a cafeteira

// Teste de listagem por categoria
allProductsByCategory("Eletrônicos"); // Deve listar Notebook e Celular
allProductsByCategory("Roupas");      // Categoria inexistente, deve exibir um array vazio

// Exibição de todos os produtos restantes no console
console.log("Estoque Final:", storeData);