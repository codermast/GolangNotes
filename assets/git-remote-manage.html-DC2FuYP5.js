import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,d as e}from"./app-Csyz1R7U.js";const t={},h=e('<h1 id="git-远程管理" tabindex="-1"><a class="header-anchor" href="#git-远程管理"><span>Git 远程管理</span></a></h1><h2 id="远程仓库操作" tabindex="-1"><a class="header-anchor" href="#远程仓库操作"><span>远程仓库操作</span></a></h2><p>对于远程仓库的操作，Git 提供了 <code>git remote</code> 命令，用于用于管理 Git 仓库中的远程仓库。</p><p>以下是 git remote 命令的常见用法：</p><ul><li>列出当前仓库中已配置的远程仓库</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>列出当前仓库中已配置的远程仓库，并显示它们的 URL</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>添加一个新的远程仓库。指定一个远程仓库的名称和 URL，将其添加到当前仓库中</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> add</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote_ur</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>将已配置的远程仓库重命名。</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> rename</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">old_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">new_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>从当前仓库中删除指定的远程仓库</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remove</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>修改指定远程仓库的 URL</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> set-url</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">new_ur</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">l</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>显示指定远程仓库的详细信息，包括 URL 和跟踪分支。</li></ul><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> remote</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> show</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote_nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="从远程获取代码库" tabindex="-1"><a class="header-anchor" href="#从远程获取代码库"><span>从远程获取代码库</span></a></h2><p>从远程仓库获取代码库到本地需要两步，首先获取远程分支数据，然后将本地分支没有的数据进行合并。</p><ol><li>获取远程分支数据</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> fetch</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">remote-branch-nam</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该指令是获取远程分支 remote-branch-name 中本地分支没有的数据，仅限于获取，对本地分支不做任何更改。</p><ol start="2"><li>合并远程分支数据到本地</li></ol><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> merge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [remote-branch-name]/[local-branch-name]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该指令是在获取远程分支数据后，将本地分支没有的数据合并到本地分支，即使用远程数据覆盖本地数据。</p><h2 id="下载远程代码并合并" tabindex="-1"><a class="header-anchor" href="#下载远程代码并合并"><span>下载远程代码并合并</span></a></h2><p>Git 上提供了 <code>git pull</code> 命令，用于从远程获取代码并合并本地的版本。</p><p>git pull 其实就是 git fetch 和 git merge FETCH_HEAD 的简写。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>该指令的功能就是将远程主机上的远程分支拉过来，与本地分支进行合并。</p><p>如果是远程分支和当前分支进行合并，则可以省略本地分支名。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pull</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="上传远程代码并合并" tabindex="-1"><a class="header-anchor" href="#上传远程代码并合并"><span>上传远程代码并合并</span></a></h2><p>Git 上提供了 <code>git push</code> 命令，用于从将本地的分支版本上传到远程并合并。</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果本地分支名与远程分支名相同，则可以省略冒号和远程分支名</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果本地分支和远程分支内容有差异，但又要强制推送可以使用 --force 参数</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --force</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>删除远程分支</p><div class="language-sh line-numbers-mode" data-highlighter="shiki" data-ext="sh" data-title="sh" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> push</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">远程主机</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> --delete</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">本地分支</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">名</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',42),l=[h];function n(k,r){return a(),s("div",null,l)}const g=i(t,[["render",n],["__file","git-remote-manage.html.vue"]]),c=JSON.parse('{"path":"/backend-tech/general/git/git-remote-manage.html","title":"Git 远程管理","lang":"zh-CN","frontmatter":{"order":6,"description":"Git 远程管理 远程仓库操作 对于远程仓库的操作，Git 提供了 git remote 命令，用于用于管理 Git 仓库中的远程仓库。 以下是 git remote 命令的常见用法： 列出当前仓库中已配置的远程仓库 列出当前仓库中已配置的远程仓库，并显示它们的 URL 添加一个新的远程仓库。指定一个远程仓库的名称和 URL，将其添加到当前仓库中 将已...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/backend-tech/general/git/git-remote-manage.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"Git 远程管理"}],["meta",{"property":"og:description","content":"Git 远程管理 远程仓库操作 对于远程仓库的操作，Git 提供了 git remote 命令，用于用于管理 Git 仓库中的远程仓库。 以下是 git remote 命令的常见用法： 列出当前仓库中已配置的远程仓库 列出当前仓库中已配置的远程仓库，并显示它们的 URL 添加一个新的远程仓库。指定一个远程仓库的名称和 URL，将其添加到当前仓库中 将已..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-08T09:15:26.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-08T09:15:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Git 远程管理\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-08T09:15:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"远程仓库操作","slug":"远程仓库操作","link":"#远程仓库操作","children":[]},{"level":2,"title":"从远程获取代码库","slug":"从远程获取代码库","link":"#从远程获取代码库","children":[]},{"level":2,"title":"下载远程代码并合并","slug":"下载远程代码并合并","link":"#下载远程代码并合并","children":[]},{"level":2,"title":"上传远程代码并合并","slug":"上传远程代码并合并","link":"#上传远程代码并合并","children":[]}],"git":{"createdTime":1720430126000,"updatedTime":1720430126000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.3,"words":690},"filePathRelative":"backend-tech/general/git/git-remote-manage.md","localizedDate":"2024年7月8日","autoDesc":true,"excerpt":"\\n<h2>远程仓库操作</h2>\\n<p>对于远程仓库的操作，Git 提供了 <code>git remote</code> 命令，用于用于管理 Git 仓库中的远程仓库。</p>\\n<p>以下是 git remote 命令的常见用法：</p>\\n<ul>\\n<li>列出当前仓库中已配置的远程仓库</li>\\n</ul>\\n<div class=\\"language-sh line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sh\\" data-title=\\"sh\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">git</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> remote</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>"}');export{g as comp,c as data};
