import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const p={},t=e(`<h2 id="动态代理角色" tabindex="-1"><a class="header-anchor" href="#动态代理角色" aria-hidden="true">#</a> 动态代理角色</h2><p>动态代理和静态代理角色一样</p><ul><li>接口（抽象角色）</li><li>真实角色</li><li>代理角色</li><li>客户端访问代理角色</li></ul><p>动态代理的代理类是<mark>动态生成</mark>的，不是我们直接写好的！</p><h2 id="动态代理分类" tabindex="-1"><a class="header-anchor" href="#动态代理分类" aria-hidden="true">#</a> 动态代理分类</h2><ul><li><p>基于接口的动态代理：JDK动态代理</p></li><li><p>基于类的动态代理：cglib</p></li><li><p>Java字节码：javasist</p></li></ul><blockquote><p>需要了解两个类</p></blockquote><ul><li>Proxy 代理</li><li>InvocationHandle 调用处理程序</li></ul><h2 id="接口-抽象角色" tabindex="-1"><a class="header-anchor" href="#接口-抽象角色" aria-hidden="true">#</a> 接口（抽象角色）</h2><p>Rent.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 出租房屋
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="真实角色" tabindex="-1"><a class="header-anchor" href="#真实角色" aria-hidden="true">#</a> 真实角色</h2><p>Host.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 * 房东
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Host</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房东要出租房子！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="自动生成代理类" tabindex="-1"><a class="header-anchor" href="#自动生成代理类" aria-hidden="true">#</a> 自动生成代理类</h2><p>ProxyInvocationHandler.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 * 用这个类，自动生成代理类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 被代理的接口
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Rent</span> rent<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setRent</span><span class="token punctuation">(</span><span class="token class-name">Rent</span> rent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>rent <span class="token operator">=</span> rent<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成代理对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>rent<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理代理实例，并返回结果
     * <span class="token keyword">@param</span> <span class="token parameter">proxy</span>
     * <span class="token keyword">@param</span> <span class="token parameter">method</span>
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Throwable</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>

        <span class="token comment">//动态代理的本质，就是使用反射机制实现</span>
        <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>rent<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介带看房子&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收中介费&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="客户端通过自动生成代理类实现" tabindex="-1"><a class="header-anchor" href="#客户端通过自动生成代理类实现" aria-hidden="true">#</a> 客户端通过自动生成代理类实现</h2><p>Client.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo03</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//真实角色</span>
        <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">//代理角色：现在没有</span>
        <span class="token class-name">ProxyInvocationHandler</span> pih <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//通过调用程序处理角色来处理我们要调用的接口对象</span>
        pih<span class="token punctuation">.</span><span class="token function">setRent</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token doc-comment comment">/**
         * 这里的proxy就是动态生成的，我们并没有写
         */</span>
        <span class="token class-name">Rent</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">Rent</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>把自动生成代理的类参数化，形成一个工具类</p></blockquote><p>ProxyInvocationHandler.java</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo04</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">InvocationHandler</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Method</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span>reflect<span class="token punctuation">.</span></span><span class="token class-name">Proxy</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 * 用这个类，自动生成代理类
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProxyInvocationHandler</span> <span class="token keyword">implements</span> <span class="token class-name">InvocationHandler</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 被代理的接口
     */</span>
    <span class="token keyword">private</span> <span class="token class-name">Object</span> target<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setTarget</span><span class="token punctuation">(</span><span class="token class-name">Object</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>target <span class="token operator">=</span> target<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 生成代理对象
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token class-name">Proxy</span><span class="token punctuation">.</span><span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getClassLoader</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>target<span class="token punctuation">.</span><span class="token function">getClass</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getInterfaces</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 处理代理实例，并返回结果
     * <span class="token keyword">@param</span> <span class="token parameter">proxy</span>
     * <span class="token keyword">@param</span> <span class="token parameter">method</span>
     * <span class="token keyword">@param</span> <span class="token parameter">args</span>
     * <span class="token keyword">@return</span>
     * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">Throwable</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span> <span class="token class-name">Method</span> method<span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Throwable</span> <span class="token punctuation">{</span>

        <span class="token function">log</span><span class="token punctuation">(</span>method<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//动态代理的本质，就是使用反射机制实现</span>
        <span class="token class-name">Object</span> result <span class="token operator">=</span> method<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">String</span> msg<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;[debug]***执行了&quot;</span> <span class="token operator">+</span> msg <span class="token operator">+</span> <span class="token string">&quot;方法***&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo04</span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo02<span class="token punctuation">.</span></span><span class="token class-name">UserService</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo02<span class="token punctuation">.</span></span><span class="token class-name">UserServiceImpl</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//这是真实角色</span>
        <span class="token class-name">UserServiceImpl</span> userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserServiceImpl</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//代理角色，不存在</span>
        <span class="token class-name">ProxyInvocationHandler</span> pih <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProxyInvocationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//设置要代理的对象</span>
        pih<span class="token punctuation">.</span><span class="token function">setTarget</span><span class="token punctuation">(</span>userService<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//动态生成代理类</span>
        <span class="token class-name">UserService</span> proxy <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">UserService</span><span class="token punctuation">)</span> pih<span class="token punctuation">.</span><span class="token function">getProxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        proxy<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态代理的好处" tabindex="-1"><a class="header-anchor" href="#动态代理的好处" aria-hidden="true">#</a> 动态代理的好处</h2><ul><li>可以使真实角色的操作更加纯粹！不用去关注一些公共的业务！</li><li>公共业务也就交给代理角色！实现了业务的分工！</li><li>公共业务发生扩展的时候，方便集中管理！</li><li>一个动态代理类代理的是接口，一般就是对应的一类任务！</li><li>一个动态代理可以代理多个类，只要是实现了同一个接口即可！</li></ul><h2 id="invocationhandler接口" tabindex="-1"><a class="header-anchor" href="#invocationhandler接口" aria-hidden="true">#</a> InvocationHandler接口</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">InvocationHandlerInvocationHandler</span>是由代理实例的调用处理程序实现的接口 。 
每个代理实例都有一个关联的调用处理程序。 当在代理实例上调用方法时，方法调用将被编码并分派到其调用处理程序的invoke方法。 

    
<span class="token class-name">Object</span> <span class="token function">invoke</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">,</span>
              方法 method<span class="token punctuation">,</span>
              <span class="token class-name">Object</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span>
       <span class="token keyword">throws</span> <span class="token class-name">Throwable</span>处理代理实例上的方法调用并返回结果。 当在与之关联的代理实例上调用方法时，将在调用处理程序中调用此方法。 
参数 
proxy <span class="token operator">-</span> 调用该方法的代理实例 
method <span class="token operator">-</span>所述方法对应于调用代理实例上的接口方法的实例。 方法对象的声明类将是该方法声明的接口，它可以是代理类继承该方法的代理接口的超级接口。 
args <span class="token operator">-</span>包含的方法调用传递代理实例的参数值的对象的阵列，或<span class="token keyword">null</span>如果接口方法没有参数。 原始类型的参数包含在适当的原始包装器类的实例中，例如<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Integer</span>或<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Boolean</span> 。 
结果 
从代理实例上的方法调用返回的值。 如果接口方法的声明返回类型是原始类型，则此方法返回的值必须是对应的基本包装类的实例<span class="token punctuation">;</span> 否则，它必须是可声明返回类型的类型。 如果此方法返回的值是<span class="token keyword">null</span>和接口方法的返回类型是基本类型，那么<span class="token class-name">NullPointerException</span>将由代理实例的方法调用抛出。 如上所述，如果此方法返回的值，否则不会与接口方法的声明的返回类型兼容，一个<span class="token class-name">ClassCastException</span>将代理实例的方法调用将抛出。 
异常 
<span class="token class-name">Throwable</span> <span class="token operator">-</span> 从代理实例上的方法调用抛出的异常。 异常类型必须可以分配给接口方法的<span class="token keyword">throws</span>子句中声明的任何异常类型<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span>检查的异常类型<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>RuntimeException</span>或<span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Error</span> 。 如果检查的异常是由这种方法是不分配给任何的中声明的异常类型<span class="token keyword">throws</span>接口方法的子句，则一个<span class="token class-name">UndeclaredThrowableException</span>包含有由该方法抛出的异常将通过在方法调用抛出代理实例。    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="proxy类" tabindex="-1"><a class="header-anchor" href="#proxy类" aria-hidden="true">#</a> Proxy类</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxy</span>
<span class="token keyword">extends</span> <span class="token class-name">Object</span>
<span class="token keyword">implements</span> <span class="token class-name">SerializableProxy</span>提供了创建动态代理类和实例的静态方法，它也是由这些方法创建的所有动态代理类的超类。 

<span class="token class-name">Modifier</span> and <span class="token class-name">Type</span> <span class="token class-name">Method</span> and <span class="token class-name">Description</span> 
<span class="token keyword">static</span> <span class="token class-name">InvocationHandler</span> <span class="token function">getInvocationHandler</span><span class="token punctuation">(</span><span class="token class-name">Object</span> proxy<span class="token punctuation">)</span> 
返回指定代理实例的调用处理程序。  
<span class="token keyword">static</span> 类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> <span class="token function">getProxyClass</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span> 类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> interfaces<span class="token punctuation">)</span> 
给出类加载器和接口数组的代理类的 <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>Class</span>对象。  
<span class="token keyword">static</span> <span class="token keyword">boolean</span> <span class="token function">isProxyClass</span><span class="token punctuation">(</span>类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span> cl<span class="token punctuation">)</span> 
如果且仅当使用 getProxyClass方法或 newProxyInstance方法将指定的类动态生成为代理类时，则返回<span class="token boolean">true</span>。  
<span class="token keyword">static</span> <span class="token class-name">Object</span> <span class="token function">newProxyInstance</span><span class="token punctuation">(</span><span class="token class-name">ClassLoader</span> loader<span class="token punctuation">,</span> 类<span class="token generics"><span class="token punctuation">&lt;</span><span class="token operator">?</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">[</span><span class="token punctuation">]</span> interfaces<span class="token punctuation">,</span> <span class="token class-name">InvocationHandler</span> h<span class="token punctuation">)</span> 
返回指定接口的代理类的实例，该接口将方法调用分派给指定的调用处理程序。  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),c=[t];function o(l,i){return s(),a("div",null,c)}const k=n(p,[["render",o],["__file","18.动态代理详解.html.vue"]]);export{k as default};
