import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as i,c as a,a as t,b as e,d as l,e as c}from"./app-07d6e59a.js";const h={},n=t("h3",{id:"http缓存机制",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#http缓存机制","aria-hidden":"true"},"#"),e(" http缓存机制")],-1),p={href:"https://blog.csdn.net/jutal_ljt/article/details/80021545",target:"_blank",rel:"noopener noreferrer"},s={href:"https://blog.csdn.net/jutal_ljt/article/details/80021545",target:"_blank",rel:"noopener noreferrer"},g=c(`<h3 id="http和https" tabindex="-1"><a class="header-anchor" href="#http和https" aria-hidden="true">#</a> http和https</h3><ul><li><p>http</p><blockquote><p>超文本传输协议</p><p>以<code>明文方式</code>发送内容，不提供任何方式的数据加密，</p><p>如果攻击者截取了Web浏览器和网站服务器之间的传输报文，就可以直接读懂其中的信息，因此，HTTP协议不适合传输一些敏感信息，比如：信用卡号、密码等支付信息。</p></blockquote></li><li><p>https</p><blockquote><p>安全套接字超文本传输协议</p><p>HTTPS在HTTP的基础上加入了SSL/TLS协议</p><p>SSL/TLS依靠证书来验证服务器的身份，并为浏览器和服务器之间的通信加密</p><p>HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证的网络协议，要比http协议安全</p><p>HTTPS<code>并非绝对安全</code>，掌握根证书的机构、掌握加密算法的组织同样可以进行中间人形式的攻击，但HTTPS仍是现行架构下最安全的解决方案</p></blockquote></li><li><p>HTTPS协议的主要作用</p><blockquote><p>建立一个信息安全通道，来保证数据传输的安全</p><p>确认网站的真实性。</p></blockquote></li></ul><h3 id="http与https的区别" tabindex="-1"><a class="header-anchor" href="#http与https的区别" aria-hidden="true">#</a> http与https的区别</h3><ol><li>https协议需要到CA申请证书，一般免费证书较少，因而需要一定费用。</li><li>http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl/tls加密传输协议。</li><li>http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。</li><li>http的连接很简单，是无状态的；HTTPS协议是由SSL/TLS+HTTP协议构建的可进行加密传输、身份认证</li></ol><h3 id="https的缺点" tabindex="-1"><a class="header-anchor" href="#https的缺点" aria-hidden="true">#</a> HTTPS的缺点</h3><ol><li>HTTPS协议握手阶段比较费时，会使页面的加载时间延长近50%，增加10%到20%的耗电</li><li>HTTPS连接缓存不如HTTP高效，会增加数据开销和功耗，甚至已有的安全措施也会因此而受到影响</li><li>SSL证书需要钱，功能越强大的证书费用越高，个人网站、小网站没有必要一般不会用</li><li>SSL证书通常需要绑定IP，不能在同一IP上绑定多个域名，IPv4资源不可能支撑这个消耗</li><li>HTTPS协议的加密范围也比较有限，在黑客攻击、拒绝服务攻击、服务器劫持等方面几乎起不到什么作用。最关键的，SSL证书的信用链体系并不安全，特别是在某些国家可以控制CA根证书的情况下，中间人攻击一样可行</li></ol><h3 id="get与post-的区别" tabindex="-1"><a class="header-anchor" href="#get与post-的区别" aria-hidden="true">#</a> GET与POST 的区别</h3><ol><li>Get 请求能<code>缓存</code>，Post 不能</li><li>Post 相对 Get <code>安全</code>一点点，因为Get 请求都包含在 URL 里，且会被浏览器保存历史纪录，Post 不会。但是在抓包的情况下都是一样的。</li><li>Post 可以通过 <code>request body</code>来传输比 Get <code>更多的数据</code>，Get 没有这个技术</li><li><code>URL有长度限制</code>，会影响 Get 请求，但是这个长度限制是浏览器规定的，不是 RFC 规定的</li><li>Post 支持更多的<code>编码类型</code>且不对数据类型限制</li></ol><h2 id="tcp的三次握手四次挥手-画在纸上。" tabindex="-1"><a class="header-anchor" href="#tcp的三次握手四次挥手-画在纸上。" aria-hidden="true">#</a> TCP的三次握手四次挥手，画在纸上。</h2><h4 id="tcp标志位" tabindex="-1"><a class="header-anchor" href="#tcp标志位" aria-hidden="true">#</a> TCP标志位</h4><ol><li><p>ACK(acknowledgement 确认)</p></li><li><p>PSH(push传送)</p></li><li><p>FIN(finish结束)</p></li><li><p>RST(reset重置)</p></li><li><p>URG(urgent紧急)</p></li><li><p>SYN(synchronous建立联机 同步)</p></li><li><p>Sequence Number(顺序号码 seq)</p></li><li><p>Acknowledge Number(确认号码 ack)</p></li></ol><h4 id="tcp三次握手-建立连接" tabindex="-1"><a class="header-anchor" href="#tcp三次握手-建立连接" aria-hidden="true">#</a> TCP三次握手（建立连接）</h4><ul><li><p><strong>第一次握手</strong>——客户端将标志位SYN（synchronize 同步）置为1，随机产生一个值为seq=J的数据包发送到服务器，此后客户端进入<code>SYN_SENT</code>状态，等待服务端确认；</p></li><li><p><strong>第二次握手</strong>——服务端接收到数据包后由标志位SYN=1知道客户端请求建立连接，然后服务端将标志位SYN和ASK（acknowledgement 确认）都置为1，ack=J+1，随机产生一个seq=K，并将该数据包发送给客户端以回应确认连接请求，此后服务端进入<code>SYN_RCVD</code>状态；</p></li><li><p><strong>第三次握手</strong>——客户端收到确认后，检查<strong>ack是否为J+1</strong>（ J=seq，是由客户端第一次发送过去的），ACK是否为1（<strong>true</strong>），如果正确则将标志位ACK置为1，ack=K+1，并将该数据包发送给服务端B，服务端B检查<strong>ack是否为K+1</strong>（ K=seq,是服务端返回的），ACK是否为1，如果正确则连接建立成功，**客户端A和服务端B进入<code>ESTABLISHED</code>状态，**完成三次握手。</p><p>随后客户端A与服务端B之间可以开始传输数据了。</p></li></ul><figure><img src="http://dukangblog.top/img/http.3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="为什么需要三次握手" tabindex="-1"><a class="header-anchor" href="#为什么需要三次握手" aria-hidden="true">#</a> 为什么需要三次握手</h4><p>​ 在《计算机网络》第四版中是这样说的：“三次握手”的<code>目的</code>是“<strong>为了防止<u>已失效的连接请求报文段</u>突然又传送到了服务端，因而产生错误</strong>”</p><pre><code>**何为“已失效的连接请求报文段”啦？**举个栗子——client发出的第一个连接请求报文段并没有丢失，而是在某个网络结点长时间的滞留了，以致&lt;u&gt;延误到连接释放以后的某个时间才到达server&lt;/u&gt;。本来这是一个早已失效的报文段，但server收到此失效的连接请求报文段后，就误认为是client再次发出的一个新的连接请求。于是就向client发出确认报文段，同意建立连接。这不符合正常逻辑，对吧。
</code></pre><p><strong>假设不采用“三次握手”，会是什么样的情况啦？</strong>——如果server发出确认，新的连接就建立，但是client并没有发出建立连接的请求，因此不会理睬server的确认，也不会向server发送数据。自以为是的server却以为新的运输连接已经建立，并一直等待client发来数据。这样，server的很多资源就白白浪费掉了。再来一种，还是刚才的栗子——如果client不会向server的确认发出确认（第三次握手），server由于收不到确认，就知道client并没有确认建立连接，则会一直等待，知道某种机制使其断开。所以采用“三次握手”的办法可以防止上述现象发生，主要目的防止server端一直等待，浪费资源。</p><h4 id="tcp四次挥手-关闭连接" tabindex="-1"><a class="header-anchor" href="#tcp四次挥手-关闭连接" aria-hidden="true">#</a> TCP四次挥手（关闭连接）</h4><ul><li><strong>第一次挥手</strong>——Client发送一个<strong>FIN（finish 结束）</strong>，用来<strong>关闭Client到Server的数据传送</strong>，Client进入<code>FIN_WAIT_1</code>状态。【等待服务端回应是否收到关闭连接的信号】</li><li><strong>第二次挥手</strong>——Server收到FIN后，发送一个ACK给Client，确认序号为收到序号+1（与SYN相同，一个FIN占用一个序号），Server进入<code>CLOSE_WAIT</code>状态。【可以理解为，“服务端说：嘿，客户端，我收到关闭连接的信号，你先等着，我去通知应用程序关闭。客户端说：我已知晓，继续等待中...... （不会回复）】</li><li><strong>第三次挥手</strong>——Server发送一个FIN，用来关闭Server到Client的数据传送，Server进入<code>LAST_ACK</code>状态。【服务端告诉客户端，我已关闭了，并等待客户端的确认信息】</li><li><strong>第四次挥手</strong>——Client收到FIN后，Client进入<code>TIME_WAIT</code>状态，接着发送一个ACK给Server，确认序号为收到序号+1，Server进入<code>CLOSED</code>状态，完成四次挥手。</li></ul><figure><img src="http://dukangblog.top/img/http.4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>【问题1】<code>TIME_WAIT</code>状态的作用是什么？为什么是 <strong>等待 2MSL</strong> （Maximum Segment Lifetime ，报文最大生存时间）？</p><p>【答】</p><p>​ 按道理，四个报文都发送完毕，我们可以直接进入CLOSE状态了，但是我们必须假象网络是不可靠的，有可能最后一个ACK丢失。所以<code>TIME_WAIT</code>状态就是用来重发可能丢失的ACK报文。</p><h4 id="为什么建立连接是三次握手-而断开连接需要四次挥手" tabindex="-1"><a class="header-anchor" href="#为什么建立连接是三次握手-而断开连接需要四次挥手" aria-hidden="true">#</a> 为什么建立连接是三次握手，而断开连接需要四次挥手?</h4><p>​ 服务端在<code>LISTEN</code>状态下(建立连接)，收到建立连接请求的SYN报文后，把ACK和SYN放在一个报文里发送给客户端。而关闭连接时，当<strong>服务端收到客户端的FIN报文时，仅仅表示客户端不再发送数据了但是还能接收数据，服务端也未必全部数据都发送给对方了</strong>，所以服务端可以立即close，也可以发送一些数据给对方后，再发送FIN报文给对方来表示同意现在关闭连接，因此，服务端ACK和FIN一般都会分开发送。</p><h4 id="http连接到断开全过程" tabindex="-1"><a class="header-anchor" href="#http连接到断开全过程" aria-hidden="true">#</a> http连接到断开全过程</h4><figure><img src="http://dukangblog.top/img/http.3.4.jpg" alt=" http连接与断开全过程 " tabindex="0" loading="lazy"><figcaption> http连接与断开全过程 </figcaption></figure><h2 id="http状态码" tabindex="-1"><a class="header-anchor" href="#http状态码" aria-hidden="true">#</a> http状态码</h2><ol><li><p>信息类（<strong>接收到请求并且继续处理</strong>）</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td>100</td><td>客户端<code>必须继续发送请求</code></td></tr><tr><td>101</td><td>客户端要求服务器<code>根据请求转换http协议版本</code></td></tr></tbody></table></li><li><p>响应成功（表示动作被成功接收、理解和就受）</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td><code>200</code></td><td>表明该请求被成功的完成，所有请求的数据发送回客户端</td></tr><tr><td>201</td><td>提示知道新文件的URL</td></tr><tr><td>202</td><td>接受和处理，但是处理未完成</td></tr><tr><td>203</td><td>返回的信息不确定或者不完整</td></tr><tr><td>204</td><td>请求收到，但是返回的信息为空</td></tr><tr><td>205</td><td>服务器 完成了请求，用户代理必须复位当前已经浏览过的文件</td></tr><tr><td>206</td><td>服务器已经完成了部分用户的GET请求</td></tr></tbody></table></li><li><p><code>重定向</code>类（为完成指定动作，而必须接收进一步处理）</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td><code>300</code></td><td>请求的资源可在多处得到</td></tr><tr><td><code>301</code></td><td>本网页被永久性转移到另一个URL</td></tr><tr><td><code>302</code></td><td>请求的网页被转移到一个新的地址，但客户访问任继续通过原始URL地址，重定向，新的URL会在response中的Location中返回，浏览器将会使用新的URL发出新的Request</td></tr><tr><td>303</td><td>建议客户访问其它URL或访问方式</td></tr><tr><td>304</td><td>自从上次请求后，请求的网页未修改过，服务器返回此响应时，不会返回网页内容，代表上次的文档已经被缓存了，还可以继续使用</td></tr><tr><td>305</td><td>请求的资源须从服务器指定的地址得到</td></tr><tr><td>306</td><td>前一版本http中使用的代码，现行版本中不再使用</td></tr><tr><td>307</td><td>申明请求的资源临时性删除</td></tr></tbody></table></li><li><p><code>客户端错误</code>类（请求包含错误语法或不能正确执行）</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td><code>400</code></td><td>客户端请求有语法错误，不能被服务器所理解</td></tr><tr><td>401</td><td>请求未经授权，这个状态代码必须 和<code>WWW-Authenticate</code>报头域一起使用</td></tr><tr><td>402</td><td>保留有效ChargeTo头响应</td></tr><tr><td><code>403</code></td><td>禁止访问，服务器收到请求，但是拒接提供服务</td></tr><tr><td><code>404</code></td><td>表明可以连接服务器，但服务器无法取得所请求的网页，请求资源不存在，如错误的URL</td></tr><tr><td>405</td><td>用户在Request-Line字段定义的方法不允许</td></tr><tr><td>406</td><td>根据用户发送的Accept，请求资源不可访问</td></tr><tr><td>407</td><td>类似401，用户必须首先在代理服务器上获得授权</td></tr><tr><td>408</td><td>客户端没有在用户指定的时间内完成请求</td></tr><tr><td>409</td><td>对当前资源状态，请求不能完成</td></tr><tr><td>410</td><td>服务器上不再有此资源且无进一步的参考地址</td></tr><tr><td>411</td><td>服务器拒接用户定义的COntent-Length属性请求</td></tr><tr><td>412</td><td>一个或多个请求头字段在当前请求中错误</td></tr><tr><td><code>413</code></td><td>请求的资源大于服务器允许的大小</td></tr><tr><td>414</td><td>请求的资源URL大于服务器允许的长度</td></tr><tr><td>415</td><td>请求资源不支持请求项目格式</td></tr><tr><td>416</td><td>请求中包含Range请求头字段，在当前请求资源范围内没用range指示值，请求也不包含If-Range请求头字段</td></tr><tr><td>417</td><td>服务器不满足请求Expect头字段指定的期望值，如果是代理服务器，可能是下一级服务器不能满足请求</td></tr></tbody></table></li><li><p><code>服务器错误</code>类（服务器不能正确执行一个正确的请求）</p><table><thead><tr><th>状态码</th><th>描述</th></tr></thead><tbody><tr><td>500</td><td>服务器错误，无法完成请求</td></tr><tr><td>502</td><td>网关错误</td></tr><tr><td>503</td><td>由于超载或停机维护，服务器目前无法使用，一段时间后可能恢复正常</td></tr></tbody></table></li></ol>`,30);function S(T,u){const d=o("ExternalLinkIcon");return i(),a("div",null,[n,t("p",null,[t("a",p,[t("a",s,[e("https://blog.csdn.net/jutal_ljt/article/details/80021545"),l(d)])])]),g])}const _=r(h,[["render",S],["__file","HTTP.html.vue"]]);export{_ as default};
