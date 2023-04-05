import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { FormSubmit } from '../../utils/Type';
import { loginSMS } from '../../redux/actions/authAction';


const LoginSMS = () => {
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const handleSubmit = (e: FormSubmit) => {
      e.preventDefault()
      dispatch(loginSMS(phone) as unknown as any)

    }
  return (
    <form onSubmit={handleSubmit}>
        <div className='form-group mb-2'>
            <label htmlFor='phone' className='form-label'>Phone number</label>
            <input type='text' className='form-control' id='phone' 
            value={phone} onChange={e => setPhone(e.target.value)} 
            placeholder="+2348000000000"
            />
        </div>
        <button type="submit" className='btn btn-dark w-100' disabled={phone ? false : true}>
            Login
        </button>
    </form>
  )
}

export default LoginSMS