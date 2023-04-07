import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import News from '../components/News'
import { ROUTES_URL } from '../constants/Routes'
import About from '../components/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from '../components/NotFound'


export class RouterRoutes extends Component<any> {
    render() {
        return (
            <Router>
                    <NavBar />

                    <Routes>

                        <Route path={ROUTES_URL.ABOUT.url} element={<About />} />

                        <Route path='/' element={<News key="general" pageSize={5} category="general" />}/>

                        <Route path={ROUTES_URL.BUSINESS.url} element={<News key="business" pageSize={5} category="business" />}/>

                        <Route path={ROUTES_URL.ENTERTAINMENT.url} element={<News key="entertainment" pageSize={5} category="entertainment" />}/>

                        <Route path={ROUTES_URL.GENERAL.url} element={<News key="general" pageSize={5} category="general" />}/>
 
                        <Route path={ROUTES_URL.HEALTH.url} element={<News key="health" pageSize={5} category="health" />}/>
 
                        <Route path={ROUTES_URL.SPORTS.url} element={<News key="sports" pageSize={5} category="sports" />}/>

                        <Route path={ROUTES_URL.SCIENCE.url} element={<News key="science" pageSize={5} category="science" />}/>
 
                        <Route path={ROUTES_URL.TECHNOLOGY.url} element={<News key="technology" pageSize={5} category="technology" />}/>

                        <Route path='*' element={<NotFound />} />


                    </Routes>
            </Router>
        )
    }
}

export default RouterRoutes