---
title: 异步编程
category: javascript
---

## 异步操作的几种模式

1. 事件监听
2. 回调函数
3. Promise
4. Generator
5. async 函数

### 事件监听

异步任务的执行不取决于代码的顺序，而取决于某个事件是否发生。

事件监听方式的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以”去耦合“（decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰。阅读代码的时候，很难看出主流程。

### 回调函数

所谓"回调函数"（callback），就是那些会被主线程挂起来的代码(异步任务）。异步任务必须指定回调函数，当主线程开始执行异步任务，就是执行对应的回调函数。

```javascript
function f1(callback) {
  // ...
  callback();
}
function f2() {
  // ...
}
f1(f2);
```

回调函数的优点是简单、容易理解和实现，缺点是不利于代码的阅读和维护，各个部分之间高度耦合（coupling），使得程序结构混乱、流程难以追踪（尤其是多个回调函数嵌套的情况），而且每个任务只能指定一个回调函数。

### Promise

### 发布/订阅

事件完全可以理解成”信号“，如果存在一个”信号中心“，某个任务执行完成，就向信号中心”发布“（publish）一个信号，其他任务可以向信号中心”订阅“（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做”发布/订阅模式”（publish-subscribe pattern），又称“观察者模式”（observer pattern）。

性质与“事件监听”类似，但是明显优于后者。因为可以通过查看“消息中心”，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行。

### async/await

### generator 函数及其异步应用

## 异步操作的流程控制

如果有多个异步操作，就存在一个流程控制的问题，举个栗子

```javascript
function async(arg, callback) {
  console.log("参数为" + arg + ",1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}
async(10, function (sum) {
  console.log(sum);
});
//参数为10,1秒后返回结果//20
```

那么问题来了，如果有多个异步任务，需要全部异步任务完成后才能执行回调函数，这个时候该怎么设置流程啦？

### 串行执行(一个任务完成后，再执行另一个)

```javascript
let items = [1, 2, 3, 4, 5, 6];
let results = [];
function async(arg, callback) {
  console.log("参数为" + arg + ",1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}
function final(value) {
  //value 就是执行完成后的 results
  console.log("完成:", value);
  console.log(items); // []
}
function series(item) {
  if (item) {
    async(item, function (result) {
      //result = arg*2
      results.push(result);
      return series(items.shift()); //注意这里递归的写法 ，最好是利用return，因为函数默认返回值为undefined。
    });
  } else {
    return final(results); //所有异步任务执行完后执行
  }
}
series(items.shift());

//参数为1,1秒后返回结果
//参数为2,1秒后返回结果
//参数为3,1秒后返回结果
//参数为4,1秒后返回结果
//参数为5,1秒后返回结果
//参数为6,1秒后返回结果
//完成上面的六步需要 6 秒
//完成: [ 2, 4, 6, 8, 10, 12 ]
```

### 并行执行(所有异步任务同时执行)

```javascript
let items = [1, 2, 3, 4, 5, 6];
let results = [];
function async(arg, callback) {
  console.log("参数为" + arg + ",1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}
function final(value) {
  //value 就是执行完成后的 results
  console.log("完成:", value);
  console.log(items); // []
}
items.forEach(function (value) {
  //forEach方法会同时发起六个异步任务
  async(value, function (result) {
    results.push(result);
    if (results.length === items.length) {
      final(results);
    }
  });
});
/*
参数为1,1秒后返回结果,
参数为2,1秒后返回结果,
参数为3,1秒后返回结果,
参数为4,1秒后返回结果,
参数为5,1秒后返回结果,
参数为6,1秒后返回结果,
//完成上面的六步只需要 1 秒
完成: [ 2, 4, 6, 8, 10, 12 ]*/
```

对比串行和并行两种方式，不难得出单独使用任何一种都不是理想的做法，串行耗时间，并行在任务多的情况下容易耗尽系统资源。针对以上情况，我们来看看下面的结合模式。

### 串行和并行的结合

所谓并行与串行的结合，就是设置一个门槛，每次最多只能并行执行 n 个异步任务，这样就避免了过分占用系统资源。

```javascript
let items = [1, 2, 3, 4, 5, 6];
let results = [];
let running = 0; //记录当前正在运行的任务数。
let limit = 3; /*Math.floor(Math.random()*3)+1*/ //限制最多执行的任务数

function async(arg, callback) {
  console.log("参数为" + arg + ",1秒后返回结果");
  setTimeout(function () {
    callback(arg * 2);
  }, 1000);
}
function final(value) {
  //value 就是执行完成后的 results
  console.log("完成:", value);
}
function launcher() {
  while (running < limit && items.length > 0) {
    let item = items.shift();
    async(item, function (result) {
      results.push(result);
      running--; //执行一个任务就减一个任务
      if (items.length > 0) {
        launcher(); //这里的自调用是为了一次任务完后下一次while的执行
        console.log(running);
      } else if (running == 0) {
        final(results);
      }
    });
    running++;
    //这里先计算一次有几个需要执行的任务，然后当running===limit的时候while暂时不执行，等到异步任务开始执行时，while又执行了，这个时候running始终比limit小一。
  }
}
launcher();
/*
//第一秒
参数为1,1秒后返回结果
参数为2,1秒后返回结果
参数为3,1秒后返回结果
//第二秒
参数为4,1秒后返回结果
参数为5,1秒后返回结果
参数为6,1秒后返回结果
//最后
完成: [ 2, 4, 6, 8, 10, 12 ]
*/
```

## 处理异步的框架-RxJS

## webWorker 的多线程机制

[阮老师](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

## 拓展阅读

### 线程（thread）和进程（process）

`进程`：是程序运行的实例，是系统进行资源分配和调度的一个独立单位，它包括独立的地址空间、资源以及一个或多个线程;

`线程`：线程是程序中的一个执行流，是进程中的一个实体，作为系统调度和分配的基本单位;每个线程都有自己的专有寄存器(栈指针、程序计数器等)，但代码区是共享的，即不同的线程可以执行同样的函数。

`特点`：线程是最小的执行单元，进程是最小的资源管理单元。一个线程只能属于一个进程，而一个进程可以有多个线程，但至少有一个线程

进程是动态的，多个进程可以含有相同的程序，多个进程可以并发执行

### 单线程和多线程

`单线程`：程序中只有一个执行流；单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务

`多线程`：程序中包含多个执行流，即在一个程序中可以同时运行多个不同的线程来执行不同的任务，也就是说允许单个程序创建多个并行执行的线程来完成各自的任务。

`多线程的好处`：可以提高 CPU 的利用率。在多线程程序中，一个线程必须等待的时候，CPU 可以运行其它的线程而不是等待，这样就大大提高了程序的效率。

`多线程的不利`：线程也是程序，所以线程需要占用内存，线程越多占用内存也越多； 多线程需要协调和管理，所以需要 CPU 时间跟踪线程； 线程之间对共享资源的访问会相互影响，必须解决竞用共享资源的问题；线程太多会导致控制太复杂，最终可能造成很多 Bug；

### 单进程和多进程

`单进程`：一个时间段只能执行一个进程，如：写代码就不要看视频了；

`多进程`：一个时间段同时执行多个进程，如：写代码\听歌\下载软件同时进行；

### 阻塞（block）和非阻塞（unblock）

`阻塞`：cpu 发出一条指令后需等待硬盘读取到数据后才发出下一条指令。调用结果返回之前，当前线程会被挂起；

`非阻塞`：cpu 发出指令后不用等待硬盘读取数据，继续发出下一条指令。不能立刻得到结果之前，该函数不会阻塞当前线程，而是立刻返回；

### 同步（asynchronous）和异步（synchronious）

`同步`：需要等待，在主线程上排队执行的任务，只有前一个任务执行完毕，才能执行后一个任务；

`异步`：不用等待，不进入主线程、而进入"任务队列"（task queue）的任务，只有"任务队列"通知主线程，某个异步任务可以执行了，该任务才会进入主线程执行。

Ajax 操作可以当作同步任务处理，也可以当作异步任务处理，由开发者决定。如果是同步任务，主线程就等着 Ajax 操作返回结果，再往下执行；如果是异步任务，主线程在发出 Ajax 请求以后，就直接往下执行，等到 Ajax 操作有了结果，主线程再执行对应的回调函数。

- 异步执行的运行机制（同步执行也是如此，因为它可以被视为没有异步任务的异步执行。）

1. 所有同步任务都在主线程上执行，形成一个执行栈（execution context stack）。
2. 主线程之外，还存在一个"任务队列"（task queue）。只要异步任务有了运行结果 ，就在"任务队列"之中放置一个事件。
3. 一旦"执行栈"中的所有同步任务执行完毕，系统就会读取"任务队列"，看看里面有哪些事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行。
4. 主线程不断重复上面的第三步。
