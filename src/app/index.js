/*
* @Author: Nisal
* @Date:   2017-08-28 21:05:03
* @Last Modified by:   nishal
* @Last Modified time: 2017-09-03 08:03:53
*/
import React from 'react';
import { render } from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {

	constructor() {
        super();
        this.state = {
          homeLink: "Home"
        };
	}

	onGreet() {
    		alert("Hi");
    }

    onChangeLinkName(newName) {
        this.setState({
            homeLink: newName
        });
	}

    render() {

    	var user={
    		name:'Nisal',
    		hobbies:['sports','gaming']
    	};    	

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header homeLink={this.state.homeLink} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home 
                        name={"Max"} 
                        initialAge={24} 
                        user={user} 
                        greet={this.onGreet}
						changeLink={this.onChangeLinkName.bind(this)}
						initialLinkName={this.state.homeLink}
						
                        />
                    </div>
                </div>
            </div>            
        );
    }
}

render(<App />, window.document.getElementById('app'));