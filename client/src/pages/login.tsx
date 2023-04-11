import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import LoginPass from '../components/auth/LoginPass';
import {Link, useNavigate, useLocation} from 'react-router-dom';

import {RootStore} from '../utils/Type'

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const {auth} = useSelector((state:RootStore)=> state)

  useEffect(() => {
    if (auth.access_token) {
      let url = location.search.replace('?', '/');
      navigate(url);
    }
  }, [auth.access_token, navigate, location]);

 
  return (
    <div className='auth_page'>
      <div className='auth_box'>
        <h3 className='text-uppercase text-center mb-4'>Login</h3>

        {/* <SocialLogin /> */}

         <LoginPass /> 

        <small className='row my-2 text-primary' style={{cursor: 'pointer'}}>
          <span className='col-6'>
          <Link to='/forgot_password' className='col-6'>
            Forgot Password?
          </Link>
          </span>
         
          {/* <span className='col-6 text-end' onClick={() => setSms(!sms)}>
            { sms ? 'Sign in with password' : 'Sign in with SMS'}
          </span> */}

        </small>
        <p className='p3-5'>
          {`You don't have an account?`}
          <Link to={`/register${location.search}`} style={{color: 'crimson'}}>
              Register Now
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login