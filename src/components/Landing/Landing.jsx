
import React, { useContext } from 'react'
import Hero from './Hero'
import Works from './Works'
import { Context } from '../../main';
import { Navigate } from 'react-router-dom';

const Landing = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  if (isAuthenticated) {
    return <Navigate to="/jobboard" />;
  }
  return (
   <div>
    <Hero/>
    <Works/>
   </div>
  )
}

export default Landing
