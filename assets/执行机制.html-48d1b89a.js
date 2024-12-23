import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-07d6e59a.js";const e={},p=t(`<h3 id="下面代码输出结果" tabindex="-1"><a class="header-anchor" href="#下面代码输出结果" aria-hidden="true">#</a> 下面代码输出结果</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;stt-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;pms-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;then-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;glo-1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 解析</span>
<span class="token comment">// setTimeout进入队列——宏任务</span>
<span class="token comment">// new Promise（）立即执行</span>
<span class="token comment">// promise.then 进入队列——微任务</span>
<span class="token comment">// log 立即执行</span>

<span class="token comment">// 所以结果： pms-1 glo-1 then-1 stt-1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="你应该知道的一些知识点" tabindex="-1"><a class="header-anchor" href="#你应该知道的一些知识点" aria-hidden="true">#</a> 你应该知道的一些知识点</h3><h5 id="图解" tabindex="-1"><a class="header-anchor" href="#图解" aria-hidden="true">#</a> 图解</h5><ol><li>执行代码(主线程/执行栈)，同步任务依次执行</li><li>遇到异步任务，插入到任务队列</li><li>主线程执行完毕后，检查任务队列</li><li>先执行微任务，再执行宏任务（注意，第一次直接执行的是整体 script 代码，是宏任务，因为 queue 为空）</li><li>重复 1-4 步</li><li>代码执行完成</li><li>用户操作的事件（mouse、onkeydown...）</li></ol><p>首先，主线程会去执行所有的同步任务。等到同步任务全部执行完，就会去看任务队列里面的异步任务。如果满足条件，那么异步任务就重新进入主线程开始执行，这时它就变成同步任务了。等到执行完，下一个异步任务再进入主线程开始执行。一旦任务队列清空，程序就结束执行。</p><h5 id="思考-qa" tabindex="-1"><a class="header-anchor" href="#思考-qa" aria-hidden="true">#</a> 思考(QA)</h5><ul><li><p>如何知道主线程执行栈为空？</p><p>js 引擎存在 <code>monitoring process</code> 进程，会持续不断的检查主线程执行栈是否为空，一旦为空，就会去 Event Queue 那里检查是否有等待被调用的函数。</p></li><li><p>宏任务(macro-task)</p><p><code>整体代码script</code> 、<a href="#setTimeout"><code>setTimeout</code></a> 、<a href="#%E9%87%8D%E6%96%B0%E8%AE%A4%E8%AF%86setInterval"><code>setInterval</code></a></p></li><li><p>微任务(micro-task)</p><p><code>Promise </code> 、<code> process.nextTick（node.js)</code></p></li></ul><h3 id="settimeout" tabindex="-1"><a class="header-anchor" href="#settimeout" aria-hidden="true">#</a> setTimeout</h3><p>​ 指定某个函数或某段代码，在多少毫秒之后执行。【不完全正确的理解】</p><ul><li><p>返回值</p><p>返回一个整数，表示定时器的编号，以后可以用来取消这个定时器。</p><p>setTimeout 和 setInterval 返回的整数值是连续的，也就是说，第二个 setTimeout 方法返回的整数值，将比第一个的整数值大 1。</p></li><li><p>参数</p><p><code>第一个参数</code>：回调函数 或 代码块（必须是字符串格式）；</p><p><code>第二个参数</code>：指定间隔时间 （ms）；</p><p><code>之后的参数</code>：都将作为回调函数的参数。</p></li></ul><p>HTML5 标准规定了 setTimeout()的第二个参数的最小值（最短间隔），不得低于 4 毫秒，如果低于这个值，就会自动增加。在此之前，老版本的浏览器都将最短间隔设为 10 毫秒。另外，对于那些 DOM 的变动（尤其是涉及页面重新渲染的部分），通常不会立即执行，而是每 16.7 毫秒执行一次。这时使用 requestAnimationFrame()的效果要好于 setTimeout()。</p><p>你应该经常像下面这样使用。可很多时候，你会发现 setTimeout 中的业务并不是 2 秒后就马上执行，会大于 2 秒。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//do something</span>
  <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如，像下面这样</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">//do something</span>
  <span class="token function">task</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token parameter">ms</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">while</span> <span class="token punctuation">(</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start <span class="token operator">&lt;</span> ms<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 随眠函数</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>分析上述代码执行过程：</p><ol><li>task 进入任务队列并注册，计时器计时开始</li><li>执行 sleep 函数，可能需要 10 秒</li><li>2 秒到了，task 等待执行，可主线程 sleep 还未执行完</li><li>sleep 执行完（主线程为空），现在执行 task，已过 10 秒</li></ol><p>现在看来，setTimeout 函数是<code>经过指定时间后，把其内部需要执行的任务加入到任务队列中（等待执行），</code>又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间远远大于指定时间。</p><p>我们可以得到一个结论：<code>无法确定主线程任务需要多少时间执行完，则不能保证，setTimeout和setInterval指定的任务一定会按照预定时间执行</code></p><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h5><p>如果<code>回调函数是对象的方法</code>，那么 setTimeout 使得方法内部的 this 关键字指向全局环境（window），而不是定义时所在的那个对象。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">//这里只能是 var 声明，否则结果为undefined。</span>
<span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token function-variable function">y</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">//注意这里的 是 obj.y，而不是obj.y()</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>y<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>

<span class="token comment">//this指向的解决办法：</span>
<span class="token comment">//第一种、将对象的方法放在一个函数里</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  obj<span class="token punctuation">.</span><span class="token function">y</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//第二种、使用bind方法，将对象的方法（obj.y）绑定在obj上</span>
<span class="token function">setTimeout</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">y</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="settimeout-fn-0" tabindex="-1"><a class="header-anchor" href="#settimeout-fn-0" aria-hidden="true">#</a> setTimeout(fn,0)</h3><p>setTimeout(fn,0)的含义是，<code>指定某个任务在主线程最早可得的空闲时间执行，也就是说，尽可能早得执行</code>。它在&quot;任务队列&quot;的尾部添加一个事件，因此要等到同步任务和&quot;任务队列&quot;现有的事件都处理完，才会得到执行。</p><p>需要注意的是，setTimeout()只是将事件插入了&quot;任务队列&quot;，必须等到当前代码（执行栈）执行完，主线程才会去执行它指定的回调函数。要是当前代码耗时很长，有可能要等很久，所以并没有办法保证，回调函数一定会在 setTimeout()指定的时间执行。</p><h5 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h5><ul><li>网页开发中，某个事件先发生在子元素，然后冒泡到父元素，即子元素的事件回调函数，会早于父元素的事件回调函数触发。如果，想让父元素的事件回调函数先发生，就要用到 setTimeout(f, 0)</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>button<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myBtn<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>click<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;myBtn&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
input<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token constant">A</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;input&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;body&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// body input</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>用户自定义的回调函数，通常在浏览器的默认动作之前触发。比如，用户在输入框输入文本，keypress 事件会在浏览器接收文本之前触发。</li></ul><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input-box<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">/*下面的代码取不到最新输入的那个字符*/</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;input-box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onkeypress</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 解决办法</span>
document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&quot;input-box&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function-variable function">onkeypress</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> self <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    self<span class="token punctuation">.</span>value <span class="token operator">=</span> self<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setinterval" tabindex="-1"><a class="header-anchor" href="#setinterval" aria-hidden="true">#</a> setInterval</h3><p><code>setInterval</code>会每隔指定的时间将注册的函数置入 Event Queue，如果前面的任务耗时太久，那么同样需要等待。</p><p>对于<code>setInterval(fn,ms)</code>来说，我们已经知道不是每过<code>ms</code>秒会执行一次<code>fn</code>，而是每过<code>ms</code>秒，会有<code>fn</code>进入 Event Queue。一旦<strong>setInterval 的回调函数 fn 执行时间超过了延迟时间 ms，那么就完全看不出来有时间间隔了</strong>。</p><h5 id="注意-1" tabindex="-1"><a class="header-anchor" href="#注意-1" aria-hidden="true">#</a> 注意</h5><p>setInterval 指定的是<code>“开始执行”之间的间隔</code>，并不考虑每次任务执行本身所消耗的时间。因此实际上，两次执行之间的间隔会小于指定的时间。比如，setInterval 指定每 100ms 执行一次，每次执行需要 5ms，那么第一次执行结束后 95 毫秒，第二次执行就会开始。如果某次执行耗时特别长，比如需要 105 毫秒，那么它结束后，下一次执行就会立即开始。</p><ul><li>解决办法，在每次执行结束后使用 setTimeout 指定下次执行的具体时间。</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>f<span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="轮询-url-的-hash-值-是否发生变化" tabindex="-1"><a class="header-anchor" href="#轮询-url-的-hash-值-是否发生变化" aria-hidden="true">#</a> 轮询 URL 的 Hash 值（#）是否发生变化</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> hash <span class="token operator">=</span> window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash<span class="token punctuation">;</span>
<span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">.</span>hash <span class="token operator">!=</span> hash<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">reload</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//刷新页面</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setimmediate" tabindex="-1"><a class="header-anchor" href="#setimmediate" aria-hidden="true">#</a> setImmediate</h3><p>这算一个比较新的定时器，目前 IE11/Edge 支持、Nodejs 支持，Chrome 不支持，其他浏览器未测试。</p><p>这个 api 的支持性并不是很好。</p><p>从 API 名字来看很容易联想到 setTimeout(0)，不过 setImmediate 应该算是 setTimeout(0)的替代版。</p><p>在 IE11/Edge 中，setImmediate 延迟可以在 1ms 以内，而 setTimeout 有最低 4ms 的延迟，所以 setImmediate 比 setTimeout(0)更早执行回调函数。不过在 Nodejs 中，两者谁先执行都有可能，原因是 Nodejs 的事件循环和浏览器的略有差异。</p><p>很明显，setImmediate 设计来是为保证让代码在下一次事件循环执行，以前 setTimeout(0)这种不可靠的方式可以丢掉了</p><p>总之，记住 setImmediate 会比 setTimeout(fn, 0)更快、更及时一点就么有错了。</p><h3 id="拓展阅读" tabindex="-1"><a class="header-anchor" href="#拓展阅读" aria-hidden="true">#</a> 拓展阅读</h3><h5 id="requestanimationframe" tabindex="-1"><a class="header-anchor" href="#requestanimationframe" aria-hidden="true">#</a> requestAnimationFrame</h5><p>requestAnimationFrame 并不是定时器，但和 setTimeout 很相似，在没有 requestAnimationFrame 的浏览器一般都是用 setTimeout 模拟。</p><p>requestAnimationFrame 跟屏幕刷新同步，大多数屏幕的刷新频率都是 60Hz，对应的 requestAnimationFrame 大概每隔 16.7ms 触发一次，如果屏幕刷新频率更高，requestAnimationFrame 也会更快触发。基于这点，在支持 requestAnimationFrame 的浏览器还使用 setTimeout 做动画显然是不明智的。</p><p>这一点很关键，requestAnimationFrame 是跟着屏幕来刷新的，而不会顾及到任务队列的事情。所以会更为及时。</p><p>在不支持 requestAnimationFrame 的浏览器，如果使用 setTimeout/setInterval 来做动画，最佳延迟时间也是 16.7ms。 如果太小，很可能连续两次或者多次修改 dom 才一次屏幕刷新，这样就会丢帧，动画就会卡；如果太大，显而易见也会有卡顿的感觉。</p><p>所以，我们最好就要设置为 16.7ms，如果设置的少了，还有可能出现问题，何必呢？</p><p>有趣的是，第一次触发 requestAnimationFrame 的时机在不同浏览器也存在差异，Edge 中，大概 16.7ms 之后触发，而 Chrome 则立即触发，跟 setImmediate 差不多。按理说 Edge 的实现似乎更符合常理。</p>`,58),o=[p];function c(i,u){return s(),a("div",null,o)}const d=n(e,[["render",c],["__file","执行机制.html.vue"]]);export{d as default};
