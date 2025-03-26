const Product = require("./Product");

const stock = []
const myProducts = []

function addProductToStock(name, price, quantity, category) {

    const product = new Product(name, price, quantity, category);
    stock.push(product);

}

function searchProductInStock(name) {

    const product = stock.find(product => product.name === name);

    if(product){
        return product;
    } else {
        console.log(`Product ${name} not found in stock`);
        return null;
    }
}

function addProductToMyProducts(name) {
    const product = searchProductInStock(name);

    if (product && product.quantity > 0) {
        const cartProduct = myProducts.find(item => item.name === name);

        if (cartProduct) {
            cartProduct.quantity += 1;
        } else {
            myProducts.push({ ...product, quantity: 1 });
        }

        product.quantity -= 1;
        console.log(`Product "${name}" added to your shopping cart.`);
    } else if (product) {
        console.log(`Product "${name}" is out of stock.`);
    } else {
        console.log(`Product "${name}" not found in stock.`);
    }
}


function totalValueMyProducts() {

    const totalValue = myProducts.reduce((sum, product) => sum + product.price * product.quantity, 0);

    console.log(`Total value of your shopping cart: $${totalValue.toFixed(2)}`);

}


function removeProductFromMyProducts(name) {
    const index = myProducts.findIndex(product => product.name === name);

    if (index > -1) {
        const removedProduct = myProducts[index];

        const stockProduct = searchProductInStock(name);
        if (stockProduct) {
            stockProduct.quantity += removedProduct.quantity;
        }

        myProducts.splice(index, 1);
        console.log(`Product "${name}" removed from your shopping cart.`);
    } else {
        console.log(`Product "${name}" not found in your shopping cart.`);
    }
}


function showProductsInStock(){
    console.table(stock);
}

function showProductsInMyProducts(){

    console.table(myProducts);
}


addProductToStock("Laptop", 3000, 5, "Eletrônicos");
addProductToStock("Smartphone", 1500, 10, "Eletrônicos");
addProductToStock("Fone de Ouvido", 200, 15, "Acessórios");
addProductToStock("Cafeteira", 250, 7, "Eletrodomésticos");
addProductToStock("Teclado", 120, 8, "Acessórios");


console.log("Produtos em estoque:");
showProductsInStock();


console.log("Buscando o produto 'Laptop':");
console.log(searchProductInStock("Laptop"));


console.log("Adicionando produtos ao carrinho:");
addProductToMyProducts("Laptop");
addProductToMyProducts("Teclado");
addProductToMyProducts("Smartphone");
addProductToMyProducts("Fone de Ouvido");
addProductToMyProducts("Laptop"); 


console.log("Produtos no carrinho:");
showProductsInMyProducts();


console.log("Valor total do carrinho:");
totalValueMyProducts();


console.log("Removendo 'Smartphone' do carrinho:");
removeProductFromMyProducts("Smartphone");


console.log("Produtos no carrinho após remoção:");
showProductsInMyProducts();


console.log("Estoque atualizado:");
showProductsInStock();