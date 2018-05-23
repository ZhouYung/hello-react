import React, { Component } from 'react';
import './App.css';
import LoginControl from './LoginControl';
import WarningBanner from "./WarningBanner";

var myStyle2 = {
    lineHeight: 3,
};
/**使用 ES6 class 来定义一个组件:*/
class ConditionalRendering extends Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin: false,
            myMessage:"there is no messages",
            myContent: "我是三目运算符例子"
        }
    }
    handleLoginClick = ()=>{
        this.setState({
            isLogin:false
        });
    }
    handleLogoutClick = ()=>{
        this.setState({
            isLogin:true
        });
    }
    render() {
        const isLogin = this.state.isLogin;
        let elements = null;
        /**1. 条件运算（if）*/
        if(isLogin){
            elements = <LoginButton onClick={this.handleLoginClick}/>;
        }else{
            elements = <LogoutButton onClick={this.handleLogoutClick}/>;
        }
        let myMessage = this.state.myMessage;
        return (
            <div className="App" style={myStyle2}>
                <p className="App-intro">
                    以下是组件3的显示内容:
                </p>
                <LoginControl isLogin={this.state.isLogin}/>
                <div></div>
                {elements}
                {/**2. 与运算符 &&:
                        在JavaScript 中，true && expression 总是返回 expression，而 false && expression 总是返回 false。
                        因此，如果条件是 true，&& 右侧的元素就会被渲染，如果是 false，React 会忽略并跳过它
                 */}
                {isLogin&&
                    <div>{myMessage}</div>
                }
                <div></div>
                {/**3. 三目运算符 :
                        条件渲染的另一种方法是使用 JavaScript 的条件运算符 condition ? true : false。
                 */}
                {isLogin?<div>{this.state.myContent}:true</div>:<div>{this.state.myContent}:false</div>}
                {/**4. 阻止组件渲染:
                        在极少数情况下，你可能希望隐藏组件，即使它被其他组件渲染。让 render 方法返回 null 而不是它的渲染结果即可实现。
                 */}
                <WarningBanner isLogin={this.state.isLogin}/>
            </div>
        );
    }
}
//导出当前定义的类组件
export default ConditionalRendering;
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
