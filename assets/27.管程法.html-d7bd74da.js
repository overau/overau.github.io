import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const e={},t=p(`<blockquote><p>并发协作模型生产者/消费者模式 管程法</p></blockquote><ul><li><strong>生产者</strong>：负责生产数据的模块(可能是方法、对象、线程、进程)。</li><li><strong>消费者</strong>：负责处理数据的模块(可能是方法、对象、线程、进程)。</li><li><strong>缓冲区</strong>：消费者不能直接使用生产者的数据，他们之间有个缓冲区。</li></ul><p><mark>生产者将生产好的数据放入缓冲区，消费者从缓冲区拿出数据。</mark></p><p>管程法：生产者、消费者、产品、缓冲区</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPC</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 容器</span>
        <span class="token class-name">SynContainer</span> container <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SynContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 生产者</span>
        <span class="token keyword">new</span> <span class="token class-name">Productor</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 消费者</span>
        <span class="token keyword">new</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span>container<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 生产者
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Productor</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token class-name">SynContainer</span> container<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Productor</span><span class="token punctuation">(</span><span class="token class-name">SynContainer</span> container<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生产
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            container<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Chicken</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;生产了==&gt;第&quot;</span> <span class="token operator">+</span> i <span class="token operator">+</span> <span class="token string">&quot;只鸡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 消费者
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Consumer</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token class-name">SynContainer</span> container<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Consumer</span><span class="token punctuation">(</span><span class="token class-name">SynContainer</span> container<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 消费
     */</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;消费了===&gt;第&quot;</span> <span class="token operator">+</span> container<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token string">&quot;只鸡&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 产品
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Chicken</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 产品编号 **/</span>
    <span class="token keyword">int</span> id<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Chicken</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">=</span> id<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 缓冲区
 */</span>
<span class="token keyword">class</span> <span class="token class-name">SynContainer</span><span class="token punctuation">{</span>
    <span class="token doc-comment comment">/** 容器大小 **/</span>
    <span class="token class-name">Chicken</span><span class="token punctuation">[</span><span class="token punctuation">]</span> chickens <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Chicken</span><span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/** 容器计数器 **/</span>
    <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 生产者放入产品
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">push</span><span class="token punctuation">(</span><span class="token class-name">Chicken</span> chicken<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 如果容器满了,就需要等待消费者消费</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> chickens<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 通知消费者消费,生产者等待</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 如果容器没有满了,就需要丢入产品</span>
        chickens<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> chicken<span class="token punctuation">;</span>
        count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token comment">// 可以通知消费者消费</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 消费者消费产品
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token class-name">Chicken</span> <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token comment">// 判断能否消费</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 等待生产者生产，消费者等待</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token comment">// 可以消费</span>
        count<span class="token operator">--</span><span class="token punctuation">;</span>
        <span class="token class-name">Chicken</span> chicken <span class="token operator">=</span> chickens<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token comment">// 吃完了,通知生产者生产</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> chicken<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">0</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">1</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">2</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">3</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">4</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">5</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">6</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">7</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">8</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">9</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">10</span>只鸡
消费了<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span>第<span class="token number">4</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">11</span>只鸡
消费了<span class="token operator">==</span><span class="token operator">=</span><span class="token operator">&gt;</span>第<span class="token number">10</span>只鸡
生产了<span class="token operator">==</span><span class="token operator">&gt;</span>第<span class="token number">12</span>只鸡
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),c=[t];function o(l,i){return s(),a("div",null,c)}const k=n(e,[["render",o],["__file","27.管程法.html.vue"]]);export{k as default};
