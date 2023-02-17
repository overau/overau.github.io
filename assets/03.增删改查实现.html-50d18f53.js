import{_ as n,V as s,W as a,X as t}from"./framework-a569e214.js";const e={},p=t(`<h3 id="_1、namespace" tabindex="-1"><a class="header-anchor" href="#_1、namespace" aria-hidden="true">#</a> 1、namespace</h3><p>namespace中的包名要和Dao/Mapper接口的包名一致!</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token comment">&lt;!--包名要和Dao/Mapper接口的包名一致--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>UserMapper接口</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 获取所有用户
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、select" tabindex="-1"><a class="header-anchor" href="#_2、select" aria-hidden="true">#</a> 2、select</h3><p>查询语句。</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="id" tabindex="-1"><a class="header-anchor" href="#id" aria-hidden="true">#</a> id</h4><blockquote><p>对应namespace接口中的方法名。必须完全一致。在命名空间中唯一的标识符，可以被用来引用这条语句。</p></blockquote><h4 id="resulttype" tabindex="-1"><a class="header-anchor" href="#resulttype" aria-hidden="true">#</a> resultType</h4><blockquote><p>sql语句执行的返回值类型。class，基本类型。期望从这条语句中返回结果的类全限定名或别名。 注意，如果返回的是集合，那应该<mark>设置为集合包含的类型</mark>，而不是集合本身的类型。 <mark>resultType 和 resultMap 之间只能同时使用一个</mark>。</p></blockquote><h4 id="parametertype" tabindex="-1"><a class="header-anchor" href="#parametertype" aria-hidden="true">#</a> parameterType</h4><blockquote><p>查询传入的参数类型</p></blockquote><h4 id="usermapper-java接口中新增方法" tabindex="-1"><a class="header-anchor" href="#usermapper-java接口中新增方法" aria-hidden="true">#</a> UserMapper.java接口中新增方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取所有用户
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据传入ID查用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usermapper-xml文件中新增" tabindex="-1"><a class="header-anchor" href="#usermapper-xml文件中新增" aria-hidden="true">#</a> UserMapper.xml文件中新增</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--查询所有用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--根据传入ID查询用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试" tabindex="-1"><a class="header-anchor" href="#测试" aria-hidden="true">#</a> 测试</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test02</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>

    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果" tabindex="-1"><a class="header-anchor" href="#结果" aria-hidden="true">#</a> 结果</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">User</span><span class="token punctuation">{</span>id<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token char">&#39;张三&#39;</span><span class="token punctuation">,</span> pwd<span class="token operator">=</span><span class="token char">&#39;222333&#39;</span><span class="token punctuation">}</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、insert" tabindex="-1"><a class="header-anchor" href="#_3、insert" aria-hidden="true">#</a> 3、insert</h3><blockquote><p>插入数据</p></blockquote><h4 id="usermapper-java接口中新增一个方法" tabindex="-1"><a class="header-anchor" href="#usermapper-java接口中新增一个方法" aria-hidden="true">#</a> UserMapper.java接口中新增一个方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取所有用户
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据传入ID查用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 插入一个用户
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usermapper-xml文件中新增-1" tabindex="-1"><a class="header-anchor" href="#usermapper-xml文件中新增-1" aria-hidden="true">#</a> UserMapper.xml文件中新增</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--查询所有用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--根据传入ID查询用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--插入用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into user (id,name,pwd) values (#{id},#{name},#{pwd})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-1" tabindex="-1"><a class="header-anchor" href="#测试-1" aria-hidden="true">#</a> 测试</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test03</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">addUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span><span class="token string">&quot;王五&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;555555&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 提交事务</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意点" tabindex="-1"><a class="header-anchor" href="#注意点" aria-hidden="true">#</a> 注意点</h4><blockquote><p><mark>增删改必须提交事务，否则sql执行不成功。</mark></p></blockquote><h3 id="_4、update" tabindex="-1"><a class="header-anchor" href="#_4、update" aria-hidden="true">#</a> 4、update</h3><h4 id="usermapper-java接口中新增一个方法-1" tabindex="-1"><a class="header-anchor" href="#usermapper-java接口中新增一个方法-1" aria-hidden="true">#</a> UserMapper.java接口中新增一个方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取所有用户
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据传入ID查用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 插入一个用户
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 修改用户
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usermapper-xml文件中新增-2" tabindex="-1"><a class="header-anchor" href="#usermapper-xml文件中新增-2" aria-hidden="true">#</a> UserMapper.xml文件中新增</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--查询所有用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--根据传入ID查询用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--插入用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into user (id,name,pwd) values (#{id},#{name},#{pwd})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--修改用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        update user set name=#{name},pwd=#{pwd} where id=#{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-2" tabindex="-1"><a class="header-anchor" href="#测试-2" aria-hidden="true">#</a> 测试</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test04</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userMapper<span class="token punctuation">.</span><span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token string">&quot;法外狂徒张三&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;333333&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 提交事务</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    sqlSession<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意点-1" tabindex="-1"><a class="header-anchor" href="#注意点-1" aria-hidden="true">#</a> 注意点</h4><blockquote><p><mark>增删改必须提交事务，否则sql执行不成功。</mark></p></blockquote><h3 id="_5、delete" tabindex="-1"><a class="header-anchor" href="#_5、delete" aria-hidden="true">#</a> 5、delete</h3><h4 id="usermapper-java接口中新增一个方法-2" tabindex="-1"><a class="header-anchor" href="#usermapper-java接口中新增一个方法-2" aria-hidden="true">#</a> UserMapper.java接口中新增一个方法</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">UserMapper</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 获取所有用户
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> <span class="token function">getUserList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据传入ID查用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token class-name">User</span> <span class="token function">getUserById</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 插入一个用户
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">addUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 修改用户
     * <span class="token keyword">@param</span> <span class="token parameter">user</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">updateUser</span><span class="token punctuation">(</span><span class="token class-name">User</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token doc-comment comment">/**
     * 根据ID删除用户
     * <span class="token keyword">@param</span> <span class="token parameter">id</span>
     * <span class="token keyword">@return</span>
     */</span>
    <span class="token keyword">int</span> <span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token keyword">int</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="usermapper-xml文件中新增-3" tabindex="-1"><a class="header-anchor" href="#usermapper-xml文件中新增-3" aria-hidden="true">#</a> UserMapper.xml文件中新增</h4><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token prolog">&lt;?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot; ?&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">mapper</span>
        <span class="token name">PUBLIC</span> <span class="token string">&quot;-//mybatis.org//DTD Mapper 3.0//EN&quot;</span>
        <span class="token string">&quot;http://mybatis.org/dtd/mybatis-3-mapper.dtd&quot;</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!--绑定一个对应的dao/mapper接口--&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>mapper</span> <span class="token attr-name">namespace</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.dao.UserMapper<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--查询所有用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserList<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--根据传入ID查询用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getUserById<span class="token punctuation">&quot;</span></span> <span class="token attr-name">resultType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        select * from user where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--插入用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>insert</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        insert into user (id,name,pwd) values (#{id},#{name},#{pwd})
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>insert</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--修改用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>update</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>updateUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>com.kuang.pojo.User<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        update user set name=#{name},pwd=#{pwd} where id=#{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>update</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!--根据ID删除用户--&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>delete</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>deleteUser<span class="token punctuation">&quot;</span></span> <span class="token attr-name">parameterType</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>int<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        delete from user where id = #{id}
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>delete</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>mapper</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="测试-3" tabindex="-1"><a class="header-anchor" href="#测试-3" aria-hidden="true">#</a> 测试</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test05</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">SqlSession</span> sqlSession <span class="token operator">=</span> <span class="token class-name">MybatisUtils</span><span class="token punctuation">.</span><span class="token function">getSqlSession</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">UserMapper</span> userMapper <span class="token operator">=</span> sqlSession<span class="token punctuation">.</span><span class="token function">getMapper</span><span class="token punctuation">(</span><span class="token class-name">UserMapper</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> i <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">deleteUser</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 提交事务</span>
    sqlSession<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="结果-1" tabindex="-1"><a class="header-anchor" href="#结果-1" aria-hidden="true">#</a> 结果</h4><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token number">1</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="注意点-2" tabindex="-1"><a class="header-anchor" href="#注意点-2" aria-hidden="true">#</a> 注意点</h4><blockquote><p><mark>增删改必须提交事务，否则sql执行不成功。</mark></p></blockquote>`,52),c=[p];function l(o,i){return s(),a("div",null,c)}const r=n(e,[["render",l],["__file","03.增删改查实现.html.vue"]]);export{r as default};
