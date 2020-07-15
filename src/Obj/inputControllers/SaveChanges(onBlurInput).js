import React, {Component} from 'react';
import {render} from "react-dom";

class SaveChangesOnBlurInput extends React.Component{
    render() {
        return (
            <div className="nameProduct item" onClick={this.props.change} >
                {this.props.name}
            </div>
        );
    }
}
export default SaveChangesOnBlurInput;
