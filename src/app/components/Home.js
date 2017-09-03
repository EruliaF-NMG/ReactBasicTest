/*
* @Author: nishal
* @Date:   2017-09-02 07:40:49
* @Last Modified by:   nishal
* @Last Modified time: 2017-09-02 17:45:32
*/
import React from "react";
import PropTypes from 'prop-types';

export class Home extends React.Component {

	constructor(props) {
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
		};
		console.log("Constructor");
    }

    componentWillMount() {
        console.log("Component will mount");
    }

    componentDidMount() {
        console.log("Component did mount!");
    }

    componentWillReceiveProps(nextProps) {
        console.log("Component will receive props", nextProps);
	}

	shouldComponentUpdate(nextProps, nextState) {
        console.log("Should Component update", nextProps, nextState);
        // if (nextState.status === 1) {
        //     return false;
        // }
        return true;
    }

    componentWillUpdate(nextProps, nextState) {
        console.log("Component will update", nextProps, nextState);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component did update", prevProps, prevState);
    }

    componentWillUnmount() {
        console.log("Component will unmount");
	}

    onMakeOlder() {
        this.setState({
            age: this.state.age + 3
		});
	}

	onChangeLink() {
        this.props.changeLink(this.state.homeLink);
	}

	onHandleChange(event) {
        this.setState({
            homeLink: event.target.value
        });
	}

    render() {    	
        return (
            <div>
                <p>In a new Component!</p>                 
                 <p>Hobbies - {this.props.user.name} - {this.state.age}</p>
                 <p>Status {this.state.status}</p>
                 <ul>
					{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li> )}
                 </ul>
                 
                 <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>
                 <hr/>
                 <button onClick={this.props.greet} className="btn btn-primary">Greet</button>
                 <hr/>
                 <input type="text" value={this.state.homeLink} onChange={(event) => this.onHandleChange(event)} />
                 <button onClick={this.onChangeLink.bind(this)} className="btn btn-primary">Change Header Link</button>
            </div>
        );
    }
}

Home.propTypes={
	name:PropTypes.string,
	initialAge:PropTypes.number,
	user:PropTypes.object,
	greet:PropTypes.func,
	initialLinkName:PropTypes.string
}