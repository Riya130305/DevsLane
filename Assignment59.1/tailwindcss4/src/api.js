import axios from 'axios';

function getProduct(){
    // Dono't give data only give the token of reponse and now then function is returing data
    return axios.get("https://dummyjson.com/products/")
    // return axios.get("https://dummyjson.com/products/").then(function(response){
    //  api    return response.data.products;
    // });

}
export function getProductDetails(id){
    return axios.get("https://dummyjson.com/products/"+id)

}
export default getProduct;