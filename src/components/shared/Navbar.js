import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContextProvider';
import shop from '../../icons/shop.svg';
import styles from './Navbar.module.css'

const Navbar = () => {
   
    const {state} = useContext(CartContext)
   
    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <Link className={styles.productLink} to="/product">Product</Link>
            <div className={styles.iconContainer}>
          <Link to="/showcart"><img src={shop} alt="shop"/></Link>
          <span>{state.itemsCounter}</span>
            </div>
            </div>
        </div>
    );
};

export default Navbar;