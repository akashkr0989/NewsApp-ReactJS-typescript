import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import News from '../components/News'
import { ROUTES_URL } from '../constants/Routes'
import About from '../components/About'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from '../components/NotFound'


export class RouterRoutes extends Component<any> {

    pageSize = 4;

    render() {
        return (
            <Router>
                    <NavBar />

                    <Routes>

                        <Route path={ROUTES_URL.ABOUT.url} element={<About />} />

                        <Route path='/' element={<News key="general" pageSize={this.pageSize} category="general" />}/>

                        <Route path={ROUTES_URL.BUSINESS.url} element={<News key="business" pageSize={this.pageSize} category="business" />}/>

                        <Route path={ROUTES_URL.ENTERTAINMENT.url} element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" />}/>

                        <Route path={ROUTES_URL.GENERAL.url} element={<News key="general" pageSize={this.pageSize} category="general" />}/>
 
                        <Route path={ROUTES_URL.HEALTH.url} element={<News key="health" pageSize={this.pageSize} category="health" />}/>
 
                        <Route path={ROUTES_URL.SPORTS.url} element={<News key="sports" pageSize={this.pageSize} category="sports" />}/>

                        <Route path={ROUTES_URL.SCIENCE.url} element={<News key="science" pageSize={this.pageSize} category="science" />}/>
 
                        <Route path={ROUTES_URL.TECHNOLOGY.url} element={<News key="technology" pageSize={this.pageSize} category="technology" />}/>

                        <Route path='*' element={<NotFound />} />


                    </Routes>
            </Router>
        )
    }
}

export default RouterRoutes