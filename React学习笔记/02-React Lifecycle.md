##React的生命周期

###Mouting(挂载过程)

```
constructor(props, context)
```

构造函数，在创建组件的时候调用一次。该方法代替了ES5中的getDefaultProps()和getInitialState()

```
void componentWillMount()
```

在初始化渲染执行之前立刻调用。如果在这个方法内调用setState，render() 将会感知到更新后的state，将会执行仅一次，尽管 state 改变了

```
void componentDidMount()
```

在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
如果想和其它JavaScript 框架集成，使用 setTimeout 或者 setInterval 来设置定时器，或者发送 AJAX请求，可以在该方法中执行这些操作。

###Updating(更新过程)

```
void componentWillReceiveProps(nextProps)
```

props是父组件传递给子组件的。父组件发生render的时候子组件就会调用componentWillReceiveProps
（不管props有没有更新，也不管父子组件之间有没有数据交换）。

```
bool shouldComponentUpdate(nextProps, nextState)
```

组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。
在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。

```
void componentWillUpdate(nextProps, nextState)
```

shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用。

```
void componentDidUpdate()
```

除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。

##
**备注：**
componentWillMount、componentDidMount和componentWillUpdate、componentDidUpdate可以对应起来。
区别在于，前者只有在挂载的时候会被调用；而后者在以后的每次更新渲染之后都会被调用。

    ReactElement render()

render是一个React组件所必不可少的核心函数（上面的其它函数都不是必须的，一般也不会调用上述函数）。
记住，不要在render里面修改state。

####Unmounting(卸载过程)

    void componentWillUnmount()
    
组件被卸载的时候调用。一般在componentDidMount里面注册的事件需要在这里删除。
在该方法中执行任何必要的清理，比如无效的定时器，或者清除在 componentDidMount 中创建的 DOM 元素。