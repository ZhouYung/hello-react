import React, { Component } from 'react';
import './App.css';

var myStyle2 = {
    lineHeight: 3,
};
const showName = {
    c:"℃",
    f:"℉"
}
/**使用 ES6 class 来定义一个组件:*/
class TemperatureInput extends Component {
    handleChange = e =>{
        e.stopPropagation();
        e.preventDefault();
        this.props.onTemperatureChange(e.target.value);
    }
    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <div style={myStyle2}>
                {/*当前水温：<input type="text" value={this.state.temperature} onChange={this.handleChange}/>℃*/}
                {/*<br/>*/}
                {/*当前水温：<input type="text" value={this.state.temperature} onChange={this.handleChange}/>℉*/}
                {/*<BoilingVerdict celsius = {this.state.temperature}/>*/}
                <fieldset>
                    <legend>Enter temperature in {showName[scale]}:</legend>
                    <input value={temperature} onChange={this.handleChange} />
                </fieldset>
            </div>
        );
    }
}
//导出当前定义的类组件
export default TemperatureInput;


