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
        this.state = {
            myText : "我喜欢你！",
            name: "周杨",
            content:"点击我有惊喜哦"
        }
    }
    /**1.普通事件*/
    handleClick(event){
        event.stopPropagation();//阻止时间冒泡
        event.preventDefault();//阻止默认行为
        alert("点我干嘛！");
    }
    /**2.改变state值（绑定this）事件*/
    handleClick2 = event => {
        event.stopPropagation();
        event.preventDefault();

        /**此方法为使用ref引用方式获取dom元素节点（已不推荐使用）*/
        var myEle2 = this.refs.tip;
        console.log(myEle2);

        var myEle = this.state.myText;
        if(myEle === "我喜欢你"){
            this.setState({myText:"我不喜欢你"})
        }else{
            this.setState({myText:"我喜欢你"})
        }
    }
    /**3.传参事件
     * 注：
     * 参数 e 作为 React 事件对象将会被作为第二个参数进行传递
     * 通过箭头函数的方式，事件对象必须显式的进行传递，
     * 但是通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
     * 通过 bind 方式向监听函数传参，在类组件中定义的监听函数，事件对象 e 要排在所传递参数的后面
     * 通过 箭头函数 方式则没有要求
     */
    handleClick3 (name,e){
        e.stopPropagation();
        e.preventDefault();
        console.log(name);
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
                    <button onClick={this.handleClick2} ref="tip" value="我是你永远得不到的男人">{this.state.myText}</button>
                    <div></div>
                    {/**下面两种方式都可以向事件处理函数传递参数，两种方式是等价的，分别是通过箭头函数和Function.prototype.bind来实现*/}
                    <button onClick={this.handleClick3.bind(this,this.state.name)}>{this.state.content}</button>
                    <button onClick={(e) => this.handleClick3(this.state.name,e)}>{this.state.content}</button>
                </div>
            </div>
        );
    }
}

//导出当前定义的类组件
export default Event;

