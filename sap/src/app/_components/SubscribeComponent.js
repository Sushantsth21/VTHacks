'use client';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

// Define your component without TypeScript types
const SubscribeComponent = ({ priceId, price, description }) => {
  const handleSubmit = async () => {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY
    );
    if (!stripe) {
      return;
    }
    try {
      const response = await axios.post('/api/stripe/checkout', {
        priceId: priceId
      });
      const data = response.data;
      if (!data.ok) throw new Error('Something went wrong');
      await stripe.redirectToCheckout({
        sessionId: data.result.id
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      Click the button below to get {description}
      <button onClick={handleSubmit}>
        Upgrade to {price}
      </button>
    </div>
  );
};

export default SubscribeComponent;
