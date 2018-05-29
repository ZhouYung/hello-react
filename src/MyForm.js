import React, { Component } from 'react';
import './App.css';

var myStyle2 = {
    lineHeight: 3,
};
/**使用 ES6 class 来定义一个组件:*/
class MyForm extends Component {
    constructor(props){
        super(props);/**传递 props 到基础构造函数*/
        this.state = {
            nameValue: "",
            introduceValue:"",
            judgeValue:2,
            isLikeMe:[true,false,false]
        }
    }

    handleChange = (event) => {
        event.stopPropagation();//阻止时间冒泡
        event.preventDefault();//阻止默认行为
        this.setState({nameValue:event.target.value.toUpperCase()});
    }
    handleChange2 = (event) => {
        event.stopPropagation();//阻止时间冒泡
        event.preventDefault();//阻止默认行为
        this.setState({introduceValue:event.target.value});
    }
    handleChange3 = (event) => {
        event.stopPropagation();//阻止时间冒泡
        event.preventDefault();//阻止默认行为
        this.setState({judgeValue:event.target.value});
    }
    handleSubmit = e => {
        e.stopPropagation();//阻止时间冒泡
        e.preventDefault();//阻止默认行为
        let nameValue = this.state.nameValue;
        let introduceValue = this.state.introduceValue;
        let judgeValue = this.state.judgeValue;
        let isLikeMe = this.state.isLikeMe;
        console.log("1："+nameValue+" 2."+introduceValue+" 3."+judgeValue+" 4."+[...isLikeMe]);
    }
    /**
     * 通用改变值事件函数
     * 通过name改变
     */
    handleInputChange = e => {
        e.stopPropagation();//阻止时间冒泡
        e.preventDefault();//阻止默认行为

        /**checkbox比较特殊*/
        const name = e.target.name;
        let isLikeMe = this.state.isLikeMe;
        isLikeMe[e.target.id] = e.target.checked;
        this.setState({[name]:isLikeMe});

    }
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    以下是组件5的显示内容:
                </p>
                <div style={myStyle2}>
                    {/**
                     * 1.受控组件：
                     *  React负责渲染表单的组件仍然控制用户后续输入时所发生的变化。相应的，其值由React控制的输入表单元素称为“受控组件”。
                     *  如：<input>,<textarea>, 和 <select>
                     *
                     * 2.非受控组件：
                     *  如：<input type="file" /> 由于该标签的 value 属性是只读的
                     */}
                    <form action="">
                        <label htmlFor="">姓名：
                            <input type="text" name="name" value={this.state.nameValue} onChange={this.handleChange} placeholder="请填写你的姓名"/>
                        </label>
                        <br/>
                        {/**1. 在React中，<textarea>会用value属性来代替。这样的话，表单中的<textarea> 非常类似于使用单行输入的表单*/}
                        <label htmlFor="">简介：
                            <textarea name="introduce" value={this.state.introduceValue} onChange={this.handleChange2}  placeholder="请简单介绍下自己" cols="30" rows="10"></textarea>
                        </label>
                        <br/>
                        <label htmlFor="">周杨评价：
                            <select name="judge" value={this.state.judgeValue} style={{width:"100px",height:"30px"}} onChange={this.handleChange3}>
                                <option value="1">温文儒雅</option>
                                <option value="2">知书达理</option>
                                <option value="3">高大帅气</option>
                                <option value="4">自强不息</option>
                            </select>
                        </label>
                        <br/>
                        <label htmlFor="">喜不喜欢我：
                            <label htmlFor="0"><input type="checkbox" name="isLikeMe" id="0" checked={this.state.isLikeMe[0]} onChange={this.handleInputChange}/>喜欢</label>
                            <label htmlFor="1"><input type="checkbox" name="isLikeMe" id="1" checked={this.state.isLikeMe[1]} onChange={this.handleInputChange}/>很喜欢</label>
                            <label htmlFor="2"><input type="checkbox" name="isLikeMe" id="2" checked={this.state.isLikeMe[2]} onChange={this.handleInputChange}/>炒鸡喜欢</label>
                        </label>
                        <br/>
                        {/**2. 非受控组件*/}
                        <label >上传周杨果照：
                            <input type="file"/>
                        </label>
                    </form>
                    <input type="button" value="提交" onClick={this.handleSubmit} style={{}}/>
                </div>
            </div>
        );
    }
}

//导出当前定义的类组件
export default MyForm;

