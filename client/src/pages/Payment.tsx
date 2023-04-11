import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';




const payment = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const location = useLocation();
  const blog = location.state.blog;

  return (
    <div>
        {blog.title}
        {blog._id}
    </div>
  )
}

export default payment