import { Dispatch } from 'redux';
import { useNavigate } from 'react-router-dom';
import { AUTH,IAuthType } from '../types/authType';
import {IUserLogin, IUserRegister} from '../../utils/Type';
import { postAPI, getAPI } from '../../utils/FetchData';
import { ALERT, IAlertType } from '../types/alertType';
import { validRegister, validPhone } from '../../utils/Valid';
import { checkTokenExp } from '../../utils/checkTokenExp';


export const login = (userLogin:IUserLogin) => async(dispatch:Dispatch<IAuthType | IAlertType>) => {
  //const navigate = useNavigate()
   try{
    dispatch({type: ALERT, payload: {loading: true}})
    const res:any = await postAPI('login', userLogin)

    dispatch({
        type: AUTH,
        payload: res.data
    })
    dispatch({type: ALERT, payload: {success: res.data.msg}})
    localStorage.setItem('logged', 'olean-project')
    //navigate('/')

   }catch(err:any){
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
   }

}

export const register = (userRegister: IUserRegister) => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  const check = validRegister(userRegister)
  
  if(check.errLength > 0)
    return dispatch({ type: ALERT, payload: { errors: check.errMsg } })

  try {
    dispatch({ type: ALERT, payload: { loading: true } })
    
    const res = await postAPI('register', userRegister)

    dispatch({ type: ALERT, payload: { success: res.data.msg } })
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}

export const refreshToken = () => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  const logged = localStorage.getItem('logged')
  if(logged !== 'olean-project') return;
  
  try {
    dispatch({ type: ALERT, payload: { loading: true } })
    
    const res = await getAPI('refresh_token')
    dispatch({ type: AUTH, payload: res.data})

    dispatch({ type: ALERT, payload: {  } })
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const logout = (token: string) => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  const result = await checkTokenExp(token, dispatch)
  const access_token = result ? result : token
  
  try {
    localStorage.removeItem('logged')
    dispatch({ type: AUTH, payload: { } })
    await getAPI('logout', access_token)
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}


export const googleLogin = (id_token: string) => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    const res = await postAPI('google_login', { id_token })
    
    dispatch({ type: AUTH,payload: res.data })

    dispatch({ type: ALERT, payload: { success: res.data.msg } })
    localStorage.setItem('logged', 'devat-channel')
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}

export const facebookLogin = (accessToken: string, userID: string) => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  try {
    dispatch({ type: ALERT, payload: { loading: true } })

    const res = await postAPI('facebook_login', { accessToken, userID })
    
    dispatch({ type: AUTH,payload: res.data })

    dispatch({ type: ALERT, payload: { success: res.data.msg } })
    localStorage.setItem('logged', 'devat-channel')
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}

export const loginSMS = (phone: string) => 
async (dispatch: Dispatch<IAuthType | IAlertType>) => {
  const check = validPhone(phone)
  console.log(check)
  if(!check) return dispatch({ 
    type: ALERT, 
    payload: { errors: 'Phone number format is incorrrect'}
  });
  try {
    console.log('ok')


    dispatch({ type: ALERT, payload: { loading: true } })

    // const res = await postAPI('login_sms', { phone})
    
    
    // dispatch({ type: AUTH,payload: res.data })

    // dispatch({ type: ALERT, payload: { success: res.data.msg } })
    // localStorage.setItem('logged', 'devat-channel')
    
  } catch (err: any) {
    dispatch({ type: ALERT, payload: { errors: err.response.data.msg } })
  }
}