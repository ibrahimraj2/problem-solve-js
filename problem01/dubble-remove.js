
// ****************** Duplicate Name Remove *************************//

// First Create A Array
const products = ['Laptop', 'Phone', 'Laptop', 'Tablet', 'Phone', 'Computer'];

// Create Another Array (this is empty because i use loop identify then istore)
const validProduct = [];

// use loop for identify duplicate

for (let product of products){

      // Check condition 
      if (!validProduct.includes(product)){
            validProduct.push(product);
      }
}
console.log (validProduct)