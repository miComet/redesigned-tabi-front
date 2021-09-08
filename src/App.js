// import logo from './logo.svg';
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Header from "./components/Header";
import BasicInfoLength from "./components/BasicInfo/BasicInfoLength";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/BasicInfoLength" component={BasicInfoLength} />
                {/* <Route path="/courses" component={CoursesPage} /> */}
                {/* <Route component={PageNotFound} /> */}
            </Switch>
        </>
    );
}

export default App;
