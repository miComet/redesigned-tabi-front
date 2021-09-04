import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => (
    <div className="jumbotron">
        <div>
            <h1>Redesigned-Tabi</h1>
        </div>
        <div>
            <p>Redesigned-Tabi</p>
        </div>
        <div>
            <p>
                Redesigned-Tabi is a web application that allows you to create
                and manage your own tabi.
            </p>
        </div>
        <div>
            <Link to="/question" className="btn btn-primary btn-lg">
                Get Started
            </Link>
        </div>

        {/* <p>hello.</p> */}
        {/* <Link to="about" className="btn btn-primary btn-lg">
      Learn more
    </Link> */}
    </div>
);

export default HomePage;
