import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { IBlog } from "../../utils/Type";
import { getAPI } from "../../utils/FetchData";
import Loading from "../../components/global/Loading";
import { showErrMsg } from "../../components/alert/Alert";
import DisplayBlog from "../../components/blog/DisplayBlog";

const DetailBlog = () => {
  const { slug } = useParams();
  
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

  if (loading) return <Loading />;

 

  return (
    <div className="my-4">
      {error && showErrMsg(error)}
      {blog && <DisplayBlog blog={blog} />}

     

     
    </div>
  );
};

export default DetailBlog;
