##JavaScript ES6中const、let与var的对比详解

####简介

ECMAScript 6 新增 const 和 let 命令，用来声明变量。

| 声明方式  | 变量提升 | 作用域 | 初始值 | 重复定义 |
| :-----: |:----:|:---:| :---: | :----: |
| const | 否    | 块级  | 需要  | 不允许  |
| let   | 否    | 块级  | 不需要 | 不允许  |
| var   | 是    | 函数级 | 不需要 | 允许   |

####1.变量提升
const 和 let 必须先声明再使用，不支持变量提升

    console.log(c1, l1, v1);
    // 报错
    // Uncaught ReferenceError: c1 is not defined
      
    const c1 = 'c1';
    let l1 = 'l1';
    var v1 = 'v1';
####2.作用域
const，let 支持块级作用域，有效避免变量覆盖

    const c21 = 'c21';
    let l21 = 'l21';
    var v21 = 'v21';
      
    if (0.1 + 0.2 != 0.3) {
     const c21 = 'c22';
     let l21 = 'l22';
     var v21 = 'v22';
      
     console.log(c21, l21, v21);
     // 输出 c22 l22 v22
    }
      
    console.log(c21, l21, v21);
    // 输出 c21 l21 v22
 
 块级作用域，在外层不能直接访问内层变量
 
    if (0.1 + 0.2 != 0.3) {
     const c22 = 'c22';
     let l22 = 'l22';
     var v22 = 'v22';
      
     console.log(c22, l22, v22);
     // 输出 c22 l22 v22
    }
      
    console.log(c22, l22, v22);
    // 报错
    // Uncaught ReferenceError: c22 is not defined
    // 同样地, l22 is not defined
    
const 定义常量，该常量不能赋值，但该常量的属性可以赋值

    const c231 = {};
    const c232 = [];
      
    c231.name = 'seven';
    c232.push(27);
      
    console.log(c231, c232);
    // 输出 {name: "seven"} [27]
      
    // 禁止给对象赋值，应该使用 Object.freeze
      
    const c233 = Object.freeze({});
    const c234 = Object.freeze([]);
      
    c233.name = 'seven';
    // 普通模式下不报错
    // 严格模式下报错
    // Uncaught TypeError: Cannot add property name, object is not extensible
       
    c234.push(27);
    // 普通模式下就会报错
    // Uncaught TypeError: Cannot add property 0, object is not extensible
      
    console.log(c233, c234);
    // 输出 {} []

全局变量不再设置为顶层对象（window）的属性，有效避免全局变量污染

    const c24 = 'c24';
    let l24 = 'l24';
      
    console.log(c24, l24);
    // 输出 c24 l24
      
    console.log(window.c24, window.l24);
    // 输出 undefined undefined
    
符合预期的 for 循环

    for (var i = 0; i != 3; i++) {
     setTimeout(function() {
      console.log(i);
     },10);
    }
    // 依次打印
     
    for (let i = 0; i != 3; i++) {
     setTimeout(function() {
      console.log(i);
     },10);
    }
    // 依次打印，为啥呢
 
 可以看到在 for 循环中使用 let 方式声明变量才是符合预期。
 
 因为使用var定义的i是全局变量，内部函数调用出现了闭包问题，
 所以当循环完成后，才开始执行setTimeOut中的function内容，所以打印的内容是三个i的最终值
 
 在 for 中每一次循环，let 都是重新声明变量（局部变量），并且因为 JavaScript 引擎会记住上一次循环的值，
 初始化 i 时在上一轮的基础上计算。
 
 所以使用let可以有效的避免闭包问题，防止变量的过度污染
 
 ####3.初始值
 const 声明的变量必须设置初始值，且不能重复赋值。
 
    const c3 = 'c3';
    let l3 = 'l3';
    var v3 = 'v3';
      
    console.log(c3, l3, v3);
    // 输出 c3 l3 v3
      
    c3 = 2; // Uncaught TypeError: Assignment to constant variable
    l3 = 2;
    v3 = 2;
      
    console.log(c3, l3, v3);
    // 输出 c3 2 2
      
    const c32;
    // 报错
    // Uncaught SyntaxError: Missing initializer in const declaration
    
####4.重复定义
const 和 let 不支持重复定义

    var a = 'aa';
    alert(a);
    var a = "bb";
    alert(a);
   
 可以正常弹出aa和bb
 
    let a = 'aa';
    alert(a);
    let a = "bb";
    alert(a);
    
会报错：Identifier 'a' has already been declared（a已经被申明了）

####5.总结
onst、let 缩小了变量作用域，完美避免变量污染；
const 固定变量（即固定变量类型），对于弱类型 JavaScript 来说，可以明显提升性能。
推荐在应用中使用 const、let 声明变量。
 