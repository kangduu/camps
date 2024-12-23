import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e}from"./app-0d9b0704.js";const t={},o=e(`<h2 id="开门见山" tabindex="-1"><a class="header-anchor" href="#开门见山" aria-hidden="true">#</a> 开门见山</h2><p>我们还是先看结论，再细说一二。</p><table><thead><tr><th>特性</th><th>as</th><th>satisfies</th></tr></thead><tbody><tr><td>作用</td><td>类型<strong>断言</strong>，<strong>强制转换</strong>类型</td><td>类型<strong>验证</strong>，确保对象<strong>符合</strong>指定类型的结构</td></tr><tr><td>类型检查</td><td>❌ <strong>不会进行</strong>类型检查，<strong>忽略</strong>类型错误</td><td>✅ <strong>会进行</strong>类型检查，<strong>确保对象符合</strong>类型要求</td></tr><tr><td>行为</td><td>可能导致<strong>类型不匹配</strong>的<strong>运行时错误</strong></td><td>如果不匹配，<strong>TypeScript 会报错</strong>，而不是忽略</td></tr><tr><td>使用场景</td><td>当你<strong>知道数据的确切类型</strong>时，强制断言</td><td><strong>确保对象符合特定类型</strong>的结构，增加<strong>类型安全性</strong></td></tr></tbody></table><h2 id="as-类型断言" tabindex="-1"><a class="header-anchor" href="#as-类型断言" aria-hidden="true">#</a> as 类型断言</h2><p><code>as</code> 是传统的类型断言操作符，允许你将一个值明确地断言为某种类型。使用 <code>as</code> 后，TypeScript 会假定你已经知道这个值的类型，而不进行任何检查。这意味着 TypeScript 会接受你给出的类型，而不验证该类型是否符合实际数据。</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法" aria-hidden="true">#</a> 用法</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> greeting<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> getLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> greeting<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行上述代码，将会得到报错 <code>error TS2339: Property &#39;length&#39; does not exist on type &#39;unknown&#39;.</code></p></blockquote><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> greeting<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token string">&quot;Hello, world!&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> getLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>greeting <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 强制断言 greeting 为 string</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在这个例子中，我们告诉 TypeScript，将 greeting 视为 <code>string</code> 类型，即使它的原始类型是 <code>unknown</code> 。但如果 greeting 的值不是字符串类型，TypeScript 依然不会报错。</p></blockquote><h3 id="特点" tabindex="-1"><a class="header-anchor" href="#特点" aria-hidden="true">#</a> 特点</h3><ol><li>类型断言：<code>as</code> 强制 TypeScript 认为一个值是某个类型，忽略类型检查。</li><li>不进行验证：<code>as</code> 并不验证这个类型是否符合实际数据类型。如果类型不匹配，可能会导致运行时错误。</li></ol><h2 id="satisfies-类型断言" tabindex="-1"><a class="header-anchor" href="#satisfies-类型断言" aria-hidden="true">#</a> satisfies 类型断言</h2><p><code>satisfies</code> 是 <code>TypeScript 4.9</code> 引入的新特性，主要用于<strong>确保一个对象符合某个特定的类型结构</strong>，但<strong>不会改变该对象的类型</strong>。这意味着，使用 <code>satisfies</code> 后，TypeScript 会验证对象是否符合指定类型的约束，但它不会像 as 那样强制改变对象的类型。</p><h3 id="用法-1" tabindex="-1"><a class="header-anchor" href="#用法-1" aria-hidden="true">#</a> 用法</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Food</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> food <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> satisfies Food<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行上述代码，将会得到报错 <code>error TS1360: Type &#39;{}&#39; does not satisfy the expected type &#39;Food&#39;. Property &#39;name&#39; is missing in type &#39;{}&#39; but required in type &#39;Food&#39;.</code></p></blockquote><blockquote><p>在这个例子中，<code>satisfies</code> 用于验证 food 是否符合 <code>Food</code> 类型。如果 food 中有任何不符合 Food 类型的字段，TypeScript 会给出错误提示。</p></blockquote><ul><li>正确做法</li></ul><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> food <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;tomato&quot;</span> <span class="token punctuation">}</span> satisfies Food<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="特点-1" tabindex="-1"><a class="header-anchor" href="#特点-1" aria-hidden="true">#</a> 特点</h3><ol><li>类型验证：<code>satisfie</code>s 用于确保对象符合指定的类型，但不会改变对象的类型。</li><li>避免类型改变：与 <code>as</code> 不同，<code>satisfies</code> 保证对象的实际类型不会被强制更改。如果类型不匹配，它会报告错误，而不是强制转换。</li></ol><h2 id="示例对比" tabindex="-1"><a class="header-anchor" href="#示例对比" aria-hidden="true">#</a> 示例对比</h2><h3 id="as-示例" tabindex="-1"><a class="header-anchor" href="#as-示例" aria-hidden="true">#</a> as 示例</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> num<span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token operator">=</span> <span class="token number">42</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> strLength<span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token keyword">as</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 强制断言 num 为 string，但实际上它是 number，会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="satisfies-示例" tabindex="-1"><a class="header-anchor" href="#satisfies-示例" aria-hidden="true">#</a> satisfies 示例</h3><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Food</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  description<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    price<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    weight<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
    <span class="token keyword">yield</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> food <span class="token operator">=</span> <span class="token punctuation">{</span> name<span class="token operator">:</span> <span class="token string">&quot;tomato&quot;</span> <span class="token punctuation">}</span> satisfies Food<span class="token punctuation">;</span> <span class="token comment">// 如果 food 中缺少某些字段，TypeScript 会报错</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><ul><li><p><code>as</code>：类型断言，告诉 TypeScript 忽略类型检查，直接将某个值视为指定类型。它不会验证数据是否符合该类型，使用时需要谨慎。</p></li><li><p><code>satisfies</code>：类型验证，确保对象符合某个类型的结构，但不会改变对象的类型。它提供更严格的类型检查，通常用于配置文件和接口类型验证。</p></li><li><p>在选择使用时：如果你希望确保对象符合某个类型的结构而不改变其类型，使用 <code>satisfies</code>；如果你确定类型并希望绕过类型检查，使用 <code>as</code></p></li></ul>`,29),p=[o];function i(c,r){return n(),a("div",null,p)}const u=s(t,[["render",i],["__file","satisfies-as.html.vue"]]);export{u as default};