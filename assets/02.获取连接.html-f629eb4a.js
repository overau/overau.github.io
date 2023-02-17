import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">JdbcTest</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 1、完整流程
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.定义要素</span>
        <span class="token class-name">String</span> driverName <span class="token operator">=</span> <span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://localhost:3306/student?useUnicode=true&amp;characterEncoding=utf8&amp;&amp;useSSL=false&amp;serverTimezone=GMT%2B8&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.加载驱动,实例化驱动</span>
        <span class="token class-name">Driver</span> driver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Driver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 3.注册驱动</span>
        <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">registerDriver</span><span class="token punctuation">(</span>driver<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 2、反射加载驱动
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span><span class="token punctuation">,</span> <span class="token class-name">ClassNotFoundException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.定义要素</span>
        <span class="token class-name">String</span> driverName <span class="token operator">=</span> <span class="token string">&quot;com.mysql.cj.jdbc.Driver&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://localhost:3306/student?useUnicode=true&amp;characterEncoding=utf8&amp;&amp;useSSL=false&amp;serverTimezone=GMT%2B8&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 2.加载驱动,实例化驱动。并注册驱动</span>
        <span class="token comment">// 仅仅需要jvm加载一下</span>
        <span class="token class-name">Class</span><span class="token punctuation">.</span><span class="token function">forName</span><span class="token punctuation">(</span>driverName<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 3、jvm主动加载驱动：SPI机制
     */</span>
    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test3</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">SQLException</span> <span class="token punctuation">{</span>
        <span class="token comment">// 1.定义要素</span>
        <span class="token class-name">String</span> url <span class="token operator">=</span> <span class="token string">&quot;jdbc:mysql://localhost:3306/student?useUnicode=true&amp;characterEncoding=utf8&amp;&amp;useSSL=false&amp;serverTimezone=GMT%2B8&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> username <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>
        <span class="token class-name">String</span> password <span class="token operator">=</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">;</span>

        <span class="token comment">// 4.获取连接</span>
        <span class="token class-name">Connection</span> connection <span class="token operator">=</span> <span class="token class-name">DriverManager</span><span class="token punctuation">.</span><span class="token function">getConnection</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> username<span class="token punctuation">,</span> password<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>connection<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name"><span class="token namespace">com<span class="token punctuation">.</span>mysql<span class="token punctuation">.</span>cj<span class="token punctuation">.</span>jdbc<span class="token punctuation">.</span></span>ConnectionImpl</span><span class="token annotation punctuation">@37d31475</span>

<span class="token class-name">Process</span> finished <span class="token keyword">with</span> <span class="token namespace">exit</span> code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们并没有加载驱动，但是获取到了MySQL的驱动实现。这是JDK主动加载的，涉及到SPI机制。</p>`,4),c=[p];function o(l,i){return s(),a("div",null,c)}const r=n(t,[["render",o],["__file","02.获取连接.html.vue"]]);export{r as default};
