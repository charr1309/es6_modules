import Car from "./Car";
import Wishlist from "./wishlist";

//what we need to get started manipulating the dom
//select items from the index.html via Id
const makeInput = document.getElementById("makeInput")
const modelInput = document.getElementById("modelInput")
const yearInput = document.getElementById("yeahInput")
const form = document.getElementById("submitForm")
//use the values from above to create a car and push to 
//wishlist. need to import car and wishlist to do that

//need to create a new wishlist
//below initializes a new wish list

const wishlist = new Wishlist();

//now we can start adding cars to the wishlist but first we need to
//use the car constructor to add cars using the add method but we need
//to use the create a new car to to begin pushing cars to the wishlist
//we need to make a new car. that happens when the form submit button is 
//clicked so we add an event listener to the submit button

form.addEventListener('submit',(event) => {
    event.preventDefault();

//pass in the constructor values and use the add method to push the car onto
//the wish list. remember to prevent defaut for form submissions.
    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    let car = new Car(make,model,year);
    wishlist.add(car);
    console.log(wishlist.list);
    wishlist.updateDOM(car);
});