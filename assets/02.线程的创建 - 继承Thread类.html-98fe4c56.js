import{_ as s,V as n,W as a,X as e}from"./framework-a569e214.js";const p="/img/mult-thread/image-20210309192456764.png",o={},t=e('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>3种方式：<strong>Thread</strong>类、<strong>Runnable接口</strong>、<strong>Callable</strong>接口</p></blockquote><h2 id="thread类" tabindex="-1"><a class="header-anchor" href="#thread类" aria-hidden="true">#</a> Thread类</h2><p>官方文档：</p><figure><img src="'+p+`" alt="image-20210309192456764" tabindex="0" loading="lazy"><figcaption>image-20210309192456764</figcaption></figure><ol><li><strong>继承Thread类</strong></li><li>重写**run()**方法</li><li>创建线程对象，调用<strong>start()方法</strong>启动线程</li></ol><h2 id="继承thread创建线程" tabindex="-1"><a class="header-anchor" href="#继承thread创建线程" aria-hidden="true">#</a> 继承Thread创建线程</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThread1</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我在看代码===&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// main线程,主线程</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">// 创建线程对象</span>
        <span class="token class-name">TestThread1</span> testThread1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 调用start()方法开启线程</span>
        testThread1<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;我在学习多线程==&gt;&quot;</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">2</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">3</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">4</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">5</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">0</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">1</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">6</span>
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
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">7</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">8</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">15</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">9</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">10</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">11</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">12</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">16</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">17</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">18</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">13</span>
我在看代码<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span><span class="token number">19</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">14</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">15</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">16</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">17</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">18</span>
我在学习多线程<span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">19</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>线程不一定立即执行，CPU调度安排。</strong></p></blockquote>`,10),r=[t];function l(c,i){return n(),a("div",null,r)}const u=s(o,[["render",l],["__file","02.线程的创建 - 继承Thread类.html.vue"]]);export{u as default};
