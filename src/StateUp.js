import React, { Component } from 'react';
import './App.css';
import TemperatureInput from "./TemperatureInput";


/**使用 ES6 class 来定义一个组件:*/
class StateUp extends Component {
    constructor(props){
        super(props);/**传递 props 到基础构造函数*/
        this.state = {
            temperature: "",
            scale:"c"
        }
    }
    handleCelsiusChange = temperature =>{
        this.setState({temperature: temperature,scale:"c"});
    }
    handleFahrenheitChange = temperature =>{
        this.setState({temperature: temperature,scale:"f"});
    }
    render() {
        let scale = this.state.scale;
        let temperature = this.state.temperature;
        let celsius = scale === "f"?tryConvert(temperature,toCelsius):temperature;
        let fahrenheit = scale === "c"?tryConvert(temperature,toFahrenheit):temperature;
        return (
            <div className="App">
                <p className="App-intro">
                    以下是组件6的显示内容:
                </p>
                <TemperatureInput scale="c" temperature ={celsius} onTemperatureChange={this.handleCelsiusChange}/>
                <TemperatureInput scale="f" temperature ={fahrenheit} onTemperatureChange={this.handleFahrenheitChange}/>
                <BoilingVerdict celsius={celsius}/>
            </div>
        );
    }
}
//导出当前定义的类组件
export default StateUp;
/**水沸腾裁定插件*/
function BoilingVerdict(props){
    if(props.celsius <100){
        return <p>水没有少开</p>;
    }else{
        return <p>水烧开啦</p>;
    }
}/**华氏-》摄氏*/
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
/**摄氏-》华氏*/
function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
/**转换验证*/
function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}