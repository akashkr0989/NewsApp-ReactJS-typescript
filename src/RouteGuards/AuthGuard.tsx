

import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import * as utility from '../common/utilityService'

export default function AuthGuard() {


    const accessToken = utility.getLoginToken();

    return (
        accessToken ? <Outlet /> : <Navigate to="login" />
    )
}

