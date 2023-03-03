import React, { useState } from "react";
import {TypeProducts} from './typeProducts'
import './Product.css'

type ProductProps = {
product:TypeProducts
}
 export function Product (props:ProductProps) {

    const [details, setDetails] = useState(false)

    const [background, setBackground] = useState('yellow')

    return (

    <div className = 'Product'>
        <img src={props.product.image} className = 'ProdImg' alt={props.product.title} />
        <p>{props.product.title}</p>
        <p>{props.product.price}</p>

        <button style={{background : background}} onClick={() => {setDetails(prev => !prev); setBackground(background === 'yellow' ? 'turquoise' : 'yellow')}}>
           {details ? 'Hide details': 'Show details' }
        </button>
        {details && <p>{props.product.description}</p>}
        </div>
    )
}