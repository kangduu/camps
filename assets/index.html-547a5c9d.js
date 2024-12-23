const l=JSON.parse(`{"key":"v-e02a086e","path":"/javascript/","title":"JavaScript","lang":"zh-CN","frontmatter":{"title":"JavaScript","icon":"fa6-brands:square-js","description":"分时函数 为什么会有分时函数啦？ ​ 防抖和节流是对重复或频繁触发的任务控制，移除部分操作，只执行最后一次或每隔一段时间执行一次。 ​ 分时函数同样是多任务，但是不让其一次执行完，而是每一段时间执行一部分。比如添加 dom 节点，一次需要条件 100 个，可分为 10 次，一次 10 个。 ​ 分时函数主要是解决页面一次渲染数据（或节点）太多，导致页面卡顿或假死现象。 分时函数案例 首先我们来看一个案例，通过循环添加了 1000 个 div。其中处理数据少，当每一个元素都需要请求计算数据是，消耗无比的大。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/camps/javascript/"}],["meta",{"property":"og:site_name","content":"杜同学日记"}],["meta",{"property":"og:title","content":"JavaScript"}],["meta",{"property":"og:description","content":"分时函数 为什么会有分时函数啦？ ​ 防抖和节流是对重复或频繁触发的任务控制，移除部分操作，只执行最后一次或每隔一段时间执行一次。 ​ 分时函数同样是多任务，但是不让其一次执行完，而是每一段时间执行一部分。比如添加 dom 节点，一次需要条件 100 个，可分为 10 次，一次 10 个。 ​ 分时函数主要是解决页面一次渲染数据（或节点）太多，导致页面卡顿或假死现象。 分时函数案例 首先我们来看一个案例，通过循环添加了 1000 个 div。其中处理数据少，当每一个元素都需要请求计算数据是，消耗无比的大。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-22T06:21:24.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2024-12-22T06:21:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JavaScript\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-22T06:21:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":2,"title":"分时函数","slug":"分时函数","link":"#分时函数","children":[{"level":3,"title":"为什么会有分时函数啦？","slug":"为什么会有分时函数啦","link":"#为什么会有分时函数啦","children":[]},{"level":3,"title":"分时函数案例","slug":"分时函数案例","link":"#分时函数案例","children":[]},{"level":3,"title":"解决思路","slug":"解决思路","link":"#解决思路","children":[]}]},{"level":2,"title":"惰性加载-不重复判断","slug":"惰性加载-不重复判断","link":"#惰性加载-不重复判断","children":[{"level":3,"title":"惰性加载存在的意义","slug":"惰性加载存在的意义","link":"#惰性加载存在的意义","children":[]},{"level":3,"title":"案例佐证","slug":"案例佐证","link":"#案例佐证","children":[]}]},{"level":2,"title":"高阶函数（higher-order-function）","slug":"高阶函数-higher-order-function","link":"#高阶函数-higher-order-function","children":[{"level":3,"title":"作为参数","slug":"作为参数","link":"#作为参数","children":[]},{"level":3,"title":"作为返回值 - 类型判断——Object.prototype.toString.call(target)","slug":"作为返回值-类型判断——object-prototype-tostring-call-target","link":"#作为返回值-类型判断——object-prototype-tostring-call-target","children":[]},{"level":3,"title":"作为返回值 - 预置函数——当目标条件满足才执行回调函数","slug":"作为返回值-预置函数——当目标条件满足才执行回调函数","link":"#作为返回值-预置函数——当目标条件满足才执行回调函数","children":[]},{"level":3,"title":"作为返回值 - 装饰者模式","slug":"作为返回值-装饰者模式","link":"#作为返回值-装饰者模式","children":[]},{"level":3,"title":"作为返回值 - 单列模式","slug":"作为返回值-单列模式","link":"#作为返回值-单列模式","children":[]},{"level":3,"title":"其它应用","slug":"其它应用","link":"#其它应用","children":[]}]},{"level":2,"title":"更多内容","slug":"更多内容","link":"#更多内容","children":[{"level":3,"title":"函数调用之 call、apply 和 bind","slug":"函数调用之-call、apply-和-bind","link":"#函数调用之-call、apply-和-bind","children":[]},{"level":3,"title":"模块","slug":"模块","link":"#模块","children":[]},{"level":3,"title":"JavaScript 事件循环机制","slug":"javascript-事件循环机制","link":"#javascript-事件循环机制","children":[]},{"level":3,"title":"parseInt 和 parseFloat","slug":"parseint-和-parsefloat","link":"#parseint-和-parsefloat","children":[]},{"level":3,"title":"new 关键字","slug":"new-关键字","link":"#new-关键字","children":[]},{"level":3,"title":"this 原理","slug":"this-原理","link":"#this-原理","children":[]},{"level":3,"title":"为什么 Object.prototype.toString.call 可以准确判断对象类型","slug":"为什么-object-prototype-tostring-call-可以准确判断对象类型","link":"#为什么-object-prototype-tostring-call-可以准确判断对象类型","children":[]},{"level":3,"title":"内存泄漏","slug":"内存泄漏","link":"#内存泄漏","children":[]},{"level":3,"title":"原型链","slug":"原型链","link":"#原型链","children":[]},{"level":3,"title":"预编译","slug":"预编译","link":"#预编译","children":[]},{"level":3,"title":"面向对象编程","slug":"面向对象编程","link":"#面向对象编程","children":[]},{"level":3,"title":"防抖和节流","slug":"防抖和节流","link":"#防抖和节流","children":[]},{"level":3,"title":"连续赋值","slug":"连续赋值","link":"#连续赋值","children":[]},{"level":3,"title":"空对象判断","slug":"空对象判断","link":"#空对象判断","children":[]},{"level":3,"title":"深拷贝和浅拷贝","slug":"深拷贝和浅拷贝","link":"#深拷贝和浅拷贝","children":[]},{"level":3,"title":"柯里化","slug":"柯里化","link":"#柯里化","children":[]},{"level":3,"title":"异步编程","slug":"异步编程","link":"#异步编程","children":[]},{"level":3,"title":"执行机制","slug":"执行机制","link":"#执行机制","children":[]},{"level":3,"title":"数组去重","slug":"数组去重","link":"#数组去重","children":[]},{"level":3,"title":"正则表达式","slug":"正则表达式","link":"#正则表达式","children":[]}]},{"level":2,"title":"ES6+","slug":"es6","link":"#es6","children":[{"level":3,"title":"let 和 const 命令","slug":"let-和-const-命令","link":"#let-和-const-命令","children":[]},{"level":3,"title":"变量的解构赋值","slug":"变量的解构赋值","link":"#变量的解构赋值","children":[]},{"level":3,"title":"字符串的扩展","slug":"字符串的扩展","link":"#字符串的扩展","children":[]},{"level":3,"title":"字符串的新增方法","slug":"字符串的新增方法","link":"#字符串的新增方法","children":[]},{"level":3,"title":"正则的扩展","slug":"正则的扩展","link":"#正则的扩展","children":[]},{"level":3,"title":"数值的扩展","slug":"数值的扩展","link":"#数值的扩展","children":[]},{"level":3,"title":"函数的扩展","slug":"函数的扩展","link":"#函数的扩展","children":[]},{"level":3,"title":"数组的扩展","slug":"数组的扩展","link":"#数组的扩展","children":[]},{"level":3,"title":"对象的扩展","slug":"对象的扩展","link":"#对象的扩展","children":[]},{"level":3,"title":"对象的新增方法","slug":"对象的新增方法","link":"#对象的新增方法","children":[]},{"level":3,"title":"Symbol","slug":"symbol","link":"#symbol","children":[]},{"level":3,"title":"Set 和 Map 数据结构","slug":"set-和-map-数据结构","link":"#set-和-map-数据结构","children":[]},{"level":3,"title":"Proxy","slug":"proxy","link":"#proxy","children":[]},{"level":3,"title":"Reflect","slug":"reflect","link":"#reflect","children":[]},{"level":3,"title":"Promise 对象","slug":"promise-对象","link":"#promise-对象","children":[]},{"level":3,"title":"Iterator 和 for...of 循环","slug":"iterator-和-for-of-循环","link":"#iterator-和-for-of-循环","children":[]},{"level":3,"title":"Generator 函数的语法","slug":"generator-函数的语法","link":"#generator-函数的语法","children":[]},{"level":3,"title":"Generator 函数的异步应用","slug":"generator-函数的异步应用","link":"#generator-函数的异步应用","children":[]},{"level":3,"title":"async 函数","slug":"async-函数","link":"#async-函数","children":[]},{"level":3,"title":"Class 的基本语法","slug":"class-的基本语法","link":"#class-的基本语法","children":[]},{"level":3,"title":"Class 的继承","slug":"class-的继承","link":"#class-的继承","children":[]},{"level":3,"title":"Module 的语法","slug":"module-的语法","link":"#module-的语法","children":[]},{"level":3,"title":"Module 的加载实现","slug":"module-的加载实现","link":"#module-的加载实现","children":[]},{"level":3,"title":"编程风格","slug":"编程风格","link":"#编程风格","children":[]},{"level":3,"title":"读懂规格","slug":"读懂规格","link":"#读懂规格","children":[]},{"level":3,"title":"异步遍历器","slug":"异步遍历器","link":"#异步遍历器","children":[]},{"level":3,"title":"ArrayBuffer","slug":"arraybuffer","link":"#arraybuffer","children":[]},{"level":3,"title":"最新提案","slug":"最新提案","link":"#最新提案","children":[]},{"level":3,"title":"Decorator","slug":"decorator","link":"#decorator","children":[]}]},{"level":2,"title":"试题","slug":"试题","link":"#试题","children":[{"level":3,"title":"['1', '2', '3'].map(parseInt) 结果是什么？为什么？","slug":"_1-2-3-map-parseint-结果是什么-为什么","link":"#_1-2-3-map-parseint-结果是什么-为什么","children":[]},{"level":3,"title":"如何提升 JavaScript 变量的存储性能？","slug":"如何提升-javascript-变量的存储性能","link":"#如何提升-javascript-变量的存储性能","children":[]},{"level":3,"title":"介绍下 Set、Map、WeakSet 和 WeakMap 的区别？","slug":"介绍下-set、map、weakset-和-weakmap-的区别","link":"#介绍下-set、map、weakset-和-weakmap-的区别","children":[]},{"level":3,"title":"ES5/ES6 的继承除了写法以外还有什么区别？","slug":"es5-es6-的继承除了写法以外还有什么区别","link":"#es5-es6-的继承除了写法以外还有什么区别","children":[]},{"level":3,"title":"setTimeout、Promise、Async/Await 的区别","slug":"settimeout、promise、async-await-的区别","link":"#settimeout、promise、async-await-的区别","children":[]},{"level":3,"title":"Async/Await 如何通过同步的方式实现异步","slug":"async-await-如何通过同步的方式实现异步","link":"#async-await-如何通过同步的方式实现异步","children":[]}]}],"git":{"createdTime":1734848484000,"updatedTime":1734848484000,"contributors":[{"name":"kangduu","email":"dukang1127@163.com","commits":1}]},"readingTime":{"minutes":6.99,"words":2096},"filePathRelative":"javascript/README.md","localizedDate":"2024年12月22日","excerpt":"<h2> 分时函数</h2>\\n<h3> 为什么会有分时函数啦？</h3>\\n<p>​ 防抖和节流是对重复或频繁触发的任务控制，移除部分操作，只执行最后一次或每隔一段时间执行一次。</p>\\n<p>​ 分时函数同样是<strong>多任务，但是不让其一次执行完，而是每一段时间执行一部分</strong>。比如添加 dom 节点，一次需要条件 100 个，可分为 10 次，一次 10 个。</p>\\n<p>​ 分时函数主要是<strong>解决页面一次渲染数据（或节点）太多，导致页面卡顿或假死现象</strong>。</p>\\n<h3> 分时函数案例</h3>\\n<p>首先我们来看一个案例，通过循环添加了 1000 个 div。其中处理数据少，当每一个元素都需要请求计算数据是，消耗无比的大。</p>","autoDesc":true}`);export{l as data};
