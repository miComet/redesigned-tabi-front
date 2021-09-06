import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <div>
            <p>Redesigned-Tabi</p>
        </div>
        <div>
            <Link to="/Basic-info-length" className="btn btn-primary btn-lg">
                Get Started
            </Link>
        </div>
    </div>
);

export default HomePage;
