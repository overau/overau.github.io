import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<p>Map集合。<code>key - &lt;key-value&gt;。</code>本质和String类型没有太大区别，还是一个简单的key-value。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##########################################################################</span>
<span class="token comment"># 1、存值取值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset myhash field1 hejin				<span class="token comment"># set一个具体的key-value</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hget myhash field1						<span class="token comment"># 获取一个字段的值</span>
<span class="token string">&quot;hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmset myhash field1 hello field2 world	<span class="token comment"># 同时set多个key-value</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmget myhash field1
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmget myhash field2
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmget myhash field1 field2				<span class="token comment"># 获取多个字段的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HGETALL myhash							<span class="token comment"># 获取全部的数据</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;field1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;field2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token comment">##########################################################################</span>
<span class="token comment"># 2、删除</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hdel myhash field1						<span class="token comment"># 删除hash指定key字段。对应的value也就没有了</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HGETALL myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;field2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 3、获取hash长度</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hlen myhash			<span class="token comment"># 获取hash表的字段数量</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hmset myhash field1 hello field2 world
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;field2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;field1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hlen myhash
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 4、判断hash中的key是否存在</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HEXISTS myhash field1	<span class="token comment"># 判断hash中的指定字段是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HEXISTS myhash field3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 5、只获取所有field或者所有的value</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hkeys myhash	<span class="token comment"># 获取所有field</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;field2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;field1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hvals myhash	<span class="token comment"># 获取所有value</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 6、</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hset myhash field3 <span class="token number">5</span>		
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hgetall myhash
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;field2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;field1&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;field3&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;5&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HINCRBY myhash field3 <span class="token number">1</span>		<span class="token comment"># 指定增量</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">6</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> HINCRBY myhash field3 <span class="token parameter variable">-1</span>	<span class="token comment"># 负数表示减少</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">5</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hsetnx myhash field4 hello	<span class="token comment"># 如果不存在，则可以设置</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> hsetnx myhash field4 hello	<span class="token comment"># 如果存在，则不能设置</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>hash变更的数据：user、name、age。尤其是用户信息之类的，经常变动的信息。hash更适合于存储对象。String更加适合字符串存储。</p></blockquote>`,3),l=[p];function o(i,c){return s(),a("div",null,l)}const u=n(t,[["render",o],["__file","15.Hash哈希类型.html.vue"]]);export{u as default};
