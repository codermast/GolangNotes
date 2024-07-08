import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,c as a,a as c,w as i,d,o as p,e as t,b as e}from"./app-BxOOvlCR.js";const h="/assets/2024-01-10-21-23-03-CecTkR_3.png",k="/assets/2024-01-09-11-02-32-CAZSz2dK.png",u="/assets/2024-01-09-11-00-51--0tqxI_O.png",g="/assets/2024-01-09-10-58-05-DHinaQ8c.png",m="/assets/2024-01-09-11-05-24-uuxjdlgg.png",_="/assets/2024-01-09-11-05-58-C6i0SG6x.png",D={},b=d('<h1 id="docker-介绍及安装" tabindex="-1"><a class="header-anchor" href="#docker-介绍及安装"><span>Docker - 介绍及安装</span></a></h1><h2 id="docker是什么" tabindex="-1"><a class="header-anchor" href="#docker是什么"><span>Docker是什么？</span></a></h2><p>Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。</p><p>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。</p><p>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。</p><p>Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版），我们用社区版就可以了。</p><h2 id="docker能干什么" tabindex="-1"><a class="header-anchor" href="#docker能干什么"><span>Docker能干什么？</span></a></h2><p>Docker是一种容器化平台，可用于打包、分发和运行应用程序及其依赖项。以下是Docker的一些主要功能和用途：</p><ol><li><p>容器化应用程序： Docker允许开发人员将应用程序及其所有依赖项打包到一个称为容器的独立单元中。这包括代码、运行时、系统工具、系统库等。容器可以在任何支持Docker的环境中运行，而不受环境差异的影响。</p></li><li><p>跨平台性： Docker容器可以在不同的操作系统和云平台上运行，提供了更强大的跨平台性。无论是在开发、测试还是生产环境，都可以使用相同的容器。</p></li><li><p>轻量级： Docker容器共享宿主操作系统的内核，因此它们相比于传统的虚拟机更加轻量级。这使得容器的启动速度更快，占用更少的系统资源。</p></li><li><p>版本控制： Docker容器的镜像可以被版本控制，允许开发人员和运维团队轻松地追踪和回滚应用程序的版本。</p></li><li><p>快速部署： Docker容器可以快速启动、停止和重新启动，提高了应用程序的部署速度。这对于微服务架构和持续集成/持续部署 (CI/CD) 策略非常有用。</p></li><li><p>隔离性： Docker容器提供了进程级别的隔离，使得应用程序之间相互独立。这有助于避免由于一个应用程序的问题导致整个系统崩溃。</p></li><li><p>资源优化： 多个Docker容器可以在同一台主机上并发运行，共享主机的资源。Docker通过优化资源使用，提高了系统的效率。</p></li><li><p>生态系统： Docker拥有丰富的生态系统，包括Docker Hub，其中存储了大量的公共和私有Docker镜像，使得开发人员可以轻松共享和获取镜像。</p></li></ol><p>总体而言，Docker通过容器化技术提供了一种便捷、灵活且高效的方式来开发、打包和部署应用程序。</p><h2 id="docker和普通虚拟机的区别" tabindex="-1"><a class="header-anchor" href="#docker和普通虚拟机的区别"><span>Docker和普通虚拟机的区别</span></a></h2><figure><img src="'+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以理解为普通虚拟机是在宿主机的物理环境上，将操作系统进行虚拟化，类似于提供一个整体的虚拟环境，你可以在这个环境内干任何想干的事，而 Docker 在宿主机的基础上，仅仅只虚拟化所指定的依赖项。</p><p>虚拟机是在物理硬件层面对资源的隔离，而 Docker 是在操作系统的层面对所使用应用的隔离。</p><p>故 Docker 在性能上大大高于普通虚拟机。</p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">虚拟机</th><th style="text-align:center;">Docker</th></tr></thead><tbody><tr><td style="text-align:center;">隔离程度</td><td style="text-align:center;">隔离操作系统</td><td style="text-align:center;">隔离所需依赖</td></tr><tr><td style="text-align:center;">资源利用率</td><td style="text-align:center;">低</td><td style="text-align:center;">高</td></tr><tr><td style="text-align:center;">运行效率</td><td style="text-align:center;">差</td><td style="text-align:center;">好</td></tr><tr><td style="text-align:center;">成本</td><td style="text-align:center;">高</td><td style="text-align:center;">低</td></tr></tbody></table><h2 id="学习docker之前-需要什么基础" tabindex="-1"><a class="header-anchor" href="#学习docker之前-需要什么基础"><span>学习Docker之前，需要什么基础</span></a></h2><p>在学习 Docker 之前，你需要掌握一些常用的 Linux 操作指令，至少认识一些常见的命令，能读懂即可。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果您对 Linux 操作指令不太熟悉，或者您想学习 Linux ，可以参考本站的 Linux 系列学习笔记。</p><p>// TODO:Linux学习笔记</p></div><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="docker官方安装教程" tabindex="-1"><a class="header-anchor" href="#docker官方安装教程"><span>Docker官方安装教程</span></a></h3><ul><li>Docker Desktop For Windows ：<a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/desktop/install/windows-install/</a></li><li>Docker Desktop For MacOS：<a href="https://docs.docker.com/desktop/install/mac-install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/desktop/install/mac-install/</a></li><li>Docker Desktop For Linux：<a href="https://docs.docker.com/desktop/install/linux-install/" target="_blank" rel="noopener noreferrer">https://docs.docker.com/desktop/install/linux-install/</a></li></ul><h3 id="第三方安装教程" tabindex="-1"><a class="header-anchor" href="#第三方安装教程"><span>第三方安装教程</span></a></h3><p>下面是本人制作的 Docker 安装图文教程，仅供参考使用</p>',24),x=e("p",null,[e("strong",null,"1.使用 Homebrew 安装")],-1),y=e("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"brew"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," install"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," docker")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"})])],-1),f=e("figure",null,[e("img",{src:k,alt:"安装成功",tabindex:"0",loading:"lazy"}),e("figcaption",null,"安装成功")],-1),v=e("p",null,"如果你的电脑没有安装Docker，则会自动进行安装。",-1),w=e("figure",null,[e("img",{src:u,alt:"已经安装",tabindex:"0",loading:"lazy"}),e("figcaption",null,"已经安装")],-1),C=e("p",null,"如果你的电脑已经安装了Docker，就显示已经安装。",-1),A=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("p",null,"由于涉及到应用的安装，系统会进行拦截，在这期间可能会需要输入电脑的密码，输入即可。")],-1),F=e("p",null,[e("strong",null,"2.手动下载安装")],-1),L=e("p",null,"手动下载的是 Docker 的桌面管理程序，安装打开后会自动检测系统当前的 Docker 环境。",-1),E=e("p",null,[t("下载地址："),e("a",{href:"https://docs.docker.com/desktop/install/mac-install/",target:"_blank",rel:"noopener noreferrer"},"https://docs.docker.com/desktop/install/mac-install/")],-1),T=e("figure",null,[e("img",{src:g,alt:"",tabindex:"0",loading:"lazy"}),e("figcaption")],-1),z=e("p",null,"Docker官方提供了Intel、Apple芯片两种，选择自己电脑的版本下载即可。",-1),M=e("blockquote",null,[e("ul",null,[e("li",null,"M系列芯片，就选择Apple芯片。如：M1、M2、M3系列"),e("li",null,"Intel 系列芯片，就选择 Intel 芯片。如：i5、i3、i7系列")])],-1),S=e("p",null,"下载好的文件为 Docker.dmg，双击打开即可。",-1),I=e("figure",null,[e("img",{src:m,alt:"下载好的文件",tabindex:"0",loading:"lazy"}),e("figcaption",null,"下载好的文件")],-1),O=e("figure",null,[e("img",{src:_,alt:"双击安装",tabindex:"0",loading:"lazy"}),e("figcaption",null,"双击安装")],-1),N=e("p",null,"将 Docker 图标拖动至 Applications 文件夹，或者双击 Docker 图标即可进行安装。",-1),G=e("p",null,null,-1),P=e("p",null,"Docker 并不是一个通用的容器工具，它依赖于已存在并运行的 Linux 内核环境。",-1),W=e("p",null,"Docker 实质上是在已经运行的 Linux 下制造了一个隔离的文件环境，因此它执行的效率几乎等同于所部署的 Linux 主机。",-1),q=e("p",null,"因此，Docker 必须部署在 Linux 内核的系统上。如果其他系统想部署 Docker 就必须安装一个虚拟 Linux 环境。",-1),V=e("div",{class:"hint-container note"},[e("p",{class:"hint-container-title"},"注"),e("p",null,[t("博客园上这篇安装教程写的比较详细，Windows安装遇到问题的朋友可以参考一下。 "),e("a",{href:"https://www.cnblogs.com/Can-daydayup/p/15468591.html",target:"_blank",rel:"noopener noreferrer"},"https://www.cnblogs.com/Can-daydayup/p/15468591.html")])],-1),Z=e("p",null,"下面的下载是 Docker 桌面管理程序的下载地址：",-1),B=e("ul",null,[e("li",null,[t("官网下载："),e("a",{href:"https://desktop.docker.com/win/main/amd64/Docker%20Desktop%20Installer.exe",target:"_blank",rel:"noopener noreferrer"},"https://desktop.docker.com/win/main/amd64/Docker Desktop Installer.exe")])],-1),H=e("p",null,"官网下载速度可能会比较慢，这里提供一个国内的下载镜像，速度会比较快。",-1),j=e("ul",null,[e("li",null,[t("国内镜像："),e("a",{href:"https://smartidedl.blob.core.chinacloudapi.cn/docker/20210926/Docker-win.exe",target:"_blank",rel:"noopener noreferrer"},"https://smartidedl.blob.core.chinacloudapi.cn/docker/20210926/Docker-win.exe")])],-1),R=e("div",{class:"hint-container warning"},[e("p",{class:"hint-container-title"},"注意"),e("p",null,"博主目前只有一台 MacOS 的电脑，无法制作更详细的 Windows 平台下的安装教程，后续会更新。")],-1),J=e("p",null,null,-1),K=e("p",null,"执行 Docker 官方提供的安装脚本安装即可。",-1),Q=e("div",{class:"language-sh line-numbers-mode","data-highlighter":"shiki","data-ext":"sh","data-title":"sh",style:{"--shiki-light":"#24292e","--shiki-dark":"#abb2bf","--shiki-light-bg":"#fff","--shiki-dark-bg":"#282c34"}},[e("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[e("code",null,[e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"curl"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -fsSL"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," https://test.docker.com"),e("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}}," -o"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," test-docker.sh")]),t(`
`),e("span",{class:"line"},[e("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"sudo"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," sh"),e("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," test-docker.sh")])])]),e("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function U(X,Y){const l=r("Tabs");return p(),a("div",null,[b,c(l,{id:"188",data:[{id:"MacOS"},{id:"Windows"},{id:"Linux"}]},{title0:i(({value:n,isActive:o})=>[t("MacOS")]),title1:i(({value:n,isActive:o})=>[t("Windows")]),title2:i(({value:n,isActive:o})=>[t("Linux")]),tab0:i(({value:n,isActive:o})=>[x,y,f,v,w,C,A,F,L,E,T,z,M,S,I,O,N,G]),tab1:i(({value:n,isActive:o})=>[P,W,q,V,Z,B,H,j,R,J]),tab2:i(({value:n,isActive:o})=>[K,Q]),_:1})])}const te=s(D,[["render",U],["__file","docker-introduce.html.vue"]]),ie=JSON.parse('{"path":"/backend-tech/cloud-native/docker/docker-introduce.html","title":"Docker - 介绍及安装","lang":"zh-CN","frontmatter":{"order":1,"description":"Docker - 介绍及安装 Docker是什么？ Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。 Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。 容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPho...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/backend-tech/cloud-native/docker/docker-introduce.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"Docker - 介绍及安装"}],["meta",{"property":"og:description","content":"Docker - 介绍及安装 Docker是什么？ Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。 Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。 容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPho..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T09:08:38.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-08T09:08:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Docker - 介绍及安装\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T09:08:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"Docker是什么？","slug":"docker是什么","link":"#docker是什么","children":[]},{"level":2,"title":"Docker能干什么？","slug":"docker能干什么","link":"#docker能干什么","children":[]},{"level":2,"title":"Docker和普通虚拟机的区别","slug":"docker和普通虚拟机的区别","link":"#docker和普通虚拟机的区别","children":[]},{"level":2,"title":"学习Docker之前，需要什么基础","slug":"学习docker之前-需要什么基础","link":"#学习docker之前-需要什么基础","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"Docker官方安装教程","slug":"docker官方安装教程","link":"#docker官方安装教程","children":[]},{"level":3,"title":"第三方安装教程","slug":"第三方安装教程","link":"#第三方安装教程","children":[]}]}],"git":{"createdTime":1720429718000,"updatedTime":1720429718000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":5.36,"words":1607},"filePathRelative":"backend-tech/cloud-native/docker/docker-introduce.md","localizedDate":"2024年7月8日","autoDesc":true,"excerpt":"\\n<h2>Docker是什么？</h2>\\n<p>Docker 是一个开源的应用容器引擎，基于 Go 语言 并遵从 Apache2.0 协议开源。</p>\\n<p>Docker 可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。</p>\\n<p>容器是完全使用沙箱机制，相互之间不会有任何接口（类似 iPhone 的 app）,更重要的是容器性能开销极低。</p>\\n<p>Docker 从 17.03 版本之后分为 CE（Community Edition: 社区版） 和 EE（Enterprise Edition: 企业版），我们用社区版就可以了。</p>"}');export{te as comp,ie as data};