// import logo from './logo.svg';
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import BasicInfoLength from "./components/Basic-info-length";
import "./App.css";

function App() {
    return (
        <div className="container-fluid">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/Basic-info-length" component={BasicInfoLength} />
                {/* <Route path="/courses" component={CoursesPage} /> */}
                {/* <Route component={PageNotFound} /> */}
            </Switch>
        </div>
    );
}

export default App;
