import React from 'react'
import * as utility from '../common/utilityService'
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

export default function LoginGuard() {

  const navigate = useNavigate();
  const accessToken = utility.getLoginToken();


  const route = () => {
    // console.log('accessToken', accessToken)

    utility.clearLocalStorage();
    return <Navigate to='login' />
  }

  return (
    accessToken ? <Navigate to='/' /> : route()
  )
}