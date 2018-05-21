####关于React注释的问题：

1、在标签内部的注释需要花括号

2、在标签外的的注释不能使用花括号

    ReactDOM.render(
        /*注释 */
        <h1>孙朝阳 {/*注释*/}</h1>,
        document.getElementById('example')
    );

##
####ReactDOM.render(element，dom）中第一个参数的问题    

代码中嵌套多个 HTML 标签，需要使用一个标签元素包裹它

1.错误例子：

    ReactDOM.render(
      <h1>这是错误的例子</h1>
      <span>假设这里是标题下面的内容</span>,
      document.getElementById("example")
    );
2.正确例子：

    ReactDOM.render(
      <section>
        <h1>这是正确的例子</h1>
        <span>假设这里是标题下面的内容</span>
      </section>,
      document.getElementById("example")
    );  