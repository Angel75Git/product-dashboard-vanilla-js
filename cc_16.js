//Task 2 Fetch Products with then

const Base_URL = 'https://www.course-api.com/javascript-store-products'

function fetchProductsThen() {
    fetch(Base_URL) //initial request
        .then(response => {
            //Promise
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }//Converting all into json
            return response.json();
        })
        .then(products => { 
            //Logging products to the console
            products.forEach(product => console.log(product.fields.name));
        })//Catch error
        .catch(err => console.error('Error fetching products:', err));
}
//calling function
fetchProductsThen();

//Different way to fetch products
