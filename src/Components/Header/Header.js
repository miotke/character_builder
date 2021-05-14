import React, { Component, Fragment } from "react";

// Component imports
import "./header.css";

class Header extends Component {

    render() {
        return (
            <Fragment>
                <header className="header">
                    <h1 className="header-title">Character Builder</h1>
                </header>
            </Fragment>
        );
    }
}

export default Header;
