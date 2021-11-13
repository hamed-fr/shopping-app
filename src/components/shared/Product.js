import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import { isInCart, quantityCounter, shorten } from '../helper/functions'
import Trash from  '../../icons/trash.svg'
import styles from './Product.module.css'

const Product = ({productsData}) => {
   
    const {state, dispatch} =  useContext(CartContext);

    return (
        <div className={styles.container}>
            <img className={styles.cardImage} src={productsData.image} alt="product" style={{width: "200px"}}/>
            <h3>{shorten(productsData.title)}</h3>
            <p>{productsData.price}</p>
            <div className={styles.linkContainer}>
                <Link to={`/products/${productsData.id}`}>detalis</Link>
            <div className={styles.buttonContainer}>
                {quantityCounter(state , productsData.id) === 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DELETE_ITEM" , payload: productsData})}><img src={Trash} alt="producttrash" style={{width: "13px"}}/></button>}
                 {quantityCounter(state , productsData.id) > 1 && <button className={styles.smallButton} onClick={() => dispatch({type:"DECREASE" , payload: productsData})}>-</button>}
                {quantityCounter(state , productsData.id) > 0 && <span className={styles.container}>{quantityCounter(state , productsData.id)}</span>}
                {
                    isInCart(state , productsData.id) ? 
                    <button className={styles.smallButton} onClick={() => dispatch({type:"INCREASE" , payload: productsData})}>+</button> :
                    <button onClick={() => dispatch({type:"ADD_ITEM" , payload: productsData})}>add to cart</button>
                }
            </div>
        </div>
                </div>
    );
};

export default Product;