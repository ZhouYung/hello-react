import React, { Component } from 'react';
import './App.css';

/**使用 ES6 class 来定义一个组件:*/
class WarningBanner extends Component {
    render() {
        const isLogin = this.props.isLogin;
        if(isLogin){
            return null;
        }else{
            return (
                <div>
                    请不要渲染我！
                </div>
            );
        }

    }
}
//导出当前定义的类组件
export default WarningBanner;

