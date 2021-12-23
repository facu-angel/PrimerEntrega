import express from "express";
import { Router } from "express";
import Library from "./library.js"
import Cart from './cart.js'
const app = express()
const routerP = Router()
const routerC = Router()
const library = new Library()
const cart = new Cart()
app.use(express.urlencoded({extended:true}))
app.set('views', './views')
app.set('view engine', 'ejs')
routerP.get('/', (req, res)=>{
    res.render('form', {
        id: req.params.id
    })
})
routerP.get('/:id', (req, res)=>{
    const product = library.products.find(e=>e.id == req.params.id)
    res.render('form',{
        id: req.params.id,
        product: product
    })
})
routerP.post('/', (req, res)=>{
    library.insert(req.body)
    res.render('form', {
        id: req.params.id
    })
})
routerP.put('/:id', (req, res)=>{
    libreria.update(req.params.id, req.body)
    res.send('Se ha actualizado el producto')
})
routerP.delete('/:id', (req, res)=>{
    libreria.delete(req.params.id)
    res.send('Se ha elimiado el producto')
})
routerC.post('/',(req, res)=>{
    cart.create()
    res.send(cart.create())
})
routerC.delete('/:id',(req, res)=>{
    cart.delete(req.params.id)
    res.send('Se ha eliminado el carrito')
})
routerC.get('/:id/productos', (req, res)=>{
    console.log(req.params.id_prod)
    const arrayProducts = cart.productsFromCart(req.params.id)
    res.render('list',{
        products : arrayProducts
    })
})
routerC.post('/:id/productos/:id_prod', (req, res)=>{
    const product = library.products.find(e=>e.id == req.params.id)
    cart.insertProductsToCart(req.params.id_prod, product)
})
routerC.delete('/:id/productos/:id_prood', (req, res)=>{
    const product = library.products.find(e=>e.id == req.params.id)
    cart.deleteProductFromCart(req.params.id_prood, product)
})
app.use('/api/productos', routerP)
app.use('/api/carrito', routerC)
app.listen( process.env.PORT || 8080)
