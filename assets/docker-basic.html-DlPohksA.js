import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as r,d as s}from"./app-DmEZTw8o.js";const t="/assets/2024-01-11-12-21-03-TWq3UgxE.png",o="/assets/2024-01-10-22-27-03-DfB0qYxF.png",a="/assets/2024-01-10-22-35-21-C3xvl6VZ.png",c={},n=s('<h1 id="docker-入门基础" tabindex="-1"><a class="header-anchor" href="#docker-入门基础"><span>Docker - 入门基础</span></a></h1><h2 id="docker架构" tabindex="-1"><a class="header-anchor" href="#docker架构"><span>Docker架构</span></a></h2><p>Docker 使用的是客户端-服务端（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器。</p><p>Docker 客户端与 Docker 守护进程，负责构建、运行和 分发 Docker 容器。Docker 客户端和守护程序可以 在同一系统上运行，或者您可以将 Docker 客户端连接到远程 Docker 守护进程。Docker 客户端和守护程序使用 REST API 通过 UNIX 进行通信 套接字或网络接口。另一个 Docker 客户端是 Docker Compose， 这样，您就可以使用由一组容器组成的应用程序。</p><ul><li><p>Docker客户端：可以是基于命令行的 Docker 客户端，也可以是基于图形化界面的 Docker 应用。</p></li><li><p>Docker服务端：一个运行 Docker 服务的机器，可以是本地主机，也可以是远程的服务器。</p></li><li><p>Docker守护进程：Docker 守护程序 （） 侦听 Docker API 请求并管理 Docker 对象，例如映像、容器、网络和卷。守护进程也可以 与其他守护进程通信以管理 Docker 服务。</p></li><li><p>Docker桌面：是指在 Windows、Mac、Linux环境中易于安装，可视化构建和共享容器的应用程序。</p></li></ul><blockquote><p>Docker 的架构和 Redis 的几乎相同。</p></blockquote><figure><img src="'+t+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="docker镜像加速" tabindex="-1"><a class="header-anchor" href="#docker镜像加速"><span>Docker镜像加速</span></a></h2><p>Docker 安装好之后，在使用时我们需要拉取 Docker 镜像，这些 Docker 镜像存储在国外的 DockerHub 中，在国内访问不稳定，故此 Docker 官方和国内许多服务商提供了国内的加速器服务。</p><ul><li>Docker官方：<a href="https://registry.docker-cn.com" target="_blank" rel="noopener noreferrer">https://registry.docker-cn.com</a></li><li>阿里云：<a href="https://help.aliyun.com/document_detail/60750.html" target="_blank" rel="noopener noreferrer">https://help.aliyun.com/document_detail/60750.html</a></li><li>网易：<a href="http://hub-mirror.c.163.com" target="_blank" rel="noopener noreferrer">http://hub-mirror.c.163.com</a></li><li>USTC：<a href="https://docker.mirrors.ustc.edu.cn" target="_blank" rel="noopener noreferrer">https://docker.mirrors.ustc.edu.cn</a></li><li>七牛云：<a href="https://reg-mirror.qiniu.com" target="_blank" rel="noopener noreferrer">https://reg-mirror.qiniu.com</a></li></ul><p>这里以 Docker 官方提供的国内加速服务为样例，进行配置教程，其他服务商的配置同理。</p><ul><li><strong>命令行配置</strong></li></ul><p>对于使用 systemd 的系统，请在 <code>/etc/docker/daemon.json</code> 中写入如下内容（如果文件不存在请新建该文件）</p><p>之后重新启动服务</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> daemon-reload</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> systemctl</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> restart</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> docker</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>可视化界面配置</strong></li></ul><p>在设置中的 Docker Engine 内，插入如下配置即可。</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;registry-mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:[</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">        &quot;https://registry.docker-cn.com&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>插入，保存后，需要重启才能够生效。</p><ul><li><strong>检查镜像是否生效</strong></li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> info</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><figure><img src="'+a+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-highlighter="shiki" data-ext="text" data-title="text" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>Registry Mirrors:</span></span>
<span class="line"><span>    https://registry.docker-cn.com/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>只要出现如上的镜像链接，就是已经配置成功了。</p><h2 id="样例剖析" tabindex="-1"><a class="header-anchor" href="#样例剖析"><span>样例剖析</span></a></h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>对上一节中的 centos 实例进行分析</p></div><p>Docker 允许在容器内运行应用程序，使用 <code>docker run</code> 命令来在容器内运行一个应用程序。这里同样是个<code>Hello World</code>，不同在于它是在容器内部运行的。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">docker</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> centos:latest</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> /bin/echo</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;Hello World&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们看下各个参数的含义：</p><ul><li><code>docker</code>： Docker 的二进制执行文件。</li><li><code>run</code>： 与前面的 docker 组合来运行一个容器。</li><li><code>centos:latest</code>：指定要运行的镜像，Docker 首先从本地主机上查找镜像是否存在，如果不存在，Docker 就会从镜像仓库 Docker Hub 下载公共镜像。</li><li><code>/bin/echo &quot;Hello world&quot;</code>： 在启动的容器里执行的命令以上命令。</li></ul><p>完整的意思可以解释为：<code>Docker</code> 以 <code>centos</code> 最新的（默认是latest) 镜像创建一个新容器，然后在容器里执行 <code>bin/echo &quot;Hello world&quot;</code>，然后输出结果。</p>`,32),l=[n];function d(k,h){return r(),i("div",null,l)}const u=e(c,[["render",d],["__file","docker-basic.html.vue"]]),m=JSON.parse('{"path":"/backend-tech/cloud-native/docker/docker-basic.html","title":"Docker - 入门基础","lang":"zh-CN","frontmatter":{"order":3,"description":"Docker - 入门基础 Docker架构 Docker 使用的是客户端-服务端（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器。 Docker 客户端与 Docker 守护进程，负责构建、运行和 分发 Docker 容器。Docker 客户端和守护程序可以 在同一系统上运行，或者您可以将 Docker 客户端连接到远程 Doc...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/backend-tech/cloud-native/docker/docker-basic.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"Docker - 入门基础"}],["meta",{"property":"og:description","content":"Docker - 入门基础 Docker架构 Docker 使用的是客户端-服务端（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器。 Docker 客户端与 Docker 守护进程，负责构建、运行和 分发 Docker 容器。Docker 客户端和守护程序可以 在同一系统上运行，或者您可以将 Docker 客户端连接到远程 Doc..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T09:08:38.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-08T09:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker - 入门基础\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T09:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"Docker架构","slug":"docker架构","link":"#docker架构","children":[]},{"level":2,"title":"Docker镜像加速","slug":"docker镜像加速","link":"#docker镜像加速","children":[]},{"level":2,"title":"样例剖析","slug":"样例剖析","link":"#样例剖析","children":[]}],"git":{"createdTime":1720429718000,"updatedTime":1720429718000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.77,"words":830},"filePathRelative":"backend-tech/cloud-native/docker/docker-basic.md","localizedDate":"2024年7月8日","autoDesc":true,"excerpt":"\\n<h2>Docker架构</h2>\\n<p>Docker 使用的是客户端-服务端（C/S）架构模式，使用远程 API 来管理和创建 Docker 容器。</p>\\n<p>Docker 客户端与 Docker 守护进程，负责构建、运行和 分发 Docker 容器。Docker 客户端和守护程序可以 在同一系统上运行，或者您可以将 Docker 客户端连接到远程 Docker 守护进程。Docker 客户端和守护程序使用 REST API 通过 UNIX 进行通信 套接字或网络接口。另一个 Docker 客户端是 Docker Compose， 这样，您就可以使用由一组容器组成的应用程序。</p>\\n"}');export{u as comp,m as data};