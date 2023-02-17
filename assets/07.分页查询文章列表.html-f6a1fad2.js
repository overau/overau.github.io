import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<h2 id="需求分析" tabindex="-1"><a class="header-anchor" href="#需求分析" aria-hidden="true">#</a> 需求分析</h2><p>在首页和分类页面都需要查询文章列表。</p><ul><li>首页：查询所有的文章</li><li>分类页面：查询<code>对应分类</code>下的文章</li></ul><p>要求：①只能查询<code>正式发布</code>的文章 ②<code>置顶</code>的文章要显示在最前面</p><h2 id="接口设计" tabindex="-1"><a class="header-anchor" href="#接口设计" aria-hidden="true">#</a> 接口设计</h2><ul><li><p>请求地址：<code>/article/articleList</code></p></li><li><p>请求方式：<code>GET</code></p></li><li><p>请求参数</p><table><thead><tr><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>pageNum</td><td>页码</td></tr><tr><td>pageSize</td><td>每页数量</td></tr><tr><td>categoryId</td><td>分类id</td></tr></tbody></table></li><li><p>响应格式：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Java&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-23 23:20:11&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1000&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thumbnail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/31/948597e164614902ab1662ba8452e106.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity从入门到精通&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;viewCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;118&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操作成功&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="思路分析" tabindex="-1"><a class="header-anchor" href="#思路分析" aria-hidden="true">#</a> 思路分析</h2><ul><li>不传入分类id，查询所有文章；传入分类id，则查对应分类id下的文章。</li><li>需要返回分类名称和分类id，所以需要根据分类ID到<code>分类表</code>中查询分类名称。</li></ul><h2 id="mybatis-plus分页拦截器" tabindex="-1"><a class="header-anchor" href="#mybatis-plus分页拦截器" aria-hidden="true">#</a> Mybatis-Plus分页拦截器</h2><blockquote><p>3.4.0之后，不配置的话分页不生效。</p></blockquote><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MybatisPlusConfig</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * Mybatis-Plus分页拦截器: 3.4.0之后版本
     * <span class="token keyword">@return</span> MybatisPlusInterceptor
     */</span>
    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">MybatisPlusInterceptor</span> <span class="token function">mybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">MybatisPlusInterceptor</span> mybatisPlusInterceptor <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MybatisPlusInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mybatisPlusInterceptor<span class="token punctuation">.</span><span class="token function">addInnerInterceptor</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">PaginationInnerInterceptor</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> mybatisPlusInterceptor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="fastjson消息转化器配置" tabindex="-1"><a class="header-anchor" href="#fastjson消息转化器配置" aria-hidden="true">#</a> FastJson消息转化器配置</h2><blockquote><p>不配置的话，默认的时间格式不符合需求。</p></blockquote><p>配置类<code>WebConfig</code>中添加：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">configureMessageConverters</span><span class="token punctuation">(</span><span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">HttpMessageConverter</span><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span><span class="token punctuation">&gt;</span></span> converters<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    converters<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token function">fastJsonHttpMessageConverters</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 注入fastJsonHttpMessageConvert
 * <span class="token keyword">@return</span> HttpMessageConverter
 */</span>
