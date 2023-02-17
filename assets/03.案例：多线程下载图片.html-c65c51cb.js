import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p={},e=t(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThread2</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> url<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">TestThread2</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>url <span class="token operator">=</span> url<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 下载图片线程的执行体
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">WebDownloader</span> webDownloader <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        webDownloader<span class="token punctuation">.</span><span class="token function">downloader</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;下载了文件名为：&quot;</span> <span class="token operator">+</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">TestThread2</span> thread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread2</span><span class="token punctuation">(</span><span class="token string">&quot;https://img-blog.csdnimg.cn/20210305120636825.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;1.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TestThread2</span> thread2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread2</span><span class="token punctuation">(</span><span class="token string">&quot;https://img-blog.csdnimg.cn/20210305121018539.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;2.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">TestThread2</span> thread3<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread2</span><span class="token punctuation">(</span><span class="token string">&quot;https://img-blog.csdnimg.cn/20210305121930543.png&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;3.png&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        thread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread2<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        thread3<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 下载器
 */</span>
<span class="token keyword">class</span> <span class="token class-name">WebDownloader</span><span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">downloader</span><span class="token punctuation">(</span><span class="token class-name">String</span> url<span class="token punctuation">,</span> <span class="token class-name">String</span> name<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token class-name">FileUtils</span><span class="token punctuation">.</span><span class="token function">copyURLToFile</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">URL</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">File</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">IOException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Io异常,downloader方法出现问题.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>下载了文件名为：<span class="token number">2.</span>png
下载了文件名为：<span class="token number">3.</span>png
下载了文件名为：<span class="token number">1.</span>png

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","03.案例：多线程下载图片.html.vue"]]);export{k as default};
