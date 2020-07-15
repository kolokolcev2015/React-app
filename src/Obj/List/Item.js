import React, {Component} from 'react';
import {render} from "react-dom";
import ChangeOnClickText from "../inputControllers/Change(onClickText)";
import SaveChangesOnBlurInput from "../inputControllers/SaveChanges(onBlurInput)";

class Item extends React.Component{
   constructor() {
       super();
       this.state = {
           Inputname: false
       };
       this.ChangeValueName = this.ChangeValueName.bind(this);
       this.SaveValueName = this.SaveValueName.bind(this);
   }
    ChangeValueName(){
       this.setState({
        Inputname: true
    });
    }
    SaveValueName(){
        this.setState({
            Inputname: false
        });
    }
    render() {
        return (
            <div className="fromServer">
                <div className="rows items" >
                    { this.state.Inputname ?  <ChangeOnClickText name = {this.props.name} func = {this.SaveValueName}/> :
                                              <SaveChangesOnBlurInput name={this.props.name} change = {this.ChangeValueName} />}
                    <div className="countProduct item">{this.props.count}</div>
                    <div className="costProduct item">{this.props.cost}</div>
                    <div className="dateProduct item">{this.props.date}</div>
                    <div className="delProduct item">УД</div>
                </div>
            </div>
        );
    }
}
export default Item;
