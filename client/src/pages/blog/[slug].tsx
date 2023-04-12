import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  {useSelector} from 'react-redux'

import { IBlog, RootStore } from "../../utils/Type";
import { getAPI } from "../../utils/FetchData";
import Loading from "../../components/global/Loading";
import { showErrMsg } from "../../components/alert/Alert";
import DisplayBlog from "../../components/blog/DisplayBlog";

const DetailBlog = () => {
  const { slug } = useParams();
  const {socket} = useSelector((state: RootStore) => state)
  
  const [blog, setBlog] = useState<IBlog>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    getAPI(`blog/${slug}`)
      .then((res) => {
        
        setBlog(res.data);
        setLoading(false);
      })
      .catch((err) => {
        
        setError(err.response.data.msg);
        setLoading(false);
      });

    return () => setBlog(undefined);
  }, [slug]);

  //join room
  useEffect(()=> {
    if(!slug || !socket) return;
    socket && socket.emit('joinRoom', slug)

    return () => {
      socket.emit('outRoom', slug)
    }

  },[slug, socket])

  if (loading) return <Loading />;

 

  return (
    <div className="my-4">
      {error && showErrMsg(error)}
      {blog && <DisplayBlog blog={blog} />}

     

     
    </div>
  );
};

export default DetailBlog;
