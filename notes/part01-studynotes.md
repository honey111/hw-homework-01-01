## ECMA Script 新特性

#### 工具

```
nodemon
yarn init
code 00-prepare.js
yarn add nodemon
yran nodemon 00-prepare.js
```

#### 作用域

```
全局作用域
函数作用域
块级作用域{}
1、闭包：
2、函数作用域摆脱全局作用域所产生的影响
```

#### let

```
变量，存在块级作用域，不能变量提升
```

#### var

```
全局作用域，可以进行变量提升
```

#### const

常量，声明后不能被修改，（不允许重新指向一个新的内存地址，可以修改恒量中的属性成员）

const obj = {}
obj.name = "zhangsan"

最佳实践：不用var ，主要使用const，配合let

#### 数组的解构

```
const arr = [100, 200, 300];
const [foo, ...rest] = arr;
console.log(rest) // [200, 300]

...rest只能在解构位置的最后位置使用，表示剩下的所有属性
解构位置的成员个数小于被解构的数组长度，按照从前到后的位置提取，多出来的成员不会被提取，如果大于数组长度，解构出来的就是undefined
可设置默认值，如果无法解构则取默认值

const [foo, bar, baz, moder='default value'] = arr;
console.log(moder);
const path = '/foo/bar/baz';
const[, rootdir] = path.split('/');
console.log(rootdir); // foo
```

#### 对象的解构？

```
对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。

const obj = {name:'zac', age: 18};
// const {name} = obj;
// console.log(name);

// const name = 'tom';
// const {name: objName} = obj;
// console.log(objName);

// const name = 'tom';
// const {name: objName = 'jack'} = obj
// console.log(objName);

const { log } = console;
log('foo');
log('bar');
log('baz');
```

#### 模板字符串

