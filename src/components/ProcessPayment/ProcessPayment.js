import React from 'react';
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitForm from '../SplitForm/SplitForm';

const stripePromise = loadStripe(
  "pk_test_51Ie4HqFLtEGj78FmwlexCmAY9V7UBnv36WglbCvY5xuPeFbyzqZ0lCO78dYhAhMbdtA1ZY5KYc5M933Kp9QKEAwp00QSEY6kft"
);

const ProcessPayment = () => {
    return (
      <Elements stripe={stripePromise}>
        <SplitForm />
      </Elements>
    );
};

export default ProcessPayment;