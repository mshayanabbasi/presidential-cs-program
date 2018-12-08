import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import Home from './components/Home/home';
// import About from './components/About/About';
import About from './components/About/about';
import Form from './components/Form/form';
import CloudNative from './components/CloudNative/cloudNative';
import AI from './components/Ai/ai';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import PhoneNumber from "./components/auth/PhoneNumber";
import VerificationCode from "./components/auth/VerificationCode";
import Directors from '../src/components/Directors/Directors';
import Contact from '../src/components/ContactUs/ContactUs';


import history from './History';
import ManagementCommittee from './components/ManagementCommittee/ManagementCommittee';


class Routers extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Navbar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/verification" component={VerificationCode} />
                    <Route exact path="/form" component={Form} />
                    <Route exact path="/apply" component={PhoneNumber} />
                    <Route exact path="/artificial-inteligence" component={AI} />
                    <Route exact path="/cloud-native" component={CloudNative} />
                    <Route exact path="/directors" component={Directors} />
                    <Route exact path="/subscribe" component={Contact} />
          			<Route exact path="/managementcommittee" component={ManagementCommittee} />

                    <Copyright />

                </div>
            </Router>
        )
    }
}

export default Routers;