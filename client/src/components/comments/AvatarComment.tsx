import React from 'react';
import { IUser } from '../../utils/Type';


interface IProps {
    user: IUser
}

const AvatarComment: React.FC<IProps> = ({user}) => {
  return (
    <div className='me-1 avatar_comment'>
        <img src={user.avatar} alt='avatar' />

        <small className='d-block text-break'>
           
            {user.name}
            

        </small>
    </div>
  )
}

export default AvatarComment