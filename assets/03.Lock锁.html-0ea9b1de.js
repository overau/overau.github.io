import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const p="/img/juc/image-20210311115754304.png",t="/img/juc/image-20210311120305880.png",c={},o=e('<blockquote><p>Lock接口</p></blockquote><figure><img src="'+p+`" alt="image-20210311115754304" tabindex="0" loading="lazy"><figcaption>image-20210311115754304</figcaption></figure><blockquote><p>Lock接口的实现类</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">All</span> <span class="token class-name">Known</span> <span class="token class-name">Implementing</span> <span class="token class-name">Classes</span><span class="token operator">:</span>
<span class="token comment">// 可重入锁（常用）</span>
<span class="token class-name">ReentrantLock</span><span class="token punctuation">,</span> 
<span class="token comment">// 读锁</span>
<span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>ReadLock</span><span class="token punctuation">,</span> 
<span class="token comment">// 写锁</span>
<span class="token class-name">ReentrantReadWriteLock<span class="token punctuation">.</span>WriteLock</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ReentrantLock</code></p><figure><img src="`+t+`" alt="image-20210311120305880" tabindex="0" loading="lazy"><figcaption>image-20210311120305880</figcaption></figure><blockquote><p>公平锁：十分公平，可以先来后到。</p><p>非公平锁：十分不公平，可以<strong>插队</strong>。（默认）</p></blockquote><p>1、new ReentrantLock()</p><p>2、加锁</p><p>3、解锁</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SafeTicketDemo2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 把资源类丢入线程</span>
        <span class="token class-name">Ticket2</span> ticket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Ticket2</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ticket<span class="token punctuation">.</span><span class="token function">sale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ticket<span class="token punctuation">.</span><span class="token function">sale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ticket<span class="token punctuation">.</span><span class="token function">sale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 资源类 OOP编程
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Ticket2</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">30</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/** 1、new ReentrantLock() **/</span>
    <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * synchronized本质：队列 + 锁
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">sale</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 2、加锁</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;卖出了第&quot;</span><span class="token operator">+</span>num<span class="token operator">--</span><span class="token operator">+</span><span class="token string">&quot;张票，剩余：&quot;</span><span class="token operator">+</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            <span class="token comment">// 3、解锁</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span>卖出了第<span class="token number">30</span>张票，剩余：<span class="token number">29</span>
<span class="token class-name">A</span>卖出了第<span class="token number">29</span>张票，剩余：<span class="token number">28</span>
<span class="token class-name">A</span>卖出了第<span class="token number">28</span>张票，剩余：<span class="token number">27</span>
<span class="token class-name">A</span>卖出了第<span class="token number">27</span>张票，剩余：<span class="token number">26</span>
<span class="token class-name">A</span>卖出了第<span class="token number">26</span>张票，剩余：<span class="token number">25</span>
<span class="token class-name">A</span>卖出了第<span class="token number">25</span>张票，剩余：<span class="token number">24</span>
<span class="token class-name">A</span>卖出了第<span class="token number">24</span>张票，剩余：<span class="token number">23</span>
<span class="token class-name">A</span>卖出了第<span class="token number">23</span>张票，剩余：<span class="token number">22</span>
<span class="token class-name">C</span>卖出了第<span class="token number">22</span>张票，剩余：<span class="token number">21</span>
<span class="token class-name">C</span>卖出了第<span class="token number">21</span>张票，剩余：<span class="token number">20</span>
<span class="token class-name">C</span>卖出了第<span class="token number">20</span>张票，剩余：<span class="token number">19</span>
<span class="token class-name">C</span>卖出了第<span class="token number">19</span>张票，剩余：<span class="token number">18</span>
<span class="token class-name">C</span>卖出了第<span class="token number">18</span>张票，剩余：<span class="token number">17</span>
<span class="token class-name">C</span>卖出了第<span class="token number">17</span>张票，剩余：<span class="token number">16</span>
<span class="token class-name">C</span>卖出了第<span class="token number">16</span>张票，剩余：<span class="token number">15</span>
<span class="token class-name">C</span>卖出了第<span class="token number">15</span>张票，剩余：<span class="token number">14</span>
<span class="token class-name">C</span>卖出了第<span class="token number">14</span>张票，剩余：<span class="token number">13</span>
<span class="token class-name">C</span>卖出了第<span class="token number">13</span>张票，剩余：<span class="token number">12</span>
<span class="token class-name">C</span>卖出了第<span class="token number">12</span>张票，剩余：<span class="token number">11</span>
<span class="token class-name">C</span>卖出了第<span class="token number">11</span>张票，剩余：<span class="token number">10</span>
<span class="token class-name">C</span>卖出了第<span class="token number">10</span>张票，剩余：<span class="token number">9</span>
<span class="token class-name">C</span>卖出了第<span class="token number">9</span>张票，剩余：<span class="token number">8</span>
<span class="token class-name">C</span>卖出了第<span class="token number">8</span>张票，剩余：<span class="token number">7</span>
<span class="token class-name">C</span>卖出了第<span class="token number">7</span>张票，剩余：<span class="token number">6</span>
<span class="token class-name">C</span>卖出了第<span class="token number">6</span>张票，剩余：<span class="token number">5</span>
<span class="token class-name">C</span>卖出了第<span class="token number">5</span>张票，剩余：<span class="token number">4</span>
<span class="token class-name">C</span>卖出了第<span class="token number">4</span>张票，剩余：<span class="token number">3</span>
<span class="token class-name">C</span>卖出了第<span class="token number">3</span>张票，剩余：<span class="token number">2</span>
<span class="token class-name">C</span>卖出了第<span class="token number">2</span>张票，剩余：<span class="token number">1</span>
<span class="token class-name">C</span>卖出了第<span class="token number">1</span>张票，剩余：<span class="token number">0</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),l=[o];function i(u,k){return s(),a("div",null,l)}const m=n(c,[["render",i],["__file","03.Lock锁.html.vue"]]);export{m as default};
