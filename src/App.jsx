import Header from './components/Header';
import Meals from './components/Meals';
import { CartContextProvider } from './store/CartContext';
import { UserProgressProvider } from './store/UserProgressContext';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Login from './components/Login';

function App() {
  return (
    
    <UserProgressProvider>
    <CartContextProvider>
     <Header />
     <Meals />
     <Cart />
     <Checkout />
    </CartContextProvider>
    </UserProgressProvider>
  );
}

export default App;
