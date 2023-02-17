import{_ as n,V as a,W as s,X as e}from"./framework-a569e214.js";const t="/img/juc/image-20210325164336438.png",p="/img/juc/image-20210325164258615.png",c="/img/juc/image-20210325164210376.png",o={},i=e(`<h2 id="什么是cas" tabindex="-1"><a class="header-anchor" href="#什么是cas" aria-hidden="true">#</a> 什么是CAS</h2><blockquote><p>atomicInteger.compareAndSet() 比较并更新。如果期望的值达到了,那么就更新,否则不更新。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * Atomically sets the value to the given updated value
 * if the current value <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token operator">==</span></span></span><span class="token punctuation">}</span> the expected value.
 *
 * <span class="token keyword">@param</span> <span class="token parameter">expect</span> the expected value
 * <span class="token keyword">@param</span> <span class="token parameter">update</span> the new value
 * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if successful. False return indicates that
 * the actual value was not equal to the expected value.
 */</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">boolean</span> <span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token keyword">int</span> expect<span class="token punctuation">,</span> <span class="token keyword">int</span> update<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> expect<span class="token punctuation">,</span> update<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>代码实践</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CasDemo</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 如果期望的值达到了,那么就更新,否则不更新</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">2022</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        atomicInteger<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">2022</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">compareAndSet</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">,</span> <span class="token number">2022</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>atomicInteger<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token boolean">true</span>
<span class="token number">2022</span>
<span class="token boolean">false</span>
<span class="token number">2022</span>
    
<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CAS是CPU的并发原语。</p><h2 id="atomicinteger加1的原理" tabindex="-1"><a class="header-anchor" href="#atomicinteger加1的原理" aria-hidden="true">#</a> AtomicInteger加1的原理</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">AtomicInteger</span> atomicInteger <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AtomicInteger</span><span class="token punctuation">(</span><span class="token number">2021</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
atomicInteger<span class="token punctuation">.</span><span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+t+'" alt="image-20210325164336438" tabindex="0" loading="lazy"><figcaption>image-20210325164336438</figcaption></figure><p>Java无法操作内存，Java可以调用C++（native），C++可以操作内存。Unsafe类相当于Java的后门，可以通过这个类操作内存。</p><figure><img src="'+p+'" alt="image-20210325164258615" tabindex="0" loading="lazy"><figcaption>image-20210325164258615</figcaption></figure><blockquote><p>Unsafe类里的getAndAddInt方法</p></blockquote><figure><img src="'+c+`" alt="image-20210325164210376" tabindex="0" loading="lazy"><figcaption>image-20210325164210376</figcaption></figure><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// AtomicInteger类</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndIncrement</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> unsafe<span class="token punctuation">.</span><span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> valueOffset<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// UnSafe类</span>
<span class="token keyword">public</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">getAndAddInt</span><span class="token punctuation">(</span><span class="token class-name">Object</span> var1<span class="token punctuation">,</span> <span class="token keyword">long</span> var2<span class="token punctuation">,</span> <span class="token keyword">int</span> var4<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> var5<span class="token punctuation">;</span>
    <span class="token keyword">do</span> <span class="token punctuation">{</span>
        <span class="token comment">// 获取内存地址中的值</span>
        var5 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getIntVolatile</span><span class="token punctuation">(</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">compareAndSwapInt</span><span class="token punctuation">(</span>var1<span class="token punctuation">,</span> var2<span class="token punctuation">,</span> var5<span class="token punctuation">,</span> var5 <span class="token operator">+</span> var4<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 内存操作，效率很高</span>
    <span class="token keyword">return</span> var5<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>var1相当于数组对象a，var2相当于a中的角标i，因为var5==a[i] ，var5+1就是a[i]+1，即实现了getAndIncrement()。</p><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>比较当前工作内存中的值和主内存中的值，如果这个值是期望的，那么则执行操作。否则不执行。如果不是就一直循环。</p><blockquote><p>缺点</p></blockquote><ul><li>循环会耗时。</li><li>一次性只能保证一个共享变量的原子性。</li><li>存在ABA问题。</li></ul>`,21),l=[i];function u(k,r){return a(),s("div",null,l)}const v=n(o,[["render",u],["__file","29.深入理解CAS.html.vue"]]);export{v as default};