<span class="token annotation punctuation">@Bean</span>
<span class="token keyword">public</span> <span class="token class-name">HttpMessageConverter</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">fastJsonHttpMessageConverters</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//1.需要定义一个Convert转换消息的对象</span>
    <span class="token class-name">FastJsonHttpMessageConverter</span> fastConverter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastJsonHttpMessageConverter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">FastJsonConfig</span> fastJsonConfig <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FastJsonConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    fastJsonConfig<span class="token punctuation">.</span><span class="token function">setSerializerFeatures</span><span class="token punctuation">(</span><span class="token class-name">SerializerFeature<span class="token punctuation">.</span>PrettyFormat</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置日期格式</span>
    fastJsonConfig<span class="token punctuation">.</span><span class="token function">setDateFormat</span><span class="token punctuation">(</span><span class="token string">&quot;yyyy-MM-dd HH:mm:ss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">SerializeConfig</span><span class="token punctuation">.</span>globalInstance<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">,</span> <span class="token class-name">ToStringSerializer</span><span class="token punctuation">.</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span>

    fastJsonConfig<span class="token punctuation">.</span><span class="token function">setSerializeConfig</span><span class="token punctuation">(</span><span class="token class-name">SerializeConfig</span><span class="token punctuation">.</span>globalInstance<span class="token punctuation">)</span><span class="token punctuation">;</span>
    fastConverter<span class="token punctuation">.</span><span class="token function">setFastJsonConfig</span><span class="token punctuation">(</span>fastJsonConfig<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> fastConverter<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="文章表新增字段" tabindex="-1"><a class="header-anchor" href="#文章表新增字段" aria-hidden="true">#</a> 文章表新增字段</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 所属分类名称(不属于数据库字段)
 */</span>
<span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span>exist <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">private</span> <span class="token class-name">String</span> categoryName<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="articlelistvo" tabindex="-1"><a class="header-anchor" href="#articlelistvo" aria-hidden="true">#</a> ArticleListVo</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ArticleListVo</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 文章id
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 标题
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> title<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 文章摘要
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> summary<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 所属分类名称
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> categoryName<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 缩略图
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> thumbnail<span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 访问量
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> viewCount<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Date</span> createTime<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="pagevo" tabindex="-1"><a class="header-anchor" href="#pagevo" aria-hidden="true">#</a> PageVo</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PageVo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">T</span><span class="token punctuation">&gt;</span></span> rows<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">Long</span> total<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="controller" tabindex="-1"><a class="header-anchor" href="#controller" aria-hidden="true">#</a> controller</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 分页查询文章列表
 * <span class="token keyword">@param</span> <span class="token parameter">pageNum</span> 页码
 * <span class="token keyword">@param</span> <span class="token parameter">pageSize</span> 每页大小
 * <span class="token keyword">@param</span> <span class="token parameter">categoryId</span> 分类id
 * <span class="token keyword">@return</span> 结果
 */</span>
<span class="token annotation punctuation">@GetMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/articleList&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span> <span class="token function">articleList</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">Long</span> categoryId<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> articleService<span class="token punctuation">.</span><span class="token function">articleList</span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">,</span> categoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="service" tabindex="-1"><a class="header-anchor" href="#service" aria-hidden="true">#</a> service</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Override</span>
<span class="token keyword">public</span> <span class="token class-name">ResponseResult</span> <span class="token function">articleList</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> pageNum<span class="token punctuation">,</span> <span class="token class-name">Integer</span> pageSize<span class="token punctuation">,</span> <span class="token class-name">Long</span> categoryId<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 封装查询条件</span>
    <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> queryWrapper <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LambdaQueryWrapper</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 正式发布的文章</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">Article</span><span class="token operator">::</span><span class="token function">getStatus</span><span class="token punctuation">,</span> <span class="token class-name">SystemConstants</span><span class="token punctuation">.</span><span class="token constant">ARTICLE_STATUS_NORMAL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分类ID</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">eq</span><span class="token punctuation">(</span><span class="token class-name">Objects</span><span class="token punctuation">.</span><span class="token function">nonNull</span><span class="token punctuation">(</span>categoryId<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> categoryId <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token class-name">Article</span><span class="token operator">::</span><span class="token function">getCategoryId</span><span class="token punctuation">,</span> categoryId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 置顶文章排序</span>
    queryWrapper<span class="token punctuation">.</span><span class="token function">orderByDesc</span><span class="token punctuation">(</span><span class="token class-name">Article</span><span class="token operator">::</span><span class="token function">getIsTop</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 分页查询</span>
    <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> page <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Page</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>pageNum<span class="token punctuation">,</span> pageSize<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">page</span><span class="token punctuation">(</span>page<span class="token punctuation">,</span> queryWrapper<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Article</span><span class="token punctuation">&gt;</span></span> articleList <span class="token operator">=</span> page<span class="token punctuation">.</span><span class="token function">getRecords</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 查询分类名称</span>
    articleList<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>article <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
        <span class="token class-name">Category</span> category <span class="token operator">=</span> categoryService<span class="token punctuation">.</span><span class="token function">getById</span><span class="token punctuation">(</span>article<span class="token punctuation">.</span><span class="token function">getCategoryId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        article<span class="token punctuation">.</span><span class="token function">setCategoryName</span><span class="token punctuation">(</span>category<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 封装vo</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArticleListVo</span><span class="token punctuation">&gt;</span></span> articleListVos <span class="token operator">=</span> <span class="token class-name">BeanCopyUtils</span><span class="token punctuation">.</span><span class="token function">copyBeanList</span><span class="token punctuation">(</span>articleList<span class="token punctuation">,</span> <span class="token class-name">ArticleListVo</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">PageVo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">ArticleListVo</span><span class="token punctuation">&gt;</span></span> pageVo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageVo</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>articleListVos<span class="token punctuation">,</span> page<span class="token punctuation">.</span><span class="token function">getTotal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> <span class="token class-name">ResponseResult</span><span class="token punctuation">.</span><span class="token function">okResult</span><span class="token punctuation">(</span>pageVo<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h3><p>访问接口：<code>127.0.0.1:7777/article/articleList?pageNum=1&amp;pageSize=3</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-23 23:20:11&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thumbnail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/31/948597e164614902ab1662ba8452e106.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity从入门到精通&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;viewCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;105&quot;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;PHP&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-17 14:58:37&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thumbnail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;sdad&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;viewCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;44&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操作成功&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问接口：<code>127.0.0.1:7777/article/articleList?pageNum=1&amp;pageSize=3&amp;categoryId=1</code></p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;rows&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token punctuation">{</span>
                <span class="token property">&quot;categoryName&quot;</span><span class="token operator">:</span> <span class="token string">&quot;java&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;createTime&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2022-01-23 23:20:11&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;summary&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity框架教程-Spring Security+JWT实现项目级前端分离认证授权&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;thumbnail&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://sg-blog-oss.oss-cn-beijing.aliyuncs.com/2022/01/31/948597e164614902ab1662ba8452e106.png&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;SpringSecurity从入门到精通&quot;</span><span class="token punctuation">,</span>
                <span class="token property">&quot;viewCount&quot;</span><span class="token operator">:</span> <span class="token string">&quot;105&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;msg&quot;</span><span class="token operator">:</span> <span class="token string">&quot;操作成功&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","07.分页查询文章列表.html.vue"]]);export{r as default};
