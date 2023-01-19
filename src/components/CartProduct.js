import { CartContext } from './CartContext';
import { useContext } from "react";
import { getProductData } from './productsStore';
import Image from 'next/image';

const CartProduct = props => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <Image src={productData.image} width="200" height="200"></Image>
            <button type='button' onClick={() => cart.addOneToCart(productData.id)} className='mx-2 border px-3 rounded-md'>+</button>
                  <button type='button' onClick={() => cart.removeOneFromCart(productData.id)}  className='mx-2 border px-3 rounded-md'>-</button>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <button type='button' size="sm" onClick={() => cart.deleteFromCart(id)}>Remove</button>
            <hr></hr>
        </>
    )
}

export default CartProduct;