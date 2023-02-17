import{_ as e,V as t,W as p,Y as n,Z as s,$ as o,X as i,F as l}from"./framework-a569e214.js";const c={},r=i(`<blockquote><p>Redis is an open source (BSD licensed), in-memory data structure store, used as a <code>database, cache, and message broker</code>. Redis provides data structures such as <code>strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes, and streams</code>. Redis has built-in replication, Lua scripting, LRU eviction, transactions, and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.</p></blockquote><p>中文网翻译</p><blockquote><p>Redis 是一个开源（BSD许可）的，内存中的数据结构存储系统，它可以用作<code>数据库、缓存和消息中间件</code>。 它支持多种类型的数据结构，如 字符串（strings）， 散列（hashes）， 列表（lists）， 集合（sets）， 有序集合（sorted sets） 与范围查询， bitmaps， hyperloglogs 和 地理空间（geospatial） 索引半径查询。 Redis 内置了 复制（replication），LUA脚本（Lua scripting）， LRU驱动事件（LRU eviction），事务（transactions） 和不同级别的 磁盘持久化（persistence）， 并通过 Redis哨兵（Sentinel）和自动 分区（Cluster）提供高可用性（high availability）。</p></blockquote><p><code>我们现在讲解的所有命令大家一定要全部记住，后面我们使用SpringBoot。Jedis。所有的方法就是这些命令。</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *			<span class="token comment"># 查看所有的key</span>
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">1</span>		<span class="token comment"># set key</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXISTS name		<span class="token comment"># 判断当前key是否存在</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXISTS name1
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">0</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> move name <span class="token number">1</span>		<span class="token comment"># 移动当前的key到1号数据库</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> del age			<span class="token comment"># 移除当前key</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> age <span class="token number">1</span>
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name hejin
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token string">&quot;hejin&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> EXPIRE name <span class="token number">10</span>	<span class="token comment"># 设置key的过期时间。单位是秒。</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name		<span class="token comment"># 查看当前key的剩余时间</span>
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token number">1</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> ttl name
<span class="token punctuation">(</span>integer<span class="token punctuation">)</span> <span class="token parameter variable">-2</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> get name
<span class="token punctuation">(</span>nil<span class="token punctuation">)</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">set</span> name hejin
OK
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> keys *
<span class="token number">1</span><span class="token punctuation">)</span> <span class="token string">&quot;age&quot;</span>
<span class="token number">2</span><span class="token punctuation">)</span> <span class="token string">&quot;name&quot;</span>
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> TYPE name		<span class="token comment"># 查看当前key的类型</span>
string
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> <span class="token builtin class-name">type</span> age
string
<span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),u={href:"http://www.redis.cn/commands.html",target:"_blank",rel:"noopener noreferrer"};function d(m,k){const a=l("ExternalLinkIcon");return t(),p("div",null,[r,n("blockquote",null,[n("p",null,[s("官网查看命令帮助文档："),n("a",u,[s("http://www.redis.cn/commands.html"),o(a)])])])])}const v=e(c,[["render",d],["__file","11.RedisKey的基本命令.html.vue"]]);export{v as default};
