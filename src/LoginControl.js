import React, { Component } from 'react';
import './App.css';

/**使用 ES6 class 来定义一个组件:*/
class LoginControl extends Component {
    render() {
        const isLogin = this.props.isLogin;
        let showElement = null;
        if(isLogin){
            showElement = <h1>Welcome back!</h1>;
        }else{
            showElement = <h1>Please sign up.</h1>;
        }
        return (
            <div className="App">
                {showElement}
            </div>
        );
    }
}
//导出当前定义的类组件
export default LoginControl;

