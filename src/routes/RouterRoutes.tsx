import React, { Component } from 'react'
import NavBar from '../components/NavBar'
import News from '../components/News'
import { ROUTES_URL } from '../constants/Routes'
import About from '../components/About'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import NotFound from '../components/NotFound'
import Signup from '../components/Signup/index'
import Login from '../components/Login/index'
import AuthGuard from '../RouteGuards/AuthGuard'
import LoginGuard from '../RouteGuards/LoginGuard'
import FormikLearning from '../components/Login/Learning/FormikLearning'


export class RouterRoutes extends Component<any> {

    pageSize = 4;

    render() {
        return (
            <Router>
                <Routes>


                    <Route path='login' element={<Login />} />
                        <Route path='register' element={<Signup />} />
                    <Route element={<LoginGuard />} >


                    </Route>


                    <Route element={<AuthGuard />} >

                        <Route path={ROUTES_URL.ABOUT.url} element={<About />} />

                        <Route path='/' element={<News key="general" pageSize={this.pageSize} category="general" />} />

                        <Route path={ROUTES_URL.BUSINESS.url} element={<News key="business" pageSize={this.pageSize} category="business" />} />

                        <Route path={ROUTES_URL.ENTERTAINMENT.url} element={<News key="entertainment" pageSize={this.pageSize} category="entertainment" />} />

                        <Route path={ROUTES_URL.GENERAL.url} element={<News key="general" pageSize={this.pageSize} category="general" />} />

                        <Route path={ROUTES_URL.HEALTH.url} element={<News key="health" pageSize={this.pageSize} category="health" />} />

                        <Route path={ROUTES_URL.SPORTS.url} element={<News key="sports" pageSize={this.pageSize} category="sports" />} />

                        <Route path={ROUTES_URL.SCIENCE.url} element={<News key="science" pageSize={this.pageSize} category="science" />} />

                        <Route path={ROUTES_URL.TECHNOLOGY.url} element={<News key="technology" pageSize={this.pageSize} category="technology" />} />

                        <Route path='learn-formik' element={<FormikLearning />} />

                    </Route>


                    {/* <Route path='*' element={<NotFound />} /> */}


                </Routes>

            </Router>
        )
    }
}

export default RouterRoutes