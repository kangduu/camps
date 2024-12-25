import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as i,a as n,b as s,d as e,e as t}from"./app-6471e27d.js";const l={},r=t(`<p>面向对象编程（Object-oriented programming）是一种将需求抽象成一个对象，针对这个对象分析其特征（属性）和动作（方法）。它有三大特点：继承、封装、多态。可提高程序的<code>重用性</code>、<code>灵活性</code>和<code>可拓展性</code>。实现高内聚，低耦合的目标。</p><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h2><p>所谓&quot;构造函数&quot;，其实就是一个普通函数，但是内部使用了<code>this</code>变量。对构造函数使用<code>new</code>运算符，就能生成实例，并且<code>this</code>变量会绑定在实例对象上。</p><h2 id="封装" tabindex="-1"><a class="header-anchor" href="#封装" aria-hidden="true">#</a> 封装</h2><h3 id="es5" tabindex="-1"><a class="header-anchor" href="#es5" aria-hidden="true">#</a> ES5</h3><p>闭包加 prototype 实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> Car <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 静态私有，只创建一次</span>
  <span class="token keyword">var</span> num <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">function</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token comment">// 构造函数</span>
  <span class="token keyword">function</span> <span class="token function">_car</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//对象安全模式</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">_book</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">_car</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> price<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// prototype 对象</span>
  <span class="token class-name">_car</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">description</span><span class="token operator">:</span> <span class="token string">&quot;vehicle&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">display</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token string">&quot;dispay &quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> _car<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="es6-class" tabindex="-1"><a class="header-anchor" href="#es6-class" aria-hidden="true">#</a> ES6 class</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Car</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> price</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//实例属性</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>price <span class="token operator">=</span> price<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//静态方法，只能通过类调用，子类只能通过super调用</span>
  <span class="token keyword">static</span> <span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;yes&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">//实例方法</span>
  <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;running&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 取值函数</span>
  <span class="token keyword">get</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;getter&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 存值函数</span>
  <span class="token keyword">set</span> <span class="token function">prop</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&quot;setter:&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 静态属性</span>
Car<span class="token punctuation">.</span>tool <span class="token operator">=</span> <span class="token string">&quot;plant&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h3><h3 id="多态" tabindex="-1"><a class="header-anchor" href="#多态" aria-hidden="true">#</a> 多态</h3><h3 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h3>`,12),u={href:"http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_encapsulation.html",target:"_blank",rel:"noopener noreferrer"},d={href:"http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html",target:"_blank",rel:"noopener noreferrer"},k={href:"http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html",target:"_blank",rel:"noopener noreferrer"},v=t('<h2 id="拓展阅读" tabindex="-1"><a class="header-anchor" href="#拓展阅读" aria-hidden="true">#</a> 拓展阅读</h2><h3 id="面向对象编程中的一些概念" tabindex="-1"><a class="header-anchor" href="#面向对象编程中的一些概念" aria-hidden="true">#</a> 面向对象编程中的一些概念</h3><p><code>继承</code>、<code>封装</code>、<code>多态</code>、<code>动态绑定</code>、<code>消息传递</code> 、<code>静态绑定</code>、<code>方法</code></p>',3),h=n("p",null,"封装（encapsulation)",-1),m=n("p",null,"第一层意思：将数据（属性）和操作（方法）捆绑在一起【关联性】，创造出一个新的类型的过程",-1),b=n("p",null,"第二层意思：将接口与实现分离的过程。",-1),_={href:"https://baike.baidu.com/item/%E9%AB%98%E5%86%85%E8%81%9A/5296411",target:"_blank",rel:"noopener noreferrer"},f=t("<li><p>继承</p><p>类之间的关系；</p><p>在这种关系中，一个类共享了一个或多个其他类定义的结构和行为。</p><p>继承描述了类之间的关系。</p><p>子类可以对基类的行为进行扩展、覆盖、重定义。</p></li><li><p>多态</p><p>类型理论中的一个概念，一个名称可以表示很多不同类的对象，这些类和一个共同超类有关。</p><p>因此，这个名称表示的任何对象可以以不同的方式响应一些共同的操作集合。</p></li><li><p>动态绑定（实例属性、实例方法）</p><p>也称动态类型，指的是一个对象或者表达式的类型直到运行时才确定。</p><p>通常由编译器插入特殊代码来实现。与之对立的是静态类型。</p></li><li><p>静态绑定（静态属性、静态方法）</p><p>也称静态类型，指的是一个对象或者表达式的类型在编译时确定。</p></li><li><p>消息传递</p><p>指的是一个对象调用了另一个对象的方法（或者称为成员函数）。</p></li><li><p>方法</p><p>也称为成员函数，是指对象上的操作，作为类声明的一部分来定义。</p><p>方法定义了可以对一个对象执行那些操作。</p></li>",6),w=t('<h3 id="面向过程编程-函数式编程" tabindex="-1"><a class="header-anchor" href="#面向过程编程-函数式编程" aria-hidden="true">#</a> 面向过程编程（函数式编程）？</h3><h3 id="面向切面编程" tabindex="-1"><a class="header-anchor" href="#面向切面编程" aria-hidden="true">#</a> 面向切面编程?</h3><h2 id="实操" tabindex="-1"><a class="header-anchor" href="#实操" aria-hidden="true">#</a> 实操</h2><h3 id="五子棋游戏" tabindex="-1"><a class="header-anchor" href="#五子棋游戏" aria-hidden="true">#</a> 五子棋游戏</h3><ul><li>流程 <ol><li>开始游戏</li><li>黑子（白子）先走</li><li>绘制 canvas</li><li>判断输赢</li><li>轮到白子（黑子）</li><li>绘制 canvas</li><li>判断输赢</li><li>重复 2-7 步</li><li>游戏结束了</li></ol></li><li>定义类 <ol><li>玩家对象（负责接受用户输入）</li><li>棋盘对象（棋子变化绘制）</li><li>规则对象（判断输赢）</li></ol></li></ul>',5);function y(g,x){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("ul",null,[n("li",null,[n("a",u,[s("阮一峰"),e(a)])]),n("li",null,[n("a",d,[s("阮一峰——非构造函数的继承"),e(a)])]),n("li",null,[n("a",k,[s("阮一峰——构造函数的继承"),e(a)])])]),v,n("ol",null,[n("li",null,[h,m,b,n("p",null,[s("最基本的目标：使得软件结构的相关部件实现“"),n("a",_,[s("高内聚"),e(a)]),s("、低耦合”的“最佳状态”")])]),f]),w])}const E=p(l,[["render",y],["__file","oop.html.vue"]]);export{E as default};
