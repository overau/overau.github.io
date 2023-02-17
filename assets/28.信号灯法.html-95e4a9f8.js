import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},e=p(`<blockquote><p>信号灯法，标志位解决。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestPC2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Tv</span> tv <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Tv</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Player</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>tv<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 生产者 --&gt; 演员
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Player</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token class-name">Tv</span> tv<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Player</span><span class="token punctuation">(</span><span class="token class-name">Tv</span> tv<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;《大本营播放中》&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">play</span><span class="token punctuation">(</span><span class="token string">&quot;《抖音：记录美好生活》&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 消费者 --&gt; 观众
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Watcher</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span><span class="token punctuation">{</span>
    <span class="token class-name">Tv</span> tv<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span><span class="token class-name">Tv</span> tv<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>tv <span class="token operator">=</span> tv<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">20</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>tv<span class="token punctuation">.</span><span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 产品 --&gt; 节目
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Tv</span><span class="token punctuation">{</span>
    <span class="token comment">// 演员表演,观众等待 T</span>
    <span class="token comment">// 观众观看,演员等待 F</span>
    <span class="token comment">// 节目</span>
    <span class="token class-name">String</span> voice<span class="token punctuation">;</span>

    <span class="token keyword">boolean</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 表演
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">play</span><span class="token punctuation">(</span><span class="token class-name">String</span> voice<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;演员表演了&quot;</span> <span class="token operator">+</span> voice<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知观众观看</span>
        <span class="token comment">// 通知唤醒</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>voice <span class="token operator">=</span> voice<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 观看
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">synchronized</span> <span class="token keyword">void</span> <span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>flag<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token comment">// 演员表演,观众等待</span>
            <span class="token keyword">try</span> <span class="token punctuation">{</span>
                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;观看了&quot;</span> <span class="token operator">+</span> voice<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 通知演员表演</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">notifyAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>flag <span class="token operator">=</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>flag<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>演员表演了《大本营播放中》
观看了《大本营播放中》
演员表演了《抖音：记录美好生活》
观看了《抖音：记录美好生活》
演员表演了《大本营播放中》
观看了《大本营播放中》
演员表演了《抖音：记录美好生活》
观看了《抖音：记录美好生活》
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","28.信号灯法.html.vue"]]);export{k as default};
