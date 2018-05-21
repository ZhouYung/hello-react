##React和React Native的区别

- React是针对View层的使用Javascript的UI组件开发库，从设计初衷来说，React是不关心View层具体技术实现的（比如是否web，android，iOS甚至是windows还是macOS）。
- ReactNative更多的是一个基于React进行iOS和Android原生App开发的框架，包括封装好的UI组件库，同时提供了React组件生成原生APP的能力。

##React和Babel(拜bo)的基本使用

###1.使用react.js和react-dom.js

- react.js文件是创建React元素和组件的核心文件
- react-dom.js文件用来把React组件渲染为DOM，此文件依赖于react.js文件，需在其后被引入

注：

- 一个称作react-with-addons.js的文件可以代替react.js使用，它包含了一系列有用的模块.
- 不要把HTML的<body>当做React渲染的根元素，记住要渲染在<body>里一个具有id的<div>里，
这使得React有自己的独立空间，而不用担心如果其他因素如果需要操作<body>里的子元素会影响React的使用。

###2.使用JSX
JSX全称是java script xml，从本质上讲，JSX 只是为 React.createElement(component, props, ...children) 函数提供的语法糖。

使用JSX，可以极大的简化React元素的创建，JSX抽象化了React.createElement()函数的使用，其语法风格类似于HTML语法风格。

通过Babel，JSX会把转换为使用React.createElement()类的ES5的语句，以使得其能被现今的浏览器引擎识别。

有了Babel，其实你可以把JSX当做写在JavaScript里的HTML代码。本书后续有一章将单独讲解JSX，那时我们再详细讨论JSX的其它特性。

使用React并非必须使用JSX，JSX只是一种直观的创建React nodes的方法，它是对React.createElement（）方法的抽象，通过Babel，JSX语句也可以直接在浏览器中运行了。

###3.使用browser.js(Babel5.8.23)在浏览器中转换JSX
加入brower.js的引用，用以转换JSX代码，注意引用的<script>的type为type="text/babel".

##使用ES6

Babel并非React的一部分，实际上，Babel的主要用途并非一个JSX语句转换器。Babel主要是一个JavaScript转换器，它可以转换各种ES*代码为浏览器可识别的ES代码。

就目前来说，Babel主要会转换ES6和ES7语句为ES5语句，转换JSX看起来倒像是其的一个附加功能。

有了Babel，我们可以放心的在React中使用最新的ES语句了。

```
   <script src="https://fb.me/react-15.2.0.js"></script>

   <script src="https://fb.me/react-dom-15.2.0.js"></script>

   <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```
