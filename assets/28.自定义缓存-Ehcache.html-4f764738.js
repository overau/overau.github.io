import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<blockquote><p>Ehcache是一种广泛使用的开源Java分布式缓存。主要面向通用缓存,Java EE和轻量级容器。它具有内存和磁盘存储，缓存加载器,缓存扩展,缓存异常处理程序,一个gzip缓存servlet过滤器,支持REST和SOAP api等特点。 Ehcache最初是由Greg Luck于2003年开始开发。2009年,该项目被Terracotta购买。软件仍然是开源,但一些新的主要功能(例如，快速可重启性之间的一致性的)只能在商业产品中使用，例如Enterprise EHCache and BigMemory。维基媒体Foundationannounced目前使用的就是Ehcache技术。</p></blockquote><h3 id="导包" tabindex="-1"><a class="header-anchor" href="#导包" aria-hidden="true">#</a> 导包</h3><p>要在程序中使用Ehcache，先要导包</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.mybatis.caches<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>mybatis-ehcache<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>1.2.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mapper文件配置ehcache缓存" tabindex="-1"><a class="header-anchor" href="#mapper文件配置ehcache缓存" aria-hidden="true">#</a> mapper文件配置ehcache缓存</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>org.mybatis.caches.ehcache.EhcacheCache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="ehcachecache实现" tabindex="-1"><a class="header-anchor" href="#ehcachecache实现" aria-hidden="true">#</a> EhcacheCache实现</h3><p>EhcacheCache.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">org<span class="token punctuation">.</span>mybatis<span class="token punctuation">.</span>caches<span class="token punctuation">.</span>ehcache</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">EhcacheCache</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractEhcacheCache</span> <span class="token punctuation">{</span>

  <span class="token doc-comment comment">/**
   * Instantiates a new ehcache cache.
   *
   * <span class="token keyword">@param</span> <span class="token parameter">id</span>
   *          the id
   */</span>
  <span class="token keyword">public</span> <span class="token class-name">EhcacheCache</span><span class="token punctuation">(</span><span class="token class-name">String</span> id<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">super</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">CACHE_MANAGER</span><span class="token punctuation">.</span><span class="token function">cacheExists</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token constant">CACHE_MANAGER</span><span class="token punctuation">.</span><span class="token function">addCache</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token constant">CACHE_MANAGER</span><span class="token punctuation">.</span><span class="token function">getEhcache</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="ehcache配置文件ehcache-xml" tabindex="-1"><a class="header-anchor" href="#ehcache配置文件ehcache-xml" aria-hidden="true">#</a> ehcache配置文件ehcache.xml</h3><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ehcache</span> <span class="token attr-name"><span class="token namespace">xmlns:</span>xsi</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://www.w3.org/2001/XMLSchema-instance<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name"><span class="token namespace">xsi:</span>noNamespaceSchemaLocation</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>http://ehcache.org/ehcache.xsd<span class="token punctuation">&quot;</span></span>
         <span class="token attr-name">updateCheck</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!--
       diskStore：为缓存路径，ehcache分为内存和磁盘两级，此属性定义磁盘的缓存位置。参数解释如下：
       user.home – 用户主目录
       user.dir  – 用户当前工作目录
       java.io.tmpdir – 默认临时文件路径
     --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>diskStore</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>./tmpdir/Tmp_EhCache<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>defaultCache</span>
            <span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>10000<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>259200<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LRU<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token comment">&lt;!--
       defaultCache：默认缓存策略，当ehcache找不到定义的缓存时，则使用这个缓存策略。只能定义一个。
     --&gt;</span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>cache</span>
            <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>cloud_user<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">eternal</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">maxElementsInMemory</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>5000<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">overflowToDisk</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">diskPersistent</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>false<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToIdleSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">timeToLiveSeconds</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>1800<span class="token punctuation">&quot;</span></span>
            <span class="token attr-name">memoryStoreEvictionPolicy</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>LRU<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>

    <span class="token comment">&lt;!--
      name:缓存名称。
      maxElementsInMemory:缓存最大数目
      maxElementsOnDisk：硬盘最大缓存个数。
      eternal:对象是否永久有效，一但设置了，timeout将不起作用。
      overflowToDisk:是否保存到磁盘，当系统宕机时
      timeToIdleSeconds:设置对象在失效前的允许闲置时间（单位：秒）。仅当eternal=false对象不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大。
      timeToLiveSeconds:设置对象在失效前允许存活时间（单位：秒）。最大时间介于创建时间和失效时间之间。仅当eternal=false对象不是永久有效时使用，默认是0.，也就是对象存活时间无穷大。
      diskPersistent：是否缓存虚拟机重启期数据 Whether the disk store persists between restarts of the Virtual Machine. The default value is false.
      diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区。
      diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒。
      memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）。
      clearOnFlush：内存数量最大时是否清除。
      memoryStoreEvictionPolicy:可选策略有：LRU（最近最少使用，默认策略）、FIFO（先进先出）、LFU（最少访问次数）。
      FIFO，first in first out，这个是大家最熟的，先进先出。
      LFU， Less Frequently Used，就是上面例子中使用的策略，直白一点就是讲一直以来最少被使用的。如上面所讲，缓存的元素有一个hit属性，hit值最小的将会被清出缓存。
      LRU，Least Recently Used，最近最少使用的，缓存的元素有一个时间戳，当缓存容量满了，而又需要腾出地方来缓存新的元素的时候，那么现有缓存元素中时间戳离当前时间最远的元素将被清出缓存。
   --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ehcache</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果正常。</p><h3 id="自定义mybatis缓存" tabindex="-1"><a class="header-anchor" href="#自定义mybatis缓存" aria-hidden="true">#</a> 自定义Mybatis缓存</h3><p>MyCache.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>utils</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>ibatis<span class="token punctuation">.</span>cache<span class="token punctuation">.</span></span><span class="token class-name">Cache</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * @Description 实现Cache接口
 * @Author Administrator
 * @Date 2020/12/1 18:00
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MyCache</span> <span class="token keyword">implements</span> <span class="token class-name">Cache</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">String</span> <span class="token function">getId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">putObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">,</span> <span class="token class-name">Object</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">removeObject</span><span class="token punctuation">(</span><span class="token class-name">Object</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function l(i,o){return s(),a("div",null,c)}const d=n(e,[["render",l],["__file","28.自定义缓存-Ehcache.html.vue"]]);export{d as default};
