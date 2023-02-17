import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<p>基本的数据类型，列表。在Redis里面，我们可以把List玩成栈、队列、阻塞队列。</p><p>所有的List命令都是以l开头的。Redis命令不区分大小写。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">###################################################################</span>
<span class="token comment"># 1、lpush 和 rpush</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LPUSH list one		<span class="token comment"># 将一个值或者多个值插入列表头部（左）</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LPUSH list two
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LPUSH list three
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>	<span class="token comment"># 获取list中所有的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>	
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token number">1</span>		<span class="token comment"># 通过区间获得具体的值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> RPUSH list rigth	<span class="token comment"># 将一个值或者多个值插入列表尾部（右）</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token number">1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;rigth&quot;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 2、lpop 和 rpop</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>	
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;rigth&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpop list			<span class="token comment"># 移除列表的第一个元素</span>
<span class="token string">&quot;three&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpop list			<span class="token comment"># 移除列表的最后一个元素</span>
<span class="token string">&quot;rigth&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 3、lindex</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list <span class="token number">1</span>		<span class="token comment"># 通过下标获取list的某一个值</span>
<span class="token string">&quot;one&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list <span class="token number">0</span>
<span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lindex list <span class="token number">2</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 4、llen</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LPUSH list one two three
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LLEN list			<span class="token comment"># 返回list的长度</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 5、移除指定的值</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;one&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrem list <span class="token number">1</span> one		<span class="token comment"># 移除list集合中指定个数的value。精确匹配。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrem list <span class="token number">1</span> three
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LPUSH list three
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;three&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrem list <span class="token number">2</span> three
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> LRANGE list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;two&quot;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 6、ltrim</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> RPUSH mylist hello hello1 hello2 hello3
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token punctuation">(</span>empty array<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hello2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;hello3&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ltrim mylist <span class="token number">1</span> <span class="token number">2</span>	<span class="token comment"># 通过下标截取指定的长度。这个list已经被改变，只剩下截取的元素。</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello1&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello2&quot;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 7、rpoplpush 移除列表最后一个元素，并移动到新的列表中</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> RPUSH mylist hello hello1 hello2
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello1&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;hello2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpoplpush mylist otherlist	<span class="token comment"># 移除列表最后一个元素，并移动到新的列表中</span>
<span class="token string">&quot;hello2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>			<span class="token comment"># 查看原来的列表</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;hello1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange otherlist <span class="token number">0</span> <span class="token parameter variable">-1</span>		<span class="token comment"># 查看目标列表中，确实存在该值</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello2&quot;</span>
<span class="token comment">###################################################################</span>
<span class="token comment"># 8、lset 将列表中制定下标的值替换为另一个值。更新操作。</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> exists list					<span class="token comment"># 判断列表是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lset list <span class="token number">0</span> item			<span class="token comment"># 不存在列表，更新就会报错</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR no such key
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lpush list value1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;value1&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lset list <span class="token number">0</span> item			<span class="token comment"># 如果存在，更新当前下标的值</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange list <span class="token number">0</span> <span class="token number">0</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;item&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lset list <span class="token number">1</span> item1			<span class="token comment"># 不存在列表，更新就会报错</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR index out of range
<span class="token comment">###################################################################</span>
<span class="token comment"># 9、linsert 将某个具体的value插入到列表中某个元素的前面或者后面</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> rpush mylist hello world
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> linsert mylist before <span class="token string">&quot;world&quot;</span> <span class="token string">&quot;other&quot;</span>	<span class="token comment"># 将某个具体的value插入到列表中某个元素的前面</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">3</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;other&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> linsert mylist after <span class="token string">&quot;world&quot;</span> <span class="token string">&quot;new&quot;</span>		<span class="token comment"># 将某个具体的value插入到列表中某个元素的后面</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">4</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> lrange mylist <span class="token number">0</span> <span class="token parameter variable">-1</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;hello&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;other&quot;</span>
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;world&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;new&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>小结</p><ul><li>实际上是一个链表</li><li>如果key不存在，创建新的链表</li><li>如果key存在，新增内容</li><li>如果移除了所有值，空链表，也代表不存在</li><li>在两边插入或者改动值，效率最高。中间元素，相对来说效率会低一点</li></ul></blockquote>`,4),o=[p];function l(i,c){return s(),a("div",null,o)}const u=n(t,[["render",l],["__file","13.List列表类型.html.vue"]]);export{u as default};
