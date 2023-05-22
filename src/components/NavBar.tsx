import React, { Component, useState } from 'react'
import { Route, Link, useNavigate } from "react-router-dom";
import { clearLocalStorage, getLoginToken } from '../common/utilityService'
import { red } from '@mui/material/colors';

export default function NavBar(props: any) {

    let isLoggedIn: boolean = false

    // const [isLoggedIn, setisLoggedIn] = useState(false) 
     
    const navigate = useNavigate();

    const logoutHandle = () => {
        clearLocalStorage();
        navigate('/login')
        //    return  <Navigate to={'login'} />
    }

    if (getLoginToken()) {
        // setisLoggedIn(true);
        isLoggedIn = true;
    }
    else {
        // setisLoggedIn(false);
        isLoggedIn = false;
    }


    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary bg-body-dark bg-dark" data-bs-theme="white">
                    <div className="container-fluid">
                        <Link className="navbar-brand" to="#">NewsMonkey</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            {isLoggedIn ? (
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                    <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>


                                    <li className="nav-item"><Link to="/entertainment" className="nav-link"> Entertainment</Link></li>

                                    <li className="nav-item"><Link to="/business" className="nav-link"> Business </Link></li>


                                    <li className="nav-item"><Link to="/general" className="nav-link"> General</Link></li>
                                    <li className="nav-item"><Link to="/health" className="nav-link"> Health</Link></li>
                                    <li className="nav-item"><Link to="/science" className="nav-link"> Science</Link></li>
                                    <li className="nav-item"><Link to="/sports" className="nav-link"> Sports</Link></li>
                                    <li className="nav-item"><Link to="/technology" className="nav-link"> Technology</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                                    <li className="nav-item"><Link to="/country-data" className="nav-link"> Countries</Link></li>
                                    <li className="nav-item"><Link to="/universities" className="nav-link"> Universities</Link></li>



                                </ul>

                            ) : null}


                        </div>
                        <div>
                            {isLoggedIn ?
                                <button type="button" onClick={logoutHandle} className="btn btn-light cursor-pointer">Log Out</button>
                                :
                                null

                            }
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
