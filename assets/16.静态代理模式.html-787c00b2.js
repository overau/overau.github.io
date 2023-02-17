import{_ as n,V as s,W as a,X as e}from"./framework-a569e214.js";const t={},p=e(`<p>为什么要学习代理模式？因为这就是Spring AOP的底层！</p><h2 id="代理模式的分类" tabindex="-1"><a class="header-anchor" href="#代理模式的分类" aria-hidden="true">#</a> 代理模式的分类</h2><ul><li><p>静态代理</p></li><li><p>动态代理</p></li></ul><h2 id="静态代理" tabindex="-1"><a class="header-anchor" href="#静态代理" aria-hidden="true">#</a> 静态代理</h2><p>角色分析：</p><ul><li>抽象角色：一般会使用接口或者抽象类来解决</li><li>真实角色：被代理的角色</li><li>代理角色：代理真实角色。代理真实角色后，我们一般会做一些附属操作！</li><li>客户：访问代理对象的人！</li></ul><p>步骤：</p><h3 id="接口-抽象角色" tabindex="-1"><a class="header-anchor" href="#接口-抽象角色" aria-hidden="true">#</a> 接口（抽象角色）</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * 出租房屋
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="真实角色" tabindex="-1"><a class="header-anchor" href="#真实角色" aria-hidden="true">#</a> 真实角色</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 * 房东
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Host</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;房东要出租房子！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代理角色" tabindex="-1"><a class="header-anchor" href="#代理角色" aria-hidden="true">#</a> 代理角色</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Proxy</span> <span class="token keyword">implements</span> <span class="token class-name">Rent</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token class-name">Host</span> host<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span><span class="token class-name">Host</span> host<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>host <span class="token operator">=</span> host<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 帮房东租房子
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        host<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">hetong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 看房
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">seeHouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;中介带你看房！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 签合同
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hetong</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;签租赁合同！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 收中介费
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">fare</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;收中介费！&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端访问代理角色" tabindex="-1"><a class="header-anchor" href="#客户端访问代理角色" aria-hidden="true">#</a> 客户端访问代理角色</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">com<span class="token punctuation">.</span>kuang<span class="token punctuation">.</span>demo01</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> Administrator
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">//房东要出租房子</span>
        <span class="token class-name">Host</span> host <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Host</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 代理，中介帮助房东租房子
         * 代理角色一般会有一些附属操作
         */</span>
        <span class="token class-name">Proxy</span> proxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token doc-comment comment">/**
         * 你不用面对房东，直接找中介
         */</span>
        proxy<span class="token punctuation">.</span><span class="token function">rent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="代理模式的好处" tabindex="-1"><a class="header-anchor" href="#代理模式的好处" aria-hidden="true">#</a> 代理模式的好处</h2><ul><li>1、可以使真实角色的操作更加纯粹！不用去关注一些公共的业务！</li><li>2、公共业务也就交给代理角色！实现了业务的分工！</li><li>3、公共业务发生扩展的时候，方便集中管理！</li></ul><h2 id="静态代理的缺点" tabindex="-1"><a class="header-anchor" href="#静态代理的缺点" aria-hidden="true">#</a> 静态代理的缺点</h2><p>一个真实角色就会产生一个代理角色！代码量会翻倍！开发效率变低！</p>`,19),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","16.静态代理模式.html.vue"]]);export{d as default};
