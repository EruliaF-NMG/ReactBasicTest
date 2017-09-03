/*
* @Author: nishal
* @Date:   2017-09-02 07:40:39
* @Last Modified by:   nishal
* @Last Modified time: 2017-09-02 16:37:01
*/
import React from "react";

export const Header = (props) => {
    return (
        <nav className="navbar navbar-default">
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><a href="#">{props.homeLink}</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};