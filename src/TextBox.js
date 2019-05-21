import React from 'react';
import './TextBox.css';

export class TextBox extends React.Component {
  constructor(props){
    super(props);    
    this.handleUserInput = this.handleUserInput.bind(this);
  }
  handleUserInput(event) {
    this.props.onChangeUserInput(event.target.value);  
  }
  render() {  
    return (        
          <input type="text" 
              className={this.props.textBoxClassName}
              placeholder={this.props.placeholderText} 
              disabled={ this.props.disabled } 
              value={this.props.value}
              onChange={this.handleUserInput}
              />                
    );
  }
}

