import React from 'react';
import { IUser } from '../../utils/Type';
import {Link} from 'react-router-dom'

interface IProps {
    user: IUser
}

const AvatarComment: React.FC<IProps> = ({user}) => {
  return (
    <div className='me-1 avatar_comment'>
        <img src={user.avatar} alt='avatar' />

        <small className='d-block text-break'>
            <Link to={`/profile/${user._id}`}>
            {user.name}
            </Link>

        </small>
    </div>
  )
}

export default AvatarComment