import React from "react";
import axios from "axios";
import { useSelector } from "react-redux/es/exports";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
// import {showModal} from './store/modalSlice'
import './App.css';
import {Product} from './components/listProduct/Product'
import { Modal } from "./components/ModalWindow/Modal";
import {TypeProducts} from './components/listProduct/typeProducts'
import {showModal} from './store/modalSlice'

function App() {

const showModal = useSelector(store =>store)
console.log(showModal)

const dispatch = useDispatch()
// const setDispatch = () => dispatch(showModal())

const [products, setProducts] = React.useState<TypeProducts[]>([])
const [loading, setLoading] = React.useState(false)
const [error, setError] = React.useState('')

// const sobaka = () => dispatch(showModal(showModal))

async function fetchProducts () {
    await axios.get<TypeProducts[]>('https://fakestoreapi.com/products?limit=5')
    .then(response => setProducts(response.data))
    .catch(error =>{
       setLoading(false)
       setError(error.message)
    })
    
    setLoading(false)
}

React.useEffect(() => {
    setLoading(true)
    fetchProducts()
},[])
    
return (
<div className="container">

    {error && <p>{error}</p>}
    {loading && <h1 style={{textAlign: "center"}}>Loading...</h1>}
    {showModal ? <Modal/> : null}
    <button>Show modal window</button>
    {products.map(product => <Product product={product} key = {product.id}/>)}
    
</div>
    )
}

export default App;