import { CartContext } from './CartContext';
import { useContext } from "react";
import { getProductData } from './productsStore';
import Image from 'next/image';
import { AiOutlinePlus, AiOutlineMinus, AiOutlineCloseCircle } from "react-icons/ai";

const CartProduct = props => {
    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <>
        <div className='flex space-x-4 hover:shadow-lg hover:border hover:border-opacity-50 border-b rounded-md p-4 h-[110px] w-full'>
        <Image className='object-cover h-[80px] w-[60px]' src={productData.image} alt={productData.title} width={60} height={80}></Image>
            <h3 className='w-[200px] text-[10px] sm:text-[15px] font-serif overflow-auto'>{productData.title}</h3>
            <div className='flex justify-end items-center space-x-2 group'>
            <form className='flex flex-wrap mr-2'>
                <div className='ml-2 flex justify-end'>
                  <button type='button' onClick={() => cart.removeOneFromCart(productData.id)}  className='px-2 hover:bg-rose-100 active:bg-rose-300 active:text-rose-700 hover:ease-in-out duration-300 hover:text-rose-500 rounded-md'><AiOutlineMinus/></button>
                  <label column="true" className='mx-1'>{quantity}</label>
                  <button type='button' onClick={() => cart.addOneToCart(productData.id)} className='px-2 hover:bg-green-100 active:bg-green-300 active:text-green-700 hover:ease-in-out duration-300 hover:text-green-500 rounded-md'><AiOutlinePlus/></button>
                </div>
              </form>
              <div className='flex'>
            <p>${ (quantity * productData.price).toFixed(2) }</p>
            <button className='pl-1 sm:mr-0' type='button' onClick={() => cart.deleteFromCart(id)}><AiOutlineCloseCircle className='hover:text-rose-500 text-xl'/></button>
            </div>
            </div>
        </div>    
        </>
    )
}

export default CartProduct;