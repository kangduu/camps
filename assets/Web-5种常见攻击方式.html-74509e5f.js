const e=JSON.parse('{"key":"v-b6c8e296","path":"/special/security/Web-5%E7%A7%8D%E5%B8%B8%E8%A7%81%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F.html","title":"Web安全问题","lang":"zh-CN","frontmatter":{"title":"Web安全问题","description":"Web安全问题（5种常见的攻击方式） SQL注入 XSS CSRF 点击劫持 中间人攻击 1. SQL注入 后端人员使用用户输入的数据来**【拼接SQL查询语句】**时未做防范，使得一些恶意的输入产生了有问题的SQL语句 示例 //请求地址 test/index.php?id=1 //SQL语句 sql = \\"select * from test where id=\\", $id //正常情况：我们只想获取id=1的文章内容 //攻击者可恶意输入 test/index.php?id=-1 OR 1 = 1 // 这样导致id=-1 OR 1=1 永远为true，进而where语句失效（无意义），则可以获取全部内容（test表）","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/front-end-camps/special/security/Web-5%E7%A7%8D%E5%B8%B8%E8%A7%81%E6%94%BB%E5%87%BB%E6%96%B9%E5%BC%8F.html"}],["meta",{"property":"og:site_name","content":"杜同学日记"}],["meta",{"property":"og:title","content":"Web安全问题"}],["meta",{"property":"og:description","content":"Web安全问题（5种常见的攻击方式） SQL注入 XSS CSRF 点击劫持 中间人攻击 1. SQL注入 后端人员使用用户输入的数据来**【拼接SQL查询语句】**时未做防范，使得一些恶意的输入产生了有问题的SQL语句 示例 //请求地址 test/index.php?id=1 //SQL语句 sql = \\"select * from test where id=\\", $id //正常情况：我们只想获取id=1的文章内容 //攻击者可恶意输入 test/index.php?id=-1 OR 1 = 1 // 这样导致id=-1 OR 1=1 永远为true，进而where语句失效（无意义），则可以获取全部内容（test表）"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-23T10:01:29.000Z"}],["meta",{"property":"article:author","content":"kangduu"}],["meta",{"property":"article:modified_time","content":"2024-07-23T10:01:29.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Web安全问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-23T10:01:29.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"kangduu\\",\\"url\\":\\"https://github.com/kangduu\\"}]}"]]},"headers":[{"level":3,"title":"Web安全问题（5种常见的攻击方式）","slug":"web安全问题-5种常见的攻击方式","link":"#web安全问题-5种常见的攻击方式","children":[]},{"level":3,"title":"1. SQL注入","slug":"_1-sql注入","link":"#_1-sql注入","children":[]},{"level":3,"title":"2. XSS","slug":"_2-xss","link":"#_2-xss","children":[]},{"level":3,"title":"3. CSRF( Cross Site Request Forgery)","slug":"_3-csrf-cross-site-request-forgery","link":"#_3-csrf-cross-site-request-forgery","children":[]},{"level":3,"title":"4. 点击劫持（click-jacking）/  UI覆盖攻击","slug":"_4-点击劫持-click-jacking-ui覆盖攻击","link":"#_4-点击劫持-click-jacking-ui覆盖攻击","children":[]},{"level":3,"title":"5. 中间人攻击(Man-in-the-Middle Attack, MITM)","slug":"_5-中间人攻击-man-in-the-middle-attack-mitm","link":"#_5-中间人攻击-man-in-the-middle-attack-mitm","children":[]}],"git":{"createdTime":1721728889000,"updatedTime":1721728889000,"contributors":[{"name":"dukang","email":"dk@nosugartech.com","commits":1}]},"readingTime":{"minutes":4.44,"words":1332},"filePathRelative":"special/security/Web-5种常见攻击方式.md","localizedDate":"2024年7月23日","excerpt":"<h3> Web安全问题（5种常见的攻击方式）</h3>\\n<ol>\\n<li>SQL注入</li>\\n<li>XSS</li>\\n<li>CSRF</li>\\n<li>点击劫持</li>\\n<li>中间人攻击</li>\\n</ol>\\n<h3> 1. SQL注入</h3>\\n<blockquote>\\n<p>后端人员使用<strong>用户输入的数据</strong>来**【拼接SQL查询语句】**时未做防范，使得一些恶意的输入产生了有问题的SQL语句</p>\\n</blockquote>\\n<p><code>示例</code></p>\\n<div class=\\"language-javascript line-numbers-mode\\" data-ext=\\"js\\"><pre class=\\"language-javascript\\"><code><span class=\\"token comment\\">//请求地址 </span>\\ntest<span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>php<span class=\\"token operator\\">?</span>id<span class=\\"token operator\\">=</span><span class=\\"token number\\">1</span>\\n\\n<span class=\\"token comment\\">//SQL语句</span>\\nsql <span class=\\"token operator\\">=</span> <span class=\\"token string\\">\\"select * from test where id=\\"</span><span class=\\"token punctuation\\">,</span> $id\\n\\n<span class=\\"token comment\\">//正常情况：我们只想获取id=1的文章内容</span>\\n\\n<span class=\\"token comment\\">//攻击者可恶意输入</span>\\ntest<span class=\\"token operator\\">/</span>index<span class=\\"token punctuation\\">.</span>php<span class=\\"token operator\\">?</span>id<span class=\\"token operator\\">=</span><span class=\\"token operator\\">-</span><span class=\\"token number\\">1</span> <span class=\\"token constant\\">OR</span> <span class=\\"token number\\">1</span> <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span> \\n<span class=\\"token comment\\">// 这样导致id=-1 OR 1=1 永远为true，进而where语句失效（无意义），则可以获取全部内容（test表）</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{e as data};
