import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-Dl-g_79j.js";const l={},e=n(`<h1 id="_3-select-语句" tabindex="-1"><a class="header-anchor" href="#_3-select-语句"><span>3. Select 语句</span></a></h1><p>在 Go 语言中，<code>select</code> 语句是一种控制结构，允许一个 Goroutine 同时等待多个通道操作。<code>select</code> 语句会阻塞，直到其中的一个 <code>case</code> 可以继续执行，然后执行该 <code>case</code> 中的语句。<code>select</code> 语句是处理并发任务时非常有用的工具，特别是需要处理多个通道的通信时。</p><h2 id="select-语句的基本用法" tabindex="-1"><a class="header-anchor" href="#select-语句的基本用法"><span><code>select</code> 语句的基本用法</span></a></h2><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> val1</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ch1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 当从 ch1 接收到数据时执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ch2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> val2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 当向 ch2 发送数据时执行</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">case</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Second</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 如果一秒内没有任何通道操作成功，则执行此 case</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 如果没有任何通道操作成功，立即执行此 case</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例代码" tabindex="-1"><a class="header-anchor" href="#示例代码"><span>示例代码</span></a></h2><p>下面是一些使用 <code>select</code> 语句的示例，以展示其灵活性和强大之处。</p><h3 id="示例-1-从多个通道接收数据" tabindex="-1"><a class="header-anchor" href="#示例-1-从多个通道接收数据"><span>示例 1：从多个通道接收数据</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ch1</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ch2</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Second</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        ch1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Second</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        ch2</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> msg1</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ch1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> msg2</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ch2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">            fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个示例中，两个 Goroutine 分别在不同的时间向 <code>ch1</code> 和 <code>ch2</code> 发送数据，<code>select</code> 语句能够处理哪个通道先接收到数据。</p><h3 id="示例-2-实现超时机制" tabindex="-1"><a class="header-anchor" href="#示例-2-实现超时机制"><span>示例 2：实现超时机制</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">time</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ch</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    go</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sleep</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Second</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        ch</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 42</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Received:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">After</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> time</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Second</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Timeout&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>select</code> 语句中包含了一个超时机制，如果一秒内没有接收到数据，则会执行超时的 <code>case</code>。</p><h3 id="示例-3-非阻塞的通道操作" tabindex="-1"><a class="header-anchor" href="#示例-3-非阻塞的通道操作"><span>示例 3：非阻塞的通道操作</span></a></h3><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ch</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> make</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">chan</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    select</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    case</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> msg</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;-</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ch</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Received:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">msg</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    default</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;No data received&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，<code>select</code> 语句的 <code>default</code> 分支使得通道操作变得非阻塞，如果没有数据接收，则会立即执行 <code>default</code> 分支。</p><h2 id="select-语句的注意事项" tabindex="-1"><a class="header-anchor" href="#select-语句的注意事项"><span><code>select</code> 语句的注意事项</span></a></h2><ol><li><strong>随机选择</strong>：如果有多个 <code>case</code> 都可以执行，<code>select</code> 会随机选择一个执行。</li><li><strong>避免阻塞</strong>：使用 <code>default</code> 分支可以避免 <code>select</code> 语句阻塞。</li><li><strong>通道关闭</strong>：如果一个通道关闭且仍有数据在缓冲区中，<code>select</code> 语句可以正常接收到数据，但之后会立即返回零值。</li></ol><h2 id="高级用法" tabindex="-1"><a class="header-anchor" href="#高级用法"><span>高级用法</span></a></h2><p>你可以通过将多个通道操作组合在一起，使用 <code>select</code> 语句构建复杂的并发逻辑。例如，可以实现优先级通道、动态增加或减少通道的数量等。</p><p>通过灵活运用 <code>select</code> 语句，Go 程序员能够高效地处理并发任务，使得代码更加简洁和易于维护。</p>`,20),h=[e];function t(k,p){return a(),i("div",null,h)}const c=s(l,[["render",t],["__file","select.html.vue"]]),g=JSON.parse('{"path":"/golang/core/concurrent/select.html","title":"3. Select 语句","lang":"zh-CN","frontmatter":{"order":3,"description":"3. Select 语句 在 Go 语言中，select 语句是一种控制结构，允许一个 Goroutine 同时等待多个通道操作。select 语句会阻塞，直到其中的一个 case 可以继续执行，然后执行该 case 中的语句。select 语句是处理并发任务时非常有用的工具，特别是需要处理多个通道的通信时。 select 语句的基本用法 示例代码 下...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/golang/core/concurrent/select.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"3. Select 语句"}],["meta",{"property":"og:description","content":"3. Select 语句 在 Go 语言中，select 语句是一种控制结构，允许一个 Goroutine 同时等待多个通道操作。select 语句会阻塞，直到其中的一个 case 可以继续执行，然后执行该 case 中的语句。select 语句是处理并发任务时非常有用的工具，特别是需要处理多个通道的通信时。 select 语句的基本用法 示例代码 下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-04T06:29:15.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-04T06:29:15.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"3. Select 语句\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-04T06:29:15.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"select 语句的基本用法","slug":"select-语句的基本用法","link":"#select-语句的基本用法","children":[]},{"level":2,"title":"示例代码","slug":"示例代码","link":"#示例代码","children":[{"level":3,"title":"示例 1：从多个通道接收数据","slug":"示例-1-从多个通道接收数据","link":"#示例-1-从多个通道接收数据","children":[]},{"level":3,"title":"示例 2：实现超时机制","slug":"示例-2-实现超时机制","link":"#示例-2-实现超时机制","children":[]},{"level":3,"title":"示例 3：非阻塞的通道操作","slug":"示例-3-非阻塞的通道操作","link":"#示例-3-非阻塞的通道操作","children":[]}]},{"level":2,"title":"select 语句的注意事项","slug":"select-语句的注意事项","link":"#select-语句的注意事项","children":[]},{"level":2,"title":"高级用法","slug":"高级用法","link":"#高级用法","children":[]}],"git":{"createdTime":1720074555000,"updatedTime":1720074555000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.2,"words":661},"filePathRelative":"golang/core/concurrent/select.md","localizedDate":"2024年7月4日","autoDesc":true,"excerpt":"\\n<p>在 Go 语言中，<code>select</code> 语句是一种控制结构，允许一个 Goroutine 同时等待多个通道操作。<code>select</code> 语句会阻塞，直到其中的一个 <code>case</code> 可以继续执行，然后执行该 <code>case</code> 中的语句。<code>select</code> 语句是处理并发任务时非常有用的工具，特别是需要处理多个通道的通信时。</p>\\n<h2><code>select</code> 语句的基本用法</h2>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">select</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">case</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> val1</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> &lt;-</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">ch1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 当从 ch1 接收到数据时执行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">case</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> ch2</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> &lt;-</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> val2</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 当向 ch2 发送数据时执行</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">case</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> &lt;-</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">time</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">After</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">time</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">Second</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">):</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 如果一秒内没有任何通道操作成功，则执行此 case</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">default</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">    // 如果没有任何通道操作成功，立即执行此 case</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,g as data};