import { useContext, useState } from 'react';
import { currencyFormatter } from '../util/formatting.js';
import Button from './UI/Button.jsx';
import CartContext from '../store/CartContext.jsx';

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const [isSubscribed, setIsSubscribed] = useState(false);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }


  function handleSubscribe() {
    setIsSubscribed(true); 
    console.log(`User subscribed to meal: ${meal.name}`); 
    
  }

  return (
    <li className="meal-item">
      <article>
           <img src ={`http://localhost:3000/${meal.image}`} alt={meal.name}/>
           <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
            <p className="meal-item-description">{meal.description}</p>
           </div>
           <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
          <Button onClick={handleSubscribe} disabled={isSubscribed}>
            {isSubscribed ? 'Subscribed!' : 'Subscribe'}
          </Button>
        </p>
      </article>
    </li>
  );
}


