---
title: 面向对象编程思想、封装、多态
category: javascript
---

面向对象编程（Object-oriented programming）是一种将需求抽象成一个对象，针对这个对象分析其特征（属性）和动作（方法）。它有三大特点：继承、封装、多态。可提高程序的`重用性`、`灵活性`和`可拓展性`。实现高内聚，低耦合的目标。

## 构造函数

所谓"构造函数"，其实就是一个普通函数，但是内部使用了`this`变量。对构造函数使用`new`运算符，就能生成实例，并且`this`变量会绑定在实例对象上。

## 封装

### ES5

闭包加 prototype 实现

```js
var Car = (function () {
  // 静态私有，只创建一次
  var num = 100;
  function check() {}
  // 构造函数
  function _car(name, price) {
    //对象安全模式
    if (!(this instanceof _book)) return new _car(name, price);
    this.name = name;
    this.price = price;
    // ...
  }
  // prototype 对象
  _car.prototype = {
    description: "vehicle",
    display: function () {
      return "dispay ";
    },
  };
  return _car;
})();
```

### ES6 class

```js
class Car {
  constructor(name, price) {
    //实例属性
    this.name = name;
    this.price = price;
  }
  //静态方法，只能通过类调用，子类只能通过super调用
  static check() {
    return "yes";
  }
  //实例方法
  run() {
    return "running";
  }
  // 取值函数
  get prop() {
    return "getter";
  }
  // 存值函数
  set prop(value) {
    return "setter:" + value;
  }
}
// 静态属性
Car.tool = "plant";
```

### 继承

### 多态

### 参考

- [阮一峰](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html)
- [阮一峰——非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)
- [阮一峰——构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)

## 拓展阅读

### 面向对象编程中的一些概念

`继承`、`封装`、`多态`、`动态绑定`、`消息传递` 、`静态绑定`、`方法`

1. 封装（encapsulation)

   第一层意思：将数据（属性）和操作（方法）捆绑在一起【关联性】，创造出一个新的类型的过程

   第二层意思：将接口与实现分离的过程。

   最基本的目标：使得软件结构的相关部件实现“[高内聚](https://baike.baidu.com/item/%E9%AB%98%E5%86%85%E8%81%9A/5296411)、低耦合”的“最佳状态”

2. 继承

   类之间的关系；

   在这种关系中，一个类共享了一个或多个其他类定义的结构和行为。

   继承描述了类之间的关系。

   子类可以对基类的行为进行扩展、覆盖、重定义。

3. 多态

   类型理论中的一个概念，一个名称可以表示很多不同类的对象，这些类和一个共同超类有关。

   因此，这个名称表示的任何对象可以以不同的方式响应一些共同的操作集合。

4. 动态绑定（实例属性、实例方法）

   也称动态类型，指的是一个对象或者表达式的类型直到运行时才确定。

   通常由编译器插入特殊代码来实现。与之对立的是静态类型。

5. 静态绑定（静态属性、静态方法）

   也称静态类型，指的是一个对象或者表达式的类型在编译时确定。

6. 消息传递

   指的是一个对象调用了另一个对象的方法（或者称为成员函数）。

7. 方法

   也称为成员函数，是指对象上的操作，作为类声明的一部分来定义。

   方法定义了可以对一个对象执行那些操作。

### 面向过程编程（函数式编程）？

### 面向切面编程?

## 实操

### 五子棋游戏

- 流程
  1. 开始游戏
  2. 黑子（白子）先走
  3. 绘制 canvas
  4. 判断输赢
  5. 轮到白子（黑子）
  6. 绘制 canvas
  7. 判断输赢
  8. 重复 2-7 步
  9. 游戏结束了
- 定义类
  1. 玩家对象（负责接受用户输入）
  2. 棋盘对象（棋子变化绘制）
  3. 规则对象（判断输赢）
