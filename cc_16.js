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

//Task 3 
//Getting product div
const mainContainer = document.getElementById('product-container')

//Different way to fetch products

//declaring async
async function fetchProductsAsync() {
    try {
        const response = await fetch(Base_URL);
        if (!response.ok){
            throw new Error(`Failed to Load Products ${response.status}`);
        }
        const newProduct = await response.json() //Convert response to Json
        displayProducts(newProduct)

    } catch (error) {
        handleError(error);
    }
}
//Helper function to display products to page
function displayProducts(newProduct) {
    //looping = creating divs to store new products
    newProduct.slice(0, 5).forEach(product => { //loops through first 5
        const div = document.createElement('div');
        //name / picture / price
        div.innerHTML = `<h3>${product.fields.name}</h3><img src="${product.fields.image[0].url}"><br><h4>Price: $${product.fields.price}</h4>`;
        mainContainer.appendChild(div);
    });    

}//Handling Errors displays red message
function handleError(error) {
    console.log(`An error occured: ${error}`) //Task 5 < -------
    mainContainer.innerHTML = `<p style="color:red;">Failed to load products</p>`;
}

/*Task 4
   ^ 
   |
   |
Inside displayProducts*/

fetchProductsThen();
fetchProductsAsync();