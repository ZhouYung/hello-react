import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello React,我是周杨</h1>
        </header>
        <p className="App-intro">
            以下是组件1的显示内容
        </p>
        <div id="firstComponent"></div>
      </div>
    );
  }
}

var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};
const element = (
    <div>
        <h1 style={myStyle}>Hello, 这里是组件1的显示内容!</h1>
        <h2>现在时间： {new Date().toLocaleTimeString()}.</h2>
    </div>
);
ReactDOM.render(
    element,
    document.getElementById('first')
);

//导出当前定义的组件
export default App;
