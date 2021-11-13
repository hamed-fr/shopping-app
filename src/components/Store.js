import React,{useContext} from 'react';
import { productsContext } from '../context/ProductContextProvider';
import Product from './shared/Product';
import styles from './Store.module.css'

const Store = () => {
    
    const products = useContext(productsContext)
    
    return (
        <div className={styles.container} >
           {
               products.map(product => <Product key={product.id} productsData={product}/>

               )
           } 
        </div>
    );
};


export default Store;