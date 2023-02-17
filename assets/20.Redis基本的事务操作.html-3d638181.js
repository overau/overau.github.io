import{_ as s,V as n,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<h1 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a></h1><blockquote><p>MySQL：ACID。要么同时成功，要么同时失败，原子性。</p></blockquote><blockquote><p><code>Redis单条命令是保持原子性的。但是事务不保证原子性。</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>----------队列 <span class="token builtin class-name">set</span> <span class="token builtin class-name">set</span> <span class="token builtin class-name">set</span> 执行-----------
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Redis事务本质：一组命令的集合。一个事务中的所有命令都会被序列化，在事务执行的过程中，会按照顺序执行。</p><ul><li>一次性</li><li>顺序性</li><li>排他性</li></ul><p>Redis事务没有隔离级别的概念。所有的命令在实务中，并没有直接执行。只有发起执行命令的时候才会执行。Exec。</p></blockquote><p>Redis的事务：</p><ul><li>开启事务（multi）</li><li>命令入队（...）</li><li>执行事务（exec）</li></ul><blockquote><p>正常执行事务。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi			<span class="token comment"># 开启事务</span>
OK
<span class="token comment"># 命令入队</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k3 v3
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>			<span class="token comment"># 执行事务</span>
<span class="token number">1</span><span class="token punctuation">)</span> OK
<span class="token number">2</span><span class="token punctuation">)</span> OK
<span class="token number">3</span><span class="token punctuation">)</span> <span class="token string">&quot;v2&quot;</span>
<span class="token number">4</span><span class="token punctuation">)</span> OK
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>放弃事务</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi			<span class="token comment"># 开启事务</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k4 v4
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> discard			<span class="token comment"># 取消事务</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k4			<span class="token comment"># 事务队列中命令都不会被执行</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>编译型异常（代码有问题！命令有错！）。事务中所有的命令都不会被执行。</p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2 
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k3 v3
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> getset k3		<span class="token comment"># 错误的命令</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR wrong number of arguments <span class="token keyword">for</span> <span class="token string">&#39;getset&#39;</span> <span class="token builtin class-name">command</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k4 v4
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k5 v5
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>			<span class="token comment"># 执行事务报错</span>
<span class="token punctuation">(</span>error<span class="token punctuation">)</span> EXECABORT Transaction discarded because of previous errors.
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k5			<span class="token comment"># 所有的命令都不会执行</span>
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>运行时异常。<code>如果事务队列中存在语法性错误，那么执行命令的时候。其他命令是可以正常执行的。错误命令抛出异常。</code></p></blockquote><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k1 v1
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> multi
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> incr k1		<span class="token comment"># 执行的时候失败</span>
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k2 v2
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> k3 v3
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k3
QUEUED
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">exec</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> ERR value is not an integer or out of range	<span class="token comment"># 虽然第一条命令报错了,但是依旧正常执行成功</span>
<span class="token number">2</span><span class="token punctuation">)</span> OK
<span class="token number">3</span><span class="token punctuation">)</span> OK
<span class="token number">4</span><span class="token punctuation">)</span> <span class="token string">&quot;v3&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k2
<span class="token string">&quot;v2&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get k3
<span class="token string">&quot;v3&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),l=[p];function i(o,c){return n(),a("div",null,l)}const d=s(t,[["render",i],["__file","20.Redis基本的事务操作.html.vue"]]);export{d as default};
