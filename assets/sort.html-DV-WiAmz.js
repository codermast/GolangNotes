import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,d as n}from"./app-diK73BeL.js";const h={},l=n(`<h1 id="order" tabindex="-1"><a class="header-anchor" href="#order"><span>order</span></a></h1><p>在 Go 语言中，<code>sort</code> 包提供了对切片和用户定义的集合进行排序的函数。它实现了常见的排序算法，如快速排序（Quicksort）和堆排序（Heapsort），并且为自定义集合提供了接口，使得用户可以根据特定的需求进行排序。</p><p>以下是 <code>sort</code> 包中常用的函数和接口：</p><h2 id="_1-排序函数" tabindex="-1"><a class="header-anchor" href="#_1-排序函数"><span>1. 排序函数</span></a></h2><ul><li><p><strong><code>sort.Ints</code></strong>: 对整数类型的切片进行升序排序。</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sort</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    ints</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Ints</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ints</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">ints</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 输出: [1 1 2 3 3 4 5 5 5 6 9]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong><code>sort.Float64s</code></strong>: 对浮点数类型的切片进行升序排序。</p></li><li><p><strong><code>sort.Strings</code></strong>: 对字符串类型的切片进行升序排序。</p></li></ul><h2 id="_2-自定义排序" tabindex="-1"><a class="header-anchor" href="#_2-自定义排序"><span>2. 自定义排序</span></a></h2><p>通过实现 <code>sort.Interface</code> 接口，可以对用户定义的集合进行排序。该接口包括 <code>Len()</code>、<code>Less(i, j int)</code> 和 <code>Swap(i, j int)</code> 方法，用于描述集合的长度、比较元素大小的规则以及交换元素的位置。</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ByAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Person</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">           { </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Less</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Age</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Swap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)      { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    people</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ByAge</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">people</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Sorted by age:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> people</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Age</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-排序稳定性" tabindex="-1"><a class="header-anchor" href="#_3-排序稳定性"><span>3. 排序稳定性</span></a></h2><p>Go 语言的排序函数是稳定的，即相等元素的相对顺序在排序后保持不变。</p><h2 id="_4-其他排序函数" tabindex="-1"><a class="header-anchor" href="#_4-其他排序函数"><span>4. 其他排序函数</span></a></h2><ul><li><strong><code>sort.Sort</code></strong>: 对实现了 <code>sort.Interface</code> 接口的集合进行排序。</li><li><strong><code>sort.Search</code></strong>: 在已排序的集合中搜索元素。</li></ul><p><strong>示例</strong></p><p>以下是一个结合了自定义排序和使用 <code>sort.Sort</code> 的例子：</p><div class="language-go line-numbers-mode" data-highlighter="shiki" data-ext="go" data-title="go" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">package</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> main</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">fmt</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">    &quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#98C379;">sort</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> Person</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> struct</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> string</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    Age</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">  int</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> ByName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Person</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">           { </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Less</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">bool</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> { </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">].</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">a </span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">ByName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Swap</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">j</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)      { </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">j</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">a</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">[</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">func</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">() {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    people</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Alice&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Bob&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        {</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Charlie&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Sort</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">ByName</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">people</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">    fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Println</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;Sorted by name:&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> _</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#D73A49;--shiki-dark:#E5C07B;"> :=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> people</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">        fmt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">Printf</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">%d</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Name</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">p</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">Age</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个示例中，我们定义了 <code>Person</code> 结构体和 <code>ByName</code> 类型来实现按照姓名排序的需求。通过 <code>sort.Sort(ByName(people))</code> 对 <code>people</code> 切片按照姓名进行排序，然后打印出排序后的结果。</p><p>通过 <code>sort</code> 包，Go 语言提供了强大且简洁的排序功能，可以方便地对各种类型的数据进行排序操作。</p>`,17),k=[l];function t(p,e){return a(),i("div",null,k)}const B=s(h,[["render",t],["__file","sort.html.vue"]]),g=JSON.parse('{"path":"/golang/community/standard-library/sort.html","title":"order","lang":"zh-CN","frontmatter":{"order":5,"description":"order 在 Go 语言中，sort 包提供了对切片和用户定义的集合进行排序的函数。它实现了常见的排序算法，如快速排序（Quicksort）和堆排序（Heapsort），并且为自定义集合提供了接口，使得用户可以根据特定的需求进行排序。 以下是 sort 包中常用的函数和接口： 1. 排序函数 sort.Ints: 对整数类型的切片进行升序排序。 so...","head":[["meta",{"property":"og:url","content":"https://www.golangnotes.com/golang/community/standard-library/sort.html"}],["meta",{"property":"og:site_name","content":"Golang全栈开发指南"}],["meta",{"property":"og:title","content":"order"}],["meta",{"property":"og:description","content":"order 在 Go 语言中，sort 包提供了对切片和用户定义的集合进行排序的函数。它实现了常见的排序算法，如快速排序（Quicksort）和堆排序（Heapsort），并且为自定义集合提供了接口，使得用户可以根据特定的需求进行排序。 以下是 sort 包中常用的函数和接口： 1. 排序函数 sort.Ints: 对整数类型的切片进行升序排序。 so..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-04T07:09:04.000Z"}],["meta",{"property":"article:author","content":"友人"}],["meta",{"property":"article:modified_time","content":"2024-07-04T07:09:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"order\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-04T07:09:04.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"友人\\",\\"url\\":\\"https://www.codermast.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 排序函数","slug":"_1-排序函数","link":"#_1-排序函数","children":[]},{"level":2,"title":"2. 自定义排序","slug":"_2-自定义排序","link":"#_2-自定义排序","children":[]},{"level":2,"title":"3. 排序稳定性","slug":"_3-排序稳定性","link":"#_3-排序稳定性","children":[]},{"level":2,"title":"4. 其他排序函数","slug":"_4-其他排序函数","link":"#_4-其他排序函数","children":[]}],"git":{"createdTime":1720076944000,"updatedTime":1720076944000,"contributors":[{"name":"codermast","email":"codermast@qq.com","commits":1}]},"readingTime":{"minutes":2.02,"words":606},"filePathRelative":"golang/community/standard-library/sort.md","localizedDate":"2024年7月4日","autoDesc":true,"excerpt":"\\n<p>在 Go 语言中，<code>sort</code> 包提供了对切片和用户定义的集合进行排序的函数。它实现了常见的排序算法，如快速排序（Quicksort）和堆排序（Heapsort），并且为自定义集合提供了接口，使得用户可以根据特定的需求进行排序。</p>\\n<p>以下是 <code>sort</code> 包中常用的函数和接口：</p>\\n<h2>1. 排序函数</h2>\\n<ul>\\n<li>\\n<p><strong><code>sort.Ints</code></strong>: 对整数类型的切片进行升序排序。</p>\\n<div class=\\"language-go line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"go\\" data-title=\\"go\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> \\"</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#98C379\\">sort</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">func</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> main</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">() {</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">    ints</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#E5C07B\\"> :=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> []</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">int</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">{</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">3</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">4</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">1</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">5</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">9</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">6</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">5</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">3</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">5</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">    sort</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Ints</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">ints</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">    fmt</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">Println</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#E06C75\\">ints</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">) </span><span style=\\"--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">// 输出: [1 1 2 3 3 4 5 5 5 6 9]</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">}</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div></li>\\n<li>\\n<p><strong><code>sort.Float64s</code></strong>: 对浮点数类型的切片进行升序排序。</p>\\n</li>\\n<li>\\n<p><strong><code>sort.Strings</code></strong>: 对字符串类型的切片进行升序排序。</p>\\n</li>\\n</ul>"}');export{B as comp,g as data};
