
/*
//************* Filtering Array Of Object to Categorized *********
*/

const products = [
      {name : 'Laptop',  category : 'Electronics'},
      {name : 'T-Shirt',  category : 'Clothing'},
      {name : 'Phone',  category : 'Electronics'},
      {name : 'Pant',  category : 'Clothing'},
      {name : 'Tablet',  category : 'Electronics'},
      {name : 'Head Cap',  category : 'Clothing'}
];

let categorizedProducts = {
      electronics : [],
      clothings : []  
}

for (let product of products){
      if (product.category === 'Electronics'){
            categorizedProducts.electronics.push(product.name);
      }
      else if (product.category === 'Clothing'){
            categorizedProducts.clothings.push(product.name);
      }
}
console.log(categorizedProducts)