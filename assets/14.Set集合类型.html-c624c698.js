import{_ as n,V as s,W as e,X as a}from"./framework-a569e214.js";const t={},i=a(`<p>set中的值是不能重复的。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">##########################################################################</span>
<span class="token comment"># 1、存值取值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd myset hello		<span class="token comment"># set集合中添加元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd myset hejin&#39;
Invalid argument<span class="token punctuation">(</span>s<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd myset hejin
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> sadd myset <span class="token string">&quot;love hejin&quot;</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smembers myset			<span class="token comment"># 查看指定set的所有值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;love hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SISMEMBER myset hello	<span class="token comment"># 判断某个值是否在set中</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> SISMEMBER myset world
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token comment">##########################################################################</span>
<span class="token comment"># 2、获取个数</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> scard myset				<span class="token comment"># 获取set集合中元素的个数</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>

<span class="token comment">##########################################################################</span>
<span class="token comment"># 3、移除元素</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> srem myset hello		<span class="token comment"># 移除set集合中的某个元素</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> smembers myset
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hellohejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;love hejin

##########################################################################
# 4、set 无序不重复。抽随机。
127.0.0.1:6379&gt; SRANDMEMBER myset		# 随机抽选出一个元素
&quot;</span>hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>hellohejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>hellohejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>love hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>love hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>love hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset
&quot;</span>hellohejin<span class="token string">&quot;
127.0.0.1:6379&gt; SRANDMEMBER myset 2		# 随机抽选出指定个数的元素
1) &quot;</span>hejin<span class="token string">&quot;
2) &quot;</span>love hejin<span class="token string">&quot;

##########################################################################
# 5、随机删除元素
127.0.0.1:6379&gt; SMEMBERS myset
1) &quot;</span>hellohejin<span class="token string">&quot;
2) &quot;</span>hejin<span class="token string">&quot;
3) &quot;</span>love hejin<span class="token string">&quot;
127.0.0.1:6379&gt; spop myset				# 随机删除set集合中的元素
&quot;</span>hellohejin<span class="token string">&quot;
127.0.0.1:6379&gt; spop myset
&quot;</span>hejin<span class="token string">&quot;
127.0.0.1:6379&gt; SMEMBERS myset
1) &quot;</span>love hejin<span class="token string">&quot;

##########################################################################
# 6、将一个指定的值，移动到另一个set集合
127.0.0.1:6379&gt; sadd myset hejin
(integer) 1
127.0.0.1:6379&gt; sadd myset2 set2
(integer) 1
127.0.0.1:6379&gt; keys *
1) &quot;</span>myset<span class="token string">&quot;
2) &quot;</span>myset2<span class="token string">&quot;
127.0.0.1:6379&gt; SMOVE myset myset2 hejin	# 将一个指定的值，移动到另一个set集合
(integer) 1
127.0.0.1:6379&gt; SMEMBERS myset
(empty array)
127.0.0.1:6379&gt; SMEMBERS myset2
1) &quot;</span>hejin<span class="token string">&quot;
2) &quot;</span>set2<span class="token string">&quot;

##########################################################################
# 7、交集、差集、并集
# 微博、B站,共同关注
127.0.0.1:6379&gt; SDIFF key1 key2				# 差集
1) &quot;</span>a<span class="token string">&quot;
2) &quot;</span>b<span class="token string">&quot;
127.0.0.1:6379&gt; SINTER key1 key2			# 交集 共同好友就可以这样实现
1) &quot;</span>c<span class="token string">&quot;
127.0.0.1:6379&gt; SUNION key1 key2			# 并集
1) &quot;</span>a<span class="token string">&quot;
2) &quot;</span>b<span class="token string">&quot;
3) &quot;</span>c<span class="token string">&quot;
4) &quot;</span>e<span class="token string">&quot;
5) &quot;</span>d&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>微博，A用户将所有关注的人放在一个set集合中。将他的粉丝也放在一个集合中。</p><ul><li>共同关注</li><li>共同爱好</li><li>二度好友</li><li>推荐好友</li></ul></blockquote>`,3),l=[i];function o(p,c){return s(),e("div",null,l)}const r=n(t,[["render",o],["__file","14.Set集合类型.html.vue"]]);export{r as default};
