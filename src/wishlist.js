export class Wishlist{
    constructor(){
    //no constructor variables needed
    //but it will be some kind of list
    //so constructor will be an array
    this.list = [] ;        
    }
    add(car) {
    //this.list adds car to the array
        this.list.push(car);
    //moved code below from updateDOM since it will allways go with adding
    //a new car. this solves D R Y issue of repeating code.
        const listContainer = document.getElementById("wishListContainer");
        const carDiv = document.createElement("div");
        carDiv.id = this.list.indexOf(car);
        carDiv.textContent = `${car.model}`;
        listContainer.appendChild(carDiv);
    }
    remove(id) {
    //filter returns a new array so 
    //when it finds the item that
    //matches the id, it will not be
    //added to the new array
        this.list = this.list.filter((car, index) => { id !== index})

        }
        //updateDOM(car){ method was deleted since it would have been repeating
        //code and moved to the add(car) method
            
            // const p = document.getElementById("p");
            // const p = document.getElementById("p");
            // const p = document.getElementById("p");
        
    }

//after adding listener to the submit and making a new car and adding to the
//wishlist in index.js, now we need to connect it to the DOM
//so we need to access the div wishlistcontainer and the three paragraph tags
// that display the cars information in the index.html file



//only one thing in this file so we do
//a default export for wishlist

export default Wishlist;