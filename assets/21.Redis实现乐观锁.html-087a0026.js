import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<blockquote><p>悲观锁</p><ul><li>很悲观，认为什么时候都会出问题。无论做什么都会加锁。</li></ul><p>乐观锁</p><ul><li>很乐观，认为什么时候都不会出问题。所以不会上锁。更新数据的时候去判断一些，在其期间是否有人修改过数据，version。</li><li>获取version</li><li>更新的时候比较version</li></ul></blockquote><blockquote><p>Redis监视测试 <code>watch</code> （面试常问）</p></blockquote><p>正常执行成功：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> money <span class="token number">100</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> out <span class="token number">0</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> money		<span class="token comment"># 监视 money 对象</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi			<span class="token comment"># 事务正常结束，数据期间没有发生变动，这个时候就正常执行成功</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decrby money <span class="token number">20</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby out <span class="token number">20</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>			
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">80</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">20</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试多线程修改值，使用watch可以当作Redis的乐观锁的操作。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> money			<span class="token comment"># 监视 money</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decrby money <span class="token number">10</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby out <span class="token number">10</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>				<span class="token comment"># 执行之前，另外一个线程，修改了我们的值。这个时候就会导致事务执行失败。</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果修改失败，获取最新的值即可。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 如果发现事务执行失败，先解锁</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> unwatch
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token function">watch</span> money			<span class="token comment"># 获取最新的值，再次监视</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> decrby money <span class="token number">10</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incrby out <span class="token number">10</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>	<span class="token comment"># 比对监视的值是否发生了变化。如果没有变化，可以执行成功。如果变化，执行失败。</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">990</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">30</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[p];function l(o,c){return s(),a("div",null,i)}const u=n(t,[["render",l],["__file","21.Redis实现乐观锁.html.vue"]]);export{u as default};
