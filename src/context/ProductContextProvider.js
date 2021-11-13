import React, {useState, useEffect, createContext} from 'react';
import { getProducts } from '../services/api';

export const productsContext = createContext()

const ProductContextProvider = (props) => {
    
    const [products , setProducts] = useState([]);

    useEffect(() =>{
     const fetchAPI =async () =>{
        setProducts(await getProducts())
    }
        
     fetchAPI()
    
    },[])


    return (
        <productsContext.Provider value={products}>
            {props.children}
        </productsContext.Provider>
    );
};

export default ProductContextProvider; 
