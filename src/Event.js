import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

var myStyle = {
    fontSize: 20,
    color: '#FF0000',
    textAlign: "center",
};
var myStyle2 = {
    lineHeight: 3,
};
/**使用 ES6 class 来定义一个组件:*/
class Event extends Component {
    constructor(props){
        super(props);/**传递 props 到基础构造函数*/
        this.state = {myText : "我喜欢你！"}
    }
    handleClick(event){
        event.stopPropagation();
        event.preventDefault();
        alert("点我干嘛！");
    }
    handleClick2(event){
        event.stopPropagation();
        event.preventDefault();
        var myEle = this.state.myText;
        if(myEle === "我喜欢你"){
            this.setState({myText:"我不喜欢你"})
        }else{
            this.setState({myText:"我喜欢你"})
        }
    }
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    以下是组件2的显示内容:
                </p>
                <div style={myStyle2}>
                    <button style={myStyle} onClick={this.handleClick}>请不要点我！</button>
                    <div></div>
                    <button onClick={(e) => this.handleClick2(e)} ref="tip">{this.state.myText}</button>
                </div>
            </div>
        );
    }
}

//导出当前定义的类组件
export default Event;

