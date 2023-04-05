import React from 'react'
import { useDispatch } from 'react-redux'

import { GoogleLogin, GoogleLoginResponse } from 'react-google-login-lite';
import { FacebookLogin, FacebookLoginAuthResponse } from 'react-facebook-login-lite';

import { googleLogin, facebookLogin } from '../../redux/actions/authAction'

const SocialLogin = () => {
  const dispatch = useDispatch()

  const onSuccess = (googleUser: GoogleLoginResponse) => {
    const id_token = googleUser.getAuthResponse().id_token
    dispatch(googleLogin(id_token)as unknown as any)
  }
  
  const onFBSuccess = (response: FacebookLoginAuthResponse) => {
    const { accessToken, userID } = response.authResponse
    dispatch(facebookLogin(accessToken, userID)as unknown as any)
  }
  

  return (
    <>
      <div className="my-2">
        <GoogleLogin 
        client_id='601283367162-pbqftl2pk6ceop8d90copsjplf2b4bs7.apps.googleusercontent.com'
        cookiepolicy='single_host_origin'
        onSuccess={onSuccess}
        />
      </div>

      <div className="my-2">
        <FacebookLogin 
        appId="333953021722051"
        onSuccess={onFBSuccess}
        />
      </div>
    </>
  )
}

export default SocialLogin