import React, { Component } from 'react';
import './Buttons.css';

export class Button extends Component {
 	constructor(props) {
 		super(props);
 		this.handleClick = this.handleClick.bind(this);
 	}
 	handleClick(event) {
 		this.props.onClick(this.props.operation);
 	}
  	render() {  
    	return (
        	<a href="#" value={this.props.value} 
        		alt={this.props.value} 
        		operation={this.props.operation} 
        		onClick={this.handleClick}  > 
        			{this.props.value}
        		</a>
    	);
  	}
}
