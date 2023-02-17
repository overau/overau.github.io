import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const p="/img/mult-thread/image-20210309201736534.png",t={},o=e(`<ol><li>实现<strong>Runnable接口</strong>。</li><li><strong>重写run()方法</strong>。</li><li>创建线程对象，执行线程需要<strong>丢入Runnable接口实现类</strong>。<strong>调用start()方法</strong>启动线程。</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThread3</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我在看代码===&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// main线程,主线程</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 创建Runnable接口实现类对象</span>
        <span class="token class-name">TestThread3</span> testThread3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread3</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 创建线程对象,通过线程对象来开启我们的线程,代理</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>testThread3<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我在学习多线程==&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">2</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">3</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">4</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">5</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">6</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">7</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">8</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">9</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">10</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">0</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">1</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">2</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">3</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">4</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">5</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">6</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">7</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">8</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">9</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">10</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">11</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">12</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">13</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">14</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">15</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">11</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">12</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">13</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">14</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">15</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">16</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">17</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">16</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">17</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">18</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">19</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">18</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">19</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Thread类</p></blockquote><figure><img src="`+p+`" alt="image-20210309201736534" tabindex="0" loading="lazy"><figcaption>image-20210309201736534</figcaption></figure><blockquote><p>Runnable接口</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * When an object implementing interface <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java"><span class="token class-name">Runnable</span></span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> is used
     * to create a thread, starting the thread causes the object&#39;s
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">run</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> method to be called in that separately executing
     * thread.
     * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
     * The general contract of the method <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>code</span><span class="token punctuation">&gt;</span></span><span class="token code-section"><span class="token line"><span class="token code language-java">run</span></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>code</span><span class="token punctuation">&gt;</span></span> is that it may
     * take any action whatsoever.
     *
     * <span class="token keyword">@see</span>     <span class="token reference"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span><span class="token class-name">Thread</span><span class="token punctuation">#</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),l=[o];function c(r,i){return s(),a("div",null,l)}const k=n(t,[["render",c],["__file","04.线程的创建 - 实现Runnable接口.html.vue"]]);export{k as default};
