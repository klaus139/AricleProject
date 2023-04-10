import React from 'react'
import { useParams }from 'react-router-dom';
import {useSelector} from 'react-redux'
import { RootStore } from '../../utils/Type';
import UserInfo from '../../components/profile/UserInfo';
import OtherInfo from '../../components/profile/OtherInfo';
import UserBlogs from '../../components/profile/UserBlogs';

const profile = () => { 
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { slug }:any = useParams();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { auth } = useSelector((state: RootStore) => state)
  return (
    <div className='row my-3'>
      <div className='col-md-5 mb-3'>
        {
          auth.user?._id === slug
          ? <UserInfo />
          : <OtherInfo id={slug} />
        }

      </div>

      <div className='col-md-7'>
       <UserBlogs />
      </div>
    </div>
  )
}

export default profile