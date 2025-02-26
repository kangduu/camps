import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as t,c as a,a as e,b as n,d,e as s}from"./app-2a5211dc.js";const v={},c=s(`<h1 id="服务端渲染的探索与实践" tabindex="-1"><a class="header-anchor" href="#服务端渲染的探索与实践" aria-hidden="true">#</a> 服务端渲染的探索与实践</h1><p>服务端渲染（SSR）近两年炒得很火热，相信各位同学对这个名词多少有所耳闻。本节我们将围绕“是什么”（服务端渲染的运行机制）、“为什么”（服务端渲染解决了什么性能问题 ）、“怎么做”（服务端渲染的应用实例与使用场景）这三个点，对服务端渲染进行探索。</p><p>服务端渲染是一个相对的概念，它的对立面是“客户端渲染”。在运行机制解析这部分，我们会借力客户端渲染的概念，来帮大家理解服务端渲染的工作方式。基于对工作方式的了解，再去深挖它的原理与优势。</p><p>任何知识点都不是“一座孤岛”，服务端渲染的实践往往与当下流行的前端技术（譬如 Vue，React，Redux 等）紧密结合。本节下半场将以 React 和 Vue 下的服务端渲染实现为例，为大家呈现一个完整的 SSR 实现过程。</p><h2 id="服务端渲染的运行机制" tabindex="-1"><a class="header-anchor" href="#服务端渲染的运行机制" aria-hidden="true">#</a> 服务端渲染的运行机制</h2><p>相对于服务端渲染，同学们普遍对客户端渲染接受度更高一些，所以我们先从大家喜闻乐见的客户端渲染说起。</p><h3 id="客户端渲染" tabindex="-1"><a class="header-anchor" href="#客户端渲染" aria-hidden="true">#</a> 客户端渲染</h3><p>客户端渲染模式下，服务端会把渲染需要的静态文件发送给客户端，客户端加载过来之后，自己在浏览器里跑一遍 JS，根据 JS 的运行结果，生成相应的 DOM。这种特性使得客户端渲染的源代码总是特别简洁，往往是这个德行：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&lt;!doctype html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;title&gt;我是客户端渲染的页面&lt;/title&gt;
  &lt;/head&gt;
  &lt;body&gt;
    &lt;div id=&#39;root&#39;&gt;&lt;/div&gt;
    &lt;script src=&#39;index.js&#39;&gt;&lt;/script&gt;
  &lt;/body&gt;
&lt;/html&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根节点下到底是什么内容呢？你不知道，我不知道，只有浏览器把 index.js 跑过一遍后才知道，这就是典型的客户端渲染。</p><p><strong>页面上呈现的内容，你在 html 源文件里里找不到</strong>——这正是它的特点。</p><h3 id="服务端渲染" tabindex="-1"><a class="header-anchor" href="#服务端渲染" aria-hidden="true">#</a> 服务端渲染</h3><p>服务端渲染的模式下，当用户第一次请求页面时，由服务器把需要的组件或页面渲染成 HTML 字符串，然后把它返回给客户端。客户端拿到手的，是可以直接渲染然后呈现给用户的 HTML 内容，不需要为了生成 DOM 内容自己再去跑一遍 JS 代码。</p><p>使用服务端渲染的网站，可以说是“所见即所得”，<strong>页面上呈现的内容，我们在 html 源文件里也能找到</strong>。</p><p>比如知乎就是典型的服务端渲染案例：</p><figure><img src="https://user-gold-cdn.xitu.io/2018/9/26/166162c1cbad2c64?w=2736&amp;h=582&amp;f=png&amp;s=351372" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,16),u={href:"http://zhihu.com",target:"_blank",rel:"noopener noreferrer"},o=s(`<h2 id="服务端渲染解决了什么性能问题" tabindex="-1"><a class="header-anchor" href="#服务端渲染解决了什么性能问题" aria-hidden="true">#</a> 服务端渲染解决了什么性能问题</h2><p>事实上，很多网站是出于效益的考虑才启用服务端渲染，性能倒是在其次。</p><p>假设 A 网站页面中有一个关键字叫“前端性能优化”，这个关键字是 JS 代码跑过一遍后添加到 HTML 页面中的。那么客户端渲染模式下，我们在搜索引擎搜索这个关键字，是找不到 A 网站的——搜索引擎只会查找现成的内容，不会帮你跑 JS 代码。A 网站的运营方见此情形，感到很头大：搜索引擎搜不出来，用户找不到我们，谁还会用我的网站呢？为了把“现成的内容”拿给搜索引擎看，A 网站不得不启用服务端渲染。</p><p>但性能在其次，不代表性能不重要。服务端渲染解决了一个非常关键的性能问题——首屏加载速度过慢。在客户端渲染模式下，我们除了加载 HTML，还要等渲染所需的这部分 JS 加载完，之后还得把这部分 JS 在浏览器上再跑一遍。这一切都是发生在用户点击了我们的链接之后的事情，在这个过程结束之前，用户始终见不到我们网页的庐山真面目，也就是说用户一直在等！相比之下，服务端渲染模式下，服务器给到客户端的已经是一个直接可以拿来呈现给用户的网页，中间环节早在服务端就帮我们做掉了，用户岂不“美滋滋”？</p><h2 id="服务端渲染的应用实例" tabindex="-1"><a class="header-anchor" href="#服务端渲染的应用实例" aria-hidden="true">#</a> 服务端渲染的应用实例</h2><p>下面我们先来看一下在一个 React 项目里，服务端渲染是怎么实现的。本例中，我们使用 Express 搭建后端服务。</p><p>项目中有一个叫做 VDom 的 React 组件，它的内容如下。</p><p>VDom.js:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import React from &#39;react&#39;

const VDom = () =&gt; {
  return &lt;div&gt;我是一个被渲染为真实DOM的虚拟DOM&lt;/div&gt;
}

export default VDom

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在服务端的入口文件中，我引入这个组件，对它进行渲染：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>import express from &#39;express&#39;
import React from &#39;react&#39;
import { renderToString } from &#39;react-dom/server&#39;
import VDom from &#39;./VDom&#39;

// 创建一个express应用
const app = express()
// renderToString 是把虚拟DOM转化为真实DOM的关键方法
const RDom = renderToString(&lt;VDom /&gt;)
// 编写HTML模板，插入转化后的真实DOM内容
const Page = \`
            &lt;html&gt;
              &lt;head&gt;
                &lt;title&gt;test&lt;/title&gt;
              &lt;/head&gt;
              &lt;body&gt;
                &lt;span&gt;服务端渲染出了真实DOM:  &lt;/span&gt;
                \${RDom}
              &lt;/body&gt;
            &lt;/html&gt;
            \`
            
// 配置HTML内容对应的路由
app.get(&#39;/index&#39;, function(req, res) {
  res.send(Page)
})

// 配置端口号
const server = app.listen(8000)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),m={href:"http://localhost:8000/index",target:"_blank",rel:"noopener noreferrer"},p=e("figure",null,[e("img",{src:"https://user-gold-cdn.xitu.io/2018/9/26/16615e831fa4c113?w=1502&h=408&f=png&s=129026",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),b=e("p",null,[n("我们可以看到，VDom 组件已经被 renderToString 转化为了一个内容为"),e("code",null,'<div data-reactroot="">我是一个被渲染为真实DOM的虚拟DOM</div>'),n("的字符串，这个字符串被插入 HTML 代码，成为了真实 DOM 树的一部分。")],-1),h=e("p",null,"那么 Vue 是如何实现服务端渲染的呢？",-1),g={href:"https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F",target:"_blank",rel:"noopener noreferrer"},x=s(`<p>该示例直接将 Vue 实例整合进了服务端的入口文件中：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const Vue = require(&#39;vue&#39;)
// 创建一个express应用
const server = require(&#39;express&#39;)()
// 提取出renderer实例
const renderer = require(&#39;vue-server-renderer&#39;).createRenderer()

server.get(&#39;*&#39;, (req, res) =&gt; {
  // 编写Vue实例（虚拟DOM节点）
  const app = new Vue({
    data: {
      url: req.url
    },
    // 编写模板HTML的内容
    template: \`&lt;div&gt;访问的 URL 是： {{ url }}&lt;/div&gt;\`
  })
    
  // renderToString 是把Vue实例转化为真实DOM的关键方法
  renderer.renderToString(app, (err, html) =&gt; {
    if (err) {
      res.status(500).end(&#39;Internal Server Error&#39;)
      return
    }
    // 把渲染出来的真实DOM字符串插入HTML模板中
    res.end(\`
      &lt;!DOCTYPE html&gt;
      &lt;html lang=&quot;en&quot;&gt;
        &lt;head&gt;&lt;title&gt;Hello&lt;/title&gt;&lt;/head&gt;
        &lt;body&gt;\${html}&lt;/body&gt;
      &lt;/html&gt;
    \`)
  })
})

server.listen(8080)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大家对比一下 React 项目中的注释内容，是不是发现这两段代码从本质上来说区别不大呢？</p><p>以上两个小🌰，为大家演示了基本的服务端渲染实现流程。</p><p>实际项目比这些复杂很多，但万变不离其宗。强调的只有两点：一是这个 renderToString() 方法；二是把转化结果“塞”进模板里的这一步。这两个操作是服务端渲染的灵魂操作。在虚拟 DOM“横行”的当下，服务端渲染不再是早年 JSP 里简单粗暴的字符串拼接过程，它还要求这一端要具备将虚拟 DOM 转化为真实 DOM 的能力。与其说是“把 JS 在服务器上先跑一遍”，不如说是“把 Vue、React 等框架代码先在 Node 上跑一遍”。</p><h2 id="服务端渲染的应用场景" tabindex="-1"><a class="header-anchor" href="#服务端渲染的应用场景" aria-hidden="true">#</a> 服务端渲染的应用场景</h2><p>打眼一看，这个服务端渲染给浏览器省了这么多事儿，性能肯定是质的飞跃啊！喜闻乐见！但是大家打开自己经常访问的那些网页看一看，会发现仍然有许多网站压根儿不用服务端渲染——看来这个东西也不是万能的。</p><p>根据我们前面的描述，不难看出，服务端渲染本质上是<strong>本该浏览器做的事情，分担给服务器去做</strong>。这样当资源抵达浏览器时，它呈现的速度就快了。乍一看好像很合理：浏览器性能毕竟有限，服务器多牛逼！能者多劳，就该让服务器多干点活！</p><p>但仔细想想，在这个网民遍地的时代，几乎有多少个用户就有多少台浏览器。用户拥有的浏览器总量多到数不清，那么一个公司的服务器又有多少台呢？我们把这么多台浏览器的渲染压力集中起来，分散给相比之下数量并不多的服务器，服务器肯定是承受不住的。</p><p>这样分析下来，服务端渲染也并非万全之策。在实践中，我一般会建议大家先忘记服务端渲染这个事情——服务器稀少而宝贵，但首屏渲染体验和 SEO 的优化方案却很多——我们最好先把能用的低成本“大招”都用完。除非网页对性能要求太高了，以至于所有的招式都用完了，性能表现还是不尽人意，这时候我们就可以考虑向老板多申请几台服务器，把服务端渲染搞起来了~</p>`,10);function _(f,D){const i=r("ExternalLinkIcon");return t(),a("div",null,[c,e("p",null,[e("a",u,[n("zhihu.com"),d(i)]),n(" 返回的 HTML 文件已经是可以直接进行渲染的内容了。")]),o,e("p",null,[n("根据我们的路由配置，当我访问 "),e("a",m,[n("http://localhost:8000/index"),d(i)]),n(" 时，就可以呈现出服务端渲染的结果了：")]),p,b,h,e("p",null,[n("其实是一个套路，我这里基于 "),e("a",g,[n("Vue SSR 指南"),d(i)]),n(" 中官方给出的例子为大家讲解 Vue 中的实现思路（思路见注释）。")]),x])}const V=l(v,[["render",_],["__file","服务端渲染的探索与实践.html.vue"]]);export{V as default};
