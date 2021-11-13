import './App.css';
import ProductContextProvider from './context/ProductContextProvider';
import Store from './components/Store';
import {Route, Switch , Redirect} from 'react-router-dom'
import ProductDetails from './components/ProductDetails';
import CartContextProvider from './context/CartContextProvider';
import Navbar from './components/shared/Navbar';
import ShowCart from './components/shared/ShowCart';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar />
     <Switch>
       <Route path="/products/:id" component={ProductDetails}/>
       <Route path="/products" component={Store}/>
       <Route path="/Showcart" component={ShowCart}/>
       <Redirect to="/products"/>
     </Switch>
     </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
