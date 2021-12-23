class Library {
    constructor(){
        this.products = []
        this.id = 0
    }
    insert(obj){
        const object ={
            id: this.id + 1,
            timeStamp: new Date().toTimeString(),
            title: obj.title,
            description: obj.description,
            codigo: obj.codigo,
            price: obj.price,
            stock: obj.stock
        }
        this.products.push(object)
    }
    delete(id){
        this.products = this.products.filter(e=>e.id != id)
    }
    update(id, obj){
        const uProduct = this.products.find(e=>e.id == id)
        uProduct = {
            id: id,
            timeStamp: uProduct.timeStamp,
            title: obj.title,
            description: obj.description,
            codigo: obj.codigo,
            price: obj.price,
            stock: obj.stock
        }
        this.delete(id)
        this.products.push(uProduct)
    }
}
export default Library