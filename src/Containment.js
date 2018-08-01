import React, { Component } from 'react';
import './App.css';

var myStyle2 = {
    lineHeight: 3,
}

/**使用 ES6 class 来定义一个组件:*/
class Containment extends Component {
    constructor(props){
        super(props);/**传递 props 到基础构造函数*/
        this.state = {
            color: "Blue"
        }
    }

    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    以下是组件7的显示内容:
                </p>
                <div style={myStyle2}>
                    {/**
                     * 1. 包含关系：
                     *
                     *一些组件不能提前知道它们的子组件是什么。这对于 Sidebar 或 Dialog 这类通用容器尤其常见。
                     * 建议这些组件使用 children 属性将子元素直接传递到输出.
                     * <FancyBorder> JSX 标签内的任何内容都将通过 children 属性传入 FancyBorder。由于 FancyBorder 在一个 <div> 内渲染了 {props.children}，所以被传递的所有元素都会出现在最终输出中。
                     * 虽然不太常见，但有时你可能需要在组件中有多个入口，这种情况下你可以使用自己约定的属性而不是 children：
                     */}
                <FancyBorder color={this.state.color}>
                    <h1 className="Dialog-title">
                        Welcome
                    </h1>
                    <p className="Dialog-message">
                        Thank you for visiting our spacecraft!
                    </p>
                </FancyBorder>
                    {/**
                    * 虽然不太常见，但有时你可能需要在组件中有多个入口，这种情况下你可以使用自己约定的属性而不是 children：
                    */}
                <SplitPane left={<Contacts />} right={<Chat />} />

                    {/**
                     * 2. 特殊实例：
                     *
                     * 有时我们认为组件是其他组件的特殊实例。例如，我们会说 Dialog 是 Containment 的特殊实例。
                     */}
                     <Dialog title="Welcome" message="Thank you for visiting our spacecraft!"></Dialog>

                    {/**
                     * 3. 那么继承呢？
                     *
                     * 在 Facebook 网站上，我们的 React 使用了数以千计的组件，然而却还未发现任何需要推荐你使用继承的情况。
                     *
                     *
                     * 属性和组合为你提供了以清晰和安全的方式自定义组件的样式和行为所需的所有灵活性。请记住，组件可以接受任意元素，包括基本数据类型、React 元素或函数
                     *
                     * 如果要在组件之间复用 UI 无关的功能，我们建议将其提取到单独的 JavaScript 模块中。这样可以在不对组件进行扩展的前提下导入并使用该函数、对象或类。
                     */
                    }
                </div>
            </div>
        );
    }
}
//导出当前定义的类组件
export {Containment,Contacts};

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder' + props.color}>
            {props.children}
        </div>
    );
}
function SplitPane(props) {
    return (
        <div className="SplitPane">
            <div className="SplitPane-left">
                {props.left}
            </div>
            <div className="SplitPane-right">
                {props.right}
            </div>
        </div>
    );
}
function Contacts() {
    return <div className="Contacts" >周</div>;
}

function Chat() {
    return <div className="Chat" >杨</div>;
}
function Dialog(props){
    return (
        <FancyBorder color="Blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
        </FancyBorder>
    );
}