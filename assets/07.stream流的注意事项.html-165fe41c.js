import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p={},e=t(`<ul><li>惰性求值：如果没有终结操作，中间操作是不会得到执行的。</li><li>流是一次性的：一旦一个流对象经过一个终结操作之后，这个流就不能再被使用。</li><li>不会影响原数据：我们在流中可以对数据做很多处理，但是正常情况下是不会影响原来集合中的元素。</li></ul><blockquote><p>流的一次性</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> authors <span class="token operator">=</span> <span class="token function">getAuthors</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Stream</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> stream <span class="token operator">=</span> authors<span class="token punctuation">.</span><span class="token function">stream</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    stream<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>author <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>author<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">Optional</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Author</span><span class="token punctuation">&gt;</span></span> first <span class="token operator">=</span> stream<span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>蒙多
亚拉索
易
易
<span class="token class-name">Exception</span> in thread <span class="token string">&quot;main&quot;</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>IllegalStateException</span><span class="token operator">:</span> stream has already been operated upon or closed
	at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span>AbstractPipeline</span><span class="token punctuation">.</span><span class="token function">evaluate</span><span class="token punctuation">(</span><span class="token class-name">AbstractPipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">229</span><span class="token punctuation">)</span>
	at <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span>stream<span class="token punctuation">.</span></span>ReferencePipeline</span><span class="token punctuation">.</span><span class="token function">findFirst</span><span class="token punctuation">(</span><span class="token class-name">ReferencePipeline</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">464</span><span class="token punctuation">)</span>
	at <span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>sanfen<span class="token punctuation">.</span></span>StreamDemo01</span><span class="token punctuation">.</span><span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">StreamDemo01</span><span class="token punctuation">.</span>java<span class="token operator">:</span><span class="token number">28</span><span class="token punctuation">)</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[e];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","07.stream流的注意事项.html.vue"]]);export{k as default};
