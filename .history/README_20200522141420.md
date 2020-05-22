一、简答
1、说出执行结果并解释
```javaScript
  var a = [];
  for(var i = 0; i < 10; i++){
      a[i] = function (){
          console.log(i);
      }
  }
  a[6]();
```
  答：结果：10，只有当i大于10的时候才能执行a[i]这个function

2、说出执行结果并解释
```javaScript
  var tmp = 123;
  if (true) {
      console.log(tmp);
      let tmp;
  }
```
  答：结果提示报错，这里打印的是let声明的tmp，tmp在声明前调用会报错

3、结合ES6新语法，用最简单的方式找出数组中的最小值
```js
  var arr = [12, 34, 32, 89, 4];
```
  答：
```js
  console.log(Math.min(...arr));
```
4、详细说明var,let,const三种声明变量的方法之间的差别
  答：
  var 声明变量，存在变量提升，全局作用域；
  let 声明变量，不存在变量提升，块级作用域；
  const 声明常量，声明后不能被修改（不允许重新指向一个新的内存地址，可以修改恒量中的属性成员）不存在变量提升

5、说出执行结果并解释
```js
  var a = 10;
  var obj = {
      a: 20,
      fn (){
          setTimeout(() => {
              console.log(this.a)
          })
      }
  }
  obj.fn()
``` 
  答：结果：20，箭头函数不改变this指向，setTimeout所在的的函数作用域指向的是obj

6、简述Symbol类型的用途？
  答：symbol 是一种全新的原始数据类型，主要作用是为对象添加独一无二的属性名

7、说说什么是浅拷贝，什么是 深拷贝？
  答：
  浅拷贝：指针赋值，改变拷贝后的数据可以改变原数据；
  深拷贝：指针赋值并且拷贝存储在堆中的数据，改变拷贝后的数据不会改变原数据；

8、如何理解js异步编程，Event Loop是做什么的，什么是宏任务，什么是微任务？
  答：
  异步编程：由于js是单线程运行模式，如果使用同步模式会造成大量时间的浪费，采用异步编程模式在执行完一个线程就会立即执行下一个任务线程，无需等待，通过回调函数返回执行结果，会大大提高编程效率
  Event Loop：监听任务队列和任务栈
  宏任务：宏任务需要在任务队列中排队
  微任务：在任务队列中不需要排队，属于可以立即执行对的任务

9、将下列异步代码使用Promise改进
```js
  setTimeout(function(){
    var a = "hello";
    setTimeout(function(){
        var b = "lagou";
        setTimeout(function(){
            var c = "I ❥(^_-) U";
            console.log(a + b + c);
        }, 10);
    }, 10);
}, 10);
```
  答：
```js
  function foo (val) {
    const aa = new Promise((res, rej) => {
        setTimeout(res, 10) 
    }).then(res => {
        return val
    }).then(res => {
        return `${res} lagou`
    }).then(res => {
        return console.log(`${res} I ❥(^_-) U`)
    })
    return aa
  }
  foo('hello')
```

10、ts和js之间的关系
  答：ts是js的超集，为了弥补js的一些不足，以及更好的实现编码

11、ts的优缺点
  答：
  优点1：添加类型注解，避免了一些在运行时才能发现的bug
  优点2：属于渐进式，可以在js的基础上进行开发，上手快
  缺点1：项目初期。使用ts会增加一些成本
  缺点2：语言本身多了很多概念