import{_ as n,V as s,W as a,X as p}from"./framework-a569e214.js";const t={},e=p(`<blockquote><p>为什么要使用Lambda表达式</p></blockquote><ul><li>避免匿名内部类定义过多。</li><li>可以让代码看起来很简洁。</li><li>去掉了一堆没有意义的代码，只留下核心的逻辑。</li></ul><blockquote><p>其实质属于函数式编程的概念。</p></blockquote><p>函数式接口的定义：任何接口，如果<strong>只包含唯一一个抽象方法</strong>，那么就是一个函数式接口。比如Runnable接口：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Runnable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于函数式接口，我们可以通过lambda表达式来创建该接口的对象。</p><blockquote><p>lambda表达式的推导</p></blockquote><p><code>1、接口 + 实现类</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ILike</span> like <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Like</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        like<span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 定义一个函数式接口 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 实现类 **/</span>
<span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">implements</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i like lambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>2、静态内部类</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda1</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/** 静态内部类 **/</span>
    <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">implements</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i like lambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">ILike</span> like <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Like</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        like<span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 定义一个函数式接口 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>3、局部内部类</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token doc-comment comment">/** 局部内部类 **/</span>
        <span class="token keyword">class</span> <span class="token class-name">Like</span> <span class="token keyword">implements</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i like lambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>

        <span class="token class-name">ILike</span> like <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Like</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        like<span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 定义一个函数式接口 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>4、匿名内部类</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda1</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">/* 匿名内部类.没有类的名称,必须借助接口或者父类 */</span>
        <span class="token class-name">ILike</span> like <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ILike</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i like lambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        like<span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 定义一个函数式接口 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>5、lambda表达式简化</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>

        <span class="token comment">/* lambda表达式简化 */</span>
        <span class="token class-name">ILike</span> like <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;i like lambda&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        like<span class="token punctuation">.</span><span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/** 定义一个函数式接口 **/</span>
<span class="token keyword">interface</span> <span class="token class-name">ILike</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">lambda</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>带参数的lambda表达式</code></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestLambda2</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Ilove</span> ilove <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I love you===&gt;&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        ilove<span class="token punctuation">.</span><span class="token function">love</span><span class="token punctuation">(</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 简化1</span>
        ilove <span class="token operator">=</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I love you===&gt;&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        ilove<span class="token punctuation">.</span><span class="token function">love</span><span class="token punctuation">(</span><span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 简化2</span>
        ilove <span class="token operator">=</span> a <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I love you===&gt;&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
        ilove<span class="token punctuation">.</span><span class="token function">love</span><span class="token punctuation">(</span><span class="token number">2233</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 简化3</span>
        ilove <span class="token operator">=</span> a <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;I love you===&gt;&quot;</span> <span class="token operator">+</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        ilove<span class="token punctuation">.</span><span class="token function">love</span><span class="token punctuation">(</span><span class="token number">666</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Ilove</span><span class="token punctuation">{</span>
    <span class="token keyword">void</span> <span class="token function">love</span><span class="token punctuation">(</span><span class="token keyword">int</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>总结</p></blockquote><ul><li>lambda表达式只能有<strong>一行代码</strong>的情况下，才能去掉大括号，简化成一行。多行，使用代码块包括。</li><li>lambda表达式前提是接口为<strong>函数式接口</strong>。</li><li>多个参数也可以去掉参数类型，<strong>要去掉都去掉</strong>。必须加括号。</li></ul>`,21),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(t,[["render",o],["__file","09.Lambda表达式.html.vue"]]);export{k as default};
