class Cart{
    constructor(){
        this.id = 0
        this.carts = []
    }
    create(){
        const cart = {
            id: id + 1,
            timeStamp: new Date().toTimeString(),
            products: []
        }
        this.carts.push(cart)
        return cart.id
    }
    delete(id){
        this.carts = this.carts.filter(e=>e.id != id)
    }
    productsFromCart(id){
        if(this.carts.length == 0){
            return 'Todavia no existe ningun carrito'
        }else{
            const cart = this.carts.find(e=>e.id == id)
            return(cart.products)
        }
    }
    insertProductsToCart(id, obj){
        const cart = this.carts.find(e=>e.id == id)
        cart.products.push(obj)
    }
    deleteProductFromCart(id, obj){
        const cart = this.carts.find(e=>e.id == id)
        cart.products = cart.products.filter(e=>e.id != obj.id)
    }
}
export default Cart