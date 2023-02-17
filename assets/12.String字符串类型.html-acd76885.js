import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<h2 id="string类型的常用命令" tabindex="-1"><a class="header-anchor" href="#string类型的常用命令" aria-hidden="true">#</a> String类型的常用命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#################################################################################################</span>

<span class="token comment"># 1、字符串操作</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> key1 v1				<span class="token comment"># 设置值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key1				<span class="token comment"># 获得值</span>
<span class="token string">&quot;v1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *					<span class="token comment"># 查看所有的key</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;key1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXISTS key1				<span class="token comment"># 判断某一个key是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> APPEND key1 hello		<span class="token comment"># 追加字符串。如果当前key不存在，就相当于set key</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">7</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key1
<span class="token string">&quot;v1hello&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> STRLEN key1				<span class="token comment"># 获取字符串的长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">7</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> APPEND key1 ,hejin
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">13</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> STRLEN key1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">13</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key1
<span class="token string">&quot;v1hello,hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
<span class="token comment">#################################################################################################</span>

<span class="token comment"># 2、自增自减</span>
i++
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> views <span class="token number">0</span>		<span class="token comment"># 初始浏览量为0</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;0&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> INCR views		<span class="token comment"># 自增1 浏览量变为1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> INCR views
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr views		<span class="token comment"># 自减1</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr views
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;0&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decr views
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;-1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> INCRBY views <span class="token number">10</span>		<span class="token comment"># 可以设置步长。指定增量。每次增加多少。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;9&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> INCRBY views <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">19</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> INCRBY views <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">29</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;29&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> DECRBY views <span class="token number">10</span>		<span class="token comment"># # 可以设置步长。指定增量。每次减少多少。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">19</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> DECRBY views <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">9</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> DECRBY views <span class="token number">10</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get views
<span class="token string">&quot;-1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

<span class="token comment">#################################################################################################</span>
<span class="token comment"># 3、字符串范围 range</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> key1 hello,hejin	<span class="token comment"># 设置key1的值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key1				
<span class="token string">&quot;hello,hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> GETRANGE key1 <span class="token number">0</span> <span class="token number">3</span>		<span class="token comment"># 截取字符串 [0,3]</span>
<span class="token string">&quot;hell&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> GETRANGE key1 <span class="token number">0</span> <span class="token parameter variable">-1</span>		<span class="token comment"># 获取全部的字符串</span>
<span class="token string">&quot;hello,hejin&quot;</span>
<span class="token comment">#################################################################################################</span>

<span class="token comment"># 4、替换</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> key2 abcdefg
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key2
<span class="token string">&quot;abcdefg&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setrange key2 <span class="token number">1</span> xx		<span class="token comment"># 替换指定位置开始的字符串</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">7</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key2
<span class="token string">&quot;axxdefg&quot;</span>
<span class="token comment">#################################################################################################</span>

<span class="token comment"># 5、setex和setnx</span>
<span class="token comment"># setex(set with expire)		# 设置过期时间</span>
<span class="token comment"># setnx(set if not expire)		# 不存在再设置(在分布式锁中会常使用)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setex key3 <span class="token number">30</span> hello	<span class="token comment"># 设置key3的值为hello,30秒后过期</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl key3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">23</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get key3
<span class="token string">&quot;hello&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx mykey redis	<span class="token comment"># 如果mykey不存在，创建mykey</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;key1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;key2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;mykey&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl key3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> setnx mykey <span class="token string">&quot;mongodb&quot;</span>	<span class="token comment"># 如果mykey存在，创建失败</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get mykey
<span class="token string">&quot;redis&quot;</span>

<span class="token comment">#################################################################################################</span>
<span class="token comment"># 6、mset 和 mget</span>

<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> mset k1 v1 k2 v2 k3 v3	<span class="token comment"># 同时设置多个值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;k2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;k3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;k1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> mget k1 k2 k3			<span class="token comment"># 同时获取多个值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;v1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> msetnx k1 v1 k4 v4		<span class="token comment"># msetnx是一个原子性的操作。要么一起成功,要么一起失败。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;k2&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;k3&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;k1&quot;</span>

<span class="token comment">#################################################################################################</span>
<span class="token comment"># 7、对象</span>
<span class="token comment"># 这里的key是一个巧妙的设计：user:{id}:{field} 如此设计在Redis中是完全可以的</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> mset user:1:name hejin user:1:age <span class="token number">20</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> mget user:1:name user:1:age
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hejin&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;20&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 

<span class="token comment">#################################################################################################</span>
<span class="token comment"># 8、getset</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getset db Redis		<span class="token comment"># 如果不存在值则返回null</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get db
<span class="token string">&quot;Redis&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getset db mongodb	<span class="token comment"># 如果存在值则获取原来的值，并设置新的值</span>
<span class="token string">&quot;Redis&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get db
<span class="token string">&quot;mongodb&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>数据结构是相通的。</p></blockquote><h2 id="string类型的使用场景" tabindex="-1"><a class="header-anchor" href="#string类型的使用场景" aria-hidden="true">#</a> String类型的使用场景</h2><blockquote><p>value除了是字符串还可以是数字。</p><ul><li>计数器</li><li>统计多单位的数量</li><li>粉丝数</li><li>对象缓存存储</li></ul></blockquote>`,5),i=[p];function o(l,c){return s(),a("div",null,i)}const u=n(t,[["render",o],["__file","12.String字符串类型.html.vue"]]);export{u as default};
