export class Wishlist{
    constructor(){
    //no constructor variables needed
    //but it will be some kind of list
    //so constructor will be an array
    this.list = [] ;        
    }
    add(car) {
        this.list.push(car);
    }
    remove(id) {
    //filter returns a new array so 
    //when it finds the item that
    //matches the id, it will not be
    //added to the new array
        this.list = this.list.filter((car, index) => { id !== index})

        }
    }
//only one thing in this file so we do
//a default export for wishlist

export default Wishlist;