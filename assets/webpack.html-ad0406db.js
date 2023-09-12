import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as i,c,a as e,b as a,d as o,e as n}from"./app-8520f818.js";const t={},r=n('<h3 id="常见的loader" tabindex="-1"><a class="header-anchor" href="#常见的loader" aria-hidden="true">#</a> 常见的Loader</h3><ol><li><code>raw-loader</code>：加载文件原始内容（utf-8）</li><li><code>file-loader</code>：把文件输出到一个文件夹中，在代码中通过相对 URL 去引用输出的文件 (处理图片和字体)</li><li><code>url-loader</code>：与 file-loader 类似，区别是用户可以设置一个阈值，大于阈值时返回其 publicPath，小于阈值时返回文件 base64 形式编码 (处理图片和字体)</li><li><code>source-map-loader</code>：加载额外的 Source Map 文件，以方便断点调试</li><li><code>svg-inline-loader</code>：将压缩后的 SVG 内容注入代码中</li><li><code>image-loader</code>：加载并且压缩图片文件</li><li><code>json-loader</code> 加载 JSON 文件（默认包含）</li><li><code>handlebars-loader</code>: 将 Handlebars 模版编译成函数并返回</li><li><code>babel-loader</code>：把 ES6 转换成 ES5</li><li><code>ts-loader</code>: 将 TypeScript 转换成 JavaScript</li><li><code>awesome-typescript-loader</code>：将 TypeScript 转换成 JavaScript，性能优于 ts-loader</li><li><code>tslint-loader</code>：通过 TSLint检查 TypeScript 代码</li><li><code>sass-loader</code>：将 CSS 代码注入 JavaScript 中，通过 DOM 操作去加载 CSS</li><li><code>css-loader</code>：加载 CSS，支持模块化、压缩、文件导入等特性</li><li><code>style-loader</code>：把 CSS 代码注入到 JavaScript 中，通过 DOM 操作去加载 CSS</li><li><code>postcss-loader</code>：扩展 CSS 语法，使用下一代 CSS，可以配合 autoprefixer 插件自动补齐 CSS3 前缀</li><li><code>eslint-loader</code>：通过 ESLint 检查 JavaScript 代码</li><li><code>mocha-loader</code>：加载 Mocha 测试用例的代码</li><li><code>coverjs-loader</code>：计算测试的覆盖率</li><li><code>vue-loader</code>：加载 Vue.js 单文件组件</li><li><code>i18n-loader</code>: 国际化</li><li><code>cache-loader</code>: 可以在一些性能开销较大的 Loader 之前添加，目的是将结果缓存到磁盘里</li></ol>',2),d={href:"https://webpack.docschina.org/loaders",target:"_blank",rel:"noopener noreferrer"},u=n('<h3 id="常见的plugins" tabindex="-1"><a class="header-anchor" href="#常见的plugins" aria-hidden="true">#</a> 常见的plugins</h3><ol><li><code>define-plugin</code>：定义环境变量 (Webpack4 之后指定 mode 会自动配置)</li><li><code>ignore-plugin</code>：忽略部分文件</li><li><code>html-webpack-plugin</code>：简化 HTML 文件创建 (依赖于 html-loader)</li><li><code>web-webpack-plugin</code>：可方便地为单页应用输出 HTML，比 html-webpack-plugin 好用</li><li><code>uglifyjs-webpack-plugin</code>：不支持 ES6 压缩 (Webpack4 以前)</li><li><code>terser-webpack-plugin</code>: 支持压缩 ES6 (Webpack4)</li><li><code>webpack-parallel-uglify-plugin</code>: 多进程执行代码压缩，提升构建速度</li><li><code>mini-css-extract-plugin</code>: 分离样式文件，CSS 提取为独立文件，支持按需加载 (替代extract-text-webpack-plugin)</li><li><code>serviceworker-webpack-plugin</code>：为网页应用增加离线缓存功能</li><li><code>clean-webpack-plugin</code>: 目录清理</li><li><code>ModuleConcatenationPlugin</code>: 开启 Scope Hoisting</li><li><code>speed-measure-webpack-plugin</code>: 可以看到每个 Loader 和 Plugin 执行耗时 (整个打包耗时、每个 Plugin 和 Loader 耗时)</li><li><code>webpack-bundle-analyzer</code>: 可视化 Webpack 输出文件的体积 (业务组件、依赖第三方模块)</li></ol>',2),k={href:"https://webpack.docschina.org/plugins/",target:"_blank",rel:"noopener noreferrer"},h={href:"https://webpack.docschina.org/plugins/",target:"_blank",rel:"noopener noreferrer"},b=n(`<h3 id="loader和plugins的区别" tabindex="-1"><a class="header-anchor" href="#loader和plugins的区别" aria-hidden="true">#</a> Loader和Plugins的区别</h3><p><code>Loader</code> 本质就是一个函数，在该函数中对接收到的内容进行转换，返回转换后的结果。因为 Webpack 只认识 JavaScript，所以 Loader 就成了<strong>翻译官</strong>，对其他类型的资源进行转译的预处理工作。</p><p><code>Plugin</code> 就是插件，基于事件流框架 <code>Tapable</code>，插件可以扩展 Webpack 的功能，在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。</p><p><code>Loader</code> 在 module.rules 中配置，作为模块的解析规则，<strong>类型为数组</strong>。每一项都是一个 Object，内部包含了 test(类型文件)、loader、options (参数)等属性。</p><p><code>Plugin</code> 在 plugins 中单独配置，类型为数组，每一项是一个 Plugin 的实例，参数都通过构造函数传入。</p><h3 id="webpack构建流程" tabindex="-1"><a class="header-anchor" href="#webpack构建流程" aria-hidden="true">#</a> Webpack构建流程</h3><p>Webpack 的运行流程是一个<strong>串行</strong>的过程，从启动到结束会依次执行以下流程：</p><ol><li><code>初始化参数</code>：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数</li><li><code>开始编译</code>：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译</li><li><code>确定入口</code>：根据配置中的 entry 找出所有的入口文件</li><li><code>编译模块</code>：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理</li><li><code>完成模块编译</code>：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系</li><li><code>输出资源</code>：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会</li><li><code>输出完成</code>：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统</li></ol><p>在以上过程中，<code>Webpack</code> 会在特定的时间点广播出特定的事件，插件在监听到感兴趣的事件后会执行特定的逻辑，并且插件可以调用 Webpack 提供的 API 改变 Webpack 的运行结果。</p><p>简单说</p><ol><li>初始化：启动构建，读取与合并配置参数，加载 Plugin，实例化 Compiler</li><li>编译：从 Entry 出发，针对每个 Module 串行调用对应的 Loader 去翻译文件的内容，再找到该 Module 依赖的 Module，递归地进行编译处理</li><li>输出：将编译后的 Module 组合成 Chunk，将 Chunk 转换成文件，输出到文件系统中</li></ol><h3 id="webpack开发时-可以提高效率的插件" tabindex="-1"><a class="header-anchor" href="#webpack开发时-可以提高效率的插件" aria-hidden="true">#</a> webpack开发时，可以提高效率的插件？</h3><ol><li><code>webpack-dashboard</code>：可以更友好的<strong>展示相关打包信息</strong>。</li><li><code>webpack-merge</code>：<strong>提取公共配置</strong>，减少重复配置代码</li><li><code>speed-measure-webpack-plugin</code>：简称 SMP，<strong>分析出 Webpack 打包过程中 Loader 和 Plugin 的耗时</strong>，有助于找到构建过程中的性能瓶颈。</li><li><code>size-plugin</code>：<strong>监控资源体积变化</strong>，尽早发现问题</li><li><code>HotModuleReplacementPlugin</code>：模块<strong>热替换</strong></li></ol><h3 id="source-map是什么-生产环境怎么用" tabindex="-1"><a class="header-anchor" href="#source-map是什么-生产环境怎么用" aria-hidden="true">#</a> source map是什么？生产环境怎么用？</h3><blockquote><p><code>source map</code> 是将编译、打包、压缩后的代码映射回源代码的过程。</p><p>打包压缩后的代码不具备良好的可读性，想要调试源码就需要 soucre map。</p><p>map文件只要不打开开发者工具，浏览器是不会加载的。</p></blockquote><p>线上环境一般有三种处理方案：</p><ol><li><code>hidden-source-map</code>：借助第三方错误监控平台 Sentry 使用</li><li><code>nosources-source-map</code>：只会显示具体行数以及查看源代码的错误栈。安全性比 sourcemap 高</li><li><code>sourcemap</code>：通过 nginx 设置将 .map 文件只对白名单开放(公司内网)</li></ol><p><strong>注意：避免在生产中使用 <code>inline-</code> 和 <code>eval-</code>，因为它们会增加 bundle 体积大小，并降低整体性能。</strong></p><h3 id="模块打包原理知道吗" tabindex="-1"><a class="header-anchor" href="#模块打包原理知道吗" aria-hidden="true">#</a> 模块打包原理知道吗？</h3><p>Webpack 实际上<code>为每个模块创造了一个可以导出和导入的环境</code>，本质上并没有修改 代码的执行逻辑，代码执行顺序与模块加载顺序也完全一致。</p><h3 id="文件监听原理呢" tabindex="-1"><a class="header-anchor" href="#文件监听原理呢" aria-hidden="true">#</a> 文件监听原理呢？</h3><p>在发现源码发生变化时，自动重新构建出新的输出文件。</p><p>Webpack开启监听模式，有两种方式：</p><ol><li>启动 webpack 命令时，带上 --watch 参数</li><li>在配置 webpack.config.js 中设置 watch:true</li></ol><p><code>缺点</code>：每次需要手动刷新浏览器</p><p><code>原理</code>：轮询判断文件的最后编辑时间是否变化，如果某个文件发生了变化，并不会立刻告诉监听者，而是先缓存起来，等 <code>aggregateTimeout</code> 后再执行。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// 默认false,也就是不开启</span>
  <span class="token literal-property property">watch</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// 只有开启监听模式时，watchOptions才有意义</span>
  <span class="token literal-property property">watchOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 默认为空，不监听的文件或者文件夹，支持正则匹配</span>
    <span class="token literal-property property">ignored</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">node_modules</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token comment">// 监听到变化发生后会等300ms再去执行，默认300ms</span>
    <span class="token literal-property property">aggregateTimeout</span><span class="token operator">:</span><span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token comment">// 判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次</span>
    <span class="token literal-property property">poll</span><span class="token operator">:</span><span class="token number">1000</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何对bundle体积进行监控和分析" tabindex="-1"><a class="header-anchor" href="#如何对bundle体积进行监控和分析" aria-hidden="true">#</a> 如何对bundle体积进行监控和分析？</h3><blockquote><p><code>VSCode</code> 中有一个插件 <code>Import Cost</code> 可以帮助我们对引入模块的大小进行实时监测。</p></blockquote><blockquote><p>还可以使用 <code>webpack-bundle-analyzer</code> 生成 <code>bundle</code> 的模块组成图，显示所占体积。</p></blockquote><blockquote><p><code>bundlesize</code> 工具包可以进行自动化资源体积监控。</p></blockquote><h3 id="文件指纹是什么-怎么用" tabindex="-1"><a class="header-anchor" href="#文件指纹是什么-怎么用" aria-hidden="true">#</a> 文件指纹是什么？怎么用？</h3><p>文件指纹是<code>打包后输出的文件名的后缀</code>。</p><ol><li><code>Hash</code>：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改</li><li><code>Chunkhash</code>：和 Webpack 打包的 chunk 有关，不同的 entry 会生出不同的 chunkhash</li><li><code>Contenthash</code>：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变</li></ol><h6 id="js的文件指纹设置" tabindex="-1"><a class="header-anchor" href="#js的文件指纹设置" aria-hidden="true">#</a> JS的文件指纹设置</h6><p>设置 output 的 filename，用 chunkhash。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./scr/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;./src/search.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name][chunkhash:8].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="css的文件指纹设置" tabindex="-1"><a class="header-anchor" href="#css的文件指纹设置" aria-hidden="true">#</a> CSS的文件指纹设置</h6><p>设置 MiniCssExtractPlugin 的 filename，使用 contenthash。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">&#39;./scr/app.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token string">&#39;./src/search.js&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name][chunkhash:8].js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname <span class="token operator">+</span> <span class="token string">&#39;/dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[name][contenthash:8].css</span><span class="token template-punctuation string">\`</span></span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="图片的文件指纹设置" tabindex="-1"><a class="header-anchor" href="#图片的文件指纹设置" aria-hidden="true">#</a> 图片的文件指纹设置</h6><p>设置file-loader的name，使用hash。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">entry</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.js&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">filename</span><span class="token operator">:</span><span class="token string">&#39;bundle.js&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;dist&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
      <span class="token literal-property property">test</span><span class="token operator">:</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|svg|jpg|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
      <span class="token literal-property property">use</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token literal-property property">loader</span><span class="token operator">:</span><span class="token string">&#39;file-loader&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">options</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">&#39;img/[name][hash:8].[ext]&#39;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
  
  <span class="token doc-comment comment">/**占位符名称及含义**/</span>
<span class="token doc-comment comment">/**
ext             资源后缀名
name            文件名称
path            文件的相对路径
folder          文件所在的文件夹
contenthash   	文件的内容hash，默认是md5生成
hash            文件内容的hash，默认是md5生成
emoji           一个随机的指代文件内容的emoji
**/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="在实际工程中-配置文件上百行是常事-如何保证各个loader按照预想方式工作" tabindex="-1"><a class="header-anchor" href="#在实际工程中-配置文件上百行是常事-如何保证各个loader按照预想方式工作" aria-hidden="true">#</a> 在实际工程中，配置文件上百行是常事，如何保证各个loader按照预想方式工作？</h3>`,44),m={href:"https://webpack.docschina.org/configuration/module/#rule-enforce",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"loader",-1),g=n('<blockquote><p><code>pre</code> 代表在所有正常 loader 之前执行，</p><p><code>post</code> 是所有 loader 之后执行。</p><p>(inline 官方不推荐使用)</p></blockquote><h3 id="webpack热更新原理-重点" tabindex="-1"><a class="header-anchor" href="#webpack热更新原理-重点" aria-hidden="true">#</a> Webpack热更新原理(重点)</h3><p><code>Webpack</code> 的热更新又称热替换（<code>Hot Module Replacement</code>），缩写为 <code>HMR</code>。这个机制可以做到不用刷新浏览器而将新变更的模块替换掉旧的模块。</p><p>HMR的核心就是客户端从服务端拉去更新后的文件，准确的说是 chunk diff (chunk 需要更新的部分)，实际上 WDS 与浏览器之间维护了一个 <code>Websocket</code>，当本地资源发生变化时，WDS 会向浏览器推送更新，并带上构建时的 hash，让客户端与上一次资源进行对比。客户端对比出差异后会向 WDS 发起 <code>Ajax</code> 请求来获取更改内容(文件列表、hash)，这样客户端就可以再借助这些信息继续向 WDS 发起 <code>jsonp</code> 请求获取该chunk的增量更新。</p><p>后续的部分(拿到增量更新之后如何处理？哪些状态该保留？哪些又需要更新？)由 <code>HotModulePlugin</code> 来完成，提供了相关 API 以供开发者针对自身场景进行处理，像<code>react-hot-loader</code> 和 <code>vue-loader</code> 都是借助这些 API 实现 HMR。</p>',5),y={href:"https://zhuanlan.zhihu.com/p/30669007",target:"_blank",rel:"noopener noreferrer"},f=n('<h3 id="代码分割的本质是什么-有什么意义呢" tabindex="-1"><a class="header-anchor" href="#代码分割的本质是什么-有什么意义呢" aria-hidden="true">#</a> 代码分割的本质是什么？有什么意义呢？</h3><p>代码分割的本质其实就是在<code>源代码直接上线</code>和<code>打包成唯一脚本main.bundle.js</code>这两种极端方案之间的一种更适合实际场景的中间状态</p><p><strong>「 用可接受的服务器性能压力增加来换取更好的用户体验。」</strong></p><p>源代码直接上线：虽然过程可控，但是http请求多，性能开销大。</p><p>打包成唯一脚本：一把梭完自己爽，服务器压力小，但是页面空白期长，用户体验不好。</p><h3 id="webpack打包优化" tabindex="-1"><a class="header-anchor" href="#webpack打包优化" aria-hidden="true">#</a> Webpack打包优化</h3><p>我们在进行webpack配置时，会用到很多的插件，loader。这导致我们需要查找的文件更多，此时你可以使用include进行限制。也可减少resolve。</p><h6 id="限制webpack打包速度的因素" tabindex="-1"><a class="header-anchor" href="#限制webpack打包速度的因素" aria-hidden="true">#</a> 限制webpack打包速度的因素</h6><ul><li>需要处理的内容数量</li><li>如何进行操作</li><li>版本</li></ul><h6 id="常用的一些优化方式及其原理" tabindex="-1"><a class="header-anchor" href="#常用的一些优化方式及其原理" aria-hidden="true">#</a> 常用的一些优化方式及其原理</h6><ol><li><p>DLL优化（开发环境下比较麻烦，主要是线上）</p><p><code>把第三方包进行预处理</code>（每次打包都去处理第三方的包，如vue、jQuery、axios，每次都是一样的操作）。</p><ul><li>使用 DllPlugin 进行分包，使用 DllReferencePlugin(索引链接) 对 manifest.json 引用，让一些基本不会改动的代码先打包成静态资源，避免反复编译浪费时间。</li><li>HashedModuleIdsPlugin 可以解决模块数字id问题</li></ul></li><li><p>多进程/多实例：HappyPack(不维护了)、thread-loader</p></li><li><p>压缩代码</p><p>webpack-paralle-uglify-plugin</p><p>uglifyjs-webpack-plugin 开启 parallel 参数 (不支持ES6)</p><p>terser-webpack-plugin 开启 parallel 参数</p><p>多进程并行压缩</p><p>通过 mini-css-extract-plugin 提取 Chunk 中的 CSS 代码到单独文件，通过 css-loader 的 minimize 选项开启 cssnano 压缩 CSS。</p></li><li><p>图片压缩</p><ul><li>使用基于 Node 库的 imagemin (很多定制选项、可以处理多种图片格式)</li><li>配置 image-webpack-loader</li></ul></li><li><p>使用高版本的Webpack和Node.js</p></li><li><p><code>缩小打包作用域</code></p><ul><li>exclude/include (确定 loader 规则范围)</li><li>resolve.modules 指明第三方模块的绝对路径 (减少不必要的查找)</li><li>resolve.mainFields 只采用 main 字段作为入口文件描述字段 (减少搜索步骤，需要考虑到所有运行时依赖的第三方模块的入口文件描述字段)</li><li>resolve.extensions 尽可能减少后缀尝试的可能性</li><li>noParse 对完全不需要解析的库进行忽略 (不去解析但仍会打包到 bundle 中，注意被忽略掉的文件里不应该包含 import、require、define 等模块化语句)</li><li>IgnorePlugin (完全排除模块)</li><li>合理使用alias</li></ul></li><li><p><code>提取页面公共资源</code>：</p><ul><li>使用 html-webpack-externals-plugin，将基础包通过 CDN 引入，不打入 bundle 中;</li><li>使用 SplitChunksPlugin 进行(公共脚本、基础包、页面公共文件)分离(Webpack4内置) ，替代了 CommonsChunkPlugin 插件;</li><li>基础包分离：</li></ul></li><li><p><code>充分利用缓存提升二次构建速度</code>：</p><ul><li><p>babel-loader 开启缓存</p></li><li><p>terser-webpack-plugin 开启缓存</p></li><li><p>使用 cache-loader 或者 hard-source-webpack-plugin</p></li></ul></li><li><p><code>Tree shaking</code></p><ul><li>purgecss-webpack-plugin 和 mini-css-extract-plugin配合使用(建议)</li><li>打包过程中检测工程中没有引用过的模块并进行标记，在资源压缩时将它们从最终的bundle中去掉(只能对ES6 Modlue生效) 开发中尽可能使用ES6 Module的模块，提高tree shaking效率</li><li>禁用 babel-loader 的模块依赖解析，否则 Webpack 接收到的就都是转换过的 CommonJS 形式的模块，无法进行 tree-shaking</li><li>使用 PurifyCSS(不在维护) 或者 uncss 去除无用 CSS 代码</li></ul></li><li><p><code>Scope hoisting</code></p></li></ol><ul><li><p>构建后的代码会存在大量闭包，造成体积增大，运行代码时创建的函数作用域变多，内存开销变大。Scope hoisting 将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突</p><ul><li>必须是ES6的语法，因为有很多第三方库仍采用 CommonJS 语法，为了充分发挥 Scope hoisting 的作用，需要配置 mainFields 对第三方模块优先采用 jsnext:main 中指向的ES6模块化语法</li></ul></li></ul><ol start="11"><li><p><code>动态Polyfill</code></p><ul><li>建议采用 polyfill-service 只给用户返回需要的polyfill，社区维护。(部分国内奇葩浏览器UA可能无法识别，但可以降级返回所需全部polyfill)</li></ul></li></ol>',13);function S(x,w){const s=l("ExternalLinkIcon");return i(),c("div",null,[r,e("p",null,[e("a",d,[a("https://webpack.docschina.org/loaders"),o(s)])]),u,e("p",null,[e("a",k,[e("a",h,[a("https://webpack.docschina.org/plugins/"),o(s)])])]),b,e("p",null,[a("可以使用 "),e("a",m,[a("enforce"),o(s)]),a(" 强制执行 "),v,a(" 的作用顺序，")]),g,e("p",null,[e("a",y,[a("https://zhuanlan.zhihu.com/p/30669007"),o(s)])]),f])}const C=p(t,[["render",S],["__file","webpack.html.vue"]]);export{C as default};