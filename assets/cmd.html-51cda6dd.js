const e=JSON.parse('{"key":"v-0095de90","path":"/typescript/cmd.html","title":"如何运行 ts 文件","lang":"zh-CN","frontmatter":{"title":"如何运行 ts 文件","description":"tsc 编译器 因为 TypeScript 是一种静态类型语言，编译后才会转化为 JavaScript 执行。因此，通常的步骤是将 TypeScript 文件编译为 JavaScript，然后运行生成的 JavaScript 文件。 那么我们是不是应该先执行 tsc ***.ts ，然后使用 node 来执行编译后的 js 文件node ***.js。 tsc hello.ts node hello.js","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/camps/typescript/cmd.html"}],["meta",{"property":"og:site_name","content":"杜同学日记"}],["meta",{"property":"og:title","content":"如何运行 ts 文件"}],["meta",{"property":"og:description","content":"tsc 编译器 因为 TypeScript 是一种静态类型语言，编译后才会转化为 JavaScript 执行。因此，通常的步骤是将 TypeScript 文件编译为 JavaScript，然后运行生成的 JavaScript 文件。 那么我们是不是应该先执行 tsc ***.ts ，然后使用 node 来执行编译后的 js 文件node ***.js。 tsc hello.ts node hello.js"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-26T09:11:07.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2024-12-26T09:11:07.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何运行 ts 文件\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-12-26T09:11:07.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":2,"title":"tsc 编译器","slug":"tsc-编译器","link":"#tsc-编译器","children":[]},{"level":2,"title":"使用 ts-node","slug":"使用-ts-node","link":"#使用-ts-node","children":[]},{"level":2,"title":"监听文件变化","slug":"监听文件变化","link":"#监听文件变化","children":[{"level":3,"title":"使用 ts-node-dev","slug":"使用-ts-node-dev","link":"#使用-ts-node-dev","children":[]}]},{"level":2,"title":"关于本地安装依赖执行报错的说明","slug":"关于本地安装依赖执行报错的说明","link":"#关于本地安装依赖执行报错的说明","children":[{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"dependencies","slug":"dependencies","link":"#dependencies","children":[]}],"git":{"createdTime":1735204267000,"updatedTime":1735204267000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"typescript/cmd.md","localizedDate":"2024年12月26日","excerpt":"<h2> <code>tsc</code> 编译器</h2>\\n<p>因为 TypeScript 是一种静态类型语言，编译后才会转化为 JavaScript 执行。因此，通常的步骤是将 TypeScript 文件编译为 JavaScript，然后运行生成的 JavaScript 文件。</p>\\n<p>那么我们是不是应该先执行 <code>tsc ***.ts</code> ，然后使用 node 来执行编译后的 js 文件<code>node ***.js</code>。</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>tsc hello.ts\\n\\n<span class=\\"token function\\">node</span> hello.js\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
