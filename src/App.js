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
            <h1 className="App-title">Hello React</h1>
        </header>
        <p className="App-intro">
            以下是组件1的显示内容
        </p>
        <div id="MyApp"></div>
      </div>
    );
  }
}
/**使用 JSX*/
var myStyle = {
    fontSize: 100,
    color: '#FF0000'
};

ReactDOM.render(
    <div>
        <h1 style={myStyle}>Hello, world!</h1>
        <h2>现在时间： {new Date().toLocaleTimeString()}.</h2>
    </div>,
    document.getElementById('first')
);

//导出当前定义的组件
export default App;
