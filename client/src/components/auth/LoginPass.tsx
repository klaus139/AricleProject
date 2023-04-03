import React, {useState} from 'react'
import { InputChange } from '../../utils/Type';
const LoginPass = () => {
    const initialState = { account: '', password: ''}
    const [userLogin, setUserLogin] = useState(initialState);
    const {account, password} = userLogin
    const [typePass, setTypePass] = useState(false)

    const handleChangeInput = (e: InputChange) => {
        const {value, name} = e.target;
        setUserLogin({...userLogin, [name]:value})

    }

  return (
    <form>
        <div className='form-group mb-3'>
            <label htmlFor='account' className='form-label'>Email / Phone number</label>
            <input type='text' className='form-control' id='account' name='account' 
            value={account} onChange={handleChangeInput}
            />
        </div>

        <div className='form-group mb-3'>
            <label htmlFor='account' className='form-label'>Password</label>
           <div className='pass'>
           <input type={typePass ? 'text' : 'password'} className='form-control' id='password' name='password' 
            value={password} onChange={handleChangeInput}
            />

            <small onClick={() => setTypePass(!typePass)}>
                {typePass ? 'Hide' : 'Show'}
            </small>
           </div>
        </div>

        <button type='submit' className='btn btn-dark w-100 mt-1' disabled={(account && password) ? false : true}>
            Login
        </button>
    </form>
  )
}

export default LoginPass



// import React, { useState } from 'react';
// import { InputChange } from '../../utils/Type';
// import './LoginPass.css';

// const LoginPass = () => {
//   const initialState = { account: '', password: '' };
//   const [userLogin, setUserLogin] = useState(initialState);
//   const { account, password } = userLogin;
//   const [typePass, setTypePass] = useState(false);

//   const handleChangeInput = (e: InputChange) => {
//     const { value, name } = e.target;
//     setUserLogin({ ...userLogin, [name]: value });
//   };

//   return (
//     <div className="auth_page">
//       <div className="auth_box">
//         <form>
//           <div className="form-group">
//             <label htmlFor="account">Email / Phone number</label>
//             <input
//               type="text"
//               className="form-control"
//               id="account"
//               name="account"
//               value={account}
//               onChange={handleChangeInput}
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <div className="pass">
//               <input
//                 type={typePass ? 'text' : 'password'}
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 value={password}
//                 onChange={handleChangeInput}
//               />

//               <small onClick={() => setTypePass(!typePass)}>
//                 {typePass ? 'Hide' : 'Show'}
//               </small>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="btn btn-dark w-100"
//             disabled={!account || !password}
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPass;
