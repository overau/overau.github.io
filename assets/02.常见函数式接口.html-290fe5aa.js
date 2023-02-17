import{_ as n,V as a,W as s,X as e}from"./framework-a569e214.js";const t={},c=e(`<h2 id="consumer消费接口" tabindex="-1"><a class="header-anchor" href="#consumer消费接口" aria-hidden="true">#</a> Consumer消费接口</h2><blockquote><p>对传入的参数进行消费</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Consumer</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Performs this operation on the given argument.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">t</span> the input argument
     */</span>
    <span class="token keyword">void</span> <span class="token function">accept</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="function计算转换接口" tabindex="-1"><a class="header-anchor" href="#function计算转换接口" aria-hidden="true">#</a> Function计算转换接口</h2><blockquote><p>对传入的参数进行计算或者转换，把结果返回。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Function</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">,</span> <span class="token class-name">R</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Applies this function to the given argument.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">t</span> the function argument
     * <span class="token keyword">@return</span> the function result
     */</span>
    <span class="token class-name">R</span> <span class="token function">apply</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="predicate判断接口" tabindex="-1"><a class="header-anchor" href="#predicate判断接口" aria-hidden="true">#</a> Predicate判断接口</h2><blockquote><p>对传入的参数条件判断，返回判断结果。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Predicate</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Evaluates this predicate on the given argument.
     *
     * <span class="token keyword">@param</span> <span class="token parameter">t</span> the input argument
     * <span class="token keyword">@return</span> <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">true</span></span></span><span class="token punctuation">}</span> if the input argument matches the predicate,
     * otherwise <span class="token punctuation">{</span><span class="token keyword">@code</span> <span class="token code-section"><span class="token code language-java"><span class="token boolean">false</span></span></span><span class="token punctuation">}</span>
     */</span>
    <span class="token keyword">boolean</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token class-name">T</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="supplier生产型接口" tabindex="-1"><a class="header-anchor" href="#supplier生产型接口" aria-hidden="true">#</a> Supplier生产型接口</h2><blockquote><p>可以在方法中创建对象，把创建好的对象返回。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@FunctionalInterface</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Supplier</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token class-name">T</span> <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[c];function i(l,o){return a(),s("div",null,p)}const d=n(t,[["render",i],["__file","02.常见函数式接口.html.vue"]]);export{d as default};
