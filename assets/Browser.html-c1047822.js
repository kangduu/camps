import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as t,o as l,c,a as n,b as e,d as o,e as s}from"./app-f4053ed2.js";const d={},r=n("h3",{id:"客户端存储-cookie、localstorage、sessionstorage",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#客户端存储-cookie、localstorage、sessionstorage","aria-hidden":"true"},"#"),e(" 客户端存储（cookie、localStorage、sessionStorage）")],-1),p={href:"https://www.nowcoder.com/ta/front-end-interview/review?tpId=10&tqId=11077&query=&asc=true&order=&page=1",target:"_blank",rel:"noopener noreferrer"},u=s("<p><strong>限制</strong></p><ul><li>大多数浏览器支持最大为4095字节（<code>4kb</code>）的Cookie；</li><li>浏览器还会限制站点可以在用户计算机上<code>存储的Cookie数量</code>，大部分浏览器只允许每个站点存储20个Cookie。若试图存储更多的Cookie，则最老的Cookie便会被删除；</li><li>部分浏览器会对所有站点的<code>Cookie总数</code>作出绝对限制，一般为300 个；</li><li>cookie 设置的<code>cookie过期时间之前一直有效</code>，即使窗口或者浏览器关闭。</li><li>默认情况下，cookie的<code>数据会自动的传递到服务器</code>，服务器端也可以写cookie到客户端，可是并不是所有请求都需要Cookie，如：js、css、图片等</li></ul><p><strong>Cookie可设置的属性</strong></p><ul><li>Name ：cookie的key</li><li>Value ：cookie的value</li><li>Domain ：可以访问此cookie的域名</li><li>Path ：可以访问此cookie的页面路径</li><li>Expires / Max-Age ：cookie超时时间</li><li>Size ：cookie的大小</li><li>HttpOnly ： true的话则HTTP请求头中会带有此cookie信息 而且不能通过document.cookie来访问</li><li>Secure ：是否只能通过https来传递此cookie</li><li>SameSite ：用来防止CSRF攻击和用户追踪</li></ul>",4),h=s("<li><p><strong>会话级别的 sessionStorage</strong> （对象）</p><p>会话级别：与浏览器当前会话相关，页面关闭，数据会自动消除。</p><p>操作方法：</p><ul><li>setItem(key,value)：添加本地存储数据；</li><li>getItem(key)：通过key获取相应的Value；</li><li>removeItem(key)：通过key删除本地数据；</li><li>clear()：清空数据。</li></ul></li><li><p>**永久性的 localStorage ** （对象）</p><p>数据不会随着Http 请求发送到后台服务器，存储数据的大小几乎不用考虑，HTML5的标准中要求浏览器至少要支持到<strong>4MB</strong>;</p><p><strong>操作方法：同sessionStorage</strong></p></li>",2),k=n("blockquote",null,[n("p",null,[e("浏览器获取ocal storage 和session storage 的值为"),n("u",null,"字符串类型"),e("。")])],-1),g={id:"从输入url到页面展示的过程",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#从输入url到页面展示的过程","aria-hidden":"true"},"#",-1),m={href:"https://juejin.im/post/5c773dd251882519610194c1",target:"_blank",rel:"noopener noreferrer"},f=s(`<ol><li><p><strong>URL解析</strong>：首先判断你输入的是一个<code>合法的 URL </code>还是一个<code>待搜索的关键词</code>，并且根据你输入的内容进行自动完成、字符编码等操作。</p></li><li><p><strong>DNS查询</strong>：浏览器缓存<code>-&gt;</code>操作系统缓存<code>-&gt;</code>路由器缓存<code>-&gt;</code>ISP DNS缓存<code>-&gt;</code>根域名服务器查询</p></li><li><p><strong>TCP连接</strong></p><p>应用层：发起http请求【请求报头(Headers)、请求方法、目标地址、遵循协议、请求body】</p><p>传输层：TCP报文传输（TCP三次握手的建立）<br> 网络层：IP协议查询Mac地址<br> 链路层：以太网协议</p><blockquote><p>在发送请求时从应用层层层包裹数据，每一层都要对数据进行封装。</p></blockquote></li><li><p><strong>处理请求</strong>：接受 TCP 报文后，会对连接进行处理，对HTTP协议进行解析（请求方法、域名、路径等），并且进行一些验证。</p></li><li><p><strong>接受响应</strong>：浏览器接收到来自服务器的响应资源后，会对资源进行分析。首先查看 Response header，根据不同状态码做不同的事</p></li><li><p><strong>渲染页面</strong>：不同的浏览器内核，渲染过程也不完全相同。</p></li></ol><h3 id="浏览器如何解析渲染网页的" tabindex="-1"><a class="header-anchor" href="#浏览器如何解析渲染网页的" aria-hidden="true">#</a> 浏览器如何解析渲染网页的？</h3><h6 id="根据-html-解析-dom-树" tabindex="-1"><a class="header-anchor" href="#根据-html-解析-dom-树" aria-hidden="true">#</a> 根据 HTML 解析 DOM 树</h6><ul><li>根据 HTML 的内容，将标签按照结构解析成为 DOM 树，DOM 树解析的过程是一个<strong>深度优先遍历</strong> （即先构建当前节点的所有子节点，再构建下一个兄弟节点。）</li><li>在读取 HTML 文档，构建 DOM 树的过程中，若遇到 script 标签，则 DOM 树的构建会暂停，直至脚本执行完毕。（所以，script标签都放在body标签的最后）</li></ul><h6 id="根据-css-解析生成-css-规则树" tabindex="-1"><a class="header-anchor" href="#根据-css-解析生成-css-规则树" aria-hidden="true">#</a> 根据 CSS 解析生成 CSS 规则树</h6><ul><li>解析 CSS 规则树时 js 执行将暂停，直至 CSS 规则树就绪。</li><li>浏览器在 CSS 规则树生成之前不会进行渲染。</li></ul><h6 id="结合-dom-树和-css-规则树-生成渲染树-render" tabindex="-1"><a class="header-anchor" href="#结合-dom-树和-css-规则树-生成渲染树-render" aria-hidden="true">#</a> 结合 DOM 树和 CSS 规则树，生成渲染树(render)</h6><ul><li>DOM 树和 CSS 规则树全部准备好了以后，浏览器才会开始构建渲染树。</li><li>精简 CSS 可加快 CSS 规则树的构建，从而加快页面相应速度。</li></ul><h6 id="根据渲染树计算每一个节点的信息-布局" tabindex="-1"><a class="header-anchor" href="#根据渲染树计算每一个节点的信息-布局" aria-hidden="true">#</a> 根据渲染树计算每一个节点的信息（布局）</h6><ul><li>布局：通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸</li><li>回流：在布局完成后，发现了某个部分发生了变化影响了布局，那就需要倒回去重新渲染。</li></ul><h6 id="根据计算好的信息绘制页面" tabindex="-1"><a class="header-anchor" href="#根据计算好的信息绘制页面" aria-hidden="true">#</a> 根据计算好的信息绘制页面</h6><ul><li>绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，将呈现器的内容显示在屏幕上。</li><li>重绘：某个元素的背景颜色，文字颜色等，不影响元素周围或内部布局的属性，将只会引起浏览器的重绘。</li><li>回流：某个元素的尺寸发生了变化，则需重新计算渲染树，重新渲染。</li></ul><h3 id="回流和重绘" tabindex="-1"><a class="header-anchor" href="#回流和重绘" aria-hidden="true">#</a> 回流和重绘</h3><ul><li>页面的显示过程的几个阶段 <ul><li>生成DOM树(<strong>包括display:none的节点</strong>)</li><li>在DOM树的基础上根据节点的集合属性(margin,padding,width,height等)生成render树(<strong>不包括display:none，head节点，但是包括visibility:hidden的节点</strong>)</li><li>在render树的基础上继续渲染颜色背景色等样式</li></ul></li></ul><p><code>reflow</code> : <strong>当render树的一部分或者全部因为大小边距(结构)等问题发生改变而需要重建的过程，叫做回流</strong></p><p><code>repaint </code>: 当页面中元素样式的改变并不影响它在文档流中的位置，而<strong>只需要重新渲染</strong>的过程，叫做重绘</p><p><code>注意</code> <strong>回流必然引起重绘，但重绘不一定引起回流。</strong></p><h5 id="何时发生回流" tabindex="-1"><a class="header-anchor" href="#何时发生回流" aria-hidden="true">#</a> 何时发生回流</h5><ul><li>页面渲染初始化</li><li>添加或删除可见的DOM元素 ( DOM结构变化 )</li><li>元素的位置发生变化</li><li>改变<code>字体大小</code>会引发回流</li><li>元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）</li><li>内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代</li><li>获取某些属性，（很多浏览器会对回流做优化，等到足够数量的变化发生，才做一次批处理回流）</li><li>浏览器的窗口尺寸变化(resize事件)【因为<strong>回流是根据视口的大小来计算元素的位置和大小的</strong>】</li><li>除了render树的直接变化。 当获取一些属性时，浏览器为了获得正确的值也会触发回流。这样就使得浏览器的优化失效了，这些属性包括以下</li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token number">1.</span> offsetTop<span class="token punctuation">,</span> offsetLeft<span class="token punctuation">,</span> offsetWidth<span class="token punctuation">,</span> offsetHeight
<span class="token number">2.</span> scrollTop<span class="token operator">/</span>Left<span class="token operator">/</span>Width<span class="token operator">/</span>Height
<span class="token number">3.</span> clientTop<span class="token operator">/</span>Left<span class="token operator">/</span>Width<span class="token operator">/</span>Height
<span class="token number">4.</span> width<span class="token punctuation">,</span>height
<span class="token number">5.</span> <span class="token function">调用了getComputedStyle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 或者 <span class="token constant">IE</span>的 currentStyle
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例</strong></p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code>var s = document.body.style<span class="token punctuation">;</span>
s.padding = <span class="token string">&quot;2px&quot;</span><span class="token punctuation">;</span> // 回流+重绘
s.border = <span class="token string">&quot;1px solid red&quot;</span><span class="token punctuation">;</span> // 再一次 回流+重绘
s.color = <span class="token string">&quot;blue&quot;</span><span class="token punctuation">;</span> // 再一次重绘
s.backgroundColor = <span class="token string">&quot;#ccc&quot;</span><span class="token punctuation">;</span> // 再一次 重绘
s.fontSize = <span class="token string">&quot;14px&quot;</span><span class="token punctuation">;</span> // 再一次 回流+重绘
// 添加node，再一次 回流+重绘
document.body.<span class="token function">appendChild</span><span class="token punctuation">(</span>document.<span class="token function">createTextNode</span><span class="token punctuation">(</span><span class="token string">&#39;abc!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="何时发生重绘" tabindex="-1"><a class="header-anchor" href="#何时发生重绘" aria-hidden="true">#</a> 何时发生重绘</h5><ul><li>样式改变</li><li>初始化页面</li><li>回流必然引起重绘</li></ul><h5 id="如何避免触发回流和重绘" tabindex="-1"><a class="header-anchor" href="#如何避免触发回流和重绘" aria-hidden="true">#</a> 如何避免触发回流和重绘</h5><p>CSS：</p><ul><li>避免使用table布局（table元素一旦触发回流就会导致table里所有的其他元素回流）。</li><li>尽可能在DOM树的最末端改变class。</li><li>避免设置多层内联样式。</li><li>尽量使用css属性简写</li><li>将动画效果应用到<code>position</code>属性为<code>absolute</code>或<code>fixed</code>的元素上</li><li>避免使用CSS表达式（例如：<code>calc()</code> , 每次调用都会重新计算值、会重新加载页面）</li><li>CSS3硬件加速（GPU加速）</li></ul><p>JavaScript：</p><ul><li>避免频繁操作样式，最好一次性重写style属性，或者将样式列表定义为class并一次性更改class属性；</li><li>避免频繁操作DOM，创建一个<code>documentFragment</code>（包含所有操作），最后再把它添加到文档中；</li><li>在display属性为none的元素上进行的DOM操作不会引发回流和重绘（先为元素设置<code>display: none</code>，操作结束后再把它显示出来）；</li><li>缓存layout属性值，减少回流次数，如const offsetLeft=element.offsetLeft；</li><li>对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流；</li><li>需要创建多个DOM节点时，使用DocumentFragment创建完成后一次性的加入document。</li></ul><h5 id="display-none和visibility-hidden会产生回流与重绘吗" tabindex="-1"><a class="header-anchor" href="#display-none和visibility-hidden会产生回流与重绘吗" aria-hidden="true">#</a> <code>display:none</code>和<code>visibility：hidden</code>会产生回流与重绘吗</h5><ul><li>display：none指的是元素完全不陈列出来，不占据空间，涉及到了DOM结构，故产生<code>eflow与repaint</code></li><li>visibility：hidden指的是元素不可见但存在，保留空间，不影响结构，故<code>只产生repaint</code></li></ul><h5 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意</h5><p>有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。现代浏览器会对频繁的回流或重绘操作进行优化，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。你访问以下属性或方法时，浏览器会立刻清空队列：</p><ul><li><code>clientWidth</code>、<code>clientHeight</code>、<code>clientTop</code>、<code>clientLeft</code></li><li><code>offsetWidth</code>、<code>offsetHeight</code>、<code>offsetTop</code>、<code>offsetLeft</code></li><li><code>scrollWidth</code>、<code>scrollHeight</code>、<code>scrollTop</code>、<code>scrollLeft</code></li><li><code>width</code>、<code>height</code></li><li><code>getComputedStyle()</code></li><li><code>getBoundingClientRect()</code></li></ul><p>以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，**最好避免使用上面列出的属性，他们都会刷新渲染队列。**如果要使用它们，最好将值缓存起来。</p><h3 id="window-load-和window-onload-有什么区别" tabindex="-1"><a class="header-anchor" href="#window-load-和window-onload-有什么区别" aria-hidden="true">#</a> window.load 和window.onload 有什么区别</h3><ul><li><p>window.load</p><ul><li>必须等待网页中<code>所有的内容加载完毕后 ( 包括图片等资源 )</code> 才能执行</li><li>只能同时编写<code>一个</code></li><li>window是js中的顶层对象，window.load=aa() 相当&lt;boy onload=aa()&gt;</li></ul></li><li><p>window.onload</p><ul><li>页面一运行就执行该函数，执行该函数时，可能页面中的图片还没有加载完成！</li><li>可编写多个，但只执行最后一个</li></ul></li></ul><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>window<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>  
  <span class="token function">alert</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> window<span class="token punctuation">.</span>load<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//undefined</span>
window<span class="token punctuation">.</span><span class="token function-variable function">load</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span><span class="token function">load</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="浏览器组成" tabindex="-1"><a class="header-anchor" href="#浏览器组成" aria-hidden="true">#</a> 浏览器组成</h3><ol><li><p>内核</p><ul><li>渲染引擎GUI</li><li>JS引擎</li></ul><p><strong>二者互斥</strong></p></li><li><p>外壳</p></li></ol><table><thead><tr><th>主流浏览器</th><th>内核（渲染引擎）</th><th>Js引擎</th></tr></thead><tbody><tr><td>IE/Edge</td><td>trident--&gt;EdgeHTML(分支)</td><td>JScript（IE3.0-IE8.0） / Chakra（IE9+之后）</td></tr><tr><td>Chrome</td><td>webkit--&gt;blink(分支)</td><td>V8</td></tr><tr><td>Safari</td><td>webkit</td><td>Nitro（4-）</td></tr><tr><td>Opera</td><td>Presto-&gt;blink</td><td>SpiderMonkey（1.0-3.0）/ TraceMonkey（3.5-3.6）/ JaegerMonkey（4.0-）</td></tr><tr><td>Firefox</td><td>Gecko</td><td>Linear A（4.0-6.1）/ Linear B（7.0-9.2）/ Futhark（9.5-10.2）/ Carakan（10.5-）</td></tr></tbody></table>`,41);function v(S,w){const a=t("ExternalLinkIcon");return l(),c("div",null,[r,n("ol",null,[n("li",null,[n("p",null,[n("strong",null,[n("a",p,[e("Cookie"),o(a)])])]),u]),h]),k,n("h3",g,[b,e(),n("a",m,[e("从输入URL到页面展示的过程"),o(a)])]),f])}const _=i(d,[["render",v],["__file","Browser.html.vue"]]);export{_ as default};