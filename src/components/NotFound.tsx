import React, { Component } from 'react'
import { useRouteError } from "react-router-dom";

export class NotFound extends Component {


    render() {
        return (
            <div className='container my-10' style={{justifyContent: 'center'}}>
                <h1>404 Oops! - NOT FOUND</h1>
                <p>Sorry, an unexpected error has occurred.</p>
                <p>
                    {/* <i>{error.statusText || error.message}</i> */}
                </p>
            </div>
        )
    }
}

export default NotFound
