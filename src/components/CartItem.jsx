import { useState } from 'react';
import { currencyFormatter } from '../util/formatting';

export default function CartItem({ name, quantity, price, onIncrease, onDecrease }) {
    const [frequency, setFrequency] = useState('weekly');
    const [cartTotal, setTotal] = useState(quantity * price);

    const updateTotal = (freq) => {
        let multiplier = 1;
        if (freq === 'monthly') multiplier = 30;
        else if (freq === 'quarterly') multiplier = 120;
        else if(freq == 'weekly') multiplier = 7;
        setTotal(quantity * price * multiplier);
        setFrequency(freq);
    };

    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {currencyFormatter.format(price)}
                <div class="radio-group">
    <input
        type="radio"
        id={`None-${name}`}
        name={`frequency-${name}`}
        value="None"
        checked={frequency === 'None'}
        onChange={() => updateTotal('None')}
    />
    <label htmlFor={`None-${name}`}>None</label>
    <input
        type="radio"
        id={`weekly-${name}`}
        name={`frequency-${name}`}
        value="weekly"
        checked={frequency === 'weekly'}
        onChange={() => updateTotal('weekly')}
    />
    <label htmlFor={`weekly-${name}`}>Weekly</label>
    <input
        type="radio"
        id={`monthly-${name}`}
        name={`frequency-${name}`}
        value="monthly"
        checked={frequency === 'monthly'}
        onChange={() => updateTotal('monthly')}
    />
    <label htmlFor={`monthly-${name}`}>Monthly</label>
    <input
        type="radio"
        id={`quarterly-${name}`}
        name={`frequency-${name}`}
        value="quarterly"
        checked={frequency === 'quarterly'}
        onChange={() => updateTotal('quarterly')}
    />
    <label htmlFor={`quarterly-${name}`}>Quarterly</label>
</div>
            </p>
            <p>
                Total: {currencyFormatter.format(cartTotal)}
            </p>
            <p className="cart-item-actions">
                <button onClick={onDecrease}>-</button>
                <span>{quantity}</span>
                <button onClick={onIncrease}>+</button>
                
            </p>
            
        </li>
    );
}
