import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import PageRender from './PageRender';
import Header from './components/global/Header';
import Footer from './components/global/Footer';
import {Alert} from './components/alert/Alert';

import {refreshToken} from './redux/actions/authAction';
import { getCategories } from './redux/actions/categoryActions';
import { getHomeBlogs } from './redux/actions/blogAction';

import io from 'socket.io-client'
import SocketClient from './SocketClient'


function App() {
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(refreshToken() as unknown as any)
    dispatch(getCategories() as unknown as any)
    dispatch(getHomeBlogs()as unknown as any)
  },[dispatch])

  useEffect(()=> {
    const socket = io()
    dispatch({type: 'SOCKET', payload: socket})
    return () => { socket.close()}
  },[dispatch])

  return (
    <div className="container"> 
    <SocketClient />   
      <Router>
        <Alert />
      <Header />
        <Routes>
          <Route path="/" element={<PageRender />} />
          <Route path="/:page" element={<PageRender />} />
          <Route path="/:page/:slug" element={<PageRender />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