```
模板字符串
    ``,
    支持换行
    支持插值
    const str = `啦啦啦${name}`
    支持计算
    const str = `this is ${1+2}${Math.random()`
    
带标签的模板字符串
    标签：特殊函数，添加标签调用函数
    const result = myTagFun`hey, ${name} is a ${gender}` // myTagFun需定义函数内可以拿到模板字符串的中的插值，拿到的是数组
    作用： 可以对模板字符串进行加工

字符串的扩展方法
    · includes()
    · startsWith()
    · endsWith()  
    // 返回的是true || false

参数默认值
    默认值参数在最后

剩余参数
    ...
    出现在最后一位，使用一次
    function foo (...regs){
        
    }

展开数组
    const arr = ['foo', 'baz', 'bar']
    console.log.apply(console, arr)
    console.log('foo', 'baz', 'bar')
```

#### 箭头函数

```
=>
fira Code 字体
简化函数回调编写
不会改变this指向
```

#### 对象

```
对象字面量
    1、计算属性名
    2、
    3、

对象扩展方法
    Object.assign(target, source) // target目标对象， source源对象
    用后面的源对象覆盖目标对象
    * 拷贝

Object.is 
    判断两个值是否相等
    尽量使用 ===

Proxy *
    为对象使用代理，监视对象的属性读写
    第一个参数代理对象
    第二个参数fun
    
Proxy 对比 defineProperty *
    Proxy更强大
    支持数组对象的监听
    以非侵入的方式监视

Reflect *

Promise *

class 类 *

静态方法 *

类的继承 *

Set *

Map *

Symbol *
    symbol 是一种全新的原始数据类型，主要作用是为对象添加独一无二的属性名
    
Symbol补充 *

for...of
    遍历所有数据结构的统一方法
    break终止循环
    const obj = { foo: 123, bar: 456 }
    for (const item of obj){
      console.log(item); // 报错
    }
    遍历对象报错？

ES2015 可迭代接口
    为了遍历各种各样的数据类型，ES2015提供Iterable接口（规格标准）
    实现Iterable接口的前提是能够被for...of遍历
    
    数组
    Set对象
    Map对象
    必须挂载Iterable方法，得到一个迭代器
     
    浏览器控制台
    const arr = ['foo', 'baz', 'bar']
    arr[Symbol.iterator]()
    const iterator = arr[Symbol.iterator]()
    iterator.next();
    iterator.next();
    iterator.next();
    迭代器内部维护了一个数据指针，每当调用一次next,往后移一位，
    done的值表示是否迭代完
    
实现可迭代接口
    
迭代器模式
    对外提供统一遍历接口

ES2015 生成器 Generator
    
    *** 主要：避免异步编程中回调嵌套过深
    也实现Iterable迭代器
    关键字 yield
    总结：会自动返回一个生成器对象，调用对象的next()方法，yield会暂停，接着调用会继续返回，特点是惰性执行

生成器应用：发号器

Modules

ES2016概述
    
    1、数组的includes方法（可查找NaN）
     arr.includes('foo')存在返回true
    2、指数运算符
        console.log(Math.pow(2, 10)) 等价于 console.log(2 ** 10)
        
ES2017概述
    1、Object.values(obj);
    2、Object.entries(obj);
    3、Object.getOwnPropertyDescriptors();
    4、String.prototype.padStart
    5、String.prototype.padEnd
    6、在函数参数中添加尾逗号
    7、Async/Await ****
```

### JavaScript异步编程

```
同步模式

异步模式

回调函数
    所有异步编程方案的根基
    调用者告诉执行者异步任务结束后应该做啥
    调用之后会立即执行其他任务，后续逻辑会通过回调函数的方式定义（代码执行顺序混乱）

    setTimeout函数异步调用
    Event loop作用：监听任务队列和任务栈
promise概述
    Promise==Pending==>Fulfilled函数或者Rejected函数

基本用法
    const promise = new Promise(function (resolve, reject){
        // 用于兑现承诺
        resole(100) // 承诺达成
        reject(new Error('err')) // 承诺失败
    })
    promise.then(function(value){
        console.log('resolved')
    }),function(err){
      console.log('rejected')  
    })

Promise链式调用：
    每一个then方法都是为上一个then方法返回的promise对象添加明确状态后的回调，这些promise会依次执行，还可以手动返回promise对象
    
    ~Promise对象的then方法会返回一个全新的Promise对象
    ~后面的then方法就是在为上一个then返回的Promise注册回调
    ~前面then方法中回调函数的返回值会作为后面then方法回调的参数
    ~如果回调中返回的是Promise，那后面then方法的回调会等待它的结果


promise异常处理
    onRejectd就是为了处理promise的异常

promise静态方法
    1、promise.resolve()
    2、promise.reject()

promise并行执行
    promise.all()等待所有任务结束 
    promise.race()只会等待第一个结束的任务（超时控制）

promise执行时序/宏任务/微任务
    微任务：直接在当前任务结束过户立即执行（提高整体的响应能力）
    宏任务：有新需求需要重新排队
    promise&MutationObserve、node中process.nextTick微任务
    setTimeout是宏任务
    
    目前大多数异步调用都是作为宏任务执行

Generator异步方案
    
Async/Await语法糖
    语言层面的异步编程标准
    
    Async函数和Generator函数相似
```

#### Flow

```
解决JavaScript类型系统的问题，提高代码可靠性

    ~  强类型和弱类型
    ~  静态类型和动态类型
    ~  JavaScript只有类型系统的问题
    ~  Flow静态类型的检查方案
    ~  TypeScript语言规范和基本应用


类型安全：
    强类型：语言层面（语法）限制函数的实参类型必须与形参类型相同（不允许任意的隐式类型转换）
    弱类型： 不会限制实参的类型（与强类型相反）     
类型系统：
    静态类型：一个变量声明时他的类型就是明确的，声明过后，类型不允许被修改
    动态类型：运行阶段才能明确变量类型，，而且可以被修改（动态类型中变量是没有值的，变量中存放的值是有类型的）


JavaScript类型系统特征：弱类型且动态类型

强类型的优势
    1、错误更早暴露
    2、代码更智能，编码更准确
    3、重构更牢靠
    4、减少不必要的类型判断

Flow
    JavaScript的类型检查器
    给参数添加类型注解const a:number = 111;
    可以不需要给所有的参数添加注解

Flow快速上手
    yarn init --yes
    yarn add flow-bin --dev
    需要使用flow的文件开头添加// @flow
    为类型成员添加类型注解
     
Flow编译移除注解
    第一种：
    yarn add flow-remove-types --dev
    yarn flow-romove-types [需要移除注解的目录] -d [移除注解后的文件]
    第二种：
    yarn add @babel/core @babel/cli @babel/preset-flow --dev
    yarn babel src -d dist

开发工具插件
    vs code
    Flow Language Support

Flow类型推断

Flow类型注解
    标记变量类型；标记函数返回值类型；
    函数没有返回，类型标注void
    function sum () : number{
        return 111
        return "string" // 报错
    }
    
原始类型
    const a: string = 'foo'
    const b: number = Infinity无穷大//NaN// 100
    const c: boolean = false // true
    const d: null = null
    const e: void = undefined
    const f: symbol = Symbol()
    
数组类型
    const arr1: Array<number> = [1,2,3]; // ts泛型
    const arr2: number[] = [1,2,3]
    // 元组(在函数中同时返回多个返回值时使用)
    const foo: [string, number] = ['foo', 100]
    
对象类型
    const obj: {foo: string, bar: number} = {foo: "String", bar: 100}
    const obj2: {foo?: string, bar: number} = {bar: 100}
    const obj3 = {[string]: string} = {}
    
    obj3.key1 = 'value1'
    obj3.key2 = 'value2'
    
函数类型
    function foo (callback: (string, number) => void){
        callback('string', 100)
    }
    foo(function (str, n){
        // str ==> string
        // n ==> number
    })
    
特殊类型
    字面量（必须是某个值）
    const a: "foo" = "foo";
    const type: 'success' | 'warning' | 'danger' = 'success'
    type StringOrNumber = string | number
    const b: StringOrNumber = 'string' // 100
    const gender: ?number = undefined // 或许
    相当于
    const gender:number | null | void = undefined 
    
mixed&any
    都可以声明任意类型
    mixed:强类型
    通过typeof判断类型
    function passMixed (value: mixed){
        if(typeof value === 'string'){
            value.substr(1)
        }
        if(typeof value === 'number'){
            value * value
        }
    }
    passMixed('string')
    passMixed(100)
    any:弱类型

类型小结
   官方使用手册
   https://www.saltycrane.com/cheat-sheets/flow-type/latest/ (科学上网)
   
运行环境内置API
    document.getElementById('app')
```

### TypeScript

```
概念：
    基于JavaScript的超集
    属于【渐进式】
    缺点1：项目初期，TypeScript会增加一些成本
    缺点2：语言本身多了很多概念  
    
快速上手
    yarn init --dev
    yarn add typescript --dev
    yarn tsc filename.ts
    yarn tsc --init // 编译整个项目，添加配置文件
    yarn tsc // 编译整个项目
    
配置文件
    标准库就是内置对象所对应的声明
    显示中文错误消息
    yarn tsc --locale zh-CN
    
作用域问题
    模块（模块作用域）export{}
    
Object类型
    不单指对象，指代除了原始数据类型其他类型
    
数组类型
    const arr1: Array<number> = [1,2,3] // 泛型 
    const arr: number[] = [12,3,4]
    function sum (...args: number[]){
        //不加注解，得判断是不是每个成员都是数字
        return args.reduce((prev, current) => prev + current, 0)
    } 
    sum(1,2,3)

元组类型
    明确元素数量，以及每个元素类型的数组
    
枚举类型
    可以入侵到我们运行时的代码，影响我们的编译结果
    
    *** 建议使用常量枚举 const enum PostStatus{title:'1', content: 'ts', status: 0}

函数类型
    可选参数或者默认参数必须出现在参数的最后（因按照位置取值）
    
任意类型
    any，不会进行类型检查
    
隐式类型推断
    没有设置注解，ts自动推断类型
    建议手动给每个参数添加类型注解
    
类型断言
    明确告诉ts是什么类型，和类型转换有本质差异，在编译过程中生效，编译过后不生效
    ***  const num1 = res as number // 推荐
    ***  const num2 = <number>res // JSX下不能使用，和react标签有冲突
    
接口 InterFaces
    一种规范（契约），用来约束对象的结构
    
接口补充
（可选成员、只读成员、动态成员）

ts类的基本使用
    描述一类具体事物的抽象特征
    
类的访问修饰符
    控制类成员的可访问级别
    public // 默认公共
    private // 私有
    protected // 私有，只允许在继承的子类中去访问
    构造函数也可以设置修饰符，private constructor，设置私有后不能被继承和实例化，只能在内部访问
    
类--只读属性
    readonly，在声明时初始化或者在构造函数中初始化，二选一，之后不能被修改
    
类与接口
    在类中使用接口定义
    
抽象类
    abstract
    
泛型
    在定义函数接口或者类的时候，没有指定具体类型，设为一个参数，等使用的时候在指定具体类型的特征
    作用：复用代码
    <T>
    
类型声明 
    declare
    为了兼容一些没有声明的js模块
    eg: declare function camelCase (input: string): string
```