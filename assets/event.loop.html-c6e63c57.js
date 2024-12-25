const t=JSON.parse('{"key":"v-1cb9a778","path":"/javascript/event.loop.html","title":"Event Loop","lang":"zh-CN","frontmatter":{"title":"Event Loop","category":"javascript","description":"浏览器环境下JavaScript引擎的事件循环机制 开始学习事件循环之前，让我们先看看下面几个问题。 JavaScript 为什么是单线程的？ JavaScript 为什么需要异步？ JavaScript 单线程又是如何实现异步的？ JavaScript 为什么是单线程的❓ 单线程的意思简单理解就是“同一时间只能做一件事”，而JavaScript设计之初就是用在浏览器的脚本语言，这就与JavaScript的用途有着密不可分的关系。 作为浏览器脚本语言，JavaScript主要用于用户交互、DOM操作，这就要求我们不能同时去修改同一个DOM元素的内容或样式。假如现在有两个线程，A线程修改DOM的文本颜色为红色，B线程修改DOM的文本颜色为蓝色，那么浏览器应该选择渲染红色还是蓝色啦？所以，JavaScript只能是单线程的。","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/camps/javascript/event.loop.html"}],["meta",{"property":"og:site_name","content":"杜同学日记"}],["meta",{"property":"og:title","content":"Event Loop"}],["meta",{"property":"og:description","content":"浏览器环境下JavaScript引擎的事件循环机制 开始学习事件循环之前，让我们先看看下面几个问题。 JavaScript 为什么是单线程的？ JavaScript 为什么需要异步？ JavaScript 单线程又是如何实现异步的？ JavaScript 为什么是单线程的❓ 单线程的意思简单理解就是“同一时间只能做一件事”，而JavaScript设计之初就是用在浏览器的脚本语言，这就与JavaScript的用途有着密不可分的关系。 作为浏览器脚本语言，JavaScript主要用于用户交互、DOM操作，这就要求我们不能同时去修改同一个DOM元素的内容或样式。假如现在有两个线程，A线程修改DOM的文本颜色为红色，B线程修改DOM的文本颜色为蓝色，那么浏览器应该选择渲染红色还是蓝色啦？所以，JavaScript只能是单线程的。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/camps/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-25T09:52:13.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Event Loop"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2024-12-25T09:52:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Event Loop\\",\\"image\\":[\\"https://mister-hope.github.io/camps/\\"],\\"dateModified\\":\\"2024-12-25T09:52:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":2,"title":"浏览器环境下JavaScript引擎的事件循环机制","slug":"浏览器环境下javascript引擎的事件循环机制","link":"#浏览器环境下javascript引擎的事件循环机制","children":[{"level":3,"title":"JavaScript 为什么是单线程的❓","slug":"javascript-为什么是单线程的❓","link":"#javascript-为什么是单线程的❓","children":[]},{"level":3,"title":"JavaScript 为什么需要异步❓","slug":"javascript-为什么需要异步❓","link":"#javascript-为什么需要异步❓","children":[]},{"level":3,"title":"JavaScript 单线程又是如何实现异步的❓","slug":"javascript-单线程又是如何实现异步的❓","link":"#javascript-单线程又是如何实现异步的❓","children":[]},{"level":3,"title":"栈、堆和队列数据结构","slug":"栈、堆和队列数据结构","link":"#栈、堆和队列数据结构","children":[]},{"level":3,"title":"执行栈和任务队列","slug":"执行栈和任务队列","link":"#执行栈和任务队列","children":[]},{"level":3,"title":"宏任务和微任务","slug":"宏任务和微任务","link":"#宏任务和微任务","children":[]},{"level":3,"title":"事件循环机制流程","slug":"事件循环机制流程","link":"#事件循环机制流程","children":[]},{"level":3,"title":"试题分析","slug":"试题分析","link":"#试题分析","children":[]},{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]}],"git":{"createdTime":1735120333000,"updatedTime":1735120333000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":8.18,"words":2453},"filePathRelative":"javascript/event.loop.md","localizedDate":"2024年12月25日","excerpt":"<h2> 浏览器环境下JavaScript引擎的事件循环机制</h2>\\n<p>开始学习事件循环之前，让我们先看看下面几个问题。</p>\\n<ul>\\n<li>JavaScript 为什么是单线程的？</li>\\n<li>JavaScript 为什么需要异步？</li>\\n<li>JavaScript 单线程又是如何实现异步的？</li>\\n</ul>\\n<h3> JavaScript 为什么是单线程的❓</h3>\\n<p>单线程的意思简单理解就是“同一时间只能做一件事”，而JavaScript设计之初就是用在浏览器的脚本语言，这就与JavaScript的用途有着密不可分的关系。</p>\\n<p>作为浏览器脚本语言，JavaScript主要用于用户交互、DOM操作，这就要求我们不能同时去修改同一个DOM元素的内容或样式。假如现在有两个线程，A线程修改DOM的文本颜色为红色，B线程修改DOM的文本颜色为蓝色，那么浏览器应该选择渲染红色还是蓝色啦？所以，JavaScript只能是单线程的。</p>","autoDesc":true}');export{t as data};
