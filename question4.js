function describeProduct(){
    let product = [
        {name: "Indomie", price: 150, stock: 200},
        {name: "Hypo", price: 80, stock: 100},
        {name: "Soap", price: 300, stock: 150}
        
    ]
    for(i=0;i<product.length;i++){
        console.log(`Product: ${product[i].name} | Price: #${product[i].price} | Stock: ${product[i].stock}`)
    }
}
describeProduct()