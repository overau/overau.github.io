import{_ as e,V as t,W as o,Y as n,Z as s,$ as p,X as c,F as i}from"./framework-a569e214.js";const l="/img/juc/image-20210311085423044.png",u={},d={class:"hint-container tip"},r=n("p",{class:"hint-container-title"},"提示",-1),k={href:"https://www.bilibili.com/video/BV1B7411L7tE",target:"_blank",rel:"noopener noreferrer"},v=c('<figure><img src="'+l+`" alt="image-20210311085423044" tabindex="0" loading="lazy"><figcaption>image-20210311085423044</figcaption></figure><h2 id="java默认线程" tabindex="-1"><a class="header-anchor" href="#java默认线程" aria-hidden="true">#</a> Java默认线程</h2><p>Java默认有2个线程：<strong>main</strong>线程和<strong>gc</strong>线程。</p><p><code>Java真的可以开启线程吗？</code>不能。</p><blockquote><p>Thread的start()方法</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * This method is not invoked for the main method thread or &quot;system&quot;
     * group threads created/set up by the VM. Any new functionality added
     * to this method in the future may have to also be added to the VM.
     *
     * A zero status value corresponds to state &quot;NEW&quot;.
     */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>threadStatus <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalThreadStateException</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* Notify the group that this thread is about to be started
     * so that it can be added to the group&#39;s list of threads
     * and the group&#39;s unstarted count can be decremented. */</span>
    group<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> started <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">start0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        started <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>started<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                group<span class="token punctuation">.</span><span class="token function">threadStartFailed</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Throwable</span> ignore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">/* do nothing. If start0 threw a Throwable then
              it will be passed up the call stack */</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 调用本地方法,底层的C++。java无法直接操作硬件。</span>
<span class="token keyword">private</span> <span class="token keyword">native</span> <span class="token keyword">void</span> <span class="token function">start0</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="并发和并行" tabindex="-1"><a class="header-anchor" href="#并发和并行" aria-hidden="true">#</a> 并发和并行</h2><p>并发：多线程交替执行操作同一个资源。</p><p>并行：多个线程同时执行。</p><p>查看CPU核数：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Test1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/**
         * 获取CPU核数
         * CPU密集型，IO密集型
         */</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Runtime</span><span class="token punctuation">.</span><span class="token function">getRuntime</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">availableProcessors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4核8线程：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">8</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>并发编程的本质：<strong>充分利用CPU的资源</strong>。</p></blockquote><h2 id="线程状态" tabindex="-1"><a class="header-anchor" href="#线程状态" aria-hidden="true">#</a> 线程状态</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">State</span> <span class="token punctuation">{</span>
    <span class="token comment">// 新生</span>
    <span class="token constant">NEW</span><span class="token punctuation">,</span>
    <span class="token comment">// 运行</span>
    <span class="token constant">RUNNABLE</span><span class="token punctuation">,</span>
    <span class="token comment">// 阻塞</span>
    <span class="token constant">BLOCKED</span><span class="token punctuation">,</span>
    <span class="token comment">// 等待</span>
    <span class="token constant">WAITING</span><span class="token punctuation">,</span>
    <span class="token comment">// 超时等待</span>
    <span class="token constant">TIMED_WAITING</span><span class="token punctuation">,</span>
    <span class="token comment">// 终止</span>
    <span class="token constant">TERMINATED</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="wait和sleep区别" tabindex="-1"><a class="header-anchor" href="#wait和sleep区别" aria-hidden="true">#</a> wait和sleep区别</h2><blockquote><p>1、来自不同的类</p></blockquote><p>wait来自<strong>Object类</strong>。sleep来自<strong>Thread类</strong>。</p><blockquote><p>2、锁的释放</p></blockquote><p>wait会释放锁，sleep不会释放，抱着锁睡觉。</p><blockquote><p>3、使用的范围是不同的</p></blockquote><p>wait必须在<strong>同步方法或者同步代码块</strong>中。sleep可以在<strong>任何地方</strong>睡。</p><blockquote><p>4、是否需要捕获异常</p></blockquote><p><strong>都需要</strong>。wait需要捕获异常（中断异常）。sleep需要捕获异常（中断异常）。</p>`,25);function m(b,h){const a=i("ExternalLinkIcon");return t(),o("div",null,[n("div",d,[r,n("p",null,[s("狂神说Java："),n("a",k,[s("https://www.bilibili.com/video/BV1B7411L7tE"),p(a)])])]),v])}const w=e(u,[["render",m],["__file","01.多线程回顾.html.vue"]]);export{w as default};
