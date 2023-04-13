import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import './payment.css'

const Payment = () => {
  const location = useLocation();
  const blog = location.state.blog;

  const config = {
    public_key: 'FLWPUBK-780ae1d2a68b725031bf70638b214708-X',
    tx_ref: Date.now().toString(),
    amount: 3000,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: blog.user.account,
      phone_number: blog.user.role,
      name: blog.user.name,
    },
    customizations: {
      title: blog.title,
      description: blog.description,
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className="payment">
      <div className="payment__header">
        <h1 className="payment__title">You are about to download</h1>
        <p className="payment__subtitle">{blog.title} in pdf format</p>
      </div>
      <div className="payment__info">
        <div className="payment__card">
          <h2 className="payment__card-title">Pay with Card Each download costs <span className='span'>₦3000.</span></h2>
          <p className="payment__card-text">
            You can pay via bank transfer or via card upon successful payment the pdf document will be sent to your email
          </p>
          <button className="payment__button" onClick={() => {
            handleFlutterPayment({
              callback: (response) => {
                console.log(response);
                closePaymentModal(); // this will close the modal programmatically
              },
              onClose: () => {},
            });
          }}>Pay with Flutter</button>
        </div>
        <div className="payment__bank">
          <h2 className="payment__bank-title">You can also pay using bank transfer.</h2>
          <p className="payment__bank-text">
            Send the receipt of your payment to our email  <a href="mailto:oleanproject@gmail.com" className="p-text">oleanproject@gmail.com</a> and we will send the file upon confirmation of payment
          </p>
          <div className="payment__bank-details">
            <h1 className="payment__bank-name">Bank Details</h1>
            <p className="payment__bank-info">
              Bank Name : <span>First Bank</span>
            </p>
            <p className="payment__bank-info">
              Account Name : <span>Olean ltd</span>
            </p>
            <p className="payment__bank-info">
              Account Number : <span>2033124513</span>
            </p>
          </div>
        </div>
        
      </div>
      <div>
          <p>For Complaints or inquiry contact our admins on </p>
          <div className="payment__contact-card">
          <img src='https://nicklaus-portfolio.netlify.app/static/media/email.37b9e890eea501421fbf.png' alt="email" className='imgg' />
          <a href="mailto:oleanproject@gmail.com" className="p-text">oleanproject@gmail.com</a>
        </div>
        <div className="payment__contact-card">
          <img src='https://nicklaus-portfolio.netlify.app/static/media/mobile.145d9ce0157a56f8fcd8.png' alt="phone" className='imgg'/>
          <a href="tel:+2348065252945" className="p-text">+2348065252945</a>
        </div>
        </div>
    </div>
  );
};

export default Payment;
