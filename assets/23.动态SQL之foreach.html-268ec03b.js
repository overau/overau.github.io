import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const p={},e=t(`<h3 id="_1、sql片段" tabindex="-1"><a class="header-anchor" href="#_1、sql片段" aria-hidden="true">#</a> 1、SQL片段</h3><p>公共的部分抽取出来复用。</p><h4 id="sql和include标签" tabindex="-1"><a class="header-anchor" href="#sql和include标签" aria-hidden="true">#</a> sql和include标签</h4><p>mapper文件修改</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--复用sql--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>sql</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>if-title-author<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>title != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        title = #{title}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>if</span> <span class="token attr-name">test</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>author != null<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        and author = #{author}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>if</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>sql</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryBlog<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Blog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from blog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>include</span> <span class="token attr-name">refid</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>if-title-author<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>测试结果正常。</p><h4 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> 注意事项</h4><ul><li>最好基于单表来定义SQL片段！</li><li>不要存在where标签</li></ul><h3 id="_2、foreach" tabindex="-1"><a class="header-anchor" href="#_2、foreach" aria-hidden="true">#</a> 2、foreach</h3><blockquote><p>动态 SQL 的另一个常见使用场景是对集合进行遍历（尤其是在构建 IN 条件语句的时候）。foreach 元素的功能非常强大，它允许你指定一个集合，声明可以在元素体内使用的集合项（item）和索引（index）变量。它也允许你指定开头与结尾的字符串以及集合项迭代之间的分隔符。这个元素也不会错误地添加多余的分隔符，看它多智能！</p><p>提示：你可以将任何可迭代对象（如 List、Set 等）、Map 对象或者数组对象作为集合参数传递给 foreach。当使用可迭代对象或者数组时，index 是当前迭代的序号，item 的值是本次迭代获取到的元素。当使用 Map 对象（或者 Map.Entry 对象的集合）时，index 是键，item 是值。</p></blockquote><h4 id="接口类blogmapper-java新增方法" tabindex="-1"><a class="header-anchor" href="#接口类blogmapper-java新增方法" aria-hidden="true">#</a> 接口类BlogMapper.java新增方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * 查询第1-2-3记录的博客
 * <span class="token keyword">@param</span> <span class="token parameter">map</span> 
 * <span class="token keyword">@return</span> 
 */</span>
<span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Blog</span><span class="token punctuation">&gt;</span></span> <span class="token function">queryBlogByForEach</span><span class="token punctuation">(</span><span class="token class-name">Map</span> map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="mapper文件blogmapper-xml修改" tabindex="-1"><a class="header-anchor" href="#mapper文件blogmapper-xml修改" aria-hidden="true">#</a> mapper文件BlogMapper.xml修改</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token comment">&lt;!--拼接select * from blog where 1 = 1 and (id=1 or id=2 or id=3)--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>queryBlogByForEach<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>map<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>blog<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    select * from blog
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>where</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>foreach</span> <span class="token attr-name">collection</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ids<span class="token punctuation">&quot;</span></span> <span class="token attr-name">item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>id<span class="token punctuation">&quot;</span></span> <span class="token attr-name">open</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>and (<span class="token punctuation">&quot;</span></span> <span class="token attr-name">close</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>)<span class="token punctuation">&quot;</span></span> <span class="token attr-name">separator</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>or<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            id = #{id}
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>foreach</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>where</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * foreach遍历
 */</span>
<span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test05</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">BlogMapper</span> blogMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">BlogMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Object</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token doc-comment comment">/**
     * 把ids类传给map
     */</span>
    <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> ids <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    ids<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;ids&quot;</span><span class="token punctuation">,</span>ids<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">Blog</span><span class="token punctuation">&gt;</span></span> blogs <span class="token operator">=</span> blogMapper<span class="token punctuation">.</span><span class="token function">queryBlogByForEach</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Blog</span> blog <span class="token operator">:</span> blogs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>blog<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token comment">// ids类为空。查出所有数据</span>
<span class="token class-name">Opening</span> <span class="token constant">JDBC</span> <span class="token class-name">Connection</span>
<span class="token class-name">Created</span> connection <span class="token number">2053591126.</span>
<span class="token operator">==</span><span class="token operator">&gt;</span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from blog 
    
<span class="token comment">// ids类传入id=1。查出id=1的数据</span>
<span class="token class-name">Opening</span> <span class="token constant">JDBC</span> <span class="token class-name">Connection</span>
<span class="token class-name">Created</span> connection <span class="token number">681094281.</span>
<span class="token operator">==</span><span class="token operator">&gt;</span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from blog <span class="token constant">WHERE</span> <span class="token punctuation">(</span> id <span class="token operator">=</span> <span class="token operator">?</span> <span class="token punctuation">)</span> 

<span class="token comment">// ids类传入id=1,2,3。查出id=1 or id=2 or id=3的数据   </span>
<span class="token class-name">Opening</span> <span class="token constant">JDBC</span> <span class="token class-name">Connection</span>
<span class="token class-name">Created</span> connection <span class="token number">681094281.</span>
<span class="token operator">==</span><span class="token operator">&gt;</span>  <span class="token class-name">Preparing</span><span class="token operator">:</span> select <span class="token operator">*</span> from blog <span class="token constant">WHERE</span> <span class="token punctuation">(</span> id <span class="token operator">=</span> <span class="token operator">?</span> or id <span class="token operator">=</span> <span class="token operator">?</span> or id <span class="token operator">=</span> <span class="token operator">?</span> <span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、总结" tabindex="-1"><a class="header-anchor" href="#_3、总结" aria-hidden="true">#</a> 3、总结</h3><p>动态SQL就是在拼接SQL语句，我们只要保证SQL的正确性。按照SQL的格式，去排列组合就行了。</p><h3 id="_4、建议" tabindex="-1"><a class="header-anchor" href="#_4、建议" aria-hidden="true">#</a> 4、建议</h3><p>先在MySQL写出完整的sql，再去修改对应的动态SQL。</p>`,22),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","23.动态SQL之foreach.html.vue"]]);export{r as default};
