import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<p>在set的基础上，增加了一个值。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">set</span> k1 v1
zset k1 score1 v1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##########################################################################</span>
<span class="token comment"># 1、存值取值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd myset  <span class="token number">1</span> one					<span class="token comment"># 添加一个值</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd myset  <span class="token number">2</span> two <span class="token number">3</span> three <span class="token number">4</span> four	<span class="token comment"># 添加多个值</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGE myset <span class="token number">0</span> <span class="token parameter variable">-1</span>					<span class="token comment"># 获取所有值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;four&quot;</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 2、排序</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd salary <span class="token number">2500</span> xiaohong			<span class="token comment"># 添加3个用户</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd salary <span class="token number">5000</span> zhangsan
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd salary <span class="token number">500</span> hejin
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGE salary <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohong&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGEBYSCORE salary <span class="token parameter variable">-inf</span> +inf		<span class="token comment"># 显示全部的用户 从小到大排序</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohong&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGEBYSCORE salary <span class="token number">0</span> <span class="token parameter variable">-1</span> 
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGEBYSCORE salary +inf <span class="token parameter variable">-inf</span> 
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGEBYSCORE salary <span class="token parameter variable">-inf</span> +inf withscores <span class="token comment"># 显示全部的用户。从小到大排序。并且附带成绩</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;500&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohong&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2500&quot;</span>
<span class="token number">5</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">6</span><span class="token punctuation">)</span> <span class="token string">&quot;5000&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGEBYSCORE salary <span class="token parameter variable">-inf</span> <span class="token number">2500</span> withscores	<span class="token comment"># 显示工资小于2500员工的升序排列信息</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;500&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohong&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;2500&quot;</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZREVRANGE salary <span class="token number">0</span> <span class="token parameter variable">-1</span>						<span class="token comment"># 从大到小排序</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZREVRANGE salary <span class="token number">0</span> <span class="token parameter variable">-1</span> withscores			<span class="token comment"># 从大到小排序，带成绩</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;5000&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;500&quot;</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 3、移除元素</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange salary <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;xiaohong&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrem salary xiaohong	<span class="token comment"># 移除有序集合中的指定元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zrange salary <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;zhangsan&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zcard salary			<span class="token comment"># 获取有序集合中的个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 4、获取指定区间的成员数量</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd myset <span class="token number">1</span> hello
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zadd myset <span class="token number">2</span> world <span class="token number">3</span> hejin
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ZRANGE myset <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zcount myset <span class="token number">1</span> <span class="token number">3</span>	<span class="token comment"># 获取指定区间的成员数量</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> zcount myset <span class="token number">1</span> <span class="token number">2</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果工作中有需要，查查官方文档。</p><blockquote><p>案例思路</p><ul><li>工资表排序</li><li>普通消息，重要消息。带权重进行判断</li><li>排行榜</li></ul></blockquote>`,5),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","16.Zset有序集合.html.vue"]]);export{u as default};
