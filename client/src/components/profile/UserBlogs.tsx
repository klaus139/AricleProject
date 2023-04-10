import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

import { RootStore, IBlog } from '../../utils/Type';
import { getBlogsByUserId } from '../../redux/actions/blogAction';
import CardHoriz from '../cards/CardHoriz';
import Loading from '../global/Loading';
import Pagination from '../global/Pagination';

const UserBlogs = () => {
  const { blogsUser } = useSelector((state: RootStore) => state);
  const dispatch = useDispatch();
  const user_id: any = useParams().slug;

  const [blogs, setBlogs] = useState<IBlog[]>();
  const [total, setTotal] = useState(0);

  const location = useLocation();

  useEffect(() => {
    if (!user_id) return;

    if (blogsUser.every((item: { id: string }) => item.id !== user_id)) {
      dispatch(getBlogsByUserId(user_id, location.search ) as unknown as any);
    } else {
      const data = blogsUser.find((item: { id: string }) => item.id === user_id);
      if (!data) return;

      setBlogs(data.blogs);
      setTotal(data.total);
      if (data.search) location.search = data.search;
    }
  }, [user_id, blogsUser, dispatch, location]);

  const handlePagination = (num: number) => {
    const search = `?page=${num}`;
    dispatch(getBlogsByUserId(user_id, search) as unknown as any);
  };

  if (!blogs) return <Loading />;

  if (blogs.length === 0 && total < 1)
    return <h3 className="text-center">No Blogs</h3>;

  return (
    <div>
      <div>
        {blogs.map((blog) => (
          <CardHoriz key={blog._id} blog={blog} />
        ))}
      </div>

      <div>
        <Pagination total={total} callback={handlePagination} />
      </div>
    </div>
  );
};

export default UserBlogs;
