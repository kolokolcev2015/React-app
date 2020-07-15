import React, {Component} from 'react';
import {render} from "react-dom";

class ChangeOnClickText extends React.Component{
    render() {
        return (
           <input placeholder={this.props.name} onBlur={this.props.func}/>
        );
    }
}
export default ChangeOnClickText;
