import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';


var myStyle = {
    fontSize: 20,
    color: '#FF0000',
    textAlign: "center",
};

/**使用 ES6 class 来定义一个组件:*/
class App extends Component {
    constructor(props){
        super(props);/**传递 props 到基础构造函数*/
        this.state = {date : new Date()}
    }
    /**当组件输出到 DOM 后会执行componentDidmount，称之为挂载*/
    componentDidMount(){

        this.timeId = setInterval(
            () => this.tick()
            ,1000)
    }
    /**卸载*/
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    tick(){
        /**使用 this.setState() 来更新组件局部状态*/
        this.setState({date:new Date()})
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Hello React,我是周杨</h1>
        </header>
        <p className="App-intro">
            以下是组件1的显示内容:
        </p>
          <div>
              <div name="组件1"></div>
              <h2 style={myStyle}>现在时间： {this.state.date.getFullYear()+'年'+(this.state.date.getMonth()+1)+'月'
              +this.state.date.getDate()+'日 '+this.state.date.toLocaleTimeString()}</h2>
          </div>
      </div>
    );
  }
}

/**
以上代码执行流程：

1. 当 <Clock /> 被传递给 ReactDOM.render() 时，React 调用 Clock 组件的构造函数。
   由于 Clock 需要显示当前时间，所以使用包含当前时间的对象来初始化 this.state 。 我们稍后会更新此状态。

2. React 然后调用 Clock 组件的 render() 方法。这是 React 了解屏幕上应该显示什么内容，
   然后 React 更新 DOM 以匹配 Clock 的渲染输出。

3. 当 Clock 的输出插入到 DOM 中时，React 调用 componentDidMount() 生命周期钩子。
   在其中，Clock 组件要求浏览器设置一个定时器，每秒钟调用一次 tick()。

4. 浏览器每秒钟调用 tick() 方法。 在其中，Clock 组件通过使用包含当前时间的对象调用 setState() 来调度UI更新。
   通过调用 setState() ，React 知道状态已经改变，并再次调用 render() 方法来确定屏幕上应当显示什么。
   这一次，render() 方法中的 this.state.date 将不同，所以渲染输出将包含更新的时间，并相应地更新DOM。

5. 一旦Clock组件被从DOM中移除，React会调用componentWillUnmount()这个钩子函数，定时器也就会被清除。
 */
//导出当前定义的类组件
export default App;













// /**函数式定义组件，效果与用类来定义是相同的*/
// function FirstComponent(props){
//     return <h1 style={myStyle}>Hello, 这里是{props.name}的显示内容!</h1>;
// }
// const element = (
//     <div>
//         <FirstComponent name="组件1"></FirstComponent>
//         <h2 style={myStyle}>现在时间： {new Date().toLocaleTimeString()}.</h2>
//     </div>
// );
// ReactDOM.render(
//     element,
//     document.getElementById('first')
// );


