import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const p={},t=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * @Desc 多个线程同时操作同一个对象
 * 买火车票
 * @Author HeJin
 * @Date 2021/3/9 20:28
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestThread4</span> <span class="token keyword">implements</span> <span class="token class-name">Runnable</span><span class="token punctuation">{</span>

    <span class="token doc-comment comment">/** 票数 **/</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> ticketNums <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>ticketNums <span class="token operator">&lt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token comment">// 模拟延时</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>

            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;==&gt;拿到了第&quot;</span> <span class="token operator">+</span> ticketNums<span class="token operator">--</span> <span class="token operator">+</span> <span class="token string">&quot;张票&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token class-name">TestThread4</span> ticket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TestThread4</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ticket<span class="token punctuation">,</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ticket<span class="token punctuation">,</span> <span class="token string">&quot;老师&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span>ticket<span class="token punctuation">,</span> <span class="token string">&quot;黄牛党&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">8</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">9</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">10</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">7</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">5</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">6</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">4</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">3</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">3</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">2</span>张票		# 老师拿到第<span class="token number">2</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">1</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">2</span>张票		# 小明也拿到第<span class="token number">2</span>张票

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">10</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">9</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">8</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">6</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">5</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">7</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">4</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">2</span>张票
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">3</span>张票
黄牛党<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">1</span>张票
老师<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token operator">-</span><span class="token number">1</span>张票		# 出现 <span class="token operator">-</span><span class="token number">1</span>
小明<span class="token operator">==</span><span class="token operator">&gt;</span>拿到了第<span class="token number">0</span>张票

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>多个线程操作同一个资源的情况下，<strong>线程不安全</strong>，数据紊乱。</p></blockquote>`,5),o=[t];function c(l,i){return s(),a("div",null,o)}const u=n(p,[["render",c],["__file","06.初识并发问题.html.vue"]]);export{u as default};
