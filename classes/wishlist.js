export class Wishlist{
    this.list = [] ;        
    }
    add(car) {
        this.list.push(car);
    }
    remove(id) {
        this.list = this.list.filter((car, index)) => { id !== index}

        }
    }
}