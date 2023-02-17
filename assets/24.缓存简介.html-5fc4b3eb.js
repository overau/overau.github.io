import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const i={},l=e(`<h3 id="_1、简介" tabindex="-1"><a class="header-anchor" href="#_1、简介" aria-hidden="true">#</a> 1、简介</h3><ul><li>存在内存中的临时数据</li><li>将用户经常查询的数据放在缓存（内存）中，用户去查询数据就不用从磁盘上（关系型数据库数据文件）查询。从缓存中查询，从而提高查询效率，解决了高并发系统的性能问题。</li></ul><h3 id="_2、为什么使用缓存" tabindex="-1"><a class="header-anchor" href="#_2、为什么使用缓存" aria-hidden="true">#</a> 2、为什么使用缓存</h3><p>减少和数据库的交互次数，减少系统开销，提高系统效率。</p><h3 id="_3、什么样的数据能使用缓存" tabindex="-1"><a class="header-anchor" href="#_3、什么样的数据能使用缓存" aria-hidden="true">#</a> 3、什么样的数据能使用缓存</h3><p>经常查询并且不经常改变的数据。</p><h3 id="_4、mybatis缓存" tabindex="-1"><a class="header-anchor" href="#_4、mybatis缓存" aria-hidden="true">#</a> 4、Mybatis缓存</h3><p>Mybatis包含一个非常强大的查询缓存特性，它可以非常方便地定制和配置缓存。缓存可以极大地提升查询效率。</p><p>Mybatis系统中默认定义了两级缓存：一级缓存和二级缓存</p><ul><li><mark>默认情况</mark>下，只有一级缓存。（SqlSession级别的缓存，也称为本地缓存）</li><li>二级缓存需要手动开启和配置，是基于namespace级别的缓存。</li><li>为了提高扩展性，Mybatis定义了<mark>缓存接口Cache</mark>。我们可以通过实行Cache接口来自定义二级缓存。</li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Cache</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> The identifier of this cache
   */</span>
  <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">key</span> Can be any object but usually it is a <span class="token punctuation">{</span><span class="token keyword">@link</span> <span class="token reference"><span class="token class-name">CacheKey</span></span><span class="token punctuation">}</span>
   * <span class="token keyword">@param</span> <span class="token parameter">value</span> The result of a select.
   */</span>
  <span class="token keyword">void</span> <span class="token function">putObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@param</span> <span class="token parameter">key</span> The key
   * <span class="token keyword">@return</span> The object stored in the cache.
   */</span>
  <span class="token class-name">Object</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * As of 3.3.0 this method is only called during a rollback
   * for any previous value that was missing in the cache.
   * This lets any blocking cache to release the lock that
   * may have previously put on the key.
   * A blocking cache puts a lock when a value is null
   * and releases it when the value is back again.
   * This way other threads will wait for the value to be
   * available instead of hitting the database.
   *
   *
   * <span class="token keyword">@param</span> <span class="token parameter">key</span> The key
   * <span class="token keyword">@return</span> Not used
   */</span>
  <span class="token class-name">Object</span> <span class="token function">removeObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Clears this cache instance.
   */</span>
  <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Optional. This method is not called by the core.
   *
   * <span class="token keyword">@return</span> The number of elements stored in the cache (not its capacity).
   */</span>
  <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * Optional. As of 3.2.6 this method is no longer called by the core.
   * <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span>
   * Any locking needed by the cache must be provided internally by the cache provider.
   *
   * <span class="token keyword">@return</span> A ReadWriteLock
   */</span>
  <span class="token keyword">default</span> <span class="token class-name">ReadWriteLock</span> <span class="token function">getReadWriteLock</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、mybatis清除策略" tabindex="-1"><a class="header-anchor" href="#_5、mybatis清除策略" aria-hidden="true">#</a> 5、Mybatis清除策略</h3><p>可用的清除策略有：</p><ul><li>LRU – 最近最少使用：移除最长时间不被使用的对象。</li><li>FIFO – 先进先出：按对象进入缓存的顺序来移除它们。</li><li>SOFT – 软引用：基于垃圾回收器状态和软引用规则移除对象。</li><li>WEAK – 弱引用：更积极地基于垃圾收集器状态和弱引用规则移除对象。</li></ul><p><mark>默认的清除策略是 LRU</mark>。</p>`,15),c=[l];function t(p,o){return s(),a("div",null,c)}const r=n(i,[["render",t],["__file","24.缓存简介.html.vue"]]);export{r as default};
