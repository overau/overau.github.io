import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const e="/img/juc/image-20210311131300769.png",t="/img/juc/image-20210311131211730.png",o={},c=p('<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>官方文档</p></blockquote><figure><img src="'+e+'" alt="image-20210311131300769" tabindex="0" loading="lazy"><figcaption>image-20210311131300769</figcaption></figure><blockquote><p>synchronized与Lock等待和唤醒方法对比</p></blockquote><figure><img src="'+t+`" alt="image-20210311131211730" tabindex="0" loading="lazy"><figcaption>image-20210311131211730</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Condition</span>
    
<span class="token class-name">Condition</span> factors out the <span class="token class-name">Object</span> monitor methods <span class="token punctuation">(</span>wait<span class="token punctuation">,</span> notify and notifyAll<span class="token punctuation">)</span> into distinct objects <span class="token keyword">to</span> <span class="token namespace">give</span> the effect of having multiple wait<span class="token operator">-</span>sets per object<span class="token punctuation">,</span> by combining them <span class="token keyword">with</span> <span class="token namespace">the</span> use of arbitrary <span class="token class-name">Lock</span> <span class="token class-name"><span class="token namespace">implementations<span class="token punctuation">.</span></span> Where</span> a <span class="token class-name">Lock</span> replaces the use of <span class="token keyword">synchronized</span> methods and statements<span class="token punctuation">,</span> a <span class="token class-name">Condition</span> replaces the use of the <span class="token class-name">Object</span> monitor methods<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 资源类
 * 判断等待、业务、通知
 */</span>
<span class="token keyword">class</span> <span class="token class-name">Data2</span><span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * condition.await(); 等待
     * condition.signalAll(); 唤醒
     */</span>
    <span class="token class-name">Lock</span> lock <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ReentrantLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">Condition</span> condition <span class="token operator">=</span> lock<span class="token punctuation">.</span><span class="token function">newCondition</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 等待</span>
                condition<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            num<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;==&gt;&quot;</span><span class="token operator">+</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 通知其他线程 +1完毕</span>
            condition<span class="token punctuation">.</span><span class="token function">signalAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">decrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>
        lock<span class="token punctuation">.</span><span class="token function">lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 业务代码</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token comment">// 等待</span>
                condition<span class="token punctuation">.</span><span class="token function">await</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            num<span class="token operator">--</span><span class="token punctuation">;</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name">Thread</span><span class="token punctuation">.</span><span class="token function">currentThread</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&quot;==&gt;&quot;</span><span class="token operator">+</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token comment">// 通知其他线程 -1完毕</span>
            condition<span class="token punctuation">.</span><span class="token function">signalAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
            lock<span class="token punctuation">.</span><span class="token function">unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果一样。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">B</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">A</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>
<span class="token class-name">C</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">1</span>
<span class="token class-name">D</span><span class="token operator">==</span><span class="token operator">&gt;</span><span class="token number">0</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>任何一个新的技术，绝对不仅仅只是覆盖了原来的技术，优势和补充。</p><p>Condition <strong>精准通知和唤醒线程</strong>。</p></blockquote>`,10),l=[c];function i(u,r){return s(),a("div",null,l)}const d=n(o,[["render",i],["__file","06.Lock版的生产者消费者问题.html.vue"]]);export{d as default};
