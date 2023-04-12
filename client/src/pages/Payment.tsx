import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useFlutterwave } from 'flutterwave-react-v3';




const payment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
  const blog = location.state.blog;

  return (
    <div>
      <div>
      <h1>You are about to download</h1>
        {blog.title} on pdf format
      </div>
      <div>
        <div>
          <h2>Each download coast ₦3000. You can pay via bank transfer or via card</h2>
          <p>upon successful payment the pdf document will be sent to your email</p>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default payment