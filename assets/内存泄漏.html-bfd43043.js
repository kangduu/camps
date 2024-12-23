import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as l,a as e,b as n,d as s,e as t}from"./app-07d6e59a.js";const d={},p=e("h2",{id:"内存泄漏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#内存泄漏","aria-hidden":"true"},"#"),n(" 内存泄漏")],-1),c=e("p",null,[n("​ 内存泄漏指的是："),e("strong",null,"任何对象在你不再拥有或不再需要之后任然存在"),n("。")],-1),u=e("ul",null,[e("li",null,"不再拥有——（无法获取）"),e("li",null,"不再需要——（任存在隐藏的引用）")],-1),h=e("h2",{id:"常见的内存泄漏",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#常见的内存泄漏","aria-hidden":"true"},"#"),n(" 常见的内存泄漏")],-1),v=t("<li>闭包</li><li>控制台日志</li><li>循环（两对象彼此引用且彼此保留）</li><li>事件监听，addEventListener需要removeEventListener移除（<strong>传递给两者的函数必须一致</strong>）</li><li>setTimeout/setInterval ，对应的使用clearTimeout/clearInterval清空</li><li><strong>注意，使用setTimeout模拟setInterval 循环调用会造成内存泄漏</strong></li><li>如Promise、rxjs的Observables、node的EventEmitters这些方法，无回调函数或未取消监听都会造成内存泄漏</li><li>Promise如果没有resolved或者rejected，会连同then()中的代码一起造成内存泄漏</li><li>在没有虚拟dom的计算下实现了无无限滚动，那么dom节点的数量将无限增加</li>",9),m={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver",target:"_blank",rel:"noopener noreferrer"},b={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver",target:"_blank",rel:"noopener noreferrer"},_={href:"https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver",target:"_blank",rel:"noopener noreferrer"},k=e("li",null,[n("同redux、vuex这样"),e("strong",null,"挂载在全局的状态管理，如果不注意内存的占用，则会持续增加不会被释放")],-1),f=t(`<h3 id="容易引起内存使用不当的场景" tabindex="-1"><a class="header-anchor" href="#容易引起内存使用不当的场景" aria-hidden="true">#</a> 容易引起内存使用不当的场景</h3><ol><li>滥用全局变量</li><li>缓存不限制（最大缓存数限制）</li><li>操作大文件（切片上传，流上传）</li></ol><h2 id="拓展阅读" tabindex="-1"><a class="header-anchor" href="#拓展阅读" aria-hidden="true">#</a> 拓展阅读</h2><h3 id="v8引擎" tabindex="-1"><a class="header-anchor" href="#v8引擎" aria-hidden="true">#</a> V8引擎</h3><h5 id="内存何时回收" tabindex="-1"><a class="header-anchor" href="#内存何时回收" aria-hidden="true">#</a> 内存何时回收</h5><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span>内存快满了<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span>（全局变量） 不回收
	<span class="token keyword">if</span>（局部变量 <span class="token operator">&amp;&amp;</span> 失去引用） 回收
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释" aria-hidden="true">#</a> 名词解释</h5><p>新生代：新定义的变量</p><p>老生代：旧的变量</p><h5 id="内存大小" tabindex="-1"><a class="header-anchor" href="#内存大小" aria-hidden="true">#</a> 内存大小</h5><table><thead><tr><th>操作系统</th><th>大小</th><th>描述</th></tr></thead><tbody><tr><td>X64</td><td>1.4G</td><td>新生代（64MB）,老生代（1400MB）</td></tr><tr><td>X32</td><td>0.7G</td><td>新生代（16MB）,老生代（700MB）</td></tr></tbody></table><h5 id="内存分配" tabindex="-1"><a class="header-anchor" href="#内存分配" aria-hidden="true">#</a> 内存分配</h5><ul><li><p>新生代的算法（25%检查-标记-复制-移除）</p><blockquote><p>所有新变量都先放入【新生代】；</p><p>当容量大于25%，触发新生代的复制；</p><p>标记活的变量，并复制到另一端（始终只用了一半的空间）；</p><p>清空之前的一半；</p></blockquote></li></ul><p>何时进入老生代？经过复制且大于25%的。</p><p>特性：牺牲空间获得时间；</p><ul><li><p>老生代的算法(标记-删除-整理)</p><blockquote><p>标记死亡的变量（无引用）</p><p>删除这些变量</p><p>整理</p></blockquote></li></ul><p>为什么整理？</p><p>删除的位置是不连续的，而当需要插入连续的数据（数组）时，可能导致无法插入的情况。</p><h3 id="如何查看内存" tabindex="-1"><a class="header-anchor" href="#如何查看内存" aria-hidden="true">#</a> 如何查看内存</h3><p>单位都是 byte</p>`,20),g=t(`<li><p>浏览器：window.performance</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Performance <span class="token punctuation">{</span>
  memory<span class="token operator">:</span> <span class="token punctuation">{</span>
    usedJSHeapSize<span class="token operator">:</span>  <span class="token number">16100000</span><span class="token punctuation">,</span> 
    <span class="token comment">// JS 对象（包括V8引擎内部对象）占用的内存，一定小于 totalJSHeapSize，否则可能出现内存泄漏</span>
    totalJSHeapSize<span class="token operator">:</span> <span class="token number">35100000</span><span class="token punctuation">,</span> 
    <span class="token comment">// 可使用的内存</span>
    jsHeapSizeLimit<span class="token operator">:</span> <span class="token number">793000000</span> 
    <span class="token comment">// 内存大小限制</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),x={href:"http://nodejs.cn/api/process.html#process_process_memoryusage",target:"_blank",rel:"noopener noreferrer"},j=t(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span> 
  rss<span class="token operator">:</span> <span class="token number">23371776</span><span class="token punctuation">,</span>
  heapTotal<span class="token operator">:</span> <span class="token number">9682944</span><span class="token punctuation">,</span>
  heapUsed<span class="token operator">:</span> <span class="token number">5536960</span><span class="token punctuation">,</span>
  external<span class="token operator">:</span> <span class="token number">8733</span>  <span class="token comment">// Node的源码是C++编写的，Node下可拓展C++的一些内存，使用webpack打包时可用</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),z=e("h5",{id:"",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#","aria-hidden":"true"},"#")],-1),S=e("h3",{id:"qa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#qa","aria-hidden":"true"},"#"),n(" QA")],-1),I=e("ol",null,[e("li",null,"为什么V8内存这么小？")],-1),N=e("blockquote",null,[e("p",null,"JavaScript垃圾回收时，会中断执行；每100MB大约3ms。"),e("p",null,"JavaScript设计之初是为了处理前端脚本，导致执行完便释放了。")],-1);function y(B,q){const a=o("ExternalLinkIcon");return r(),l("div",null,[p,c,u,h,e("ol",null,[v,e("li",null,[e("a",m,[n("IntersectionObserver"),s(a)]),n(", "),e("a",b,[n("ResizeObserver"),s(a)]),n(", "),e("a",_,[n("MutationObserver"),s(a)]),n(" 这些新的事件监听Api，都必须使用对应的disconnect取消监听")]),k]),f,e("ul",null,[g,e("li",null,[e("p",null,[n("Node："),e("a",x,[n("process.memoryUsage()"),s(a)])]),j])]),z,S,I,N])}const M=i(d,[["render",y],["__file","内存泄漏.html.vue"]]);export{M as default};
