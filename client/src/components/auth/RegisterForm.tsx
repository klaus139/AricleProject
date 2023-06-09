import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { InputChange, FormSubmit } from '../../utils/Type'
import { register } from '../../redux/actions/authAction'


const RegisterForm = () => {

  const initialState = { 
    name: '', account: '', number: '', password: '', cf_password: '' 
  }
  const [userRegister, setUserRegister] = useState(initialState)
  const { name, account, number, password, cf_password } = userRegister

  const [typePass, setTypePass] = useState(false)
  const [typeCfPass, setTypeCfPass] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChangeInput = (e: InputChange) => {
    const {value, name} = e.target
    setUserRegister({...userRegister, [name]:value})
  }

  const handleSubmit = (e: FormSubmit) => {
    e.preventDefault()
    dispatch(register(userRegister)as unknown as any) 
    navigate('/login')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-3">
        <label htmlFor="name" className="form-label">Name</label>

        <input type="text" className="form-control" id="name"
        name="name" value={name} onChange={handleChangeInput}
        placeholder="Not more than 30 chars." />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="account" className="form-label">
          Email 
        </label>

        <input type="text" className="form-control" id="account"
        name="account" value={account} onChange={handleChangeInput}
        placeholder="Example@gmail.com" />
      </div>
      <div className="form-group mb-3">
        <label htmlFor="number" className="form-label">
          PhoneNumber
        </label>

        <input type="text" className="form-control" id="number"
        name="number" value={number} onChange={handleChangeInput}
        placeholder="+2348011223344" />
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">Password</label>

        <div className="pass">
          <input type={typePass ? "text" : "password"} 
          className="form-control" 
          id="password"
          name="password" value={password} 
          onChange={handleChangeInput} 
          placeholder="Password must be at least 6 chars."
          />

          <small onClick={() => setTypePass(!typePass)}>
            {typePass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <div className="form-group mb-3">
        <label htmlFor="password" className="form-label">
          Confirm Password
        </label>

        <div className="pass">
          <input type={typeCfPass ? "text" : "password"} 
          className="form-control" 
          id="cf_password"
          name="cf_password" value={cf_password} 
          onChange={handleChangeInput} 
          placeholder="Confirm your password."
          />

          <small onClick={() => setTypeCfPass(!typeCfPass)}>
            {typeCfPass ? 'Hide' : 'Show'}
          </small>
        </div>
      </div>

      <button type="submit" className="btn btn-dark w-100 my-1">
        Register
      </button>
    </form>
  )
}

export default RegisterForm