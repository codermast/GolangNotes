import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,b as l}from"./app-DzskJ1Xx.js";const n={},e=l(`<h1 id="_4-运算符" tabindex="-1"><a class="header-anchor" href="#_4-运算符"><span>4. 运算符</span></a></h1><h2 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符"><span>算术运算符</span></a></h2><ul><li><code>+</code> 加法</li><li><code>-</code> 减法</li><li><code>*</code> 乘法</li><li><code>/</code> 除法</li><li><code>%</code> 取模（求余）</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">sum</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">      // 13</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">diff</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     // 7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">product</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 30</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">quotient</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> /</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">remainder</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符"><span>关系运算符</span></a></h2><ul><li><code>==</code> 等于</li><li><code>!=</code> 不等于</li><li><code>&lt;</code> 小于</li><li><code>&gt;</code> 大于</li><li><code>&lt;=</code> 小于等于</li><li><code>&gt;=</code> 大于等于</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isEqual</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ==</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)          </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isNotEqual</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)       </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isLess</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)            </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isGreaterOrEqual</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// true</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算符" tabindex="-1"><a class="header-anchor" href="#逻辑运算符"><span>逻辑运算符</span></a></h2><ul><li><code>&amp;&amp;</code> 与</li><li><code>||</code> 或</li><li><code>!</code> 非</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isTrue</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isFalse</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">andResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isTrue</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &amp;&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isFalse</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">orResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isTrue</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> isFalse</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     // true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">notResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> !</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">isTrue</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">             // false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="位运算符" tabindex="-1"><a class="header-anchor" href="#位运算符"><span>位运算符</span></a></h2><ul><li><code>&amp;</code> 按位与</li><li><code>|</code> 按位或</li><li><code>^</code> 按位异或</li><li><code>&lt;&lt;</code> 左移</li><li><code>&gt;&gt;</code> 右移</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 二进制: 101</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 二进制: 011</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">andResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 1 (二进制: 001)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">orResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> |</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">     // 7 (二进制: 111)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">xorResult</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> ^</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 6 (二进制: 110)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">leftShift</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">   // 10 (二进制: 1010)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">rightShift</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &gt;&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 2 (二进制: 10)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符"><span>赋值运算符</span></a></h2><ul><li><code>=</code> 简单赋值</li><li><code>+=</code> 加法赋值</li><li><code>-=</code> 减法赋值</li><li><code>*=</code> 乘法赋值</li><li><code>/=</code> 除法赋值</li><li><code>%=</code> 求余赋值</li><li><code>&lt;&lt;=</code> 左移赋值</li><li><code>&gt;&gt;=</code> 右移赋值</li><li><code>&amp;=</code> 按位与赋值</li><li><code>|=</code> 按位或赋值</li><li><code>^=</code> 按位异或赋值</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">b</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> +=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // 等同于 a = a + b</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="其他运算符" tabindex="-1"><a class="header-anchor" href="#其他运算符"><span>其他运算符</span></a></h2><ul><li><code>&amp;</code> 取址运算符</li><li><code>*</code> 指针运算符</li><li><code>.</code> 结构体成员访问</li><li><code>[]</code> 数组、切片索引</li></ul><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> ptr</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ptr</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> &amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">    // ptr 指向变量 i 的地址</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> j</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> *</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ptr</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> // 取出指针并获取值</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    age</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> person</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;CoderMast&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    age</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">18</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> name</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> person</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">name</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> personArr</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="运算符的优先级" tabindex="-1"><a class="header-anchor" href="#运算符的优先级"><span>运算符的优先级</span></a></h2><p>和数学中类似，Go语言中，运算符有不同的优先级，这影响了表达式中运算符执行的顺序。以下是Go语言中常见运算符的优先级，从高到低排列：</p><ol><li><p><strong>一元运算符</strong>：</p><ul><li><code>+</code>（正号）</li><li><code>-</code>（负号）</li><li><code>!</code>（逻辑非）</li><li><code>^</code>（按位取反）</li></ul></li><li><p><strong>乘性运算符</strong>：</p><ul><li><code>*</code>（乘法）</li><li><code>/</code>（除法）</li><li><code>%</code>（取模）</li></ul></li><li><p><strong>加性运算符</strong>：</p><ul><li><code>+</code>（加法）</li><li><code>-</code>（减法）</li></ul></li><li><p><strong>位移运算符</strong>：</p><ul><li><code>&lt;&lt;</code>（左移）</li><li><code>&gt;&gt;</code>（右移）</li></ul></li><li><p><strong>位运算符</strong>：</p><ul><li><code>&amp;</code>（按位与）</li><li><code>|</code>（按位或）</li><li><code>^</code>（按位异或）</li></ul></li><li><p><strong>比较运算符</strong>：</p><ul><li><code>==</code>（等于）</li><li><code>!=</code>（不等于）</li><li><code>&lt;</code>（小于）</li><li><code>&lt;=</code>（小于等于）</li><li><code>&gt;</code>（大于）</li><li><code>&gt;=</code>（大于等于）</li></ul></li><li><p><strong>逻辑运算符</strong>：</p><ul><li><code>&amp;&amp;</code>（逻辑与）</li></ul></li><li><p><strong>逻辑运算符</strong>：</p><ul><li><code>||</code>（逻辑或）</li></ul></li><li><p><strong>赋值运算符</strong>：</p><ul><li><code>=</code>（简单赋值）</li><li><code>+=</code>、<code>-=</code>、<code>*=</code>、<code>/=</code>、<code>%=</code>、<code>&lt;&lt;=</code>、<code>&gt;&gt;=</code>、<code>&amp;=</code>、<code>|=</code>、<code>^=</code>（复合赋值运算符）</li></ul></li></ol><p>运算符的优先级决定了表达式中各部分的计算顺序。例如，乘法运算符<code>*</code>的优先级高于加法运算符<code>+</code>，因此在表达式 <code>a + b * c</code> 中，先计算 <code>b * c</code>，然后再加上 <code>a</code>。</p><p>除了优先级外，还有一些运算符是右结合的，例如赋值运算符<code>=</code>，意味着它从右向左结合。例如，<code>a = b = 5</code> 在Go语言中是合法的，先将 <code>5</code> 赋给 <code>b</code>，然后将 <code>b</code> 的值再赋给 <code>a</code>。</p><p>这些规则有助于编写清晰且按预期执行的表达式。</p><div class="hint-container tip"><p class="hint-container-title">可使用括号来提升表达式中指定运算符的优先级，从而实现需求。</p></div>`,26),t=[e];function h(k,d){return a(),s("div",null,t)}const c=i(n,[["render",h],["__file","operator-symbol.html.vue"]]),o=JSON.parse('{"path":"/golang/core/basic/operator-symbol.html","title":"4. 运算符","lang":"zh-CN","frontmatter":{"order":4,"description":"4. 运算符 算术运算符 + 加法 - 减法 * 乘法 / 除法 % 取模（求余） 关系运算符 == 等于 != 不等于 < 小于 > 大于 <= 小于等于 >= 大于等于 逻辑运算符 && 与 || 或 ! 非 位运算符 & 按位与 | 按位或 ^ 按位异或 << 左移 >> 右移 赋值运算符 = 简单赋值 += 加法赋值 -= 减法赋值 *= 乘法...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/golang/core/basic/operator-symbol.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"4. 运算符"}],["meta",{"property":"og:description","content":"4. 运算符 算术运算符 + 加法 - 减法 * 乘法 / 除法 % 取模（求余） 关系运算符 == 等于 != 不等于 < 小于 > 大于 <= 小于等于 >= 大于等于 逻辑运算符 && 与 || 或 ! 非 位运算符 & 按位与 | 按位或 ^ 按位异或 << 左移 >> 右移 赋值运算符 = 简单赋值 += 加法赋值 -= 减法赋值 *= 乘法..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-02T03:58:06.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-02T03:58:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"4. 运算符\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-02T03:58:06.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"算术运算符","slug":"算术运算符","link":"#算术运算符","children":[]},{"level":2,"title":"关系运算符","slug":"关系运算符","link":"#关系运算符","children":[]},{"level":2,"title":"逻辑运算符","slug":"逻辑运算符","link":"#逻辑运算符","children":[]},{"level":2,"title":"位运算符","slug":"位运算符","link":"#位运算符","children":[]},{"level":2,"title":"赋值运算符","slug":"赋值运算符","link":"#赋值运算符","children":[]},{"level":2,"title":"其他运算符","slug":"其他运算符","link":"#其他运算符","children":[]},{"level":2,"title":"运算符的优先级","slug":"运算符的优先级","link":"#运算符的优先级","children":[]}],"git":{"createdTime":1719892686000,"updatedTime":1719892686000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.41,"words":722},"filePathRelative":"golang/core/basic/operator-symbol.md","localizedDate":"2024年7月2日","autoDesc":true,"excerpt":"\\n<h2>算术运算符</h2>\\n<ul>\\n<li><code>+</code> 加法</li>\\n<li><code>-</code> 减法</li>\\n<li><code>*</code> 乘法</li>\\n<li><code>/</code> 除法</li>\\n<li><code>%</code> 取模（求余）</li>\\n</ul>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 10</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">b</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\"> 3</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">sum</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> +</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> b</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">      // 13</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">diff</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> -</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> b</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">     // 7</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">product</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> *</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> b</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">  // 30</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">quotient</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> /</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> b</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"> // 3</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">remainder</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> a</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> %</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\"> b</span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\"> // 1</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{c as comp,o as data};
