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
    newProduct.forEach(product => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${product.fields.name}</h3>`;
        mainContainer.appendChild(div);
    });    

}//Handling Errors displays red message
function handleError(error) {
    mainContainer.innerHTML = `<p style="color:red;">Failed to load products</p>`;
}

fetchProductsAsync()